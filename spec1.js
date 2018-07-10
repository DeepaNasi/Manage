
  describe('Test Manage centre  Smoke test', function(){
	
    it('To Verify Home page title', function(){
		           		
           browser.driver.get('https://auth.dimensiondata.com/adfs/oauth2/authorize?resource=manage-dimensiondata-com-oauth-relying-party&response_type=code&redirect_uri=https%3A%2F%2Fmanage.dimensiondata.com%2Foauth2callback&client_id=manage-dimensiondata-com-oauth&client-request-id=2dd3ad90-0276-4552-640b-00800100009d&RedirectToIdentityProvider=AD+AUTHORITY');
    })
});