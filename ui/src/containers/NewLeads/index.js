import React from "react";
import LeadCard from "../../components/LeadCard";
import LeadsListLayout from "../../components/LeadsListLayout";

function NewLeads() {
  const lead = {
    contactName: "Bill",
    date: "January 4 @ 2:37 pm",
    id: "5577421",
    suburb: "Yanderra 2574",
    type: "Painters",
    description: "Need to paint 2 aluminium windows and sliding glass door",
    price: 62.0,
  };
  return (
    <LeadsListLayout>
      <LeadCard lead={lead} />
    </LeadsListLayout>
  );
}

export default React.memo(NewLeads);
