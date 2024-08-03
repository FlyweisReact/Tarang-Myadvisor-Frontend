/** @format */

import { Badge } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { CreateBlog } from "../../components/Modals/Modals";
import { deleteApi, getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { ClipLoader } from "react-spinners";
import DashboardLayout from "../../Layout/UserDashboardLayout/DashboardLayout";

const BlogCard = ({ item, fetchHandler, setType, setBlogData, setOpen }) => {
  const { img, title, description, publishedOn, status, id } = item;
  const [loading, setLoading] = useState(false);

  const statusChecker = (status) => {
    if (status === "VERIFIED") {
      return <Badge bg="success">Published</Badge>;
    } else if (status === "PENDING") {
      return <Badge>Pending</Badge>;
    } else {
      return <Badge bg="danger">Rejected</Badge>;
    }
  };

  const removeHandler = (id) => {
    deleteApi(endPoints.adwizor.removeBlog(id), {
      successMsg: "Removed",
      setLoading,
      additionalFunctions: [fetchHandler],
    });
  };

  return (
    <div className="main">
      <div className="head">
        <img src={img} alt="" />
        <div className="detail">
          <p className="title"> {title} </p>
          <p className="published-on"> {publishedOn} </p>
        </div>
      </div>
      <div className="content">
        <p className="desc">{description}</p>
        {statusChecker(status)}
        <div className="btn-container">
          <button
            onClick={() => {
              setType("edit");
              setBlogData(item);
              setOpen(true);
            }}
          >
            Update
          </button>
          <button className="cancel" onClick={() => removeHandler(id)}>
            {loading ? <ClipLoader color="#fff" /> : "Remove"}
          </button>
        </div>
      </div>
    </div>
  );
};

const AdwizorBlogs = () => {
  const [blogs, setBlogs] = useState({ data: [] });
  const [profile, setProfile] = useState({});
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [blogData, setBlogData] = useState({});

  const fetchHandler = () => {
    getApi(endPoints.adwizor.myBlogs, {
      setResponse: setBlogs,
    });
  };

  useEffect(() => {
    fetchHandler();
    getApi(endPoints.getAdwizorProfile, {
      setResponse: setProfile,
    });
  }, []);

  const blogsList = blogs.data
    .slice()
    .reverse()
    .map((i) => ({
      img: i?.imagePath,
      title: i?.title,
      description: i?.content,
      publishedOn: i?.createdAt?.slice(0, 10),
      status: i?.blogStatus,
      id: i._id,
    }));

  return (
    <section className="adwizor-panel">
      <CreateBlog
        show={open}
        onHide={() => setOpen(false)}
        author={profile?.data?.fullname}
        fetchHandler={fetchHandler}
        type={type}
        prevData={blogData}
      />
      <div className="section-heading">
        <p className="title">My Blogs</p>
        <button
          onClick={() => {
            setType("create");
            setBlogData({});
            setOpen(true);
          }}
        >
          {" "}
          Create New
        </button>
      </div>
      <div className="user-blogs  mt-5">
        <div className="cards">
          {blogsList.map((i, index) => (
            <BlogCard
              key={`blogs${index}`}
              item={i}
              fetchHandler={fetchHandler}
              setType={setType}
              setBlogData={setBlogData}
              setOpen={setOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout(AdwizorBlogs);
