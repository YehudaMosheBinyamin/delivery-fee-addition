//import { sql } from '@velo/wix-data-sql-backend';
export async function GET(req: Request) {
  console.log("AVO");
  console.log('Log from GET.');
  try{
    console.log('MongoDB connected successfully');
}
catch(error){
    console.error('MongoDB connection error:', error);
};

  return new Response('222');
};

export async function POST(req: Request) {
  const data = await req.json();
  console.log('Log POST with body:', data);
  return Response.json(data);
};
