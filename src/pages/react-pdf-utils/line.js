import {createElement as e} from "react";
import {Text} from "@react-pdf/renderer";

const style = {
  borderBottomWidth: "1",
  borderBottomColor: "#112131",
  borderBottomStyle: "solid",
  marginBottom: "6pt",
};

export function hr(width) {
  return e(Text, {style: {width: `${width}px`, ...style}});
}
