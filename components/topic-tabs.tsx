"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface TopicTab {
  id: string
  label: string
  icon: LucideIcon
  colorClass: string
}

interface TopicTabsProps {
  tabs: TopicTab[]
  activeTab: string
  onChange: (value: string) => void
}

export function TopicTabs({ tabs, activeTab, onChange }: TopicTabsProps) {
  return (
    <div className="w-full overflow-auto">
      <Tabs value={activeTab} onValueChange={onChange} className="w-full">
        <TabsList className="h-auto p-1 flex flex-nowrap overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  "flex items-center gap-2 py-3 px-4 whitespace-nowrap",
                  activeTab === tab.id ? `bg-${tab.colorClass}/20 text-${tab.colorClass}` : "",
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </TabsTrigger>
            )
          })}
        </TabsList>
      </Tabs>
    </div>
  )
}
