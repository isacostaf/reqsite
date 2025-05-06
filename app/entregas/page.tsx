import { FileText, FileCheck, FileSearch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Info, Layers, BookOpen, FileSpreadsheet } from "lucide-react"

export default function Entrega1Page() {
  return (
    <div className="mt-5 space-y-8">
      <div className="text-center space-y-0 py-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-topic1 to-topic2 bg-clip-text text-transparent">
          Entregas
        </h1>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert text-center">
        <p className="mt-0 mb-0">
          Vídeos referentes as entregas de cada unidade
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="topic-card overflow-hidden border-topic1/20 hover:border-topic1">
          <CardHeader className="bg-topic1/10 pb-4">
            <FileText className="h-8 w-8 text-topic1 mb-2" />
            <CardTitle>Entrega 1</CardTitle>
            <CardDescription>01/01/2001</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full text-topic1 hover:bg-topic1/10">
              <Link href="/entregas/entrega-1">
                Acessar Entrega 1
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="topic-card overflow-hidden border-topic2/20 hover:border-topic2">
          <CardHeader className="bg-topic2/10 pb-4">
            <FileText className="h-8 w-8 text-topic2 mb-2" />
            <CardTitle>Entrega 2</CardTitle>
            <CardDescription>01/01/2001</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full text-topic2 hover:bg-topic2/10">
              <Link href="/entregas/entrega-2">
                Acessar Entrega 2
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="topic-card overflow-hidden border-topic3/20 hover:border-topic3">
          <CardHeader className="bg-topic3/10 pb-4">
            <FileText className="h-8 w-8 text-topic3 mb-2" />
            <CardTitle>Entrega 3</CardTitle>
            <CardDescription>01/01/2001</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full text-topic3 hover:bg-topic3/10">
              <Link href="/entregas/entrega-3">
                Acessar Entrega 3
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="topic-card overflow-hidden border-topic4/20 hover:border-topic4">
          <CardHeader className="bg-topic4/10 pb-4">
            <FileText className="h-8 w-8 text-topic4 mb-2" />
            <CardTitle>Entrega 4</CardTitle>
            <CardDescription>01/01/2001</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full text-topic4 hover:bg-topic4/10">
              <Link href="/entregas/entrega-4">
                Acessar Entrega 4
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="topic-card overflow-hidden border-topic5/20 hover:border-topic5">
          <CardHeader className="bg-topic5/10 pb-4">
            <FileText className="h-8 w-8 text-topic5 mb-2" />
            <CardTitle>Entrega 5</CardTitle>
            <CardDescription>01/01/2001</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full text-topic5 hover:bg-topic5/10">
              <Link href="/entregas/entrega-5">
                Acessar Entrega 5
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="topic-card overflow-hidden border-topic6/20 hover:border-topic6">
          <CardHeader className="bg-topic6/10 pb-4">
            <FileText className="h-8 w-8 text-topic6 mb-2" />
            <CardTitle>Entrega 6</CardTitle>
            <CardDescription>01/01/2001</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full text-topic6 hover:bg-topic6/10">
              <Link href="/entregas/entrega-6">
                Acessar Entrega 6
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

    </div>
  )
}
