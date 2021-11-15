import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Job from "../../../models/jobModel";
import { getJobs } from "./jobActions";
import ActionTypes from "../../actions/action-types";

// Create axios mock
const axiosMock = new MockAdapter(axios);

// Mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetch jobs action", () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it("should fire GET_JOBS_REQUEST and GET_JOBS_SUCCESSS in case of success", async () => {
    const data: Job[] = [
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

    const jobPage: Job[] = [
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
    const numberPage: number = 10;

    // Mock the request sent to "/users" endpoint
    // Return 200 with mocked data


    axiosMock.onGet( "https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs").reply(200,{ response: data });
    // axiosMock.onGet(  `https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs?page=1&limit=${numberPage}`).reply(200,{jobPage});

    const expectedActions = [
      { type: ActionTypes.GET_JOBS_REQUEST },
      {
        type: ActionTypes.GET_JOBS_SUCCESS,
        payload: {
          jobs: data,
          jobsPage: jobPage,
        },
      },
    ];

    const store = mockStore({ data: [], jobsPage: [] });
    await store.dispatch(getJobs(numberPage) as any);

    console.table(store.getActions());
    

    expect(store.getActions()).toEqual(expectedActions);
  });
  // it("should fire GET_JOBS_REQUEST and GET_JOBS_FAIL in case of an error", async () => {
  //   // Mock the request sent to "/users" endpoint
  //   // Return "Network Error"
  //   axiosMock
  //     .onGet("https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs")
  //     .networkError();

  //   const expectedActions = [
  //     { type: ActionTypes.GET_JOBS_REQUEST },
  //     {
  //       type: ActionTypes.GET_JOBS_FAIL,
  //       payload: "Error: Network Error",
  //     },
  //   ];

  //   const store = mockStore();

  //   await store.dispatch(getJobs(1) as any);
  //   const test = store.getActions()
  //   console.table(test);
  //   console.table(expectedActions);
    
    
  //   expect(test).toEqual(expectedActions);
  // });
});
