import connectMongoDB from '@/libs/mongodb'
import Todo from '@/models/todo'
import { NextResponse } from 'next/server';

// 'PUT' function to handle the HTTP PUT (update) request.
export async function PUT(request, { params }) {
  // Extract the 'id' parameter from the 'params' object, which holds route parameters.
  const { id } = params;

  // Destructure the 'newTitle' and 'newDescription' fields from the parsed JSON of the request body.
  const { newItem: item, newIsCompleted: isCompleted } = await request.json();

  // Call the 'connectMongoDB' function to establish a connection to the MongoDB database.
  await connectMongoDB();

  // Use the 'Todo' model to find the document with the given 'id' and update it with the new 'title' and 'description'.
  await Todo.findByIdAndUpdate(id, { item, isCompleted });

  // Return a JSON response with the message "Todo updated" and a status code of 200.
  return NextResponse.json({ message: 'Todo updated' }, { status: 200 });
}

// Get a single item by ID
export async function GET(request, { params }) {
  const { id } = params
  await connectMongoDB()
  const todo = await Todo.findOne({ _id: id })
  return NextResponse.json({ todo }, { status: 200 })
}