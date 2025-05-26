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
      <div className="mx-auto max-w-[640px] space-y-6 px-4 py-[62px] text-center md:px-0">
        <div className="logo-bg flex items-center justify-center gap-4 py-5">
          <img src="/icons/icon.png" alt="logo" className="h-[52px] w-[52px]" />
          <div className="text-center">
            <p className="text-lg font-semibold leading-[18px] text-[#DFDFDF]">
              TRADE
            </p>
            <p className="bg-gradient-to-tr from-[#6236D6] to-[#E61CC5] bg-clip-text text-[30px] font-extrabold leading-[30px] text-transparent">
              Arts
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-black text-[#FFFFFF]/80 md:text-5xl">
          Subscribe to Trade Arts
        </h1>
        <p className="text-lg text-[#FFFFFF]/60 md:text-xl">
          Sign up to our newsletter to receive timely market updates and
          information on product sales and giveaways.
        </p>
        <Form
          name="nest-messages"
          layout="horizontal"
          labelWrap
          colon={false}
          onFinish={onFinish}
          style={{ maxWidth: 600, margin: "0 auto", marginTop: "36px" }}
          className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-5"
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
