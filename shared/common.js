/**
 * HIW 共用元件 — 導覽列與頁尾
 */

function renderNav(currentPage) {
  const pages = [
    { id: 'home', label: '首頁', href: '../index.html' },
    { id: 'dns-ip-asn', label: 'DNS / IP / ASN', href: '../dns-ip-asn/index.html' },
  ];

  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.innerHTML = `
    <a href="../index.html" class="logo">HIW</a>
    <ul class="nav-links">
      ${pages.map(p => `
        <li><a href="${p.href}" class="${p.id === currentPage ? 'active' : ''}">${p.label}</a></li>
      `).join('')}
    </ul>
  `;
  document.body.prepend(nav);
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.textContent = 'HIW — How Internet Works';
  document.body.append(footer);
}
