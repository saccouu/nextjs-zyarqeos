"use client";

import { useMemo, useState } from "react";

const AFFILIATE_URL =
  "https://px.a8.net/svt/ejp?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU&a8ejpredirect=https%3A%2F%2Fcoconala.com%2Fcategories%2F3%3Fservice_kind%3D1";
const A8_PIXEL_URL =
  "https://www10.a8.net/0.gif?a8mat=3Z4WIB+45GOHE+2PEO+HUKPU";

type Status = "dating" | "crush" | "ambiguous";
type Answer = { label: string; score: number };
type Question = { title: string; note: string; answers: Answer[] };

const statusLabels: Record<Status, string> = {
  dating: "付き合っている",
  crush: "まだ付き合っていない・片思い",
  ambiguous: "付き合ってるとは言えない、曖昧な関係",
};

const questions: Record<Status, Question[]> = {
  dating: [
    { title:"会うために、彼からも動いてくれる？", note:"本気の男はね、会いたいを「行動」にするのよ💋", answers:[
      {label:"彼から誘ったり予定を決めたりしてくれる",score:2},{label:"私から誘うことの方が多い",score:1},{label:"ほぼ私が動かないと会えない",score:0}]},
    { title:"忙しい時の彼はどう？", note:"忙しいかどうかより、忙しい時にあなたをどう扱うかを見なさい💋", answers:[
      {label:"連絡が減っても、あとで連絡や埋め合わせがある",score:2},{label:"忙しくなるとかなり連絡が減る",score:1},{label:"「忙しい」で何日も放置されることがある",score:0}]},
    { title:"あなたの話を覚えてる？", note:"こういう無意識なところに、男の本音は出るわよ💋", answers:[
      {label:"小さなことまで意外と覚えてる",score:2},{label:"大事なことなら覚えてる",score:1},{label:"前に話したことをほとんど覚えてない",score:0}]},
    { title:"会う日時や場所はどう決まる？", note:"愛されてるかより先に、雑に扱われてないかを見なさい💋", answers:[
      {label:"私の都合も聞いて一緒に決める",score:2},{label:"彼に合わせることが多いけど、お互い様",score:1},{label:"ほぼいつも彼の都合に合わせてる",score:0}]},
    { title:"彼は将来の話をしてくる？", note:"本気になった男は、将来の話をし始めるわよ💋", answers:[
      {label:"「もし結婚したら」と具体的な話もする",score:2},{label:"将来の話はするけど、そこにあなたは出てこない",score:1},{label:"将来の話をすると濁されたり避けられたりする",score:0}]},
    { title:"ケンカやすれ違いが起きた時は？", note:"男の本性はね、ラブラブな時より揉めた時に見えるのよ💋", answers:[
      {label:"話し合ったり仲直りしようとする",score:2},{label:"一度距離を置くけど、そのうち戻る",score:1},{label:"無視・逃げる・すぐ別れを匂わせる",score:0}]},
    { title:"あなたが不安になった時は？", note:"あなたの不安を全部解決できるかじゃないの。向き合おうとするかよ💋", answers:[
      {label:"話を聞いたり安心させようとしてくれる",score:2},{label:"面倒そうな時もあるけど向き合ってくれる",score:1},{label:"「重い」「面倒」と切り捨てられる",score:0}]},
  ],
  crush: [
    { title:"彼から連絡が来ることはある？", note:"返信が来るかだけ見ちゃダメ。彼から始めるかも見なさい💋", answers:[
      {label:"用事がなくても彼から来る",score:2},{label:"私から送れば会話は続く",score:1},{label:"ほぼ私から送らないと始まらない",score:0}]},
    { title:"二人で会うために、彼から動く？", note:"男の本気はね、「あなたに会おうとする行動」に出るわよ💋", answers:[
      {label:"彼から誘われたり、日程を提案されたりする",score:2},{label:"私が誘えば会ってくれる",score:1},{label:"誘っても曖昧にされたり、二人では会おうとしない",score:0}]},
    { title:"彼からあなたのことを知ろうとしてくる？", note:"興味がある女のことは、男だって知りたくなるものよ💋", answers:[
      {label:"恋愛・仕事・休日など色々質問してくる",score:2},{label:"会話の流れで聞かれる程度",score:1},{label:"私ばかり彼に質問している",score:0}]},
    { title:"前に話したことを覚えてる？", note:"「好き」と言わなくても、興味は記憶に残るのよ💋", answers:[
      {label:"小さなことまで覚えてる",score:2},{label:"大事なことは覚えてる",score:1},{label:"何度も同じことを聞かれる",score:0}]},
    { title:"彼からの特別な気遣いを感じる？", note:"誰にでも優しいのと、あなただけに優しいのは違うわよ💋", answers:[
      {label:"体調や予定を気にかけたり、困った時に助けようとしてくれる",score:2},{label:"会った時は優しくしてくれる",score:1},{label:"特別な気遣いを感じることはあまりない",score:0}]},
    { title:"彼はあなたとの「小さな約束」を行動に移す？", note:"本気なら、あなたを喜ばせようと、小さな約束でも忘れないものよ💋", answers:[
      {label:"「今度〇〇しよう」など、話したことを彼から実現しようとする",score:2},{label:"私から言えば覚えていて、話が進む",score:1},{label:"その場では盛り上がるけど、そのままになることが多い",score:0}]},
    { title:"彼との会話に、恋愛の話は出てくる？", note:"あなたの恋愛事情を知りたがるのは、距離を縮めたい証拠よ💋", answers:[
      {label:"好きなタイプや恋愛観、彼氏の有無などを彼から聞かれる",score:2},{label:"会話の流れで恋愛の話をすることはある",score:1},{label:"恋愛の話はほとんど出ない",score:0}]},
  ],
  ambiguous: [
    { title:"彼から会おうとするのはどんな時？", note:"急な「会いたい」より、あなたとの時間を前もって作ろうとするかを見なさい💋", answers:[
      {label:"前もって予定を立てて会おうとする",score:2},{label:"前もっての約束も急な誘いもある",score:1},{label:"当日・夜・「今から」が多い",score:0}]},
    { title:"会う時はどんな過ごし方が多い？", note:"会ってくれる＝大切にされてる、とは限らないわよ💋", answers:[
      {label:"昼から出かけたり色々なデートをする",score:2},{label:"ご飯や家などパターンは限られてる",score:1},{label:"夜・家・ホテルなどにかなり偏ってる",score:0}]},
    { title:"会っていない時も連絡はある？", note:"あなた自身に興味があるのか、「会える時」だけ興味があるのか。ここは違うわ💋", answers:[
      {label:"特に用事がなくても彼から連絡がある",score:2},{label:"会う前後を中心に連絡する",score:1},{label:"会いたい時しか連絡が来ないことが多い",score:0}]},
    { title:"あなたの都合も考えてくれる？", note:"大切にしたい相手なら、自分の都合だけじゃなく相手の都合も考えるものよ💋", answers:[
      {label:"日時や場所を相談してくれる",score:2},{label:"彼都合が多いけど私の都合も聞く",score:1},{label:"彼が会いたい時に私が合わせることが多い",score:0}]},
    { title:"関係について話そうとすると？", note:"本気かどうか以前に、向き合う気があるかを見るのよ💋", answers:[
      {label:"はぐらかさず自分の考えを話してくれる",score:2},{label:"曖昧だけど話自体はできる",score:1},{label:"話題を変える・嫌がる・避ける",score:0}]},
    { title:"会ったあとも、彼から関係をつなごうとする？", note:"会う前の優しさより、会った「その後」の態度を見なさい💋", answers:[
      {label:"会ったあとも連絡があり、次の話も自然に出る",score:2},{label:"連絡はあるけど、次に会う話はその時次第",score:1},{label:"会ったあとは連絡が減り、次に会いたい時にまた連絡が来る",score:0}]},
    { title:"あなたが誘いを断った時、彼はどうする？", note:"男の本性ってね、思い通りにならなかった時に出やすいのよ💋", answers:[
      {label:"別の日を提案したり普通に接してくれる",score:2},{label:"少し残念そうだけど関係は変わらない",score:1},{label:"不機嫌・冷たくなる・しばらく連絡がなくなる",score:0}]},
  ],
};

const results = {
  dating: {
    high:{icon:"❤️",title:"彼には「本気サイン」がかなり出てるわ💋",copy:"今回の回答を見る限り、彼はあなたとの関係を大切にしようとしているわね。会っている時に優しいだけじゃなく、あなたのことを考えて行動したり、二人の関係に向き合おうとする姿勢も見えてる。今の彼には、本気の男に出やすい行動がかなり揃ってるわよ💋\n\nただし、男の本気は一時的な優しさじゃなく、これからも行動に出続けるもの。言葉だけじゃなく、今の行動が続いていくかを見ておきなさい。"},
    mid:{icon:"💭",title:"彼には「本気サイン」が出てるわ",copy:"今回の回答を見る限り、彼からあなたへの本気サインはちゃんと出てる。だから「大切にされてない」と決めつける必要はないわ。\n\nただね、まだ「かなり本気」と言い切るには、少し気になる行動もあるのよ。好きと言ってくれるかより、あなたとの関係を大切にする行動がこれからも続くか。そこを見ておきなさい💋"},
    low:{icon:"💔",title:"今の彼、「本気サイン」がちょっと少ないわね",copy:"今回の回答を見る限り、彼からあなたへの本気サインは今のところ少なめ。付き合っているからといって、安心しきっちゃダメよ。\n\n大事なのは「彼氏かどうか」より、あなたとの関係を大切にする行動があるか。ただ、この診断だけで「本気じゃない」と決めつけるのも早いわ。彼の言葉より、これからの行動を見なさい💋"},
  },
  crush: {
    high:{icon:"❤️",title:"彼から「本気サイン」がかなり出てるわ💋",copy:"今回の回答を見る限り、彼はあなたにかなり関心を向けているみたいね。ただ返信してくれるだけじゃなく、あなたを知ろうとしたり、会おうとしたり、二人の距離を縮めようとする行動が出てる。\n\n片思いの段階としては、本気サインがかなり揃ってるわよ💋 ただし、ここで「絶対に脈あり」と決めつけるのはまだ早いわ。最後は、彼が実際に関係を進めようとするかよ。"},
    mid:{icon:"💭",title:"彼から「本気サイン」は出てるわ",copy:"今回の回答を見る限り、彼があなたに関心を持っているサインはちゃんとある。\n\nでもね、「優しい」「返信が来る」だけで、本気だと決めるにはまだ早いわ。あなたを知ろうとするだけじゃなく、会おうとする、約束を行動に移す。そんなふうに、彼自身が二人の距離を縮めようとするかが大事よ💋"},
    low:{icon:"💔",title:"今のところ、「本気サイン」は少なめね",copy:"今回の回答では、彼からあなたへ積極的に距離を縮めようとする行動はまだ少なめ。だからといって、今すぐ「脈なし」と決めつける必要はないわ。\n\nまだ彼の気持ちがそこまで動いていないのか、慎重なのか、それとも恋愛対象として見ていないのか。この診断だけでは、そこまでは分からないのよ。今は言葉や返信の速さだけで期待しすぎないことね💋"},
  },
  ambiguous: {
    high:{icon:"❤️",title:"彼には「本気サイン」がかなり出てるわ💋",copy:"関係はまだ曖昧でも、今回の回答を見る限り、彼はあなたとの関係そのものを大切にしようとしているみたいね。会いたい時だけじゃなく、あなたの都合を考えたり、会っていない時も関係をつなごうとする行動が出てる。\n\n曖昧な関係の中でも、本気サインはかなり揃ってるわよ💋 あとは、この関係を彼がこれからどう進めようとするかね。"},
    mid:{icon:"💭",title:"彼から「本気サイン」は出てるわ",copy:"今回の回答を見る限り、彼からあなたへの本気サインはちゃんと出てる。\n\nでも、「あなたとちゃんと付き合いたい」と思っているかまでは、まだ判断しにくいわね。会いたい時だけじゃなく、あなたを大切にしたり、二人の関係を進めようとする行動が増えていくか。そこがポイントよ💋"},
    low:{icon:"💔",title:"今の彼、「本気サイン」がかなり少ないわね",copy:"今回の回答を見る限り、彼からあなたへの本気サインは、今のところかなり少なめ。会えていたとしても、あなたとの関係をちゃんと進めようとする行動が少ないのが気になるわね。\n\nただ、この診断だけで「遊び」「都合のいい女」と決めつけるのは早いわ。彼の言葉より、これからどんな行動をするかを見なさい💋"},
  },
} as const;

const bridge: Record<Status,string> = {
  dating:"「私との将来まで考えてる？」",
  crush:"「私のこと、恋愛対象として見てる？」",
  ambiguous:"「私との関係、これからどうするつもり？」",
};

function AffiliateButton({children}:{children:React.ReactNode}) {
  return <a href={AFFILIATE_URL} rel="nofollow sponsored" className="cta">{children}</a>;
}

export default function HonkidoPage() {
  const [started,setStarted]=useState(false);
  const [status,setStatus]=useState<Status|null>(null);
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState<Answer[]>([]);
  const [selected,setSelected]=useState<string|null>(null);
  const [selectedStatus,setSelectedStatus]=useState<Status|null>(null);

  const qs=status?questions[status]:[];
  const finished=!!status && step>=qs.length;
  const score=useMemo(()=>answers.reduce((s,a)=>s+a.score,0),[answers]);
  const result=useMemo(()=>{
    if(!status)return null;
    const band=score>=11?"high":score>=6?"mid":"low";
    return results[status][band];
  },[score,status]);

  const pickStatus=(nextStatus:Status)=>{
    if(selectedStatus)return;
    setSelectedStatus(nextStatus);
    setTimeout(()=>{
      setStarted(true);
      setStatus(nextStatus);
      setSelectedStatus(null);
      window.scrollTo({top:0,behavior:"smooth"});
    },400);
  };

  const pick=(a:Answer)=>{
    if(selected)return;
    setSelected(a.label);
    setTimeout(()=>{
      setAnswers(v=>[...v,a]);
      setStep(v=>v+1);
      setSelected(null);
      window.scrollTo({top:0,behavior:"smooth"});
    },400);
  };

  const reset=()=>{
    setStarted(false); setStatus(null); setStep(0); setAnswers([]); setSelected(null); setSelectedStatus(null);
    window.scrollTo({top:0,behavior:"smooth"});
  };

  return <>
    <main className="page">
      <div className="sparkles" aria-hidden="true">
        {Array.from({length:24}).map((_,i)=><i key={i}>{i%3===0?"✦":"✧"}</i>)}
      </div>

      {!started ? <section className="panel hero"><div className="panel-content">
        <p className="eyebrow">💋 ruby_bba｜男の本音チェック</p>
        <h1>彼って、私のこと<br/><span className="gold">本気？</span></h1>
        <p className="lead">彼の本気度、これから7問で<br/><strong>チェックしていくわよ💋</strong><br/><br/>まずは、あなたと彼の<br/>今の関係を教えなさい。</p>
        <div className="badges"><span>無料</span><span>7問</span><span>約1分</span></div>
        <div className="status-buttons hero-status">
          {(Object.keys(statusLabels) as Status[]).map(k=>{
            const active=selectedStatus===k;
            return <button key={k} className={active?"selected":""} disabled={!!selectedStatus} onClick={()=>pickStatus(k)}><strong>{statusLabels[k]}</strong><span>{active?"✓":"›"}</span></button>
          })}
        </div>
        <p className="fineprint">※恋愛傾向を確認するための簡易チェックです。<br/>相手の実際の気持ちを断定するものではありません。</p>
      </div></section>
      : !status ? null
      : !finished ? <section className="panel quiz"><div className="panel-content">
        <div className="progress-head"><span>彼の本気度チェック💋</span><strong>{step+1} / 7</strong></div>
        <div className="progress"><div style={{width:`${((step+1)/7)*100}%`}}/></div>
        <p className="status-chip">{statusLabels[status]}</p>
        <p className="q-label">QUESTION {step+1}</p>
        <h2 className="question-title">{qs[step].title}</h2>
        <div className="answers">{qs[step].answers.map(a=>{
          const active=selected===a.label;
          return <button key={a.label} className={active?"selected":""} disabled={!!selected} onClick={()=>pick(a)}>
            <span>{a.label}</span><b>{active?"✓":"›"}</b>
          </button>
        })}</div>
        <p className="madam-note">{qs[step].note}</p>
      </div></section>
      : result ? <>
        <section className="panel result"><div className="panel-content">
          <p className="eyebrow">💋 診断結果</p>
          <div className="result-icon">{result.icon}</div>
          <h1 className="result-title">{result.title}</h1>
          <p className="result-copy">{result.copy}</p>
        </div></section>

        <section className="panel"><div className="panel-content">
          <div className="pr">PR</div>
          <h2 className="pr-title">でも、この診断では、<br/><span>彼の本当の気持ちまでは分からないわ。</span></h2>
          <p className="body-copy">この診断で分かるのは、彼の<strong>「行動に出ている本気サイン」</strong>まで。<br/><br/>
          でも、あなたが本当に知りたいのは、<strong>「彼は私のことをどう思ってる？」</strong>じゃないかしら？<br/><br/>
          <em>{bridge[status]}</em><br/><br/>
          彼の本音まで知りたいなら、最近のLINEや二人の状況も含めて、個別に見てもらう方法もあるわよ💋</p>
          <p className="offer">＼ 初回 <span>3,000円分無料</span> ／</p>
          <AffiliateButton>🔮 彼の気持ちを占ってもらう →</AffiliateButton>
          <p className="fineprint">※PR：リンク先のサービスをご紹介しています。<br/>※無料特典の適用条件・対象サービス等はリンク先をご確認ください。<br/>※占い・相談の結果は将来や相手の気持ちを保証するものではありません。</p>
        </div></section>
        <button className="retry" onClick={reset}>もう一度チェックする</button>
      </> : null}

      <section className="notice">このチェックは一般的な恋愛傾向をもとにした簡易コンテンツで、相手の気持ちや将来を断定・保証するものではありません。PRリンク先サービスを利用した場合、当サイトが報酬を受け取ることがあります。</section>
      <footer>© ruby_bba / bbauranai.jp</footer>
      <img width="1" height="1" src={A8_PIXEL_URL} alt="" className="tracking"/>
    </main>

    <style>{`
      *{box-sizing:border-box} html,body{margin:0;background:#171128;color:#fffafc}
      body{font-family:-apple-system,BlinkMacSystemFont,"Hiragino Kaku Gothic ProN","Yu Gothic","Noto Sans JP",sans-serif}
      button{font:inherit}.page{position:relative;width:100%;max-width:448px;min-height:100vh;margin:0 auto;padding:22px 16px 42px;overflow:hidden}
      .sparkles{position:fixed;inset:0;pointer-events:none;z-index:2}.sparkles i{position:absolute;color:rgba(255,229,158,.82);font-style:normal;text-shadow:0 0 11px rgba(255,214,112,.75);animation:twinkle 2.4s ease-in-out infinite}
      .sparkles i:nth-child(1){top:4%;left:7%}.sparkles i:nth-child(2){top:9%;left:28%;font-size:9px;animation-delay:.4s}.sparkles i:nth-child(3){top:6%;right:10%;animation-delay:1.1s}
      .sparkles i:nth-child(4){top:16%;left:4%;font-size:10px;animation-delay:.7s}.sparkles i:nth-child(5){top:19%;right:5%;font-size:15px;animation-delay:1.5s}.sparkles i:nth-child(6){top:27%;left:12%;animation-delay:.2s}
      .sparkles i:nth-child(7){top:31%;right:15%;font-size:9px;animation-delay:1.9s}.sparkles i:nth-child(8){top:38%;left:3%;font-size:17px;animation-delay:1.2s}.sparkles i:nth-child(9){top:41%;right:4%;animation-delay:.5s}
      .sparkles i:nth-child(10){top:48%;left:8%;font-size:9px;animation-delay:1.7s}.sparkles i:nth-child(11){top:52%;right:12%;font-size:16px;animation-delay:.8s}.sparkles i:nth-child(12){top:58%;left:4%;animation-delay:2s}
      .sparkles i:nth-child(13){top:62%;right:4%;font-size:10px;animation-delay:.3s}.sparkles i:nth-child(14){top:68%;left:13%;font-size:15px;animation-delay:1.4s}.sparkles i:nth-child(15){top:72%;right:17%;font-size:9px;animation-delay:.9s}
      .sparkles i:nth-child(16){top:77%;left:5%;animation-delay:1.8s}.sparkles i:nth-child(17){top:81%;right:6%;font-size:18px;animation-delay:.6s}.sparkles i:nth-child(18){top:86%;left:18%;font-size:9px;animation-delay:1.3s}
      .sparkles i:nth-child(19){top:90%;right:20%;animation-delay:2.1s}.sparkles i:nth-child(20){top:94%;left:6%;font-size:14px;animation-delay:.1s}.sparkles i:nth-child(21){top:13%;left:48%;font-size:8px;animation-delay:1.6s}
      .sparkles i:nth-child(22){top:35%;left:51%;font-size:8px;animation-delay:.9s}.sparkles i:nth-child(23){top:66%;left:48%;font-size:8px;animation-delay:1.3s}.sparkles i:nth-child(24){top:92%;left:52%;font-size:8px;animation-delay:.5s}
      @keyframes twinkle{0%,100%{opacity:.2;transform:scale(.8)}50%{opacity:.9;transform:scale(1.2)}}
      .panel,.notice,footer,.retry{position:relative;z-index:3}.panel{margin-bottom:18px;padding:27px 20px;border:1px solid rgba(230,201,120,.3);border-radius:22px;background:
      radial-gradient(circle at 10% 12%,rgba(255,229,158,.72) 0 1px,transparent 1.8px),
      radial-gradient(circle at 88% 18%,rgba(255,255,255,.55) 0 1px,transparent 1.8px),
      radial-gradient(circle at 16% 68%,rgba(255,229,158,.45) 0 1px,transparent 1.8px),
      radial-gradient(circle at 91% 77%,rgba(255,255,255,.45) 0 1px,transparent 1.8px),
      linear-gradient(180deg,#392954,#2d2448);box-shadow:0 16px 36px rgba(0,0,0,.24)}
      .hero,.relationship{min-height:620px;display:flex;align-items:center;text-align:center}.panel-content{width:100%}.eyebrow{margin:0 0 10px;color:#f4d7e8;font-size:14px;font-weight:800}
      h1{margin:0;font-size:32px;line-height:1.3;font-weight:900}.gold{color:#e6c978}.lead{margin:24px 0 0;font-size:16px;line-height:1.9}.lead.small{font-size:14px}
      .badges{display:flex;justify-content:center;gap:8px;margin:22px 0 2px}.badges span{padding:6px 12px;border:1px solid rgba(230,201,120,.35);border-radius:999px;color:#e6c978;font-size:12px;font-weight:700}
      .cta{display:flex;align-items:center;justify-content:center;width:100%;min-height:60px;margin-top:16px;padding:14px;border:1px solid rgba(230,201,120,.42);border-radius:17px;color:white;background:linear-gradient(100deg,#dd2b7f,#c734a0 46%,#8d35c8);font-size:17px;font-weight:800;text-decoration:none;text-align:center;cursor:pointer}
      .fineprint{margin:12px 0 0;color:#aaa0b3;font-size:10px;line-height:1.7;text-align:center}.status-buttons{display:grid;gap:12px;margin-top:20px}.hero-status{margin-top:20px}.status-buttons button,.answers button{display:flex;justify-content:space-between;align-items:center;width:100%;padding:17px 16px;border:1px solid rgba(255,255,255,.14);border-radius:15px;color:white;background:rgba(17,10,28,.32);text-align:left;cursor:pointer}
      .status-buttons strong{font-size:15px}.status-buttons span,.answers b{color:#e6c978;font-size:24px}.status-buttons button{transition:.18s}.status-buttons button:disabled{cursor:default;opacity:.65}.status-buttons button.selected{opacity:1;border-color:#ff82c3;background:linear-gradient(100deg,rgba(221,43,127,.9),rgba(141,53,200,.9));box-shadow:0 0 24px rgba(221,43,127,.38);transform:scale(1.01)}.status-buttons button.selected span{color:#fff}.quiz{min-height:580px}.progress-head{display:flex;justify-content:space-between;color:#f3d4e5;font-size:13px;font-weight:700}
      .progress{height:7px;margin:10px 0 20px;border-radius:99px;background:rgba(255,255,255,.1);overflow:hidden}.progress div{height:100%;background:linear-gradient(90deg,#dd2b7f,#e6c978);transition:width .3s}
      .status-chip{display:inline-block;margin:0 0 18px;padding:5px 9px;border:1px solid rgba(230,201,120,.25);border-radius:999px;color:#d9c78e;font-size:10px}.q-label{margin:0 0 8px;color:#e6c978;font-size:11px;font-weight:800;letter-spacing:.12em}
      .question-title{min-height:68px;margin:0 0 24px;font-size:23px;line-height:1.55;font-weight:900}.answers{display:grid;gap:11px}.answers button{font-size:15px;font-weight:650;transition:.18s}.answers button:disabled{cursor:default;opacity:.65}
      .answers button.selected{opacity:1;border-color:#ff82c3;background:linear-gradient(100deg,rgba(221,43,127,.9),rgba(141,53,200,.9));box-shadow:0 0 24px rgba(221,43,127,.38);transform:scale(1.01)}.selected b{color:#fff}
      .madam-note{margin:24px 2px 0;padding-top:16px;border-top:1px solid rgba(255,255,255,.08);color:#d8cfde;font-size:13px;line-height:1.8}.result{text-align:center}.result-icon{font-size:46px;margin:4px 0 8px}.result-title{font-size:25px}.result-copy{margin:18px 0 0;font-size:15px;line-height:1.95;text-align:left;white-space:pre-line}
      .pr{width:max-content;margin:0 auto 10px;padding:3px 8px;border:1px solid rgba(255,255,255,.18);border-radius:6px;color:#bdb4c3;font-size:9px}.pr-title{margin:0 0 16px;font-size:21px;line-height:1.55;text-align:center;font-weight:900}.pr-title span{color:#ff9dce}.body-copy{margin:0;font-size:15px;line-height:1.9}.body-copy em{color:#ff9dce;font-style:normal;font-weight:800}.offer{text-align:center;margin:20px 0 0;font-size:15px;font-weight:700}.offer span{color:#e6c978;font-size:20px}
      .retry{display:block;margin:0 auto 22px;border:0;background:none;color:#bcb2c3;text-decoration:underline;font-size:12px;cursor:pointer}.notice{padding:14px 12px;border:1px solid rgba(255,255,255,.08);border-radius:14px;color:#a89faf;font-size:10px;line-height:1.7;text-align:center}footer{padding:18px 0 2px;color:#83798c;font-size:10px;text-align:center}.tracking{display:block;width:1px;height:1px}
    `}</style>
  </>;
}
