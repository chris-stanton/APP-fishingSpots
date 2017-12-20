
myApp.controller('MainController',['InitFactory', 'UserService', 'alertify', function(InitFactory, UserService, alertify) {

  console.log('MainController running...');

  const self = this;


  // logout button click listener
  self.logout = () => {
    UserService.logout();
  }








}]); // end controller code block
