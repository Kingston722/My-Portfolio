import { useState } from "react";

const projects = [
  {
    title: "C.F.T.C (Charge For The Charged)",
    description:
      "Developed an Android-based IoT application that incentivizes sustainable energy generation by rewarding users with points based on energy generated during transportation.",
    stack: [
      "Android (Java, XML)",
      "Firebase Authentication",
      "Firebase Realtime Database",
      "ESP32",
      "ThingSpeak",
      "Dialogflow",
      "QR Code Scanning",
    ],
    role:
      "Built core Android modules, integrated Firebase, implemented QR-based reward logic, visualized IoT data, and connected Dialogflow chatbot support.",
    features: [
      "Energy generation from movement during travel (for example, cycling)",
      "Reward-based Charge Points system tied to generated energy",
      "Real-time battery tracking for generated and stored energy",
      "QR code rewards for additional points during activities or events",
      "Reward redemption using earned points for benefits or gift cards",
      "AI assistant (Charge BOT) for app navigation and feature guidance",
      "User dashboard showing progress, points, and sustainability contribution",
    ],
    liveLink: "https://cftc.netlify.app/",
  },
  {
    title: "Saksham - AI-Enabled Student Counselling & Wellness Platform",
    description:
      "Built a full-stack student wellness platform that combines secure counselling workflows, AI-assisted guidance, peer support, and curated wellness resources in one centralized system.",
    stack: [
      "Spring Boot (Java)",
      "PostgreSQL (Supabase)",
      "React (Vite)",
      "Redux Toolkit",
      "DaisyUI",
      "JWT Authentication",
      "REST APIs",
      "OpenRouter API",
      
    ],
    role:
      "Designed booking backend logic with slot automation and concurrency safety, implemented JWT auth with RBAC, built React + Redux modules, integrated hybrid AI chatbot, and contributed to counsellor dashboard, forum, and wellness resources.",
    features: [
      "User dashboard for students (appointments, status, activity) and counsellors (session monitoring, booking management)",
      "Smart appointment booking with selectable available time slots",
      "Counsellor session management with appointment tracking and completion updates",
      "AI chatbot (Saksham BOT) using both rule-based and AI-based responses for guidance and navigation",
      "Support forum for peer interaction, discussion, and shared experiences",
      "Wellness resources hub with curated articles, tips, and guidance for mental health and academics",
    ],
    liveLink: "",
  },
  {
    title: "Janmanch - Civic Engagement & Grievance Redressal Platform",
    description:
      "Developed a full-stack civic engagement platform that enables citizens to raise grievances, access ward-level information, participate in voting, and interact with local representatives. The system focuses on improving transparency, citizen participation, and efficient issue resolution through a centralized digital interface.",
    stack: [
      "React (Vite)",
      "Tailwind CSS",
      "Node.js / Express",
      "MongoDB / Backend APIs",
      "Axios",
      "REST APIs",
      "JWT Authentication",
    ],
    role:
      "Led frontend development by designing and implementing responsive UI using React and Tailwind CSS. Structured the application with reusable pages and components, integrated APIs using Axios, managed data flow, and ensured smooth UX through loading, error handling, and routing.",
    features: [
      "Easy grievance reporting through a simple and structured form",
      "Real-time complaint tracking with pending, in progress, and resolved status updates",
      "Ward-wise information access for local updates and data visibility",
      "Community voting system for participation in local decisions and initiatives",
      "Personal user dashboard showing activities, submitted complaints, and updates",
      "Secure user authentication for safe and personalized access",
      "User-friendly interface designed for accessibility across diverse users",
    ],
    liveLink: "",
  },
];

const WorkSlider = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
      {projects.map((project, projectI) => (
        // Show toggle for long cards without runtime DOM measurements.
        // This avoids costly nested-scroll behavior that can feel laggy.
        (() => {
          const shouldShowToggle =
            project.description.length > 180 ||
            project.features?.length > 4 ||
            (project.role && project.role.length > 140);

          return (
        <div
          className={`rounded-lg border border-white/10 bg-white/5 p-4 sm:p-5 flex flex-col transition-all duration-300 ${
            expandedCards[projectI] ? "h-auto" : "h-[460px] sm:h-[520px]"
          }`}
          key={projectI}
        >
          <div className="relative flex-1 min-h-0">
            <div
              className={`h-full min-h-0 space-y-3 ${
                expandedCards[projectI] ? "overflow-visible" : "overflow-hidden"
              }`}
            >
              <h3 className="text-lg font-semibold text-accent">{project.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{project.description}</p>
              {project.role && (
                <p className="text-xs text-white/70 leading-relaxed">
                  <span className="text-accent">Role:</span> {project.role}
                </p>
              )}
              <div>
                <p className="text-xs text-white/70 mb-1">
                  <span className="text-accent">Stack:</span>
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech, stackI) => (
                    <span
                      key={stackI}
                      className="text-[11px] leading-tight px-2 py-1 rounded-full bg-white/10 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.features?.length > 0 && (
                <ul className="text-xs text-white/70 space-y-1 list-disc list-inside">
                  {project.features.map((feature, featureI) => (
                    <li key={featureI}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>

            {!expandedCards[projectI] && shouldShowToggle && (
              <div
                className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1a1a2e] to-transparent pointer-events-none"
                aria-hidden
              />
            )}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            {shouldShowToggle ? (
              <button
                type="button"
                onClick={() => toggleExpand(projectI)}
                className="text-xs tracking-[0.12em] text-accent hover:text-white transition-colors duration-300"
              >
                {expandedCards[projectI] ? "SEE LESS" : "SEE MORE"}
              </button>
            ) : (
              <span aria-hidden />
            )}

            {project.liveLink ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm tracking-[0.15em] text-accent hover:text-white transition-colors duration-300"
              >
                VIEW LIVE
              </a>
            ) : (
              <p className="text-xs tracking-[0.1em] text-white/50">LIVE LINK NOT PROVIDED</p>
            )}
          </div>
        </div>
          );
        })()
      ))}
    </div>
  );
};

export default WorkSlider;
