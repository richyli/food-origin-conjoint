/* 食品產地 CBC — 設計設定檔
 * 兩宣稱情境（台灣貨 / 日本進口）× 供應鏈四產地環節 × forced binary（無 None）
 * 改這裡即可調文案 / 題數 / endpoint，HTML 不用動。choice sets 在 survey_data.js。
 */
window.FO_CONFIG = {
  // SheetMonkey 收件 endpoint（此研究專屬 form）
  endpoint: 'https://api.sheetmonkey.io/form/rkQ93PLApzRhCv85nSgSDx',

  researcher: '政大新聞　李怡志',   // 首尾頁署名

  productLabel: '花生糖',
  minAnswerSec: 3,                // 每題最短停留秒數（倒數結束才能選，防搶答）

  // 兩情境呈現順序 counterbalance（進場隨機決定先台灣貨或先日本進口）
  scenarios: ['TW', 'JP'],
  scenarioTitle: {
    TW: '標榜「產地：台灣」的花生糖',
    JP: '標榜「日本進口」的花生糖',
  },
  // 產品名放進題幹（兩款同名，品牌名不當變數）；card 只留供應鏈流程圖 + 價格，更簡潔易比較
  productName: { TW: '田庄花生糖', JP: 'まめ堂花生糖' },
  scenarioPrompt: {
    TW: '以下兩款都是宣稱「產地：台灣」的<b>田庄花生糖</b>，你覺得<b>消費者會選擇</b>哪一款？',
    JP: '以下兩款都是宣稱「日本進口」的<b>まめ堂花生糖</b>，你覺得<b>消費者會選擇</b>哪一款？',
  },

  // 四產地環節（供應鏈流程圖，由左到右）
  chainSteps: [
    { key: 'origin', icon: '🌾', label: '原料' },
    { key: 'made',   icon: '🏭', label: '製造' },
    { key: 'packed', icon: '📦', label: '分裝' },
    { key: 'brand',  icon: '🏷️', label: '品牌' },
  ],

  // 產地國別的視覺分類（決定流程圖底色）：本地 / 進口 / 未標示
  countryClass: {
    '台灣': 'tw', '中國': 'import', '日本': 'import', '印度': 'import', '未標示': 'none',
  },

  // trap 指定邊：情境一點 A（上）、情境二點 B（下），避免學會固定點同側
  trapSide: { TW: 'A', JP: 'B' },

  // 量表（5 點 Likert；CBC 後測，事後與 conjoint 交互比對）
  // 對應 design_memo §5：食安焦慮 / 族群中心 / 制度信任 / 隱蔽標示態度
  scales: [
    { key: 'anx1',  text: '我擔心加工食品的原料來源不明。' },
    { key: 'anx2',  text: '買加工食品時，我會注意原料是不是進口的。' },
    { key: 'cet1',  text: '在品質相近時，我偏好購買台灣本地生產的食品。' },
    { key: 'cet2',  text: '支持台灣本地農產品是消費者應盡的責任。' },
    { key: 'trust1', text: '我信任現行「產地：台灣」標示所傳達的訊息。' },
    { key: 'hide1', text: '加工食品只標加工地、不標原料來源，是一種欺瞞。' },
    { key: 'hide2', text: '我認為消費者有權知道加工食品主要原料的來源國。' },
    { key: 'marker_blue', text: '我很喜歡藍色。', marker: true }, // CMV marker
  ],
  scaleAnchors: ['非常不同意', '不同意', '普通', '同意', '非常同意'],

  // 人口變數
  demographics: [
    { key: 'sex', q: '生理性別', opts: ['女', '男', '不願透露'] },
    { key: 'age', q: '年齡', opts: ['18–29', '30–39', '40–49', '50–59', '60 以上'] },
    { key: 'buy', q: '過去三個月是否購買過加工食品', opts: ['有', '沒有'] },
  ],
};
