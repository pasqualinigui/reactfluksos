import { z } from 'zod';

const envSchema = z.object({
  VITE_API_URL: z.string().url('The VITE_API_URL environment variable must be a valid URL.'),
  VITE_APP_TITLE: z.string().default('React Fluksos Template'),
});

const _env = envSchema.safeParse(import.meta.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables configuration:', _env.error.format());
  throw new Error('Environment variables are missing or misconfigured. Check the console logs.');
}

export const env = _env.data;
