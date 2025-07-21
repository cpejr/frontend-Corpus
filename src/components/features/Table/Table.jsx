import PropTypes from "prop-types";
import { TableShape, TableColumn } from "./Styles";

export default function Table({ columns, data }) {
  return (
    <TableShape
      value={data}
      paginator
      rows={10}
      removableSort
      scrollable
      scrollHeight="1000px"
    >
      {columns.map((data) => (
        <TableColumn
          key={data?.field}
          field={data?.field}
          header={data?.header}
        />
      ))}
    </TableShape>
  );
}
Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
