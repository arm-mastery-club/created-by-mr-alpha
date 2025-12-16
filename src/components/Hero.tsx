export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-b from-[#0a1628] via-[#0d1b32] to-[#0a1628]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={`${import.meta.env.BASE_URL}arm_mastery_club.png`}
            alt="Arm Mastery Club"
            style={{ marginTop: '3rem' }}
            className="mx-auto mb-6 h-32 w-auto"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="text-white">
            ԴՈՒՐՍ ԱՐԻ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ՀԱՄԱԿԱՐԳԻՑ</span>
          </span>
          <br />
          <span className="text-white">ԿԱՄ ՄՆԱ ՀԱՎԵՐԺ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ԳԵՐԻ</span></span>
        </h1>

        <div className="max-w-3xl mx-auto space-y-6 text-gray-300 text-lg md:text-xl mb-12">
          <p>
            Դպրոց → համալսարան → 9-5 աշխատանք → աշխատավարձի <span className="text-cyan-400 font-semibold">ստրկություն</span>
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold">
            Կամ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Arm Mastery Club</span>
          </p>
          <p>
            Միակ հայկական հարթակը, որը սովորեցնում է ինչպես <span className="text-cyan-400 font-semibold">ՎԱՍՏԱԿԵԼ ՓՈՂ</span>, ոչ թե տեսություն։
          </p>
          <p className="text-gray-400">
            Սա <span className="text-cyan-400 font-semibold">այլընտրանքային ճանապարհ</span> է։ Սա <span className="text-cyan-400 font-semibold">համակարգ</span> է։
          </p>
        </div>

        <div className="bg-[#0d1b32]/50 border border-cyan-900/30 rounded-xl p-8 max-w-2xl mx-auto mb-12 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-3xl md:text-4xl text-gray-500 line-through">$77</span>
            <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">$27</span>
            <span className="text-gray-300 text-xl">/ամիս</span>
          </div>
          <p className="text-yellow-400 font-semibold mb-6">
            Գինը շուտով կբարձրանա
          </p>
          <a
            href="https://whop.com/arm-mastery-club/arm-mastery-club-e7/?utm_source=store_page&funnelId=store_2bf61255-9fcb-401d-8489-3cb4e2155aee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-lg font-bold text-xl hover:from-cyan-400 hover:to-blue-400 transition-all shadow-xl shadow-cyan-500/50 hover:shadow-cyan-400/60 hover:scale-105"
          >
            Միացիր Հիմա
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          Չեղարկիր ցանկացած պահի
        </p>
      </div>
    </section>
  );
}
