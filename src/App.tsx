import styled from "@emotion/styled";
import SideList from "./SideList";
import DesignBoard from "./DesignBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CustomDragLayer from "./CustomDragLayer";

const AppBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const LeftSide = styled.div`
  width: 300px;
`;
const RightSide = styled.div`
  flex: 1;
`;

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <AppBox>
        {" "}
        <LeftSide>
          <SideList />
        </LeftSide>
        <RightSide>
          <DesignBoard />
        </RightSide>
      </AppBox>
      <CustomDragLayer />
    </DndProvider>
  );
}

export default App;
