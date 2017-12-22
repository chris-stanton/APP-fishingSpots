
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



  let weatherResponse = { list:[] };

  function getWeather() {
    $http({
      method: 'GET',
      url: '/weather/getWeather',
      headers: {
      }
    }).then(function(response) {
      weatherResponse.list = response.data;
    });
  }








  // public API
  return {
    getWeather : getWeather,
    weatherResponse : weatherResponse
  }

}]); // end myAPP
