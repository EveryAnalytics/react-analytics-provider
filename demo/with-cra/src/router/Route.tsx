import React, { Fragment, useEffect, useState } from "react";

const Route = ({
  path,
  children,
}: {
  path: string;
  children: React.ReactElement;
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname + window.location.search);

  // FIXME: querystring이 바뀌어도 listening을 못함
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname + window.location.search);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return (currentPath.indexOf("?") !== -1 ? currentPath.slice(0, currentPath.indexOf("?")) : currentPath ) === path
   ? <Fragment key={currentPath}>{children}</Fragment> : null;
};

export default Route;
