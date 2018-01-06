
myApp.controller('RegisterController', ['$location', '$http', 'alertify', function($location, $http, alertify) {

  const self = this;

// setting user variable to empty string on init
  self.user = {
    username: '',
    password: '',
    email: ''
  };
// setting message to empty string on init
  self.message = '';
// button click to add new user to DB
  self.addNewUser = function(user) {
    console.log('user', user);
    if(user.username === '' || user.password === '' || user.email === '') {
      alertify.error("Missing Registration Credentials");
      // self.message = "Missing Registration Credentials";
    } else {
      console.log('sending user credentials to server...', self.user);
      $http.post('/register', self.user).then(function(response) {
        console.log('registering user success');
        alertify.success('<div class="alertMessage">' +
                          '<img src="../../assets/images/icons/addUser.ico"> User registration completed' +
                        '</div>')

        // self.message = "User registration completed";
        $location.path('/login');
      }).catch(function(response) {
        console.log('error registering user');
        alertify.error("Error adding User to DB, Please try again.");
        // self.message = "Error adding User to DB, Please try again."
      })
    }
  }; // end addNewUser()

}]); // end controller code block
