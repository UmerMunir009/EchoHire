// import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
// import { z } from "zod";



// export const interviewer: CreateAssistantDTO = {
//   name: "Interviewer",
//   firstMessage:
//     "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
//   transcriber: {
//     provider: "deepgram",
//     model: "nova-2",
//     language: "en",
//   },
//   voice: {
//     provider: "11labs",
//     voiceId: "sarah",
//     stability: 0.4,
//     similarityBoost: 0.8,
//     speed: 0.9,
//     style: 0.5,
//     useSpeakerBoost: true,
//   },
//   model: {
//     provider: "openai",
//     model: "gpt-4",
//     messages: [
//       {
//         role: "system",
//         content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

// Interview Guidelines:
// Follow the structured question flow:
// {{questions}}

// Engage naturally & react appropriately:
// Listen actively to responses and acknowledge them before moving forward.
// Ask brief follow-up questions if a response is vague or requires more detail.
// Keep the conversation flowing smoothly while maintaining control.
// Be professional, yet warm and welcoming:

// Use official yet friendly language.
// Keep responses concise and to the point (like in a real voice interview).
// Avoid robotic phrasing—sound natural and conversational.
// Answer the candidate’s questions professionally:

// If asked about the role, company, or expectations, provide a clear and relevant answer.
// If unsure, redirect the candidate to HR for more details.

// Conclude the interview properly:
// Thank the candidate for their time.
// Inform them that the company will reach out soon with feedback.
// End the conversation on a polite and positive note.


// - Be sure to be professional and polite.
// - Keep all your responses short and simple. Use official language, but be kind and welcoming.
// - This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
//       },
//     ],
//   },
// };

// export const feedbackSchema = z.object({
//   totalScore: z.number(),
//   categoryScores: z.tuple([
//     z.object({
//       name: z.literal("Communication Skills"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Technical Knowledge"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Problem Solving"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Cultural Fit"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Confidence and Clarity"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//   ]),
//   strengths: z.array(z.string()),
//   areasForImprovement: z.array(z.string()),
//   finalAssessment: z.string(),
// });

export const interviewCovers = [
  "/covers/adobe.png",
  "/covers/amazon.png",
  "/covers/facebook.png",
  "/covers/hostinger.png",
  "/covers/pinterest.png",
  "/covers/quora.png",
  "/covers/reddit.png",
  "/covers/skype.png",
  "/covers/spotify.png",
  "/covers/telegram.png",
  "/covers/tiktok.png",
  "/covers/yahoo.png",
];

export const dummyInterviews = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["GitHub", "Typescript", "Node"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
  {
    id: "3",
    userId: "user2",
    role: "Backend Developer",
    type: "Technical",
    techstack: ["Java", "Spring Boot", "MySQL"],
    level: "Mid",
    questions: ["Explain Dependency Injection in Spring Boot."],
    finalized: true,
    createdAt: "2024-03-13T09:45:00Z",
  },
  {
    id: "4",
    userId: "user3",
    role: "Data Scientist",
    type: "HR + Technical",
    techstack: ["Python", "TensorFlow", "Pandas"],
    level: "Senior",
    questions: ["What is overfitting in Machine Learning?"],
    finalized: false,
    createdAt: "2024-03-12T11:20:00Z",
  },
  {
    id: "5",
    userId: "user4",
    role: "DevOps Engineer",
    type: "Technical",
    techstack: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    level: "Mid",
    questions: ["How do you set up a CI/CD pipeline?"],
    finalized: true,
    createdAt: "2024-03-11T13:00:00Z",
  },
  {
    id: "6",
    userId: "user2",
    role: "Mobile Developer",
    type: "Technical",
    techstack: ["React Native", "Redux", "Firebase"],
    level: "Junior",
    questions: ["What is the difference between React and React Native?"],
    finalized: false,
    createdAt: "2024-03-10T08:15:00Z",
  },
  {
    id: "7",
    userId: "user5",
    role: "Machine Learning Engineer",
    type: "Technical",
    techstack: ["Python", "Scikit-learn", "PyTorch"],
    level: "Senior",
    questions: ["Explain Gradient Descent."],
    finalized: false,
    createdAt: "2024-03-09T14:40:00Z",
  },
  {
    id: "8",
    userId: "user6",
    role: "UI/UX Designer",
    type: "HR + Portfolio Review",
    techstack: ["Figma", "Sketch", "Adobe XD"],
    level: "Mid",
    questions: ["How do you approach user research?"],
    finalized: true,
    createdAt: "2024-03-08T16:50:00Z",
  },
  {
    id: "9",
    userId: "user7",
    role: "Cybersecurity Analyst",
    type: "Technical",
    techstack: ["Wireshark", "Kali Linux", "Burp Suite"],
    level: "Senior",
    questions: ["What is the difference between Symmetric and Asymmetric encryption?"],
    finalized: false,
    createdAt: "2024-03-07T19:25:00Z",
  },
  {
    id: "10",
    userId: "user8",
    role: "Cloud Architect",
    type: "Mixed",
    techstack: ["Azure", "AWS", "GCP"],
    level: "Senior",
    questions: ["How would you design a multi-cloud strategy?"],
    finalized: true,
    createdAt: "2024-03-06T12:10:00Z",
  },
];
