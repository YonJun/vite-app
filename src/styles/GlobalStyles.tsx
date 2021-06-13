import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme } from "twin.macro";

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
    --primary: #0e0e;
    --secondary: #2828;
  }

  .btn {
    ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
    
  }
  
`;

const GlobalStyles = () => (
  <>
    <CustomStyles />
  </>
);

export default GlobalStyles;
