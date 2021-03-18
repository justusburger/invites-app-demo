import styled from "styled-components";
import { Primary } from "../Theme";

export const NavigationRegion = styled.div`
  margin-bottom: 16px;

  .MuiButton-root {
    &.active {
      border-bottom: solid 3px ${Primary};
    }
  }
`;
