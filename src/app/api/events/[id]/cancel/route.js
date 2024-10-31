import Event from '@/models/Event';
import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
  const { attendee } = await request.json();
  const updatedEvent = await Event.cancelReservation(params.id, attendee);
  return NextResponse.json(updatedEvent, { status: 200 }); // OK
}
