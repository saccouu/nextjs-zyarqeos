const AFFILIATE_URL =
  "https://px.a8.net/svt/ejp?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU&a8ejpredirect=https%3A%2F%2Fcoconala.com%2Fcategories%2F3%3Fservice_kind%3D1";

const A8_PIXEL_URL =
  "https://www10.a8.net/0.gif?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU";

function AffiliateButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={AFFILIATE_URL}
      rel="nofollow sponsored"
      className="cta"
    >
      {children}
    </a>
  );
}

export default function LPPage() {
  return (
    <>
      <main className="page">
        <div className="pr">
          PR：このページには広告が含まれます
        </div>

        <section className="panel hero">
          <div className="panel-content">
            <p className="eyebrow">
              💋 ruby_bba｜恋のモヤモヤ相談
            </p>

            <h1>
              <span className="title-white">🔮 彼の本音、</span>
              <br />
              <span className="title-gold">知りたくない？</span>
            </h1>

            <div className="questions">
            <p>「私のこと、どう思ってる？」</p>
            <p>「また連絡は来る？」</p>
            <p>「復縁できる可能性はある？」</p>
            <p>「未読・既読スルーの本当の理由は？」</p>            
            </div>

            <p className="lead">
              男の気持ちって、考えれば考えるほど
              <br />
              分からなくなるものよ💋
              <br />
              <br />
              一人で答えを探し続けるくらいなら、
              <br />
              <strong>
                プロの恋愛占い師に相談してみなさい。
              </strong>
            </p>

            <p className="offer">
              ＼ 初回 <span>3,000円分無料</span> ／
            </p>

            <AffiliateButton>
              🔮 彼の気持ちを相談してみる →
            </AffiliateButton>

            <p className="fineprint">
              ※PR：提携サービスの紹介です。
              <br />
              ※無料特典の適用条件・対象サービス等はリンク先をご確認ください。
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panel-content">
            <p className="small-label">こんな人へ</p>

            <h2>
              💭 こんな悩みがあるなら
            </h2>

            <ul className="check-list">
              {[
              "最近、彼からのLINEが減った",
              "未読or既読スルーされている",
              "彼がどう思っているのか分からなくて不安",
              "別れた彼とやり直したい・復縁したい",
              "好きな人との関係をハッキリさせたい",
              "誰にも話せない秘密の恋をしている",
              ].map((item) => (
                <li key={item}>
                  <span className="check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="body-copy">
              こんな悩みがあるなら、
              <strong>
                一人でずっと考え込まなくていいのよ。
              </strong>
              あなたの状況を直接話して、占ってもらいなさい💋
            </p>

            <AffiliateButton>
              ✨ 今すぐ相談してみる →
            </AffiliateButton>
          </div>
        </section>

        <section className="panel">
          <div className="panel-content">
            <h2>
              🎁 初回3,000円分無料
            </h2>

            <div className="benefit">
              <p className="benefit-title">
                初回特典で
                <br />
                <span>3,000円分無料</span>
              </p>

              <p className="benefit-copy">
                「いきなりお金を払うのはちょっと…」という人も、
                まずは無料特典の範囲から試してみればいいわ。
              </p>
            </div>

            <p className="body-copy">
              悩みを話すだけでも、気持ちが整理できることはあるものよ。
              彼の気持ち・復縁・今後の恋について、気になることを相談してみなさい。
            </p>

            <AffiliateButton>
              💬 3,000円分無料で相談する →
            </AffiliateButton>

            <p className="fineprint">
              ※特典内容は変更される場合があります。
              <br />
              必ずリンク先の最新条件をご確認ください。
            </p>
          </div>
        </section>

        <section className="panel madam">
          <div className="panel-content">
            <h2>
              💋 マダムから一言
            </h2>

            <p className="madam-copy">
              彼のSNSを何回見ても、LINEを何回読み返しても、
              <strong>
                男の本音は書いてないわよ。
              </strong>
              <br />
              <br />
              「彼はどう思ってるんだろう」って一人で考え続けるより、
              誰かに話した方が気持ちが整理できることもあるわ。
              <br />
              <br />
              気になるなら、無料特典があるうちに恋のモヤモヤを話してみなさい💋             
            </p>

            <AffiliateButton>
              🔮 彼の気持ちを相談してみる →
            </AffiliateButton>
          </div>
        </section>

        <section className="notice">
          このページは広告を含みます。リンク先サービスを利用した場合、
          当サイトが報酬を受け取ることがあります。
          占い結果や恋愛の成就を保証するものではありません。
        </section>

        <footer>
          © ruby_bba / bbauranai.jp
        </footer>

        <img
          width="1"
          height="1"
          src={A8_PIXEL_URL}
          alt=""
          className="tracking"
        />
      </main>

      <div className="sticky-wrap">
        <div className="sticky-inner">
          <AffiliateButton>
            💬 彼の気持ちを相談する →
          </AffiliateButton>
        </div>
      </div>

      <style>{`
        :root {
          --page-bg: #171128;
          --panel-top: #392954;
          --panel-bottom: #2d2448;
          --text: #fffafc;
          --muted: #c8bfd0;
          --pink: #ff9dce;
          --gold: #e6c978;
          --gold-soft: rgba(230, 201, 120, .35);
        }

        * {
          box-sizing: border-box;
        }

        html {
          background: #171128;
        }

        body {
          margin: 0;
          color: var(--text);
          background:
            radial-gradient(circle at 50% 0%, rgba(160, 103, 201, .17), transparent 30%),
            var(--page-bg);
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Hiragino Kaku Gothic ProN",
            "Yu Gothic",
            "YuGothic",
            "Noto Sans JP",
            "Segoe UI",
            sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .page {
          width: 100%;
          max-width: 448px;
          min-height: 100vh;
          margin: 0 auto;
          padding: 18px 16px 118px;
        }

        .pr {
          margin-bottom: 10px;
          text-align: center;
          color: #a99fb2;
          font-size: 10px;
          line-height: 1.5;
        }

        .panel {
          position: relative;
          overflow: hidden;
          margin-bottom: 18px;
          padding: 24px 20px;
          border: 1px solid rgba(230, 201, 120, .30);
          border-radius: 22px;
          background:
            radial-gradient(circle at 18% 12%, rgba(255,255,255,.08), transparent 18%),
            radial-gradient(circle at 82% 22%, rgba(223,185,255,.10), transparent 22%),
            linear-gradient(180deg, var(--panel-top), var(--panel-bottom));
          box-shadow:
            0 16px 36px rgba(0,0,0,.24),
            inset 0 1px 0 rgba(255,255,255,.06);
        }

        .panel::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .72;
          background-image:
            radial-gradient(circle at 9% 12%, rgba(255,255,255,.95) 0 .8px, transparent 1.7px),
            radial-gradient(circle at 23% 31%, rgba(230,201,120,.80) 0 .8px, transparent 1.8px),
            radial-gradient(circle at 87% 17%, rgba(255,255,255,.78) 0 .7px, transparent 1.6px),
            radial-gradient(circle at 76% 39%, rgba(230,201,120,.70) 0 .9px, transparent 1.9px),
            radial-gradient(circle at 12% 67%, rgba(218,195,245,.76) 0 .75px, transparent 1.65px),
            radial-gradient(circle at 91% 74%, rgba(255,255,255,.68) 0 .8px, transparent 1.7px),
            radial-gradient(circle at 54% 88%, rgba(230,201,120,.60) 0 .7px, transparent 1.5px);
          filter: drop-shadow(0 0 4px rgba(237, 219, 173, .28));
        }

        .panel::after {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          right: -65px;
          top: -60px;
          border-radius: 50%;
          pointer-events: none;
          background: rgba(196, 148, 232, .12);
          filter: blur(38px);
        }

        .panel-content {
          position: relative;
          z-index: 1;
        }

        .hero {
          text-align: center;
        }

        .eyebrow {
          margin: 0 0 8px;
          color: #f4d7e8;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.5;
        }

        h1 {
          margin: 0;
          font-size: 31px;
          line-height: 1.32;
          font-weight: 700;
          letter-spacing: .01em;
        }

        .title-white {
          color: #fff;
        }

        .title-gold {
          color: var(--gold);
        }

        .questions {
          margin-top: 20px;
          padding: 15px 16px;
          text-align: left;
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 16px;
          background: rgba(14, 8, 23, .24);
        }

        .questions p {
          margin: 3px 0;
          font-size: 15px;
          line-height: 1.8;
          font-weight: 600;
        }

        .lead {
          margin: 18px 0 0;
          color: #f6eff8;
          font-size: 15px;
          line-height: 1.85;
          font-weight: 500;
        }

        .lead strong {
          color: #fff;
          font-weight: 700;
        }

        .offer {
          margin: 18px 0 0;
          font-size: 15px;
          font-weight: 700;
        }

        .offer span {
          color: var(--gold);
          font-size: 20px;
        }

        .cta {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 58px;
          width: 100%;
          margin-top: 14px;
          padding: 13px 16px;
          border: 1px solid rgba(230,201,120,.42);
          border-radius: 17px;
          color: #fff;
          background:
            linear-gradient(100deg, #dd2b7f 0%, #c734a0 46%, #8d35c8 100%);
          box-shadow:
            0 10px 24px rgba(176, 42, 145, .26),
            inset 0 1px 0 rgba(255,255,255,.15);
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Hiragino Kaku Gothic ProN",
            "Yu Gothic",
            "YuGothic",
            "Noto Sans JP",
            "Segoe UI",
            sans-serif;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
        }

        .fineprint {
          margin: 10px 0 0;
          color: #a99fb2;
          font-size: 10px;
          line-height: 1.7;
          text-align: center;
        }

        .small-label {
          margin: 0 0 4px;
          color: #efc6dd;
          font-size: 11px;
          font-weight: 700;
        }

        h2 {
          margin: 0 0 16px;
          color: #f3d4e5;
          font-size: 21px;
          line-height: 1.5;
          font-weight: 700;
          text-align: center;
        }

        .check-list {
          margin: 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        .check-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 11px 2px;
          border-bottom: 1px solid rgba(255,255,255,.08);
          color: #fffafc;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 600;
        }

        .check {
          flex: 0 0 auto;
          color: var(--gold);
          font-weight: 700;
        }

        .body-copy {
          margin: 16px 0 0;
          color: #f2ebf5;
          font-size: 15px;
          line-height: 1.85;
          font-weight: 500;
        }

        .body-copy strong {
          color: #fff;
          font-weight: 700;
        }

        .benefit {
          padding: 17px 15px;
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 16px;
          background: rgba(14, 8, 23, .22);
          text-align: center;
        }

        .benefit-title {
          margin: 0;
          font-size: 20px;
          line-height: 1.45;
          font-weight: 700;
        }

        .benefit-title span {
          color: var(--gold);
        }

        .benefit-copy {
          margin: 9px 0 0;
          color: #d7cedd;
          font-size: 13px;
          line-height: 1.8;
        }

        .madam h2 {
          font-size: 21px;
        }

        .madam-copy {
          margin: 0;
          color: #f6eff8;
          font-size: 15px;
          line-height: 1.95;
          font-weight: 500;
        }

        .madam-copy strong {
          color: #f7c5df;
          font-weight: 700;
        }

        .notice {
          padding: 14px 12px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 14px;
          background: rgba(255,255,255,.035);
          color: #a89faf;
          font-size: 10px;
          line-height: 1.7;
          text-align: center;
        }

        footer {
          padding: 18px 0 2px;
          color: #83798c;
          font-size: 10px;
          text-align: center;
        }

        .tracking {
          display: block;
          width: 1px;
          height: 1px;
        }

        .sticky-wrap {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 50;
          padding: 8px 14px calc(8px + env(safe-area-inset-bottom));
          background: linear-gradient(to top, rgba(23,17,40,.98) 72%, rgba(23,17,40,0));
        }

        .sticky-inner {
          width: 100%;
          max-width: 448px;
          margin: 0 auto;
        }

        .sticky-inner .cta {
          min-height: 54px;
          margin-top: 0;
          font-size: 16px;
        }

        @media (max-width: 360px) {
          .page {
            padding-left: 12px;
            padding-right: 12px;
          }

          .panel {
            padding-left: 16px;
            padding-right: 16px;
          }

          h1 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}
