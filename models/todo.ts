import mongoose, { Schema, Document } from 'mongoose'

interface ITodo extends Document {
  item: string
  isCompleted: boolean
  createdAt: Date
  updatedAt: Date
}

const todoSchema: Schema<ITodo> = new Schema<ITodo>(
  {
    item: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
)

const Todo =
  (mongoose.models.Todo as mongoose.Model<ITodo>) ||
  mongoose.model<ITodo>('Todo', todoSchema)

export default Todo
