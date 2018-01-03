
myApp.factory('SpeciesFactory',['$http', '$location', 'alertify', function($http, $location, alertify) {

console.log('species factory running...');
// get weather from server/api on main controller init
  function getSpeciesData(query) {
    let species = query.species;

    if(species === 'blueGill') {
      $http.put('/blueGill', query).then((response) => {
        blueGill.list = response.data;
      }).catch((response) => {
        console.log('Error getting blueGill HTTP request')
      });
    } else if(species === 'whiteCrappie') {
      $http.put('/whiteCrappie', query).then((response) => {
        whiteCrappie.list = response.data;
      }).catch((response) => {
        console.log('Error getting whiteCrappie HTTP request')
      });
    } else if(species === 'blackCrappie') {
      $http.put('/blackCrappie', query).then((response) => {
        blackCrappie.list = response.data;
      }).catch((response) => {
        console.log('Error getting blackCrappie HTTP request')
      });
    } else if(species === 'perch') {
      $http.put('/perch', query).then((response) => {
        perch.list = response.data;
      }).catch((response) => {
        console.log('Error getting perch HTTP request')
      });
    } else if(species === 'walleye') {
      $http.put('/walleye', query).then((response) => {
        walleye.list = response.data;
      }).catch((response) => {
        console.log('Error getting walleye HTTP request')
      });
    } else if(species === 'northernPike') {
      $http.put('/northernPike', query).then((response) => {
        northerPike.list = response.data;
      }).catch((response) => {
        console.log('Error getting northernPike HTTP request')
      });
    } else if(species === 'musky') {
      $http.put('/musky', query).then((response) => {
        musky.list = response.data;
      }).catch((response) => {
        console.log('Error getting musky HTTP request')
      });
    } else if(species === 'burbot') {
      $http.put('/burbot', query).then((response) => {
        burbot.list = response.data;
      }).catch((response) => {
        console.log('Error getting burbot HTTP request')
      });
    } else {
      console.log('error finding compatible HTTP request for ' + species + ' species');
    };


  }; // end getSpeciesData()




  // public API
  return {
    getSpeciesData : getSpeciesData
  }

}]);
