
@LoginFeature @Regression
Feature:TechFios login functionality validation
Background: 
Given User is on TechFios login page


@DBScenario1  
Scenario: Login with valid credential
When User enters "username"  from techfios database 
When User enters "password"  from techfios database  
And User clicks sign button 
Then User should land on dashboard page
