import type { CSSProperties, FC } from "react";
import type { XYCoord } from "react-dnd";
import { useDragLayer } from "react-dnd";

// import { BoxDragPreview } from './BoxDragPreview'
// import { ItemTypes } from './ItemTypes'
// import { snapToGrid } from './snapToGrid'
import { DRAG_TYPE } from "../constant";
import styled from "@emotion/styled";

const layerStyles: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};
const MoveCardBox = styled.div`
  width: 100px;
  /* box-sizing: border-box; */
  height: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  padding: 20px;
  display: flex;
`;

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null,
  isSnapToGrid: boolean
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }

  let { x, y } = currentOffset;

//   if (isSnapToGrid) {
//     x -= initialOffset.x;
//     y -= initialOffset.y;
//     // ;[x, y] = snapToGrid(x, y)
//     x += initialOffset.x;
//     y += initialOffset.y;
//   }

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

export interface CustomDragLayerProps {
  snapToGrid: boolean;
}

 const CustomDragLayer: FC<CustomDragLayerProps> = (props) => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
    //   currentOffset: monitor.getSourceClientOffset(),
      currentOffset: monitor.getClientOffset(),
      isDragging: monitor.isDragging(),
    }));


  if (!isDragging) {
    return null;
  }
  console.log({ item });
  return (
    <div style={layerStyles}>
      <div
        style={getItemStyles(initialOffset, currentOffset, props.snapToGrid)}
      >
        <MoveCardBox>move: {item.id}</MoveCardBox>
      </div>
    </div>
  );
};
export default CustomDragLayer