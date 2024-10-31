// src/models/Event.js
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

class Event {
  constructor(title, location, description, date, attendees) {
    this.title = title;
    this.location = location;
    this.description = description;
    this.date = date;
    this.attendees = attendees || [];
  }

  static async create(eventData) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const eventsCollection = db.collection('events');

    const result = await eventsCollection.insertOne(eventData);
    return { id: result.insertedId, ...eventData };
  }

  static async findAll() {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const eventsCollection = db.collection('events');

    return await eventsCollection.find({}).toArray();
  }

  static async findById(id) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const eventsCollection = db.collection('events');

    return await eventsCollection.findOne({ _id: new ObjectId(id) });
  }

  static async update(id, eventData) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const eventsCollection = db.collection('events');

    await eventsCollection.updateOne({ _id: new ObjectId(id) }, { $set: eventData });
    return { id, ...eventData };
  }

  static async delete(id) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const eventsCollection = db.collection('events');

    await eventsCollection.deleteOne({ _id: new ObjectId(id) });
    return { id };
  }
  
  static async reserveTicket(id, attendee) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const eventsCollection = db.collection('events');

    await eventsCollection.updateOne({ _id: new ObjectId(id) }, { $addToSet: { attendees: attendee } });
    return { id, attendee };
  }

  static async cancelReservation(id, attendee) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const eventsCollection = db.collection('events');

    await eventsCollection.updateOne({ _id: new ObjectId(id) }, { $pull: { attendees: attendee } });
    return { id, attendee };
  }
}

export default Event;
