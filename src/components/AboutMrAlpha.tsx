export default function AboutMrAlpha() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Mr. Alpha</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-xl text-white font-semibold">
                Mr. Alpha-ն <span className="text-cyan-400">գաղտնի անձ</span> է։
              </p>

              <p>
                Նա վաստակել է հսկայական գումարներ։ Նա կարող էր ապրել լռության մեջ և վայելել իր հաջողությունը։
              </p>

              <p>
                Բայց նա ընտրել է <span className="text-cyan-400 font-semibold">ուսուցանել</span>։
              </p>

              <p>
                Նա ընտրել է <span className="text-cyan-400 font-semibold">գաղտնիությունը</span> հռչակի փոխարեն։
              </p>

              <p className="text-xl text-white font-semibold pt-4">
                Ինչու։
              </p>

              <p>
                Որովհետև իրական հաջողությունը չի ապացուցվում social media-ում։ Իրական հաջողությունը չի ապացուցվում ոչ մեկին։
              </p>

              <p>
                Mr. Alpha-ն <span className="text-cyan-400 font-semibold">սովորեցնում է սկզբունքներ</span>, ոչ թե ego։
              </p>

              <p>
                Նա ցույց է տալիս <span className="text-cyan-400 font-semibold">համակարգեր</span>, ոչ թե հրաշքներ։
              </p>

              <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold pt-6">
                Արդյունքներն են խոսում։ Ոչ թե անունը։
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src={`${import.meta.env.BASE_URL}mr-alpha-arm.jpg`}
                alt="Mr. Alpha"
                className="relative rounded-2xl border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/30 w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-br from-[#0d1b32] to-[#0a1628] border border-cyan-900/30 rounded-xl p-8 text-center backdrop-blur-sm">
            <p className="text-gray-300 text-lg mb-4">
              "Ես ստեղծել եմ Arm Mastery Club որպեսզի յուրաքանչյուր հայ ունենա հնարավորություն սովորելու և ապրելու ազատ։<br />Հուսով եմ կհանդիպենք Arm Mastery Club-ում"
            </p>
            <p className="text-cyan-400 font-semibold text-xl">
              — Mr. Alpha
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
