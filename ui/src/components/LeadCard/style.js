import styled from "styled-components";

export const DetailsRegion = styled.div`
  padding: 12px 16px;
  border-bottom: solid 1px #efefef;
`;

export const ActionsRegion = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;

  .MuiButton-root {
    margin-right: 8px;
    white-space: nowrap;
  }
`;

export const PriceRegion = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  opacity: 0.6;
`;

export const Price = styled.div`
  margin-right: 4px;
  font-weight: bold;
`;

export const ConfirmText = styled.div`
  font-size: 12px;
  margin-right: auto;
  padding-right: 16px;
`;
