
-- STEP 1:
	-- create database titled (hardwareUI)

-- STEP 2
	-- create users table for authentication
	CREATE TABLE users (
		id SERIAL PRIMARY KEY,
		username VARCHAR(100) NOT NULL unique,
		password VARCHAR(100) NOT NULL,
		email VARCHAR(100) NOT NULL
	);
		-- NOTE: the insert code below does not work because password
		-- will be saved normall in DB without being hashed with bcrypt
		INSERT INTO users (username, password, email)
		VALUES ('chris', '1', 'test@test.com');
	-- creates species specifics tables
	CREATE TABLE blueGill (
		id SERIAL PRIMARY KEY,
		summary VARCHAR(5000),
		summary_spring VARCHAR(2000),
		summary_summer VARCHAR(2000),
		summary_fall VARCHAR(2000),
		summary_earlyIce VARCHAR(2000),
		summary_midWinter VARCHAR(2000),
		summary_lateIce VARCHAR(2000),
		picURL VARCHAR(500),
		active boolean DEFAULT true
	);
		INSERT INTO users (summary, summary_spring, summary_summer, summary_fall, summary_earlyIce, summary_midWinter, summary_lateIce, picURL)
		VALUES ('Bluegills can grow up to 12 inches (30 cm) long and about ​4 1⁄2 pounds. They have very distinctive coloring, with deep blue and purple on the face and gill cover,
							dark olive-colored bands down the side, and a fiery orange to yellow belly. The fish are omnivores and will eat anything they can fit in their mouth.
							They mostly feed on small aquatic insects and fish. The fish play a key role in the food chain, and are prey for muskies, walleye, trout, bass, herons, kingfishers,
							snapping turtles, and otters.'
						'Spring is the best time of the year to get out on the water.
							Spring fish are usually hungry, aggressive, and shallow – which makes catching them easier and more fun than other times of the year.
							Bluegills spawn much later than bass and crappie, so their aggressive prespawn period is one of the longest on the lake.
							 The best places to target spring bluegill are on the outside edges of grass beds, in flooded timber, and around any cover adjacent to the large, sandy flats that they spawn on later in the summer.
							To catch bluegill, there isn’t much more effective than a chunk of nightcrawler or a waxworm threaded on a gold hook or 1/64 ounce jig, although artificials like tiny curly tailed grubs, flies, and
							even small crankbaits can also be effective (particularly when targeting bigger bluegill).',
						'In the summer, begin tracking bluegills by looking for healthy, green weeds. Coontail and milfoil are two of Brosdahl’s favorite targets because both create canopies of cover on the surface and travel corridors beneath it.
							This combination allows the bluegills to hunt for food while remaining hidden from predatory fish.
							Specifically search for cups and points, which attract fish. Intersecting breaks or other structure are also prime holding zones, as are pockets, or bald spots, along a weed edge that might indicate a change in bottom composition—rocks or wood.
							These subtle variations within a weed edge will be especially attractive to big bluegills.
							Weed beds in 5 to 12 feet of water can be probed with search baits such as Beetlespins, but deep weeds must be jigged with small soft-plastics, and icefishing spoons.
							Once fish are found, employ a simple slip-bobber rig with a small jig. Recommends size 1/32 to 1/8-ounce jigheads with a tiny leech or a pinch of nightcrawler.',
						'test@test.com',
						'test@test.com',
						'test@test.com',
						'test@test.com'
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
