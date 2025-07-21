import { createGlobalStyle } from "styled-components";
import { colors } from "./stylesVariables";

export const PrimereactStyles = createGlobalStyle`.p-datepicker {
    background-color: ${colors.background.primary};
    color: white;
    .p-datepicker-calendar{
      color: black;
      background-color: white;
      border-radius: 0.8rem;
    }
  }
  .p-calendar-w-btn    {
    background-color: ${colors.background.primary};
    color: white;
  }
  .p-datepicker-header{
    background-color:  white;

  }

  .p-datepicker-year{
    color: black;
  } 
  .p-datepicker-month{
    color: black;
  }

  .p-datatable .p-datatable-tbody > tr > td {
    background-color: ${colors.background.primary}; 
    color: ${colors.font.primary};
    border-bottom: 0.5px solid ${colors.font.title};
    padding: 1rem 0;
    font-size: 1rem;
  }  
  
  .p-datatable .p-datatable-thead > tr > th {
    border-bottom: 0.5px solid ${colors.font.title};
    background-color: ${colors.background.primary};
    color: ${colors.font.primary}
  }
  
  .p-datatable .p-datatable-tbody>tr>td{
    padding: 15px;
  }
  .p-column-header-content{
    padding: 15px;
  }
`;
