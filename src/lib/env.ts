import { z } from 'zod';

const envSchema = z.object({
  VITE_API_URL: z.string().url('A variável VITE_API_URL deve ser uma URL válida.'),
  VITE_APP_TITLE: z.string().default('React Fluksos Template'),
});

const _env = envSchema.safeParse(import.meta.env);

if (!_env.success) {
  console.error('❌ Configuração inválida de variáveis de ambiente:', _env.error.format());
  throw new Error(
    'As variáveis de ambiente não foram configuradas corretamente. Verifique o console.'
  );
}

export const env = _env.data;
