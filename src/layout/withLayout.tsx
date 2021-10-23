import Container from '@mui/material/Container';
import React, { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props { }

export default function withLayout<P extends object>(
  Comp: React.ComponentType<P>
): (props: Props) => JSX.Element {
  return (props): ReactElement => {
    return (
      <>
        <Navbar />
        <Container>
          <Comp {...(props as P)} />
        </Container>
        <Footer />
      </>
    );
  };
}
