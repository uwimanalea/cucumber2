package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.DatabasePage;
import page.LoginPage;
import page.TestBase;

public class TechfiosStepDefinition extends TestBase {

	LoginPage loginPage;
	DatabasePage databasePage;
	@Before
	public void beforeRun() {
		initDriver();
		loginPage= PageFactory.initElements(driver, LoginPage.class);
	 databasePage= new DatabasePage();
	}
	
	//Given User is on TechFios login page
	
	@Given ("^User is on TechFios login page$")
public void  user_is_on_TechFios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login/");
		
		
	}
	@When ("^User enters userName as \"([^\"]*)\"$") 
	
	public void user_enters_userName_as(String username) {
	loginPage.enterUserName(username);
	
	
	}

@When("^User enters password as \"([^\"]*)\"$")
public void user_enters_password_as(String password) throws Throwable {
	loginPage.enterPassword(password);
	
	
}
@And("^User clicks sign button$")
public void user_clicks_sign_button() throws Throwable {
    loginPage.clickSignInButton();
}

@Then("^User should land on dashboard page$")
public void user_should_land_on_dashboard_page()  {
    Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
    takeScreenshot(driver);
}


@Then("^User should not land on dashboard page$")
public void user_should_not_land_on_dashboard_page() throws Throwable {
	 Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
}
@When("^User enters \"([^\"]*)\"  from techfios database$")
public void user_enters_from_techfios_database(String loginData) throws Throwable {
   
	switch (loginData) {
	case "username":
		loginPage.enterUserName(databasePage.getData("username"));
		System.out.println("username from DB:" + databasePage.getData("username"));
		break;
	case "password":
		loginPage.enterPassword(databasePage.getData("password"));
		System.out.println("password from DB:" + databasePage.getData("password"));
		
		break;
		
	default:
		System.out.println("unable to enter data from db");
		break;
	}
}
	@After
	public void tearDown() {
		
		//driver.close();
		//driver.quit();
	}
	}

		
		

