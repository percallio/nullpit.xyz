/* NULL PIT · 首页竞技场 teaser (长内容在 /arena/ /rewards/ /guide/ 子页) */
const STYLES = `
html{overflow:auto !important;height:auto !important}
body{overflow:auto !important;height:auto !important;min-height:100vh}
#app{height:100vh !important}
.arena-teaser{border-top:1px solid var(--line);padding:52px 0 64px;margin-top:36px;background:var(--void)}
.at-in{max-width:1180px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:minmax(280px,420px) 1fr;gap:36px;align-items:center}
.at-in img{width:100%;border:1px solid var(--line);border-radius:8px;display:block}
.at-in h2{color:var(--acid);font-size:1.9em;margin:0 0 8px;letter-spacing:.06em}
.at-in .sub{color:var(--dust);margin:0 0 18px;letter-spacing:.08em}
.at-stats{display:flex;gap:10px;flex-wrap:wrap;margin:0 0 20px}
.at-stats .st{background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:10px 14px}
.at-stats .st b{display:block;color:var(--acid);font-size:1.05em}
.at-stats .st span{color:var(--dust);font-size:.72em}
.at-cta{display:flex;gap:10px;flex-wrap:wrap}
.at-cta a{padding:10px 18px;border-radius:6px;border:1px solid var(--acid-dark);color:var(--ink);background:var(--acid);font-weight:700;text-decoration:none;font-size:.92em}
.at-cta a:hover{transform:translateY(-2px);transition:transform .2s}
.at-cta a.g{background:transparent;color:var(--acid)}
@media(max-width:820px){.at-in{grid-template-columns:1fr;gap:22px}}
`;
function teaserHTML() {
  return `
  <section class="arena-teaser" aria-label="竞技场预告">
    <div class="at-in">
      <img src="/assets/arena-9f2ka7d1.webp" alt="NULL PIT 竞技场主视觉" width="2048" height="1152" loading="lazy">
      <div>
        <h2>竞技场 · 售罄后开启</h2>
        <p class="sub">1v1 门票对决 · 零黑箱 · 零随机 · 零先手</p>
        <div class="at-stats">
          <div class="st"><b>10M PIT</b><span>门票 / 方</span></div>
          <div class="st"><b>19M PIT</b><span>胜者通吃</span></div>
          <div class="st"><b>5M PIT</b><span>策略反制费</span></div>
          <div class="st"><b>PIT LICENSE</b><span>10 胜勋章</span></div>
        </div>
        <div class="at-cta">
          <a href="/arena/">竞技场规则</a>
          <a class="g" href="/rewards/">胜利奖励</a>
          <a class="g" href="/guide/">参与指南</a>
        </div>
      </div>
    </div>
  </section>`;
}
(function main() {
  try {
    const style = document.createElement("style");
    style.textContent = STYLES;
    document.head.appendChild(style);
    const host = document.createElement("div");
    host.innerHTML = teaserHTML();
    const sec = host.firstElementChild;
    // 挂在 body 尾部 (#app 之外): 游戏屏布局零干扰, 主 app 重绘也冲不到
    const attach = () => { if (!sec.isConnected) document.body.appendChild(sec); };
    attach();
    let n = 0;
    const t = setInterval(() => { attach(); if (++n > 8 || sec.isConnected) clearInterval(t); }, 1500);
  } catch (e) {}
})();
