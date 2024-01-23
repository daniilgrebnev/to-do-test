module.exports = {
	development: {
		username: 'postgres',
		password: 'postgres',
		database: 'postgres',
		host: 'database',
		dialect: 'postgres',
		port: 5432, // Specify the port here
	},
	test: {
		// similar configuration as development
	},
	production: {
		// similar configuration as development
		// you might want to use process.env variables for sensitive information in production
	},
}
