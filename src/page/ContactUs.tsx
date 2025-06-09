import Seperator from "@/components/Seperator";
import { basic_url } from "@/stack/stack";
import { Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import {} from "react-icons";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const ContactUs = () => {
  const handleSendBtn = () => {
    console.log("ClickSendButton");
  };

  const onFinish = (value: any) => {
    console.log(value.user, value.email, value.message);

    axios
      .post(
        `${basic_url}contact_us/${value.user}/${value.email}/${value.message}`,
      )
      .then(() => {
        message.success("Left Message Successfully.");
      })
      .catch(() => message.error("Network Error"));
  };

  return (
    <>
      <div className="container mx-auto font-inter">
        <div className="mt-[108px] text-center">
          <h1 className="mb-10 text-3xl md:text-5xl font-black text-white">Contact Us</h1>
          <Seperator />
          <Form
            name="nest-messages"
            layout="vertical"
            labelWrap
            colon={false}
            onFinish={onFinish}
            style={{ maxWidth: 1000 }}
            className="mx-auto mt-10 rounded-2xl border border-[#FFFFFF]/20 px-4 sm:px-10 md:px-20 py-10 backdrop-blur-lg"
            validateMessages={validateMessages}
          >
            <div className="flex flex-col md:flex-row w-full gap-4 md:gap-[60px]">
              <Form.Item
                name={["user"]}
                label={
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#ffffffCC",
                      fontWeight: "600",
                      lineHeight: "36px",
                    }}
                  >
                    Name
                  </p>
                }
                rules={[{ required: true }]}
                style={{ width: "100%" }}
              >
                <Input
                  size="large"
                  placeholder="Full name"
                  className="input-bg h-12 rounded-lg border border-[#ffffff]/20 text-white"
                />
              </Form.Item>
              <Form.Item
                name={["email"]}
                label={
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#ffffffCC",
                      fontWeight: "600",
                      lineHeight: "36px",
                    }}
                  >
                    Email
                  </p>
                }
                rules={[{ type: "email", required: true }]}
                style={{ width: "100%" }}
              >
                <Input
                  size="large"
                  placeholder="Your email"
                  className="input-bg h-12 rounded-lg border border-[#ffffff]/20 text-white"
                />
              </Form.Item>
            </div>
            <Form.Item
              name={["message"]}
              style={{ width: "100%" }}
              label={
                <p
                  style={{
                    fontSize: "16px",
                    color: "#ffffffCC",
                    fontWeight: "600",
                    lineHeight: "36px",
                  }}
                >
                  Message
                </p>
              }
              rules={[{ required: true }]}
            >
              <TextArea
                style={{ height: 200 }}
                placeholder="Please enter your message ..."
                className="input-bg rounded-lg border border-[#ffffff]/20 text-white"
              ></TextArea>
            </Form.Item>
            <Form.Item>
              <div className="w-fit rounded-md bg-gradient-to-tr from-[#ffffff]/10 to-[#ffffff]/60 p-[1px]">
                <button
                  type="submit"
                  className="w-fit rounded-md border border-none bg-[#8B37F4] px-10 py-3 font-sans text-base font-normal text-[white]"
                  onClick={handleSendBtn}
                >
                  Subscribe
                </button>
              </div>
            </Form.Item>
          </Form>
        </div>
        <div className="mt-[86px] text-center">
          <h1 className="mb-7 px-4 text-3xl md:text-5xl font-black text-[#ffffff]/80">
            Contact Info
          </h1>
          <Seperator />
          <div className="mx-auto my-20 grid max-w-[1000px] grid-cols-1 md:grid-cols-2 gap-y-7 px-4">
            <div className="flex items-center gap-7">
              <div className="h-[68px] w-[68px] content-center rounded-full border border-[#ffffff]/40 bg-gradient-to-b from-[#050520] to-[#ffffff]/10 text-center shrink-0">
                <img src="/icons/mail.png" className="mx-auto w-7" alt="mail" />
              </div>
              <div className="text-left text-[#ffffff]/80">
                <p className="text-2xl leading-[48px] ">Email</p>
                <p className="text-xl leading-[32px]">info@trdarts.com</p>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <div className="h-[68px] w-[68px] content-center rounded-full border border-[#ffffff]/40 bg-gradient-to-b from-[#050520] to-[#ffffff]/10 text-center shrink-0">
                <img
                  src="/icons/company.png"
                  className="mx-auto w-7"
                  alt="company"
                />
              </div>
              <div className="text-left text-[#ffffff]/80">
                <p className="text-2xl leading-[48px] ">Company</p>
                <p className="text-xl leading-[32px]">VV, LLC Company</p>
              </div>
            </div>
            {/* <div className="flex items-center gap-7">
              <div className="h-[68px] w-[68px] content-center rounded-full border border-[#ffffff]/40 bg-gradient-to-b from-[#050520] to-[#ffffff]/10 text-center shrink-0">
                <img
                  src="/icons/phone.png"
                  className="mx-auto w-7"
                  alt="phone"
                />
              </div>
              <div className="text-left text-[#ffffff]/80">
                <p className="text-2xl leading-[48px] ">Phone</p>
                <p className="text-xl leading-[32px]">+1 234 567 8900</p>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <div className="h-[68px] w-[68px] content-center rounded-full border border-[#ffffff]/40 bg-gradient-to-b from-[#050520] to-[#ffffff]/10 text-center shrink-0">
                <img src="/icons/map.png" className="mx-auto w-7" alt="map" />
              </div>
              <div className="text-left text-[#ffffff]/80">
                <p className="text-2xl leading-[48px] ">Address</p>
                <p className="text-xl leading-[32px]">
                  90 Richmond Hill road, 1M S.I, New York 10314
                </p>
              </div>
            </div> */}
          </div>
          <Seperator />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
