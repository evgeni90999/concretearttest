import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Не треснет ли бетон?",
    answer: "Правильное армирование, качественная бетонная смесь и грамотный уход полностью исключают появление трещин. Мы даём гарантию на каждое изделие."
  },
  {
    question: "Как ухаживать за бетонной столешницей?",
    answer: "Достаточно мыть водой с мягким мылом. Раз в год рекомендуем обрабатывать поверхность специальным воском для дополнительной защиты."
  },
  {
    question: "Сколько весит бетонная столешница?",
    answer: "Зависит от размера, но стандартная столешница длиной 2 м весит примерно 80–100 кг. Для установки потребуется усиленная тумба или каркас."
  },
  {
    question: "Какие цвета возможны?",
    answer: "Любой цвет по каталогу RAL. Также доступны эффекты терраццо, кракелюр, имитация мрамора и другие декоративные техники."
  },
  {
    question: "Какие сроки изготовления?",
    answer: "Стандартный срок — 2–3 недели под ключ, включая замер, изготовление, доставку и монтаж."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-minimal text-muted-foreground mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-light text-architectural">
              Частые вопросы
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
