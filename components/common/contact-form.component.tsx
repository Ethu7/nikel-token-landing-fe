"use client";

import { ContactFormData } from "@/types";
import { useForm } from "react-hook-form";
import CustomButton from "./custom-button.component";
import { sendEmail } from "@/utils/send-email";
import CustomModal from "./custom-modal.component";
import { useState } from "react";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [modalOpen, setModalOpen] = useState(false);

  const onEmailSent = (message: string) => {
    setModalOpen(true);
  };

  const onError = (err: any) => {
    alert("Wasn't able to submit contact form. Please try again later");
    console.error(err);
  };

  const onSubmit = (data: ContactFormData) => {
    reset();
    sendEmail(data, onEmailSent, onError);
  };

  return (
    <>
      <CustomModal
        isOpen={modalOpen}
        title="Success!"
        message="Your form was submitted successfully. Our representative will contact you as soon as possible."
        onClose={() => setModalOpen(false)}
      />
      <div
        id="contact-us"
        className="w-full max-w-[900px] px-xl sm:px-2xl flex flex-col gap-lg sm:gap-xl items-center"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-lg sm:gap-xl"
        >
          <div className="w-full flex-1 flex flex-wrap gap-lg">
            <div className="flex flex-col gap-xs">
              <label className="text-onBackgroundSecondary text-md">
                Full Name<span className="text-error">*</span>
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="font-normal text-md rounded-lg p-xs bg-background border-2 border-onBackgroundSecondary"
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex-1" />
            <div className="flex flex-col gap-xs">
              <label className="text-onBackgroundSecondary text-md">
                Your Email<span className="text-error">*</span>
              </label>
              <input
                placeholder="Email Address"
                type="Your email address"
                className="font-normal text-md rounded-lg p-xs bg-background border-2 border-onBackgroundSecondary"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-xs">
            <label className="text-onBackgroundSecondary text-md">
              Innovation Field
            </label>
            <textarea
              placeholder="Enter your field of expertise"
              rows={2}
              className="w-full font-normal rounded-lg p-xs bg-background border-2 border-onBackgroundSecondary"
              {...register("message", { required: true })}
            />
            <p className="text-sm text-error">* indicates a required field</p>
          </div>
          <CustomButton type="submit" className="mt-lg" onClick={() => {}}>
            Submit
          </CustomButton>
        </form>
      </div>
    </>
  );
}
