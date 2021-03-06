const moment = require('moment');
const day = moment.duration(1, 'd');
const week = moment.duration(1, 'w');
const fortnight = moment.duration(2, 'w');
const month = moment.duration(1, 'M');

exports.seed = function (knex) {
  return knex('jobs').del() // Deletes ALL existing entries

    .then(function () {
      return knex('jobs').insert({
        id: '100',
        accountId: 'ALOT-123',
        title: 'Title-100',
        employer: 'Employer-100',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '101',
        accountId: 'ALOT-123',
        title: 'Title-101',
        employer: 'Employer-101',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '102',
        accountId: 'ALOT-123',
        title: 'Title-102',
        employer: 'Employer-102',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '103',
        accountId: 'ALOT-123',
        title: 'Title-103',
        employer: 'Employer-103',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '104',
        accountId: 'ALOT-123',
        title: 'Title-104',
        employer: 'Employer-104',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '105',
        accountId: 'ALOT-123',
        title: 'Title-105',
        employer: 'Employer-105',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '106',
        accountId: 'ALOT-123',
        title: 'Title-106',
        employer: 'Employer-106',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '107',
        accountId: 'ALOT-123',
        title: 'Title-107',
        employer: 'Employer-107',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '108',
        accountId: 'ALOT-123',
        title: 'Title-108',
        employer: 'Employer-108',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '109',
        accountId: 'ALOT-123',
        title: 'Title-109',
        employer: 'Employer-109',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '110',
        accountId: 'ALOT-123',
        title: 'Title-110',
        employer: 'Employer-110',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '111',
        accountId: 'ALOT-123',
        title: 'Title-111',
        employer: 'Employer-111',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '112',
        accountId: 'ALOT-123',
        title: 'Title-112',
        employer: 'Employer-112',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '113',
        accountId: 'ALOT-123',
        title: 'Title-113',
        employer: 'Employer-113',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '114',
        accountId: 'ALOT-123',
        title: 'Title-114',
        employer: 'Employer-114',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '115',
        accountId: 'ALOT-123',
        title: 'Title-115',
        employer: 'Employer-115',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '116',
        accountId: 'ALOT-123',
        title: 'Title-116',
        employer: 'Employer-116',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '117',
        accountId: 'ALOT-123',
        title: 'Title-117',
        employer: 'Employer-117',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '118',
        accountId: 'ALOT-123',
        title: 'Title-118',
        employer: 'Employer-118',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '119',
        accountId: 'ALOT-123',
        title: 'Title-119',
        employer: 'Employer-119',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '120',
        accountId: 'ALOT-123',
        title: 'Title-120',
        employer: 'Employer-120',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '121',
        accountId: 'ALOT-123',
        title: 'Title-121',
        employer: 'Employer-121',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '122',
        accountId: 'ALOT-123',
        title: 'Title-122',
        employer: 'Employer-122',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '123',
        accountId: 'ALOT-123',
        title: 'Title-123',
        employer: 'Employer-123',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '124',
        accountId: 'ALOT-123',
        title: 'Title-124',
        employer: 'Employer-124',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '125',
        accountId: 'ALOT-123',
        title: 'Title-125',
        employer: 'Employer-125',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '126',
        accountId: 'ALOT-123',
        title: 'Title-126',
        employer: 'Employer-126',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '127',
        accountId: 'ALOT-123',
        title: 'Title-127',
        employer: 'Employer-127',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '128',
        accountId: 'ALOT-123',
        title: 'Title-128',
        employer: 'Employer-128',
        created_at: moment().subtract(week).add(day),
        updated_at: moment().subtract(week).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interested',
        status_sort_index: 0,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '129',
        accountId: 'ALOT-123',
        title: 'Title-129',
        employer: 'Employer-129',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'applied',
        status_sort_index: 1,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '130',
        accountId: 'ALOT-123',
        title: 'Title-130',
        employer: 'Employer-130',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'applied',
        status_sort_index: 1,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '131',
        accountId: 'ALOT-123',
        title: 'Title-131',
        employer: 'Employer-131',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'applied',
        status_sort_index: 1,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '132',
        accountId: 'ALOT-123',
        title: 'Title-132',
        employer: 'Employer-132',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'applied',
        status_sort_index: 1,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '133',
        accountId: 'ALOT-123',
        title: 'Title-133',
        employer: 'Employer-133',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'applied',
        status_sort_index: 1,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '134',
        accountId: 'ALOT-123',
        title: 'Title-134',
        employer: 'Employer-134',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'applied',
        status_sort_index: 1,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '135',
        accountId: 'ALOT-123',
        title: 'Title-135',
        employer: 'Employer-135',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'applied',
        status_sort_index: 1,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '136',
        accountId: 'ALOT-123',
        title: 'Title-136',
        employer: 'Employer-136',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'applied',
        status_sort_index: 1,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '137',
        accountId: 'ALOT-123',
        title: 'Title-137',
        employer: 'Employer-137',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'applied',
        status_sort_index: 1,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '138',
        accountId: 'ALOT-123',
        title: 'Title-138',
        employer: 'Employer-138',
        created_at: moment().subtract(week).add(day),
        updated_at: moment().subtract(week).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'applied',
        status_sort_index: 1,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '139',
        accountId: 'ALOT-123',
        title: 'Title-139',
        employer: 'Employer-139',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interview',
        status_sort_index: 2,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '140',
        accountId: 'ALOT-123',
        title: 'Title-140',
        employer: 'Employer-140',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interview',
        status_sort_index: 2,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '141',
        accountId: 'ALOT-123',
        title: 'Title-141',
        employer: 'Employer-141',
        created_at: moment().subtract(month).add(day),
        updated_at: moment().subtract(month).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interview',
        status_sort_index: 2,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '142',
        accountId: 'ALOT-123',
        title: 'Title-142',
        employer: 'Employer-142',
        created_at: moment().subtract(fortnight).add(day),
        updated_at: moment().subtract(fortnight).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interview',
        status_sort_index: 2,
      });
    })

    .then(function () {
      return knex('jobs').insert({
        id: '143',
        accountId: 'ALOT-123',
        title: 'Title-143',
        employer: 'Employer-143',
        created_at: moment().subtract(week).add(day),
        updated_at: moment().subtract(week).add(day),
        sourceType: 'online',
        sourceUrl: 'http://www.stuff.com',
        deadline: '2016-07-12',
        rating: '3',
        status: 'interview',
        status_sort_index: 2,
      });
    });
};

