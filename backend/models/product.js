const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Please enter product name'],
    trim: true,
    maxLength: [100, 'Prodcut name cannot exceed 100 characteres']
  },
    price: {
    type: Number,
    required: [true,'Please enter product price'],
    maxLength: [5, 'Prodcut name cannot exceed 5 characteres'],
    default: 0.0
  },
    description: {
    type: String,
    required: [true,'Please enter product description']
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
    public_id:{
      type: String,
      required:true
    },
    url:{
      type: String,
      required:true
    }
    }
  ],
  category: {
    type: String,
    required: [true, 'Please select category for this product'],
    enum:{
      values:[
        "Electronics",
        'Cameras',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home'
      ],
      message: 'Please select correct category for the product'
    }
  },
  seller: {
    type:String,
    required: [true, 'Please enter product seller']
  },
  stock: {
    type: Number,
    required: [true, 'Please enter product Stock'],
    maxLength: [5, 'Product stock can not be bigger than 99999'],
    default: 0
  },
  numberofReviews: {
    type:Number,
    default: 0
  },
  reviews:[
    {
      name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Product',productSchema);