import { WhatsApp } from "@/assets/svg/svg-icons";
import { Button } from "@/components/ui/button";
import { socialConnections } from "@/data/demo-arrays";
import { SocialConnection } from "@/ts/type";
import { MailOpen, Phone } from "lucide-react";
import SendMail from "./send-mail";

const GetInTouch = () => {
  return (
    <div className="bg-[var(--dark-purple)]">
      <div className="container lg-min:py-[6.25rem] py-[2.25rem]">
        <div className="grid grid-cols-1 lg-min:grid-cols-2 lg-min:gap-x-10">
          {/* Get In Touch ⬇️ */}
          <div id="get-in-touch">
            <h2 className="text-white text-[2rem] lg-min:text-[3rem] lg-min:max-w-2xl max-w-full leading-snug font-semibold ">
              Get In Touch And Collaborate with
              <br className="lg-min:hidden block " />
              <span className="purple_gradient__heading__txt"> Str Waves</span>
            </h2>
            <div className="grid grid-cols-1 lg-min:grid-cols-2 text-white gap-2 pt-10">
              {/* <div className="lg-min:col-span-2 bg-gradient-to-tr from-black/25 from-5% via-80% via-[var(--black-shade)] to-[var(--light-black-shade)] p-5 rounded-lg flex items-center gap-x-5 border border-gray-100/15"> */}
              <div className="lg-min:col-span-2 bg-[#070b18] p-5 rounded-lg flex items-center gap-x-5 border border-gray-100/15">
                <Button className="bg-gradient-to-tr from-[var(--indigo-5)] from-50% to-[var(--indigo-2)] rounded-full p-4 h-16 w-16">
                  <WhatsApp className="h-8 w-8 stroke-1 fill-white" />
                </Button>
                <div>
                  <h5 className="text-2xl font-semibold">WhatsApp</h5>
                  <p className="text-gray-400">+880 188600 9098</p>
                  <p className="text-gray-400 pt-2 lg-min:text-base text-sm">
                    Contact via WhatsApp for better response and effortless
                    conversation
                  </p>
                </div>
              </div>
              <div className="col-span-1 p-5 rounded-lg flex items-center gap-x-5">
                <Button className="bg-gradient-to-tr from-[var(--indigo-5)] from-50% to-[var(--indigo-2)] rounded-full p-4 h-16 w-16">
                  <Phone className="h-8 w-8 stroke-1" />
                </Button>
                <div>
                  <h5 className="text-2xl font-semibold">Phone Number</h5>
                  <p className="text-gray-400">+880 188600 9098</p>
                </div>
              </div>
              <div className="col-span-1 p-5 rounded-lg flex items-center gap-x-5">
                <Button className="bg-gradient-to-tr from-[var(--indigo-5)] from-50% to-[var(--indigo-2)] rounded-full p-4 h-16 w-16">
                  <MailOpen className="h-8 w-8 stroke-1" />
                </Button>
                <div>
                  <h5 className="text-2xl font-semibold">Email</h5>
                  <p className="text-gray-400">info.strwaves@gmail.com</p>
                </div>
              </div>
            </div>

            {/*Official Media ⬇️ */}
            <div className="lg-min:flex lg-min:flex-row flex-col lg-min:justify-start justify-center items-center lg-min:space-x-3 space-y-3 mt-10">
              <h5 className="text-2xl font-semibold text-white">
                Office Media:
              </h5>
              <div className="grid grid-flow-col lg-min:place-content-center place-content-start gap-2">
                {socialConnections.map((socialConnection: SocialConnection) => (
                  <a
                    href={socialConnection.url}
                    key={socialConnection.url}
                    target="_blank"
                    title={socialConnection.alt}
                    className="bg-[#4a4a9682] text-white backdrop-blur-sm p-2 rounded-full flex items-center justify-center h-12 w-12"
                  >
                    <span>{socialConnection.icon}</span>
                  </a>
                ))}
              </div>
              <div></div>
            </div>
          </div>
          {/* Get In Touch ⬆️ */}
          <SendMail />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
