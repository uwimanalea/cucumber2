
@LoginFeature @Regression
Feature:TechFios login functionality validation
Background: 
Given User is on TechFios login page


@Scenario1  

Scenario Outline: Login with incorrect username(other)
When User enters userName as "<username>" 
When User enters password as "<password>" 
And User clicks sign button 
Then User should land on dashboard page
Examples:
|username|password|
#|demo2@techfios.com|abc123|
#|demo@techfios.com|abc124|
#|demo2@techfios.com|abc123|
|demo@techfios.com|abc123|