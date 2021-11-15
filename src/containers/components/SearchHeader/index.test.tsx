import {render} from "@testing-library/react";


import { Provider} from "react-redux";
import {store} from '../../store'
import { BrowserRouter } from "react-router-dom";
import  SearchHeader  from ".";

describe('With React Testing Library', () => {
  it("should render SearchHeader", () => {
    const { container } = render(<Provider store={store}>
      <BrowserRouter>
      <SearchHeader />
      </BrowserRouter>
      </Provider>);
    expect(container).toBeInTheDocument();
  });
})