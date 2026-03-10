import { motion } from "framer-motion";
import { Gem, Leaf, Shield, Hand } from "lucide-react";

const advantages = [
  {
    icon: Gem,
    title: "Уникальный дизайн",
    description: "Каждый проект создаётся индивидуально под ваш интерьер, размеры и пожелания"
  },
  {
    icon: Leaf,
    title: "Экологичность",
    description: "Безопасные сертифицированные материалы, природный состав без вредных примесей"
  },
  {
    icon: Shield,
    title: "Долговечность",
    description: "Устойчивость к влаге, перепадам температур и механическим повреждениям"
  },
  {
    icon: Hand,
    title: "Теплота бетона",
    description: "Природная эстетика и приятная тактильность — бетон, к которому хочется прикоснуться"
  }
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-minimal text-muted-foreground mb-4">ПРЕИМУЩЕСТВА</p>
            <h2 className="text-3xl md:text-5xl font-light text-architectural">
              Почему выбирают нас
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-5 p-6 border border-border rounded-none hover:bg-muted transition-colors duration-300"
              >
                <div className="shrink-0">
                  <item.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
