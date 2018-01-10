
///////////////////////////////////////////
//  DATABASES W/ DEPLOY FILE             //
//  Note: SETUP FOR DEPLOY WITH HEROKU   //
//  HEROKU requires a connection string  //
///////////////////////////////////////////

let connectionString = '';

if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + "?ssl=true";
} else {
    connectionString = 'postgres://localhost:5432/fishingSpots';
}

module.exports = connectionString;
