import connectMongoDB from '@/libs/mongodb';
import Todo from '@/models/todo';
import { NextResponse } from 'next/server';

// 'POST' Request
export async function POST(request) {
  // Destructure the 'title' and 'description' fields from the parsed JSON of the request body.
  const { item, isCompleted } = await request.json();


  // Call the 'connectMongoDB' function to connect to MongoDB.
  await connectMongoDB();

  // Create a new 'Todo' document in the MongoDB collection using the 'Todo' model.
  await Todo.create({ item, isCompleted });

  // Return a JSON response using the 'NextResponse' object, indicating successful creation with status 201.
  return NextResponse.json({ message: 'Todo Created' }, { status: 201 });
}

// 'GET' Request
export async function GET() {
  // Establish a connection to the MongoDB database.
  await connectMongoDB();
  // Query all 'Todo' documents from the MongoDB collection using the 'Todo' model.
  const todos = await Todo.find();
  // Return a JSON response with the queried 'todos' array using the 'NextResponse' object.
  return NextResponse.json({ todos });
}

// 'DELETE' function to handle the HTTP DELETE request.
export async function DELETE(request) {
  // Extract the 'id' parameter from the URL query using 'nextUrl.searchParams.get()'.
  const id = request.nextUrl.searchParams.get('id');

  // Call the 'connectMongoDB' function to establish a connection to the MongoDB database.
  await connectMongoDB();

  // Use the 'Todo' model to find the document with the given 'id' and delete it.
  await Todo.findByIdAndDelete(id);

  // Return a JSON response with the message "Todo deleted" and a status code of 200.
  return NextResponse.json({ message: 'Todo deleted' }, { status: 200 });
}

