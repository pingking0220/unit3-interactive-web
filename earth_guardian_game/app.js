let progress = loadProgress();
let currentZoneCode = null;
let currentCase = null;
let missionQuestions = [];
let questionIndex = 0;
let currentOptions = [];
let selectedMulti = new Set();
let keywordReadBonus = false;
let missionCorrect = 0;
let currentCard = null;
let currentEvidenceQuestion = null;
let selectedKeywords = new Set();

const evidenceAliases = {
  "地形": ["高山", "平原", "河流", "海岸", "山地", "丘陵", "盆地", "台地", "地理"],
  "海拔": ["高海拔", "低海拔", "高度", "高山", "山區"],
  "氣候": ["溫度", "雨量", "寒冷", "潮濕", "乾旱", "熱浪", "洪水"],
  "棲地": ["住所", "生活空間", "生存空間", "水域", "濕地", "森林", "海岸"],
  "地理隔離": ["隔離", "族群", "分化", "交流"],
  "遺傳多樣性": ["遺傳", "族群差異", "同種"],
  "自然分布": ["分布", "特定地區", "原生"],
  "特定地區": ["只分布", "限於", "臺灣"],
  "瀕臨絕種": ["絕種", "稀有", "族群"],
  "棲地保護": ["保護棲地", "生活環境", "減少干擾"],
  "保持距離": ["距離", "觀察", "不干擾"],
  "不餵食": ["餵食", "零食", "食物"],
  "外來種": ["引進", "國外", "其他地區", "不是本地"],
  "入侵種": ["入侵", "影響原有生態", "排擠", "危害"],
  "大量繁衍": ["繁衍", "成群", "擴散", "快速"],
  "福壽螺": ["粉紅色卵塊", "稻田", "水田"],
  "嫩莖": ["嫩葉", "幼苗", "農作物"],
  "農業損失": ["農損", "農田", "作物"],
  "源頭預防": ["預防", "源頭", "不要引進"],
  "監測通報": ["監測", "通報", "早期"],
  "水汙染": ["河川", "廢水", "水質", "魚群死亡", "異味"],
  "空氣汙染": ["AQI", "黑煙", "咳嗽", "呼吸", "廢氣"],
  "工廠排放": ["工廠", "煙囪", "排放"],
  "交通廢氣": ["車輛", "交通", "汽機車"],
  "棲地破壞": ["開發", "砍樹", "道路", "切割"],
  "路殺": ["道路", "穿越", "車輛"],
  "全球暖化": ["暖化", "升溫", "氣候變遷"],
  "溫室效應": ["溫室", "保溫", "大氣"],
  "溫室氣體": ["二氧化碳", "甲烷", "排放"],
  "珊瑚白化": ["白化", "珊瑚", "海水升溫"],
  "碳足跡": ["碳排", "排放", "生命週期"],
  "水足跡": ["用水", "水資源", "產品製造"],
  "節能": ["省電", "用電", "能源"],
  "減碳": ["低碳", "排放", "淨零"],
  "重複使用": ["再使用", "一次性", "減量"],
  "淨零": ["淨零碳排", "減排", "碳匯"],
  "減少排放": ["減排", "低碳", "溫室氣體"],
  "森林吸碳": ["碳匯", "植林", "復林", "吸收"]
};

const $ = (id) => document.getElementById(id);

window.addEventListener("DOMContentLoaded", init);

function init() {
  bindMissionEvents();
  renderStats();
  renderMap();
  showView("mapView");
}

function bindMissionEvents() {
  document.addEventListener("click", (event) => {
    const optionButton = event.target.closest("[data-option-index]");
    if (optionButton) {
      selectOption(Number(optionButton.dataset.optionIndex), optionButton);
    }

    const keyword = event.target.closest("[data-keyword]");
    if (keyword) {
      toggleKeyword(keyword);
    }
  });
}

function showView(id) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  $(id).classList.add("active");

  if (id === "mapView") renderMap();
  if (id === "cardsView") renderCards();
  if (id === "wrongView") renderWrongList();
  if (id === "teacherView") renderTeacherView();

  renderStats();
}

function renderStats() {
  $("energyStat").textContent = progress.energy || 0;
  $("cardsStat").textContent = progress.unlockedCards.length;
  $("wrongStat").textContent = progress.wrongQuestions.length;
}

function renderMap() {
  $("zoneGrid").innerHTML = ZONES.map((zone) => {
    const mastery = getMastery(zone.code);
    const questionCount = QUESTIONS.filter((question) => question.zone === zone.code).length;
    const stateText = mastery >= 80 ? zone.mapState.high : mastery >= 40 ? zone.mapState.mid : zone.mapState.low;

    return `
      <article class="zone-card" style="--zone:${zone.themeColor}">
        <div>
          <div class="zone-icon">${zone.icon}</div>
          <h3>${escapeHtml(zone.title)}</h3>
          <p class="muted">${escapeHtml(zone.description)}</p>
          <p class="tiny">${escapeHtml(stateText)}</p>
          <div class="progress-wrap">
            <div class="progress-bar" style="width:${mastery}%;background:${zone.themeColor}"></div>
          </div>
          <small class="muted">熟練度 ${mastery}%｜題庫 ${questionCount} 題</small>
        </div>
        <button type="button" onclick="startMission('${zone.code}')">進入案件</button>
      </article>
    `;
  }).join("");
}

function quickStart() {
  const weakestZone = [...ZONES].sort((left, right) => getMastery(left.code) - getMastery(right.code))[0];
  startMission(weakestZone.code);
}

function startMission(zoneCode) {
  currentZoneCode = zoneCode;
  keywordReadBonus = false;
  selectedKeywords = new Set();
  currentCard = null;
  currentEvidenceQuestion = null;
  missionCorrect = 0;

  const cases = CASES.filter((caseItem) => caseItem.zone === zoneCode);
  currentCase = pickRandom(cases);
  missionQuestions = buildMissionQuestions(zoneCode, currentCase).slice(0, 5);
  questionIndex = 0;

  renderMissionIntro();
  renderQuestion();
  showView("missionView");
}

function buildMissionQuestions(zoneCode, caseItem) {
  const related = QUESTIONS.filter((question) => {
    if (question.zone !== zoneCode) return false;
    if (caseItem.relatedConcepts?.length && caseItem.relatedConcepts.includes(question.concept)) return true;
    if (caseItem.relatedCards?.length && caseItem.relatedCards.includes(question.card)) return true;
    return question.case === caseItem.title;
  });

  const fallback = QUESTIONS.filter((question) => question.zone === zoneCode);
  const pool = related.length >= 5 ? related : uniqueQuestions([...related, ...fallback]);
  return shuffleArray(pool);
}

function uniqueQuestions(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function renderMissionIntro() {
  const zone = ZONES.find((item) => item.code === currentZoneCode);
  $("caseContent").innerHTML = `
    <p class="tagline">${zone.icon} ${escapeHtml(zone.title)}</p>
    <h2>${escapeHtml(currentCase.title)}</h2>
    <p>${escapeHtml(currentCase.intro)}</p>
    <p><b>任務目標：</b>${escapeHtml(currentCase.missionGoal)}</p>
    <p class="tiny">規則：先讀資料卡，再找關鍵字。答錯會進入錯題修復，答對會提升熟練度。</p>
  `;

  const card = CARDS.find((item) => item.name === currentCase.relatedCards[0]) || CARDS[0];
  renderCardBox(card, null);
  unlockCard(card.name);
  saveProgress(progress);
  renderStats();
}

function renderCardBox(card, question) {
  currentCard = card;
  currentEvidenceQuestion = question;
  selectedKeywords = new Set();
  keywordReadBonus = false;
  const needed = getEvidenceNeeded(question, card);
  $("cardContent").innerHTML = `
    ${renderVisualCard(card)}
    ${renderCardReading(card)}
    <p class="muted"><b>閱讀取證：</b>${question ? `請找出本題需要的 ${needed} 個主證據，找對後才會開啟作答。` : "進入題目後，請依題幹找出真正相關的主證據。"}</p>
    <div class="keyword-list">
      ${card.keywords.map((keyword) => `<button class="keyword" type="button" data-keyword="${escapeHtml(keyword)}">${escapeHtml(keyword)}</button>`).join("")}
    </div>
    <div id="keywordEvidence" class="evidence-box">
      <p class="tiny">${question ? "先讀題目，再點選你認為能支持判斷的主證據。" : "請先進入題目，系統會依題幹判斷哪些證據最關鍵。"}</p>
    </div>
  `;
  updateKeywordEvidence();
}

function toggleKeyword(element) {
  const keyword = element.dataset.keyword;
  if (selectedKeywords.has(keyword)) {
    selectedKeywords.delete(keyword);
    element.classList.remove("selected");
  } else {
    selectedKeywords.add(keyword);
    element.classList.add("selected");
  }

  updateKeywordEvidence();

  if (hasRequiredEvidence() && !keywordReadBonus) {
    keywordReadBonus = true;
    toast("主證據已找齊：作答選項已解鎖");
    renderQuestion();
  } else if (!keywordReadBonus) {
    const needed = getEvidenceNeeded(currentEvidenceQuestion, currentCard);
    const current = countRequiredEvidence();
    toast(`已找到 ${current}/${needed} 個主證據`);
  }
}

function updateKeywordEvidence() {
  const evidence = $("keywordEvidence");
  if (!evidence || !currentCard) return;

  const requiredKeywords = getQuestionEvidenceKeywords(currentEvidenceQuestion, currentCard);
  const needed = getEvidenceNeeded(currentEvidenceQuestion, currentCard);
  const requiredCount = countRequiredEvidence();
  const insights = currentCard.keywordInsights || [];
  const selectedInsights = insights.filter((item) => selectedKeywords.has(item.keyword));
  if (!selectedInsights.length) {
    evidence.innerHTML = `<p class="tiny">${currentEvidenceQuestion ? "先讀題目，再點選你認為能支持判斷的主證據。" : "請先進入題目，系統會依題幹判斷哪些證據最關鍵。"}</p>`;
    return;
  }

  evidence.innerHTML = `
    <h4>已取得的證據</h4>
    <ul>
      ${selectedInsights.map((item) => {
        const isRequired = requiredKeywords.includes(item.keyword);
        const label = isRequired ? "主證據" : "背景線索";
        return `<li class="${isRequired ? "evidence-main" : "evidence-context"}"><b>${escapeHtml(item.keyword)}｜${label}：</b>${escapeHtml(item.insight)}</li>`;
      }).join("")}
    </ul>
    ${requiredCount >= needed ? `<div class="bridge"><b>推理連結：</b>${escapeHtml(getEvidenceBridge(currentEvidenceQuestion, currentCard))}</div>` : `<p class="tiny">目前找到 ${requiredCount}/${needed} 個主證據。背景線索可以幫助理解，但不能單獨解鎖作答。</p>`}
  `;
}

function getEvidenceNeeded(question, card) {
  if (!question || !card?.keywords?.length) return 2;
  return Math.min(2, getQuestionEvidenceKeywords(question, card).length || card.keywords.length);
}

function hasRequiredEvidence() {
  const needed = getEvidenceNeeded(currentEvidenceQuestion, currentCard);
  return countRequiredEvidence() >= needed;
}

function countRequiredEvidence() {
  const requiredKeywords = getQuestionEvidenceKeywords(currentEvidenceQuestion, currentCard);
  return [...selectedKeywords].filter((keyword) => requiredKeywords.includes(keyword)).length;
}

function getQuestionEvidenceKeywords(question, card) {
  if (!question || !card?.keywords?.length) return [];
  const questionText = [
    question.question,
    question.concept,
    question.explanation,
    Array.isArray(question.answer) ? question.answer.join(" ") : question.answer,
    ...(question.options || [])
  ].join(" ");

  const scored = card.keywords.map((keyword, index) => {
    const aliases = evidenceAliases[keyword] || [];
    let score = questionText.includes(keyword) ? 4 : 0;
    aliases.forEach((alias) => {
      if (questionText.includes(alias)) score += 2;
    });
    if ((card.questionHint || "").includes(keyword)) score += 1;
    if ((card.keyIdea || "").includes(keyword)) score += 1;
    return { keyword, score, index };
  });

  const positive = scored
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score || left.index - right.index)
    .map((item) => item.keyword);

  return positive.length ? positive.slice(0, Math.min(3, positive.length)) : card.keywords.slice(0, Math.min(2, card.keywords.length));
}

function getEvidenceBridge(question, card) {
  if (!question) return card.readingBridge || card.questionHint || card.summary;
  const required = getQuestionEvidenceKeywords(question, card).slice(0, getEvidenceNeeded(question, card));
  return `本題可用「${required.join("、")}」支持判斷：${question.explanation}`;
}

function renderQuestion() {
  if (questionIndex >= missionQuestions.length) {
    finishMission();
    return;
  }

  const question = missionQuestions[questionIndex];
  if (!currentEvidenceQuestion || currentEvidenceQuestion.id !== question.id) {
    const card = CARDS.find((item) => item.name === question.card) || CARDS[0];
    renderCardBox(card, question);
  }

  selectedMulti = new Set();
  currentOptions = question.type === "truefalse" ? ["正確", "錯誤"] : shuffleArray(question.options || []);
  const questionType = question.type === "multi" ? "多重線索判斷" : question.type === "truefalse" ? "真偽判斷" : "單一關鍵判斷";
  const evidenceReady = keywordReadBonus || !currentCard;
  const needed = getEvidenceNeeded(question, currentCard);
  const currentEvidenceCount = countRequiredEvidence();

  $("quizContent").innerHTML = `
    <p class="tagline">第 ${questionIndex + 1}/${missionQuestions.length} 題｜${escapeHtml(question.stageLabel || questionType)}</p>
    <h2>${escapeHtml(question.question)}</h2>
    <p class="muted">概念：${escapeHtml(question.concept)}｜能力：${escapeHtml(question.cognitiveSkill || questionType)}｜推薦資料卡：${escapeHtml(question.card)}</p>
    ${evidenceReady ? '<p class="tiny evidence-ready">主證據已找齊，可以根據資料卡線索作答。</p>' : `<p class="tiny evidence-lock">請先在左側資料卡找出本題主證據：${currentEvidenceCount}/${needed}。</p>`}
    <div class="option-list">
      ${currentOptions.map((option, index) => `
        <button class="option" type="button" data-option-index="${index}" ${evidenceReady ? "" : "disabled"}>
          ${String.fromCharCode(65 + index)}. ${escapeHtml(String(option))}
        </button>
      `).join("")}
    </div>
    ${question.type === "multi" ? `<button type="button" onclick="submitMultiAnswer()" ${evidenceReady ? "" : "disabled"}>送出多重線索判斷</button>` : ""}
    <div id="feedbackBox"></div>
  `;
}

function selectOption(index, button) {
  const question = missionQuestions[questionIndex];
  const value = currentOptions[index];

  if (question.type === "multi") {
    if (selectedMulti.has(value)) {
      selectedMulti.delete(value);
    } else {
      selectedMulti.add(value);
    }
    button.classList.toggle("multi-selected");
    return;
  }

  const selected = question.type === "truefalse" ? value === "正確" : value;
  showFeedback(question, selected === question.answer);
}

function submitMultiAnswer() {
  const question = missionQuestions[questionIndex];
  const answer = Array.isArray(question.answer) ? question.answer : [];
  const selected = [...selectedMulti];
  const isCorrect = selected.length === answer.length && selected.every((item) => answer.includes(item));
  showFeedback(question, isCorrect);
}

function showFeedback(question, isCorrect) {
  document.querySelectorAll(".option").forEach((button) => {
    button.disabled = true;
  });

  const monster = MONSTERS.find((item) => item.name === question.monster);
  if (isCorrect) {
    const gain = question.level === 1 ? 4 : question.level === 2 ? 6 : 8;
    missionCorrect += 1;
    addMastery(question.zone, gain);
    progress.energy += 10;
    unlockCard(question.card);
    removeWrongQuestion(question.id);
    progress.answered[question.id] = { correct: true, lastAnsweredAt: new Date().toISOString() };
    $("feedbackBox").innerHTML = `
      <div class="feedback ok">
        <h3>修復成功！熟練度 +${gain}</h3>
        <p>${escapeHtml(question.explanation)}</p>
        <p class="tiny">你已先完成閱讀取證，這次加分來自概念判斷本身，不再額外灌分。</p>
        <button type="button" onclick="nextQuestion()">下一題</button>
      </div>
    `;
  } else {
    addWrongQuestion(question.id);
    progress.answered[question.id] = { correct: false, lastAnsweredAt: new Date().toISOString() };
    $("feedbackBox").innerHTML = `
      <div class="feedback no">
        <h3>觀念需要修復</h3>
        <p>${escapeHtml(question.explanation)}</p>
        ${monster ? `
          <div class="monster">
            <b>你遇到了：${escapeHtml(monster.name)}</b>
            <p>迷思：${escapeHtml(monster.misconception)}</p>
            <p>修正：${escapeHtml(monster.correction)}</p>
          </div>
        ` : ""}
        <button type="button" onclick="nextQuestion()">繼續任務</button>
      </div>
    `;
  }

  saveProgress(progress);
  renderStats();
}

function nextQuestion() {
  questionIndex += 1;
  keywordReadBonus = false;
  selectedKeywords = new Set();
  currentEvidenceQuestion = null;
  renderQuestion();
}

function finishMission() {
  const zone = ZONES.find((item) => item.code === currentZoneCode);
  const accuracy = missionQuestions.length ? Math.round((missionCorrect / missionQuestions.length) * 100) : 0;
  const grade = accuracy >= 100 ? "S 精熟" : accuracy >= 80 ? "A 穩定" : accuracy >= 60 ? "B 基礎" : "C 需修復";

  progress.energy += currentCase.reward.energy;
  unlockCard(currentCase.reward.card);
  saveProgress(progress);

  $("quizContent").innerHTML = `
    <h2>任務完成｜${grade}</h2>
    <p>${escapeHtml(currentCase.completionText)}</p>
    <p>本次正確率：${missionCorrect} / ${missionQuestions.length}（${accuracy}%）</p>
    <div class="progress-wrap">
      <div class="progress-bar" style="width:${getMastery(currentZoneCode)}%;background:${zone.themeColor}"></div>
    </div>
    <p>${escapeHtml(zone.title)} 熟練度：${getMastery(currentZoneCode)}%</p>
    <p class="muted">若還有錯題，請到「錯題修復」重讀資料卡並重新挑戰。</p>
    <button type="button" onclick="startMission('${currentZoneCode}')">再接一個案件</button>
    <button class="secondary" type="button" onclick="showView('mapView')">回任務地圖</button>
  `;
}

function renderCards() {
  $("cardsList").innerHTML = CARDS.map((card) => {
    const unlocked = progress.unlockedCards.includes(card.name);
    return `
      <article class="row-card ${unlocked ? "" : "dim"}">
        ${unlocked ? renderVisualCard(card) : `<h3>尚未解鎖｜${escapeHtml(card.name)}</h3><p>完成相關案件後解鎖。</p>`}
        ${unlocked ? renderCardReading(card, true) : ""}
      </article>
    `;
  }).join("");
}

function renderVisualCard(card) {
  const visual = card.visual || {};
  const chips = visual.chips || card.keywords || [];
  return `
    <div class="visual-card palette-${escapeHtml(visual.palette || "forest")}">
      <div class="visual-icon">${escapeHtml(visual.icon || "📌")}</div>
      <div>
        <p class="tiny">圖片小卡｜${escapeHtml(card.topic || "核心概念")}</p>
        <h3>${escapeHtml(card.name)}</h3>
        <p>${escapeHtml(visual.scene || card.summary)}</p>
        <div class="mini-chips">${chips.map((chip) => `<span>${escapeHtml(chip)}</span>`).join("")}</div>
      </div>
    </div>
  `;
}

function renderCardReading(card, expanded = false) {
  return `
    <div class="card-reading">
      <p><b>核心觀念：</b>${escapeHtml(card.keyIdea || card.summary)}</p>
      <div class="reading-grid">
        <div>
          <h4>觀察線索</h4>
          <ul>${(card.lookFor || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>常見迷思</h4>
          <p>${escapeHtml(card.commonMistake || "只背名詞，沒有連結原因與結果。")}</p>
          <h4>行動提醒</h4>
          <p>${escapeHtml(card.action || "回到資料卡，用關鍵字整理成一句因果句。")}</p>
        </div>
      </div>
      <details ${expanded ? "open" : ""}>
        <summary>答題提示與課本依據</summary>
        <p><b>答題提示：</b>${escapeHtml(card.questionHint || card.summary)}</p>
        <p><b>課程依據：</b>${escapeHtml(card.sourceBasis || "第 3 單元：我們只有一個地球。")}</p>
      </details>
    </div>
  `;
}

function renderWrongList() {
  const ids = progress.wrongQuestions;
  if (!ids.length) {
    $("wrongList").innerHTML = '<div class="row-card"><h3>目前沒有錯題</h3><p>漂亮，調查局暫時安全。下一步可以挑戰熟練度最低的區域。</p></div>';
    return;
  }

  $("wrongList").innerHTML = ids.map((id) => {
    const question = QUESTIONS.find((item) => item.id === id);
    if (!question) return "";
    return `
      <article class="row-card">
        <h3>${escapeHtml(question.concept)}</h3>
        <p>${escapeHtml(question.question)}</p>
        <p>推薦重讀：${escapeHtml(question.card)}</p>
        <button type="button" onclick="reviewQuestion('${question.id}')">重新挑戰</button>
      </article>
    `;
  }).join("");
}

function reviewQuestion(id) {
  const question = QUESTIONS.find((item) => item.id === id);
  currentZoneCode = question.zone;
  currentCase = {
    title: "錯題修復",
    intro: "重新閱讀資料卡，修復剛才的迷思。",
    missionGoal: "找出錯誤觀念，重新建立正確概念。",
    relatedCards: [question.card],
    reward: { energy: 0, card: question.card }
  };
  missionQuestions = [question];
  questionIndex = 0;
  missionCorrect = 0;
  keywordReadBonus = false;
  currentEvidenceQuestion = null;
  $("caseContent").innerHTML = `<h2>錯題修復</h2><p>${escapeHtml(question.concept)}</p>`;
  renderCardBox(CARDS.find((card) => card.name === question.card) || CARDS[0], question);
  renderQuestion();
  showView("missionView");
}

function renderTeacherView() {
  const rows = ZONES.map((zone) => `
    <div class="row-card">
      <h3>${escapeHtml(zone.title)}</h3>
      <p>熟練度：${getMastery(zone.code)}%｜題數：${QUESTIONS.filter((question) => question.zone === zone.code).length}</p>
    </div>
  `).join("");

  $("teacherContent").innerHTML = `
    ${rows}
    <div class="nav">
      <button type="button" onclick="downloadProgressCSV()">匯出 CSV</button>
      <button class="danger" type="button" onclick="resetAll()">重置進度</button>
    </div>
  `;
}

function downloadProgressCSV() {
  const rows = [["zone", "mastery", "question_count", "wrong_count"]];
  ZONES.forEach((zone) => {
    rows.push([
      zone.title,
      getMastery(zone.code),
      QUESTIONS.filter((question) => question.zone === zone.code).length,
      progress.wrongQuestions.filter((id) => QUESTIONS.find((question) => question.id === id)?.zone === zone.code).length
    ]);
  });

  const csv = rows.map((row) => row.join(",")).join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: "text/csv" }));
  link.download = "earth_guardian_progress.csv";
  link.click();
}

function resetAll() {
  if (!confirm("確定重置所有進度？")) return;
  resetProgressData();
  progress = loadProgress();
  showView("mapView");
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffleArray(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toast(message) {
  const element = $("toast");
  element.textContent = message;
  element.classList.add("show");
  setTimeout(() => element.classList.remove("show"), 1800);
}

Object.assign(window, {
  showView,
  quickStart,
  startMission,
  submitMultiAnswer,
  nextQuestion,
  reviewQuestion,
  downloadProgressCSV,
  resetAll
});
