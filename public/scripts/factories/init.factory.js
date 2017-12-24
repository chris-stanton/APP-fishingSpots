
myApp.factory('InitFactory',['$http', '$location', 'alertify', 'UserService', function($http, $location, alertify, UserService) {

  console.log('InitFactory running...');


// setting screen notifiaction position
  alertify.logPosition('bottom left');

// server side data response containers
  let weatherResponse = { list:[] };

// fires on init on,y
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

// get weather from server/api on main controller init

let weatherResponse1 = {}
  function getWeather() {
    $http({
      method: 'GET',
      url: '/weather/getWeather',
      headers: {
      }
    }).then(function(response) {
      weatherResponse.list = response.data;
      weatherResponse1 = response.data;
      console.log(weatherResponse1);
    });
  };







  // public API
  return {
    getWeather : getWeather,
    weatherResponse : weatherResponse
    // weatherResponse1 : weatherResponse1
  }

}]); // end myAPP
