import { Users, Vote, Layout } from "lucide-react";

export const landingContent = {
  hero: {
    headline: "Run Better Sprint Retrospectives",
    subheadline:
      "Create collaborative, real-time retrospective boards for your agile team. No signup required.",
    primaryCTA: "Start Free Retro",
    secondaryCTA: "See How It Works",
  },
  features: [
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Team members can add cards and vote simultaneously.",
      color: "retro-neutral",
    },
    {
      icon: Vote,
      title: "Anonymous Voting",
      description: "Focus on ideas, not people. Keep feedback unbiased.",
      color: "retro-positive",
    },
    {
      icon: Layout,
      title: "Multiple Templates",
      description:
        "Start/Stop/Continue, Mad/Sad/Glad, and 4 L's included.",
      color: "retro-negative",
    },
  ],
  howItWorks: [
    {
      number: 1,
      title: "Choose Template",
      description: "Pick Start/Stop/Continue, Mad/Sad/Glad, or 4 L's.",
    },
    {
      number: 2,
      title: "Share Link",
      description: "Invite your team to collaborate in real time.",
    },
    {
      number: 3,
      title: "Run Retro",
      description: "Add cards, group ideas, and vote on what matters.",
    },
  ],
  cta: {
    badge: "No signup required • Free forever",
    title: "Ready to improve your retrospectives?",
    subtitle: "Create a board in seconds and get your team talking.",
    button: "Start Free Retro",
  },
} as const;

export type LandingContent = typeof landingContent;


