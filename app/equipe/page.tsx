import { Card, CardContent } from "@/components/ui/card"

export default function EquipePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 py-6">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-topic5 to-topic6 bg-clip-text text-transparent">
          Equipe do Projeto
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">Membros e responsabilidades da equipe do projeto.</p>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2>Membros da Equipe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-4 border-topic6/30">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-12 w-12 rounded-full bg-topic6/20 flex items-center justify-center text-topic6 font-bold">
              L1
            </div>
            <div>
              <h3 className="font-semibold text-topic6">Lorem Ipsum</h3>
              <p className="text-sm text-muted-foreground">Dolor Sit</p>
            </div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula.
          </p>
        </div>

        <div className="rounded-lg border p-4 border-topic6/30">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-12 w-12 rounded-full bg-topic6/20 flex items-center justify-center text-topic6 font-bold">
              D2
            </div>
            <div>
              <h3 className="font-semibold text-topic6">Dolor Sit</h3>
              <p className="text-sm text-muted-foreground">Amet Consectetur</p>
            </div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula.
          </p>
        </div>

        <div className="rounded-lg border p-4 border-topic6/30">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-12 w-12 rounded-full bg-topic6/20 flex items-center justify-center text-topic6 font-bold">
              A3
            </div>
            <div>
              <h3 className="font-semibold text-topic6">Amet Consectetur</h3>
              <p className="text-sm text-muted-foreground">Adipiscing Elit</p>
            </div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula.
          </p>
        </div>

        <div className="rounded-lg border p-4 border-topic6/30">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-12 w-12 rounded-full bg-topic6/20 flex items-center justify-center text-topic6 font-bold">
              A4
            </div>
            <div>
              <h3 className="font-semibold text-topic6">Adipiscing Elit</h3>
              <p className="text-sm text-muted-foreground">Nullam Dui</p>
            </div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula.
          </p>
        </div>

        <div className="rounded-lg border p-4 border-topic6/30">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-12 w-12 rounded-full bg-topic6/20 flex items-center justify-center text-topic6 font-bold">
              N5
            </div>
            <div>
              <h3 className="font-semibold text-topic6">Nullam Dui</h3>
              <p className="text-sm text-muted-foreground">Mauris Vivamus</p>
            </div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula.
          </p>
        </div>
      </div>

      <Card className="border-topic6/20">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4">Papéis e Responsabilidades</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula.
          </p>

          <div className="space-y-4 mt-4">
            <div className="rounded-lg border p-4 border-topic6/30">
              <h3 className="font-semibold text-topic6">Lorem Ipsum</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Nullam in dui mauris</li>
                <li>Vivamus hendrerit arcu</li>
                <li>Sed erat molestie vehicula</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4 border-topic6/30">
              <h3 className="font-semibold text-topic6">Dolor Sit</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Nullam in dui mauris</li>
                <li>Vivamus hendrerit arcu</li>
                <li>Sed erat molestie vehicula</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4 border-topic6/30">
              <h3 className="font-semibold text-topic6">Amet Consectetur</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Nullam in dui mauris</li>
                <li>Vivamus hendrerit arcu</li>
                <li>Sed erat molestie vehicula</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
