import { createRootRoute, Outlet } from '@tanstack/react-router';
import { AppQueryProvider } from '@/components/providers/query-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';

const RootErrorComponent = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="mb-4 font-bold text-4xl text-destructive tracking-tight">
        Ops! Algo deu errado.
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        Desculpe, a aplicação encontrou um erro inesperado e não conseguiu carregar esta tela. Já
        fomos notificados do problema.
      </p>
      <button
        type="button"
        onClick={() => window.location.assign('/')}
        className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm shadow transition-colors hover:bg-primary/90"
      >
        Voltar para Home
      </button>
    </div>
  );
};

const RootNotFoundComponent = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="mb-4 font-bold text-6xl tracking-tighter">404</h1>
      <h2 className="mb-4 font-semibold text-2xl tracking-tight">Página não encontrada</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        O endereço que você tentou acessar não existe ou foi movido. Verifique a URL digitada.
      </p>
      <button
        type="button"
        onClick={() => window.history.back()}
        className="rounded-md bg-secondary px-4 py-2 font-medium text-secondary-foreground text-sm shadow transition-colors hover:bg-secondary/90"
      >
        Voltar à página anterior
      </button>
    </div>
  );
};

export const Route = createRootRoute({
  component: () => (
    <AppQueryProvider>
      <ThemeProvider defaultTheme="system" storageKey="app-ui-theme">
        <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30">
          <Outlet />
        </div>
      </ThemeProvider>
    </AppQueryProvider>
  ),
  errorComponent: RootErrorComponent,
  notFoundComponent: RootNotFoundComponent,
});
