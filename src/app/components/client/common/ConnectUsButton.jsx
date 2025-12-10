"use client";
import CommonButton from "./CommonButton";
import useWhatsappRedirect from "../../../hooks/useWhatsappRedirect";

export default function WhatsappButton({ color = "primary", message, children }) {
  const redirectToWhatsapp = useWhatsappRedirect();
  return (
    <CommonButton color={color} onClick={() => redirectToWhatsapp(message)}>
      {children}
    </CommonButton>
  );
}
