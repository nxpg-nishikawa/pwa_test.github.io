//スムーススクロール npm install SweetScroll

export default function(op) {

	const smoothScroll = new SweetScroll({
		trigger: op.TRIGGER,            // トリガーとなる要素をCSSセレクタで指定
		header: op.FIXED,               // 固定ヘッダをCSSセレクタで指定
		duration: op.DURATION,          // アニメーション再生時間のミリ秒
		delay: op.DELAY,                // アニメーション開始までの遅延ミリ秒
		easing: op.EASE,                // イージングのタイプ
		offset: op.OFFSET,              // スクロール位置のオフセット
		verticalScroll: op.VERTICAL,    // 垂直方向のスクロールを許可
		horizontalScroll: op.HORIZON,   // 水平方向のスクロールを許可 (デフォルトでは無効)
		stopScroll: op.STOP,            // ホイール・タッチイベントが発生した時にスクロールを停止

		// Callbacks
		beforeScroll: null,             // スクロールが始まる前 (return falseでキャンセル可)
		afterScroll: null,              // スクロールが終わった時
		cancelScroll: null              // スクロールがキャンセルされた時
	});

}