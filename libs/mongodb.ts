const mongoose = require('mongoose')

const connectMongoDB = async () => {
  try {
    const mongoDBString = process.env.NEXT_PUBLIC_MONGODB_URI
    if (!mongoDBString) {
      throw new Error('MONGODB_URI environment variable is not set.')
    }

    await mongoose.connect(mongoDBString)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

module.exports = connectMongoDB
