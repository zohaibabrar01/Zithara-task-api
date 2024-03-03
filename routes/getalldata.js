// routes/data.js
import express from 'express';
import {pool} from '../db.js';

const router = express.Router();


router.get('/data', async (req, res) => {
  try {
    const allData = await pool.query('SELECT * FROM customersrecords');
    res.json(allData.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export { router as getalldataRouter }; 
