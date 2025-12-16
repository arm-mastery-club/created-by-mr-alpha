import { X, Check } from 'lucide-react';

export default function WithVsWithout() {
  const without = [
    'Շփոթվածություն',
    'Ծուլություն',
    'Ուղղություն չունես',
    'Ընդմիշտ աշխատում ես ուրիշների համար',
    'Հավերժ սպասում ես աշխատավարձին',
    'Լուրջ որոշումներ չես կայացնում'
  ];

  const with_ = [
    'Կառուցվածք և հստակություն',
    'Պատասխանատվություն',
    'Community pressure որ դու չմնաս ետ',
    'Skills որոնք վերածվում են փողի',
    'Վերահսկում ես քո եկամուտը',
    'Որոշում ընդունող մարդ ես դառնում'
  ];

  return (
    <section className="py-20 px-4 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ընտրիր Քո <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Իրականությունը</span>
          </h2>
          <p className="text-gray-300 text-xl">
            Կյանքը առանց համակարգի vs Arm Mastery Club
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-950/30 to-[#0a1628] border border-red-900/30 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-red-500/20 p-3 rounded-lg">
                <X className="text-red-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Առանց Համակարգի
              </h3>
            </div>

            <ul className="space-y-4">
              {without.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <X className="text-red-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-red-900/30">
              <p className="text-red-400 font-semibold text-lg text-center">
                Մնալ նույն տեղում = Ընտրություն
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/50 rounded-xl p-8 shadow-xl shadow-cyan-500/20">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg shadow-lg shadow-cyan-500/30">
                <Check className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Arm Mastery Club
              </h3>
            </div>

            <ul className="space-y-4">
              {with_.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-cyan-500/30">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold text-lg text-center">
                Գործել հիմա = Հաղթանակ վաղը
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#0d1b32]/50 border border-cyan-900/30 rounded-xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
              Որոշումը քոնն է։
            </p>
            <p className="text-xl text-gray-300 mb-6">
              Բայց ժամանակը <span className="text-cyan-400 font-semibold">չի սպասի</span>։
            </p>
            <a
              href="https://whop.com/arm-mastery-club/arm-mastery-club-e7/?utm_source=store_page&funnelId=store_2bf61255-9fcb-401d-8489-3cb4e2155aee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all shadow-xl shadow-cyan-500/50 hover:shadow-cyan-400/60 hover:scale-105"
            >
              Ես Պատրաստ Եմ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
