// Shared horizontal carousel controller — native scroll (touch/trackpad swipe),
// keyboard arrows, mouse click-drag, and a click/drag scrubber. No arrow buttons.
// Extracted from the Journal / Selected-Work carousels so blog posts reuse the
// exact same behaviour. Wire it with element IDs:
//   initCarousel({ wrap, track, bar, knob, scrub, item, autoMs, noAuto })
export function initCarousel(o) {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var wrap = document.getElementById(o.wrap);
  var track = document.getElementById(o.track);
  var bar = document.getElementById(o.bar);
  var knob = document.getElementById(o.knob);
  var scrub = document.getElementById(o.scrub);
  var itemSel = o.item;
  var autoMs = o.autoMs || 5000;
  if (!wrap || !track) return;

  function maxScroll() { return track.scrollWidth - track.clientWidth; }
  function step() {
    var c = track.querySelector(itemSel);
    return c ? c.getBoundingClientRect().width + 28 : track.clientWidth * 0.8;
  }
  function sync() {
    var max = maxScroll();
    var f = max > 0 ? Math.min(1, Math.max(0, track.scrollLeft / max)) : 0;
    if (bar) bar.style.transform = 'scaleX(' + f + ')';
    if (knob) knob.style.left = (f * 100) + '%';
    if (scrub) scrub.setAttribute('aria-valuenow', Math.round(f * 100));
  }
  track.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync);
  sync();

  if (scrub) {
    var seeking = false;
    var seek = function (clientX) {
      var r = scrub.getBoundingClientRect();
      var f = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
      track.scrollLeft = f * maxScroll();
    };
    scrub.addEventListener('pointerdown', function (e) {
      seeking = true;
      try { scrub.setPointerCapture(e.pointerId); } catch (err) {}
      seek(e.clientX);
    });
    scrub.addEventListener('pointermove', function (e) { if (seeking) seek(e.clientX); });
    scrub.addEventListener('pointerup', function () { seeking = false; });
    scrub.addEventListener('pointercancel', function () { seeking = false; });
  }

  wrap.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); track.scrollBy({ left: step(), behavior: 'smooth' }); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); track.scrollBy({ left: -step(), behavior: 'smooth' }); }
  });

  // Mouse click-drag to scroll. Only becomes a "drag" past 8px; a real drag
  // suppresses exactly the one click that follows, so links stay live.
  var DRAG = 8;
  var pid = null, x0 = 0, s0 = 0, dragging = false;
  track.addEventListener('pointerdown', function (e) {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    pid = e.pointerId; x0 = e.clientX; s0 = track.scrollLeft; dragging = false;
  });
  track.addEventListener('pointermove', function (e) {
    if (e.pointerId !== pid) return;
    var dx = e.clientX - x0;
    if (!dragging) {
      if (Math.abs(dx) < DRAG) return;
      dragging = true;
      track.classList.add('is-dragging');
      try { track.setPointerCapture(pid); } catch (err) {}
    }
    e.preventDefault();
    track.scrollLeft = s0 - dx;
  });
  function endDrag(e) {
    if (pid === null || (e && e.pointerId !== pid)) return;
    try { track.releasePointerCapture(pid); } catch (err) {}
    pid = null;
    if (dragging) {
      track.classList.remove('is-dragging');
      var kill = function (ev) { ev.preventDefault(); ev.stopPropagation(); };
      track.addEventListener('click', kill, { capture: true, once: true });
      setTimeout(function () { track.removeEventListener('click', kill, true); }, 60);
    }
    dragging = false;
  }
  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);

  var auto = null;
  function play() {
    if (reduce || o.noAuto) return;
    stopAuto();
    auto = setInterval(function () {
      var max = track.scrollWidth - track.clientWidth - 4;
      if (track.scrollLeft >= max) track.scrollTo({ left: 0, behavior: 'smooth' });
      else track.scrollBy({ left: step(), behavior: 'smooth' });
    }, autoMs);
  }
  function stopAuto() { if (auto) { clearInterval(auto); auto = null; } }
  track.addEventListener('pointerdown', function () {
    stopAuto();
    track.scrollTo({ left: track.scrollLeft });
  });
  ['pointerenter', 'focusin', 'touchstart'].forEach(function (ev) {
    wrap.addEventListener(ev, stopAuto, { passive: true });
  });
  ['pointerleave', 'focusout', 'touchend'].forEach(function (ev) {
    wrap.addEventListener(ev, function () { stopAuto(); play(); }, { passive: true });
  });
  document.addEventListener('visibilitychange', function () { document.hidden ? stopAuto() : play(); });
  play();
}
