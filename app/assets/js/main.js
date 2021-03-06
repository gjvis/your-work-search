const $ = require('jquery');
require('./_datepickers.js');
require('./_auto-submit');
require('./_hide-show');

// Use GOV.UK selection-buttons.js to set selected
// and focused states for block labels
const $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']");
// eslint-disable-next-line no-new
new GOVUK.SelectionButtons($blockLabels);


// add-a-job page
$('label[for="job-sourceType-inPerson"]')
  .click(() => $('#job-sourceUrl-group').addClass('js-hidden'));
$('label[for="job-sourceType-online"]')
  .click(() => $('#job-sourceUrl-group').removeClass('js-hidden'));
