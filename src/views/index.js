import React from "react";
import Navbar from "../components/Nav/Navbar";
import SearchInput from "../components/Search/search";
import Footer from "../components/Footer/footer";

function AppView() {
  return (
    <div className="hero">
      <Navbar />
      <SearchInput />
      <Footer />
    </div>
  );
}
export default AppView;
