import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Կարո՞ղ եմ արագ սկսել փող վաստակել։',
      answer: 'Այո։ Սա action-based համակարգ է։ Ոմանք գումար են աշխատում հենց միանալու օրը։ Այս ամենը կախված է քո գործողություններից։ Մենք տալիս ենք tools, համակարգ և community։ Դու պետք է կատարես։'
    },
    {
      question: 'Ում համար է սա։',
      answer: 'Arm Mastery Club-ը ովքեր ուզում են ավելին։ Ովքեր հոգնել են սպասելուց։ Ովքեր պատրաստ են աշխատել ու սովորել։ Սա ոչ թե նրանց ով փնտրում են հեշտ ճանապարհ կամ հրաշք։ Սա նրանց ով ընդունում են պատասխանատվություն։'
    },
    {
      question: 'Սա ավանդական կրթո՞ւթյուն է։',
      answer: 'Ոչ։ Սա ամենևին ավանդական չէ։ Ոչ դասախոսություններ։ Ոչ քննություններ։ Ոչ դիպլոմ։ Սա իրական skills, իրական համակարգեր, իրական community է։ Դու սովորում ես ինչպես վաստակել փող, ոչ թե տեսություն։'
    },
    {
      question: 'Պետք է փորձառություն ունենամ։',
      answer: 'Ոչ։ Մեզ մոտ սկսել են ուսանողներ, աշխատողներ, բիզնեսմեններ։ Միայն պետք է լինի ցանկություն սովորելու և գործելու։ Մենք ցույց ենք տալիս ամեն ինչ քայլ առ քայլ։ Community-ն աջակցում է։'
    },
    {
      question: 'Ինչու գինը այդքան ցածր է։',
      answer: 'Որովհետև Mr. Alpha ուզում է որ յուրաքանչյուր հայ ունենա հնարավորություն։ Ոչ ոք չի կարող ասել որ չունի $27 ։ Բայց գինը շուտով կբարձրանա։ Ովքեր միանում են հիմա շահում են, ովքեր չեն միանում, մնում են ստրուկ, ՀԱՎԵՐԺ։'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-[#0a1628] via-[#0d1b32] to-[#0a1628]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">FAQ</span>
          </h2>
          <p className="text-gray-300 text-xl">
            Հարցեր։ Հստակ պատասխաններ։
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0d1b32] to-[#0a1628] border border-cyan-900/30 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-bold text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-cyan-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-cyan-900/30 pt-4">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
