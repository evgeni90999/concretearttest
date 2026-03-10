import { motion } from "framer-motion";
import { Ruler, Box, Droplets, Sparkles, Truck } from "lucide-react";

const steps = [
  { icon: Ruler, title: "Замер и проектирование", description: "Выезд мастера, снятие размеров, согласование дизайна и материалов" },
  { icon: Box, title: "Создание формы и армирование", description: "Изготовление опалубки по чертежам, закладка арматуры для прочности" },
  { icon: Droplets, title: "Заливка и уплотнение", description: "Послойная заливка бетонной смеси с вибрационным уплотнением" },
  { icon: Sparkles, title: "Шлифовка и полировка", description: "Многоступенчатая обработка поверхности до идеальной гладкости" },
  { icon: Truck, title: "Доставка и монтаж", description: "Бережная транспортировка и профессиональная установка на месте" },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-minimal text-muted-foreground mb-4">ПРОЦЕСС</p>
            <h2 className="text-3xl md:text-5xl font-light text-architectural">
              Как мы работаем
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto mb-4 border border-border flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="text-minimal text-muted-foreground mb-2">0{index + 1}</div>
                <h3 className="text-sm font-medium mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
