import {render} from "@testing-library/react";
import Home from "../Home";

import { Provider} from "react-redux";
import {store} from '../store'
import { BrowserRouter } from "react-router-dom";

describe('With React Testing Library', () => {
  it("should render Home", () => {
    const { container } = render(<Provider store={store}>
      <BrowserRouter>
      <Home />
      </BrowserRouter>
      </Provider>);
    expect(container).toBeInTheDocument();
  });
})
