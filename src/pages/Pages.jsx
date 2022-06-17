import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import SearchRes from "./SearchRes";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searchres/:search" element={<SearchRes />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
