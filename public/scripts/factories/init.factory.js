
myApp.factory('InitFactory',['$http', '$location', 'alertify', 'UserService', function($http, $location, alertify, UserService) {

  console.log('InitFactory running...');


// setting screen notifiaction position
  alertify.logPosition('bottom left');



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

  // $http({
  //     method: 'GET',
  //     url: 'https://api.darksky.net/forecast/f754c9bf44ea140ae951b2bee0fbe48c/37.8267,-122.4233',
  //     headers: {
  //
  //     }
  //   }).then(function(response) {
  //     let weatherResponse = response.data;
  //     console.log(weatherResponse);
  //   });



  // public API
  return {

  }

}]); // end myAPP
