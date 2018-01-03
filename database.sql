
-- Step 1:
	-- create database titled (hardwareUI)

-- step 2
	-- creates users table for authentication
	CREATE TABLE users (
		id SERIAL PRIMARY KEY,
		username VARCHAR(100) NOT NULL unique,
		password VARCHAR(100) NOT NULL,
		email VARCHAR(100) NOT NULL
	);
	-- creates species specifics tables
	CREATE TABLE blueGill (
		id SERIAL PRIMARY KEY,
		detail_spring VARCHAR(2000),
		detail_summer VARCHAR(2000),
		detail_fall VARCHAR(2000),
		detail_earlyIce VARCHAR(2000),
		detail_midWinter VARCHAR(2000),
		detail_lateIce VARCHAR(2000),
		summary VARCHAR(5000),
		picURL VARCHAR(500),
		active boolean DEFAULT true
	);
	CREATE TABLE blackCrappie (
		id SERIAL PRIMARY KEY,
		detail_spring VARCHAR(2000),
		detail_summer VARCHAR(2000),
		detail_fall VARCHAR(2000),
		detail_earlyIce VARCHAR(2000),
		detail_midWinter VARCHAR(2000),
		detail_lateIce VARCHAR(2000),
		summary VARCHAR(5000),
		picURL VARCHAR(500),
		active boolean DEFAULT true
	);
	CREATE TABLE whiteCrappie (
		id SERIAL PRIMARY KEY,
		detail_spring VARCHAR(2000),
		detail_summer VARCHAR(2000),
		detail_fall VARCHAR(2000),
		detail_earlyIce VARCHAR(2000),
		detail_midWinter VARCHAR(2000),
		detail_lateIce VARCHAR(2000),
		summary VARCHAR(5000),
		picURL VARCHAR(500),
		active boolean DEFAULT true
	);
	CREATE TABLE perch (
		id SERIAL PRIMARY KEY,
		detail_spring VARCHAR(2000),
		detail_summer VARCHAR(2000),
		detail_fall VARCHAR(2000),
		detail_earlyIce VARCHAR(2000),
		detail_midWinter VARCHAR(2000),
		detail_lateIce VARCHAR(2000),
		summary VARCHAR(5000),
		picURL VARCHAR(500),
		active boolean DEFAULT true
	);
	CREATE TABLE walleye (
		id SERIAL PRIMARY KEY,
		detail_spring VARCHAR(2000),
		detail_summer VARCHAR(2000),
		detail_fall VARCHAR(2000),
		detail_earlyIce VARCHAR(2000),
		detail_midWinter VARCHAR(2000),
		detail_lateIce VARCHAR(2000),
		summary VARCHAR(5000),
		picURL VARCHAR(500),
		active boolean DEFAULT true
	);

	CREATE TABLE northernPike (
		id SERIAL PRIMARY KEY,
		detail_spring VARCHAR(2000),
		detail_summer VARCHAR(2000),
		detail_fall VARCHAR(2000),
		detail_earlyIce VARCHAR(2000),
		detail_midWinter VARCHAR(2000),
		detail_lateIce VARCHAR(2000),
		summary VARCHAR(5000),
		picURL VARCHAR(500),
		active boolean DEFAULT true
	);

	CREATE TABLE musky (
		id SERIAL PRIMARY KEY,
		detail_spring VARCHAR(2000),
		detail_summer VARCHAR(2000),
		detail_fall VARCHAR(2000),
		detail_earlyIce VARCHAR(2000),
		detail_midWinter VARCHAR(2000),
		detail_lateIce VARCHAR(2000),
		summary VARCHAR(5000),
		picURL VARCHAR(500),
		active boolean DEFAULT true
	);

	CREATE TABLE burbot (
		id SERIAL PRIMARY KEY,
		detail_spring VARCHAR(2000),
		detail_summer VARCHAR(2000),
		detail_fall VARCHAR(2000),
		detail_earlyIce VARCHAR(2000),
		detail_midWinter VARCHAR(2000),
		detail_lateIce VARCHAR(2000),
		summary VARCHAR(5000),
		picURL VARCHAR(500),
		active boolean DEFAULT true
	);

-- step 3:
	-- note the insert code below does not work because password
	-- will be saved normall in DB without being hashed with bcrypt
	INSERT INTO users (username, password, email)
	VALUES ('chris', '1', 'test@test.com');
