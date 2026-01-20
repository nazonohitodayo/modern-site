
		document.addEventListener('mousemove', (e) => {
			// 1. 波紋の要素を作る
			const ripple = document.createElement('div');
	ripple.className = 'ripple';
	document.body.appendChild(ripple);

	// 2. マウスの場所に配置
	ripple.style.left = e.clientX + 'px';
	ripple.style.top = e.clientY + 'px';

			// 3. アニメーションが終わったら要素を消す（ゴミを残さない）
			setTimeout(() => {
		ripple.remove();
			}, 800);
		});
document.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('#mobile-menu');
	const menuLinks = document.querySelector('.nav-list');

	menu.addEventListener('click', () => {
		menu.classList.toggle('is-active'); // ボタンを「×」にする
		menuLinks.classList.toggle('active'); // メニューを表示する
	});
});

