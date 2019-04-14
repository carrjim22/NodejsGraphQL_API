import mongoose  from 'mongoose';

export const connect = async () =>{
  try{
    await mongoose.connect(process.env.DATABASE_URI, {
         useNewUrlParser: true
     })
     console.log('MongoDB is conected')
  }catch(e) {
    console.error(e);
  }
}
