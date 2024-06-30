import React, { Fragment, useRef } from "react";
import "./AddCategory.css";

const AddCategory = () => {
  const category = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(category.current.value);
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler} className="categoryForm">
        <label className="categoryFormLabel">Category</label>
        <input className="categoryFormInput" type="text" ref={category} />
        <button className="categoryFormButton" type="submit">
          Add Category
        </button>
      </form>
      <ul>
        
      </ul>
    </Fragment>
  );
};

export default AddCategory;
