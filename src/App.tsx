import styled from "@emotion/styled";
import SideList from "./SideList";
import DesignBoard from "./DesignBoard";

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
    <AppBox>
      <LeftSide>
        <SideList />
      </LeftSide>
      <RightSide>
        <DesignBoard />
      </RightSide>
    </AppBox>
  );
}

export default App;
