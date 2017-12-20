
myApp.controller('MainController',['InitFactory', 'UserService', 'alertify', function(InitFactory, UserService, alertify) {

  console.log('MainController running...');

  const self = this;


  // logout button click listener
  self.logout = () => {
    UserService.logout();
  }


  var webapi = new JNC.Views.BoatingNavionicsMap({
              tagId: '.test_map_div',
              center: [  12.0, 46.0 ],
              navKey: 'process.env.NAVIONICS_KEY'
          });

          webapi.showSonarControl(false);





}]); // end controller code block
