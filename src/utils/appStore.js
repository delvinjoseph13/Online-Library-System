import {configureStore} from "@reduxjs/toolkit"
import bookreducer from './CreateBookSlice'

const appStore=configureStore({
    reducer:{
        books:bookreducer
    }

})

export default appStore;