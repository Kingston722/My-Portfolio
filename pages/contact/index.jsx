import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  useEffect(() => {
    if (!toast.show) return undefined;

    const timer = setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3200);

    return () => clearTimeout(timer);
  }, [toast.show]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          subject: event.target.subject.value,
          message: event.target.message.value,
        }),
      });

      if (response.ok) {
        showToast("Thank you. I will get back to you ASAP.", "success");
        event.target.reset();
      } else {
        const data = await response.json();
        showToast(data.error || "Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      showToast("Error sending message. Please try again later.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto px-4 sm:px-6 py-24 md:py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          <div
            className={`fixed top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6 z-[120] transition-all duration-300 ${
              toast.show
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
            aria-live="polite"
            aria-atomic="true"
          >
            <div
              className={`w-[calc(100vw-2rem)] md:min-w-[260px] md:w-auto max-w-[360px] rounded-xl border px-4 py-3 shadow-lg backdrop-blur-sm ${
                toast.type === "error"
                  ? "bg-red-950/90 border-red-400/50 text-red-100"
                  : "bg-emerald-950/90 border-emerald-400/50 text-emerald-100"
              }`}
            >
              {toast.message}
            </div>
          </div>

          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >
            {/* input group */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto xl:mx-0"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
