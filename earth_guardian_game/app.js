let progress = loadProgress();
let currentZoneCode = null;
let currentCase = null;
let missionQuestions = [];
let questionIndex = 0;
let currentOptions = [];
let selectedMulti = new Set();
let keywordReadBonus = false;
let missionCorrect = 0;

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
  renderCardBox(card);
  unlockCard(card.name);
  saveProgress(progress);
  renderStats();
}

function renderCardBox(card) {
  $("cardContent").innerHTML = `
    <h3>資料卡｜${escapeHtml(card.name)}</h3>
    <p>${escapeHtml(card.summary)}</p>
    <details>
      <summary>完整資料</summary>
      <p>${escapeHtml(card.detail)}</p>
    </details>
    <p class="muted">點選至少 2 個關鍵字，可獲得本次任務的閱讀加成。</p>
    <div class="keyword-list">
      ${card.keywords.map((keyword) => `<button class="keyword" type="button" data-keyword>${escapeHtml(keyword)}</button>`).join("")}
    </div>
  `;
}

function toggleKeyword(element) {
  element.classList.toggle("selected");

  if (document.querySelectorAll(".keyword.selected").length >= 2 && !keywordReadBonus) {
    keywordReadBonus = true;
    toast("已啟動閱讀加成：答對會額外提升熟練度");
  }
}

function renderQuestion() {
  if (questionIndex >= missionQuestions.length) {
    finishMission();
    return;
  }

  const question = missionQuestions[questionIndex];
  selectedMulti = new Set();
  currentOptions = question.type === "truefalse" ? ["正確", "錯誤"] : shuffleArray(question.options || []);
  const questionType = question.type === "multi" ? "多重線索判斷" : question.type === "truefalse" ? "真偽判斷" : "單一關鍵判斷";

  $("quizContent").innerHTML = `
    <p class="tagline">第 ${questionIndex + 1}/${missionQuestions.length} 題｜${questionType}</p>
    <h2>${escapeHtml(question.question)}</h2>
    <p class="muted">概念：${escapeHtml(question.concept)}｜Lv.${question.level}｜推薦資料卡：${escapeHtml(question.card)}</p>
    <div class="option-list">
      ${currentOptions.map((option, index) => `
        <button class="option" type="button" data-option-index="${index}">
          ${String.fromCharCode(65 + index)}. ${escapeHtml(String(option))}
        </button>
      `).join("")}
    </div>
    ${question.type === "multi" ? '<button type="button" onclick="submitMultiAnswer()">送出多重線索判斷</button>' : ""}
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
    const gain = (question.level === 1 ? 4 : question.level === 2 ? 6 : 8) + (keywordReadBonus ? 2 : 0);
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
        <h3>${unlocked ? "資料卡" : "尚未解鎖"}｜${escapeHtml(card.name)}</h3>
        <p>${unlocked ? escapeHtml(card.summary) : "完成相關案件後解鎖。"}</p>
        ${unlocked ? `<details><summary>完整內容</summary><p>${escapeHtml(card.detail)}</p></details>` : ""}
      </article>
    `;
  }).join("");
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
  $("caseContent").innerHTML = `<h2>錯題修復</h2><p>${escapeHtml(question.concept)}</p>`;
  renderCardBox(CARDS.find((card) => card.name === question.card) || CARDS[0]);
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
