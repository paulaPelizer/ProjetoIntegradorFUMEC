import { TrendingUp, Clock, CheckCircle, Target } from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      label: 'Módulos Concluídos',
      value: '12',
      total: '20',
      icon: CheckCircle,
      color: 'text-[var(--coral-neon)]',
      bgColor: 'bg-[var(--skin-tone-light)]',
    },
    {
      label: 'Horas de Estudo',
      value: '48h',
      trend: '+12h esta semana',
      icon: Clock,
      color: 'text-[var(--graphite)]',
      bgColor: 'bg-[var(--skin-tone)]',
    },
    {
      label: 'Sessões de Mentoria',
      value: '8',
      total: '12',
      icon: Target,
      color: 'text-[var(--coral-neon-dark)]',
      bgColor: 'bg-[var(--skin-tone-light)]',
    },
    {
      label: 'Crescimento',
      value: '85%',
      trend: '+5% este mês',
      icon: TrendingUp,
      color: 'text-[var(--salmon-neon)]',
      bgColor: 'bg-[var(--skin-tone)]',
    },
  ];

  const recentActivities = [
    { title: 'Módulo "Planejamento Estratégico" concluído', time: 'Há 2 horas', type: 'success' },
    { title: 'Sessão de mentoria agendada para amanhã às 15h', time: 'Há 5 horas', type: 'info' },
    { title: 'Novo material disponível: "Análise de Mercado"', time: 'Há 1 dia', type: 'new' },
    { title: 'Comentário do mentor no seu projeto', time: 'Há 2 dias', type: 'comment' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[var(--coral-neon)] to-[var(--salmon-neon)] rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Bem-vindo de volta, Empreendedor!</h1>
        <p className="text-white/90">Continue sua jornada rumo ao sucesso empresarial</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/95 dark:bg-[var(--card)] backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.bgColor} dark:bg-[var(--skin-tone)] p-3 rounded-xl`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-[var(--graphite)]/70">{stat.label}</div>
                <div className="text-2xl font-bold text-[var(--graphite)]">
                  {stat.value}
                  {stat.total && <span className="text-[var(--graphite)]/40 text-lg">/{stat.total}</span>}
                </div>
                {stat.trend && <div className="text-sm text-[var(--graphite)]/60">{stat.trend}</div>}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Next Steps */}
        <div className="lg:col-span-2 bg-white/95 dark:bg-[var(--card)] backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-[var(--border)] shadow-sm">
          <h2 className="text-xl font-bold text-[var(--graphite)] mb-4">Próximos Passos</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Análise SWOT do seu negócio',
                module: 'Planejamento Estratégico',
                progress: 75,
                duration: '45 min',
              },
              {
                title: 'Definição de Público-Alvo',
                module: 'Marketing e Vendas',
                progress: 0,
                duration: '30 min',
              },
              {
                title: 'Estrutura de Custos',
                module: 'Gestão Financeira',
                progress: 0,
                duration: '60 min',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="border border-gray-200/50 dark:border-[var(--border)] rounded-xl p-4 hover:border-[var(--coral-neon)]/40 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--graphite)] mb-1">{step.title}</h3>
                    <p className="text-sm text-[var(--graphite)]/60">{step.module}</p>
                  </div>
                  <span className="text-xs text-[var(--graphite)]/60 bg-[var(--skin-tone-light)] dark:bg-[var(--skin-tone)] px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                {step.progress > 0 && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-[var(--graphite)]/60">
                      <span>Progresso</span>
                      <span>{step.progress}%</span>
                    </div>
                    <div className="h-2 bg-[var(--skin-tone-light)] dark:bg-[var(--skin-tone)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--coral-neon)]"
                        style={{ width: `${step.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/95 dark:bg-[var(--card)] backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-[var(--border)] shadow-sm">
          <h2 className="text-xl font-bold text-[var(--graphite)] mb-4">Atividades Recentes</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div
                  className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.type === 'success'
                      ? 'bg-[var(--coral-neon)]'
                      : activity.type === 'info'
                      ? 'bg-[var(--salmon-neon)]'
                      : activity.type === 'new'
                      ? 'bg-[var(--skin-tone-dark)]'
                      : 'bg-[var(--graphite)]'
                  }`}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[var(--graphite)] mb-1">{activity.title}</p>
                  <p className="text-xs text-[var(--graphite)]/50">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
