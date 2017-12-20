
myApp.factory('InitFactory',['$http', '$location', 'alertify', 'UserService', function($http, $location, alertify, UserService) {

  console.log('InitFactory running...');


// setting screen notifiaction position
  alertify.logPosition('top right');

  function init() {
    // logged in alert message
    setTimeout(function() {
      let loggedInUser = UserService.userObject.userName;
      alertify.log('<div class="alertMessage">' +
                     '<img src="../../assets/images/icons/favicon.ico"> Welcome ' +
                       loggedInUser +
                   '</div>');
    }, 200);
  };

  init();


  // public API
  return {

  }

}]); // end myAPP
