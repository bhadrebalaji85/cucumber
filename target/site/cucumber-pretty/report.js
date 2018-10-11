$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LogIn Action Test",
  "description": "",
  "id": "login-action-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Successful Login with Valid Credentials"
    },
    {
      "line": 4,
      "value": "#Given User is on Home Page"
    },
    {
      "line": 5,
      "value": "#When User Navigate to LogIn Page"
    },
    {
      "line": 6,
      "value": "#Then User enters UserName and Password"
    },
    {
      "line": 7,
      "value": "#And Validate logged user"
    },
    {
      "line": 8,
      "value": "#Then close the browser"
    }
  ],
  "line": 11,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@LoginTest"
    }
  ]
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
  "line": 18,
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
      "line": 19,
      "id": "login-action-test;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "bhadrebalaji@gmail.com",
        "jodha@123",
        "balaji"
      ],
      "line": 20,
      "id": "login-action-test;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "tupekarsupriya@gmail.com",
        "jodha@123",
        "Supriya"
      ],
      "line": 21,
      "id": "login-action-test;successful-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "bhadrebalaji@gmail.com",
        "jodha@123",
        "balaji"
      ],
      "line": 22,
      "id": "login-action-test;successful-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@LoginTest"
    }
  ]
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
  "duration": 35752969377,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 6062132127,
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
  "duration": 10079186500,
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
  "duration": 76883229,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2304120280,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@LoginTest"
    }
  ]
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
  "duration": 8916697618,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 2925766047,
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
  "duration": 6073606455,
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
  "duration": 336057218,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2311438653,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@LoginTest"
    }
  ]
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
  "duration": 9462776730,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1852879944,
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
  "duration": 5080860807,
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
  "duration": 218000508,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2310660633,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "check title of amazon page",
  "description": "",
  "id": "login-action-test;check-title-of-amazon-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "check title of the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8073104554,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.check_title_of_the_homepage()"
});
formatter.result({
  "duration": 25322790,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2310104974,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate user",
  "description": "",
  "id": "login-action-test;validate-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@SmokeTest"
    }
  ]
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
  "duration": 6522858735,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 2588649315,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_enters_UserName()"
});
formatter.result({
  "duration": 1461218247,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2320892182,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Successful Login with Valid Credentials with headers",
  "description": "",
  "id": "login-action-test;successful-login-with-valid-credentials-with-headers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 55
    },
    {
      "cells": [
        "bhadrebalaji@gmail.com",
        "jodha@123"
      ],
      "line": 56
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 59281078281,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 4435758129,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 44024835061,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2312631095,
  "status": "passed"
});
});