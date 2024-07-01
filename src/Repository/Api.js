/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";

const Baseurl = process.env.React_App_Baseurl;
const errorMessage = "Something went wrong !";

export const showMsg = (title, message, type) => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};

// Api Modules
export const getApi = async ({
  url,
  setResponse,
  setLoading,
  additionalFunctions = [],
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.get(`${Baseurl}${url}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    });
    setResponse(res.data);
    additionalFunctions.forEach((func) => {
      if (typeof func === "function") {
        func();
      }
    });
  } catch (e) {
    console.log(e);
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

export const editApi = async ({
  url,
  payload,
  setLoading,
  additionalFunctions = [],
  successMsg,
  errorMsg,
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.put(`${Baseurl}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    });
    if (res) {
      if (successMsg) {
        showMsg("", successMsg, "success");
      }
      additionalFunctions.forEach((func) => {
        if (typeof func === "function") {
          func(res?.data);
        }
      });
    }
  } catch (e) {
    const msg = e?.response?.data?.message || errorMessage;
    if (errorMsg && e?.response?.data?.message === undefined) {
      showMsg("", errorMsg, "danger");
    } else {
      showMsg("", msg, "danger");
    }
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

export const postApi = async ({
  url,
  payload,
  setLoading,
  additionalFunctions = [],
  successMsg,
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.post(`${Baseurl}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    });
    if (res) {
      if (successMsg) {
        showMsg("", successMsg, "success");
      }
      additionalFunctions.forEach((func) => {
        if (typeof func === "function") {
          func(res?.data);
        }
      });
    }
  } catch (e) {
    const msg = e?.response?.data?.message;
    showMsg("", msg, "danger");
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

export const deleteApi = async ({
  url,
  setLoading,
  successMsg,
  additionalFunctions = [],
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.delete(`${Baseurl}${url}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    });
    if (res) {
      if (successMsg) {
        showMsg("", successMsg, "success");
      }
      additionalFunctions.forEach((func) => {
        if (typeof func === "function") {
          func();
        }
      });
    }
  } catch (e) {
    console.log(e);
    const msg = e?.response?.data?.message || errorMessage;
    showMsg("", msg, "danger");
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};
