import React from "react";
import Layout from "./Layout";

const PageNotFound = () => {
  const logo =
    "data:image/png;base64,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";
  return (
    <Layout>
      <div className="container">
        <img alt="pagenotfound" src={logo} style={{ backgroundSize: "auto" }} />
      </div>
    </Layout>
  );
};

export default PageNotFound;
