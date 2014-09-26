Package.describe({
	summary: " \* Disables reload on client side. *\ ",
	version: "1.0.0",
	git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.2.2');
	api.addFiles('nicolsondsouza:common.js', ["client","server"]);
    api.addFiles('nicolsondsouza:server.js', ["server"]);
    api.addFiles('nicolsondsouza:client.js', ["client"]);
    if(api.export){
        
    }
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('nicolsondsouza:reload-disable');
	api.addFiles('nicolsondsouza:reload-disable-tests.js');
});
