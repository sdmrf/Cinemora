import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const { name, email } = useSelector((state) => state.user.user);
  return (
    <div style={{height: "1000vh", backgroundColor: "#eeee"}}>
    </div>
  );
};

export default Home;
