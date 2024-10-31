import Event from '@/models/Event';
import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
  const { attendee } = await request.json();
  const updatedEvent = await Event.reserveTicket(params.id, attendee);
  return NextResponse.json(updatedEvent, { status: 200 }); // OK
}
