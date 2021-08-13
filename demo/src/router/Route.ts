import React from "react";

const Route = ({
  path,
  children,
}: {
  path: string;
  children: React.ReactElement;
}) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
