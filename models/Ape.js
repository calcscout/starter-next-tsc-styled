import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const ApeSchema = new mongoose.Schema({
  token_id: {
    type: Number,
    required: [true, 'Please provide ID of the APE']
  },
  contractNumber: {
    type: String,
    required: [true, 'Please provide contract address for the collection'],
    maxlength: [42, 'Address shuold have length of 42 symbols']
  },
  image_url: {
    /* Address for the image of the Ape */
    type: String,
    required: true
  },
  image_preview_url: {
    /* Address for the preview image of the Ape */
    type: String,
    required: true
  },
  image_thumbnail_url: {
    /* Address for the thumbnail image of the Ape */
    type: String,
    required: true
  },
  image_original_url: {
    /* Original image */
    type: String,
    required: true
  },
  permalink: {
    /* Original image */
    type: String,
    required: true
  },
  traits: {
    /*Type of the mouth, like bored or grin*/
    type: Array
  }
});

export default mongoose.models.Ape || mongoose.model('Ape', ApeSchema, 'ape_details');
