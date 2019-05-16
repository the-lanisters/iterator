const { connect, query } = require('./models/pmModel');
const tables = require('./models/pmTables');

(async function() {
	console.log('Creating tables')
	await query({ text: tables.users });
	await query({ text: tables.projects });
	await query({ text: tables.userProjects })
	await query({ text: tables.sprints });
	await query({ text: tables.userStories });
})();
