import { ReactNode } from 'react';
import Subheader from '../subheader/subheader';
import Footer from '../footer/footer';
import Header from '../header/header';

export interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <Subheader />
      <main className="flex-1 w-full mx-auto max-w-5xl px-5 md:px-2 my-5">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
