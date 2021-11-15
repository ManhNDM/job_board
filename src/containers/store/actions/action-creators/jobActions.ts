import axios from "axios";
import { Dispatch } from "redux";
import Job from "../../../models/jobModel";
import ActionTypes from "../action-types";
import { Action } from "../job.action";
export const getJobs =
  (perPage: number) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionTypes.GET_JOBS_REQUEST,
      });

      const jobs = axios.get<Job[]>(
        "https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs"
      );
      const jobsPage = axios.get<Job[]>(
        `https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs?page=1&limit=${perPage}`
      );
      const [resultJob, resultPage] = await Promise.all([jobs, jobsPage]);

      // const {data} = await  axios.get<Job[]>("https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs");

      setTimeout(() => {
        dispatch({
          type: ActionTypes.GET_JOBS_SUCCESS,
          payload: {
            jobs: resultJob.data,
            jobsPage: resultPage.data,
          },
        });
      }, 1000);
    } catch (err: any) {
      dispatch({
        type: ActionTypes.GET_JOBS_SUCCESS,
        payload: err.message,
      });
    }
  };

export const getJobsPageCount =
  (pageCount: number, perPage: number) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionTypes.GET_JOBS_PAPE_COUNT,
      });

      const { data } = await axios.get<Job[]>(
        `https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs?page=${pageCount}&limit=${perPage}`
      );

      setTimeout(() => {
        dispatch({
          type: ActionTypes.GET_JOBS_PAPE_COUNT_SUCCESS,
          payload: {
            jobs: data,
            page: pageCount - 1,
          },
        });
      }, 1000);
    } catch (err: any) {
      dispatch({
        type: ActionTypes.GET_JOBS_PAPE_COUNT_FAIL,
        payload: err.message,
      });
    }
  };

export const getJobsSearching =
  (key: string,page: string) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionTypes.GET_JOBS_SEARCHING,
      });

      const jobsSearch = axios.get<Job[]>(
        `https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs?title=${key}`
      );
      const jobsSearchPage = axios.get<Job[]>(
        `https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs?page=${page}&limit=10&title=${key}`
      );
      const [resultJobSearch, resultJobSearchPage] = await Promise.all([
        jobsSearch,
        jobsSearchPage,
      ]);

      dispatch({
        type: ActionTypes.GET_JOBS_SEARCHING_SUCCESS,
        payload: {
          jobsSearch: resultJobSearch.data,
          jobsSearchPage: resultJobSearchPage.data,
          pageSearch:page
        },
      });
   
    } catch (err: any) {
      dispatch({
        type: ActionTypes.GET_JOBS_SEARCHING_FAIL,
        payload: err.message,
      });
    }
  };
