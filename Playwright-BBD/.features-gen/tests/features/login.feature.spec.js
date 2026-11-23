// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Successfull login with', async ({ Given, When, Then }) => { 
    await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
    await Given('I enter the username "student"'); 
    await Given('I enter the password as "Password123"'); 
    await When('I click on the login button'); 
    await Then('I should see the page contains "Logged In Successfully"'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I enter the username \"student\"","stepMatchArguments":[{"group":{"start":21,"value":"\"student\"","children":[{"start":22,"value":"student","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I enter the password as \"Password123\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Password123\"","children":[{"start":25,"value":"Password123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I click on the login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the page contains \"Logged In Successfully\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Logged In Successfully\"","children":[{"start":32,"value":"Logged In Successfully","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end