import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { faqData } from '../../data/faq';

export function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#0d89b1]/10 text-[#0d89b1] rounded-full text-sm font-semibold mb-4">
            SAVOLLAR VA JAVOBLAR
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Eng ko'p berilgan savollar
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Litsey haqida tez-tez so'raladigan savollarga javoblar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#0d89b1] py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
