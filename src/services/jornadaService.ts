import api from './api';

export interface JornadaModule {
  id: number;
  title: string;
  description: string;
  status: 'locked' | 'in-progress' | 'completed';
  progress: number;
  lessons: number;
  completedLessons: number;
  duration: string;
}

export interface JornadaProgress {
  totalProgress: number;
  completedModules: number;
  totalModules: number;
  totalHours: number;
  completedLessons: number;
  totalLessons: number;
}

export interface JornadaData {
  progress: JornadaProgress;
  modules: JornadaModule[];
}

export const jornadaService = {
  async getJornada(): Promise<JornadaData> {
    const { data } = await api.get<JornadaData>('/jornada');
    return data;
  },

  async getModules(): Promise<JornadaModule[]> {
    const { data } = await api.get<{ modules: JornadaModule[] }>('/jornada/modules');
    return data.modules;
  },

  async getModule(id: number): Promise<JornadaModule> {
    const { data } = await api.get<{ module: JornadaModule }>(`/jornada/modules/${id}`);
    return data.module;
  },

  async completeLesson(moduleId: number, lessonId: number): Promise<void> {
    await api.post(`/jornada/modules/${moduleId}/complete`, { lesson_id: lessonId });
  },
};
