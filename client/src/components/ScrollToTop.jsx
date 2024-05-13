import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // works if any location changes 
  //const { pathname } = useLocation(); // works only if path changes 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

export default ScrollToTop;
