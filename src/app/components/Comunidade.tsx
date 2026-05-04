import { MessageSquare, Users, ThumbsUp, Share2, Clock } from 'lucide-react';

export function Comunidade() {
  const discussions = [
    {
      id: 1,
      author: 'Maria Santos',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      title: 'Como começar um negócio online com baixo investimento?',
      category: 'Empreendedorismo',
      replies: 24,
      likes: 45,
      time: 'Há 2 horas',
      excerpt: 'Estou pensando em começar um negócio de venda de produtos artesanais pela internet...',
    },
    {
      id: 2,
      author: 'João Silva',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      title: 'Dicas para melhorar presença nas redes sociais',
      category: 'Marketing Digital',
      replies: 18,
      likes: 32,
      time: 'Há 5 horas',
      excerpt: 'Gostaria de compartilhar algumas estratégias que funcionaram para mim...',
    },
    {
      id: 3,
      author: 'Ana Costa',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      title: 'Planilha de controle financeiro para pequenos negócios',
      category: 'Gestão Financeira',
      replies: 56,
      likes: 89,
      time: 'Há 1 dia',
      excerpt: 'Criei uma planilha simples para controlar receitas e despesas. Compartilho aqui...',
    },
    {
      id: 4,
      author: 'Pedro Oliveira',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      title: 'Experiências com marketplace: Facebook x Instagram',
      category: 'E-commerce',
      replies: 31,
      likes: 67,
      time: 'Há 2 dias',
      excerpt: 'Alguém mais teve experiência vendendo pelo marketplace do Facebook?...',
    },
  ];

  const trendingTopics = [
    { name: 'Marketing Digital', count: 234 },
    { name: 'Gestão Financeira', count: 189 },
    { name: 'Redes Sociais', count: 156 },
    { name: 'E-commerce', count: 142 },
    { name: 'Planejamento', count: 128 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/95 dark:bg-[var(--card)] backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-[var(--border)] shadow-sm">
        <h1 className="text-2xl font-bold text-[var(--graphite)] mb-2">Comunidade</h1>
        <p className="text-[var(--graphite)]/70">
          Conecte-se com outros empreendedores, compartilhe experiências e aprenda junto
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Discussions */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[var(--graphite)]">Discussões Recentes</h2>
            <button className="px-4 py-2 bg-[var(--coral-neon)] text-white rounded-xl font-medium hover:bg-[var(--coral-neon-dark)] transition-colors shadow-sm">
              Nova Discussão
            </button>
          </div>

          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white/95 dark:bg-[var(--card)] backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-[var(--border)] shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--skin-tone-dark)] flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--graphite)] mb-1 hover:text-[var(--coral-neon)] transition-colors">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[var(--graphite)]/60">
                        <span className="font-medium">{discussion.author}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {discussion.time}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs bg-[var(--skin-tone-light)] dark:bg-[var(--skin-tone)] text-[var(--graphite)] px-3 py-1 rounded-full font-medium">
                      {discussion.category}
                    </span>
                  </div>
                  <p className="text-[var(--graphite)]/70 text-sm mb-3">{discussion.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-[var(--graphite)]/60">
                    <div className="flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4" />
                      <span>{discussion.replies} respostas</span>
                    </div>
                    <button className="flex items-center gap-1.5 hover:text-[var(--coral-neon)] transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{discussion.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-[var(--coral-neon)] transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span>Compartilhar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Stats */}
          <div className="bg-gradient-to-br from-[var(--skin-tone-light)] to-[var(--skin-tone)] dark:from-[var(--skin-tone)] dark:to-[var(--skin-tone-dark)] rounded-xl p-6 border border-[var(--skin-tone-dark)]/30 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-[var(--coral-neon)]" />
              <h3 className="font-bold text-[var(--graphite)]">Estatísticas</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-2xl font-bold text-[var(--graphite)]">1.247</div>
                <div className="text-sm text-[var(--graphite)]/70">Membros ativos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--graphite)]">342</div>
                <div className="text-sm text-[var(--graphite)]/70">Discussões ativas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--graphite)]">2.8k</div>
                <div className="text-sm text-[var(--graphite)]/70">Respostas esta semana</div>
              </div>
            </div>
          </div>

          {/* Trending Topics */}
          <div className="bg-white/95 dark:bg-[var(--card)] backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-[var(--border)] shadow-sm">
            <h3 className="font-bold text-[var(--graphite)] mb-4">Tópicos em Alta</h3>
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--skin-tone-light)] dark:hover:bg-[var(--skin-tone)] transition-colors cursor-pointer"
                >
                  <span className="text-[var(--graphite)] font-medium">{topic.name}</span>
                  <span className="text-sm text-[var(--graphite)]/60 bg-[var(--skin-tone-light)] dark:bg-[var(--skin-tone)] px-2 py-1 rounded-full">
                    {topic.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-white/95 dark:bg-[var(--card)] backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-[var(--border)] shadow-sm">
            <h3 className="font-bold text-[var(--graphite)] mb-3">Diretrizes da Comunidade</h3>
            <ul className="space-y-2 text-sm text-[var(--graphite)]/70">
              <li className="flex gap-2">
                <span className="text-[var(--coral-neon)]">•</span>
                <span>Seja respeitoso e cordial</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--coral-neon)]">•</span>
                <span>Compartilhe conhecimento</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--coral-neon)]">•</span>
                <span>Mantenha discussões relevantes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--coral-neon)]">•</span>
                <span>Evite spam e autopromoção</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
