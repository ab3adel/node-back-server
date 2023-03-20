

import getConnction from './mongoose'
import mongoose from 'mongoose';
var cors = require('cors')

import {getProducts,createOneProduct} from './routes/products'

import express from 'express'


// Don't remove this comment. It's needed to format import lines nicely.

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//app.use(body_parser.json())
getConnction()

const conn = mongoose.connection


app.use(cors());
//app.use(compress());

// Host the public folder


// Set up Plugins and providers

// Configure other middleware (see `middleware/index.ts`)



// Configure a middleware for 404s and the error handler

//app.use("/file", uploader);

app.get('/products',getProducts)

app.post ('/createProduct',createOneProduct)
app.use( express.static(__dirname + '/public'));
export default app;




