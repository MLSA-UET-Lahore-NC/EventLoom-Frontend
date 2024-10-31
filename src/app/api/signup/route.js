import { NextResponse } from 'next/server';
import User from '@/models/User';

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    
    const newUser = await User.create(username, password);
    return NextResponse.json({ success: true, message: 'User registered successfully', user: newUser }, { status: 201 }); // Created
  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 409 }); // Conflict
  }
}
