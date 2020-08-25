import {render} from "react-dom";
import {createElement as e} from "react";
// import ReactPDF from "@react-pdf/renderer";

import "./main.css";
import App from "./app";
import Resume from "./pages/resume";

// ReactPDF.render(Resume, "output.pdf");
render(e(App), document.getElementById("app"));
