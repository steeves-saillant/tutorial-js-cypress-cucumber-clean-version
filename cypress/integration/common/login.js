import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/login-page';
import LoginResultsPage from '../../pages/login-results-page';

Given(/^browser is openened to the login page$/, () => {
  LoginPage.visit();
});

When('user {string} logs in with password {string}', (username, password) => {
  LoginPage.enter_username(username);
  LoginPage.enter_password(password);
  LoginPage.pressLogin();
});

Then(/^welcome page should be opened$/, () => {
  //  throw new Error("Pending implementation");
  });

Then(/^error page should be open$/, () => {
  //throw new Error("Pending implementation");
});
