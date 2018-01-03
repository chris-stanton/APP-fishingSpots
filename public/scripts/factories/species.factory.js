
myApp.factory('SpeciesFactory',['$http', '$location', 'alertify', function($http, $location, alertify) {

  let blueGill = { list: [] };
  let blackCrappie = { list: [] };
  let whiteCrappie = { list: [] };
  let perch = { list: [] };
  let walleye = { list: [] };
  let northernPike = { list: [] };
  let musky = { list: [] };
  let burbot = { list: [] };

  function getSpeciesData(query) {

    if(query.species === 'blueGill') {
      console.log(query);
      $http({
        method:'GET',
        url: '/blueGill',
        // must send an object
        headers: query
      }).then((response) => {
        blueGill.list = response.data;
      }).catch((response) => {
        console.log('Error getting blueGill HTTP request')
      });

    } else if(query.species === 'blackCrappie') {

      $http({
        method:'GET',
        url: '/blackCrappie',
        // must send an object
        headers: query
      }).then((response) => {
        blackCrappie.list = response.data;
      }).catch((response) => {
        console.log('Error getting blackCrappie HTTP request')
      });

    } else if(query.species === 'whiteCrappie') {

      $http({
        method:'GET',
        url: '/whiteCrappie',
        // must send an object
        headers: query
      }).then((response) => {
        whiteCrappie.list = response.data;
      }).catch((response) => {
        console.log('Error getting whiteCrappie HTTP request')
      });

    } else if(query.species === 'perch') {

      $http({
        method:'GET',
        url: '/perch',
        // must send an object
        headers: query
      }).then((response) => {
        perch.list = response.data;
      }).catch((response) => {
        console.log('Error getting perch HTTP request')
      });

    } else if(query.species === 'walleye') {

      $http({
        method:'GET',
        url: '/walleye',
        // must send an object
        headers: query
      }).then((response) => {
        walleye.list = response.data;
      }).catch((response) => {
        console.log('Error getting walleye HTTP request')
      });

    } else if(query.species === 'northernPike') {

      $http({
        method:'GET',
        url: '/northernPike',
        // must send an object
        headers: query
      }).then((response) => {
        northernPike.list = response.data;
      }).catch((response) => {
        console.log('Error getting northernPike HTTP request')
      });

    } else if(query.species === 'musky') {

      $http({
        method:'GET',
        url: '/musky',
        // must send an object
        headers: query
      }).then((response) => {
        musky.list = response.data;
      }).catch((response) => {
        console.log('Error getting musky HTTP request')
      });

    } else if(query.species === 'burbot') {

      $http({
        method:'GET',
        url: '/burbot',
        // must send an object
        headers: query
      }).then((response) => {
        burbot.list = response.data;
      }).catch((response) => {
        console.log('Error getting burbot HTTP request')
      });

    } else {
      console.log('error finding compatible HTTP request for ' + query.species + ' species');
    }; // end else/if


  }; // end getSpeciesData()




  // public API
  return {
    getSpeciesData : getSpeciesData,

    blueGill : blueGill,
    blackCrappie : blackCrappie,
    whiteCrappie : whiteCrappie,
    perch : perch,
    walleye : walleye,
    northernPike : northernPike,
    musky : musky,
    burbot : burbot
  }

}]);


  // $http({
  //       method:'GET',
  //       url: '/blueGill',
  //       headers: {
  //        id_token: idToken
  //       }
  //      }).then(function(response){
  //        upcomingMainTopic.list = response.data[0];
  //      });
