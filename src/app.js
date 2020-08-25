import {createElement as e} from "react";

import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
import "semantic-ui-css/components/header.min.css";
import "semantic-ui-css/components/container.min.css";
import "semantic-ui-css/components/grid.min.css";
import "semantic-ui-css/components/list.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Resume from "./pages/resume";
import "./app.css";

const lines = [
  "$ sudo rm -rf --no-preserve-root /",
  "We trust you have received the usual lecture from the local System Administrator. It usually boils down to these three things:",
  "#1) Respect the privacy of others.",
  "#2) Think before you type.",
  "#3) With great power comes great responsibility."
];

function link(to, text) {
  return (
    e("a", {
      className: "nav-link link",
      href: to,
      target: "_blank"
    }, text)
  );
}

const GithubProfileLink = link("https://github.com/jethrodaniel", "github");
const GithubSourceLink  = link("https://github.com/jethrodaniel/jethrodaniel.github.io", "source");

const SiteHeader = () => (
  e("nav", null,
    e(List, {horizontal: true},
      e(List.Item, null,
        e(Header, {id: "title", className: "link", inverted: true},
          e(Link, {to: "/", className: "nav-link link"}, "~")
        )
      ),
      e(List.Item, null,
        e(Link, {to: "resume", className: "nav-link link"}, "resume")
      ),
      e(List.Item, null, GithubProfileLink),
      e(List.Item, null, GithubSourceLink)
    ),
    e(Segment, null, e(Divider, {id: "nav-line"})),
  )
);

const MainContent = () => (
  e(Grid, null,
    e(Grid.Row, {horizontal: true}, [
      e(Grid.Column, {width: 1},
        e(Container, {textAlign: "center"}, "example")
      ),
      e(Grid.Column, null,
        e(Container, {textAlign: "center"}, "text")
      )
    ])
  )
);

const SiteBanner = () => (
  e(Grid, {divided: "vertically"},
    e(Grid.Row, null,
      e(Grid.Column, null,
        e(Container, {textAlign: "left"},
          e(List, null, lines.map((i) => e(List.Item, null, i)))
        )
      )
    ),
    e(Grid.Row, null,
      e(Grid.Column, null, e(Divider, {inverted: true}))
    ),
  )
);

const Index = () => (
  e(Container, null,
    SiteBanner(),
    MainContent()
  )
);

const App = () => (
  e(Router, null,
    e(Container, {id: "main"}, SiteHeader()),
    e(Switch, null,
      e(Route, {path: "/resume"}, Resume()),
      e(Route, {path: "/"}, Index())
    )
  )
);

export default App;
