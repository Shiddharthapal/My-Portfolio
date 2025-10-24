"use client";

import type React from "react";

import {
  Code2,
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
} from "lucide-react";

interface SkillCardProps {
  skill: {
    name: string;
    icon: string;
    category: string;
  };
}

const ICON_MAP: Record<string, React.ReactNode> = {
  code: <Code2 className="w-8 h-8 text-purple-400" />,
  layers: <Layers className="w-8 h-8 text-purple-400" />,
  file: <FileText className="w-8 h-8 text-purple-4000" />,
  zap: <Zap className="w-8 h-8 text-purple-400" />,
  users: <Users className="w-8 h-8 text-purple-400" />,
  squareterminal: <SquareTerminal className="w-8 h-8 text-purple-400" />,
  fileterminal: <FileTerminal className="w-8 h-8 text-purple-400" />,
  paintbrush: <Paintbrush className="w-8 h-8 text-purple-400" />,
  workflow: <Workflow className="w-8 h-8 text-purple-400" />,
  bot: <Bot className="w-8 h-8 text-purple-400" />,
  box: <Box className="w-8 h-8 text-purple-400" />,
  lock: <Lock className="w-8 h-8 text-purple-400" />,
  gitmerge: <GitMerge className="w-8 h-8 text-purple-400" />,
  cloud: <Cloud className="w-8 h-8 text-purple-400" />,
  setting: <Settings className="w-8 h-8 text-purple-400" />,
};

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center min-h-32">
      <div className="mb-3">{ICON_MAP[skill.icon] || ICON_MAP.code}</div>
      <h3 className="text-gray-900 font-semibold text-sm">{skill.name}</h3>
    </div>
  );
}
