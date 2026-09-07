const AFFILIATE_URL =
  "https://px.a8.net/svt/ejp?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU&a8ejpredirect=https%3A%2F%2Fcoconala.com%2Fcategories%2F3%3Fservice_kind%3D1";

const A8_PIXEL_URL =
  "https://www10.a8.net/0.gif?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU";

function AffiliateButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={AFFILIATE_URL}
      rel="nofollow sponsored"
      className="flex min-h-[60px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-4 text-center text-lg font-bold text-white shadow-lg transition active:scale-[0.99]"
    >
      {children}
    </a>
  );
}

export default function LPPage() {
  return (
    <main className="min-h-screen bg-[#1a142d] text-white">
      <div className="mx-auto w-full max-w-md space-y-5 px-5 pb-28 pt-5">
        <div className="text-center text-[11px] text-gray-400">
          PR：このページには広告が含まれます
        </div>

        <section className="rounded-3xl border border-pink-500/30 bg-[#2d2448] p-6 text-center shadow-xl">
          <p className="mb-2 text-sm font-medium text-pink-200">
            💋 ruby_bba｜恋のモヤモヤ相談
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-pink-400">
            🔮 彼の本音、
            <br />
            知りたくない？
          </h1>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-[15px] font-medium leading-8">
            <p>「私のこと、どう思ってる？」</p>
            <p>「また連絡は来る？」</p>
            <p>「復縁できる可能性はある？」</p>
          </div>

          <p className="mt-5 text-[15px] leading-7 text-gray-100">
            男の気持ちって、考えれば考えるほど
            <br />
            分からなくなるものよ💋
            <br />
            <br />
            一人で答えを探し続けるくらいなら、
            <br />
            <span className="font-bold text-white">
              恋愛の悩みを占い師に相談してみなさい。
            </span>
          </p>

          <p className="mt-5 text-sm font-bold text-white">
            ＼ 初回 <span className="text-xl text-yellow-300">3,000円分無料</span> ／
          </p>

          <div className="mt-3">
            <AffiliateButton>🔮 彼の気持ちを相談してみる →</AffiliateButton>
          </div>

          <p className="mt-3 text-[10px] leading-5 text-gray-400">
            ※PR：提携サービスの紹介です。
            <br />
            ※無料特典の適用条件・対象サービス等はリンク先をご確認ください。
          </p>
        </section>

        <section className="rounded-3xl border border-pink-500/30 bg-[#2d2448] p-6 shadow-xl">
          <h2 className="text-center text-2xl font-bold text-pink-300">
            💭 こんな悩みがあるなら
          </h2>

          <ul className="mt-5 divide-y divide-white/10">
            {[
              "最近、彼からの連絡が減った",
              "彼がどう思っているのか分からない",
              "別れた彼と復縁したい",
              "このまま待っていていいのか不安",
              "誰にも話せない恋をしている",
            ].map((item) => (
              <li key={item} className="flex gap-3 py-3 text-[15px] font-medium leading-7">
                <span className="mt-0.5 text-pink-400">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-[15px] leading-7 text-gray-100">
            ひとつでも当てはまるなら、
            <span className="font-bold text-white">
              一人でずっと考え込まなくていいのよ。
            </span>
            あなたの状況を直接話して、占ってもらいなさい💋
          </p>

          <div className="mt-5">
            <AffiliateButton>✨ 今すぐ相談してみる →</AffiliateButton>
          </div>
        </section>

        <section className="rounded-3xl border border-pink-500/30 bg-[#2d2448] p-6 shadow-xl">
          <h2 className="text-center text-2xl font-bold text-pink-300">
            🎁 初回3,000円分無料
          </h2>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
            <p className="text-2xl font-extrabold">
              初回特典で
              <br />
              <span className="text-yellow-300">3,000円分無料</span>
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              「いきなりお金を払うのはちょっと…」という人も、
              まずは無料特典の範囲から試してみればいいわ。
            </p>
          </div>

          <p className="mt-5 text-[15px] leading-7 text-gray-100">
            悩みを話すだけでも、気持ちが整理できることはあるものよ。
            彼の気持ち・復縁・今後の恋について、気になることを相談してみなさい。
          </p>

          <div className="mt-5">
            <AffiliateButton>💬 3,000円分無料で相談する →</AffiliateButton>
          </div>

          <p className="mt-3 text-center text-[10px] leading-5 text-gray-400">
            ※特典内容は変更される場合があります。
            <br />
            必ずリンク先の最新条件をご確認ください。
          </p>
        </section>

        <section className="rounded-3xl border border-pink-500/30 bg-[#2d2448] p-6 shadow-xl">
          <h2 className="text-center text-2xl font-bold text-pink-300">
            💋 マダムから一言
          </h2>

          <p className="mt-5 text-[16px] font-medium leading-8 text-gray-100">
            彼のSNSを何回見ても、LINEを何回読み返しても、
            <span className="font-bold text-pink-300">
              男の本音は書いてないわよ。
            </span>
            <br />
            <br />
            「彼はどう思ってるんだろう」って一人で考え続けるより、誰かに話した方が気持ちが整理できることもあるわ。
            <br />
            <br />
            気になるなら、無料特典があるうちに、恋のモヤモヤを話してみなさい💋
          </p>

          <div className="mt-5">
            <AffiliateButton>🔮 彼の気持ちを相談してみる →</AffiliateButton>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-[10px] leading-5 text-gray-400">
          このページは広告を含みます。リンク先サービスを利用した場合、
          当サイトが報酬を受け取ることがあります。
          占い結果や恋愛の成就を保証するものではありません。
        </section>

        <footer className="pb-2 text-center text-[10px] leading-5 text-gray-500">
          © ruby_bba / bbauranai.jp
        </footer>

        <img
          width="1"
          height="1"
          src={A8_PIXEL_URL}
          alt=""
          className="h-px w-px"
        />
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#1a142d]/95 px-4 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2 backdrop-blur">
        <div className="mx-auto max-w-md">
          <AffiliateButton>💬 彼の気持ちを相談する →</AffiliateButton>
        </div>
      </div>
    </main>
  );
}
