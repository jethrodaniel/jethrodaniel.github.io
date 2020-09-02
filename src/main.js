import {render} from "react-dom";
import {createElement as e} from "react";

import App from "./app";

// ReactPDF.render(Resume, "output.pdf");
render(e(App), document.getElementById("app"));
