import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    if (!name.trim() || !phone.trim() || !consent) {
      e.preventDefault();
      toast({ title: "Заполните обязательные поля", variant: "destructive" });
      return;
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <p className="text-minimal text-muted-foreground mb-4">КОНТАКТЫ</p>
            <h2 className="text-3xl md:text-5xl font-light text-architectural mb-4">
              Оставьте заявку
            </h2>
            <p className="text-muted-foreground text-sm">
              Расскажите о вашем проекте — мы подготовим индивидуальное предложение
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xnjgpzye"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_redirect" value="/spasibo.html" />
            <input type="hidden" name="_form" value="Контакты" />
            <Input
              placeholder="Ваше имя *"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-none border-border h-12"
              maxLength={100}
            />
            <Input
              placeholder="Телефон *"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-none border-border h-12"
              maxLength={20}
            />
            <Select value={projectType} onValueChange={setProjectType} name="projectType">
              <SelectTrigger className="rounded-none border-border h-12">
                <SelectValue placeholder="Тип проекта" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="countertop">Столешница</SelectItem>
                <SelectItem value="sink">Раковина</SelectItem>
                <SelectItem value="bar">Барная стойка</SelectItem>
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Сообщение"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-none border-border min-h-[120px]"
              maxLength={1000}
            />
            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                name="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked === true)}
                className="mt-0.5"
              />
              <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                Я согласен(а) на обработку персональных данных в соответствии с политикой конфиденциальности
              </label>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-none h-12 text-sm tracking-wider uppercase"
              disabled={!consent}
            >
              Отправить заявку
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
