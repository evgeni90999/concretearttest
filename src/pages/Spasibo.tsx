import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Spasibo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-6 py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-light text-architectural mb-6">
              Спасибо за заявку! 🎉
            </h1>
            <p className="text-muted-foreground mb-8 text-sm md:text-base">
              Мы получили ваше сообщение и свяжемся с вами в ближайшее время
              (обычно в течение нескольких часов).
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 h-12 border border-foreground text-sm tracking-wider uppercase rounded-none hover:bg-foreground hover:text-background transition-colors"
            >
              Вернуться на главную
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Spasibo;

