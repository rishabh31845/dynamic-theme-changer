import React, { useState, useEffect } from "react";
import { Button, Modal, Select } from "antd";
const { Option } = Select;

const UserLoginModal = ({ usersList, submitUserLogin }) => {
  const [selectedUser, setUser] = useState(null);

  const handleLogin = () => {
    submitUserLogin(selectedUser);
  };

  const handleUserSelect = (e) => {
    const user = usersList.find((u) => u.id === e);
    setUser(user);
  };

  return (
    <Modal
      title="Select User"
      visible
      closable={false}
      footer={[
        <Button disabled={!selectedUser} onClick={handleLogin}>
          Login
        </Button>,
      ]}
    >
      <Select
        defaultValue={selectedUser}
        style={{ width: 120 }}
        onChange={handleUserSelect}
      >
        {usersList.map((user) => (
          <Option key={user.emailId} value={user.id}>
            {user.name}
          </Option>
        ))}
      </Select>
    </Modal>
  );
};

UserLoginModal.defaultProps = {
  createMeal: () => {},
  submitButtonText: "Save",
  taskPlaceHolderText: "What to do?",
};

UserLoginModal.propTypes = {};

export default UserLoginModal;
