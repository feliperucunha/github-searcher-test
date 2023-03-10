import React from "react";
import { Footer } from "../../../components"

import "./styles.css";

export default function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
