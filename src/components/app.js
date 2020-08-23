import React, {useState, useEffect} from "react"
const e = React.createElement;

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

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
    e(Header, {id: "title", className: "inverted"},
      e('a', {
        className: "button-line",
        href: "https://github.com/jethrodaniel",
        target: "_blank"
      }, "@jethrodaniel")
    )
  );
}

const Content = () => {
  return (
    e(Grid.Row, null, [
      e(Grid.Column, {width: 8},
        e(Container, {textAlign: "center"}, "wpw")
      ),
      e(Grid.Column, {width: 8},
        e(Container, {textAlign: "center"}, "wpw")
      )
    ])
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
      // Content()
    )
  );
}

const Index = () => {
  return (
    e(Container, {id: "main"},
      e(Container, null, [
        SiteHeader(),
        SiteBanner()
      ])
    )
  );
};

export default Index;
