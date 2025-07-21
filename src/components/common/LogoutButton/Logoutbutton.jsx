import { Button, Icon } from "./Style";
import { useGlobalLanguage } from "../../../stores/globalLanguage";
import { TranslateText } from "./translations";
import PropTypes from "prop-types";

export default function LogoutButton({ onClick }) {
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  return (
    <Button onClick={onClick}>
      {translation.logoutButton}
      <Icon />
    </Button>
  );
}
LogoutButton.propTypes = {
  onClick: PropTypes.func,
};
