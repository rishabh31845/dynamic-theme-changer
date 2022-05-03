import React from "react";
import { StyledTable } from "./styles";

const TableForm = ({ dataList, dataColumns, pagination, size }) => {
  return (
    <StyledTable
      bordered
      columns={dataColumns}
      dataSource={dataList}
      size={size}
      rowClassName={(record, index) =>
        record.thresholdExceed ? "table-row-dark" : null
      }
      // pagination={pagination}
    />
  );
};

TableForm.defaultProps = {
  size: "small",
  pagination: false,
};

TableForm.propTypes = {};

export default TableForm;
