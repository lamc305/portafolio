import emailjs from "@emailjs/browser";
export const emailjsInit = emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_PUBISHABLE_KEY,
  limitRate: {
    id: "app",
    throttle: 10000,
  },
});

type EmailMessage = {
  name: string;
  senderMail: string;
  message: string;
};

export const sendEmail = async (email: EmailMessage) => {
  try {
    const response = await emailjs.send(
      "service_kvm54dq",
      "template_e5473b8",
      email
    );
    return response;
  } catch (error) {
    return error;
  }
};
