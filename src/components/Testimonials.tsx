import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна Соколова",
    role: "Владелица квартиры",
    text: "Столешница из бетона стала центром нашей кухни. Гости всегда спрашивают, из чего она сделана. Уже 3 года — ни одной трещины, ни одного пятна.",
    rating: 5,
  },
  {
    name: "Михаил Верещагин",
    role: "Дизайнер интерьеров",
    text: "Работаю с ConcreteArt на всех своих проектах. Качество исполнения на высшем уровне — точные размеры, идеальная поверхность, всегда в срок.",
    rating: 5,
  },
  {
    name: "Елена Кравцова",
    role: "Владелица ресторана",
    text: "Заказывали барную стойку и столешницы для ресторана. Бетон выдерживает ежедневную нагрузку и при этом выглядит потрясающе.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-minimal text-muted-foreground mb-4">ОТЗЫВЫ</p>
            <h2 className="text-3xl md:text-5xl font-light text-architectural">
              Что говорят клиенты
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="border border-border p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
