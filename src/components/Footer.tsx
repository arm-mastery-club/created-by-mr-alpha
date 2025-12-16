export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-cyan-900/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src={`${import.meta.env.BASE_URL}arm_mastery_club.png`}
              alt="Arm Mastery Club"
              className="h-16 w-auto"
            />
            <p className="text-gray-400 text-center md:text-left max-w-md">
              Միակ հայկական հարթակը որտեղ սովորում են ինչպես <span className="text-cyan-400 font-semibold">իրականում վաստակել փող</span>։
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white font-semibold text-lg mb-2">
              Created by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Mr. Alpha</span>
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Արդյունքներն են խոսում։ Ոչ թե անունը։
            </p>
            <a
              href="https://whop.com/arm-mastery-club/arm-mastery-club-e7/?utm_source=store_page&funnelId=store_2bf61255-9fcb-401d-8489-3cb4e2155aee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/50"
            >
              Միացիր Հիմա
            </a>
          </div>
        </div>

        <div className="border-t border-cyan-900/30 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Arm Mastery Club. Բոլոր իրավունքները պաշտպանված են։
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Արդյունքները անհատական են։ Ոչ մի երաշխիք հատուկ եկամուտների համար։
          </p>
        </div>
      </div>
    </footer>
  );
}
