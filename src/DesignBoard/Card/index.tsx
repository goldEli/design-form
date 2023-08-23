import React from "react";
import styled from "@emotion/styled";
import { useDrag, useDrop } from "react-dnd";
import { DRAG_TYPE } from "../../constant";

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
  display: flex;
`;

const BlueLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: blue;
`;

const DropBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Card: React.FC<CardProps> = (props) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: DRAG_TYPE,
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    item: {
      id: props.id,
      sourceType: "board",
    },
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DRAG_TYPE,
    drop(item, monitor) {
      console.log("drop", item, monitor, props.id);
    },
    hover(item, monitor) {
      // console.log("hover", item, monitor);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <>
      <CardBox ref={drag}>
        <DropBox ref={drop}>{props.id}: Card</DropBox>
      </CardBox>
      {isOver && <BlueLine />}
    </>
  );
};

export default Card;
