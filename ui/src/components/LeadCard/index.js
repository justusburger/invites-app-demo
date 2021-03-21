import React, { useCallback, useState } from "react";
import { ActionsRegion, DetailsRegion, Price, PriceRegion, ConfirmText } from "./style";
import LeadTitleBar from "../LeadTitleBar";
import LeadDetailsBar from "../LeadDetailsBar";
import LeadDescriptionBar from "../LeadDescriptionBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import useUpdateJobStatus from "../../api/useUpdateJobStatus";
import { JOB_STATUS_ACCEPTED, JOB_STATUS_DECLINED } from "../../api/useJobsSearch";
import PropTypes from "prop-types";

const ACCEPT_CONFIRM = "accept";
const DECLINE_CONFIRM = "decline";

function LeadCard({ job, onStatusChanged }) {
  const { contactId, created, id, suburbId, categoryId, description, price } = job;
  const [updateStatus] = useUpdateJobStatus(id);
  const [confirm, setConfirm] = useState(null);
  const handleAcceptClick = useCallback(() => {
    setConfirm(ACCEPT_CONFIRM);
  }, [setConfirm]);
  const handleDeclineClick = useCallback(() => {
    setConfirm(DECLINE_CONFIRM);
  }, [setConfirm]);
  const handleConfirmCancelClick = useCallback(() => {
    setConfirm(null);
  }, [setConfirm]);
  const handleAcceptConfirmClick = useCallback(async () => {
    setConfirm(null);
    await updateStatus({ status: JOB_STATUS_ACCEPTED });
    onStatusChanged();
  }, [setConfirm, updateStatus, onStatusChanged]);
  const handleDeclineConfirmClick = useCallback(async () => {
    setConfirm(null);
    await updateStatus({ status: JOB_STATUS_DECLINED });
    onStatusChanged();
  }, [setConfirm, updateStatus, onStatusChanged]);
  return (
    <Card>
      <DetailsRegion>
        <LeadTitleBar contactId={contactId} date={created} />
      </DetailsRegion>
      <DetailsRegion>
        <LeadDetailsBar id={id} suburbId={suburbId} categoryId={categoryId} />
      </DetailsRegion>
      <DetailsRegion>
        <LeadDescriptionBar description={description} />
      </DetailsRegion>
      <ActionsRegion>
        {confirm ? (
          <>
            {confirm === ACCEPT_CONFIRM && (
              <>
                <ConfirmText data-testid="confirm-accept-text">
                  Are you sure you want to&nbsp;<strong>accept</strong>&nbsp;this job?
                </ConfirmText>
                <Button data-testid="confirm" variant="contained" color="primary" onClick={handleAcceptConfirmClick}>
                  Yes, accept
                </Button>
                <Button data-testid="cancel" variant="contained" color="secondary" onClick={handleConfirmCancelClick}>
                  No, cancel
                </Button>
              </>
            )}
            {confirm === DECLINE_CONFIRM && (
              <>
                <ConfirmText data-testid="confirm-decline-text">
                  Are you sure you want to <strong>decline</strong> this job?
                </ConfirmText>
                <Button data-testid="confirm" variant="contained" color="primary" onClick={handleDeclineConfirmClick}>
                  Yes, decline
                </Button>
                <Button data-testid="cancel" variant="contained" color="secondary" onClick={handleConfirmCancelClick}>
                  No, cancel
                </Button>
              </>
            )}
          </>
        ) : (
          <>
            <Button data-testid="accept" variant="contained" color="primary" onClick={handleAcceptClick}>
              Accept
            </Button>
            <Button data-testid="decline" variant="contained" color="secondary" onClick={handleDeclineClick}>
              Decline
            </Button>
            <PriceRegion>
              {price && (
                <>
                  <Price>${price.toFixed(2)}</Price>
                </>
              )}
              Lead Invitation
            </PriceRegion>
          </>
        )}
      </ActionsRegion>
    </Card>
  );
}

LeadCard.propTypes = {
  job: PropTypes.any,
  onStatusChanged: PropTypes.func,
};

export default React.memo(LeadCard);
