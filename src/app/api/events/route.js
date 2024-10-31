import Event from '@/models/Event';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const eventData = await request.json();
  const newEvent = await Event.create(eventData);
  return NextResponse.json(newEvent, { status: 201 }); // Created
}

export async function GET() {
  const events = await Event.findAll();
  return NextResponse.json(events, { status: 200 }); // OK
}
