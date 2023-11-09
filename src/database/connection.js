let CONNECTION_STRING = "postgres://postgres:postgres@localhost:5432/alura";

import pg from "pg";
const { Pool } = pg;

async function connect() {
	if (global.connection) return global.connection.connect();

	const pool = new Pool({
		connectionString: CONNECTION_STRING,
	});

	global.connection = pool;
	return pool.connect();
}

export default connect;
