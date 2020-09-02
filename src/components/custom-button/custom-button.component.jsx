import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";
//this is styled-component way

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

// this way we conditionally render different components (different class names)
// this is for training purposes

// import "./custom-button.styles.scss";
// const CustomButton = ({
//   children,
//   isGoogleSignIn,
//   inverted,
//   ...otherProps
// }) => (
//   <button
//     className={`${inverted ? "inverted" : ""} ${
//       isGoogleSignIn ? "google-sign-in" : ""
//     } custom-button`}
//     {...otherProps}
//   >
//     {children}
//   </button>
// );
