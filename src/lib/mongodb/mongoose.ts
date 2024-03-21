import { connect } from 'mongoose';

const conn: any = {
  isConnected: false,
}

export async function connectToDatabase() {
  if (conn.isConnected) return

  const URI = process.env.MONGODB_URI;

  if (!URI) throw new Error('MONGODB_URI is missing')
  const db = await connect(URI)

  conn.isConnected = db.connections[0].readyState;
}
