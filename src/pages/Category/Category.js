import AddCategory from "./Form/AddCategoryForm";
import CategoryList from "./List/CategoryList";
import Container from "../../components/Container";

const Category = () => {
  return (
    <Container size={'20rem'}>
      <AddCategory />
      <CategoryList />
    </Container>
  );
};

export default Category;
