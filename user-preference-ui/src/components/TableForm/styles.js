import styled from "styled-components";
import { Table } from "antd";

const StyledTable = styled(Table)`
  .ant-table.ant-table-small .ant-table-title,
  .ant-table.ant-table-small .ant-table-footer,
  .ant-table.ant-table-small .ant-table-thead > tr > th,
  .ant-table.ant-table-small .ant-table-tbody > tr > td,
  .ant-table.ant-table-small tfoot > tr > th,
  .ant-table.ant-table-small tfoot > tr > td {
    padding: 4px 4px;
  }

  .table-row-light {
    background-color: #ffffff;
  }
  .table-row-dark {
    background-color: grey;
  }
`;

export { StyledTable };
