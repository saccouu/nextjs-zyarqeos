// 広告バナーの管理ファイルです。
// 1つのオブジェクトが1つのバナーに対応します。
//
// htmlCode には、A8.netの「素材をコピー」ボタンで取得したコードを
// 1文字も書き換えずに、まるごとそのまま貼り付けてください。
// （見えない計測用の画像タグが含まれていることがありますが、絶対に消さないでください）
//
// label: バナーの左上に小さく表示される見出し文字（例: "あなたにおすすめ"）

export const AD_BANNERS = [
  {
    htmlCode: `<span class="a8ad 4eqbZ75-g7-voylbN8"></span><script type="text/javascript" src="//statics.a8.net/ad/ad.js"></script><script type="text/javascript">a8adscript('body').showAd({"req": {"mat":"3Z4WIB+45GOHE+2PEO+HUSFL","alt":"商品リンク","id":"4eqbZ75-g7-voylbN8"},"goods": {"ejp":"h"+"ttps://coconala.com/categories/3?service_kind=1","imu":"h"+"ttps://www.bbauranai.jp/ads/banner1.png"}});</script>`,
    label: 'あなたにおすすめ',
  },
  {
    htmlCode: `ここに2つ目のA8.netの商品リンクコードをそのまま貼り付け`,
    label: 'こちらもおすすめ',
  },
];
