// reveal: IntersectionObserver で in クラスを付与
(() => {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: .2 });
  els.forEach(el => io.observe(el));
})();
