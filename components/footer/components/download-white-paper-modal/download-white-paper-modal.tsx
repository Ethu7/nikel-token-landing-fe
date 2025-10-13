import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import CustomButton from "@/components/common/custom-button.component";
import { useForm } from "react-hook-form";
import { WhitePaperDownloadFormData } from "@/types";
import { FC, useState } from "react";
import { sendEmail } from "@/utils/send-email";
import CustomHeader2 from "@/components/common/custom-header-2.component";

type DownloadWhitePaperModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DownloadWhitePaperModal: FC<DownloadWhitePaperModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WhitePaperDownloadFormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onCloseModal = () => {
    onClose();
    setIsSent(false);
  };

  const onEmailSent = () => {
    setIsLoading(false);
    setIsSent(true);
    // window.open(
    //   "https://drive.google.com/file/d/13Q1gGYov5IXk0KPYfP-a1C-e1-FehNVR/view",
    //   "_blank"
    // );
  };

  const onError = (err: any) => {
    setIsLoading(false);
    alert("Wasn't able to download PDF. Please try again later");
    console.error(err);
  };

  const onSubmit = (data: WhitePaperDownloadFormData) => {
    setIsLoading(true);
    reset();
    sendEmail(
      { ...data, message: "White Paper Download Request" },
      onEmailSent,
      onError
    );
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-container rounded-2xl shadow-lg p-6 mx-lg max-w-xl w-full text-center relative text-onBackground"
      >
        <button
          onClick={() => onCloseModal()}
          className="absolute top-3 right-3 text-onBackground hover:text-onBackgroundSecondary"
        >
          <X size={30} />
        </button>
        {isSent ? (
          <div className="flex flex-col items-center gap-md">
            <CheckCircle size={52} className="text-primary mx-auto" />
            <CustomHeader2>Success!</CustomHeader2>
            <p className="text-lg text-onBackgroundSecodary">
              Your form has been submitted successfully. Our representative will
              reach out to you as soon as possible.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-md">
            <div>Please submit your information to download the PDF file.</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col items-center gap-lg sm:gap-xl"
            >
              <div className="w-full">
                <div className="text-left">
                  <div className="text-onBackgroundSecondary text-md mb-1">
                    Enter your full name<span className="text-error">*</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="font-normal w-full text-md rounded-lg p-xs bg-background border-2 border-onBackgroundSecondary"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <div className="text-red-500 mt-1 text-sm">
                      Please input your full name!
                    </div>
                  )}
                </div>
                <div className="text-left mt-4">
                  <div className="text-onBackgroundSecondary text-md mb-1">
                    Enter your email<span className="text-error">*</span>
                  </div>
                  <input
                    placeholder="Email Address"
                    type="Your email address"
                    className="font-normal w-full text-md rounded-lg p-xs bg-background border-2 border-onBackgroundSecondary"
                    {...register("email", { required: true })}
                  />
                  {errors.name && (
                    <div className="text-red-500 mt-1 text-sm">
                      Please input your email!
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <CustomButton
                  type="button"
                  className="mt-lg bg-gray-700"
                  onClick={() => onCloseModal()}
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  type="submit"
                  className="mt-lg"
                  onClick={() => {}}
                >
                  Submit
                </CustomButton>
              </div>
            </form>
            {isLoading ? (
              <div className="absolute inset-0 bg-black opacity-30 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
              </div>
            ) : null}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DownloadWhitePaperModal;
