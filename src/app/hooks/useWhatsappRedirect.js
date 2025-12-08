// useWhatsappRedirect.js
// Usage: const redirectToWhatsapp = useWhatsappRedirect(); redirectToWhatsapp(message)
import { useCallback } from "react";

const WHATSAPP_NUMBER = "971551421502";

export default function useWhatsappRedirect() {
  return useCallback((message = "") => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
    window.open(url, "_blank");
  }, []);
}
