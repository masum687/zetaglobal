package StepDeffination;


import Util.testBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class homePageStepDef extends testBase {

	@Given("^Open Application \"([^\"]*)\"$")
	public void open_Application(String URL) throws Throwable {
		launchhh(URL);
	}

	@Then("^Click on Login Button$")
	public void click_on_Login_Button() throws Throwable {
	    
	}
}
