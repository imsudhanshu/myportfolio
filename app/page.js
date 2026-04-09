"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaNodeJs,
  FaLaravel,
  FaDatabase,
  FaGitAlt,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaAward,
  FaServer,
  FaDesktop,
  FaCloud,
  FaCreditCard,
  FaCogs,
  FaTools,
  FaNetworkWired,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiStripe,
  SiPhp,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiRazorpay,
  SiFirebase,
  SiMicrosoft,
  SiPhpunit,
  SiPostman,
  SiSwagger,
  SiTrello,
} from "react-icons/si";
import SystemDesign from "./system";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { 
    scale: 1.15,
    background: "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.2) 100%)",
    borderColor: "rgba(255,255,255,0.3)",
    transition: { duration: 0.2 }
  }
};

const timelineVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const contributionVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
    borderColor: "rgba(139, 92, 246, 0.5)",
    transition: { duration: 0.3 }
  }
};

const floatHover = {
  hover: {
    y: -6,
    scale: 1.01,
    boxShadow: "0 30px 60px rgba(59, 130, 246, 0.12)",
    transition: { duration: 0.25 }
  }
};

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen px-4 sm:px-6 md:px-20 py-10 space-y-32 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-purple-600 opacity-30 blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-600 opacity-30 blur-[150px] animate-pulse"></div>

      {/* HERO + CONTACT */}
      <motion.section variants={container} initial="hidden" animate="show">
        <motion.div
          variants={item}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] rounded-[40px] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-[0_40px_120px_rgba(71,0,128,0.18)]"
        >
          <div className="space-y-6 text-left">
            <motion.div
              variants={item}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              {/* <div className="h-32 w-32 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src="/profile.jpeg"
                  alt="Sudhanshu Mishra"
                  width={128}
                  height={144}
                  className="h-full w-full object-cover"
                />
              </div> */}
              <div className="min-w-0">
                <motion.h1
                  variants={item}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent leading-tight"
                >
                  Sudhanshu Mishra
                </motion.h1>

                <motion.p variants={item} className="text-gray-400 mt-2 text-lg">
                  Sr. Software Engineer
                </motion.p>
              </div>
            </motion.div>

            <motion.div
            variants={item}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md"
          >
            <h2 className="text-3xl font-semibold">Profile Summary</h2>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Experienced Software Engineer with 6.5+ years of building scalable backend systems,
              serverless architectures, and payment-driven platforms. Specialized in designing
              reliable systems using AWS, integrating complex third-party APIs, and delivering
              end-to-end production-ready solutions with strong ownership and clean code practices.
            </p>
          </motion.div>
          </div>
          <motion.div
              variants={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold">Connect</h2>
                  <p className="text-gray-400 mt-2 max-w-full">
                    Reach out for freelance work, collaboration, or your next engineering role.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <a
                  href="https://www.linkedin.com/in/sudhanshu-mishra-a38608147/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full min-w-0 items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-200 hover:bg-blue-500/15 transition"
                >
                  <FaLinkedin className="text-xl" />
                  LinkedIn Profile
                </a>

                <a
                  href="mailto:mishrasudhanshu398@gmail.com"
                  className="flex w-full min-w-0 items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 transition"
                >
                  <FaEnvelope className="text-xl" />
                  mishrasudhanshu398@gmail.com
                </a>

                <a
                  href="/resume.pdf"
                  className="flex w-full min-w-0 items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-violet-500/20 hover:brightness-110 transition"
                  download
                >
                  <FaDownload className="text-xl" />
                  Download Resume
                </a>
              </div>
            </motion.div>
        </motion.div>
      </motion.section>

      {/* KEY ACHIEVEMENTS */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Key Achievements</h2>
              <p className="text-gray-400 mt-2 max-w-2xl">
                Selected impact stories that highlight product delivery, automation, and secure operations.
              </p>
            </div>
            <span className="text-sm text-gray-400">Node.js · WebSockets · AWS Lambda · EventBridge · SQS · EC2 · Stripe · Laravel</span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Real-time broadcast system",
                description: "Built a WebSocket-based ad delivery platform that schedules and streams video content on demand.",
              },
              {
                title: "Automated certificate workflow",
                description: "Implemented Stripe-driven donation flow that generates PDF certificates and emails them instantly.",
              },
              {
                title: "Zero-downtime migration",
                description: "Remediated a compromised server and migrated traffic to a hardened EC2 host without service interruption.",
              },
              {
                title: "Serverless orchestration",
                description: "Led the migration of multiple services to serverless architecture using AWS Lambda, EventBridge, and SQS for automated timed workflows and event-driven media delivery.",
              },
            ].map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={item}
                initial="hidden"
                whileInView="show"
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 30px 60px rgba(59, 130, 246, 0.12)",
                  transition: { duration: 0.25 }
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-slate-950/80 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl mb-10 font-semibold">Skills</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <FaLaravel />, name: "PHP / Laravel / CodeIgniter" },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <FaAws />, name: "AWS (Lambda, S3, EventBridge)" },
            { icon: <FaDatabase />, name: "MySQL / DynamoDB" },
            { icon: <SiStripe />, name: "Stripe / Razorpay" },
            { icon: <FaDocker />, name: "Docker / CI-CD" },
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <FaGitAlt />, name: "Git / Bitbucket" },
          ].map((tech, i) => (
            <motion.div
              key={i}
              variants={skillItemVariants}
              custom={i}
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              viewport={{ once: true }}
              className="flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md cursor-pointer"
            >
              <motion.div 
                className="text-2xl"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {tech.icon}
              </motion.div>
              <span className="font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TECH STACK BREAKDOWN */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl mb-2 font-semibold">Tech Stack Breakdown</h2>
              <p className="text-gray-400 max-w-2xl">
                A more detailed view of the platforms, tools, and architecture areas I use every day.
              </p>
            </div>
            <span className="text-sm text-gray-400">Full-stack, cloud, integration, and automation</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                title: "Backend",
                icon: <FaServer />,
                items: [
                  { label: "Node.js", icon: <FaNodeJs /> },
                  { label: "PHP (Laravel/CodeIgniter)", icon: <SiPhp /> },
                  { label: "Express", icon: <SiExpress /> },
                  { label: "Serverless Functions", icon: <FaAws /> },
                  { label: "REST APIs", icon: <FaNetworkWired /> },
                ]
              },
              {
                title: "Frontend",
                icon: <FaDesktop />,
                items: [
                  { label: "Next.js", icon: <SiNextdotjs /> },
                  // { label: "Angular", icon: <SiAngular /> },
                  { label: "React", icon: <SiReact /> },
                  { label: "Tailwind CSS", icon: <SiTailwindcss /> },
                  { label: "Modern UX", icon: <FaAward /> },
                ]
              },
              {
                title: "Cloud & Data",
                icon: <FaCloud />,
                items: [
                  { label: "AWS Lambda", icon: <FaAws /> },
                  { label: "S3", icon: <FaAws /> },
                  { label: "DynamoDB", icon: <FaAws /> },
                  { label: "RDS / MySQL", icon: <SiMysql /> },
                  { label: "EventBridge", icon: <FaAws /> },
                ]
              },
              {
                title: "Payments & Integrations",
                icon: <FaCreditCard />,
                items: [
                  { label: "Stripe", icon: <SiStripe /> },
                  { label: "Razorpay", icon: <SiRazorpay /> },
                  { label: "ZoopOne KYC", icon: <FaAward /> },
                  { label: "Firebase", icon: <SiFirebase /> },
                  // { label: "Microsoft CRM", icon: <SiMicrosoft /> },
                ]
              },
              {
                title: "DevOps",
                icon: <FaCogs />,
                items: [
                  { label: "Docker", icon: <FaDocker /> },
                  { label: "CI/CD", icon: <FaCogs /> },
                  { label: "Staging Deployments", icon: <FaCloud /> },
                  { label: "Automation", icon: <FaTools /> },
                  { label: "Monitoring", icon: <FaChartLine /> },
                ]
              },
              {
                title: "Tools",
                icon: <FaTools />,
                items: [
                  { label: "Git", icon: <FaGitAlt /> },
                  // { label: "PHPUnit", icon: <SiPhpunit /> },
                  { label: "Postman", icon: <SiPostman /> },
                  { label: "Swagger", icon: <SiSwagger /> },
                  { label: "Trello", icon: <SiTrello /> },
                ]
              }
            ].map((stack) => (
              <motion.div
                key={stack.title}
                variants={item}
                className="min-h-[290px] p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300 text-lg">
                    {stack.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{stack.title}</h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  {stack.items.map((entry) => (
                    <li key={entry.label} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-violet-300 text-base">
                        {entry.icon}
                      </span>
                      <span>{entry.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TIMELINE */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl mb-10 font-semibold">Journey</h2>

        <div className="relative border-l-2 border-white/10 pl-8 space-y-12">
          <motion.div
            className="absolute -left-[17px] top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ originY: 0, height: "100%" }}
          />

          {[{
            year: "2021 – Present",
            company: "Mindfire Solutions",
            role: "Sr. Software Engineer"
          },
          {
            year: "2019 – 2021",
            company: "Capital Now",
            role: "Backend Developer"
          }].map((itemData, i) => (
            <motion.div 
              key={i} 
              variants={timelineVariants}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                className="absolute -left-[18px] top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-black"
                whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(59,130,246,0.8)" }}
              />
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <p className="text-gray-400 text-sm font-medium">{itemData.year}</p>
                <h3 className="text-xl font-bold mt-1 group-hover:text-blue-400 transition">{itemData.company}</h3>
                <p className="text-gray-300 mt-1">{itemData.role}</p>
              </motion.div>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* CONTRIBUTIONS */}
      {/* CONTRIBUTIONS */}
<motion.section
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <h2 className="text-3xl mb-10 font-semibold">Core Contributions</h2>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      [
        "End-to-End Ownership",
        "Owned complete system lifecycle including backend development, frontend integration, CI/CD pipelines, and production deployments. Ensured systems were reliable, scalable, and production-ready without dependency on external teams."
      ],
      [
        "Serverless Architecture",
        "Designed event-driven architectures using AWS Lambda, API Gateway, DynamoDB, and EventBridge. Built systems capable of handling asynchronous workflows, scaling automatically based on traffic."
      ],
      [
        "Payment Systems",
        "Implemented secure payment integrations using Stripe and Razorpay with webhook-based flows. Handled retries, failures, idempotency, and recurring billing to ensure reliability in financial transactions."
      ],
      [
        "Real-Time Systems",
        "Built real-time integrations including Microsoft CRM sync and Firebase push notifications, enabling instant updates and reducing manual intervention."
      ],
      [
        "Media Pipelines",
        "Developed secure video upload and processing pipelines using Amazon S3 with encryption, ensuring safe storage and efficient media handling."
      ],
      [
        "Async Processing",
        "Designed cron jobs, queue workers, and background processing systems to handle delayed tasks like notifications, payments, and scheduled workflows efficiently."
      ],
      [
        "Microservices Migration",
        "Migrated legacy Laravel monolith into Node.js microservices architecture, improving performance, scalability, and independent deployment capabilities."
      ],
      [
        "Fintech Systems",
        "Built complex backend systems for loan processing including EMI calculations, loan lifecycle workflows, approvals, and financial reporting."
      ],
      [
        "Third-Party Integrations",
        "Integrated multiple external services including ZoopOne (KYC), Tango APIs, Google APIs, and multiple payment gateways ensuring seamless interoperability."
      ],
      [
        "DevOps & CI/CD",
        "Set up Docker-based CI/CD pipelines, staging environments, and automated deployment flows ensuring faster and reliable releases."
      ]
    ].map((data, i) => (
      <motion.div
        key={i}
        variants={contributionVariants}
        custom={i}
        initial="hidden"
        whileInView="show"
        whileHover="hover"
        viewport={{ once: true }}
        className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md cursor-pointer"
      >
        <motion.h3 
          className="font-semibold text-lg text-blue-400"
          whileHover={{ x: 5 }}
        >
          {data[0]}
        </motion.h3>
        <p className="text-gray-400 mt-2">{data[1]}</p>
      </motion.div>
    ))}

  </div>
</motion.section>

      {/* PROJECTS */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl mb-10 font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* JFW */}
          <motion.div 
            variants={item} 
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold">Jewish Future Works</h3>
              <p className="text-gray-400 mt-2">
                Built a serverless donation platform with Stripe payment automation and
                real-time Microsoft CRM integration using AWS Lambda, API Gateway, and DynamoDB.

                <ul className="mt-4 text-gray-300 list-disc ml-6 space-y-2">
                  <li>
                    Owned end-to-end delivery across frontend, backend, DevOps, CI/CD automation, and production deployments as the sole engineer on the project.
                  </li>
                  <li>
                    Architected and implemented a scalable serverless donation platform using AWS Lambda, API Gateway, and DynamoDB, with Stripe webhook integration for automated one-time and recurring payments.
                  </li>
                  <li>
                    Developed a dynamic certificate generation system and integrated real-time synchronization with Microsoft CRM, significantly reducing manual data entry and ensuring accurate donor records.
                  </li>
                  <li>
                    Designed and deployed a scheduled video broadcasting system using WebSockets and AWS EventBridge, enabling time-triggered media delivery at scale.
                  </li>
                  <li>
                    Led the migration from a Laravel monolith to a modular Node.js microservices architecture, improving system performance, scalability, and maintainability.
                  </li>
                  <li>
                    Established Docker-based CI/CD pipelines with staging environments, contributed to the Next.js frontend, and independently deployed a WordPress application on AWS EC2.
                  </li>
                  <li>
                    Managed Laravel queue workers and scheduled Artisan commands to handle asynchronous processing for notifications, donation workflows, and background jobs.
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">Tech PHP · Next.js · Node.js · AWS Lambda · DynamoDB · Stripe · Docker · EventBridge · Microsoft CRM</p>
              </p>
            </div>
          </motion.div>

          {/* Giftcast */}
          <motion.div 
            variants={item} 
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold">Giftcast</h3>
              <p className="text-gray-400 mt-2">
                Developed backend for a video gifting platform with secure S3 media uploads,
                Stripe 3DS payments, Firebase notifications, and scheduled workflows.
              </p>

              <ul className="mt-4 text-gray-300 list-disc ml-6 space-y-2">
                <li>
                  Designed and developed backend APIs for a mobile gifting platform, enabling personalized video messages and monetary eGift card delivery.
                </li>
                <li>
                  Implemented Stripe with 3D Secure authentication for secure payment processing; integrated recurring billing and cron-based gift transfer scheduling using Laravel Queues and Task Scheduling.
                </li>
                <li>
                  Built secure video upload APIs backed by Amazon S3 with server-side encryption; developed media features including music overlays and video filters.
                </li>
                <li>
                  Integrated the Tango API for eGift card creation and redemption; implemented social logins (Facebook, Apple, Google) and Trello-based messaging to enhance user experience.
                </li>
                <li>
                  Wrote PHPUnit integration tests for payment workflows and API endpoints, ensuring reliability and stability across releases.
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Tech:Laravel · MySQL · Firebase · Stripe · Amazon S3 · Tango · Git
              </p>
            </div>
          </motion.div>

          {/* Loan Platform */}
          <motion.div 
            variants={item} 
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md md:col-span-2 overflow-hidden relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold">
                Loan Processing Platform (Fintech)
              </h3>

              <p className="text-gray-400 mt-2">
                Built a gamified loan processing system with business-logic-driven approvals,
                role-based dashboards, and detailed financial reporting.
              </p>

              <ul className="mt-4 text-gray-300 list-disc ml-6 space-y-2">
                <li>Designed backend APIs for EMI calculation and loan lifecycle workflows</li>
                <li>Handled high-frequency scheduled background jobs for processing</li>
                <li>Integrated multiple payment gateways (Amazon Pay, Razorpay, PayU, CCAvenue)</li>
                <li>Built APIs for beneficiary creation and payout validation</li>
                <li>Implemented ZoopOne KYC verification system</li>
                <li>Developed admin dashboard using Angular + Bootstrap</li>
                <li>Enabled real-time updates using Firebase push notifications</li>
              </ul>

              <p className="text-sm text-gray-500 mt-4">
                Tech: PHP (CodeIgniter), MySQL, Angular, Firebase, ZoopOne, Razorpay, PayU, CCAvenue
              </p>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* SPECIAL PROJECTS */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl mb-2 font-semibold">Special Projects</h2>
              <p className="text-gray-400 max-w-2xl">
                High-impact systems work delivered across real-time streaming, donation automation, and secure server migration using modern cloud and backend tools.
              </p>
            </div>
            <span className="text-sm text-gray-400">WebSockets · Node.js · AWS Lambda · EventBridge · SQS · EC2 · Stripe · Laravel</span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "WebSocket Broadcast Platform",
                icon: <FaNetworkWired />,
                bullets: [
                  "Built a WebSocket-based multi-broadcast system in Node.js for scheduled advertising video playback.",
                  "Used AWS Lambda, EventBridge, and SQS to orchestrate timed playback requests and deliver live video updates across clients.",
                  "Delivered reliable, low-latency streaming control with centralized schedule management and automated retry handling."
                ]
              },
              {
                title: "Donation Certificate Automation",
                icon: <FaAward />,
                bullets: [
                  "Created a donation workflow in Laravel and Node.js that generates certificate PDFs on demand.",
                  "Automated Stripe payment confirmation, PDF generation, and email delivery in a single server workflow.",
                  "Built secure documentation automation with user-triggered certificates and transactional delivery logic."
                ]
              },
              {
                title: "Secure Server Migration",
                icon: <FaShieldAlt />,
                bullets: [
                  "Resolved a server compromise and migrated traffic to a hardened AWS EC2 host.",
                  "Maintained service continuity with zero downtime during the transition.",
                  "Implemented stronger security controls, server hardening, and resilient deployment tooling."
                ]
              }
            ].map((project) => (
              <motion.div
                key={project.title}
                variants={item}
                whileHover="hover"
                animate="show"
                className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md"
                // variants={floatHover}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300 text-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <ul className="list-disc list-inside space-y-3 text-gray-300 text-sm">
                  {project.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SYSTEM DESIGN DIAGRAMS */}
      <SystemDesign />
      {/* WHAT I'M WORKING ON */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">What I’m Working On Now</h2>
              <p className="text-gray-400 max-w-2xl">
                Current focus covers building AI agents, RAG-driven knowledge systems, serverless architecture, and server operations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Agents",
                description: "Building intelligent AI agents that automate workflows, make decisions, and enhance business value.",
              },
              {
                title: "RAG Flows",
                description: "Designing retrieval-augmented generation systems for fast, accurate knowledge access and response generation.",
              },
              {
                title: "Serverless Architecture",
                description: "Working on scalable serverless platforms, event-driven services, and cloud-native architecture patterns.",
              },
              {
                title: "Server Management",
                description: "Upgrading and managing servers to ensure reliability, performance, and secure operations.",
              },
            ].map((work, index) => (
              <motion.div
                key={work.title}
                variants={item}
                className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold mb-3">{work.title}</h3>
                <p className="text-gray-300 leading-relaxed">{work.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CERTIFICATES & ACHIEVEMENTS */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold">Certificates & Achievements</h2>
            <p className="text-gray-400 mt-3 max-w-2xl">
              Proof of achievements and certifications from real projects and engineering work.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "/1597629282563.jpeg",
              "/1730886129239.jpeg",
              "/1749040840094.jpeg",
              "/1770806979694.jpeg",
            ].map((src) => (
              <motion.div
                key={src}
                variants={item}
                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-lg shadow-black/20 hover:scale-105 hover:border-violet-400 hover:shadow-violet-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={src}
                    alt="Certificate"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Let’s build something real</p>
              <h2 className="text-3xl font-semibold mt-3">Ready to collaborate?</h2>
              <p className="text-gray-400 mt-2 max-w-2xl">Reach out for freelance work, long-term contracts, or senior engineering roles.</p>
            </div>
            <div className="space-y-3">
              <a href="mailto:mishrasudhanshu398@gmail.com" className="block rounded-3xl bg-violet-500 px-6 py-3 text-center text-white font-semibold hover:bg-violet-400 transition">Email Me</a>
              <a href="tel:+919014001477" className="block rounded-3xl bg-white/5 px-6 py-3 text-center text-gray-200 border border-white/10 hover:bg-white/10 transition">+91 90140 01477</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-sm text-gray-500 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <span>© 2026 Sudhanshu Mishra. All rights reserved.</span>
            <span>Built with Next.js, Tailwind CSS, and Framer Motion.</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}