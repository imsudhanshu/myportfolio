#!/usr/bin/env node

const b = "\x1b[1m"; // bold
const r = "\x1b[0m"; // reset
const green = "\x1b[32m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const cyan = "\x1b[36m";
const yellow = "\x1b[33m";

process.stdout.write(`
${green}${b}Sudhanshu Mishra${r}  ${magenta}//${r}  ${cyan}Sr. Software Engineer${r}

${b}Specializing in scalable backend systems, serverless architectures, and cloud-native applications.${r}
Passionate about zero-downtime migrations, secure automation, and optimizing critical data workflows.

${blue}💼 Experience:${r}
   - Sr. Software Engineer @ ${yellow}Mindfire Solutions${r}
   - Backend Developer @ ${yellow}Capital Now${r}

${blue}🚀 Backend Skills:${r}
   Node.js, PHP, Laravel, TypeScript, REST & GraphQL APIs, WebSockets
   
${blue}🛠️ Cloud & DevOps:${r}
   AWS (Lambda, SQS, EC2, EventBridge), DynamoDB, MySQL, Docker, CI/CD pipelines, System Hardening

${blue}💻 Selected Projects:${r}
   - ${green}WebSocket Broadcast Platform${r} 
     (Node.js, Serverless) - Built a multi-broadcast timed video playback system.
   - ${green}Donation Automation Engine${r} 
     (Laravel, Node.js, Stripe) - End-to-end transactional payment & dynamic PDF pipeline.
   - ${green}High-Stakes Server Migration${r}
     (AWS, SecOps) - Orchestrated zero-downtime server migration & infrastructure hardening.

${blue}🌐 Network:${r}
   Email:     ${green}mishrasudhanshu398@gmail.com${r}
   GitHub:    ${cyan}https://github.com/imsudhanshu${r}
   LinkedIn:  ${cyan}https://linkedin.com/in/imsudhanshu${r}
   Portfolio: ${cyan}https://sudhanshu-portfolio.vercel.app${r}

${magenta}> Type \`npx imsudhanshu\` anywhere to see this again! <${r}

`);
