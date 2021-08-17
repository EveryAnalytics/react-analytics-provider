import React, {useEffect, useState} from 'react';

const Route = ({path, children}: {path: string; children: React.ReactElement}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // FIXME: querystring이 바뀌어도 listening을 못함
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
