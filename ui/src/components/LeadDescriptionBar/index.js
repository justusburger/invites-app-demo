import React from "react";
import { Container, Content, ContactDetailsRegion } from "./style";
import Button from "@material-ui/core/Button";
import PhoneOutlined from "@material-ui/icons/PhoneOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import useContactById from "../../api/useContactById";
import PropTypes from "prop-types";

function LeadDescriptionBar({ description, contactId }) {
  const [contact] = useContactById(contactId);
  const { phone, email } = contact || {};
  return (
    <Container>
      {contactId && (
        <ContactDetailsRegion>
          {phone && (
            <Button
              startIcon={<PhoneOutlined fontSize="small" />}
              color="primary"
              size="small"
              as="a"
              href={`tel:${phone}`}
            >
              {phone}
            </Button>
          )}
          {email && (
            <Button
              startIcon={<EmailOutlined fontSize="small" />}
              color="primary"
              size="small"
              as="a"
              href={`mailto:${email}`}
            >
              {email}
            </Button>
          )}
        </ContactDetailsRegion>
      )}
      <Content>{description}</Content>
    </Container>
  );
}

LeadDescriptionBar.propTypes = {
  description: PropTypes.string,
  contactId: PropTypes.string,
};

export default React.memo(LeadDescriptionBar);
