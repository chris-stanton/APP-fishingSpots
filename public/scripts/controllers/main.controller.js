
myApp.controller('MainController',['InitFactory', 'SpeciesFactory', 'UserService', 'alertify', function(InitFactory, SpeciesFactory, UserService, alertify) {

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
    depthUnit: JNC.DEPTH_UNIT.FEET,
    distanceUnit: JNC.DISTANCE_UNIT.MILES,
    // safetyDepth: JNC.SAFETY_DEPTH_LEVEL.FEET_20,
    navKey: 'Navionics_webapi_02834'
  });
  webapi.showSonarControl(false);

  // query search button click listener
  self.searchQuery = (query) => {
    // checking for user query null values
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
      SpeciesFactory.getSpeciesData(query);
    };
  };



}]); // end controller code block
