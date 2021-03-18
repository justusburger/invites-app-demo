import React from "react";
import { DetailsRegion } from "./style";
import LeadTitleBar from "../LeadTitleBar";
import LeadDetailsBar from "../LeadDetailsBar";
import LeadDescriptionBar from "../LeadDescriptionBar";
import { Card } from "@material-ui/core";

function JobCard({ lead }) {
  const {
    contactName,
    date,
    id,
    suburb,
    type,
    description,
    price,
    contactPhone,
    contactEmail,
  } = lead;
  return (
    <Card>
      <DetailsRegion>
        <LeadTitleBar contactName={contactName} date={date} />
      </DetailsRegion>
      <DetailsRegion>
        <LeadDetailsBar id={id} suburb={suburb} type={type} price={price} />
      </DetailsRegion>
      <DetailsRegion>
        <LeadDescriptionBar
          description={description}
          contactPhone={contactPhone}
          contactEmail={contactEmail}
        />
      </DetailsRegion>
    </Card>
  );
}

export default React.memo(JobCard);
