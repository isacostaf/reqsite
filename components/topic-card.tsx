import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface TopicCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  colorClass: string
  children: React.ReactNode
}

export function TopicCard({ title, description, icon: Icon, href, colorClass, children }: TopicCardProps) {
  return (
    <Card className={`topic-card overflow-hidden border-${colorClass}/20 hover:border-${colorClass}`}>
      <CardHeader className={`bg-${colorClass}/10 pb-4`}>
        <Icon className={`h-8 w-8 text-${colorClass}`} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className={`w-full text-${colorClass} hover:bg-${colorClass}/10`}>
          <Link href={href}>
            Ver mais
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
