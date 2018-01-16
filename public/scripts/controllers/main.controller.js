
myApp.controller('MainController',['InitFactory', 'SpeciesFactory', 'UserService', 'alertify', function(InitFactory, SpeciesFactory, UserService, alertify) {

  // setting variables and variable containers
  const self = this;

  let lat = 0;
  let long = 0;
  let coords = {};

  // return info from server side API call to Dark Sky weather
  self.weatherResponse = InitFactory.weatherResponse;
  // users credentials from passprod service
  self.userObject = UserService.userObject;

  // checking for geolocation
  if (navigator.geolocation) {
    // gets users geolocation coords and saves to var holders above
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('Local position API response: ', position);
      // geolocation response setting to variable
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      // creating object to send sever side
      let coords = {
        lat: lat.toFixed(1),
        long: long.toFixed(1)
      }

      console.log(coords);
      // gets info from server side API call to Dark Sky weather
      InitFactory.getWeather(coords);
      alertify.log('<div class="alertMessage">' +
                    '<img src="../../assets/images/icons/accuracy.ico"> ' +
                    'Geolocation Accuracy: ' + position.coords.accuracy + 'm.' +
                    '</div>');
    });
  } else {
    alertify.error('Finding Geolocation failed. Error winding loaction or divice might noe support geolocation.  Try again!');
      console.log('geolocation was not supported');
  };

  // displays and settings for navionics map
  let webapi = new JNC.Views.BoatingNavionicsMap({
    tagId: '.test_map_div',
    center: [  parseInt(coords.lat), parseInt(coords.long) ],
    depthUnit: JNC.DEPTH_UNIT.FEET,
    distanceUnit: JNC.DISTANCE_UNIT.MILES,
    safetyDepth: JNC.SAFETY_DEPTH_LEVEL.FEET_20,
    navKey: 'Navionics_webapi_03299'
  });
  webapi.showSonarControl(true);



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
      // all fields have values and is good to go
      SpeciesFactory.getSpeciesData(query);
    };
  };

  // logout button click listener
  self.logout = () => {
    UserService.logout();
  };



}]); // end controller code block
