import React from "react";
import LeadsListLayout from "../../components/LeadsListLayout";
import JobCard from "../../components/JobCard";

function AcceptedLeads() {
  const lead = {
    contactName: "Bill",
    date: "January 4 @ 2:37 pm",
    id: "5577421",
    suburb: "Yanderra 2574",
    type: "Painters",
    description: "Need to paint 2 aluminium windows and sliding glass door",
    price: 62.0,
    contactPhone: "0412345678",
    contactEmail: "fake@mailinator.com",
  };
  return (
    <LeadsListLayout>
      <JobCard lead={lead} />
    </LeadsListLayout>
  );
}

export default React.memo(AcceptedLeads);
