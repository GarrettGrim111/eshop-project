import React from "react";

import Directory from "./../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    //Here are used styled components instead of nested Sass for training purposes
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
