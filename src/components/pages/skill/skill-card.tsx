"use client";

import type React from "react";

import {
  Code,
  Layers,
  FileText,
  Zap,
  Users,
  Cloud,
  SquareTerminal,
  FileTerminal,
  Paintbrush,
  Workflow,
  Bot,
  Box,
  Lock,
  GitMerge,
  Settings,
  Rocket,
  Infinity,
  Webhook,
} from "lucide-react";

interface SkillCardProps {
  skill: {
    name: string;
    icon: string;
    category: string;
  };
}

const ICON_MAP: Record<string, React.ReactNode> = {
  code: <Code className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  layers: <Layers className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  file: <FileText className="w-8 h-8 text-[hsl(251,85%,75%)]0" />,
  zap: <Zap className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  users: <Users className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  squareterminal: (
    <SquareTerminal className="w-8 h-8 text-[hsl(251,85%,75%)]" />
  ),
  fileterminal: <FileTerminal className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  paintbrush: <Paintbrush className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  workflow: <Workflow className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  bot: <Bot className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  box: <Box className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  lock: <Lock className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  gitmerge: <GitMerge className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  cloud: <Cloud className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  setting: <Settings className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  rocket: <Rocket className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  infinity: <Infinity className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
  webhook: <Webhook className="w-8 h-8 text-[hsl(251,85%,75%)]" />,
};

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div
      className="bg-white dark:bg-[hsl(262,31%,12%)] dark:border dark:border-[hsl(255,64%,23%)]
       rounded-lg p-6 shadow-sm hover:shadow-lg dark:hover:shadow-md hover:shadow-[hsl(254,49%,86%)] dark:hover:shadow-[hsl(253,27%,39%)]
        transition-shadow 
    flex flex-col items-center justify-center text-center min-h-32"
    >
      <div className="mb-3">{ICON_MAP[skill.icon] || ICON_MAP.code}</div>
      <h3 className="text-gray-900 dark:text-[hsl(0,0%,96%)] font-semibold text-sm">
        {skill.name}
      </h3>
    </div>
  );
}
