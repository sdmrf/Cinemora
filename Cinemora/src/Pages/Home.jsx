import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const { name, email } = useSelector((state) => state.user.user);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  );
};

export default Home;
