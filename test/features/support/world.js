const chai = require('chai');
const DashboardPage = require('./../../common/page_objects/DashboardPage');
const AddJobPage = require('./../../common/page_objects/AddJobPage');
const ScenarioData = require('./ScenarioData');
const Zombie = require('zombie');
Zombie.site = 'http://localhost:3000';

require('../../../bin/www');  // This starts the web server, and ensures it is only
                              // started once. It is a misuse of "require", and
                              // should be improved.


function World() {
  this.expect = chai.expect;
  this.browser = new Zombie();

  this.scenarioData = new ScenarioData();
  this.dashboardPage = new DashboardPage(this.browser);
  this.addJobPage = new AddJobPage(this.browser);
}

module.exports = function () {
  this.World = World;
};