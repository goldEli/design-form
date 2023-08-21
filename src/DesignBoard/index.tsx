import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";

interface DesignBoardProps {}

const DesignBoardBox = styled.div`
  width: 100%;
  height: 100%;
  // 浅灰色的背景
  /* background-color: #f5f5f5; */
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DesignBoard: React.FC<DesignBoardProps> = () => {
  return (
    <DesignBoardBox>
      {Array(2)
        .fill(0)
        .map((_, i) => (
          <Card key={i} id={i + ""} />
        ))}
    </DesignBoardBox>
  );
};

export default DesignBoard;
