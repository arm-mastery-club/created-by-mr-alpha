import { Check, Lock } from 'lucide-react';

export default function Campuses() {
  const campuses = [
    {
      name: 'AI Automation Campus',
      available: true,
      description: 'Սովորիր ինչպես օգտագործել AI-ն փող վաստակելու համար։ Ավտոմատացրու workflow-ները։ Ստեղծիր համակարգեր։'
    },
    {
      name: 'E-commerce Campus',
      available: false,
      description: ''
    },
    {
      name: 'Copywriting Campus',
      available: false,
      description: ''
    },
    {
      name: 'Business Campus',
      available: false,
      description: ''
    }
  ];

  return (
    <section id="campuses" className="py-20 px-4 bg-gradient-to-b from-[#0a1628] via-[#0d1b32] to-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Campuses</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Սա ոչ թե <span className="text-gray-500 line-through">մեկ դասընթաց</span> է։
          </p>
          <p className="text-2xl text-cyan-400 font-bold mt-4">
            Սա ԷԿՈՀԱՄԱԿԱՐԳ է։
          </p>
          <p className="text-gray-400 mt-4">
            Դու աճում ես ներսում։ Երկարաժամկետ։ Անընդհատ։
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {campuses.map((campus, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl p-8 border transition-all ${
                campus.available
                  ? 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                  : 'bg-[#0d1b32]/50 border-cyan-900/20'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {campus.name}
                </h3>
                {campus.available ? (
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Check size={16} />
                    <span>Հասանելի</span>
                  </div>
                ) : (
                  <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Lock size={16} />
                    <span>Շուտով</span>
                  </div>
                )}
              </div>
              <p className={`text-lg ${campus.available ? 'text-gray-300' : 'text-gray-500'}`}>
                {campus.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-[#0d1b32]/50 border border-cyan-900/30 rounded-xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-xl text-gray-300 mb-2">
              Եվ ավելին շուտով...
            </p>
            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
              Մեկ անդամագրություն։ Անսահմանափակ հնարավորություններ։
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
