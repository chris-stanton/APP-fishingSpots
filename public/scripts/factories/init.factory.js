
myApp.factory('InitFactory',['$http', '$location', 'alertify', 'UserService', function($http, $location, alertify, UserService) {

// setting screen notifiaction position
  alertify.logPosition('bottom left');

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
  function getWeather(coords) {
    $http({
      method:'GET',
      url: '/weather/getWeather',
      // must send an object
      headers: coords
    }).then((response) => {
      weatherResponse.list = response.data;
    }).catch((response) => {
      console.log('Error getting weather')
    });
  };




  // public API
  return {
    // calls server for API weather data
    getWeather,
    // return of sserverside weather data fro api
    weatherResponse
  }

}]);










// $http.delete('/addpitch/delete/' + id).then((response) => {
//       console.log('delete success', response);
//     }).catch(function (error) {
//       console.log('Error message.')
//     })


// $http.put('/addpitch/update/', pitcher).then((response) => {
//       console.log('Update success', response);
//     }).catch(function (error) {
//       console.log('Error message.')
//     })


// $http.post('/addpitch/' + userId, pitcher).then((response) => {
//       console.log('post successs', response);
//     }).catch((response) => {
//       console.log('Error message.')
//     })
