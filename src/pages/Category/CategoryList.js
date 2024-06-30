import { Fragment } from "react";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const categories = useSelector((state) => state.category.categories);

  return (
    <Fragment>
      <h4>List of Categories</h4>
      <ul>
        {categories.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default CategoryList;
