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
  "duration": 22662827429,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 2119120924,
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
  "duration": 12649414048,
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
  "duration": 317558546,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2313209594,
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
  "duration": 8920207796,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1461790406,
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
  "duration": 4232675541,
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
  "duration": 237217531,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2364119556,
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
  "duration": 9263878626,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1338675815,
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
  "duration": 8078084194,
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
  "duration": 80482739,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2310743119,
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
  "duration": 15206486042,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.check_title_of_the_homepage()"
});
formatter.result({
  "duration": 16346568,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2315400441,
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
  "duration": 35004262941,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1129535147,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_enters_UserName()"
});
formatter.result({
  "duration": 924601220,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2314683518,
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
  "duration": 34693612186,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 4394617445,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_enters_UserName_and_Password()"
});
formatter.result({
  "duration": 19265225486,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.validate_logged_user()"
});
formatter.result({
  "duration": 65873504,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.enter_IOS_Product(DataTable)"
});
formatter.result({
  "duration": 7361150696,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.print_product_name_and_Price()"
});
formatter.result({
  "duration": 77730374,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2309086422,
  "status": "passed"
});
});