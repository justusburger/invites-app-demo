import React from "react";
import { DetailsRegion } from "./style";
import LeadTitleBar from "../LeadTitleBar";
import LeadDetailsBar from "../LeadDetailsBar";
import LeadDescriptionBar from "../LeadDescriptionBar";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";

function JobCard({ job }) {
  const { contactId, created, id, suburbId, categoryId, description, price } = job;
  return (
    <Card>
      <DetailsRegion>
        <LeadTitleBar contactId={contactId} date={created} showLastname />
      </DetailsRegion>
      <DetailsRegion>
        <LeadDetailsBar id={id} suburbId={suburbId} categoryId={categoryId} price={price} />
      </DetailsRegion>
      <DetailsRegion>
        <LeadDescriptionBar description={description} contactId={contactId} />
      </DetailsRegion>
    </Card>
  );
}

JobCard.propTypes = {
  job: PropTypes.any,
};

export default React.memo(JobCard);
