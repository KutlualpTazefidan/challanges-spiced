import styled from "styled-components";
import Button from "../Button";
import { useLightStore } from "../../stores/lightStorage";
const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const { lights, setAllLights } = useLightStore();

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          setAllLights(false);
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          setAllLights(true);
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
