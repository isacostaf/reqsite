"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TopicTabs } from "@/components/topic-tabs"
import { BookOpen, Target, Clock, Settings, PenToolIcon as Tool, Users } from "lucide-react"

export default function SobrePage() {
  const [activeTab, setActiveTab] = useState("nicho1")

  const topicTabs = [
    { id: "nicho1", label: "Cenário Atual do Cliente e do Negócio", icon: BookOpen, colorClass: "topic1" },
    { id: "nicho2", label: "Solução Proposta", icon: Target, colorClass: "topic2" },
    { id: "nicho3", label: "Estratégias de Engenharia de Software", icon: Clock, colorClass: "topic3" },
    { id: "nicho4", label: "Cronograma e Entregas", icon: Settings, colorClass: "topic4" },
    { id: "nicho5", label: "Interação entre Equipe e Cliente", icon: Tool, colorClass: "topic5" },
    { id: "nicho6", label: "Lições Aprendidas", icon: Users, colorClass: "topic6" },
  ]

  const topicContent = {
    nicho1: {
      title: "Cenário Atual do Cliente e do Negócio",
      description: "",
      colorClass: "topic1",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold topic1">Introdução ao Negócio e Contexto</h3>
          <p>
            Um dos segmentos que mais crescem é o meio fitness. Com o aumento do uso das redes sociais, esse segmento tem ganhado cada vez mais força, em especial o setor voltado ao bem-estar. Tendo isso em mente, nosso cliente é dono de duas franquias de studios fitness: Vidya Yoga e Race Bootcamp, ambas pertencentes ao grupo Smart Fit.
          </p>
          <p>
            Vidya Yoga é um studio fitness que combina as práticas de yoga com uma sala aquecida a 40°C e iluminação que varia de acordo com os momentos e posições, utilizando paletas de cores quentes. Essa prática é conhecida como hot yoga. Sua principal missão é trazer tranquilidade à mente e ao corpo, alinhando ambos. Possui unidades em todas as regiões do Brasil, com foco em grandes capitais e áreas de alto poder aquisitivo. Seu público-alvo principal são mulheres jovens, de 20 a 40 anos, que se preocupam com sua saúde física e mental.
          </p>
          <p>
            Race Bootcamp é um studio com equipamentos de academia, focado em esteiras e pesos livres. O controle da temperatura da sala e a iluminação são usados para incentivar os participantes a atingirem seu limite físico. É um ambiente controlado, onde os interessados podem usufruir dos equipamentos e orientação de professores, com o objetivo de descobrir e superar seus limites. Tem como principal propósito fornecer um ambiente ideal para que atletas amadores possam redefinir seus conceitos de limite físico. Assim como o Vidya Yoga, o Race Bootcamp está presente em todas as regiões do Brasil, com foco em grandes capitais e regiões de alto poder aquisitivo. Seu público-alvo são homens e mulheres jovens, de 25 a 40 anos, praticantes de corrida e atletas amadores interessados em conhecer seus próprios limites.
          </p>
          <p>
            Ambas as franquias funcionam no sistema pay per use, sendo necessário comprar créditos pelos sites de cada studio fitness. Cada crédito equivale a uma determinada quantidade de aulas. Como ambos os studios possuem conceitos diferenciados dos studios fitness tradicionais, oferecem uma quantidade significativa de aulas experimentais, que podem ser agendadas pelo site, seguindo o mesmo processo da compra de créditos.
          </p>

          <h3 className="text-xl font-semibold">Identificação da Oportunidade ou Problema</h3>
          <p>
            O grupo Smart adquiriu recentemente uma startup chamada Angulare, que desenvolve um sistema de mesmo nome para a gestão de franquias de academias no modelo pague pelo uso. Com o sistema, é possível visualizar quantos créditos cada aluno possui, quantas visitas ele realizou ao studio, além da agenda dos studios, com horários e profissionais responsáveis por cada aula.
          </p>
          <p>
            Nosso cliente, franqueado de academias, utiliza esse sistema e relata inconsistências recorrentes, como:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Erros na exibição das informações</li>
            <li>Abas e páginas que deixam de aparecer aleatoriamente</li>
            <li>Instabilidade nos momentos de maior demanda — ou seja, durante os horários de pico da academia</li>
          </ul>
          <p>
            Nessas ocasiões, o sistema fica fora do ar, obrigando os recepcionistas a anotarem informações de forma assíncrona e descentralizada, geralmente com papel e caneta, sem acesso aos dados necessários no site e possivelmente perdendo informação importante.
          </p>
          <p>
            Outro ponto crítico é a total ausência de ferramentas de análise de dados já concentrados no sistema. Não há nenhuma funcionalidade que permita o cruzamento de informações para identificar, por exemplo:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Clientes mais inativos</li>
            <li>Clientes que participaram de uma aula experimental e não retornaram</li>
            <li>Clientes que estão prestes a ficar sem créditos</li>
          </ul>
          <p>
            Com base nessas informações, é possível alinhar uma demanda já expressa pelo dono das franquias: o envio automatizado de mensagens aos clientes, com o objetivo de melhorar o atendimento, fidelizar e recuperar alunos.
          </p>
          <p>
            Isso eliminaria essa etapa essencial da rotina da recepção, atualmente feita de forma manual e, segundo o cliente, com baixa efetividade, já que os responsáveis frequentemente deixam de enviar as mensagens, e ele não consegue acompanhar essa tarefa de forma adequada.
          </p>
          <img 
               src="/public/fishBone2.png" 
               alt="Descrição da Imagem" 
               className="w-full max-w-xs h-auto rounded-lg"
          />

          <h3 className="text-xl font-semibold">Desafios do Projeto</h3>
          <p>Os principais desafios enfrentados pelo cliente envolvem:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>A operacionalização manual de processos</li>
            <li>A exigência de tempo da equipe para revisar dados de presença e comportamento dos alunos</li>
            <li>A falta de integração de dados, dificultando a análise e tomada de decisões</li>
            <li>A baixa automação na comunicação, que impacta negativamente a experiência dos alunos</li>
            <li>A escalabilidade do modelo atual, que compromete a padronização com o crescimento da franquia</li>
            <li>O desafio técnico de fornecer constância para o sistema nos horários de pico</li>
          </ul>

          <h3 className="text-xl font-semibold">Segmentação de Clientes</h3>
          <p>O sistema seria usado basicamente por apenas um grupo:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Usuários das franquias:</strong> Esse grupo não utilizará diretamente o sistema, mas sim as franquias. São homens e mulheres de alto poder aquisitivo entre 25 e 40 anos que possuem grande interesse em saúde e bem-estar.
            </li>
            <li>
              <strong>Recepcionistas (18 a 40 anos):</strong> Grupo formado por pessoas de diferentes idades, com no mínimo um conhecimento básico em tecnologia. São capazes de operar sistemas de forma simples e funcional, mas não possuem domínio avançado sobre ferramentas mais complexas.
            </li>
            <li>
              <strong>Gerente/Dono da franquia:</strong> Grupo formado pelos possíveis gerentes que podem vir a ser contratados caso o negócio escale, e o dono da franquia. São capazes de operar o sistema com desenvoltura e possuem ênfase em acompanhar e verificar o trabalho feito.
            </li>
          </ul>

        </div>
      ),
    },
    nicho2: {
      title: "2. Solução Proposta",
      description: "",
      colorClass: "topic2",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">2.1 Objetivos do Produto</h3>
            <p>
              O objetivo do produto é fornecer uma plataforma capaz de operar sem interrupções no funcionamento, mesmo durante os horários de pico. Além disso, agregar uma seção específica para o cruzamento e a análise de dados sobre os clientes, a academia e os funcionários, além de uma funcionalidade que envia mensagens personalizadas para cada tipo diferente de segmento de cliente, sem ser necessária a operação manual da equipe da recepção.
            </p>
            <p>
              A plataforma também manterá as funções essenciais que o sistema antigo já oferecia, como a visualização das marcações de aulas.
            </p>

            <h3 className="text-xl font-semibold">2.2 Características da Solução</h3>
            <p>
              A solução proposta contará com um conjunto de funcionalidades voltadas à automação da gestão da franquia, à melhoria da comunicação com os alunos e à organização das operações internas.
            </p>
            <p>
              Dentre as principais características previstas, destacam-se:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Automação da comunicação com alunos</strong>, incluindo mensagens de boas-vindas, lembretes de aula e incentivo para retorno em caso de faltas.</li>
              <li><strong>Painel analítico</strong> com relatórios, estatísticas e indicadores de desempenho, contando com diversos filtros para personalização.</li>
              <li><strong>Interface simples e intuitiva.</strong></li>
              <li><strong>Sistema livre de interrupções em momentos de alta demanda.</strong></li>
              <li><strong>Painel de visualização dos agendamentos.</strong></li>
            </ul>

            <h3 className="text-xl font-semibold">2.3 Tecnologias a Serem Utilizadas</h3>
            <p>
              A solução será desenvolvida com tecnologias modernas, amplamente adotadas no mercado e de fácil integração, visando garantir escalabilidade, desempenho e uma boa experiência para os usuários.
            </p>
            <p>
              As principais tecnologias previstas são:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Frontend</strong>: Next.js, para criação de interfaces amigáveis, intuitivas e responsivas.</li>
              <li><strong>Backend</strong>: Node.js, com desenvolvimento de APIs REST para comunicação entre os sistemas.</li>
              <li><strong>Banco de dados</strong>: PostgreSQL, para armazenamento dos dados.</li>
              <li><strong>Serviços de mensageria</strong>: Integração com WhatsApp API, envio de e-mail e SMS para automação da comunicação com os alunos.</li>
              <li><strong>Hospedagem</strong>: Heroku (passível de mudança ao longo do projeto, dependendo das necessidades de escalabilidade e facilidade de implementação).</li>
            </ul>

            <h3 className="text-xl font-semibold">2.4 Pesquisa de Mercado e Análise Competitiva</h3>
            <p>
              No Brasil, existem outras plataformas semelhantes, inclusive a já utilizada atualmente pelo cliente, a Angulare E-commerce. Também contamos com a iFitness e a Evo (W12).
            </p>

            <p><strong>Evo (W12)</strong></p>
            <p>
              É um sistema relatado por usuários como extremamente complexo. Exige treinamento da equipe e muito esforço e comprometimento para a aprendizagem. Além disso, não é focado no modelo de academias que funcionam com compra e marcação de aulas por meio de créditos. Também não oferece um cruzamento e análise de dados eficientes. Já foram relatados problemas como quedas do sistema em horários de pico.
            </p>

            <p><strong>iFitness</strong></p>
            <p>
              Focado em academias convencionais, com ênfase em treinos de musculação. Não foi desenhado para academias com modelo de créditos por aula e agendamento online. A interface é considerada complicada de usar e exige treinamento da equipe.
            </p>

            <h3 className="text-xl font-semibold">2.5 Análise de Viabilidade</h3>
            <p>
              A solução é viável tecnicamente, pois utiliza tecnologias maduras e conhecidas pelo grupo, permitindo o desenvolvimento modular e escalável.
            </p>
            <p>
              Prazo estimado para entrega da versão inicial (MVP): 3 a 4 meses.
            </p>
            <p>
              Modelo financeiro: Código aberto para a franquia inicialmente, com potencial de monetização futura via licenciamento.
            </p>
            <p>
              A economia de tempo e recursos, aliada ao aumento na conversão e retenção de alunos, torna o projeto atrativo. O mercado demonstra demanda crescente por soluções desse tipo, especialmente entre franquias em expansão.
            </p>

            <h3 className="text-xl font-semibold">2.6 Impacto da Solução</h3>
            <p>
              A implementação do sistema trará impactos significativos na gestão da franquia:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Redução de custos operacionais.</li>
              <li>Maior controle das informações.</li>
              <li>Suporte ao crescimento do negócio.</li>
              <li>Atendimento mais ágil e personalizado.</li>
              <li>Melhoria na experiência dos alunos e na rotina da equipe.</li>
              <li>Aumento do engajamento e da taxa de retorno.</li>
              <li>Fortalecimento da imagem da marca por meio da modernização dos serviços.</li>
            </ul>
            <p>
              Esses fatores contribuirão para uma expansão estruturada da franquia.
            </p>

        </div>
      ),
    },
    nicho3: {
      title: "Estratégias de Engenharia de Software",
      description: "",
      colorClass: "topic3",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">3.1 Estratégia Priorizada</h3>
<p><strong>Abordagem de Desenvolvimento de Software</strong></p>
<p>
  O projeto adotará a abordagem ágil de desenvolvimento de software. Esta abordagem foi escolhida por promover:
</p>
<ul className="list-disc pl-5 space-y-2 mt-2">
  <li>Priorização da colaboração contínua com o cliente.</li>
  <li>Adaptações rápidas às mudanças de requisitos.</li>
</ul>
<p>
  Essas características são essenciais para o contexto da franquia de academias, que está em expansão e requer soluções flexíveis e evolutivas.
</p>

<p><strong>Diagrama de Causa e Efeito</strong></p>
<p>
  A abordagem ágil se caracteriza por recursos e prazos fixos, com variação nos requisitos. Isso significa que se prioriza a entrega dentro do prazo estipulado, com os recursos disponíveis, garantindo que os requisitos mais importantes para o funcionamento do sistema sejam entregues primeiro.
</p>

<p><strong>Ciclo de Vida</strong></p>
<p>
  O ciclo de vida adotado será o ciclo de vida Ágil, com foco em entregas frequentes e iterativas de valor ao cliente, promovendo colaboração constante, resposta rápida a mudanças e melhoria contínua. Esse modelo favorece a validação antecipada de funcionalidades, como a automação da comunicação com os alunos e os painéis analíticos, garantindo alinhamento com as necessidades do usuário final ao longo do desenvolvimento.
</p>

<p><strong>Ciclo de Vida Ágil</strong></p>
<p>
  Processo de Engenharia de Software
</p>
<p>
  O processo de desenvolvimento escolhido é o ScrumXP, uma junção do framework Scrum com práticas do Extreme Programming (XP). O ScrumXP oferece um equilíbrio entre a organização dos papéis, eventos e artefatos do Scrum e as práticas técnicas do XP, como integração contínua, refatoração e desenvolvimento orientado a testes (TDD), o que garante qualidade de código desde o início e agilidade na adaptação das funcionalidades.
</p>

<h3 className="text-xl font-semibold">3.2 Quadro Comparativo</h3>
<table className="min-w-full table-auto mt-4">
  <thead>
    <tr className="bg-gray-100">
      <th className="px-4 py-2 text-left">Critério</th>
      <th className="px-4 py-2 text-left">ScrumXP</th>
      <th className="px-4 py-2 text-left">FDD - Desenvolvimento Orientado a Funcionalidades</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-2 font-semibold">Visão Geral</td>
      <td className="px-4 py-2">Iterativo e incremental, com foco em agilidade e baixa exigência documental</td>
      <td className="px-4 py-2">Focado na implementação de funcionalidades específicas, dividindo o sistema em partes menores</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Tratamento da Arquitetura</td>
      <td className="px-4 py-2">Arquitetura evolui conforme as necessidades; sem planejamento detalhado inicial</td>
      <td className="px-4 py-2">Uso de diagramas UML para modelar a estrutura, com apoio de diagramas de sequência</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Organização do Processo</td>
      <td className="px-4 py-2">Ciclos curtos (sprints) de 2 a 4 semanas, com entregas contínuas</td>
      <td className="px-4 py-2">Iterações de 2 a 10 dias, com planejamento baseado em funcionalidades</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Adaptação de Requisitos</td>
      <td className="px-4 py-2">Alta – requisitos mudam a cada ciclo conforme feedback do cliente</td>
      <td className="px-4 py-2">Moderada – mudanças são possíveis, mas há foco em funcionalidades específicas</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Participação do Cliente</td>
      <td className="px-4 py-2">Alta – cliente acompanha, revisa e sugere melhorias a cada entrega</td>
      <td className="px-4 py-2">Menor – comunicação é feita via documentação detalhada entre equipe e cliente</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Nível de Complexidade</td>
      <td className="px-4 py-2">Processo enxuto, com foco em colaboração e menor dependência de documentação</td>
      <td className="px-4 py-2">Mais estruturado, com uso intenso de modelagem e documentação técnica</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Técnicas Utilizadas</td>
      <td className="px-4 py-2">Programação em dupla, TDD, integração contínua, refatoração, design simples</td>
      <td className="px-4 py-2">Criação e uso de diagramas UML, documentação detalhada e refinamento incremental</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Garantia de Qualidade</td>
      <td className="px-4 py-2">Qualidade garantida por testes automatizados e TDD durante o desenvolvimento</td>
      <td className="px-4 py-2">Avaliação no final de cada iteração, com testes e inspeções dos incrementos</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Suporte às Equipes</td>
      <td className="px-4 py-2">Equipes autônomas com comunicação direta e colaborativa</td>
      <td className="px-4 py-2">Suporta equipes maiores com estruturação formal do processo</td>
    </tr>
  </tbody>
</table>

<h3 className="text-xl font-semibold">3.3 Justificativa</h3>
<p>
  A escolha do ScrumXP como processo de engenharia de software se baseia na necessidade do projeto de adaptar-se constantemente às demandas do cliente e ao contexto de uma franquia em crescimento. A flexibilidade na priorização de funcionalidades e a entrega contínua de valor são aspectos fundamentais para validar rapidamente as soluções propostas, especialmente em um cenário onde a experiência do usuário e a eficiência operacional são decisivas para o sucesso do produto.
</p>
<p>
  Além disso, as práticas técnicas oriundas do XP garantem uma base de código mais confiável e sustentável, enquanto o framework Scrum permite uma organização clara das tarefas da equipe, promovendo transparência, colaboração e melhoria contínua. Esses fatores tornam o ScrumXP a escolha mais alinhada com os objetivos e desafios do projeto.
</p>

        </div>
      ),
    },
    nicho4: {
      title: "Cronograma e Entregas",
      description: "",
      colorClass: "topic4",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">4.0 Cronograma e Entregas</h3>
<p>
  O projeto DeltaCore seguirá a metodologia ágil, com sprints quinzenais e entregas incrementais. A duração total será de aproximadamente três meses, dividida em 6 sprints.
</p>

<h3 className="text-xl font-semibold">4.1 Cronograma de Sprints</h3>
<table className="min-w-full table-auto mt-4">
  <thead>
    <tr className="bg-gray-100">
      <th className="px-4 py-2 text-left">Sprint</th>
      <th className="px-4 py-2 text-left">Período</th>
      <th className="px-4 py-2 text-left">Entrega Principal</th>
      <th className="px-4 py-2 text-left">Descrição das Atividades</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-2 font-semibold">Sprint 1</td>
      <td className="px-4 py-2">08/04 – 21/04</td>
      <td className="px-4 py-2">Levantamento de Requisitos e Protótipo de Telas</td>
      <td className="px-4 py-2">Alinhamento com o cliente, entrevistas e criação do backlog. Wireframes e protótipos de baixa fidelidade da interface do sistema.</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Sprint 2</td>
      <td className="px-4 py-2">22/04 – 05/05</td>
      <td className="px-4 py-2">MVP da Interface e Arquitetura do Backend</td>
      <td className="px-4 py-2">Implementação inicial do frontend com Next.js e definição da arquitetura de APIs com Node.js. Início da configuração do banco PostgreSQL.</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Sprint 3</td>
      <td className="px-4 py-2">06/05 – 19/05</td>
      <td className="px-4 py-2">Módulo de Agendamentos e Autenticação</td>
      <td className="px-4 py-2">Entrega do painel de agendamento de aulas com visualização e autenticação de usuários. Integração básica com o banco de dados.</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Sprint 4</td>
      <td className="px-4 py-2">20/05 – 02/06</td>
      <td className="px-4 py-2">Módulo de Comunicação Automatizada</td>
      <td className="px-4 py-2">Desenvolvimento do sistema de envio de mensagens (WhatsApp, e-mail). Configuração inicial da integração com a API de mensagens.</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Sprint 5</td>
      <td className="px-4 py-2">03/06 – 16/06</td>
      <td className="px-4 py-2">Módulo de Análise de Dados e Painel Analítico</td>
      <td className="px-4 py-2">Geração de relatórios, visualização de estatísticas sobre alunos e uso do sistema. Criação de filtros e gráficos básicos.</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Sprint 6</td>
      <td className="px-4 py-2">17/06 – 30/06</td>
      <td className="px-4 py-2">Refino, Testes Finais e Documentação</td>
      <td className="px-4 py-2">Refatoração, correções de bugs, testes com usuários, entrega da documentação técnica e manual de uso. Preparação para deploy.</td>
    </tr>
  </tbody>
</table>

<h3 className="text-xl font-semibold">4.2 Reuniões e Revisões</h3>
<ul className="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Daily meetings:</strong> Adaptaremos o conceito de reuniões diárias para encontros às terças e quintas com duração de no máximo 15 minutos.</li>
  <li><strong>Sprint Planning:</strong> Ao início de cada sprint.</li>
  <li><strong>Sprint Review e Retrospective:</strong> Ao final de cada sprint com demonstração das entregas ao cliente e discussão de melhorias.</li>
</ul>

        </div>
      ),
    },
    nicho5: {
      title: "Interação entre Equipe e Cliente",
      description: "",
      colorClass: "topic5",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">5. Interação entre Equipe e Cliente</h3>

<h3 className="text-xl font-semibold">5.1 Composição da Equipe</h3>
<table className="min-w-full table-auto mt-4">
  <thead>
    <tr className="bg-gray-100">
      <th className="px-4 py-2 text-left">Papel</th>
      <th className="px-4 py-2 text-left">Descrição</th>
      <th className="px-4 py-2 text-left">Participante(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-2 font-semibold">Gerente de Projeto</td>
      <td className="px-4 py-2">Coordena o projeto, garante a comunicação entre cliente e equipe, controla prazos e entregas.</td>
      <td className="px-4 py-2">Luis Edardo Lima</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Desenvolvedor Frontend</td>
      <td className="px-4 py-2">Responsável pela interface do usuário, design e implementação das funcionalidades no lado do cliente.</td>
      <td className="px-4 py-2">Isabelle de Costa e Cibelly Lourenço</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Desenvolvedor Backend</td>
      <td className="px-4 py-2">Implementa a lógica de negócios, integração com banco de dados e APIs.</td>
      <td className="px-4 py-2">Eduardo Silva Waski e Henrique Carvalho</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Analista de QA</td>
      <td className="px-4 py-2">Garante a qualidade do produto, executando testes de funcionalidade, performance e usabilidade.</td>
      <td className="px-4 py-2">Felipe Bressanelli</td>
    </tr>
    <tr>
      <td className="px-4 py-2 font-semibold">Analista de Requisitos</td>
      <td className="px-4 py-2">Define os requisitos funcionais e não funcionais do sistema e garante que eles sejam atendidos.</td>
      <td className="px-4 py-2">Toda a equipe</td>
    </tr>
  </tbody>
</table>

<h3 className="text-xl font-semibold">5.2 Comunicação</h3>
<p><strong>Ferramentas de Comunicação:</strong></p>
<ul className="list-disc pl-5 space-y-2 mt-2">
  <li><strong>WhatsApp:</strong> Será utilizado para comunicação diária entre os membros da equipe. Permite envio rápido de mensagens, compartilhamento de arquivos e criação de canais temáticos. Também será usado para interações com o cliente.</li>
  <li><strong>Google Meet:</strong> Utilizado para reuniões semanais de revisão e planejamento com o cliente, permitindo validação das entregas e discussão de atividades futuras.</li>
  <li><strong>Miro/ZenHub:</strong> Usado para gerenciar o backlog, controlar tarefas e acompanhar o progresso de cada sprint. Permite transparência e participação do cliente nas priorizações.</li>
  <li><strong>Gather Town:</strong> Ferramenta que simula um escritório, onde cada participante tem seu espaço de trabalho. Facilita o trabalho remoto, pois emula o trabalho em ambiente presencial, além de ter gráficos parecidos com jogo.</li>
  <li><strong>Discord:</strong> Usada pela equipe para reuniões internas, guardar informações importantes e troca de mensagens.</li>
</ul>

<p><strong>Métodos e Frequência de Reuniões:</strong></p>
<ul className="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Reuniões Diárias (Daily Scrum):</strong> Adaptaremos o conceito de reuniões diárias para reuniões presenciais todas terças e quintas, e ao longo da semana mandaremos atualizações do andamento dos trabalhos via mensagens de forma assíncrona.</li>
  <li><strong>Reunião de Revisão de Sprint (quinzenal):</strong> Apresentação das funcionalidades implementadas ao cliente para validação e coleta de feedback.</li>
  <li><strong>Reunião de Planejamento de Sprint:</strong> Definição das atividades do próximo sprint com base no feedback da revisão.</li>
  <li><strong>Reunião de Retrospectiva:</strong> Discussão interna ao final de cada sprint sobre melhorias de processo e lições aprendidas.</li>
</ul>

<p><strong>Frequência de Interações com o Cliente:</strong></p>
<ul className="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Revisões de Sprint (quinzenal):</strong> Envolvimento direto do cliente para validação e feedback.</li>
  <li><strong>Interações Adicionais por WhatsApp:</strong> Acesso direto do cliente ao canal da equipe para esclarecimentos e solicitações rápidas.</li>
</ul>

<h3 className="text-xl font-semibold">5.3 Processo de Validação</h3>
<p>O processo de validação da solução será dividido em três etapas principais:</p>
<ul className="list-disc pl-5 space-y-2 mt-2">
  <li><strong>Definition of Ready (DoR):</strong> Antes de iniciar o desenvolvimento, será verificado se os requisitos estão bem definidos, documentados e com critérios de aceitação claros.</li>
  <li><strong>Definition of Done (DoD):</strong> Uma funcionalidade só será considerada pronta após passar por testes unitários e de integração, com aprovação visual e funcional pela equipe e pelo cliente.</li>
  <li><strong>Teste de Aceitação:</strong> Após a validação interna, o cliente realizará testes de aceitação baseando-se nos critérios definidos na DoR para confirmar o atendimento aos requisitos.</li>
</ul>

        </div>
      ),
    },
    nicho6: {
      title: "Lições Aprendidas",
      description: "",
      colorClass: "topic6",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Lições Aprendidas e Melhorias</h3>

<h3 className="text-xl font-semibold">Unidade 1: Personalização na Solução de Problemas</h3>

<p><strong>Desafio:</strong> A equipe inicialmente utilizava uma abordagem padronizada para resolução de problemas, o que se mostrou ineficiente em alguns casos devido às particularidades de cada cliente, como nível de conhecimento técnico e disponibilidade para reuniões.</p>

<p><strong>Ação de Melhoria:</strong> Passou-se a adotar uma análise mais individualizada de cada problema, considerando o contexto específico do cliente. Isso incluiu a adaptação da linguagem técnica utilizada, o ritmo de trabalho e a forma de comunicação com base na disponibilidade do cliente para interações síncronas ou assíncronas.</p>

<p><strong>Resultado Esperado:</strong> Maior eficiência na resolução de problemas, redução de mal-entendidos e aumento da satisfação do cliente com o processo de desenvolvimento e suporte.</p>

        </div>
      ),
    },
  }

  const currentTopic = topicContent[activeTab]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 py-6">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-topic1 via-topic3 to-topic6 bg-clip-text text-transparent">
          Sobre o Projeto
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Informações detalhadas sobre o projeto de requisitos de software.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-2 gap-y-1 mb-6">
         {topicTabs.map((tab) => (
            <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`flex items-center gap-2 p-2 rounded-md border ${activeTab === tab.id ? "bg-[hsl(262,83%,58%)] text-white" : "bg-white"}`}
            >
               <tab.icon className="w-4 h-4" />
               <span className="text-sm text-left">{tab.label}</span>
            </button>
         ))}
      </div>



      <div className="space-y-6">
        <div className={`space-y-2 border-l-4 border-${currentTopic.colorClass} pl-4`}>
          <h2 className={`text-2xl font-bold text-${currentTopic.colorClass}`}>{currentTopic.title}</h2>
          <p className="text-muted-foreground">{currentTopic.description}</p>
        </div>

        <Card className={`border-${currentTopic.colorClass}/20`}>
          <CardContent className="pt-6">{currentTopic.content}</CardContent>
        </Card>
      </div>
    </div>
  )
}
