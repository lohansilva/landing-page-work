export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  icon: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  accent: string;
}

export const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Formulário', href: '#formulario' },
  { label: 'Contato', href: '#contato' }
];

export const stackItems = [
  'Python',
  'NestJS',
  'Angular',
  'PostgreSQL',
  'AWS',
  'LangChain',
  'LangGraph',
  'Docker',
  'RPA',
  'IA Generativa'
];

export const serviceItems: ServiceItem[] = [
  { title: 'Automação de processos repetitivos', icon: '⚙️', description: 'Elimino gargalos operacionais com fluxos robustos, auditáveis e escaláveis.' },
  { title: 'Agentes de IA personalizados', icon: '🤖', description: 'Agentes orientados ao seu negócio para executar, consultar e decidir com contexto.' },
  { title: 'Integrações entre sistemas', icon: '🔗', description: 'Conecto ERPs, CRMs, planilhas, APIs e ferramentas internas com segurança.' },
  { title: 'Dashboards e monitoramento', icon: '📊', description: 'Transformo dados operacionais em indicadores acionáveis e em tempo real.' },
  { title: 'Assistentes com RAG', icon: '🧠', description: 'Busca inteligente em documentos, bases internas e conhecimento corporativo.' },
  { title: 'Automação de planilhas', icon: '📈', description: 'Substituo rotinas manuais em Excel e Google Sheets por automações confiáveis.' },
  { title: 'OCR e processamento de documentos', icon: '📄', description: 'Extração, classificação e validação de documentos com IA aplicada.' },
  { title: 'Sistemas web personalizados', icon: '💻', description: 'Aplicações modernas para centralizar processos e acelerar equipes.' },
  { title: 'Workflows inteligentes', icon: '🧩', description: 'Orquestração de tarefas, aprovações e decisões com automação ponta a ponta.' },
  { title: 'APIs e backend escalável', icon: '🚀', description: 'Arquiteturas seguras, observáveis e preparadas para crescimento.' }
];

export const projectItems: ProjectItem[] = [
  {
    title: 'AI Automation Assistant',
    description: 'Assistente inteligente para automação de processos empresariais.',
    accent: 'from-cyan-300/30 to-blue-500/20'
  },
  {
    title: 'RAG Knowledge System',
    description: 'Sistema de busca inteligente utilizando documentos corporativos.',
    accent: 'from-indigo-300/30 to-cyan-500/20'
  },
  {
    title: 'Workflow Automation Platform',
    description: 'Plataforma para automação e orquestração de fluxos operacionais.',
    accent: 'from-sky-300/30 to-violet-500/20'
  }
];

export const problemExamples = [
  'Processos manuais repetitivos',
  'Automação de Excel',
  'Integrações com ERP',
  'Fluxos internos',
  'IA para documentos',
  'Assistentes inteligentes',
  'Relatórios automáticos',
  'Processamento de dados'
];
