import React, {useState, useEffect} from "react"
const e = React.createElement;

import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'
// import "semantic-ui-css/semantic.min.css";
import "semantic-ui-css/components/header.min.css"
import "semantic-ui-css/components/container.min.css"
import "semantic-ui-css/components/grid.min.css"
import "semantic-ui-css/components/list.min.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./app.css"

const lines = [
  "$ sudo rm -rf --no-preserve-root /",
  "We trust you have received the usual lecture from the local System Administrator. It usually boils down to these three things:",
  "#1) Respect the privacy of others.",
  "#2) Think before you type.",
  "#3) With great power comes great responsibility."
]

const SiteHeader = () => {
  return (
    e('nav', null,
      e(List, {horizontal: true},
        e(List.Item, null,
          e(Header, {id: "title", className: "link", inverted: true},
            e(Link, {to: "/", className: "nav-link link"}, "~")
          )
        ),
        e(List.Item, null,
          // e(Link, {to: "resume", className: "nav-link link"}, "resume")
        ),
        e(List.Item, null,
          e('a', {
            className: "nav-link link",
            href: "https://github.com/jethrodaniel",
            target: "_blank"
          }, "github")
        )
      ),
      e(Segment, null, e(Divider, {id: "nav-line"})),
    )
  );
}

const MainContent = () => {
  return (
    e(Grid, null,
      e(Grid.Row, {horizontal: true}, [
        e(Grid.Column, {width: 1},
          e(Container, {textAlign: "center"}, "wpw")
        ),
        e(Grid.Column, null,
          e(Container, {textAlign: "center"}, "wpw")
        )
      ])
    )
  );
}

const SiteBanner = () => {
  return (
    e(Grid, {divided: 'vertically'},
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
}

const Resume = () => {
  return (
    e(Container, {id: "resume"},
      e(Container, null,
        e('p', null, "TODO: resume goes here")
      )
    )
  );
};


const Index = () => {
  return (
    e(Container, null, [
      SiteBanner(),
      // MainContent()
    ])
  );
};

const App = () => {
  return (
    e(Router, null,
      e(Container, {id: "main"},
        SiteHeader(),
      ),
      e(Switch, null,
        e(Route, {path: "/resume"},
          Resume()
        ),
        e(Route, {path: "/"},
          Index()
        )
      )
    )
  );
};

export default App;
