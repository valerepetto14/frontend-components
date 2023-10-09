import React from "react";

import Products from "./sections/products";
import Films from "./sections/films";
import Users from "./sections/users";
import Tabs from "./sections/tabs";

function App() {
  return (
    <div className="bg-gray-900 App w-full flex flex-col justify-center items-center">
      <Films />
      <Products />
      <Users />
      <Tabs />
    </div>
  );
}

export default App;
