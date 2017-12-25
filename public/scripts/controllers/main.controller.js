
myApp.controller('MainController',['InitFactory', 'UserService', 'alertify', function(InitFactory, UserService, alertify) {

  const self = this;

  InitFactory.getWeather();
  self.weatherResponse = InitFactory.weatherResponse;
  self.userObject = UserService.userObject;

  // logout button click listener
  self.logout = () => {
    UserService.logout();
  };

  // displays navionics map
  let webapi = new JNC.Views.BoatingNavionicsMap({
    tagId: '.test_map_div',
    center: [  12.0, 46.0 ],
    navKey: 'Need Key'
  });
  webapi.showSonarControl(false);

  // query search button click listener
  self.searchQuery = (query) => {
    if(query === undefined) {
      alertify.error('Please select a fish SPECIES and TIME OF YEAR');
        console.log('missing species and TOY selections');
    } else if(query.timeOfYear === undefined) {
      alertify.error('Please select a TIME OF YEAR');
        console.log('missing TOY selection');
    } else if(query.species === undefined) {
      alertify.error('Please select a fish SPECIES');
        console.log('missing species selection');
    } else {
      // send object to DB for search HERE
    }

  };



}]); // end controller code block
