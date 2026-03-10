import { motion } from "framer-motion";
import heroImage from "@/assets/hero-concrete.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-8xl font-light text-white text-architectural mb-6"
        >
          Архитектурный бетон
          <br />
          в вашем интерьере
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto mb-10"
        >
          Индивидуальные столешницы, раковины и барные стойки из высококачественного бетона. Ручная работа. Срок службы — десятилетия.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 text-sm tracking-wider uppercase px-8 py-6 rounded-none"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Рассчитать стоимость
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 text-sm tracking-wider uppercase px-8 py-6 rounded-none"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Смотреть проекты
          </Button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-16 bg-white/40" />
      </motion.div>
    </section>
  );
};

export default Hero;
