import { Check, X } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a1628] via-[#0d1b32] to-[#0a1628]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Պարզ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Գնագոյացում</span>
          </h2>
          <p className="text-gray-300 text-xl">
            Ցածր ռիսկ։ Բարձր արդյունք։
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-2 border-cyan-500/50 rounded-2xl p-10 shadow-2xl shadow-cyan-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 text-sm font-bold transform rotate-12 translate-x-8 -translate-y-2">
            ՍԱՀՄԱՆԱՓԱԿ ԺԱՄԱՆԱԿ
          </div>

          <div className="text-center mb-10">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-3xl md:text-4xl text-gray-500 line-through">$77</span>
              <span className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">$27</span>
              <span className="text-gray-300 text-2xl">/ամիս</span>
            </div>
            <p className="text-yellow-400 font-bold text-xl mb-2">
              Գինը շուտով կբարձրանա մինչև $77
            </p>
            <p className="text-gray-400">
              Միացի՛ր հիմա և խնայիր $50
            </p>
          </div>

          <div className="mb-10">
            <ul className="space-y-4">
              {[
                'Մուտք դեպի AI Automation Campus',
                'Մուտք դեպի ապագա campuses (e-commerce, copywriting, business)',
                'Հայ ձգտող community',
                'Ամենօրյա աջակցություն և mentorship',
                'Իրական skills որ վերածվում են փողի',
                'Անսահմանափակ մուտք բոլոր նյութերին'
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-200 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-cyan-500/30 pt-8 mb-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Check className="text-cyan-400" size={20} />
              <span>Չեղարկիր ցանկացած պահի</span>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://whop.com/arm-mastery-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-16 py-5 rounded-xl font-bold text-2xl hover:from-cyan-400 hover:to-blue-400 transition-all shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/60 hover:scale-105 w-full md:w-auto"
            >
              Միացիր Arm Mastery Club
            </a>
            <p className="text-gray-400 mt-6 text-sm">
              Ապահով վճարում Whop-ի միջոցով
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-[#0d1b32]/50 border border-green-900/30 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <Check className="text-green-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Որոշում Կայացրու Հիմա</h3>
                <p className="text-gray-300">Հասանելի գնով մուտք դեպի վերափոխիչ համակարգ</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0d1b32]/50 border border-red-900/30 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <X className="text-red-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Մնա Նույն Տեղում</h3>
                <p className="text-gray-300">Շարունակիր ապրել նույն կյանքով</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
