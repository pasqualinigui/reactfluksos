import { createLazyFileRoute } from '@tanstack/react-router';
import { useTheme } from '@/components/providers/theme-provider';
import { Button } from '@/components/ui/button';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="font-bold text-4xl tracking-tight sm:text-6xl">Template React Sênior</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-8">
        Vite 8 • React 19 • Tailwind v4 • Shadcn • Biome • TanStack Router
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button size="lg" onClick={toggleTheme}>
          Alternar Tema ({theme})
        </Button>
        <Button variant="outline" size="lg">
          Documentação
        </Button>
      </div>
    </div>
  );
}
