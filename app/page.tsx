const AFFILIATE_URL =
  "https://px.a8.net/svt/ejp?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU&a8ejpredirect=https%3A%2F%2Fcoconala.com%2Fcategories%2F3%3Fservice_kind%3D1";

const A8_PIXEL_URL =
  "https://www10.a8.net/0.gif?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU";

function CTA({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={AFFILIATE_URL}
      rel="nofollow sponsored"
      className="group relative flex min-h-[68px] w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#c51f62] via-[#e23e79] to-[#9e286d] px-5 py-4 text-center text-[17px] font-black tracking-wide text-white shadow-[0_12px_30px_rgba(173,30,92,0.30)] transition active:scale-[0.985]"
    >
      <span className="absolute inset-x-8 top-0 h-px bg-white/60" />
      <span>{children}</span>
      <span className="ml-2 transition-transform group-hover:translate-x-1">›</span>
    </a>
  );
}

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="text-center">
      {eyebrow && (
        <p className="mb-2 text-[11px] font-black tracking-[0.2em] text-[#a76a3d]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-[28px] font-black leading-[1.4] text-[#4b2336]">
        {children}
      </h2>
      <div className="mx-auto mt-3 h-[2px] w-14 bg-gradient-to-r from-transparent via-[#c49356] to-transparent" />
    </div>
  );
}

export default function LPPage() {
  return (
    <main className="min-h-screen bg-[#efe8df] text-[#3d2b31]">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#fffaf5] shadow-2xl">
        <div className="bg-[#4d1f35] px-4 py-2 text-center text-[10px] tracking-wide text-white/80">
          PR：このページには広告が含まれます
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#fff8f0_0%,#f9e8e6_46%,#ecd3d8_100%)] px-5 pb-8 pt-7 text-center">
          <div className="pointer-events-none absolute -left-12 top-16 h-40 w-40 rounded-full bg-[#d8a3b5]/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-12 top-0 h-40 w-40 rounded-full bg-[#d9b77b]/25 blur-3xl" />

          <p className="relative text-[12px] font-bold tracking-[0.14em] text-[#8d5265]">
            ruby_bba presents
          </p>

          <div className="relative mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-[#cfa9b5] bg-white/70 px-4 py-2 text-[12px] font-bold text-[#7d4057] shadow-sm backdrop-blur">
            <span>💋</span>
            <span>恋に振り回される女へ</span>
          </div>

          <h1 className="relative mt-5 font-serif text-[36px] font-black leading-[1.28] tracking-tight text-[#4b2336]">
            彼の本音、
            <br />
            <span className="relative inline-block text-[#bf2e64]">
              知りたくない？
              <span className="absolute -bottom-1 left-1/2 h-2 w-[105%] -translate-x-1/2 rounded-full bg-[#e3b6c6]/45" />
            </span>
          </h1>

          <p className="relative mt-5 text-[15px] font-medium leading-8 text-[#5d414b]">
            LINEの返信、会えない理由、あの態度。
            <br />
            考えれば考えるほど、分からなくなるものよ。
          </p>

          <div className="relative mx-auto mt-6 max-w-[350px] rounded-[26px] border border-[#e3c8cf] bg-white/80 p-5 text-left shadow-[0_15px_40px_rgba(82,36,54,0.10)] backdrop-blur">
            <p className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#6a2947] px-4 py-1.5 text-[11px] font-black text-white">
              こんなこと、考えてない？
            </p>
            <div className="space-y-3 pt-2 text-[15px] font-bold text-[#4a3039]">
              <p>「私のこと、どう思ってる？」</p>
              <p>「また連絡は来る？」</p>
              <p>「復縁できる可能性はある？」</p>
            </div>
          </div>

          <div className="relative mt-7 rounded-[28px] border border-[#d8b27a]/50 bg-[#fffdf9] p-5 shadow-[0_18px_45px_rgba(98,54,50,0.12)]">
            <p className="text-[12px] font-black tracking-[0.16em] text-[#966332]">
              初回特典
            </p>
            <p className="mt-1 font-serif text-[18px] font-black text-[#4b2336]">
              ＼ 最大 <span className="text-[34px] leading-none text-[#bf2e64]">3,000円分</span> 無料 ／
            </p>
            <p className="mt-2 text-[12px] leading-5 text-[#7c646b]">
              気になる彼のことを、まずは相談してみなさい。
            </p>
            <div className="mt-4">
              <CTA>彼の気持ちを相談してみる</CTA>
            </div>
            <p className="mt-3 text-[9px] leading-4 text-[#97858b]">
              ※PR：提携サービスの紹介です。
              <br />
              ※特典内容・適用条件はリンク先でご確認ください。
            </p>
          </div>
        </section>

        {/* MESSAGE STRIP */}
        <section className="bg-[#4d1f35] px-6 py-6 text-center text-white">
          <p className="font-serif text-[22px] font-black leading-9">
            男の本音ってね、
            <br />
            <span className="text-[#f6c9d7]">SNSにもLINEにも書いてないのよ。</span>
          </p>
        </section>

        {/* EMPATHY */}
        <section className="px-5 py-10">
          <SectionTitle eyebrow="LOVE WORRIES">こんなモヤモヤ、ないかしら？</SectionTitle>

          <div className="mt-7 space-y-3">
            {[
              ["01", "最近、彼からの連絡が減った"],
              ["02", "会っている時は優しいのに、関係が進まない"],
              ["03", "別れた彼がまだ気になっている"],
              ["04", "待つべきか、諦めるべきか分からない"],
              ["05", "誰にも話せない恋をしている"],
            ].map(([num, text]) => (
              <div
                key={num}
                className="flex items-center gap-4 rounded-2xl border border-[#ead9d2] bg-white px-4 py-4 shadow-[0_8px_25px_rgba(76,46,50,0.06)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5e4e8] font-serif text-[12px] font-black text-[#ad315e]">
                  {num}
                </span>
                <p className="text-[14px] font-bold leading-6 text-[#4d3740]">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-[26px] bg-[#f8eee9] px-5 py-6 text-center">
            <p className="font-serif text-[21px] font-black leading-8 text-[#6d2948]">
              ひとつでも当てはまるなら、
              <br />
              一人で答えを出そうとしなくていいわ。
            </p>
          </div>
        </section>

        {/* WHAT YOU CAN ASK */}
        <section className="bg-[#f6ebe7] px-5 py-10">
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
                className="rounded-[22px] border border-white bg-white/90 px-3 py-5 text-center shadow-[0_8px_20px_rgba(92,52,60,0.07)]"
              >
                <div className="text-3xl">{icon}</div>
                <p className="mt-2 text-[14px] font-black text-[#5f3245]">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-[14px] font-medium leading-7 text-[#644c55]">
            「これって脈あり？」みたいな小さなことでもいいの。
            <br />
            あなたの状況を話してみなさい。
          </p>

          <div className="mt-6">
            <CTA>今の恋を相談してみる</CTA>
          </div>
        </section>

        {/* OFFER */}
        <section className="relative overflow-hidden px-5 py-11">
          <div className="pointer-events-none absolute left-1/2 top-10 h-60 w-60 -translate-x-1/2 rounded-full bg-[#e9cfc5]/40 blur-3xl" />
          <div className="relative rounded-[30px] border border-[#d9b77b] bg-[#fffdf8] p-6 text-center shadow-[0_18px_45px_rgba(82,46,38,0.10)]">
            <p className="text-[11px] font-black tracking-[0.18em] text-[#9b6a36]">FIRST BENEFIT</p>
            <h2 className="mt-2 font-serif text-[28px] font-black leading-[1.4] text-[#4b2336]">
              初めてなら
              <br />
              <span className="text-[42px] text-[#bf2e64]">3,000円分無料</span>
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-[#d9b77b]" />
            <p className="mt-5 text-[14px] font-medium leading-7 text-[#655057]">
              「いきなりお金を払うのはちょっと…」
              <br />
              そんな人も、まずは特典の範囲から試してみればいいわ。
            </p>
            <div className="mt-6">
              <CTA>3,000円分無料で相談する</CTA>
            </div>
            <p className="mt-3 text-[9px] leading-4 text-[#97858b]">
              ※特典内容は変更される場合があります。
              <br />
              必ずリンク先の最新条件をご確認ください。
            </p>
          </div>
        </section>

        {/* MADAM */}
        <section className="bg-[#4d1f35] px-5 py-11 text-white">
          <div className="text-center">
            <p className="text-[11px] font-black tracking-[0.2em] text-[#e5b6c4]">MADAM'S MESSAGE</p>
            <h2 className="mt-2 font-serif text-[29px] font-black">マダムから一言💋</h2>
          </div>

          <div className="mt-7 rounded-[28px] border border-white/15 bg-white/5 p-6 shadow-inner">
            <p className="font-serif text-[18px] font-bold leading-9 text-[#fff8f5]">
              彼のSNSを何回見ても、
              <br />
              LINEを何回読み返しても、
              <br />
              <span className="text-[#ffc7d8]">男の本音は書いてないわよ。</span>
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
        </section>

        {/* NOTES */}
        <section className="px-5 py-7">
          <div className="rounded-2xl border border-[#e9ddd8] bg-white p-4 text-[9px] leading-5 text-[#8b7b80]">
            このページは広告を含みます。リンク先サービスを利用した場合、当サイトが報酬を受け取ることがあります。占い結果や恋愛の成就を保証するものではありません。
          </div>

          <footer className="pb-24 pt-5 text-center text-[10px] text-[#a09196]">
            © ruby_bba / bbauranai.jp
          </footer>
        </section>

        <img width="1" height="1" src={A8_PIXEL_URL} alt="" className="h-px w-px" />
      </div>

      {/* STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#ead8d1] bg-[#fffaf5]/95 px-4 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2 backdrop-blur">
        <div className="mx-auto max-w-[430px]">
          <CTA>彼の気持ちを見てみる</CTA>
        </div>
      </div>
    </main>
  );
}
