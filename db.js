// db.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CUSTOMER_INFO',
  password: '@ALLAh786',
  port: 5432,
});

export { pool }; // Export pool as a named export
