// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  scp -i Downloads\aws-practice1.pem C:\Personal Work\docker app\new next js\app.zip 3.84.30.146:/
  res.status(200).json({ name: 'John Doe' })
}
