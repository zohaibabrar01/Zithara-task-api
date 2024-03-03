import pkg from 'pg';
const { Pool } = pkg;

// Replace these values with your Render PostgreSQL database credentials
const pool = new Pool({
  user: 'zithara_user',
  host: 'dpg-cni4do6n7f5s73clfpq0-a.oregon-postgres.render.com',
  database: 'zithara', // or your database name
  password: 'XMZGK5Mwf8GdXwwTdz0nGSgew21xcdkn',
  port: 5432,
  ssl: {
    rejectUnauthorized: false // For development purposes only, remove in production
  }
});

export { pool }; // Export pool as a named export
