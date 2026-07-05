// 広告バナーの管理ファイルです。
// 1つのオブジェクトが1つのバナーに対応します。
// バナーを増やしたいときは、この配列に { imageSrc, link, alt, label } を追加するだけでOKです。
//
// imageSrc: 画像ファイルの場所（public/ads フォルダに画像を置いて、そのファイル名を指定します）
// link: 広告をタップしたときに飛ばしたいリンク先URL（アフィリエイトリンクなど）
// alt: 画像が読み込めなかったときに表示される説明文（アクセシビリティのためにも設定推奨）
// label: バナーの左上に小さく表示される見出し文字（例: "あなたにおすすめ"）

export const AD_BANNERS = [
  {
    imageSrc: '/ads/banner1.png',
    link: 'https://example.com/your-affiliate-link-1',
    alt: 'ココナラ',
    label: 'あなたにおすすめ',
  },
  {
    imageSrc: '/ads/banner2.png',
    link: 'https://example.com/your-affiliate-link-2',
    alt: 'ブリランテ',
    label: 'こちらもおすすめ',
  },
  // 3つ目以降を追加したい場合は、下のようにコピーして増やしてください。
  // {
  //   imageSrc: '/ads/banner3.png',
  //   link: 'https://example.com/your-affiliate-link-3',
  //   alt: '広告3',
  //   label: 'こちらもおすすめ',
  // },
];
