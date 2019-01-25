import React from 'react';
import Navbar from './Navbar';
import Helmet from 'react-helmet';


const Layout = ({ children }) => (
  <div>
    <Helmet
      title="PetHub"
      meta={[
        { name: "description", content: "PetHub" },
        { name: "keywords", content: "Pets, Adoption, Lost pet, Find pet" },
        { name: "author", content: "PetHub, inc." },
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" }
      ]}
    >
    </Helmet>
    <Navbar textAlign="center"/>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 800,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children}
    </div>
  </div>
);



export default Layout;
