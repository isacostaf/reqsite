import { FileText, FileCheck, FileSearch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Info, Layers, BookOpen, FileSpreadsheet } from "lucide-react"

export default function Entrega5Page() {
  return (
    <div className="mt-5 space-y-8">
      <div className="text-center space-y-0 py-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-topic1 to-topic2 bg-clip-text text-transparent">
          Entrega Unidade 5
        </h1>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert text-center">
        <p className="mt-0 mb-0">
          Apresentação gravada referente ao trabalho feito durante a Unidade 5
        </p>
      </div>

      <div className="flex justify-center">
         <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
         ></iframe>
      </div>
    </div>
  )
}
