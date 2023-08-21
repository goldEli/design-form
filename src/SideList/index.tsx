import React from "react";
import styled from "@emotion/styled";

interface SideListProps {}

const SideListBox = styled.div`
  width: 100%;
`;

const SideList: React.FC<SideListProps> = () => {
  return <SideListBox>SideList</SideListBox>;
};

export default SideList;
