// src/layouts/layoutHome.tsx
import { Header } from "@/components";
import { Footer } from "@/components";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div
      className="
        min-h-screen 
        flex flex-col 
        w-full
        overflow-x-hidden   /* 👈 bloquea scroll horizontal en toda la página */
      "
    >
      <Header />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};
