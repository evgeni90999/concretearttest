import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  { image: portfolio1, title: "Белая столешница", description: "Минималистичная кухонная столешница из белого бетона с интегрированной мойкой" },
  { image: portfolio2, title: "Тёмная ванная", description: "Тумба и раковина из пигментированного чёрного бетона для luxury ванной комнаты" },
  { image: portfolio3, title: "Барная стойка терраццо", description: "Барная стойка в стиле терраццо для премиального кафе" },
  { image: portfolio4, title: "Уличный стол", description: "Обеденный стол и скамейки из архитектурного бетона для террасы" },
  { image: portfolio5, title: "Кухонный остров", description: "Столешница с водопадным краем и латунной фурнитурой" },
  { image: portfolio6, title: "Раковина ручной работы", description: "Полированная раковина из светлого бетона с натуральной текстурой" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-minimal text-muted-foreground mb-4">ПОРТФОЛИО</p>
            <h2 className="text-3xl md:text-5xl font-light text-architectural">
              Наши проекты
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end">
                  <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-light text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-white/70">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
