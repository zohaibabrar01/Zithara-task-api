// index.js
import express from 'express';
import cors from 'cors';
import {getalldataRouter} from './routes/getalldata.js'; // Change the import name
import {add} from './routes/add.js'; // Import the add function if needed
import {pool} from './db.js'; // Import the database connection if needed

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', getalldataRouter); // Use the getalldataRouter middleware

// If you also need to use the 'add' function as a route:
app.post('/add', add); // Use the 'add' function directly as the route handler

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
