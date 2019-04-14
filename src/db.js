import mongoose  from 'mongoose';

export const connect = async () =>{
   await mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true
    })
    console.log('MongoDB is conected')
}