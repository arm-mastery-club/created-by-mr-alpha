import { Quote } from 'lucide-react';

export default function StudentsWins() {
  const testimonials = [
    {
      name: 'Արման Հ.',
      role: 'Ուսանող, 19 տարեկան',
      text: 'Մինչ Arm Mastery Club-ն ես սովորում էի համալսարանում, բայց ոչ մի հստակություն չուներ ապագայի համար։ Այժմ ես արդեն ստացել եմ իմ առաջին եկամուտը AI automation-ից։ Կարող եմ ասել՝ սա փոխեց ամեն ինչ։'
    },
    {
      name: 'Նարեկ Մ.',
      role: 'Նախկին աշխատող, 9-5',
      text: 'Աշխատում էի գրասենյակում 2 տարի։ Յուրաքանչյուր առավոտ ատում էի արթնանալը։ Arm Mastery Club-ում սովորեցի skills, որոնք թույլ տվեցին սկսել իմ փոքր բիզնեսը։ Այժմ չեմ աշխատում ոչ մեկի համար։'
    },
    {
      name: 'Հայկ Ա.',
      role: 'Ուսանող, 21 տարեկան',
      text: 'Մինչև club-ը միանալը, ես չգիտեի ինչ անել։ Բոլորը ասում էին համալսարան ավարտիր, գտիր աշխատանք։ Բայց Arm Mastery Club-ում ինձ ցույց տվեցին ուրիշ ճանապարհ։ Community-ն և mentor-ները օգնեցին ինձ դուրս գալ 9-5 մտածելակերպից։'
    },
    {
      name: 'Արթուր Վ.',
      role: 'Երիտասարդ ձեռներեց',
      text: 'Ուներ գաղափար բայց չգիտեի ինչպես սկսել։ Arm Mastery Club-ը տվեց ինձ համակարգ, community pressure և skills որ պետք էր։ Արդեն վազում է իմ փոքր բիզնեսը և կյանքս իմ ձեռքում է։'
    }
  ];

  return (
    <section id="wins" className="py-20 px-4 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Students <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Wins</span>
          </h2>
          <p className="text-gray-300 text-xl">
            Իրական մարդիկ։ Իրական փոփոխություններ։
          </p>
          <p className="text-gray-400 mt-4 text-sm">
            Սրանք օրինակելի արդյունքներ են, ոչ թե երաշխիքներ։
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0d1b32] to-[#0a1628] border border-cyan-900/30 rounded-xl p-8 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="mb-6">
                <Quote className="text-cyan-400" size={32} />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <div className="border-t border-cyan-900/30 pt-6">
                <p className="text-white font-bold text-lg">
                  {testimonial.name}
                </p>
                <p className="text-cyan-400 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#0d1b32]/50 border border-cyan-900/30 rounded-xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <p className="text-2xl text-white font-bold mb-4">
              Հաջորդը <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ԴՈՒ ԵՍ</span>
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Բայց միայն եթե որոշում կայացնես։
            </p>
            <a
              href="https://whop.com/arm-mastery-club/arm-mastery-club-e7/?utm_source=store_page&funnelId=store_2bf61255-9fcb-401d-8489-3cb4e2155aee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all shadow-xl shadow-cyan-500/50 hover:shadow-cyan-400/60 hover:scale-105"
            >
              Սկսել Հիմա
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
