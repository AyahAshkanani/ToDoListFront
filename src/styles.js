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
  font-size: 40px;
  margin-top: -18px;
  padding-top: 18%;
`;

export const Description = styled.h4`
  font-style: italic;
  text-align: center;
  margin-top: -30px;
  margin-bottom: 30px;
  padding-top: 3%;
`;

export const ListTitle = styled.h3`
  margin-left: 53px;
  font-weight: bold;
  font-size: 25px;
`;

export const TaskTitle = styled.p`
  font-size: 20px;
  font-weight: 500;

  &.done {
    text-decoration: line-through;
    color: ${(props) => props.theme.lightColor};
  }
`;

export const DeleteButtonStyled = styled.button`
  color: white;
  background-color: black;
  width: 90px;
  
  margin-bottom:20px;
  border-radius: 5px;
  &:hover {
    color: black;
    background-color: white;
  }

`;

export const DeleteTag = styled(Chip)`
  ${"" /* background: ${(props) => props.theme.workTagColor}; */}
  margin-right: 5px;
  margin-left: 5px;
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
  &.high {
    color: ${(props) => props.theme.highPriorityColor};
  }
  &.low {
    color: ${(props) => props.theme.lowPriorityColor};
  }
`;

export const IoMdCloseStyled = styled(IoMdClose)`
  float: right;
  size: 4.7em;
  color: ${(props) => props.theme.lightColor};
`;

export const AddTaskButtonStyled = styled.button`
  font-size: 1.5em;
  float: right;
  ${"" /* margin-right: 5px; */}
  display: inline-block;

  ${"" /* margin: 1.25em; */}
  border: 1px solid;
  padding-top: 0.22em;
  padding-bottom: 0.22em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  margin-top: 0.4em;
  margin-left: 30px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.secondaryColor};

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;

export const TaskWrapper = styled.div`
  margin: 20px;
  
  p {
    text-align: center;
    font-weight: bold;
    font-style: oblique;
    
  }
`;
