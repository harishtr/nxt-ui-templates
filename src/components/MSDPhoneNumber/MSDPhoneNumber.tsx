import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "@govhhs/govhhs-design-system-react";

export interface MSDPhoneNumberProps {
  id: string;
  label: string;
}

const MSDPhoneNumber = (props: MSDPhoneNumberProps) => {
  const { id, label } = props;
  return <TextInput id={id} label={label} />;
};

MSDPhoneNumber.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MSDPhoneNumber;
