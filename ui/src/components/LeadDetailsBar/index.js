import React from "react";
import { Container, Item } from "./style";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";

function LeadDetailsBar({ suburb, type, id, price }) {
  return (
    <Container>
      <Item>
        <RoomOutlinedIcon /> {suburb}
      </Item>
      <Item>
        <BusinessCenterOutlinedIcon /> {type}
      </Item>
      <Item>JobID: {id}</Item>
      {price && <Item>${price.toFixed(2)} Lead Invitation</Item>}
    </Container>
  );
}

export default React.memo(LeadDetailsBar);
