
myApp.factory('InitFactory',['$http', '$location', 'alertify', 'UserService', function($http, $location, alertify, UserService) {

// setting screen notifiaction position
  alertify.logPosition('top right');

// server side data response containers
  let weatherResponse = { list:[] };

// fires on init only
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
  function getWeather() {
    // $http({
    //   method: 'GET',
    //   url: '/weather/getWeather',
    //   headers: {
    //
    //   }
    // }).then(function(response) {
    //   weatherResponse.list = response.data;
    // });
    $http.get('/weather/getWeather').then((response) => {
      weatherResponse.list = response.data;
    }).catch((response) => {
      console.log('Error getting weather')
    })
  };




  // public API
  return {
    getWeather : getWeather,
    weatherResponse : weatherResponse
  }
// end myAPP
}]);
