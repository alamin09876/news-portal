import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSIdeNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories, "cate");
  return (
    <div className="space-y-6">
      <h2 className="text-2xl">All Caterogy </h2>
      {categories.map((category) => (
        <Link
          key={category.id}
          className="block ml-4 text-xl font-semibold"
          to={`category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSIdeNav;
