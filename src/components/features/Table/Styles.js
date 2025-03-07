import styled from "styled-components";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { colors, breakpoints } from "../../../styles/stylesVariables";
export const TableShape = styled(DataTable)`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 90%;

  min-height: 70%;

  margin-top: 20px;
  .p-paginator-bottom .p-paginator-pages .p-paginator-page,
  .p-paginator-bottom .p-paginator-prev .p-paginator-icon,
  .p-paginator-bottom .p-paginator-next .p-paginator-icon,
  .p-paginator-bottom .p-paginator-first .p-paginator-icon,
  .p-paginator-bottom .p-paginator-last .p-paginator-icon {
    color: ${colors.font.primary};
  }
`;

export const TableColumn = styled(Column)`
  display: flex;
  align-self: center;
  background-color: ${colors.font.secondary};
  color: ${colors.font.secondary};
  min-width: 200px;
`;
