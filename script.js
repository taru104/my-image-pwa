// DOM（HTML）の読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {

  // 表示する画像のパスを配列で管理
  // imagesフォルダの中に image1.jpg, image2.jpg, image3.jpg があることを確認してください
  const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
  ];

  // 現在表示している画像のインデックス（配列の何番目か）
  let currentIndex = 0;

  // HTMLからIDを使って画像要素とボタン要素を取得
  // HTMLの <img id="mainImage"> に対応
  const imageElement = document.getElementById('mainImage');
  // HTMLの <button id="changeImageBtn"> に対応
  const changeButton = document.getElementById('changeImageBtn');

  // 初期画像をセット
  // imageElement が null でないことを確認してから操作
  if (imageElement) {
    imageElement.src = images[currentIndex];
  } else {
    console.error("エラー: ID 'mainImage' の画像要素が見つかりません。HTMLを確認してください。");
  }

  // ボタンがクリックされたときの処理を設定
  // changeButton が null でないことを確認してからイベントリスナーを追加
  if (changeButton) {
    changeButton.addEventListener('click', () => {
      // 次の画像のインデックスを計算
      // (現在のインデックス + 1) を 画像の枚数 で割った余りを求めることで、
      // 配列の最後までいったら0に戻るループが実現できる
      currentIndex = (currentIndex + 1) % images.length;

      // 画像のsrc属性を新しい画像のパスに更新
      if (imageElement) {
        imageElement.src = images[currentIndex];
      }
    });
  } else {
    console.error("エラー: ID 'changeImageBtn' のボタン要素が見つかりません。HTMLを確認してください。");
  }
});