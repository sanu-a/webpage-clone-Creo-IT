import React from "react";
import "../styles/category.css";
import CategoryArr from "../constants/CategoryArr";

const Category = () => {
  console.log(CategoryArr);
  const Arr = CategoryArr;

  return (
    <div className="category">
      <div className="heading">Shop by category</div>
      <div className="list">
        {Arr.map((e) => {
          return (
            <span className="items" key={e.id}>
              <img src={e.src} />
              {e.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
