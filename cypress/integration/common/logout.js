import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import WelcomePage from '../../pages/welcome-page';
import LogoutResultsPage from '../../pages/logout-results-page';

Given(/^user is on the welcome page$/, () => {
  throw new Error("Pending Implementation");
  //WelcomePage.visit();
});

When('user chooses to logout', () => {
  //WelcomePage.pressLogout();
  throw new Error("Pending Implementation");
});

Then(/^login page should be open$/, () => {
  throw new Error("Pending Implementation");
  //LogoutResultsPage.expect().toBeSuccessful();
});
