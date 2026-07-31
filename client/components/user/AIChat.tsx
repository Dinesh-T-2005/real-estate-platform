"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Bot, User } from "lucide-react";
import { chatWithAI } from "@/lib/api";
import toast from "react-hot-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi 👋 Welcome to Nestora AI Assistant. Ask me anything about properties, pricing, buying, renting or investments.",
    },
  ]);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage() {
    if (!message.trim()) return;

    const currentMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: currentMessage,
      },
    ]);

    setMessage("");

    try {
      setLoading(true);

      const reply = await chatWithAI(currentMessage);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
<div className="mx-auto mt-6 flex h-[calc(100vh-170px)] max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

      <div className="flex items-center gap-4 border-b bg-white p-6">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

          <Bot
            size={30}
            className="text-blue-600"
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Nestora AI Assistant
          </h2>

          <p className="mt-1 text-base text-slate-500">
            Ask anything about properties,
            buying, renting and investment.
          </p>

        </div>

      </div>


      <div className="flex-1 space-y-6 overflow-y-auto bg-slate-50 p-6">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`flex items-start gap-3 ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            {msg.role === "assistant" && (

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">

                <Bot
                  size={18}
                  className="text-blue-600"
                />

              </div>

            )}

            <div
              className={`max-w-[75%] rounded-2xl px-5 py-4 text-[15px] leading-7 shadow ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "border border-slate-200 bg-white text-slate-800"
              }`}
            >
              {msg.content}
            </div>

            {msg.role === "user" && (

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">

                <User
                  size={18}
                  className="text-white"
                />

              </div>

            )}

          </div>

        ))}

        {loading && (

          <div className="flex items-start gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">

              <Bot
                size={18}
                className="text-blue-600"
              />

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-500 shadow">

              🤖 AI is thinking...

            </div>

          </div>

        )}

        <div ref={bottomRef} />

      </div>


      <div className="shrink-0 border-t bg-white p-5">

        <div className="flex items-center gap-4">

          <input
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              !loading &&
              sendMessage()
            }
            placeholder="Ask anything about properties..."
            className="flex-1 rounded-2xl border border-slate-300 bg-white px-5 py-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="button"
            disabled={loading}
            onClick={sendMessage}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white transition hover:scale-105 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send size={22} />
          </button>

        </div>

      </div>

    </div>
  );
}