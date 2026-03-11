import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Проекты", id: "portfolio" },
  { label: "Преимущества", id: "advantages" },
  { label: "Процесс", id: "process" },
  { label: "Отзывы", id: "testimonials" },
  { label: "FAQ", id: "faq" },
  { label: "Контакты", id: "contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-minimal transition-colors whitespace-nowrap ${scrolled ? "text-foreground" : "text-white"}`}
          >
            CONCRETEART
          </button>
          <a
            href="tel:+375291334306"
            className={`hidden sm:inline-flex text-sm tracking-wide whitespace-nowrap transition-colors ${
              scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            +375 (29) 133-43-06
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-minimal transition-colors duration-300 ${
                scrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className={`md:hidden ${scrolled ? "" : "text-white hover:bg-white/10"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
