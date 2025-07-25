// DOM（HTML）の読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {

  // 表示する画像のパスと状態を管理
  const IMAGE_LEFT = 'images/left.jpeg';   // 横向き画像
  const IMAGE_FRONT = 'images/front.jpeg'; // 正面向き画像

  let timeoutId = null; // タイマーIDを保持する変数

  // HTMLからIDを使って画像要素を取得
  // HTMLの <img id="mainImage"> に対応
  const imageElement = document.getElementById('mainImage');
  
  // 初期画像をセット (index.htmlで既に設定済みですが、念のため)
  if (imageElement) {
    imageElement.src = IMAGE_LEFT;
    imageElement.alt = "横向きツンしたな"; // alt属性も初期設定
  } else {
    console.error("エラー: ID 'mainImage' の画像要素が見つかりません。HTMLを確認してください。");
  }

  // 画像がクリック（またはタップ）されたときの処理
  if (imageElement) {
    imageElement.addEventListener('click', () => {
      // 現在のタイマーがあればクリアする（連続タップでタイマーが重なるのを防ぐ）
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // 画像を正面向きに切り替える
      imageElement.src = IMAGE_FRONT;
      imageElement.alt = "正面向きツンしたな";

      // 3秒後に画像を横向きに戻すタイマーを設定
      timeoutId = setTimeout(() => {
        imageElement.src = IMAGE_LEFT;
        imageElement.alt = "横向きツンしたな";
        timeoutId = null; // タイマーIDをリセット
      }, 3000); // 3000ミリ秒 = 3秒
    });
  }
});