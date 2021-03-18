import React from "react";
import { Container, Content, Title, Date } from "./style";
import { Avatar } from "@material-ui/core";

function LeadTitleBar({ contactName, date }) {
  return (
    <Container>
      <Avatar>{contactName && contactName[0]}</Avatar>
      <Content>
        <Title>{contactName}</Title>
        <Date>{date}</Date>
      </Content>
    </Container>
  );
}

export default React.memo(LeadTitleBar);
