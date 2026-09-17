"use client";

import { useMemo, useState } from "react";

const AFFILIATE_URL =
  "https://px.a8.net/svt/ejp?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU&a8ejpredirect=https%3A%2F%2Fcoconala.com%2Fcategories%2F3%3Fservice_kind%3D1";
const A8_PIXEL_URL =
  "https://www10.a8.net/0.gif?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU";

type Answer = {
  label: string;
  score: number;
  tag?: string;
};

type Question = {
  title: string;
  note: string;
  answers: Answer[];
};

const questions: Question[] = [
  {
    title: "会う約束、彼からも提案してくる？",
    note: "男は本気の女には、口だけじゃなく時間を使うものよ💋",
    answers: [
      { label: "よく彼から誘ってくれる", score: 2 },
      { label: "私から誘う方が多い", score: 1 },
      {
        label: "ほぼ私から誘っている",
        score: 0,
        tag: "会うための行動",
      },
    ],
  },
  {
    title: "忙しい時でも、関係を続けようとする行動がある？",
    note: "LINEの量より、関係を維持しようとする行動を見なさい。",
    answers: [
      { label: "遅くても連絡や埋め合わせがある", score: 2 },
      { label: "忙しい時はかなり連絡が減る", score: 1 },
      {
        label: "忙しいと言って何日も放置される",
        score: 0,
        tag: "連絡・放置",
      },
    ],
  },
  {
    title: "あなたの話を覚えてる？",
    note: "興味がある女の情報って、男は意外と覚えてるものなのよ。",
    answers: [
      { label: "小さなことまで覚えてる", score: 2 },
      { label: "大事なことは覚えてる", score: 1 },
      {
        label: "前に話したことをほとんど覚えてない",
        score: 0,
        tag: "あなたへの関心",
      },
    ],
  },
  {
    title: "自分の都合だけじゃなく、あなたの都合も考えてくれる？",
    note: "いつも彼都合になってないか、ここは冷静に見なさい💋",
    answers: [
      { label: "日時や場所を相談してくれる", score: 2 },
      { label: "半々くらい", score: 1 },
      {
        label: "ほぼ彼の都合に合わせている",
        score: 0,
        tag: "彼都合になっている",
      },
    ],
  },
  {
    title: "将来の話に、あなたが登場する？",
    note: "本気度を見るなら「今日」だけじゃなく「未来」も見なさい💋",
    answers: [
      { label: "数ヶ月先の予定や将来の話をする", score: 2 },
      { label: "たまにする", score: 1 },
      {
        label: "未来の話を避けられる",
        score: 0,
        tag: "未来の話",
      },
    ],
  },
  {
    title: "ケンカやすれ違いが起きた時、どうする？",
    note: "楽しい時より、問題が起きた時の向き合い方に本気度は出るわ。",
    answers: [
      { label: "話し合おうとしてくれる", score: 2 },
      { label: "時間が経てば普通に戻る", score: 1 },
      {
        label: "無視・逃げる・別れを匂わせる",
        score: 0,
        tag: "問題への向き合い方",
      },
    ],
  },
  {
    title: "あなたが不安になった時、彼の行動は？",
    note: "あなたの気持ちを雑に扱わないかも、大切なサインよ。",
    answers: [
      {
        label: "話を聞いたり安心させようとしてくれる",
        score: 2,
      },
      {
        label: "面倒そうな時もあるけど向き合ってくれる",
        score: 1,
      },
      {
        label: "「重い」「面倒」と切り捨てられる",
        score: 0,
        tag: "不安への向き合い方",
      },
    ],
  },
];

function AffiliateButton({
  children,
}: {
  children: React.ReactNode;
}) {
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

export default function HonkidoPage() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(Answer | null)[]>(
    Array(questions.length).fill(null)
  );

  const finished = step >= questions.length;

  const score = useMemo(
    () =>
      answers.reduce(
        (sum, answer) => sum + (answer?.score ?? 0),
        0
      ),
    [answers]
  );

  const concernTags = useMemo(
    () =>
      answers
        .filter((answer) => answer?.score === 0 && answer.tag)
        .map((answer) => answer!.tag!)
        .slice(0, 3),
    [answers]
  );

  const result =
    score >= 11
      ? {
          icon: "❤️",
          title: "彼の行動には「本気サイン」が多め",
          copy:
            "今の回答を見る限り、彼はあなたとの関係に時間や行動を使っているサインが多いわ。男を見る時は「好きって言ってくれるか」より、面倒な時にも行動してくれるかを見なさい💋",
        }
      : score >= 6
      ? {
          icon: "💭",
          title:
            "本気サインと気になるサインが混ざってるわ",
          copy:
            "「脈なし！」と決めつける必要はないけど、「絶対大丈夫」と安心するのもまだ早いわ。LINEの回数だけじゃなく、会うために動くか・あなたの都合も考えるか・問題が起きても関係を続けようとするかを見なさい💋",
        }
      : {
          icon: "💔",
          title: "ちょっと気になるサインが多いわ",
          copy:
            "今回の回答では気になる行動がいくつか重なってるわ。でも、この結果だけで「冷めてる」「他に女がいる」と決めつけるのは早いわよ。大事なのは点数より、なぜ彼がその行動をしているかよ。",
        };

  const choose = (answer: Answer) => {
    const next = [...answers];
    next[step] = answer;
    setAnswers(next);

    setTimeout(() => {
      setStep((current) => current + 1);
    }, 160);
  };

  const reset = () => {
    setStarted(false);
    setStep(0);
    setAnswers(Array(questions.length).fill(null));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main className="page">
        {!started ? (
          <section className="panel hero">
            <div className="panel-content">
              <p className="eyebrow">
                💋 ruby_bba｜男の本音チェック
              </p>

              <h1>
                <span>彼って、私のこと</span>
                <br />
                <span className="gold">本気？</span>
              </h1>

              <p className="lead">
                男の本気は「好き」という言葉より、
                <br />
                <strong>行動に出るものよ💋</strong>
                <br />
                <br />
                7つの質問に答えて
                <br />
                彼の行動をチェックしてみなさい。
              </p>

              <div className="badges">
                <span>無料</span>
                <span>7問</span>
                <span>約1分</span>
              </div>

              <button
                className="cta"
                onClick={() => setStarted(true)}
              >
                💋 彼の本気度をチェックする
              </button>

              <p className="fineprint">
                ※恋愛傾向を確認するための簡易チェックです。
                <br />
                相手の実際の気持ちを断定するものではありません。
              </p>
            </div>
          </section>
        ) : !finished ? (
          <section className="panel quiz">
            <div className="panel-content">
              <div className="progress-head">
                <span>彼の本気度チェック💋</span>
                <strong>
                  {step + 1} / {questions.length}
                </strong>
              </div>

              <div className="progress">
                <div
                  style={{
                    width: `${
                      ((step + 1) / questions.length) * 100
                    }%`,
                  }}
                />
              </div>

              <p className="q-label">
                QUESTION {step + 1}
              </p>

              <h2 className="question-title">
                {questions[step].title}
              </h2>

              <div className="answers">
                {questions[step].answers.map((answer) => (
                  <button
                    key={answer.label}
                    onClick={() => choose(answer)}
                  >
                    {answer.label}
                    <span>›</span>
                  </button>
                ))}
              </div>

              <p className="madam-note">
                💋 {questions[step].note}
              </p>
            </div>
          </section>
        ) : (
          <>
            <section className="panel result">
              <div className="panel-content">
                <p className="eyebrow">
                  💋 ルビーの診断結果
                </p>

                <div className="result-icon">
                  {result.icon}
                </div>

                <h1 className="result-title">
                  {result.title}
                </h1>

                <p className="result-copy">
                  {result.copy}
                </p>

                {concernTags.length > 0 && (
                  <div className="box">
                    <p>
                      あなたが特にチェックしたいポイント
                    </p>

                    {concernTags.map((tag) => (
                      <span key={tag}>✓ {tag}</span>
                    ))}
                  </div>
                )}

                <div className="box">
                  <p>
                    男の本気を見るなら、この3つよ
                  </p>
                  <strong>会うために動く</strong>
                  <strong>あなたを気遣う</strong>
                  <strong>関係を続けようとする</strong>
                </div>
              </div>
            </section>

            <section className="panel">
              <div className="panel-content">
                <div className="pr">PR</div>

                <h2 className="pr-title">
                  でも一番知りたいのは…
                  <br />
                  <span>
                    「結局、私の彼はどう思ってるの？」
                  </span>
                </h2>

                <p className="body-copy">
                  じゃない？
                  <br />
                  <br />
                  この7問で分かるのは、あくまで一般的な男性の行動傾向まで。
                  二人の関係や最近の出来事まで含めて気になるなら、
                  <strong>
                    個別に相談してみる方法もあるわよ💋
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

            <button
              className="retry"
              onClick={reset}
            >
              もう一度チェックする
            </button>
          </>
        )}

        <section className="notice">
          このチェックは一般的な恋愛傾向をもとにした簡易コンテンツで、
          相手の気持ちや将来を断定・保証するものではありません。
          PRリンク先サービスを利用した場合、
          当サイトが報酬を受け取ることがあります。
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

      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          background: #171128;
          color: #fffafc;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont,
            "Hiragino Kaku Gothic ProN", "Yu Gothic",
            "Noto Sans JP", sans-serif;
        }

        button {
          font: inherit;
        }

        .page {
          width: 100%;
          max-width: 448px;
          min-height: 100vh;
          margin: 0 auto;
          padding: 22px 16px 42px;
        }

        .panel {
          margin-bottom: 18px;
          padding: 27px 20px;
          border: 1px solid rgba(230, 201, 120, 0.3);
          border-radius: 22px;
          background: linear-gradient(
            180deg,
            #392954,
            #2d2448
          );
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.24);
        }

        .hero {
          text-align: center;
          min-height: 560px;
          display: flex;
          align-items: center;
        }

        .panel-content {
          width: 100%;
        }

        .eyebrow {
          margin: 0 0 10px;
          color: #f4d7e8;
          font-size: 14px;
          font-weight: 700;
        }

        h1 {
          margin: 0;
          font-size: 32px;
          line-height: 1.3;
        }

        .gold {
          color: #e6c978;
        }

        .lead {
          margin: 24px 0 0;
          font-size: 16px;
          line-height: 1.9;
        }

        .badges {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 22px 0 2px;
        }

        .badges span {
          padding: 6px 12px;
          border: 1px solid
            rgba(230, 201, 120, 0.35);
          border-radius: 999px;
          color: #e6c978;
          font-size: 12px;
          font-weight: 700;
        }

        .cta {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 60px;
          margin-top: 16px;
          padding: 14px;
          border: 1px solid
            rgba(230, 201, 120, 0.42);
          border-radius: 17px;
          color: white;
          background: linear-gradient(
            100deg,
            #dd2b7f,
            #c734a0 46%,
            #8d35c8
          );
          font-size: 17px;
          font-weight: 700;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
        }

        .fineprint {
          margin: 12px 0 0;
          color: #aaa0b3;
          font-size: 10px;
          line-height: 1.7;
          text-align: center;
        }

        .quiz {
          min-height: 580px;
        }

        .progress-head {
          display: flex;
          justify-content: space-between;
          color: #f3d4e5;
          font-size: 13px;
          font-weight: 700;
        }

        .progress {
          height: 7px;
          margin: 10px 0 34px;
          border-radius: 99px;
          background: rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .progress div {
          height: 100%;
          border-radius: 99px;
          background: linear-gradient(
            90deg,
            #dd2b7f,
            #e6c978
          );
        }

        .q-label {
          margin: 0 0 8px;
          color: #e6c978;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .question-title {
          min-height: 68px;
          margin: 0 0 24px;
          font-size: 23px;
          line-height: 1.55;
        }

        .answers {
          display: grid;
          gap: 11px;
        }

        .answers button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 17px 16px;
          border: 1px solid
            rgba(255, 255, 255, 0.14);
          border-radius: 15px;
          color: white;
          background: rgba(17, 10, 28, 0.32);
          font-size: 15px;
          font-weight: 650;
          text-align: left;
          cursor: pointer;
        }

        .answers button span {
          color: #e6c978;
          font-size: 24px;
        }

        .madam-note {
          margin: 24px 2px 0;
          padding-top: 16px;
          border-top: 1px solid
            rgba(255, 255, 255, 0.08);
          color: #d8cfde;
          font-size: 13px;
          line-height: 1.8;
        }

        .result {
          text-align: center;
        }

        .result-icon {
          font-size: 46px;
          margin: 4px 0 8px;
        }

        .result-title {
          font-size: 25px;
        }

        .result-copy {
          margin: 18px 0 0;
          font-size: 15px;
          line-height: 1.95;
          text-align: left;
        }

        .box {
          margin-top: 20px;
          padding: 16px;
          border: 1px solid
            rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          background: rgba(14, 8, 23, 0.25);
          text-align: left;
        }

        .box p {
          margin: 0 0 10px;
          color: #f3d4e5;
          font-size: 13px;
          font-weight: 700;
        }

        .box span,
        .box strong {
          display: block;
          margin: 7px 0;
          font-size: 14px;
        }

        .box span {
          color: #e6c978;
        }

        .pr {
          width: max-content;
          margin: 0 auto 10px;
          padding: 3px 8px;
          border: 1px solid
            rgba(255, 255, 255, 0.18);
          border-radius: 6px;
          color: #bdb4c3;
          font-size: 9px;
        }

        .pr-title {
          margin: 0 0 16px;
          font-size: 21px;
          line-height: 1.55;
          text-align: center;
        }

        .pr-title span {
          color: #ff9dce;
        }

        .body-copy {
          margin: 0;
          font-size: 15px;
          line-height: 1.9;
        }

        .offer {
          text-align: center;
          margin: 20px 0 0;
          font-size: 15px;
          font-weight: 700;
        }

        .offer span {
          color: #e6c978;
          font-size: 20px;
        }

        .retry {
          display: block;
          margin: 0 auto 22px;
          border: 0;
          background: none;
          color: #bcb2c3;
          text-decoration: underline;
          font-size: 12px;
          cursor: pointer;
        }

        .notice {
          padding: 14px 12px;
          border: 1px solid
            rgba(255, 255, 255, 0.08);
          border-radius: 14px;
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
      `}</style>
    </>
  );
}
