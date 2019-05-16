module.exports = {
  	users: `CREATE TABLE IF NOT EXISTS "users" (
		id SERIAL PRIMARY KEY,
		username VARCHAR,
		password VARCHAR
	);`,
	userProjects: `CREATE TABLE IF NOT EXISTS "userProjects" (
		id SERIAL PRIMARY KEY,
		admin BIT,
		user_id INTEGER NOT NULL,
		project_id INTEGER NOT NULL,
		FOREIGN KEY (user_id) REFERENCES users(id),
		FOREIGN KEY (project_id) REFERENCES projects(id)
	);`,
  	projects: `CREATE TABLE IF NOT EXISTS "projects" (
		id SERIAL PRIMARY KEY,
		name VARCHAR NOT NULL,
		description VARCHAR
	);`,
  	sprints: `CREATE TABLE IF NOT EXISTS "sprints" (
		id SERIAL PRIMARY KEY,
		startDate DATE,
		endDate DATE,
		project_id INTEGER,
		FOREIGN KEY (project_id) REFERENCES projects(id)
	);`,
  	userStories: `CREATE TABLE IF NOT EXISTS "userStories" (
		id SERIAL PRIMARY KEY,
		description VARCHAR,
		startDate DATE,
		endDate DATE,
		user_id INTEGER,
		points INTEGER,
		verify VARCHAR,
		status VARCHAR,
		sprint_id INTEGER,
		FOREIGN KEY (sprint_id) REFERENCES sprints(id),
		FOREIGN KEY (user_id) REFERENCES users(id)
	);`,
}
