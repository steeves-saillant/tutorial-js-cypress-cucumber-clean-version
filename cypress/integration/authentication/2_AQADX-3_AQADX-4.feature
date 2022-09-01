@AQADX-30
@REQ_AQADX-3
Feature: Authentification

	Background:
		#@PRECOND_AQADX-4
		Given browser is openened to the login page

	@TEST_AQADX-5 @REQ_AQADX-1 @TESTSET_AQADX-7
	Scenario: Valid Login
		When user "demo" logs in with password "mode"
		Then welcome page should be opened
