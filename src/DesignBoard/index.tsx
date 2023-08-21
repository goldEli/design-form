import React from "react";
import styled from "@emotion/styled";

interface DesignBoardProps {}

const DesignBoardBox = styled.div`
  width: 100%;
`;

const DesignBoard: React.FC<DesignBoardProps> = () => {
  return <DesignBoardBox>DesignBoard</DesignBoardBox>;
};

export default DesignBoard;
