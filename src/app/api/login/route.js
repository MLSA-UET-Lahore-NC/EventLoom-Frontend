import { NextResponse } from 'next/server';
import User from '@/models/User';
import bcrypt from 'bcrypt';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Log input for debugging
    console.log('Login attempt:', { username, password });

    const user = await User.findByUsername(username);
    if (!user) {
      console.log('User not found');
      return NextResponse.json({ success: false, message: 'Invalid username or password' }, { status: 401 }); // Unauthorized
    }

    // Log the retrieved user
    console.log('Retrieved user:', user);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password does not match');
      return NextResponse.json({ success: false, message: 'Invalid username or password' }, { status: 401 }); // Unauthorized
    }

    console.log('Login successful');
    return NextResponse.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ success: false, message: 'An error occurred during login. Please try again later.' }, { status: 500 }); // Internal Server Error
  }
}
