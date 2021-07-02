import styled, { createGlobalStyle } from "styled-components";
import Chip from "@material-ui/core/Chip";
import { AiOutlineWarning } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.mainColor};
  text-align: left;
  font-weight: bold;
  ${"" /* font-style: italic; */}
  font-size: 45px;
  margin-top: -25px;
  padding-top: 18%;
`;

export const Description = styled.h4`
  font-style: italic;
  text-align: center;
  margin-top: -30px;
  margin-bottom: 30px;
  padding-top: 3%;
`;

export const WorkTag = styled(Chip)`
  ${"" /* background: ${(props) => props.theme.workTagColor}; */}
  margin-right: 5px;
  margin-left: 5px;
`;

export const HomeTag = styled(Chip)`
  ${"" /* background: ${(props) => props.theme.workTagColor}; */}
  margin-right: 5px;
  margin-left: 5px;
`;

export const AiOutlineWarningStyled = styled(AiOutlineWarning)`
  size: 4.7em;
  margin-left: 0.3em;
  &.highPriority {
    color: ${(props) => props.theme.highPriorityColor};
  }
  &.lowPriority {
    color: ${(props) => props.theme.lowPriorityColor};
  }
`;

export const IoMdCloseStyled = styled(IoMdClose)`
  float: right;
  size: 4.7em;
  color: ${(props) => props.theme.lightColor};
`;
