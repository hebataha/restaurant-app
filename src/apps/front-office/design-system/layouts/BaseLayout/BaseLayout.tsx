import Footer from "../Footer";
import Header from "../Header";
import ActiveBar from "../Header/components/ActiveBar";
import BurgerMenu from "../Header/components/HeaderIcons/BurgerIcon/BurgerMenu";
import ChartMenu from "../Header/components/HeaderIcons/HeaderCart/ChartMenu";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="relative h-[200vh] overflow-x-hidden">
      <Header />
      <ChartMenu />
      <BurgerMenu />
      <ActiveBar /> {/* for small screens */}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
