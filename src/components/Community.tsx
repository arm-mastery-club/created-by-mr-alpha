import { Users, MessageCircle, TrendingUp, Shield } from 'lucide-react';

export default function Community() {
  const features = [
    {
      icon: Users,
      title: 'Հայ Ձգտող Community',
      description: 'Մարդիկ ովքեր ուզում են ավելին կյանքից։ Ոչ թե միջակություն։'
    },
    {
      icon: MessageCircle,
      title: 'Ամենօրյա Փոխգործակցություն',
      description: 'Իրական մարդիկ, իրական արդյունքներ, իրական աջակցություն։'
    },
    {
      icon: TrendingUp,
      title: 'Մոտիվացիա Հասակակիցներից',
      description: 'Երբ տեսնում ես ուրիշներին հաղթելուց, դու էլ ես շարժվում առաջ։'
    },
    {
      icon: Shield,
      title: 'Ոչ Պարտվողների Մտածելակերպ',
      description: 'Մենք չենք ընդունում պատճառաբանություններ։ Միայն գործողություններ։'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a1628] via-[#0d1b32] to-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Community</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Դու միանում ես հայ ձգտող մարդկանց։ Մարդիկ ովքեր <span className="text-cyan-400 font-semibold">կառուցում են</span>, ոչ թե <span className="text-gray-500">սպասում</span>։
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0d1b32] to-[#0a1628] border border-cyan-900/30 rounded-xl p-8 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg shadow-lg shadow-cyan-500/30 flex-shrink-0">
                  <feature.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0d1b32]/50 border border-cyan-900/30 rounded-xl p-10 backdrop-blur-sm">
          <div className="text-center space-y-6">
            <p className="text-3xl text-white font-bold">
              Միայնակ դժվար է։
            </p>
            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
              Community-ի հետ՝ անխուսափելի։
            </p>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Երբ շրջապատված ես մարդկանցով ովքեր շարժվում են առաջ, դու էլ ես շարժվում։
              <br />
              Երբ շրջապատված ես միջակներով, դու մնում ես միջակ։
            </p>
            <div className="pt-6">
              <p className="text-cyan-400 font-semibold text-xl">
                Ընտրիր քո շրջապատը։
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
