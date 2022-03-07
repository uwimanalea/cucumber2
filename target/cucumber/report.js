$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosLoginFromDatabase.feature");
formatter.feature({
  "line": 3,
  "name": "TechFios login functionality validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@LoginFeature"
    },
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 2850088899,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on TechFios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "TechfiosStepDefinition.user_is_on_TechFios_login_page()"
});
formatter.result({
  "duration": 1651612600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login with valid credential",
  "description": "",
  "id": "techfios-login-functionality-validation;login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@DBScenario1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters \"username\"  from techfios database",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters \"password\"  from techfios database",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks sign button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    }
  ],
  "location": "TechfiosStepDefinition.user_enters_from_techfios_database(String)"
});
formatter.result({
  "duration": 3555502800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "TechfiosStepDefinition.user_enters_from_techfios_database(String)"
});
formatter.result({
  "duration": 3115911900,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefinition.user_clicks_sign_button()"
});
formatter.result({
  "duration": 6809426300,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 177729400,
  "status": "passed"
});
formatter.after({
  "duration": 12800,
  "status": "passed"
});
});