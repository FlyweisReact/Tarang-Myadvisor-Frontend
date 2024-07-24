/** @format */

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

const LogOutHandler = () => {
  const navigate = useNavigate();
  localStorage.clear();
  navigate("/");
};

const stringCutter = (text, length) => {
  if (text?.length > length) {
    return `${text?.slice(0 ,length)}...`;
  } else {
    return text;
  }
};



export {
  debouncedSetQuery,
  pushInArr,
  ScrollToTop,
  LogOutHandler,
  stringCutter,
};
