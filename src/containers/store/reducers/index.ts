import {combineReducers} from 'redux'
import {jobReducer} from './job.reducer'

const reducers = combineReducers({
    jobs:jobReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>