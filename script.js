// 최소 스크립트: 푸터의 연도를 자동으로 표시합니다.
(function () {
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();

// 현재 페이지의 메뉴를 강조합니다.
(function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(function (a) {
    if (a.getAttribute('href') === page) { a.classList.add('active'); }
  });
})();
