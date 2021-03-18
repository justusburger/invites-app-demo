import React from "react";
import { Container, Content, ContactDetailsRegion } from "./style";
import { Button } from "@material-ui/core";
import PhoneOutlined from "@material-ui/icons/PhoneOutlined";
import { EmailOutlined } from "@material-ui/icons";

function LeadDescriptionBar({ description, contactPhone, contactEmail }) {
  return (
    <Container>
      <ContactDetailsRegion>
        {contactPhone && (
          <Button
            startIcon={<PhoneOutlined fontSize="small" />}
            color="primary"
            size="small"
            as="a"
            href={`tel:${contactEmail}`}
          >
            {contactPhone}
          </Button>
        )}
        {contactEmail && (
          <Button
            startIcon={<EmailOutlined fontSize="small" />}
            color="primary"
            size="small"
            as="a"
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </Button>
        )}
      </ContactDetailsRegion>
      <Content>{description}</Content>
    </Container>
  );
}

export default React.memo(LeadDescriptionBar);
