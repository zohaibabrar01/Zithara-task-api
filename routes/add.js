import { pool } from '../db.js'; // Adjust the path to your db.js file

export const add = async (req, res) => {
    const { customer_name, age, phone, location } = req.body;
  
    const queryText = 'INSERT INTO customersrecords (customer_name, age, phone, location) VALUES ($1, $2, $3, $4)';
    const queryValues = [customer_name, age, phone, location];
  
    try {
      await pool.query(queryText, queryValues);
      res.status(201).json({ message: 'Customer added successfully' });
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ message: 'Failed to add customer' });
    }
}


