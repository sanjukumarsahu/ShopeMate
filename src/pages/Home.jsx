import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const filteredProducts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(query) || post.Category?.toLowerCase().includes(query)
  );
  async function fetchProductsData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log("Data Not Found!!!!");
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="">
      <div className=" max-w-6xl pt-25 mx-auto flex justify-around items-center ">
        <div>
          {" "}
          <SearchBar setSearchQuery={setQuery} query={query} />
        </div>
        <Category selected={query} onChange={setQuery} />
      </div>
      <div className="  max-w-6xl mx-auto flex justify-center items-center   ">
        {loading ? (
          <Spinner />
        ) : filteredProducts.length > 0 ? (
          <div className=" grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10 lg:grid-cols-4 mx-10  ">
            {filteredProducts.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="font-bold flex justify-center items-center ">
            <p>No Data Founded</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
