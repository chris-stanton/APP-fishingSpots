
myApp.factory('UserService',['$http', '$location', 'alertify', function($http, $location, alertify){

  const userObject = {};

// setting screen notifiaction position
  alertify.logPosition('bottom left');


  return {
    userObject : userObject,

    // checks user auth when switching views
    getuser : () => {
      $http.get('/user').then((response) => {
        if(response.data.username) {
          // user info that has a current session on the server
          userObject.userName = response.data.username;
          userObject.user_id = response.data.user_id;
          userObject.email = response.data.email;
            console.log(userObject.userName + ' Logged in');
        } else {
          // user has no session, bouncing them back to the login page
          $location.path("/login");
            console.log('Error finding user in DB');
        }
      },(response) => {
        $location.path("/login");
          console.log('Findng user error: ', response);
      });
    },

    // logs user out of session
    logout : () => {
      $http.get('/user/logout').then((response) => {
        // alertify logged out message
        setTimeout(function() {
          alertify.log('<div class="alertMessage">' +
                        '<img src="../../assets/images/icons/logout.ico">' +
                          userObject.userName  +
                        ' logged out</div>');
        }, 200);
        $location.path("/login");
          console.log(userObject.userName + ' Logged out');
      });
    }

  }; // end return

// end myApp
}]);
