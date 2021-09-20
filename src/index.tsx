import ReactDOM from "react-dom";
import "./style/main.scss";
import { BrowserRouter } from "react-router-dom";

import { App } from "./containers/App";
import { Provider } from "react-redux";
import { store } from "./state";
import gsap from "gsap/gsap-core";
gsap.config({
  nullTargetWarn: false,
});
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
