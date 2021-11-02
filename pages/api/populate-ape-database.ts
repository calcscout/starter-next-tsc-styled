import dbConnect from '../../lib/dbConnect';
import Ape from '../../models/Ape';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { ape_id } = JSON.parse(req.body);
  console.log('Body:', req.body);
  console.log('Ape_id:', ape_id);

  await dbConnect();

  const openseaResponse = await fetch(
    `https://api.opensea.io/api/v1/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${ape_id}/`
  );
  const data = await openseaResponse.json();
  const {
    token_id,
    image_url,
    image_preview_url,
    image_thumbnail_url,
    image_original_url,
    permalink,
    traits
  } = await data;

  const JSONData = {
    token_id,
    contractNumber: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
    image_url,
    image_preview_url,
    image_thumbnail_url,
    image_original_url,
    permalink,
    traits
  };

  console.log('JSONData ready for database: ', JSONData);

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
        console.log('Started post');
        const ape = await Ape.create(JSONData); /* create a new model in the database */
        console.log('Finished post');

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
