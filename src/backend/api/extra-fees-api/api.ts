//import { sql } from '@velo/wix-data-sql-backend';

export async function GET(req: Request) {
  console.log("AVO");
  console.log('Log from GET.');
  //let val = "0";
  //await sql('INSERT INTO DelivValue (value) values ('+val+')');
  return new Response('222');
};

export async function POST(req: Request) {
  const data = await req.json();
  console.log('Log POST with body:', data);
  return Response.json(data);
};
