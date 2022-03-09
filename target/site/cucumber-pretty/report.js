$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("home.feature");
formatter.feature({
  "line": 3,
  "name": "Home Page",
  "description": "",
  "id": "home-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user can login",
  "description": "",
  "id": "home-page;verify-user-can-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Open Application \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 18
    }
  ],
  "location": "homePageStepDef.open_Application(String)"
});
formatter.result({
  "duration": 778141400,
  "status": "passed"
});
formatter.match({
  "location": "homePageStepDef.click_on_Login_Button()"
});
formatter.result({
  "duration": 122100,
  "status": "passed"
});
});