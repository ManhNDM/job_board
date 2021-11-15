import Job from '../../models/jobModel';
import ActionTypes from './action-types';

interface GetJobsRequestAction {
    type:ActionTypes.GET_JOBS_REQUEST
}


interface GetJobsSuccessAction {
    type:ActionTypes.GET_JOBS_SUCCESS;
    payload:{
        jobs:Job[],
        jobsPage:Job[]
    };
}

interface GetJobsFailureAction {
    type:ActionTypes.GET_JOBS_FAIL;
    payload:string;
}

interface GetJobsPageRequestAction {
    type:ActionTypes.GET_JOBS_PAPE_COUNT
}

interface GetJobsPageSuccessAction {
    type:ActionTypes.GET_JOBS_PAPE_COUNT_SUCCESS;
    payload:{
        jobs:Job[];
        page:number;
    };
}

interface GetJobsPageFailureAction {
    type:ActionTypes.GET_JOBS_PAPE_COUNT_FAIL;
    payload:string;
}

interface GetJobsSearchingRequestAction {
    type:ActionTypes.GET_JOBS_SEARCHING
}


interface GetJobsSearchingSuccessAction {
    type:ActionTypes.GET_JOBS_SEARCHING_SUCCESS,
    payload:{
        jobsSearch:Job[],
        jobsSearchPage:Job[],
        pageSearch:string
    };
}

interface GetJobsSearchingFailAction {
    type:ActionTypes.GET_JOBS_SEARCHING_FAIL,
    payload:string
}

export type Action =  
    | GetJobsRequestAction
    | GetJobsSuccessAction
    | GetJobsFailureAction
    | GetJobsPageRequestAction
    | GetJobsPageSuccessAction
    | GetJobsPageFailureAction
    | GetJobsSearchingRequestAction
    | GetJobsSearchingSuccessAction
    | GetJobsSearchingFailAction
 