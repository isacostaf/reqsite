import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, PenToolIcon as Tool } from "lucide-react"

export default function MetodologiaPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 py-6">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-topic4 via-topic5 to-topic6 bg-clip-text text-transparent">
          Metodologia
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Abordagens e métodos aplicados no projeto de requisitos de software.
        </p>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2>Abordagem Geral</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris
          iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
        </p>

        <div className="grid gap-6 mt-6">
          <div className="rounded-lg bg-topic4/10 p-4 border border-topic4/20">
            <h3 className="font-semibold mb-2 text-topic4">Lorem Ipsum:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Nullam in dui mauris</li>
              <li>Vivamus hendrerit arcu</li>
            </ul>
          </div>
          <div className="rounded-lg bg-topic4/10 p-4 border border-topic4/20">
            <h3 className="font-semibold mb-2 text-topic4">Dolor Sit Amet:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Nullam in dui mauris</li>
              <li>Vivamus hendrerit arcu</li>
            </ul>
          </div>
        </div>

        <h2>Técnicas de Elicitação</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor.
        </p>

        <h2>Modelagem de Requisitos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card className="border-topic4/20">
          <CardHeader className="bg-topic4/10 pb-4">
            <Settings className="h-8 w-8 text-topic4" />
            <CardTitle>Processos</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Nullam in dui mauris</li>
              <li>Vivamus hendrerit arcu</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-topic5/20">
          <CardHeader className="bg-topic5/10 pb-4">
            <Tool className="h-8 w-8 text-topic5" />
            <CardTitle>Ferramentas</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Nullam in dui mauris</li>
              <li>Vivamus hendrerit arcu</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
