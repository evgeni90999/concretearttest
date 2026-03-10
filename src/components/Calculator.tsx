import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const productTypes = ["Столешница", "Раковина", "Барная стойка", "Другое"];
const sizes = ["< 1 м²", "1–2 м²", "2–3 м²", "> 3 м²"];
const complexities = ["Базовая", "Средняя", "Сложная"];

const Calculator = () => {
  const [step, setStep] = useState(0);
  const [product, setProduct] = useState("");
  const [size, setSize] = useState("");
  const [complexity, setComplexity] = useState("");
  const { toast } = useToast();

  const currentOptions = step === 0 ? productTypes : step === 1 ? sizes : complexities;
  const currentValue = step === 0 ? product : step === 1 ? size : complexity;
  const stepLabels = ["Тип изделия", "Примерная площадь", "Сложность"];

  const handleSelect = (value: string) => {
    if (step === 0) setProduct(value);
    else if (step === 1) setSize(value);
    else setComplexity(value);
  };

  const handleNext = () => {
    if (!currentValue) return;
    if (step < 2) {
      setStep(step + 1);
    } else {
      toast({
        title: "Заявка отправлена!",
        description: `${product}, ${size}, ${complexity}. Мы свяжемся с вами для расчёта стоимости.`,
      });
      setStep(0);
      setProduct("");
      setSize("");
      setComplexity("");
    }
  };

  return (
    <section id="calculator" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <p className="text-minimal text-muted-foreground mb-4">КАЛЬКУЛЯТОР</p>
            <h2 className="text-3xl md:text-5xl font-light text-architectural mb-4">
              Примерная стоимость вашего проекта
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border p-8"
          >
            {/* Progress */}
            <div className="flex gap-2 mb-8">
              {[0, 1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 transition-colors duration-300 ${s <= step ? "bg-foreground" : "bg-border"}`}
                />
              ))}
            </div>

            <p className="text-minimal text-muted-foreground mb-2">ШАГ {step + 1} ИЗ 3</p>
            <h3 className="text-lg font-medium mb-6">{stepLabels[step]}</h3>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {currentOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`p-4 border text-sm text-left transition-colors duration-200 ${
                    currentValue === option
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              {step > 0 && (
                <Button
                  variant="outline"
                  className="rounded-none flex-1"
                  onClick={() => setStep(step - 1)}
                >
                  Назад
                </Button>
              )}
              <Button
                className="rounded-none flex-1"
                onClick={handleNext}
                disabled={!currentValue}
              >
                {step === 2 ? "Получить расчёт" : "Далее"}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
