/** @format */

import React, { useEffect } from "react";
import { BlinkingHeading } from "../../components/HelpingComponents";
import TableLayout from "../../components/TableLayout";
import CollegePageLayout from "../../Layout/CollegeLayout/Layout/CollegePageLayout";

const tbody = [
  [
    "Offered by",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
  [
    "Organization",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
  [
    "Application Deadline",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
  [
    "No. of Scholarships",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
  [
    "Amount",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
  [
    "Renewability",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
  [
    "Scholarship Website",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
];

const CollegeDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="college-read-more">
      <BlinkingHeading
        text={
          "Admissions Open for O P Jindal Global University. Click to Apply Now!"
        }
      />

      <div className="highlight margin-div">
        <h4 className="normal-heading">Highlights</h4>

        <TableLayout
          thead={[
            "Scholarship Type",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          ]}
          tbody={tbody}
          className="higlight-table mt-5 mb-5"
        />
      </div>

      <div className="margin-div desc"></div>

      <div className="description-box margin-div">
        <h4 className="normal-heading">Highlights</h4>
        <p className="desc mt-3">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac
        </p>
      </div>

      <div className="description-box margin-div">
        <h4 className="normal-heading">Application Process</h4>
        <p className="desc mt-3">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac
        </p>
      </div>
      <div className="description-box margin-div">
        <h4 className="normal-heading">Selection Process</h4>
        <p className="desc mt-3">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac
        </p>
        <p className="desc mt-3">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac
        </p>
        <p className="desc mt-3">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac
        </p>
      </div>

      <div className="description-box margin-div">
        <h4 className="normal-heading">Grant Details</h4>
        <p className="desc mt-3">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac
        </p>
        <p className="desc mt-3">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac
        </p>
        <p className="desc mt-3">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac
        </p>
      </div>
      <div className="blank-div margin-div boxShadow-container"></div>
    </section>
  );
};

export default CollegePageLayout({ WrappedComponent: CollegeDetails });
