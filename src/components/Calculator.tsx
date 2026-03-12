import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const productTypes = ["Столешница", "Раковина", "Барная стойка", "Другое"];
const sizes = ["< 1 м²", "1–2 м²", "2–3 м²", "> 3 м²"];
const complexities = ["Базовая", "Средняя", "Высокая"];

const Calculator = () => {
  const [step, setStep] = useState(0);
  const [product, setProduct] = useState("");
  const [size, setSize] = useState("");
  const [complexity, setComplexity] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [contactType, setContactType] = useState<"email" | "telegram">("telegram");
  const [contactValue, setContactValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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
      setShowModal(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactValue.trim()) return;

    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData();
      formData.set("_form", "Калькулятор");
      formData.set("product", product);
      formData.set("size", size);
      formData.set("complexity", complexity);
      formData.set("contactType", contactType);
      formData.set("contact", contactValue);

      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Form submit failed");

      setShowModal(false);
      setShowSuccess(true);
      setContactValue("");
    } catch {
      toast({
        title: "Не удалось отправить",
        description: "Попробуйте ещё раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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

          {step === 2 && (
            <div className="mt-8 md:mt-10 border border-border/70 bg-muted/40 p-6 md:p-8 space-y-5 text-sm text-muted-foreground">
              <h3 className="text-base md:text-lg font-semibold text-architectural">
                Как выбрать уровень сложности?
              </h3>

              <div className="space-y-2">
                <p className="font-medium text-foreground">🔹 Базовая сложность</p>
                <p>
                  Проекты с простой геометрией и минимальной обработкой. Подходит для:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Прямоугольные и квадратные столешницы</li>
                  <li>Подоконники и ступени</li>
                  <li>Простые полки и столики</li>
                  <li>Меньше ручной работы — экономия на изготовлении</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-foreground">🔹 Средняя сложность</p>
                <p>Изделия с элементами индивидуального дизайна:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Столешницы с интегрированной мойкой (бесшовное соединение)</li>
                  <li>Раковины классических овальных или круглых форм</li>
                  <li>Барные стойки с плавными изгибами</li>
                  <li>Изделия с отверстиями под смесители сложной конфигурации</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-foreground">🔹 Высокая сложность</p>
                <p>
                  Уникальные авторские проекты, требующие максимальной вовлечённости мастера:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Сложные многосоставные формы (волны, асимметрия)</li>
                  <li>Интеграция декоративных элементов (подсветка, вкрапления)</li>
                  <li>Комбинирование разных фактур и цветов в одном изделии</li>
                  <li>Эксклюзивные дизайнерские раковины и арт-объекты</li>
                </ul>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground/80 border-t border-border/60 pt-4">
                💡 Совет: Если сомневаетесь в выборе — оставьте комментарий в заявке, и мы поможем
                подобрать оптимальный вариант под ваш проект.
              </p>
            </div>
          )}
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md rounded-none">
          <DialogHeader>
            <DialogTitle className="text-xl font-light text-architectural">
              Куда отправить расчёт?
            </DialogTitle>
            <DialogDescription>
              Укажите удобный способ связи, и мы пришлём вам расчёт стоимости.
            </DialogDescription>
          </DialogHeader>

          <form
            className="space-y-4 mt-2"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xreyplvv"
            method="POST"
          >
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setContactType("telegram")}
                className={`flex-1 p-3 border text-sm transition-colors duration-200 ${
                  contactType === "telegram"
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground/50"
                }`}
              >
                Telegram / Viber
              </button>
              <button
                type="button"
                onClick={() => setContactType("email")}
                className={`flex-1 p-3 border text-sm transition-colors duration-200 ${
                  contactType === "email"
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground/50"
                }`}
              >
                Email
              </button>
            </div>

            <input
              type={contactType === "email" ? "email" : "text"}
              name="contact"
              placeholder={contactType === "email" ? "your@email.com" : "+375 (__) ___-__-__"}
              value={contactValue}
              onChange={(e) => setContactValue(e.target.value)}
              className="w-full p-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
              required
            />

            <Button
              className="w-full rounded-none"
              type="submit"
              disabled={!contactValue.trim() || isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md rounded-none">
          <DialogHeader>
            <DialogTitle className="text-xl font-light text-architectural">
              Спасибо!
            </DialogTitle>
            <DialogDescription>
              Запрос отправлен. Мы пришлём расчёт выбранным способом связи.
            </DialogDescription>
          </DialogHeader>
          <Button className="w-full rounded-none" onClick={() => setShowSuccess(false)}>
            Закрыть
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Calculator;
