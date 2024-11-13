"use client";
import * as Theme from "@/components/styled-components/theme";
import * as shadCn from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import { Loader } from "lucide-react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

interface ContactInfo {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const SendMail = () => {
  const [contactInfo, setContactInfo] = React.useState<ContactInfo>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactInfo),
      });
      if (!response.ok) {
        toast.error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setLoading(false);
      toast.success(data.message);
    } catch (error) {
      setLoading(false);
      toast.error("[Catch]: Something went wrong!");
    }
  };

  return (
    <div id="input-field" className="lg-min:mt-0 mt-10">
      <Toaster />
      <Theme.CardBg className="p-5 rounded-lg border border-gray-100/15 ">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            value={contactInfo.name}
            onChange={handleChange}
            className="bg-transparent text-white border-gray-700 focus-visible:ring-1 focus-visible:ring-[var(--indigo-5)] py-6"
          />
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            required
            value={contactInfo.email}
            onChange={handleChange}
            className="bg-transparent text-white border-gray-700 focus-visible:ring-1 focus-visible:ring-[var(--indigo-5)] py-6"
          />
          <Input
            type="text"
            placeholder="Your Subject"
            name="subject"
            required
            value={contactInfo.subject}
            onChange={handleChange}
            className="bg-transparent text-white border-gray-700 focus-visible:ring-1 focus-visible:ring-[var(--indigo-5)] py-6 "
          />

          <Textarea
            placeholder="Type your message here."
            name="message"
            required
            value={contactInfo.message}
            onChange={handleChange}
            className="bg-transparent text-white border-gray-700 focus-visible:ring-1 focus-visible:ring-[var(--indigo-5)]"
            rows={8}
          />
          <shadCn.Button
            className={cn(
              "global__Button__gradient px-14 py-6 rounded-md relative overflow-hidden tracking-wider transition-all duration-300 ease-in-out"
            )}
          >
            {loading ? (
              <span className="flex items-center justify-center space-x-2">
                <Loader className="transition-all ease-in-out duration-700 animate-spin" />
                <span>Processing..</span>
              </span>
            ) : (
              "Send Mail"
            )}
          </shadCn.Button>
        </form>
      </Theme.CardBg>
    </div>
  );
};

export default SendMail;
