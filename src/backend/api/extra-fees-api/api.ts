//import mongoose from 'mongoose';
//Perhaps without Node?????
type DeliveryFee = {
  feeName: string,
  price: string
}
export async function GET(req: Request) {
  console.log("AVO");
  console.log('Log from GET.');
  try{
    //await mongoose.connect('mongodb://localhost:27017/myDatabase');
    console.log('MongoDB connected successfully');
}
catch(error){
    console.error('MongoDB connection error:', error);
};
let f:DeliveryFee = {
  feeName: "deliv",
  price: "7"
};
  console.log(Response.json(f));
  return Response.json(f);
};

export async function POST(req: Request) {
  const data = await req.json();
  console.log('Log POST with body:', data);
  return Response.json(data);
};
