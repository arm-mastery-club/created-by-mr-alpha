import { Zap, Target, Rocket, Brain } from 'lucide-react';

export default function WhatYouLearn() {
  const outcomes = [
    {
      icon: Zap,
      title: 'Կարողություններ որոնք Վաստակում են',
      description: 'Ոչ թե տեսություն։ Ոչ թե դասախոսություններ։ Իրական skills, որոնք վերածվում են փողի։'
    },
    {
      icon: Target,
      title: 'Ինչպես են Գործում Համակարգերը',
      description: 'Սովորիր ինչպես ստեղծել workflows, automation, և systems որոնք աշխատում են առանց քեզ։'
    },
    {
      icon: Rocket,
      title: 'Անկախ Գործողություն',
      description: 'Այլևս չկախվես ոչ ոքից։ Դու վերահսկում ես քո եկամուտը, քո ժամանակը, քո կյանքը։'
    },
    {
      icon: Brain,
      title: 'Ոչ Ավանդական Կրթություն',
      description: 'Սա ոչ թե դասընթաց է։ Սա մտածելակերպի փոփոխություն է։ Սա նոր իրականություն է։'
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ինչ Ես <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Ստանում</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0d1b32] to-[#0a1628] border border-cyan-900/30 rounded-xl p-8 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg shadow-lg shadow-cyan-500/30">
                  <outcome.icon className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#0d1b32]/50 border border-cyan-900/30 rounded-xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <p className="text-2xl text-white font-semibold mb-4">
              Ոչ թե <span className="text-gray-500 line-through">տեսություն</span>
            </p>
            <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
              ԿԱՏԱՐՈՒՄ և ԱՐԴՅՈՒՆՔ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
