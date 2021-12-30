import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'
import NoCheating from './NoCheating'

export default applyMiddleware(thunk, NoCheating, logger);