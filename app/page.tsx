import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, FileText, Info, Layers, BookOpen, FileCheck, FileSpreadsheet } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-12 py-8">
      <section className="space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-topic1 via-topic3 to-topic6 bg-clip-text text-transparent">
            Projeto de Requisitos de Software
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Documentação completa e organizada para facilitar a avaliação e compreensão do projeto.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-topic2 hover:bg-topic2/90">
            <Link href="/sobre">
              Informações Projeto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-topic3 text-topic3 hover:bg-topic3/10">
            <Link href="/entregas/entrega-1">
              Ver Entregas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

  {/* Ajuste para cada quadrado ocupar a largura quase total da página e ficar um abaixo do outro */}
  <div className="space-y-6">
        <Card className="topic-card w-full overflow-hidden border-topic1/20 hover:border-topic1">
          <CardHeader className="bg-topic1/10 pb-4">
            <BookOpen className="h-8 w-8 text-topic1" />
            <CardTitle>1. A disciplina de Requisitos de Software</CardTitle>
            <CardDescription>Este projeto foi realizado por alunos da Universidade de Brasília durante a disciplina de Requisitos, orientada pelo Professor George Marsciano Correa.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 text-muted-foreground">
            <p>A disciplina dá ensino aos estudantes na comunicação desenvolvedores e stakeholders, além da gerência dos requisitos de um sistema, que são os pontos de partida para entender e formalizar o que o software deve realizar. Essa etapa é essencial, já que muitos problemas em projetos de software surgem justamente por falhas ou lacunas nos requisitos. Assim, a disciplina visa estabelecer uma compreensão clara e um compromisso entre todos os envolvidos no projeto, o que facilita o alinhamento de expectativas e o desenvolvimento de soluções eficazes.</p>
            <p>O conteúdo inclui técnicas para elicitação, modelagem, documentação, e gerenciamento de requisitos, além de aspectos humanos e sociais que impactam essa área. São abordadas ferramentas e métodos para verificação e validação de requisitos, bem como frameworks adaptativos e tradicionais para o processo de engenharia.</p>
          </CardContent>
        </Card>

        <Card className="topic-card w-full overflow-hidden border-topic2/20 hover:border-topic2">
          <CardHeader className="bg-topic2/10 pb-4">
            <Layers className="h-8 w-8 text-topic2" />
            <CardTitle>2. O Projeto DeltaCore</CardTitle>
            <CardDescription>O projeto DeltaCore visa solucionar os desafios enfrentados por duas franquias de studios fitness, o Vidya Yoga e o Race Bootcamp, ambas pertencentes ao grupo Smart Fit.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 text-muted-foreground">
            <p>O projeto DeltaCore visa solucionar os desafios enfrentados por duas franquias de studios fitness, o Vidya Yoga e o Race Bootcamp, ambas pertencentes ao grupo Smart Fit. As franquias enfrentam dificuldades relacionadas à instabilidade do sistema atual de gestão, ausência de ferramentas de análise e comunicação ineficiente com os alunos.</p>
            <p>Com isso, propõe-se funcionalidades que automatizem a comunicação com os alunos e permitam análises detalhadas do comportamento dos usuários e do funcionamento dos studios.</p>
          </CardContent>
        </Card>

        <Card className="topic-card w-full overflow-hidden border-topic3/20 hover:border-topic3">
          <CardHeader className="bg-topic3/10 pb-4">
            <FileText className="h-8 w-8 text-topic3" />
            <CardTitle>3. Os Contribuidores</CardTitle>
            <CardDescription>A equipe de desenvolvedores do projeto FranquiAcademia Race e Vydia é composta por 6 membros do curso de Engenharia de Software da Universidade de Brasília.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 text-muted-foreground">
            <ul className="list-disc pl-5 space-y-2">
              <li>Luis Eduardo Lima - Gerente do Projeto</li>
              <li>Cibelly Lourenço - Desenvolvedora FrontEnd</li>
              <li>Eduardo Silva - Desenvolvedor BackEnd</li>
              <li>Filipe Bressaneli - Analista de QA</li>
              <li>Henrique Carvalho - Desenvolvedor BackEnd</li>
              <li>Isabelle da Costa - Desenvolvedora FrontEnd</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="topic-card w-full overflow-hidden border-topic4/20 hover:border-topic4">
          <CardHeader className="bg-topic4/10 pb-4">
            <Info className="h-8 w-8 text-topic4" />
            <CardTitle>Histórico de Versão</CardTitle>
            <CardDescription>Versões e mudanças feitas no documento.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 text-muted-foreground">
            <p>Versão 1.0 - Criação do Documento - 21/04/2025 - Autor: Luis Eduardo Lima</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
