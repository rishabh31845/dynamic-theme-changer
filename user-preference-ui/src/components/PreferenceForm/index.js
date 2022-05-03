import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Button, Row, Col, Select } from "antd";
const { Option } = Select;

const PreferenceForm = ({ updatePreference, colorsList, userData }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      primary_theme_color: findPrimaryColorConfig(),
    });
  }, []);

  const findPrimaryColorConfig = () => {
    const primaryColor = userData.userConfiguration.find(
      (config) => config.configKey === "primary_theme_color"
    );
    return primaryColor.configValue;
  };

  const onFinish = (values) => {
    updatePreference(values);
  };
  return (
    <Form
      name="preferenceForm"
      form={form}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Row gutter={4}>
        <Col span={6}>
          <Form.Item
            // label="Title"
            name="primary_theme_color"
            rules={[{ required: true, message: "Please select color" }]}
          >
            <Select
              placeholder="Select Primary Color"
              showSearch
              onChange={(e) => console.log(e)}
            >
              {colorsList.map((colorObj) => (
                <Option key={colorObj.id} value={colorObj.code}>
                  {colorObj.name} &emsp;&emsp; = &emsp;&emsp; {colorObj.code}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={4}>
        <Col span={4}>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Set Preference
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

PreferenceForm.defaultProps = {
  createFood: () => {},
  submitButtonText: "Save",
  taskPlaceHolderText: "What to do?",
};

PreferenceForm.propTypes = {
  createFood: PropTypes.func,
  submitButtonText: PropTypes.string,
  taskPlaceHolderText: PropTypes.string,
};

export default PreferenceForm;
