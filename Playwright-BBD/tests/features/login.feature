Feature: Login Functionality
Scenario: Successfull login with
Given I navigate to "https://practicetestautomation.com/practice-test-login/"
Given I enter the username "student"
Given I enter the password as "Password123"
When I click on the login button
Then I should see the page contains "Logged In Successfully"
