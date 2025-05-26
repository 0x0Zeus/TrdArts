import axios from "axios";
import { Modal, Form, Input, message } from "antd";
import { basic_url } from "@/stack/stack";
import '@/styles/subscribe.css'

type props = {
  visible: boolean;
  setVisible: any;
};

// const layout = {
//     labelCol: { span: 16 },
//     wrapperCol: { span: 16 },
// };

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const SubscribeModal = ({ visible, setVisible }: props) => {
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (value: any) => {
    setVisible(false);
    if (value.email !== undefined) {
      axios
        .post(`${basic_url}subscribers/subscribe_email/${value.email}`)
        .then(() => {
          message.success("Subscribed your email successfully.");
        })
        .catch((err) => {
          message.error(err.response.data.error);
        });
    }
  };

  return (
    <>
      <Modal
        open={visible}
        width={500}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Subscribe"
        className="custom-modal"
        footer={null}
      >
        <Form
          // {...layout}
          // layout="vertical"
          name="nest-messages"
          // labelAlign="vertical"
          layout="vertical"
          labelWrap
          colon={false}
          onFinish={onFinish}
          style={{ maxWidth: 500 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["email"]}
            label={<p style={{ fontSize: "16px" }}>Your Email Address</p>}
            rules={[{ type: "email", required: true }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item>
            <button
              type="submit"
              className="h-[46px] min-w-[160px] w-full rounded-lg bg-[#8B37F4] text-base text-white"
              onClick={onFinish}
            >
              Sign up
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SubscribeModal;
