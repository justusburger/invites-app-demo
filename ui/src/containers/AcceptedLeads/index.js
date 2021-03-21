import React from "react";
import LeadsListLayout from "../../components/LeadsListLayout";
import useJobsSearch, { JOB_STATUS_ACCEPTED } from "../../api/useJobsSearch";
import { Box, LinearProgress } from "@material-ui/core";
import JobCard from "../../components/JobCard";
import NoJobs from "../../components/NoJobs";

function AcceptedLeads() {
  const [jobs, jobsIsLoading] = useJobsSearch(JOB_STATUS_ACCEPTED);
  return (
    <LeadsListLayout>
      {jobsIsLoading ? (
        <LinearProgress />
      ) : (
        <>
          {jobs && jobs.length > 0 ? (
            jobs.map((job) => (
              <Box pb={2} key={job.id}>
                <JobCard job={job} />
              </Box>
            ))
          ) : (
            <NoJobs>You have no accepted jobs</NoJobs>
          )}
        </>
      )}
    </LeadsListLayout>
  );
}

export default React.memo(AcceptedLeads);
