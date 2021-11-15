import Job from "../../models/jobModel";
import { jobReducer } from "./job.reducer";
import ActionTypes from "../actions/action-types";

interface JobState {
  total: number;
  page: number;
  totalPage: number;
  perPage: number;
  jobs: Job[] | null;
  isLoading: boolean;
}
const initialState = {
  total: 0,
  page: 0,
  totalPage: 0,
  perPage: 10,
  jobs: null,
  isLoading: false,
};

const jobs: Job[] = [
  {
    title: "model",
    image: "http://placeimg.com/64/480/transport",
    description: "Human",
    is_hot: true,
    city: "New Madgeville",
    salary: "338.00",
    create_at: "2021-02-14T08:06:34.850Z",
    update_at: "2022-06-16T06:07:03.795Z",
    id: "1",
  },
  {
    title: "model",
    image: "http://placeimg.com/64/480/transport",
    description: "Human",
    is_hot: true,
    city: "New Madgeville",
    salary: "338.00",
    create_at: "2021-02-14T08:06:34.850Z",
    update_at: "2022-06-16T06:07:03.795Z",
    id: "2",
  },
];
const jobsPage: Job[] = [
  {
    title: "model",
    image: "http://placeimg.com/64/480/transport",
    description: "Human",
    is_hot: true,
    city: "New Madgeville",
    salary: "338.00",
    create_at: "2021-02-14T08:06:34.850Z",
    update_at: "2022-06-16T06:07:03.795Z",
    id: "1",
  }
];

describe("Jobs reducer tests", () => {
  it("should handle GET_JOBS", () => {
    expect(
      jobReducer(initialState, {
        type: ActionTypes.GET_JOBS_REQUEST,
      })
    ).toEqual({
      total: 0,
      page: 0,
      totalPage: 0,
      perPage: 10,
      jobs: null,
      isLoading: true,
    });
  });

  it("should handle GET_JOB_SUCCESS", () => {
    expect(
      jobReducer(initialState, {
        type: ActionTypes.GET_JOBS_SUCCESS,
        payload: {
          jobs: jobs,
          jobsPage: jobsPage,
        },
      })
    ).toEqual({
      total: 2,
      page: 0,
      totalPage: 1,
      perPage: 10,
      jobs: jobsPage,
      isLoading: false,
    });
  });

  it("should handle FETCH_USER_REJECTED", () => {
    expect(
      jobReducer(initialState, {
        type: ActionTypes.GET_JOBS_FAIL,
        payload: "Something went wrong",
      })
    ).toEqual({
      total: 0,
      page: 0,
      totalPage: 0,
      perPage: 10,
      jobs: null,
      isLoading: false,
    });
  });
});


describe("JobsPageCount reducer tests", () => {
  it("should handle GET_JOBS_PAPE_COUNT", () => {
    expect(
      jobReducer(initialState, {
        type: ActionTypes.GET_JOBS_PAPE_COUNT,
      })
    ).toEqual({
      total: 0,
      page: 0,
      totalPage: 0,
      perPage: 10,
      jobs: null,
      isLoading: true,
    });
  });

  it("should handle GET_JOBS_PAPE_COUNT_SUCCESS", () => {
    expect(
      jobReducer(initialState, {
        type: ActionTypes.GET_JOBS_PAPE_COUNT_SUCCESS,
        payload: {
          jobs: jobsPage,
          page:1
        },
      })
    ).toEqual({
      total: 0,
      page: 1,
      totalPage: 0,
      perPage: 10,
      jobs: jobsPage,
      isLoading: false,
    });
  });

  it("should handle GET_JOBS_PAPE_COUNT_FAIL", () => {
    expect(
      jobReducer(initialState, {
        type: ActionTypes.GET_JOBS_PAPE_COUNT_FAIL,
        payload: "Something went wrong",
      })
    ).toEqual({
      total: 0,
      page: 0,
      totalPage: 0,
      perPage: 10,
      jobs: null,
      isLoading: false,
    });
  });
});


describe("PageSearch reducer tests", () => {
  it("should handle GET_JOBS_SEARCHING", () => {
    expect(
      jobReducer(initialState, {
        type: ActionTypes.GET_JOBS_SEARCHING,
      })
    ).toEqual({
      total: 0,
      page: 0,
      totalPage: 0,
      perPage: 10,
      jobs: null,
      isLoading: true,
    });
  });

  it("should handle GET_JOBS_SEARCHING_SUCCESS", () => {
    expect(
      jobReducer(initialState, {
        type: ActionTypes.GET_JOBS_SEARCHING_SUCCESS,
        payload: {
          jobsSearch:jobs,
          jobsSearchPage:jobsPage,
          pageSearch:"1"
        },
      })
    ).toEqual({
      total: jobs.length,
      page: 0,
      totalPage: 1,
      perPage: 10,
      jobs: jobsPage,
      isLoading: false,
    });
  });

  it("should handle GET_JOBS_SEARCHING_FAIL", () => {
    expect(
      jobReducer(initialState, {
        type: ActionTypes.GET_JOBS_SEARCHING_FAIL,
        payload: "Something went wrong",
      })
    ).toEqual({
      total: 0,
      page: 0,
      totalPage: 0,
      perPage: 10,
      jobs: null,
      isLoading: false,
    });
  });
});


