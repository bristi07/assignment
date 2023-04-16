import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Stories from "../components/Stories";
const Home = () => {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Stories />
      <Card />
      <Footer />
    </div>
  );
};
export default Home;