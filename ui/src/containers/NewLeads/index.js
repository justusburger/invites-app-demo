import React from "react";
import LeadCard from "../../components/LeadCard";
import LeadsListLayout from "../../components/LeadsListLayout";
import { Box, LinearProgress } from "@material-ui/core";
import useJobsSearch, { JOB_STATUS_NEW } from "../../api/useJobsSearch";
import NoJobs from "../../components/NoJobs";

function NewLeads() {
  const [jobs, jobsIsLoading, refetch] = useJobsSearch(JOB_STATUS_NEW);

  return (
    <LeadsListLayout>
      {jobsIsLoading ? (
        <LinearProgress />
      ) : (
        <>
          {jobs && jobs.length > 0 ? (
            jobs.map((job) => (
              <Box pb={2} key={job.id}>
                <LeadCard job={job} onStatusChanged={refetch} />
              </Box>
            ))
          ) : (
            <NoJobs>You have no new jobs</NoJobs>
          )}
        </>
      )}
    </LeadsListLayout>
  );
}

export default React.memo(NewLeads);
