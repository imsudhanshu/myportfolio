"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projectSystems = [
  {
    id: "jfw",
    name: "Jewish Future Works",
    description: "Serverless donation platform with real-time CRM sync",
    color: "from-blue-500 to-cyan-500",
    flow: [
      { label: "Client", desc: "Frontend donation interface" },
      { label: "API Gateway", desc: "Request routing & validation" },
      { label: "Lambda", desc: "Serverless business logic" },
      { label: "DynamoDB", desc: "Donation & transaction data" },
      { label: "Stripe Webhook", desc: "Payment automation" },
      { label: "CRM", desc: "Microsoft CRM sync" },
    ]
  },
  {
    id: "giftcast",
    name: "Giftcast",
    description: "Video gifting platform with secure payments",
    color: "from-purple-500 to-pink-500",
    flow: [
      { label: "Mobile Client", desc: "Video GIF platform" },
      { label: "REST API", desc: "Backend endpoints" },
      { label: "Laravel Backend", desc: "Business logic" },
      { label: "MySQL DB", desc: "User & gift data" },
      { label: "Stripe 3DS", desc: "Secure payments" },
      { label: "S3 Storage", desc: "Video uploads" },
      { label: "Firebase", desc: "Push notifications" },
    ]
  },
  {
    id: "fintech",
    name: "Loan Processing Platform",
    description: "Gamified fintech system with EMI calculations",
    color: "from-green-500 to-emerald-500",
    flow: [
      { label: "Web UI (Angular)", desc: "Admin dashboards" },
      { label: "REST API", desc: "Loan endpoints" },
      { label: "Backend (PHP)", desc: "EMI & approval logic" },
      { label: "MySQL", desc: "Loan records" },
      { label: "KYC (ZoopOne)", desc: "Verification" },
      { label: "Payment Gateways", desc: "6+ payment processors" },
      { label: "Firebase", desc: "Real-time updates" },
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const flowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 }
  })
};

export default function SystemDesign() {
  const [activeProject, setActiveProject] = useState("jfw");
  const [activeNode, setActiveNode] = useState(0);

  const currentSystem = projectSystems.find(p => p.id === activeProject);

  return (
    <section className="mt-32 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl mb-12 font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Project System Architecture
        </h2>
      </motion.div>

      {/* PROJECT SELECTOR */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-4"
      >
        {projectSystems.map((project) => (
          <motion.button
            key={project.id}
            variants={itemVariants}
            onClick={() => {
              setActiveProject(project.id);
              setActiveNode(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl font-semibold transition backdrop-blur-md border-2 ${
              activeProject === project.id
                ? `bg-gradient-to-r ${project.color} border-white/30 text-white shadow-lg shadow-current`
                : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"
            }`}
          >
            {project.name}
          </motion.button>
        ))}
      </motion.div>

      {/* ACTIVE PROJECT INFO */}
      {currentSystem && (
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={`p-6 bg-gradient-to-r ${currentSystem.color} opacity-10 rounded-2xl border border-white/20`}
          >
            <h3 className="text-2xl font-bold text-white">
              {currentSystem.name}
            </h3>
            <p className="text-gray-300 mt-2">{currentSystem.description}</p>
          </motion.div>

          {/* FLOW DIAGRAM */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-200">System Flow:</h4>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md overflow-x-auto"
            >
              <div className="flex items-center gap-3 min-w-max">
                {currentSystem.flow.map((node, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <motion.div
                      custom={i}
                      variants={flowVariants}
                      onMouseEnter={() => setActiveNode(i)}
                      whileHover={{ scale: 1.15 }}
                      className={`px-4 py-2 rounded-lg font-medium cursor-pointer transition whitespace-nowrap ${
                        activeNode === i
                          ? `bg-gradient-to-r ${currentSystem.color} text-white shadow-lg`
                          : "bg-white/10 text-gray-300 hover:bg-white/20"
                      }`}
                    >
                      {node.label}
                    </motion.div>

                    {i !== currentSystem.flow.length - 1 && (
                      <motion.div
                        animate={{
                          x: activeNode === i ? 5 : 0,
                          opacity: activeNode === i ? 1 : 0.5,
                        }}
                        className={`text-xl font-bold bg-gradient-to-r ${currentSystem.color} bg-clip-text text-transparent`}
                      >
                        →
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* NODE DETAILS */}
            <motion.div
              key={`${activeProject}-${activeNode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-6 bg-gradient-to-br ${currentSystem.color} opacity-5 rounded-xl border border-white/20 backdrop-blur-sm`}
            >
              <h5 className="text-lg font-bold text-white">
                {currentSystem.flow[activeNode].label}
              </h5>
              <p className="text-gray-300 mt-2">
                {currentSystem.flow[activeNode].desc}
              </p>
            </motion.div>
          </div>

          {/* TECH STACK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md"
          >
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Key Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                activeProject === "jfw" && ["Node.js", "AWS Lambda", "DynamoDB", "Stripe", "Microsoft CRM", "Next.js"],
                activeProject === "giftcast" && ["Laravel", "MySQL", "Firebase", "S3", "Stripe 3DS", "Tango API"],
                activeProject === "fintech" && ["PHP (CodeIgniter)", "MySQL", "Angular", "ZoopOne", "Razorpay", "Firebase"],
              ].filter(Boolean)[0]?.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.08 }}
                  className={`px-3 py-1 bg-gradient-to-r ${currentSystem.color} text-white rounded-full text-sm font-medium`}
                >
                  {tech}
                </motion.span>
              ))
              }
            </div>
          </motion.div>
        </motion.div>
      )}

    </section>
  );
}