import { basic_url } from "@/stack/stack";
import { Form, Input, message } from "antd";
import axios from "axios";
import Seperator from "../Seperator";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Subscribe = () => {
  const onFinish = (value: any) => {
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
      <div className="mx-auto max-w-[640px] space-y-6 py-[62px] text-center">
        <div className="logo-bg flex items-center justify-center gap-4 py-5">
          <img src="/icons/icon.png" alt="logo" className="h-10 w-10" />
          <p className="text-4xl font-extrabold">TrdArts</p>
        </div>
        <h1 className="text-5xl font-black text-[#FFFFFF]/80">
          Subscribe to Trade Arts
        </h1>
        <p className="text-lg text-[#FFFFFF]/60">
          Sign up to our newsletter to receive timely market updates and
          information on product sales and givaways.
        </p>
        <Form
          name="nest-messages"
          layout="horizontal"
          labelWrap
          colon={false}
          onFinish={onFinish}
          style={{ maxWidth: 600, margin: "0 auto", marginTop: "36px" }}
          className="flex items-start justify-center gap-5"
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["email"]}
            rules={[{ type: "email", required: true }]}
          >
            <Input
              size="large"
              className="h-12 min-w-[280px] rounded-lg border border-[#FFFFFF]/20 bg-[#FFFFFF08] text-base text-[#FFFFFF] placeholder:text-[#FFFFFF]/60"
              placeholder="Email..."
            />
          </Form.Item>
          <Form.Item>
            <div className="rounded-lg bg-gradient-to-tr from-[#FFFFFF]/10 to-[#FFFFFF]/60 p-[1px]">
              <button
                type="submit"
                className="h-[46px] min-w-[160px] rounded-lg bg-[#8B37F4] text-base text-white"
                onClick={onFinish}
              >
                Sign Up
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
      <Seperator />
    </>
  );
};

export default Subscribe;
