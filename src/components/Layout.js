import React from 'react';
import Navbar from './Navbar';
import Helmet from 'react-helmet';
import {Container} from "reactstrap";


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
    <Container className="main-container">
      <Navbar textAlign="center"/>
      <div>
        {children}
      </div>
    </Container>
  </div>
);



export default Layout;
