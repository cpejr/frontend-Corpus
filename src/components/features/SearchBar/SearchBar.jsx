import PropTypes from "prop-types";
import { Input } from "./Styles";

export default function SearchBar({ placeholder, search, value, width }) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      width={width}
      value={value}
      onChange={search}
    />
  );
}
SearchBar.propTypes = {
  placeholder: PropTypes.string,
  search: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
};
