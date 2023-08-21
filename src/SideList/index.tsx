import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";

interface SideListProps {}

const SideListBox = styled.div`
  width: 100%;
  background-color: gray;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;
`;

const SideList: React.FC<SideListProps> = () => {
  return (
    <SideListBox>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <Card key={i} id={i + ""} />
        ))}
    </SideListBox>
  );
};

export default SideList;
