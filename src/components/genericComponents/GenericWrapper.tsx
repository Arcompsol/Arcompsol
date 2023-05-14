import { Box, styled } from "@mui/material";
import { ReactElement } from "react";

interface GenericWrapperProps {
  children: ReactElement;
  backgroundColor: String;
}

interface WrapperProps {
  backgroundColor: String;
}

const Wrapper = styled(Box)<WrapperProps>(({ theme, backgroundColor }) => ({
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  background: `${backgroundColor}`,
}));

const GenericWrapper = ({ children, backgroundColor }: GenericWrapperProps) => {
  return <Wrapper backgroundColor={backgroundColor}>{children}</Wrapper>;
};

export default GenericWrapper;
