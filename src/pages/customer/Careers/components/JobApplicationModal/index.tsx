import React from "react";
import { Modal, Form, Input, Button, Row, Col } from "antd";

export interface JobApplicationValues {
  fullName: string;
  email: string;
  phone: string;
  portfolio?: string;
  resume: unknown[];
  coverLetter: string;
}

interface JobApplicationModalProps {
  open: boolean;
  jobTitle?: string;
  onCancel: () => void;
  onSubmit: (values: JobApplicationValues) => void;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  open,
  jobTitle,
  onCancel,
  onSubmit,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title={`Apply for: ${jobTitle ?? ""}`}
      open={open}
      width={600}
      closable={false}
      destroyOnHidden
      footer={[
        <Button
          key="cancel"
          type="primary"
          ghost
          shape="round"
          onClick={onCancel}
        >
          Cancel
        </Button>,

        <Button
          key="submit"
          type="primary"
          shape="round"
          onClick={handleSubmit}
        >
          Submit Application
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        requiredMark
        onFinish={onSubmit}
        style={{ marginTop: "20px" }}
      >
        <Row gutter={16}>
          <Col span={24} sm={12}>
            <Form.Item
              name="fullName"
              label="Full Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>
          </Col>

          <Col span={24} sm={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
                {
                  type: "email",
                  message: "Invalid email",
                },
              ]}
            >
              <Input placeholder="john@example.com" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24} sm={12}>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number",
                },
              ]}
            >
              <Input placeholder="+92 XXX XXXXXXX" />
            </Form.Item>
          </Col>

          <Col span={24} sm={12}>
            <Form.Item name="portfolio" label="LinkedIn / Portfolio URL">
              <Input placeholder="https://linkedin.com/in/..." />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="coverLetter"
          label="Brief Pitch"
          rules={[
            {
              required: true,
              message: "Please provide a brief pitch",
            },
          ]}
        >
          <Input.TextArea
            rows={3}
            placeholder="Why are you a great fit for this role?"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default JobApplicationModal;
