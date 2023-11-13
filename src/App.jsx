import React from "react";

import Products from "./sections/products";
import Films from "./sections/films";
import Users from "./sections/users";
import Tabs from "./sections/tabs";
import Tools from "./sections/tools";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import OpenCloseButtonContainer from "./sections/openCloseButton";
import SearchInputSection from "./sections/searchInput";

function App() {
  return (
    <div className="bg-gray-900 App w-full flex flex-col justify-center items-center">
      <Films />
      <Products />
      <Users />
      <Tabs />
      <Tools />
      <ProfileCard />
      <OpenCloseButtonContainer />
      <SearchInputSection />
    </div>
  );
}

export default App;
