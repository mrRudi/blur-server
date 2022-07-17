import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const redText = css`
  color: red;
`;

const Title = styled.h1`
  font-family: monospace;
`;

const Container = styled.div`
  font-size: 15px;
  color: ${(props) => props.color};
  border: 1px solid red;

  &:hover {
    border-color: blue;
  }
`;

export default function BoxContainer() {
  return (
    <div>
      <p className={redText}>red</p>
      <Container color="#333">
        <Title>Hello world</Title>
      </Container>
    </div>
  );
}
