
Feature: LogIn Action Test

#Scenario: Successful Login with Valid Credentials
#Given User is on Home Page
#When User Navigate to LogIn Page
#Then User enters UserName and Password
#And Validate logged user
#Then close the browser

Scenario Outline: Successful Login with Valid Credentials
Given User is on Home Page
When User Navigate to LogIn Page
Then User enters "<UserName>" and "<Password>"
And Validate logged "<user>"
Then close the browser


Examples:
	| UserName 									| Password 	|	user		|
	| bhadrebalaji@gmail.com 		| jodha@123 | balaji	|
	| tupekarsupriya@gmail.com 	| jodha@123 |	Supriya	|
	| bhadrebalaji@gmail.com		| jodha@123 |	balaji	|
	


Scenario: check title of amazon page
Given User is on Home Page
Then check title of the homepage
Then close the browser

Scenario: Validate user
Given User is on Home Page
When User Navigate to LogIn Page
Then User enters UserName
 Then close the browser
 
 Scenario: Search IOS Product
Given User is on Home Page
When User Navigate to LogIn Page
Then User enters UserName and Password
And Validate logged user
Then Enter IOS Product
| iphone |
Then Print product name and Price of first product
Then close the browser
  