module.exports = {
	users: `CREATE TABLE IF NOT EXISTS "users" (
		id SERIAL PRIMARY KEY,
		username VARCHAR,
		password VARCHAR,
		projects INTEGER[]
	);`,
	projects: `CREATE TABLE IF NOT EXISTS "projects" (
		id SERIAL PRIMARY KEY,
		name VARCHAR,
		sprints INTEGER[],
		admin VARCHAR,
		members INTEGER[]
	);`,
	sprints: `CREATE TABLE IF NOT EXISTS "sprints" (
		id SERIAL PRIMARY KEY,
		startDate DATE,
		endDate DATE,
		stories INTEGER[]
	);`,
	userStories: `CREATE TABLE IF NOT EXISTS "userStories" (
		id SERIAL PRIMARY KEY,
		description VARCHAR,
		startDate DATE,
		endDate DATE,
		responsible VARCHAR,
		point INTEGER,
		verify VARCHAR,
		status VARCHAR
	);`,
}
