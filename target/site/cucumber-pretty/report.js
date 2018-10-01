$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "LogIn Action Test",
  "description": "",
  "id": "login-action-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Scenario: Successful Login with Valid Credentials"
    },
    {
      "line": 5,
      "value": "#Given User is on Home Page"
    },
    {
      "line": 6,
      "value": "#When User Navigate to LogIn Page"
    },
    {
      "line": 7,
      "value": "#Then User enters UserName and Password"
    },
    {
      "line": 8,
      "value": "#And Validate logged user"
    },
    {
      "line": 9,
      "value": "#Then close the browser"
    }
  ],
  "line": 11,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate logged \"\u003cuser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "user"
      ],
      "line": 20,
      "id": "login-action-test;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "bhadrebalaji@gmail.com",
        "jodha@123",
        "balaji"
      ],
      "line": 21,
      "id": "login-action-test;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "tupekarsupriya@gmail.com",
        "jodha@123",
        "Supriya"
      ],
      "line": 22,
      "id": "login-action-test;successful-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "bhadrebalaji@gmail.com",
        "jodha@123",
        "balaji"
      ],
      "line": 23,
      "id": "login-action-test;successful-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"bhadrebalaji@gmail.com\" and \"jodha@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate logged \"balaji\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 12206106918,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1756224675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhadrebalaji@gmail.com",
      "offset": 13
    },
    {
      "val": "jodha@123",
      "offset": 42
    }
  ],
  "location": "LoginstepDefinition.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 10504046827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "balaji",
      "offset": 17
    }
  ],
  "location": "LoginstepDefinition.validate_logged_user(String)"
});
formatter.result({
  "duration": 78400583,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2313354554,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"tupekarsupriya@gmail.com\" and \"jodha@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate logged \"Supriya\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 11999027451,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1309750749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tupekarsupriya@gmail.com",
      "offset": 13
    },
    {
      "val": "jodha@123",
      "offset": 44
    }
  ],
  "location": "LoginstepDefinition.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 6028639835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Supriya",
      "offset": 17
    }
  ],
  "location": "LoginstepDefinition.validate_logged_user(String)"
});
formatter.result({
  "duration": 77251608,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2316325957,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"bhadrebalaji@gmail.com\" and \"jodha@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Validate logged \"balaji\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 7993518625,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1360132169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhadrebalaji@gmail.com",
      "offset": 13
    },
    {
      "val": "jodha@123",
      "offset": 42
    }
  ],
  "location": "LoginstepDefinition.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 11830163755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "balaji",
      "offset": 17
    }
  ],
  "location": "LoginstepDefinition.validate_logged_user(String)"
});
formatter.result({
  "duration": 77283375,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2311188068,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "check title of amazon page",
  "description": "",
  "id": "login-action-test;check-title-of-amazon-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "check title of the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8305132367,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.check_title_of_the_homepage()"
});
formatter.result({
  "duration": 19326830,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2309553307,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate user",
  "description": "",
  "id": "login-action-test;validate-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User enters UserName",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5424529035,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1098485415,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_enters_UserName()"
});
formatter.result({
  "duration": 810287605,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2316215018,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Search IOS Product",
  "description": "",
  "id": "login-action-test;search-ios-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User enters UserName and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Validate logged user",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Enter IOS Product",
  "rows": [
    {
      "cells": [
        "iphone"
      ],
      "line": 44
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Print product name and Price of first product",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5882435534,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1135123604,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_enters_UserName_and_Password()"
});
formatter.result({
  "duration": 3113315065,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.validate_logged_user()"
});
formatter.result({
  "duration": 292576720,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.enter_IOS_Product(DataTable)"
});
formatter.result({
  "duration": 2961669870,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.print_product_name_and_Price()"
});
formatter.result({
  "duration": 80919923,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2308125763,
  "status": "passed"
});
});