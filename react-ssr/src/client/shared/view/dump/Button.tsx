import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props: any) => props.fillColor};
  margin-top: 3px;
`;

export const GreenButton = styled(Button).attrs({
  fillColor: "#008072",
})``;
