import React from "react";
import { ActionsRegion, DetailsRegion, Price, PriceRegion } from "./style";
import LeadTitleBar from "../LeadTitleBar";
import LeadDetailsBar from "../LeadDetailsBar";
import LeadDescriptionBar from "../LeadDescriptionBar";
import { Button, Card } from "@material-ui/core";

function LeadCard({ lead }) {
  const { contactName, date, id, suburb, type, description, price } = lead;
  return (
    <Card>
      <DetailsRegion>
        <LeadTitleBar contactName={contactName} date={date} />
      </DetailsRegion>
      <DetailsRegion>
        <LeadDetailsBar id={id} suburb={suburb} type={type} />
      </DetailsRegion>
      <DetailsRegion>
        <LeadDescriptionBar description={description} />
      </DetailsRegion>
      <ActionsRegion>
        <Button variant="contained" color="primary">
          Accept
        </Button>
        <Button variant="contained" color="secondary">
          Decline
        </Button>
        <PriceRegion>
          <Price>${price.toFixed(2)}</Price>
          Lead Invitation
        </PriceRegion>
      </ActionsRegion>
    </Card>
  );
}

export default React.memo(LeadCard);
