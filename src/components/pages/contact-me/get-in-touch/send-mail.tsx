"use client";
import * as Theme from "@/components/styled-components/theme";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const SendMail = () => {
  return (
    <div id="input-field" className="lg-min:mt-0 mt-10">
      <div className=" bg-gradient-to-tr from-black/25 from-5% via-80% via-[var(--black-shade)] via  to-[var(--light-black-shade)] p-5 rounded-lg border border-gray-100/15 space-y-5">
        <Input
          type="text"
          placeholder="Your Name"
          className="bg-transparent text-white border-gray-700 focus-visible:ring-1 focus-visible:ring-[var(--indigo-5)] py-6"
        />
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-transparent text-white border-gray-700 focus-visible:ring-1 focus-visible:ring-[var(--indigo-5)] py-6"
        />
        <Input
          type="text"
          placeholder="Your Subject"
          className="bg-transparent text-white border-gray-700 focus-visible:ring-1 focus-visible:ring-[var(--indigo-5)] py-6 "
        />

        <Textarea
          placeholder="Type your message here."
          className="bg-transparent text-white border-gray-700 focus-visible:ring-1 focus-visible:ring-[var(--indigo-5)]"
          rows={8}
        />
        <Theme.PrimaryButton>Send Mail</Theme.PrimaryButton>
      </div>
    </div>
  );
};

export default SendMail;
