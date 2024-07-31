/** @format */

import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { RatingComponent } from "../../components/HelpingComponents";
import { CreateReview } from "../../components/Modals/Modals";
import AdwizorLayout from "../../Layout/AdwizorPanelLayout/AdwizorLayout";
import { deleteApi, getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const Card = ({ item, setType, showOpen, setReviewDetail, fetchHandler }) => {
  const { status, img, rating, title, description, publishedOn, id } = item;
  const [loading, setLoading] = useState(false);

  const statusChecker = (status) => {
    if (status === "APPROVED") {
      return <Badge bg="success">Published</Badge>;
    } else if (status === "PENDING") {
      return <Badge>Pending</Badge>;
    } else {
      return <Badge bg="danger">Rejected</Badge>;
    }
  };

  const deleteHandler = () => {
    deleteApi(endPoints.adwizor.deleteReview(id), {
      setLoading,
      additionalFunctions: [fetchHandler],
    });
  };

  return (
    <div className="customer-review-card">
      <div className="rating">
        <img src={img} alt="" />
        <RatingComponent num={rating} />
      </div>
      <div className="content">
        {statusChecker(status)}
        <p className="title"> {title} </p>
        <p className="description">{description}</p>
        <p className="description"> Created at : {publishedOn}</p>
        <div className="btn-container">
          <button
            onClick={() => {
              setType("edit");
              setReviewDetail(item);
              showOpen(true);
            }}
          >
            Update
          </button>
          <button className="cancel" onClick={() => deleteHandler()}>
            {loading ? <ClipLoader color="#fff" /> : "Remove"}
          </button>
        </div>
      </div>
    </div>
  );
};

const AdwizorReviews = () => {
  const [reviews, setReviews] = useState({ data: [] });
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("create");
  const [reviewDetail, setReviewDetail] = useState({});

  const fetchHandler = () => {
    getApi(endPoints.adwizor.getAllReviews, {
      setResponse: setReviews,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const reviewsLists = reviews.data.map((i) => ({
    img: i?.userId ? i?.userId?.image : i?.image,
    rating: i.rating,
    title: i?.userId ? i?.userId?.fullname : i?.title,
    description: i?.description,
    status: i?.reviewStatus,
    publishedOn: i?.createdAt?.slice(0, 10),
    id: i?._id,
  }));

  return (
    <section className="adwizor-panel adwizor-reviews-page">
      <CreateReview
        show={open}
        onHide={() => setOpen(false)}
        type={type}
        fetchHandler={fetchHandler}
        prevData={reviewDetail}
      />
      <div className="section-heading mb-3">
        <p className="title">My Reviews</p>
        <button
          onClick={() => {
            setType("create");
            setOpen(true);
          }}
        >
          {" "}
          Create New
        </button>
      </div>
      <div className="grid-container-for-3">
        {reviewsLists.map((i, index) => (
          <Card
            item={i}
            key={index}
            setType={setType}
            showOpen={setOpen}
            setReviewDetail={setReviewDetail}
            fetchHandler={fetchHandler}
          />
        ))}
      </div>
    </section>
  );
};

export default AdwizorLayout(AdwizorReviews);
