import React from "react";
import styled from "@emotion/styled";
import { useDrag } from "react-dnd";
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
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: "BOX",
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return <CardBox ref={drag}>{props.id}: Card</CardBox>;
};

export default Card;
