// src/models/User.js
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static async findByUsername(username) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const usersCollection = db.collection('users');
    
    return await usersCollection.findOne({ username });
  }

  static async create(username, password) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const usersCollection = db.collection('users');

    const existingUser = await User.findByUsername(username);
    if (existingUser) {
      throw new Error('Username already taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await usersCollection.insertOne({ username, password: hashedPassword });

    return { id: result.insertedId, username };
  }
}

export default User;
