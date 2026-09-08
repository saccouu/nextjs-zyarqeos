const AFFILIATE_URL =
  "https://px.a8.net/svt/ejp?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU&a8ejpredirect=https%3A%2F%2Fcoconala.com%2Fcategories%2F3%3Fservice_kind%3D1";

const A8_PIXEL_URL =
  "https://www10.a8.net/0.gif?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU";

function CTA({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={AFFILIATE_URL}
      rel="nofollow sponsored"
      className="group relative flex min-h-[68px] w-full items-center justify-center overflow-hidden rounded-full border border-[#d1b374]/80 bg-gradient-to-r from-[#6d2456] via-[#a3356f] to-[#53204d] px-5 py-4 text-center text-[17px] font-black tracking-wide text-white shadow-[0_14px_34px_rgba(50,17,50,0.36),inset_0_1px_0_rgba(255,255,255,0.16)] transition active:scale-[0.985]"
    >
      <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#f3dfae]/90 to-transparent" />
      <span>{children}</span>
      <span className="ml-2 text-[#f0d89f] transition-transform group-hover:translate-x-1">›</span>
    </a>
  );
}

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="text-center">
      {eyebrow && (
        <p className="mb-2 text-[11px] font-black tracking-[0.2em] text-[#c9aa6a]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-[28px] font-black leading-[1.4] text-[#f7edf4]">
        {children}
      </h2>
      <div className="mx-auto mt-3 flex w-20 items-center gap-2">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c7a45e]/70" />
        <span className="text-[8px] text-[#d9bb79]">✦</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c7a45e]/70" />
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span className="absolute left-[8%] top-[14%] h-[2px] w-[2px] rounded-full bg-[#f5dfaa]/80 shadow-[0_0_9px_rgba(245,223,170,0.9)]" />
      <span className="absolute right-[11%] top-[22%] h-px w-px rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      <span className="absolute left-[15%] top-[46%] text-[8px] text-[#d8b970]/45">✦</span>
      <span className="absolute right-[17%] top-[56%] h-[2px] w-[2px] rounded-full bg-[#d8c8ff]/65 shadow-[0_0_8px_rgba(216,200,255,0.7)]" />
      <span className="absolute left-[9%] bottom-[13%] text-[7px] text-white/30">✧</span>
      <span className="absolute right-[8%] bottom-[19%] text-[8px] text-[#d8b970]/40">✦</span>
    </div>
  );
}

export default function LPPage() {
  return (
    <main className="min-h-screen bg-[#08060c] text-[#f0e8ef]">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#100a16] shadow-[0_0_70px_rgba(0,0,0,0.7)]">
        <div className="border-b border-white/[0.05] bg-[#0b0710] px-4 py-2 text-center text-[10px] tracking-wide text-white/55">
          PR：このページには広告が含まれます
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#3a2450_0%,#1a1025_42%,#0d0812_100%)] px-5 pb-8 pt-7 text-center">
          <div className="pointer-events-none absolute -left-14 top-14 h-44 w-44 rounded-full bg-[#8c5ab0]/16 blur-3xl" />
          <div className="pointer-events-none absolute -right-14 top-0 h-44 w-44 rounded-full bg-[#c7a45e]/13 blur-3xl" />
          <Stars />

          <p className="relative text-[12px] font-bold tracking-[0.14em] text-[#d4b879]">
            ruby_bba presents
          </p>

          <div className="relative mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-[#c8a45f]/45 bg-[#21152c]/75 px-4 py-2 text-[12px] font-bold text-[#f2e7ef] shadow-[0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur">
            <span>💋</span>
            <span>恋に振り回される女へ</span>
          </div>

          <h1 className="relative mt-5 font-serif text-[36px] font-black leading-[1.28] tracking-tight text-[#fff9fc] [text-shadow:0_2px_18px_rgba(236,214,255,0.08)]">
            彼の本音、
            <br />
            <span className="relative inline-block text-[#e7c981]">
              知りたくない？
              <span className="absolute -bottom-1 left-1/2 h-px w-[105%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4b163] to-transparent" />
            </span>
          </h1>

          <p className="relative mt-5 text-[15px] font-medium leading-8 text-[#d4c7d3]">
            LINEの返信、会えない理由、あの態度。
            <br />
            考えれば考えるほど、分からなくなるものよ。
          </p>

          <div className="relative mx-auto mt-6 max-w-[350px] rounded-[26px] border border-white/[0.09] bg-[#1d1327]/82 p-5 text-left shadow-[0_16px_42px_rgba(0,0,0,0.28)] backdrop-blur">
            <p className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#d2b370]/45 bg-[#3a1f3d] px-4 py-1.5 text-[11px] font-black text-[#f8edf4] shadow-[0_4px_18px_rgba(0,0,0,0.22)]">
              こんなこと、考えてない？
            </p>
            <div className="space-y-3 pt-2 text-[15px] font-bold text-[#f0e8ef]">
              <p>「私のこと、どう思ってる？」</p>
              <p>「また連絡は来る？」</p>
              <p>「復縁できる可能性はある？」</p>
            </div>
          </div>

          <div className="relative mt-7 rounded-[28px] border border-[#c8a65f]/40 bg-[linear-gradient(180deg,rgba(39,25,47,0.94),rgba(24,14,31,0.94))] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
            <p className="text-[12px] font-black tracking-[0.16em] text-[#d7b971]">
              初回特典
            </p>
            <p className="mt-1 font-serif text-[18px] font-black text-[#f7edf4]">
              ＼ 最大 <span className="text-[34px] leading-none text-[#e5c77f]">3,000円分</span> 無料 ／
            </p>
            <p className="mt-2 text-[12px] leading-5 text-[#c8bbc8]">
              気になる彼のことを、まずは相談してみなさい。
            </p>
            <div className="mt-4">
              <CTA>彼の気持ちを相談してみる</CTA>
            </div>
            <p className="mt-3 text-[9px] leading-4 text-[#9e929f]">
              ※PR：提携サービスの紹介です。
              <br />
              ※特典内容・適用条件はリンク先でご確認ください。
            </p>
          </div>
        </section>

        {/* MESSAGE STRIP */}
        <section className="relative overflow-hidden border-y border-[#c8a65f]/18 bg-[#24142e] px-6 py-6 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(126,80,153,0.18),transparent_58%)]" />
          <Stars />
          <p className="relative font-serif text-[22px] font-black leading-9">
            男の本音ってね、
            <br />
            <span className="text-[#e5c77f]">SNSにもLINEにも書いてないのよ。</span>
          </p>
        </section>

        {/* EMPATHY */}
        <section className="relative overflow-hidden px-5 py-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#100a16_0%,#160d1d_50%,#100a16_100%)]" />
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#765091]/10 blur-[90px]" />
          <Stars />
          <div className="relative">
            <SectionTitle eyebrow="LOVE WORRIES">こんなモヤモヤ、ないかしら？</SectionTitle>

            <div className="mt-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {[
                ["01", "最近、彼からの連絡が減った"],
                ["02", "会っている時は優しいのに、関係が進まない"],
                ["03", "別れた彼がまだ気になっている"],
                ["04", "待つべきか、諦めるべきか分からない"],
                ["05", "誰にも話せない恋をしている"],
              ].map(([num, text]) => (
                <div key={num} className="flex items-center gap-4 px-1 py-4">
                  <span className="w-8 shrink-0 font-serif text-[11px] font-black tracking-[0.08em] text-[#d2b36e]">
                    {num}
                  </span>
                  <p className="text-[14px] font-bold leading-6 text-[#e9dfe8]">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 border-l-2 border-[#c8a65f]/65 pl-5">
              <p className="font-serif text-[21px] font-black leading-8 text-[#f1e6ee]">
                ひとつでも当てはまるなら、
                <br />
                一人で答えを出そうとしなくていいわ。
              </p>
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN ASK */}
        <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#140c1c] px-5 py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(111,73,137,0.18),transparent_45%)]" />
          <Stars />
          <div className="relative">
            <SectionTitle eyebrow="FORTUNE TELLING">相談できること</SectionTitle>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {[
                ["💌", "彼の本音"],
                ["📱", "連絡の可能性"],
                ["💔", "復縁"],
                ["💞", "二人の今後"],
              ].map(([icon, label]) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-[#c8a65f]/22 bg-[#21152b]/80 px-3 py-5 text-center shadow-[0_10px_28px_rgba(0,0,0,0.22)]"
                >
                  <div className="text-3xl">{icon}</div>
                  <p className="mt-2 text-[14px] font-black text-[#f2e8ef]">{label}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-[14px] font-medium leading-7 text-[#c8bbc7]">
              「これって脈あり？」みたいな小さなことでもいいの。
              <br />
              あなたの状況を話してみなさい。
            </p>

            <div className="mt-6">
              <CTA>今の恋を相談してみる</CTA>
            </div>
          </div>
        </section>

        {/* OFFER */}
        <section className="relative overflow-hidden px-5 py-11">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#100a16_0%,#0c0811_100%)]" />
          <div className="pointer-events-none absolute left-1/2 top-10 h-60 w-60 -translate-x-1/2 rounded-full bg-[#9b6eb7]/11 blur-3xl" />
          <Stars />
          <div className="relative rounded-[30px] border border-[#c7a45e]/44 bg-[linear-gradient(180deg,rgba(38,24,46,0.96),rgba(20,12,27,0.97))] p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.04)]">
            <p className="text-[11px] font-black tracking-[0.18em] text-[#d2b36e]">FIRST BENEFIT</p>
            <h2 className="mt-2 font-serif text-[28px] font-black leading-[1.4] text-[#f7edf4]">
              初めてなら
              <br />
              <span className="text-[42px] text-[#e4c57c]">3,000円分無料</span>
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#c7a45e] to-transparent" />
            <p className="mt-5 text-[14px] font-medium leading-7 text-[#c8bbc7]">
              「いきなりお金を払うのはちょっと…」
              <br />
              そんな人も、まずは特典の範囲から試してみればいいわ。
            </p>
            <div className="mt-6">
              <CTA>3,000円分無料で相談する</CTA>
            </div>
            <p className="mt-3 text-[9px] leading-4 text-[#9e929f]">
              ※特典内容は変更される場合があります。
              <br />
              必ずリンク先の最新条件をご確認ください。
            </p>
          </div>
        </section>

        {/* MADAM */}
        <section className="relative overflow-hidden border-y border-[#c7a45e]/16 bg-[#24142e] px-5 py-11 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(134,88,162,0.18),transparent_44%)]" />
          <Stars />
          <div className="relative">
            <div className="text-center">
              <p className="text-[11px] font-black tracking-[0.2em] text-[#d5b873]">MADAM'S MESSAGE</p>
              <h2 className="mt-2 font-serif text-[29px] font-black">マダムから一言💋</h2>
            </div>

            <div className="mt-7 rounded-[28px] border border-white/10 bg-[#150d1c]/58 p-6 shadow-inner">
              <p className="font-serif text-[18px] font-bold leading-9 text-[#fff8fb]">
                彼のSNSを何回見ても、
                <br />
                LINEを何回読み返しても、
                <br />
                <span className="text-[#e5c77f]">男の本音は書いてないわよ。</span>
                <br />
                <br />
                「彼はどう思ってるんだろう」って
                <br />
                一人で考え続けるより、
                <br />
                誰かに話した方が整理できることもあるわ。
                <br />
                <br />
                気になるなら、聞いてみなさい💋
              </p>
            </div>

            <div className="mt-6">
              <CTA>彼の気持ちを相談してみる</CTA>
            </div>
          </div>
        </section>

        {/* NOTES */}
        <section className="bg-[#0f0915] px-5 py-7">
          <div className="rounded-2xl border border-white/[0.07] bg-[#17101e] p-4 text-[9px] leading-5 text-[#9f939f]">
            このページは広告を含みます。リンク先サービスを利用した場合、当サイトが報酬を受け取ることがあります。占い結果や恋愛の成就を保証するものではありません。
          </div>

          <footer className="pb-24 pt-5 text-center text-[10px] text-[#756b77]">
            © ruby_bba / bbauranai.jp
          </footer>
        </section>

        <img width="1" height="1" src={A8_PIXEL_URL} alt="" className="h-px w-px" />
      </div>

      {/* STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#c8a65f]/15 bg-[#0d0812]/94 px-4 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2 backdrop-blur">
        <div className="mx-auto max-w-[430px]">
          <CTA>彼の気持ちを見てみる</CTA>
        </div>
      </div>
    </main>
  );
}
