import React from "react";
import PropTypes from "prop-types";
export interface MSDPhoneNumberProps {
    id: string;
    label: string;
}
declare const MSDPhoneNumber: {
    (props: MSDPhoneNumberProps): React.JSX.Element;
    propTypes: {
        id: PropTypes.Validator<string>;
        label: PropTypes.Validator<string>;
    };
};
export default MSDPhoneNumber;
