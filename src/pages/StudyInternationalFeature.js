/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WithLayout from "../Layout/WithLayout";

const StudyInternationalFeature = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="text-banner mt-5 mb-5">
        <h1>STUDY IN AUSTRALIA</h1>
        <button onClick={() => navigate("/connect-with-adwizor")}>
          Talk to an Expert Counsellor
        </button>
      </div>

      <div className="college-features boxShadow-container  mt-5 mb-5">
        <h4 className="main-heading">WHY STUDY IN AUSTRALIA </h4>
        <p className="desc">
          Australia's dedication to providing high-quality education, fostering
          cultural diversity, offering work opportunities, showcasing natural
          beauty, and ensuring a high quality of life with numerous outdoor
          activities makes it a compelling destination for international
          students seeking a comprehensive and enriching educational experience.
        </p>
        <p className="title"> High-Quality Education:</p>
        <p className="desc">
          Australia is home to world-class universities known for their academic
          excellence and rigorous educational standards.
        </p>
        <p className="title"> Diverse Range of Programs:</p>
        <p className="desc">
          Australian univer sities offer a wide variety of programs, allowing
          international students to choose courses that align with their
          academic and career goals.
        </p>
        <p className="title">Global Recognition:</p>
        <p className="desc">
          Australian degrees are globally recognised and respected, enhancing
          career opportunities and mobility.
        </p>
        <p className="title">Research Opportunities:</p>
        <p className="desc">
          Australia is a hub for research and innovation, providing
          international students with opportunities to engage in cutting-edge
          research projects.
        </p>
        <p className="title">English Language Proficiency:</p>
        <p className="desc">
          Studying in an English-speaking country like Australia facilitates
          language proficiency, a valuable skill in the global job market.
        </p>
        <p className="title">Quality of Life:</p>
        <p className="desc">
          Australia consistently ranks high in terms of quality of life,
          offering students a safe, clean, and comfortable environment.
        </p>
        <p className="title">Part-Time Work Opportunities:</p>
        <p className="desc">
          Australia allows international students to work part-time during their
          studies, providing opportunities for practical work experience.
        </p>
        <p className="title">Post-Study Work Opportunities:</p>
        <p className="desc">
          The Temporary Graduate visa (subclass 485) allows international
          graduates to work in Australia temporarily after completing their
          studies.
        </p>
        <p className="title">Friendly and Safe Environment:</p>
        <p className="desc">
          Australians are known for their friendliness and hospitality,
          contributing to a positive and supportive living and studying
          environment.
        </p>
        <p className="title">Innovative Teaching Methods:</p>
        <p className="desc">
          Australian universities often employ innovative teaching methods,
          fostering critical thinking and practical skills development.
        </p>
        <p className="title">Internship and Industry Exposure:</p>
        <p className="desc">
          Many Australian programs include internships and industry placements,
          offering students practical exposure to their chosen field.
        </p>
        <p className="title">Healthcare Services:</p>
        <p className="desc">
          Australia provides access to high-quality healthcare services,
          ensuring the well-being of international students.
        </p>
        <p className="title">Global Perspective:</p>
        <p className="desc">
          Studying in Australia exposes students to a global perspective, as the
          country attracts students from around the world.
        </p>
        <p className="title">Environmental Sustainability:</p>
        <p className="desc">
          Australia is committed to environmental sustainability, making it an
          ideal destination for students interested in environmental studies and
          conservation.
        </p>
        <p className="title">Student Support Services:</p>
        <p className="desc">
          Australian universities offer comprehensive support services for
          international students, including academic assistance, counselling,
          and cultural integration programs.
        </p>
        <h4 className="main-heading mt-5 mb-5">
          If you're considering studying in Australia, here are some key <br />{" "}
          points to keep in mind:{" "}
        </h4>
        <p className="title">Choose a Course and Institution:</p>
        <p className="desc">
          Explore the wide range of courses offered by Australian universities
          and vocational institutions. Consider your academic and career goals
          while selecting the right course.
        </p>
        <p className="title">Check Entry Requirements:</p>
        <p className="desc">
          Verify the entry requirements for your chosen course, including
          academic qualifications and English language proficiency. Most
          institutions accept standardized test scores like IELTS or TOEFL.
        </p>
        <p className="title">Apply to Institutions:</p>
        <p className="desc">
          Submit applications to the institutions of your choice. Many
          universities have online application portals, and some may require
          additional documents such as a personal statement or letters of
          recommendation.
        </p>
        <p className="title">Obtain Confirmation of Enrollment (CoE):</p>
        <p className="desc">
          Once accepted, you will receive a Confirmation of Enrollment (CoE)
          from your institution. This document is crucial for your visa
          application.
        </p>
        <p className="title">Apply for a Student Visa:</p>
        <p className="desc">
          Obtain a student visa from the Australian Department of Home Affairs.
          Ensure that you meet all visa requirements, including health insurance
          coverage.
        </p>
        <p className="title">Arrange Accommodation:</p>
        <p className="desc">
          Explore accommodation options, whether it's on-campus housing, private
          rentals, or homestays. Many institutions offer support in finding
          suitable accommodation.
        </p>
        <p className="title">Plan Finances:</p>
        <p className="desc">
          Estimate your living expenses, including tuition fees, accommodation,
          food, transportation, and miscellaneous expenses. Plan your budget
          accordingly and explore scholarship opportunities.
        </p>
        <p className="title">Health Insurance:</p>
        <p className="desc">
          Australian law requires all international students to have Overseas
          Student Health Cover (OSHC). Ensure you have health insurance coverage
          before arriving in Australia.
        </p>
        <p className="title">Arrival and Orientation:</p>
        <p className="desc">
          Plan your arrival and attend any orientation programs provided by your
          institution. This will help you acclimate to the new environment and
          understand academic and cultural expectations.
        </p>
        <p className="title">Explore Part-Time Work Opportunities:</p>
        <p className="desc">
          International students in Australia are generally allowed to work
          part-time during their studies. Familiarize yourself with the rules
          and explore part-time job opportunities.
        </p>
        <p className="title">Embrace Cultural Experiences:</p>
        <p className="desc">
          Australia is known for its diverse and vibrant culture. Take advantage
          of cultural events, explore local attractions, and connect with fellow
          students to enhance your overall experience.
        </p>
        <p className="title">Stay Informed and Connected:</p>
        <p className="desc">
          Stay informed about any updates or changes related to your course or
          visa status. Connect with your university's international student
          services for guidance and support.
        </p>
        <p className="desc">
          Remember that each institution may have specific processes and
          requirements, so it's essential to refer to the official websites of
          the institutions you are interested in. Additionally, staying
          organized and proactive in your preparations will contribute to a
          smooth and enjoyable study experience in Australia.
        </p>
        <button>View Less</button>
      </div>
    </section>
  );
};

export default WithLayout(StudyInternationalFeature);
