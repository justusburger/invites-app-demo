import React from "react";
import { Container, Item } from "./style";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import useCategoryById from "../../api/useCategoryById";
import useSuburbById from "../../api/useSuburbById";
import { Skeleton } from "@material-ui/lab";
import PropTypes from "prop-types";

function LeadDetailsBar({ suburbId, categoryId, id, price }) {
  const [suburb, suburbIsLoading] = useSuburbById(suburbId);
  const { name: suburbName, postcode } = suburb || {};
  const [category, categoryIsLoading] = useCategoryById(categoryId);
  const { name: categoryName } = category || {};
  return (
    <Container>
      <Item>
        <RoomOutlinedIcon />{" "}
        {suburbIsLoading ? (
          <Skeleton width={50} />
        ) : (
          <>
            {suburbName} {postcode}
          </>
        )}
      </Item>
      <Item>
        <BusinessCenterOutlinedIcon /> {categoryIsLoading ? <Skeleton width={30} /> : <>{categoryName}</>}
      </Item>
      <Item>Job ID: {id}</Item>
      {price && <Item>${price.toFixed(2)} Lead Invitation</Item>}
    </Container>
  );
}

LeadDetailsBar.propTypes = {
  suburbId: PropTypes.string,
  categoryId: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number,
};

export default React.memo(LeadDetailsBar);
