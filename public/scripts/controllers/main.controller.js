
myApp.controller('MainController',['InitFactory', 'UserService', 'alertify', function(InitFactory, UserService, alertify) {

  const self = this;

  InitFactory.getWeather();
  self.weatherResponse = InitFactory.weatherResponse;
  console.log('weatherResponse ', self.weatherResponse);

  // logout button click listener
  self.logout = () => {
    UserService.logout();
  };

  // displays navionics map
  var webapi = new JNC.Views.BoatingNavionicsMap({
    tagId: '.test_map_div',
    center: [  12.0, 46.0 ],
    navKey: 'Need Key'
  });
  webapi.showSonarControl(false);





}]); // end controller code block
