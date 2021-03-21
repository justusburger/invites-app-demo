import React from "react";
import { Container, Content, Title, Date } from "./style";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import useContactById from "../../api/useContactById";
import Skeleton from "@material-ui/lab/Skeleton";
import FormattedDate from "../FormattedDate";
import PropTypes from "prop-types";

function LeadTitleBar({ contactId, date, showLastname }) {
  const [contact, contactIsLoading] = useContactById(contactId);
  const { firstName, lastName } = contact || {};
  return (
    <Container>
      <Avatar data-testid="avatar">{firstName && firstName[0]}</Avatar>
      <Content>
        <Title>
          {contactIsLoading ? (
            <Box display="flex">
              <Skeleton variant="text" width={60} />
              &nbsp;
              <Skeleton variant="text" width={50} />
            </Box>
          ) : (
            <>
              {firstName} {showLastname ? lastName : ""}
            </>
          )}
        </Title>
        <Date>
          <FormattedDate>{date}</FormattedDate>
        </Date>
      </Content>
    </Container>
  );
}

LeadTitleBar.propTypes = {
  contactId: PropTypes.string,
  date: PropTypes.any,
  showLastname: PropTypes.bool,
};

export default React.memo(LeadTitleBar);
