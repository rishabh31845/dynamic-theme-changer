import React from "react";
import { Popconfirm, Collapse, Row, Col, Button } from "antd";

const DataActions = ({ actions, id }) => {
  const [visible, setVisible] = React.useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const showConfirmPopup = () => {
    setVisible(true);
  };

  const handleConfirmPopup = (action) => {
    action.handleClick(id);
    setVisible(false);
  };

  return (
    <Row gutter={3}>
      {actions.map((action) => (
        <Col key={action.key}>
          {action.requiresConfirmPopup ? (
            <Popconfirm
              visible={visible}
              title={action.popupTitle}
              onConfirm={() => handleConfirmPopup(action)}
              onCancel={handleCancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                key={action.key}
                htmlType="submit"
                icon={<action.icon />}
                onClick={showConfirmPopup}
              ></Button>
            </Popconfirm>
          ) : (
            <Button
              key={action.key}
              htmlType="submit"
              icon={<action.icon />}
              onClick={(e) => action.handleClick(id)}
            ></Button>
          )}
        </Col>
      ))}
    </Row>
  );
};

DataActions.defaultProps = {};

DataActions.propTypes = {};

export default DataActions;
