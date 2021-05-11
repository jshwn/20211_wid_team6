import styled from "@emotion/styled";

import { layout } from "../../libs/config";

const { main, footer } = layout;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        Yonsei WID Team 6, 2021 Spring. All rights reserved.
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto 0 0 0;
  min-height: ${footer.pc_height};
  background: ${"gray"};
  color: ${"white"};
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px 10px;
  padding-top: 10px;
  max-width: ${main.max_width};
`;

export default Footer;
