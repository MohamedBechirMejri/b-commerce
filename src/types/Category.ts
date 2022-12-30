type Category = {
  id: string;
  name: string;
  subCategories?: Category[];
};
export default Category;
