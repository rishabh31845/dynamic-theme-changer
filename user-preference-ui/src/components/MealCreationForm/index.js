import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Row, Col } from "antd";

const MealCreationForm = ({
  createMeal,
  updateMeal,
  submitButtonText,
  mode,
  mealDetails,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (mode === "edit") {
      form.setFieldsValue({
        name: mealDetails.name,
        allowedFoodEntries: mealDetails.allowedFoodEntries,
      });
    }
  }, [mode]);

  const onFinish = (values) => {
    if (mode === "edit") {
      updateMeal(values);
    } else {
      createMeal(values).then((res) => {
        form.resetFields();
      });
    }
  };
  return (
    <Form name="basic" form={form} onFinish={onFinish} autoComplete="off">
      <Row gutter={4}>
        <Col span={8}>
          <Form.Item
            // label="Title"
            name="name"
            rules={[{ required: true, message: "Please add name" }]}
          >
            <Input placeholder="Meal name?" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            // label="Title"
            name="allowedFoodEntries"
            rules={[
              { required: true, message: "Please add entries to be allowed" },
            ]}
          >
            <Input
              placeholder="Allowed Food Entries?"
              type="number"
              disabled={mode === "edit"}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {submitButtonText}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

MealCreationForm.defaultProps = {
  createMeal: () => {},
  submitButtonText: "Save",
  taskPlaceHolderText: "What to do?",
};

MealCreationForm.propTypes = {};

export default MealCreationForm;
