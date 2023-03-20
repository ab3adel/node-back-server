import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/homeSlicer'

export default configureStore({
  reducer: {
    products: productReducer,

  }
})