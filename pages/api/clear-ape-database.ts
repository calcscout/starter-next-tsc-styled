import dbConnect from '../../lib/dbConnect';
import Ape from '../../models/Ape';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const apes = await Ape.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, data: apes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        console.log('Started delete');
        const ape = await Ape.deleteMany({}); /* create a new model in the database */
        console.log('Finished delete');

        res.status(201).json({ success: true, data: ape });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
