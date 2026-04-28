# HIW — How Internet Works

互動式網路基礎建設教學網站，透過步驟切換與拓撲圖，讓非技術背景的人也能理解網路如何運作。

## 主題

| 狀態 | 主題 | 說明 |
|------|------|------|
| done | **DNS / IP / ASN** | 封包如何找到目的地 |
| done | **HTTPS** | 通訊如何加密 |
| done | **VPN** | 如何隱藏身份與位置 |
| done | **CDN / DDoS** | 網站如何扛住惡意流量 |
| done | **網路治理** | 誰制定網路的規則 |
| todo | **Peering** | 不同網路之間如何交換流量 |

### DNS / IP / ASN 子主題

- **基礎：封包的旅程** — DNS 查詢、IP 路由、ASN 跳轉的完整流程
- **域名的世界** — 域名作為門牌的權力結構
- **DNS 封鎖與審查** — 政府如何透過 DNS 擋網站，以及繞過方式
- **BGP 劫持** — 巴基斯坦意外癱瘓全球 YouTube 的真實案例
- **網路斷網與域名扣押** — 政府如何關掉一個國家的網路、域名的權力結構

### HTTPS 子主題

- **基礎：加密如何保護你** — TLS 握手與加密保護的範圍
- **SNI 洩漏** — 即使有 HTTPS，「正在訪問哪個網站」仍然可見
- **中間人攻擊** — 憑證信任鏈與政府強裝根憑證的風險

### VPN 子主題

- **基礎：VPN 怎麼運作** — 加密通道、路徑改變、對外身份替換
- **VPN 翻牆** — 如何繞過封鎖，以及為什麼有些國家連 VPN 也擋得住
- **VPN 的信任問題** — 信任從 ISP 轉移到 VPN 商，怎麼選

### CDN / DDoS 子主題

- **DDoS 攻擊** — 假流量如何灌爆網站，為什麼公民社會特別容易成為目標
- **CDN 防禦** — 全球分散內容，讓攻擊打不到真的伺服器
- **保護公民社會網站** — Project Galileo、Deflect、Project Shield 等免費服務

### 網路治理子主題

- **誰管網路？認識 I*** — IETF、ICANN、W3C、RIRs、ISOC、IAB 各自的角色
- **多方利害關係人模式** — 政府、企業、技術社群、公民社會共治怎麼運作
- **公民社會怎麼參與** — IGF、ICANN public comment、台灣在其中的位置

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
