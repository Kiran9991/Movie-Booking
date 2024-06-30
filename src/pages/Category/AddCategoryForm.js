import React, { Fragment, useRef } from "react";
import { useDispatch } from 'react-redux';
import { categoryActions } from "../../store/categorySlice";
import "./AddCategoryForm.css";
import CategoryList from "./CategoryList";

const AddCategory = () => {
  const category = useRef();
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let singleCategory = category.current.value;
    dispatch(categoryActions.addCategory(singleCategory))
    category.current.value = '';
  };

  return (
    <Fragment>
      <div style={{ marginLeft: '5rem'}}>
      <form onSubmit={formSubmitHandler} className="categoryForm">
        <label className="categoryFormLabel">Category</label>
        <input className="categoryFormInput" type="text" ref={category} />
        <button className="categoryFormButton" type="submit">
          Add Category
        </button>
      </form>
      <CategoryList/>
      </div>
    </Fragment>
  );
};

export default AddCategory;
