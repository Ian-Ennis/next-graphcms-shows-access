import Layout from "@c/Layout";
import styled from "styled-components";

export default function Custom404() {
  const NotFoundCode = styled.h1`
    font-size: 48pt;
  `;

  const NotFoundText = styled.p`
    font-size: 18pt;
  `;

  return (
    <Layout>
      <NotFoundCode>404</NotFoundCode>
      <NotFoundText>Nothing to see here!</NotFoundText>
    </Layout>
  );
}
