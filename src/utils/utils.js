/** @format */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const debouncedSetQuery = (term, setSearch) => {
  clearTimeout(debouncedSetQuery.timeoutId);
  debouncedSetQuery.timeoutId = setTimeout(() => {
    setSearch(term);
  }, 500);
};

const pushInArr = (item, setValue) => {
  setValue((prevSelected) => {
    if (prevSelected.includes(item)) {
      return prevSelected.filter((value) => value !== item);
    } else {
      return [...prevSelected, item];
    }
  });
};


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};



export { debouncedSetQuery, pushInArr ,ScrollToTop };
