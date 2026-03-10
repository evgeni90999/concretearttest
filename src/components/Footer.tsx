import { Instagram, Send } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-minimal mb-4">CONCRETEART</h3>
              <p className="text-sm text-background/60 leading-relaxed">
                Архитектурный бетон ручной работы. Столешницы, раковины, барные стойки и другие изделия для вашего интерьера.
              </p>
            </div>
            <div>
              <h4 className="text-minimal mb-4">НАВИГАЦИЯ</h4>
              <nav className="space-y-2">
                {[
                  { label: "Проекты", id: "portfolio" },
                  { label: "Преимущества", id: "advantages" },
                  { label: "Процесс", id: "process" },
                  { label: "Калькулятор", id: "calculator" },
                  { label: "Контакты", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="block text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-minimal mb-4">СОЦИАЛЬНЫЕ СЕТИ</h4>
              <div className="flex gap-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Pinterest">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Telegram">
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8">
            <p className="text-xs text-background/40 text-center">
              © {new Date().getFullYear()} ConcreteArt. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
