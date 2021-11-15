import {render} from "@testing-library/react";
import { Provider} from "react-redux";
import { store} from '../../store'
import { BrowserRouter } from "react-router-dom";
import JobItem  from ".";
import Job from "../../models/jobModel";

describe('With React Testing Library', () => {
  const job:Job =  {
    title: "model",
    image: "http://placeimg.com/64/480/transport",
    description: "Human",
    is_hot: true,
    city: "New Madgeville",
    salary: "338.00",
    create_at: "2021-02-14T08:06:34.850Z",
    update_at: "2022-06-16T06:07:03.795Z",
    id: "1"
   }
  it("should render ItemJob", () => {
    const { container } = render(<Provider store={store}>
      <BrowserRouter>
        <JobItem job={job}/>
      </BrowserRouter>
      </Provider>);
    expect(container).toBeInTheDocument();
  });
})



