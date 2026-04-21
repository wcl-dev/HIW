# HIW — How Internet Works

互動式網路基礎建設教學網站，透過步驟切換與拓撲圖，讓非技術背景的人也能理解網路如何運作。

## 主題

| 狀態 | 主題 | 說明 |
|------|------|------|
| done | **DNS / IP / ASN** | 封包如何找到目的地 |
| todo | **HTTPS** | 通訊如何加密 |
| todo | **VPN** | 如何隱藏身份與位置 |
| todo | **CDN / DDoS** | 網站如何扛住惡意流量 |
| todo | **Peering** | 不同網路之間如何交換流量 |

### DNS / IP / ASN 子主題

- **基礎：封包的旅程** — DNS 查詢、IP 路由、ASN 跳轉的完整流程
- **DNS 封鎖與審查** — 政府如何透過 DNS 擋網站，以及繞過方式
- **BGP 劫持** — 巴基斯坦意外癱瘓全球 YouTube 的真實案例
- **網路斷網與域名扣押** — 政府如何關掉一個國家的網路、域名的權力結構

## 技術

純靜態網站，零依賴：

- HTML + CSS + Vanilla JS
- SVG 拓撲圖搭配步驟切換互動
- 部署於 GitHub Pages https://wcl-dev.github.io/HIW/

## 本地開發

用任何靜態伺服器開啟即可，例如：

```bash
npx serve .
```

或直接用瀏覽器開啟 `index.html`。

## 授權

本作品以 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 授權釋出。
