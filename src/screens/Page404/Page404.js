import React from "react";
import ErrorMessage from "../../components/ErrorMessage";

const Page404 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "93vh",
      }}
    >
      <ErrorMessage variant="danger">Page Not Found. 404 Error!</ErrorMessage>
    </div>
  );
};

export default Page404;
