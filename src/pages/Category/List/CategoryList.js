import { Fragment } from "react";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const categories = useSelector((state) => state.category.categories);

  return (
    <Fragment>
      <h4>List of Categories</h4>
      {categories.map((item) => (
        <ul key={Math.random()}>{item}</ul>
      ))}
    </Fragment>
  );
};

export default CategoryList;
