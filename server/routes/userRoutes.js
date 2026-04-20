import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// GET all users (The one your fetchData function calls)
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new user (Use this to add your info via Postman or your app)
// Add this new POST route for login
router.post('/login', async (req, res) => {
  const { studentId, password } = req.body;
  console.log(`Checking DB for ID: ${studentId} and Pass: ${password}`);

  try {
    // We search only by studentId first to see if the user exists at all
    const user = await User.findOne({ studentId });
    
    if (!user) {
      console.log("❌ Result: No user found with that ID in StudentData collection");
      return res.status(401).json({ message: "User not found" });
    }

    if (user.password !== password) {
      console.log(`❌ Result: User found, but '${user.password}' does not match '${password}'`);
      return res.status(401).json({ message: "Wrong password" });
    }

    console.log("✅ Result: Match found! Logging in...");
    res.status(200).json(user);
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;