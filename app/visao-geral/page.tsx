import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, FileText, Info, Layers } from "lucide-react"

export default function VisaoGeralPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 py-6">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-topic1 via-topic3 to-topic6 bg-clip-text text-transparent">
          Visão Geral do Projeto
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Informações detalhadas sobre o projeto de requisitos de software.
        </p>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2>Introdução</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris
          iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
        </p>

        <h2>Objetivos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Nullam in dui mauris</li>
          <li>Vivamus hendrerit arcu</li>
          <li>Sed erat molestie vehicula</li>
        </ul>

        <h2>Escopo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
        </p>

        <div className="grid gap-4 mt-4 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Incluso no Escopo:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Nullam in dui mauris</li>
              <li>Vivamus hendrerit arcu</li>
              <li>Sed erat molestie vehicula</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Fora do Escopo:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ut in nulla enim</li>
              <li>Phasellus molestie magna</li>
              <li>Suspendisse dictum feugiat</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="topic-card overflow-hidden border-topic1/20 hover:border-topic1">
          <CardHeader className="bg-topic1/10 pb-4">
            <Info className="h-8 w-8 text-topic1" />
            <CardTitle>Nicho 1</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full text-topic1 hover:bg-topic1/10">
              <Link href="/sobre">
                Ver Detalhes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="topic-card overflow-hidden border-topic3/20 hover:border-topic3">
          <CardHeader className="bg-topic3/10 pb-4">
            <Layers className="h-8 w-8 text-topic3" />
            <CardTitle>Nicho 2</CardTitle>
            <CardDescription>Consectetur adipiscing elit</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full text-topic3 hover:bg-topic3/10">
              <Link href="/sobre">
                Ver Detalhes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="topic-card overflow-hidden border-topic6/20 hover:border-topic6">
          <CardHeader className="bg-topic6/10 pb-4">
            <FileText className="h-8 w-8 text-topic6" />
            <CardTitle>Nicho 3</CardTitle>
            <CardDescription>Nullam in dui mauris</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full text-topic6 hover:bg-topic6/10">
              <Link href="/sobre">
                Ver Detalhes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
