import styled from "styled-components";
import { Primary } from "../Theme";

export const NavigationRegion = styled.div`
  margin-bottom: 16px;

  .MuiButton-root {
    border-bottom: solid 3px #fff;
    width: 50%;

    &.active {
      border-bottom: solid 3px ${Primary};
    }

    &:first-of-type {
      border-right: solid 1px #eee;
    }
  }
`;
