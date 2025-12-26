
"use client";
import React, { useState, useRef } from "react";
import { fetchChatGPT } from "@/utils/openai";
import { MessageCircle } from "lucide-react";

function ChatBotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! 👋\nHow can Salmon Medics help you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [loading, setLoading] = useState(false);
  const chatboxRef = useRef(null);
  const openBtnRef = useRef(null);

  // Handle input change
  const handleInputChange = (e) => setInput(e.target.value);

  // Handle send message
  const handleSend = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    const userMsg = {
      role: "user",
      content: trimmed,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      // Prepare messages for API (role/content only)
      const apiMessages = [...messages, { role: "user", content: trimmed }].map(({ role, content }) => ({ role, content }));
      const response = await fetchChatGPT(apiMessages);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, there was an error contacting the AI.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Icon Button */}
      {!open && (
        <div className="fixed z-50 bottom-24 right-2 sm:right-6 md:bottom-28 md:right-8">
          <button
            ref={openBtnRef}
            type="button"
            aria-label="Open chat bot"
            onClick={() => setOpen(true)}
            className="relative bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg p-3 md:p-4 flex items-center justify-center transition-colors duration-200 cursor-pointer"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
          >
            <span className="relative flex items-center justify-center">
              <MessageCircle className="w-5 h-5 md:w-8 md:h-8" />
              {/* Unread red dot with number inside button */}
              <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center">
                {/* Ping animation */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex items-center justify-center w-4 h-4 bg-red-600 rounded-full border-2 border-white text-[10px] font-bold text-white leading-none">1</span>
              </span>
            </span>
          </button>
        </div>
      )}

      {/* Chatbox UI */}
      {open && (
        <div
          ref={chatboxRef}
          className="fixed z-50 bottom-60 right-6 md:bottom-44 md:right-8 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-primary rounded-t-xl">
            <span className="text-white font-semibold">Chat with us</span>
            <button
              aria-label="Close chat bot"
              onClick={() => setOpen(false)}
              className="text-white hover:text-gray-200 text-xl font-bold px-2"
            >
              ×
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
            {messages.map((msg, idx) =>
              msg.role === "assistant" ? (
                <div className="flex items-start" key={idx}>
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-2">S</div>
                  <div>
                    <div className="bg-white border border-primary-100 rounded-2xl rounded-bl-sm px-4 py-2 text-sm text-gray-800 shadow-sm max-w-xs whitespace-pre-line">
                      {msg.content}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 ml-1">{msg.time}</div>
                  </div>
                </div>
              ) : (
                <div className="flex items-end justify-end" key={idx}>
                  <div>
                    <div className="bg-primary text-white rounded-2xl rounded-br-sm px-4 py-2 text-sm shadow max-w-xs ml-auto whitespace-pre-line">
                      {msg.content}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 text-right mr-1">{msg.time}</div>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-primary font-bold ml-2">U</div>
                </div>
              )
            )}
          </div>
          {/* Input bar */}
          <form className="border-t border-gray-200 bg-white px-3 py-2 flex items-center gap-2" onSubmit={handleSend}>
            <input
              type="text"
              className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={loading ? "Waiting for response..." : "Type your message..."}
              value={input}
              onChange={handleInputChange}
              autoComplete="off"
              disabled={loading}
            />
            <button
              className={`bg-primary text-white rounded-full px-4 py-2 text-sm font-semibold transition-opacity ${input.trim() && !loading ? "opacity-100 cursor-pointer" : "opacity-60 cursor-not-allowed"}`}
              type="submit"
              disabled={!input.trim() || loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatBotWidget;