import React from "react";
import styled from "@emotion/styled";

interface CardProps {
  id: string;
}

// 带阴影的卡片
// 卡片组件
const CardBox = styled.div`
  box-sizing: border-box;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  padding: 20px;
  display: flex;
`;

const Card: React.FC<CardProps> = (props) => {
  return <CardBox>{props.id}: Card</CardBox>;
};

export default Card;
