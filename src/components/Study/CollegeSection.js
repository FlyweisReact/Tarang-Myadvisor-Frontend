/** @format */

import { filterSlash } from "../../assest";
import { debouncedSetQuery, pushInArr } from "../../utils/utils";

const CollegeFilters = ({ data }) => {
  return (
    <div className="filters-div">
      <p className="title"> {data?.title} </p>
      <h4> {data?.heading} </h4>
      <p className="result-text"> {data?.foundCount} </p>

      <div className="content-div">
        <div className="flex-div">
          {data?.options?.map((i, index) => (
            <div className="Items" key={`filterArr${index}`}>
              <div className="heading">
                <p className="title">{i.title}</p>
                <img src={filterSlash} alt="" />
              </div>

              <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type={"search"}
                  placeholder={i.placeholder}
                  onChange={(e) =>
                    debouncedSetQuery(e.target.value, i.inputValue)
                  }
                />
              </div>

              <ul>
                {i.list.map((item, index) => (
                  <li key={`${item}/${index}`}>
                    <input
                      type={"checkbox"}
                      checked={i?.value?.includes(item)}
                      onClick={() => pushInArr(item, i.setValue)}
                    />
                    <span> {item} </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { CollegeFilters };
