const express = require('express');
const router = new express.Router({ mergeParams: true });
const Jobs = require('../models/jobs-model');
const AddJobViewModel = require('./add-job-view-model');
const progression = require('../models/progression');
const moment = require('moment');
const i18n = require('i18n');

function parseDeadline(deadlineString) {
  const dateFormat = !deadlineString.includes('-') ? 'DD/MM/YYYY' : undefined;
  return deadlineString ? moment(deadlineString, dateFormat).format() : null;
}

function validateDeadline(deadline, req) {
  if (!deadline) {
    return;
  }

  if (deadline.includes('-')) {
    req.checkBody('deadline', 'Deadline should be in "dd/mm/yyyy" format').isDate();
  } else {
    req.checkBody('deadline', 'Deadline should be in "dd/mm/yyyy" format')
      .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/);
  }
}

router.get('/new', (req, res) => {
  res.render('add-job', new AddJobViewModel(req.params.accountId, req.body));
});

router.post('/new', (req, res, next) => {
  const basePath = req.app.locals.basePath;
  const accountId = req.params.accountId;
  const deadline = req.body.deadline;
  req.checkBody('title', 'Job title is required').notEmpty();
  validateDeadline(deadline, req);

  if (req.validationErrors()) {
    return res.render('add-job',
      new AddJobViewModel(accountId, req.body, req.validationErrors()));
  }

  const jobData = Object.assign({}, req.body, {
    accountId,
    deadline: parseDeadline(deadline),
    status: progression[0],
    status_sort_index: 0,
  });

  return new Jobs(jobData).save()
    .then((job) => res.redirect(`${basePath}/${accountId}?focus=${job.id}`))
    .catch((err) => next(err));
});

router.patch('/:jobId', (req, res, next) => {
  const basePath = req.app.locals.basePath;
  const accountId = req.params.accountId;
  const jobId = req.params.jobId;
  const updateData = req.body;
  const sort = req.query.sort;
  const filter = req.query.filter;

  if (updateData.status) {
    updateData.status_sort_index = progression.indexOf(updateData.status) || 0;
  }

  return new Jobs({ id: jobId })
    .save(updateData, { method: 'update', patch: true })
    .then((job) => {
      const queryParams = `sort=${sort}&filter=${filter}&focus=${job.id}#${job.id}`;
      res.redirect(`${basePath}/${accountId}?${queryParams}`);
    })
    .catch((err) => next(err));
});

router.delete('/:jobId', (req, res, next) => {
  const basePath = req.app.locals.basePath;
  const accountId = req.params.accountId;
  const jobId = req.params.jobId;
  return new Jobs({ id: jobId })
    .fetch()
    .then(job => {
      // eslint-disable-next-line no-underscore-dangle
      const description = i18n.__('confirmation.jobRemoved', { jobTitle: job.get('title') });
      return job.destroy()
        .then(() => res.redirect(
          `${basePath}/${accountId}/confirmation?description=${description}`
        ));
    })
    .catch((err) => next(err));
});

module.exports = router;
