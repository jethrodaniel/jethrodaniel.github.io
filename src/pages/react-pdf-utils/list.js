import React from "react";
const e = React.createElement;

import {
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: "Roboto",
  },
});

const List = ({children}) => children;

export const Item = ({children}) => (
  e(View, {style: styles.item},
    e(Text, {style: styles.bulletPoint}, "•"),
    e(Text, {style: styles.itemContent}, children)
  )
);

export default List;
