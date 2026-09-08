const AFFILIATE_URL =
  "https://px.a8.net/svt/ejp?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU&a8ejpredirect=https%3A%2F%2Fcoconala.com%2Fcategories%2F3%3Fservice_kind%3D1";

const A8_PIXEL_URL =
  "https://www10.a8.net/0.gif?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU";

function CTA({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={AFFILIATE_URL}
      rel="nofollow sponsored"
      className="group relative flex min-h-[64px] w-full items-center justify-center overflow-hidden rounded-full border border-[#c5a46d]/75 bg-[linear-gradient(135deg,#24172f_0%,#392047_48%,#17101f_100%)] px-6 py-4 text-center font-serif text-[16px] font-semibold tracking-[0.08em] text-[#f7ecd2] shadow-[0_12px_40px_rgba(7,3,12,0.38),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:border-[#e2c78f] hover:shadow-[0_16px_46px_rgba(7,3,12,0.48)] active:scale-[0.99]"
    >
      <span className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#f3dfb1]/70 to-transparent" />
      <span>{children}</span>
      <span className="ml-3 text-[#d7bb82] transition-transform group-hover:translate-x-1">›</span>
    </a>
  );
}

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="text-center">
      {eyebrow && (
        <p className="mb-3 font-serif text-[10px] font-medium tracking-[0.34em] text-[#c8ad7a]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-[27px] font-medium leading-[1.5] tracking-[0.03em] text-[#f5f0eb]">
        {children}
      </h2>
      <div className="mx-auto mt-5 flex w-24 items-center gap-2">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b99a62]/70" />
        <span className="text-[8px] text-[#d8c18d]">✦</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b99a62]/70" />
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span className="absolute left-[9%] top-[12%] h-[2px] w-[2px] rounded-full bg-[#f8e6b8]/70 shadow-[0_0_10px_rgba(248,230,184,0.9)]" />
      <span className="absolute right-[12%] top-[19%] h-[1px] w-[1px] rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      <span className="absolute left-[18%] top-[42%] h-[1px] w-[1px] rounded-full bg-[#d7c5ff]/70 shadow-[0_0_9px_rgba(215,197,255,0.7)]" />
      <span className="absolute right-[22%] top-[54%] text-[9px] text-[#d9bd7d]/45">✦</span>
      <span className="absolute left-[10%] bottom-[15%] text-[7px] text-white/30">✧</span>
      <span className="absolute right-[9%] bottom-[22%] h-[2px] w-[2px] rounded-full bg-[#f8e6b8]/55 shadow-[0_0_10px_rgba(248,230,184,0.7)]" />
    </div>
  );
}

const PANEL =
  "rounded-[28px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] shadow-[0_18px_55px_rgba(0,0,0,0.23),inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-[2px]";

export default function LPPage() {
  return (
    <main className="min-h-screen bg-[#09070d] text-[#e9e2ec]">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#0d0912] shadow-[0_0_70px_rgba(0,0,0,0.65)]">
        <div className="border-b border-white/[0.05] bg-[#0a0710] px-4 py-2 text-center text-[9px] tracking-[0.16em] text-white/35">
          PR：このページには広告が含まれます
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden px-5 pb-10 pt-10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(91,55,126,0.38),transparent_38%),radial-gradient(circle_at_15%_35%,rgba(86,44,120,0.22),transparent_28%),radial-gradient(circle_at_90%_62%,rgba(66,36,95,0.22),transparent_30%),linear-gradient(180deg,#130d1b_0%,#0d0912_63%,#0a070e_100%)]" />
          <div className="absolute -top-10 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-[#bfa1ff]/10 blur-[75px]" />
          <Stars />

          <div className="relative">
            <p className="font-serif text-[10px] font-medium tracking-[0.38em] text-[#c6ad7b]">
              RUBY BBA
            </p>
            <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#ad8d58]/70 to-transparent" />

            <p className="mt-7 font-serif text-[12px] tracking-[0.16em] text-[#cfc3d8]">
              恋に振り回される女へ
            </p>

            <h1 className="mt-4 font-serif text-[37px] font-medium leading-[1.34] tracking-[0.035em] text-[#fffaf6] [text-shadow:0_2px_18px_rgba(210,190,255,0.09)]">
              彼の本音、
              <br />
              <span className="text-[#d9c18c]">知りたくない？</span>
            </h1>

            <div className="mx-auto mt-7 max-w-[340px]">
              <p className="font-serif text-[15px] font-normal leading-8 tracking-[0.02em] text-[#c8bdcf]">
                LINEの返信、会えない理由、あの態度。
                <br />
                考えれば考えるほど、分からなくなるものよ。
              </p>
            </div>

            <div className={`mx-auto mt-8 max-w-[350px] p-5 text-left ${PANEL}`}>
              <p className="text-center font-serif text-[11px] tracking-[0.22em] text-[#bfa66f]">
                THINKING ABOUT HIM?
              </p>
              <div className="mt-4 space-y-3.5 font-serif text-[15px] leading-7 text-[#eee8ef]">
                <p className="border-b border-white/[0.06] pb-3">「私のこと、どう思ってる？」</p>
                <p className="border-b border-white/[0.06] pb-3">「また連絡は来る？」</p>
                <p>「復縁できる可能性はある？」</p>
              </div>
            </div>

            <div className={`mx-auto mt-6 max-w-[350px] p-6 ${PANEL}`}>
              <p className="font-serif text-[10px] tracking-[0.28em] text-[#c3a76f]">FIRST BENEFIT</p>
              <p className="mt-2 font-serif text-[17px] text-[#e8dfeb]">
                初回 <span className="mx-1 text-[31px] leading-none text-[#e0c78e]">3,000円分</span> 無料
              </p>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#a98b56] to-transparent" />
              <p className="mt-4 text-[11px] leading-6 tracking-[0.04em] text-[#a99faf]">
                気になる彼のことを、まずは相談してみなさい。
              </p>
              <div className="mt-5">
                <CTA>彼の気持ちを相談してみる</CTA>
              </div>
              <p className="mt-3 text-[8px] leading-4 text-white/30">
                ※PR：提携サービスの紹介です。<br />
                ※特典内容・適用条件はリンク先でご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* MESSAGE STRIP */}
        <section className="relative overflow-hidden border-y border-[#a68853]/20 bg-[#120c18] px-6 py-8 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(84,51,112,0.20),transparent_56%)]" />
          <Stars />
          <p className="relative font-serif text-[21px] font-normal leading-9 tracking-[0.03em] text-[#f2edf4]">
            男の本音ってね、
            <br />
            <span className="text-[#d7bf89]">SNSにもLINEにも書いてないのよ。</span>
          </p>
        </section>

        {/* EMPATHY */}
        <section className="relative overflow-hidden px-5 py-11">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0d0912_0%,#110b18_48%,#0d0912_100%)]" />
          <div className="absolute -left-20 top-28 h-52 w-52 rounded-full bg-[#633e86]/10 blur-[80px]" />
          <div className="relative">
            <SectionTitle eyebrow="LOVE WORRIES">こんなモヤモヤ、ないかしら？</SectionTitle>

            <div className="mt-8 space-y-3">
              {[
                ["01", "最近、彼からの連絡が減った"],
                ["02", "会っている時は優しいのに、関係が進まない"],
                ["03", "別れた彼がまだ気になっている"],
                ["04", "待つべきか、諦めるべきか分からない"],
                ["05", "誰にも話せない恋をしている"],
              ].map(([num, text]) => (
                <div key={num} className={`${PANEL} flex items-center gap-4 px-4 py-4`}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#bda066]/35 bg-[#17101f] font-serif text-[10px] tracking-[0.08em] text-[#d0b77f]">
                    {num}
                  </span>
                  <p className="font-serif text-[14px] leading-6 tracking-[0.015em] text-[#ddd5e0]">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 border-l border-[#b99b62]/60 pl-5">
              <p className="font-serif text-[19px] font-normal leading-8 tracking-[0.03em] text-[#e9e1ea]">
                ひとつでも当てはまるなら、
                <br />
                <span className="text-[#d6bd85]">一人で答えを出そうとしなくていいわ。</span>
              </p>
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN ASK */}
        <section className="relative overflow-hidden border-y border-white/[0.04] px-5 py-11">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(85,51,112,0.20),transparent_38%),linear-gradient(180deg,#100b16_0%,#0b0810_100%)]" />
          <Stars />
          <div className="relative">
            <SectionTitle eyebrow="FORTUNE TELLING">相談できること</SectionTitle>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                ["01", "彼の本音"],
                ["02", "連絡の可能性"],
                ["03", "復縁"],
                ["04", "二人の今後"],
              ].map(([num, label]) => (
                <div key={label} className={`${PANEL} px-3 py-6 text-center`}>
                  <p className="font-serif text-[9px] tracking-[0.26em] text-[#a98d59]">{num}</p>
                  <div className="mx-auto my-3 h-px w-8 bg-[#a98d59]/40" />
                  <p className="font-serif text-[15px] tracking-[0.04em] text-[#eee9ef]">{label}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-center font-serif text-[14px] leading-8 tracking-[0.02em] text-[#b9afbf]">
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
        <section className="relative overflow-hidden px-5 py-12">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b0810_0%,#100b17_100%)]" />
          <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7e5aa3]/10 blur-[95px]" />
          <div className="relative rounded-[30px] border border-[#b4955e]/40 bg-[linear-gradient(180deg,rgba(34,24,43,0.92),rgba(16,11,22,0.96))] p-7 text-center shadow-[0_22px_65px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)]">
            <p className="font-serif text-[10px] tracking-[0.3em] text-[#c4aa75]">FIRST BENEFIT</p>
            <h2 className="mt-4 font-serif text-[24px] font-normal leading-[1.55] tracking-[0.02em] text-[#f2edf3]">
              初めてなら
              <br />
              <span className="text-[38px] text-[#dfc78f]">3,000円分無料</span>
            </h2>
            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#a88a55] to-transparent" />
            <p className="mt-6 font-serif text-[13px] leading-7 tracking-[0.02em] text-[#b7acbc]">
              「いきなりお金を払うのはちょっと…」
              <br />
              そんな人も、まずは特典の範囲から試してみればいいわ。
            </p>
            <div className="mt-6">
              <CTA>3,000円分無料で相談する</CTA>
            </div>
            <p className="mt-4 text-[8px] leading-4 text-white/28">
              ※特典内容は変更される場合があります。<br />
              必ずリンク先の最新条件をご確認ください。
            </p>
          </div>
        </section>

        {/* MADAM */}
        <section className="relative overflow-hidden border-y border-[#a98d59]/15 px-5 py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(83,49,110,0.22),transparent_35%),linear-gradient(180deg,#120c18_0%,#0c0810_100%)]" />
          <Stars />
          <div className="relative">
            <div className="text-center">
              <p className="font-serif text-[10px] tracking-[0.3em] text-[#c2a774]">MADAM&apos;S MESSAGE</p>
              <h2 className="mt-3 font-serif text-[28px] font-normal tracking-[0.03em] text-[#f4eef5]">マダムから一言</h2>
            </div>

            <div className={`${PANEL} mt-8 p-6`}>
              <p className="font-serif text-[16px] font-normal leading-9 tracking-[0.02em] text-[#ded6e1]">
                彼のSNSを何回見ても、
                <br />
                LINEを何回読み返しても、
                <br />
                <span className="text-[#dcc38a]">男の本音は書いてないわよ。</span>
                <br />
                <br />
                「彼はどう思ってるんだろう」って
                <br />
                一人で考え続けるより、
                <br />
                誰かに話した方が整理できることもあるわ。
                <br />
                <br />
                気になるなら、聞いてみなさい。
              </p>
            </div>

            <div className="mt-6">
              <CTA>彼の気持ちを相談してみる</CTA>
            </div>
          </div>
        </section>

        {/* NOTES */}
        <section className="bg-[#09070d] px-5 py-8">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.018] p-4 text-[8px] leading-5 text-white/30">
            このページは広告を含みます。リンク先サービスを利用した場合、当サイトが報酬を受け取ることがあります。占い結果や恋愛の成就を保証するものではありません。
          </div>

          <footer className="pb-24 pt-6 text-center font-serif text-[9px] tracking-[0.16em] text-white/24">
            © ruby_bba / bbauranai.jp
          </footer>
        </section>

        <img width="1" height="1" src={A8_PIXEL_URL} alt="" className="h-px w-px" />
      </div>

      {/* STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#a98d59]/15 bg-[#0a0710]/94 px-4 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-md">
        <div className="mx-auto max-w-[430px]">
          <CTA>彼の気持ちを見てみる</CTA>
        </div>
      </div>
    </main>
  );
}
