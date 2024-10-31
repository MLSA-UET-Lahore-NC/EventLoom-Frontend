import Event from '@/models/Event';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
  if (!ObjectId.isValid(params.id)) {
    return NextResponse.json({ message: 'Invalid event ID' }, { status: 400 }); // Bad Request
  }

  const event = await Event.findById(params.id);
  if (!event) {
    return NextResponse.json({ message: 'Event not found' }, { status: 404 }); // Not Found
  }
  return NextResponse.json(event, { status: 200 }); // OK
}
export async function PUT(request, { params }) {
  if (!ObjectId.isValid(params.id)) {
    return NextResponse.json({ message: 'Invalid event ID' }, { status: 400 }); // Bad Request
  }

  const eventData = await request.json();

  // Optional: Validate eventData structure here

  const updatedEvent = await Event.update(params.id, eventData);
  if (!updatedEvent) {
    return NextResponse.json({ message: 'Event not found for update' }, { status: 404 }); // Not Found
  }
  return NextResponse.json(updatedEvent, { status: 200 }); // OK
}
export async function DELETE(request, { params }) {
  // Validate params and ID
  if (!params || !params.id || !ObjectId.isValid(params.id)) {
    return NextResponse.json({ message: 'Invalid event ID' }, { status: 400 }); // Bad Request
  }

  const result = await Event.delete(params.id);
  if (result.deletedCount === 0) {
    return NextResponse.json({ message: 'Event not found for deletion' }, { status: 404 }); // Not Found
  }

  // Return 204 No Content without a body
  return NextResponse.json({ message: 'deleted successfully'}, { status: 204 }); // Correct usage for No Content
}

