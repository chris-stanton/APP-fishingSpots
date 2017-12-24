
myApp.controller('MainController',['InitFactory', 'UserService', 'alertify', function(InitFactory, UserService, alertify) {

  console.log('MainController running...');

  const self = this;

  InitFactory.getWeather();
  self.weatherResponse = InitFactory.weatherResponse;
  self.weatherResponse1 = InitFactory.weatherResponse1;
  // var d = new Date(self.weatherResponse.list.daily.data[0].time);
  // console.log(self.weatherResponse.list.daily.data[0].time);
  // console.log(d);
  console.log(self.weatherResponse1);


  // logout button click listener
  self.logout = () => {
    UserService.logout();
  }

  // displays navionics map
  var webapi = new JNC.Views.BoatingNavionicsMap({
    tagId: '.test_map_div',
    center: [  12.0, 46.0 ],
    navKey: 'Need Key'
  });
  webapi.showSonarControl(false);





}]); // end controller code block
