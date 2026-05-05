const slides = [
  {
    id: "bio",
    image: "assets/panorama-1.png",
    title: "臺灣的生物多樣性",
    subtitle: "地形、氣候、海拔與島嶼位置交織，孕育遺傳、物種與生態系多樣性。",
    accent: "#2f7d3d",
    theme: "",
    chips: ["環境梯度", "三層次", "特有種", "保育類", "山椒魚案例"],
    lead: "這張圖把臺灣的自然條件整理成一條因果線：多樣地理環境形成多種棲地，多種棲地支持多樣生物，也讓特有種與保育議題變得重要。",
    keys: [
      ["環境梯度", "臺灣從平原、海岸到高山，海拔與氣候差異讓不同生物找到合適棲地。"],
      ["生物多樣性", "包含遺傳多樣性、物種多樣性與生態系多樣性，三者共同維持穩定。"],
      ["保育觀念", "獵捕、棲地破壞、外來種入侵與氣候變遷，都可能讓族群數量下降。"]
    ],
    corrections: [
      {
        x: 5.9,
        y: 82.4,
        w: 12.2,
        h: 3.6,
        text: "臺灣欒樹、候鳥"
      },
      {
        x: 68.8,
        y: 58.2,
        w: 28,
        h: 3.8,
        text: "臺灣藍鵲：與外來種紅嘴藍鵲競爭棲地"
      }
    ],
    hotspots: [
      {
        label: "環境梯度",
        x: 3.2,
        y: 21.5,
        w: 21.5,
        h: 72,
        title: "臺灣環境梯度",
        body: "由低海拔平原與海岸，到 3500 公尺以上高山，溫度、雨量與植被都不同，因此形成多樣棲地。",
        points: [["觀察重點", "同一張梯度圖中可以看到山椒魚、鳥類、山羌、臺灣黑熊、候鳥等分布差異。"], ["課堂提問", "如果氣溫上升，高海拔生物的棲地會變大還是變小？"]]
      },
      {
        label: "三層多樣性",
        x: 26,
        y: 21.5,
        w: 41,
        h: 56,
        title: "生物多樣性三層次",
        body: "遺傳多樣性看同種內差異，物種多樣性看不同生物種類，生態系多樣性看不同環境組合。",
        points: [["遺傳多樣性", "山椒魚因棲地隔離而逐漸分化。"], ["物種多樣性", "不同海拔與雨量孕育山羌、臺灣黑熊、玉山圓柏等。"], ["生態系多樣性", "森林、溪流、濕地、海岸與高山共同組成自然網絡。"]]
      },
      {
        label: "特有與保育",
        x: 68.2,
        y: 21.5,
        w: 29.4,
        h: 31,
        title: "特有種與保育類",
        body: "特有種只分布在某地區；保育類則包含瀕臨絕種、珍貴稀有或其他應予保育的野生生物。",
        points: [["保育原因", "棲地破壞、獵捕、外來種競爭與氣候變遷都會造成壓力。"], ["行動方向", "劃定保護區、物種復育、尊重自然與避免干擾。"]]
      },
      {
        label: "代表例子",
        x: 68.2,
        y: 53.5,
        w: 29.4,
        h: 40,
        title: "教材中的代表例子",
        body: "臺灣藍鵲、黃裳鳳蝶、櫻花鉤吻鮭、臺灣百合都能用來討論棲地與人類活動的影響。",
        points: [["臺灣藍鵲", "與外來種紅嘴藍鵲競爭棲地。"], ["櫻花鉤吻鮭", "七家灣溪水溫若超過 17℃，會形成不適當棲地。"], ["臺灣百合", "採摘與棲地破壞會讓族群減少。"]]
      },
      {
        label: "山椒魚案例",
        x: 26,
        y: 79.2,
        w: 41,
        h: 15,
        title: "山椒魚與遺傳多樣性",
        body: "山椒魚侷限在不同山區與溪流源頭，彼此交流少，長時間逐漸分化成不同形態。",
        points: [["可比較", "南湖、觀霧、楚南氏、阿里山與臺灣山椒魚的分布範圍。"], ["探究方法", "用地圖標示分布，再討論山脈、溪流源頭如何形成隔離。"]]
      }
    ],
    quiz: {
      question: "下列哪一項最能解釋臺灣生物多樣性高的原因？",
      options: ["臺灣只有單一氣候，生物容易集中", "海拔、氣候、雨量與棲地差異大", "所有外來種都能提高原生生態穩定", "保育類生物只需要人工餵食"],
      answer: 1,
      explain: "臺灣海拔落差、氣候與棲地類型多元，才能支持豐富物種與生態系。"
    }
  },
  {
    id: "invasive",
    image: "assets/panorama-2.png",
    title: "外來入侵種與生態平衡",
    subtitle: "外來物種不一定有害；若繁衍成群並影響原生生態，就會成為外來入侵種。",
    accent: "#c0602c",
    theme: "theme-orange",
    chips: ["引進途徑", "快速擴散", "常見入侵種", "四守則", "探究任務"],
    lead: "這張圖用流程說明外來入侵種如何從人類引進、逃逸或棄養，到快速擴散並造成生態衝擊。",
    keys: [
      ["外來物種", "因人類活動由其他地區引進，例如稻米、番薯、番茄，不一定有害。"],
      ["外來入侵種", "在新環境繁衍成群，並影響原有環境中生物的生存。"],
      ["最有效策略", "源頭預防：不非法引入、不夾帶、不購買來路不明、不任意棄養。"]
    ],
    hotspots: [
      {
        label: "入侵流程",
        x: 3,
        y: 17,
        w: 94,
        h: 23,
        title: "從引進到衝擊",
        body: "人類引進後，如果動植物逃逸或被棄養，就可能在缺少天敵的新環境快速擴散。",
        points: [["關鍵轉折", "不是所有外來種都會入侵，重點在是否大量繁殖並壓迫原有生物。"], ["造成衝擊", "搶奪食物與棲地、破壞農作物、排擠原生種。"]]
      },
      {
        label: "入侵種圖鑑",
        x: 3,
        y: 41,
        w: 62,
        h: 38,
        title: "臺灣常見外來入侵種",
        body: "福壽螺、入侵紅火蟻、大花咸豐草、銀合歡、小花蔓澤蘭等，都能討論不同入侵路徑。",
        points: [["福壽螺", "原作食用，棄養後大量繁殖，啃食農作物。"], ["小花蔓澤蘭", "攀附植物並遮光，讓其他植物難以生存。"], ["入侵紅火蟻", "受驚擾會攻擊，可能造成劇痛或過敏。"]]
      },
      {
        label: "避免入侵",
        x: 66,
        y: 41,
        w: 31,
        h: 38,
        title: "避免入侵四守則",
        body: "從個人行為就能降低風險：不非法引入、不夾帶、不買來路不明、不任意棄養。",
        points: [["補充", "若已經造成環境影響，需要依生物特性進行防治，例如人工拔除小花蔓澤蘭。"], ["態度", "對環境變化保持敏感，吸收正確防治資訊。"]]
      },
      {
        label: "概念辨析",
        x: 3,
        y: 79.8,
        w: 45.8,
        h: 16.2,
        title: "外來種不一定有害",
        body: "外來物種與外來入侵種要分清楚；判斷重點是它是否影響原有環境中生物的生存。",
        points: [["例子", "稻米、番薯、番茄是外來物種；福壽螺、吳郭魚則可作外來入侵種案例。"]]
      },
      {
        label: "探究任務",
        x: 50.2,
        y: 79.8,
        w: 46.8,
        h: 16.2,
        title: "野生動物與人類衝突",
        body: "可選石虎或臺灣黑熊案例，記錄資料來源、日期、地點、物種身分，再整理成圖表。",
        points: [["資料素養", "質性資料做筆記分類；量化資料可按年、季、月製作圖表。"]]
      }
    ],
    quiz: {
      question: "哪一種情況最符合「外來入侵種」的概念？",
      options: ["外來植物被栽種在溫室中，沒有外流", "外來生物在野外大量繁殖並排擠原生種", "原生動物受到保護而數量回升", "特有種只生活在固定山區"],
      answer: 1,
      explain: "外來入侵種的重點是進入新環境後大量繁殖，並對原有生態造成影響。"
    }
  },
  {
    id: "impact",
    image: "assets/panorama-3.png",
    title: "人類活動對環境的影響",
    subtitle: "水汙染、空氣汙染與棲地破壞會連鎖影響生物多樣性，也會回到人類健康與生活。",
    accent: "#1f6b9d",
    theme: "theme-blue",
    chips: ["水汙染", "空氣汙染", "棲地破壞", "生物多樣性價值", "學習判斷"],
    lead: "這張圖把人類活動造成的環境問題拆成三類：水、空氣、棲地。每一類都要同時看來源、影響與防治方式。",
    keys: [
      ["水汙染", "工廠廢水、家庭汙水、畜牧汙水、廢油與垃圾會危害水中生物與人體健康。"],
      ["空氣汙染", "廢氣、粉塵、燃燒污染物會影響呼吸系統，也可能形成酸雨。"],
      ["棲地破壞", "道路與山坡地開發會切割棲地，提高物種滅絕風險。"]
    ],
    hotspots: [
      {
        label: "水汙染",
        x: 1.7,
        y: 21,
        w: 33,
        h: 45,
        title: "水汙染的來源與防治",
        body: "水在地下水、地表水、河川與海洋間相通，汙染會擴散並累積。",
        points: [["來源", "工廠廢水、家庭汙水、畜牧汙水、廢油、垃圾滲漏。"], ["防治", "汙水處理、溼地淨化、水源保護區、環保清潔劑。"]]
      },
      {
        label: "空氣汙染",
        x: 35,
        y: 21,
        w: 30,
        h: 45,
        title: "空氣汙染與健康",
        body: "空氣汙染物包含臭氧、二氧化硫、二氧化氮、一氧化碳、落塵與懸浮微粒。",
        points: [["影響", "危害呼吸系統，影響動植物生長，也可能形成酸雨。"], ["行動", "少開車、搭大眾運輸、定期檢查廢氣、禁止露天燃燒。"]]
      },
      {
        label: "棲地破壞",
        x: 65.5,
        y: 21,
        w: 33,
        h: 45,
        title: "環境開發與棲地破碎化",
        body: "道路、山坡地開墾與森林砍伐會讓大面積棲地被切割成小面積棲地。",
        points: [["石虎案例", "道路開發會切割淺山棲地並增加路殺風險。"], ["平衡思考", "交通、農民財產與保育需求要共同討論。"]]
      },
      {
        label: "生活價值",
        x: 2,
        y: 68,
        w: 76,
        h: 25,
        title: "生物多樣性對人類的重要",
        body: "糧食、醫藥、建材、衣物與材料都來自自然提供的多樣資源。",
        points: [["穩定性", "生物種類愈多，生態系越不容易因少數物種變動而失衡。"], ["生活連結", "人類日常用品其實大量依賴自然界。"]]
      },
      {
        label: "學習判斷",
        x: 78,
        y: 68,
        w: 20,
        h: 25,
        title: "判斷人類活動的影響",
        body: "當一項活動帶來便利時，也要問它是否增加汙染、切割棲地或降低生物多樣性。",
        points: [["討論句型", "這項開發的好處是什麼？代價是什麼？可以如何降低傷害？"]]
      }
    ],
    quiz: {
      question: "下列哪一項最符合「棲地破碎化」？",
      options: ["同一片森林被道路切成多個小區塊", "水經過處理後再排入河川", "植物種類增加讓環境更穩定", "學生整理 AQI 資料做圖表"],
      answer: 0,
      explain: "棲地破碎化是大面積棲地被開發或道路切割成小面積棲地，會降低生物活動與繁殖機會。"
    }
  },
  {
    id: "climate",
    image: "assets/panorama-4.png",
    title: "全球環境變遷與全球暖化",
    subtitle: "正常溫室效應讓地球適合生命；異常加劇則使全球升溫，帶來極端氣候與棲地改變。",
    accent: "#d46b40",
    theme: "theme-sun",
    chips: ["溫室氣體", "溫室效應", "全球暖化", "極端氣候", "生物影響"],
    lead: "這張圖的核心是「正常溫室效應」與「異常溫室效應」的差異：適量能保溫，過量則導致暖化。",
    keys: [
      ["成因", "燃燒化石燃料、森林砍伐與海洋吸碳能力下降，都會讓大氣中二氧化碳增加。"],
      ["過程", "地表釋放紅外線，溫室氣體吸收並回放熱能，使低層大氣增溫。"],
      ["影響", "熱浪、洪水、乾旱、森林大火與棲地改變會影響人類與生物。"]
    ],
    hotspots: [
      {
        label: "暖化成因",
        x: 2,
        y: 19.5,
        w: 25,
        h: 47,
        title: "造成氣候變遷的因素",
        body: "大量燃燒化石燃料會排放二氧化碳；森林砍伐會降低吸收二氧化碳的能力。",
        points: [["補充", "海面水溫增加，也會讓海洋吸收二氧化碳的量變少。"], ["溫室氣體", "水蒸氣、二氧化碳、甲烷、氧化亞氮、氟氯碳化物、臭氧。"]]
      },
      {
        label: "示意圖",
        x: 28,
        y: 19.5,
        w: 44,
        h: 47,
        title: "溫室效應示意圖",
        body: "太陽輻射進入地球，地表吸收後釋放紅外線，溫室氣體吸收並回放熱能。",
        points: [["正常效果", "讓地球維持適合生命的溫度。"], ["異常效果", "溫室氣體過量，全球平均溫度上升。"]]
      },
      {
        label: "正常與異常",
        x: 73,
        y: 19.5,
        w: 25,
        h: 31,
        title: "正常與異常溫室效應",
        body: "溫室效應不是壞事，真正的問題是人類活動讓溫室氣體濃度過高。",
        points: [["結果", "全球暖化會帶來極端氣候，也改變生物棲地與分布。"]]
      },
      {
        label: "極端氣候",
        x: 2,
        y: 68,
        w: 25,
        h: 25,
        title: "極端氣候",
        body: "熱浪、洪水、乾旱、森林大火等事件增加，會直接影響人類生活與生物存活。",
        points: [["觀察", "可請學生蒐集近年新聞，整理事件地點、成因與影響。"]]
      },
      {
        label: "生物影響",
        x: 28,
        y: 68,
        w: 44,
        h: 25,
        title: "對生物與環境的影響",
        body: "冰山融化、珊瑚白化、乾旱、瞬間強降雨、開花時間不穩、熱帶生物擴大範圍，都是可能影響。",
        points: [["珊瑚白化", "海水溫度升高時，共生藻可能離開，影響珊瑚生存。"], ["農作風險", "長期乾旱或開花時間不穩會影響耕作與結果。"]]
      }
    ],
    quiz: {
      question: "關於溫室效應，下列哪一項說法最正確？",
      options: ["所有溫室效應都會讓生命無法生存", "正常溫室效應有助於維持地球溫度", "二氧化碳越多，地球一定越穩定", "暖化只影響北極，不影響人類生活"],
      answer: 1,
      explain: "正常溫室效應能維持適合生命的溫度；異常加劇才會造成全球暖化與極端氣候。"
    }
  },
  {
    id: "action",
    image: "assets/panorama-5.png",
    title: "打造永續家園行動圖",
    subtitle: "從淨零、再生能源、碳足跡與水足跡到日常綠色行動，把環境態度落實成生活選擇。",
    accent: "#3b8847",
    theme: "",
    chips: ["淨零", "再生能源", "碳足跡", "水足跡", "藻礁案例"],
    lead: "這張圖把解決方案整理在一起：國家政策、能源選擇、產品生命週期與個人日常行動都能降低環境負擔。",
    keys: [
      ["淨零排放", "不是完全不排放，而是把排放極小化，再用森林碳匯、負碳技術等抵消。"],
      ["足跡概念", "碳足跡與水足跡提醒我們，產品背後有看不見的排放與用水。"],
      ["綠色行動", "源頭減量、拒絕一次性用品、重複使用、資源回收、低碳交通與在地蔬食。"]
    ],
    hotspots: [
      {
        label: "氣候目標",
        x: 2.5,
        y: 21,
        w: 21,
        h: 54,
        title: "氣候行動目標",
        body: "氣候變遷因應法、2050 淨零排放與巴黎協定，都是把減緩與調適納入行動。",
        points: [["淨零", "把人為排放極小化，再用碳匯或負碳技術抵消。"], ["巴黎協定", "努力把升溫控制在 1.5℃ 以內。"]]
      },
      {
        label: "友善能源",
        x: 25,
        y: 21,
        w: 39,
        h: 36,
        title: "較友善的能源選擇",
        body: "風力、太陽能、水力等低汙染發電方式能減少環境負擔，但各自也有地點、天候或生態限制。",
        points: [["風力", "需要長期有強風且開闊的地點。"], ["太陽能", "受天氣、季節、緯度、空間與設備影響。"], ["水力", "水庫可能改變河川生態。"]]
      },
      {
        label: "碳水足跡",
        x: 25,
        y: 52,
        w: 39,
        h: 23,
        title: "碳足跡與水足跡",
        body: "一項產品從原料取得、製造、運輸銷售、使用到廢棄回收，都會消耗能源與水。",
        points: [["碳足跡", "生命週期中直接與間接產生的溫室氣體排放量。"], ["水足跡", "直接與間接消耗的水資源總量。"]]
      },
      {
        label: "水足跡顏色",
        x: 2.5,
        y: 76,
        w: 23,
        h: 19,
        title: "水足跡三種顏色",
        body: "綠色水足跡是降雨儲存在土壤中的水；藍色水足跡是地表或地下淡水；灰色水足跡是稀釋或淨化汙水所需水量。",
        points: [["學習連結", "水足跡讓產品背後的隱藏用水更透明。"]]
      },
      {
        label: "綠色行動",
        x: 26,
        y: 76,
        w: 38,
        h: 19,
        title: "日常綠色行動",
        body: "把環境態度落實到生活選擇：減量、重複使用、回收、節約能源、低碳交通、在地蔬食。",
        points: [["行動設計", "可以請學生選三項最容易開始的行動，寫成一週承諾。"]]
      },
      {
        label: "珍愛藻礁",
        x: 66,
        y: 21,
        w: 31.5,
        h: 74,
        title: "好讀單案例：珍愛藻礁",
        body: "藻礁由可鈣化的石灰藻形成，是海洋生物棲地與育嬰房；形成非常慢，一旦破壞很難復原。",
        points: [["教材數據", "桃園海岸藻礁原長度 27 公里、厚 4 公尺，約花 7600 年形成。"], ["核心問題", "科技發展與生態保護如何取得平衡？"]]
      }
    ],
    quiz: {
      question: "下列哪一項最符合「碳足跡」的意思？",
      options: ["只計算產品使用時排出的煙", "產品生命週期中直接與間接的溫室氣體排放量", "河流、湖泊與地下水的總量", "保育類生物的活動範圍"],
      answer: 1,
      explain: "碳足跡看的是活動或產品整個生命週期中的溫室氣體排放。"
    }
  }
];

function quizItem(question, options, answer, explain) {
  return { question, options, answer, explain };
}

const quizBanks = {
  bio: [
    quizItem("臺灣具有豐富生物多樣性的主要原因是什麼？", ["臺灣只有單一氣候", "海拔、氣候、雨量與棲地差異大", "所有生物都生活在海岸", "外來種愈多愈穩定"], 1, "臺灣的海拔落差、氣候與棲地類型多元，支持豐富物種與生態系。"),
    quizItem("生物多樣性不包含下列哪一項？", ["遺傳多樣性", "物種多樣性", "生態系多樣性", "課桌椅多樣性"], 3, "生物多樣性包含遺傳、物種與生態系三個層次。"),
    quizItem("山椒魚形成不同形態，主要和哪個因素有關？", ["長期棲地隔離，族群交流少", "每天吃不同食物", "人類人工上色", "全部生活在都市"], 0, "山椒魚侷限在不同山區與溪流源頭，長期隔離而逐漸分化。"),
    quizItem("「特有種」的意思是什麼？", ["只分布或生長於某特定地區的生物", "所有動物園裡的生物", "從國外引進的生物", "只在夜晚活動的生物"], 0, "特有種是只分布或生長於某特定地區的生物。"),
    quizItem("下列哪一項屬於保育類生物面臨的風險？", ["棲地破壞", "保護區增加", "物種復育", "生態監測"], 0, "棲地破壞、獵捕、外來種競爭與氣候變遷都可能讓族群減少。"),
    quizItem("臺灣藍鵲的教材修正重點是什麼？", ["與外來種紅嘴藍鵲競爭棲地", "只生活在沙漠", "是外來入侵種", "完全不受棲地影響"], 0, "臺灣藍鵲可用來討論外來種競爭與棲地壓力。"),
    quizItem("櫻花鉤吻鮭若遇到七家灣溪水溫過高，可能發生什麼事？", ["形成不適當棲地", "變成陸生動物", "不需要溪流", "一定大量繁殖"], 0, "水溫超過適合範圍會影響櫻花鉤吻鮭生存。"),
    quizItem("臺灣低海拔平原與海岸區可看到哪組標示？", ["臺灣欒樹、候鳥", "北極熊、苔蘚", "仙人掌、駱駝", "企鵝、海豹"], 0, "低海拔平原與海岸區標示為臺灣欒樹、候鳥。"),
    quizItem("下列哪一項最能說明「生態系多樣性」？", ["森林、溪流、濕地、海岸與高山等環境多元", "同一隻動物有不同毛色", "只計算一種植物的數量", "只看教室裡的人數"], 0, "生態系多樣性關注不同環境與其生物組成。"),
    quizItem("保護特有種與保育類生物的合適做法是什麼？", ["劃定保護區並進行監測復育", "隨意捕捉野生動物", "破壞棲地建造道路", "把不明動物放生到野外"], 0, "保護區、監測、復育與棲地修復能降低生物生存壓力。"),
    quizItem("物種多樣性主要指的是什麼？", ["不同種類生物的豐富程度", "同一種生物的座位表", "產品包裝顏色", "每天氣溫變化"], 0, "物種多樣性指一地區不同生物種類的豐富程度。"),
    quizItem("遺傳多樣性主要看的是哪一種差異？", ["同種生物內部的差異", "學校班級數量", "城市道路數量", "雲朵形狀"], 0, "遺傳多樣性是同一類生物內部的差異。"),
    quizItem("臺灣四面環海對生物多樣性的幫助是什麼？", ["形成海岸與濕地等多樣生態環境", "讓所有高山消失", "讓所有生物只能住海裡", "讓外來種自動消失"], 0, "四面環海使海岸、濕地與候鳥中繼等生態條件更豐富。"),
    quizItem("「候鳥中繼站」代表臺灣有什麼生態意義？", ["連結東亞遷徙路線，提供鳥類停留棲地", "所有鳥類都不會遷徙", "候鳥只會停在都市", "鳥類不需要棲地"], 0, "臺灣位於候鳥遷徙路線上，是重要停留與補給環境。"),
    quizItem("下列哪一項最能維持生態系穩定？", ["保有多樣物種與棲地", "只留下單一物種", "大量引進不明生物", "讓棲地被切割破壞"], 0, "物種與棲地愈多元，生態系通常愈能抵抗變動。")
  ],
  invasive: [
    quizItem("哪一種情況最符合「外來入侵種」？", ["外來生物在野外大量繁殖並排擠原生種", "原生動物受到保護而數量回升", "植物被放在教室盆栽中", "特有種只生活在固定山區"], 0, "外來入侵種會在新環境繁衍成群，並影響原有生態。"),
    quizItem("外來物種一定有害嗎？", ["不一定，重點是是否造成生態影響", "一定有害", "一定能增加穩定", "只要漂亮就沒有問題"], 0, "外來物種不一定有害；造成衝擊才稱為外來入侵種。"),
    quizItem("福壽螺造成的主要問題是什麼？", ["啃食農作物並造成農業損失", "幫助所有植物生長", "只住在高山雪地", "淨化空氣"], 0, "福壽螺繁殖與適應力強，會啃食農作物。"),
    quizItem("小花蔓澤蘭被稱為「植物殺手」的原因是什麼？", ["攀附並遮光，使其他植物難以生存", "能幫所有樹木授粉", "只生活在水族箱", "會保護原生植物"], 0, "小花蔓澤蘭生長快，會攀爬遮蔽其他植物。"),
    quizItem("入侵紅火蟻對人類可能造成什麼影響？", ["叮咬造成劇痛或過敏反應", "提供乾淨飲用水", "降低所有污染", "讓道路更安全"], 0, "入侵紅火蟻受驚擾會攻擊，人類可能劇痛或過敏。"),
    quizItem("避免外來種入侵的正確做法是什麼？", ["不從國外夾帶動植物回國", "把不想養的寵物放生", "購買來路不明動物", "任意丟棄水生植物"], 0, "源頭預防包含不夾帶、不購買來路不明、不棄養。"),
    quizItem("布袋蓮可能造成的問題是什麼？", ["大量繁殖使水域生態失衡", "讓河川永遠不會缺氧", "只會在沙漠生長", "完全不會擴散"], 0, "布袋蓮繁殖力強，可能覆蓋水域並造成失衡。"),
    quizItem("銀合歡危害原生植物的方式之一是什麼？", ["排他性強，根部分泌物抑制其他植物", "幫原生植物遮風", "只能在冰原生長", "不會繁殖"], 0, "銀合歡排他性強，會抑制其他植物生長。"),
    quizItem("家八哥成為常見外來種鳥類的原因包含什麼？", ["被棄養後適應力強並擴大族群", "原本就是臺灣特有種", "只能住在海底", "完全不會繁殖"], 0, "家八哥作寵物鳥引進，棄養後適應城市環境。"),
    quizItem("外來入侵種的防治為什麼強調源頭管制？", ["入侵後清除困難且成本高", "源頭管制會增加入侵", "所有入侵種都會自動消失", "入侵後一定沒有影響"], 0, "最有效方式是避免非法引入與任意棄養。"),
    quizItem("外來入侵種可能造成哪一種生態衝擊？", ["搶奪食物與棲地", "讓所有物種數量平均增加", "使棲地永遠不變", "完全不影響農業"], 0, "入侵種可能搶食物、搶棲地、排擠原生種。"),
    quizItem("埃及聖䴉的教材案例強調什麼？", ["逃逸後可能與本土鳥類競爭築巢位置與食物", "是臺灣高山植物", "只會淨化水質", "不能飛行"], 0, "埃及聖䴉會和其他鳥類競爭築巢與食物。"),
    quizItem("大花咸豐草被引進的原因之一是什麼？", ["作為蜜源植物增加蜂蜜產量", "用來修築道路", "作為北極動物食物", "用來測量地震"], 0, "大花咸豐草曾因蜜源用途被引進。"),
    quizItem("探究野生動物與人類衝突時，哪一項資料最有幫助？", ["資料來源、日期、地點與物種身分", "只看一張沒有來源的圖片", "只聽同學猜測", "不記錄任何資料"], 0, "探究時要記錄來源、日期、地點、物種身分，並檢查可信度。"),
    quizItem("下列哪一項不是避免外來入侵的守則？", ["任意棄養不想養的動植物", "不非法引入外來動植物", "不購買來路不明的動植物", "吸收正確防治資訊"], 0, "任意棄養會增加外來種進入自然環境的風險。")
  ],
  impact: [
    quizItem("下列哪一項最符合「棲地破碎化」？", ["同一片森林被道路切成多個小區塊", "水經處理後再排入河川", "植物種類增加", "學生整理 AQI 資料"], 0, "棲地破碎化是大面積棲地被開發或道路切割成小面積棲地。"),
    quizItem("水汙染的常見來源不包含哪一項？", ["設置水源保護區", "工廠廢水", "家庭汙水", "畜牧汙水"], 0, "水源保護區是防治方式，不是污染來源。"),
    quizItem("水汙染可能造成什麼影響？", ["魚類死亡並危害人體健康", "讓所有魚類變多", "讓空氣品質必定改善", "讓土石流消失"], 0, "受污染的水會影響水生生物、植物與人體健康。"),
    quizItem("下列哪一項能減少水汙染？", ["使用環保清潔劑", "把廢油倒入水溝", "垃圾倒進河中", "任意排放廢水"], 0, "環保清潔劑與汙水處理能減少水質惡化。"),
    quizItem("空氣汙染物不包含哪一項？", ["乾淨氧氣", "臭氧", "二氧化硫", "懸浮微粒"], 0, "臭氧、二氧化硫、二氧化氮、一氧化碳與懸浮微粒都是常見空氣污染物。"),
    quizItem("AQI 高時，較合適的行為是什麼？", ["減少戶外活動並留意心肺疾病患者", "長時間在車多道路運動", "露天燃燒垃圾", "增加汽機車使用"], 0, "空氣品質差時應降低暴露風險。"),
    quizItem("空氣汙染造成酸雨後，可能影響什麼？", ["水域、農作物與建築物", "只影響鉛筆盒", "完全不影響植物", "只讓海拔變高"], 0, "酸雨會影響水域、土壤、農作物、森林與建築材料。"),
    quizItem("人類修建道路可能對生物造成什麼影響？", ["切割棲地並增加路殺風險", "讓所有棲地連成一片", "讓物種永遠不會滅絕", "完全沒有影響"], 0, "道路開發可能破壞或分割棲地。"),
    quizItem("石虎案例可用來討論哪一項議題？", ["保育、農民財產與交通需求的平衡", "沙漠植物灌溉", "海底火山", "月球氣候"], 0, "石虎生活在淺山，常與道路、農業和保育需求產生討論。"),
    quizItem("生物多樣性對人類的價值不包含哪一項？", ["讓垃圾自動消失不需處理", "糧食", "醫藥", "建材與衣物原料"], 0, "生物多樣性提供糧食、醫藥、材料等，但不會讓垃圾自動消失。"),
    quizItem("天然木材或竹子在圖中屬於哪一類生活價值？", ["建材", "醫藥", "糧食", "空氣污染物"], 0, "木材與竹子可作為建築與生活用品材料。"),
    quizItem("棉花與羊毛主要提供哪一類資源？", ["衣物原料", "水污染源", "道路工程", "溫室氣體"], 0, "棉花與羊毛可作為衣物原料。"),
    quizItem("防制空氣汙染的行動包含哪一項？", ["搭乘大眾運輸並定期檢查廢氣", "露天燃燒垃圾", "增加燃煤", "讓工廠任意排放"], 0, "減少汽機車使用與管制廢氣能降低空氣污染。"),
    quizItem("人類開墾山坡地若水土保持變差，可能增加什麼風險？", ["土石流", "海水結冰", "山椒魚變成鳥", "外太空污染"], 0, "濫墾濫建會降低水土保持，豪雨時可能造成土石流。"),
    quizItem("評估一項開發活動時，應該同時思考什麼？", ["便利、污染、棲地與生物多樣性影響", "只看能不能賺錢", "只看道路是否更寬", "只看圖片好不好看"], 0, "環境判斷要同時看利益與代價，包含污染與棲地影響。")
  ],
  climate: [
    quizItem("關於溫室效應，下列哪一項正確？", ["正常溫室效應有助於維持地球溫度", "所有溫室效應都會讓生命無法生存", "二氧化碳越多地球越穩定", "暖化只影響北極"], 0, "正常溫室效應能維持適合生命的溫度；異常加劇才造成暖化。"),
    quizItem("造成全球暖化的主要人為原因之一是什麼？", ["大量燃燒化石燃料", "增加森林面積", "減少能源使用", "保護濕地"], 0, "燃燒煤、石油、天然氣會增加二氧化碳排放。"),
    quizItem("森林砍伐會如何影響氣候？", ["降低吸收二氧化碳的能力", "讓二氧化碳立刻消失", "完全不影響碳循環", "使海平面下降"], 0, "森林能吸收二氧化碳，砍伐會降低碳匯功能。"),
    quizItem("下列哪一項是溫室氣體？", ["甲烷", "乾淨玻璃", "岩石", "白紙"], 0, "甲烷、二氧化碳、水蒸氣、氧化亞氮等都是溫室氣體。"),
    quizItem("溫室效應示意圖中，地球釋放的熱能主要是什麼形式？", ["紅外線", "鉛筆線", "聲波", "土石流"], 0, "地表吸收太陽能後會以紅外線長波輻射釋放能量。"),
    quizItem("異常溫室效應的結果是什麼？", ["全球平均溫度上升", "地球完全變冷", "所有雨水消失", "山脈變低"], 0, "溫室氣體過量會使全球平均溫度上升。"),
    quizItem("下列哪一項屬於極端氣候事件？", ["熱浪", "正常日夜變化", "上課鐘聲", "教室開燈"], 0, "熱浪、洪水、乾旱與森林大火都是極端氣候例子。"),
    quizItem("海水溫度升高可能使珊瑚發生什麼現象？", ["珊瑚白化", "變成陸生植物", "不再需要陽光", "完全不受影響"], 0, "海水升溫可能使共生藻離開，造成珊瑚白化。"),
    quizItem("冰山融化與海平面上升會使哪類生物棲地減少？", ["北極熊等寒帶生物", "沙漠仙人掌", "都市行道樹", "家八哥"], 0, "冰雪融化會壓縮寒帶生物的棲地。"),
    quizItem("長期乾旱最可能影響什麼？", ["農作耕作與水資源", "黑板顏色", "課桌排列", "電腦滑鼠形狀"], 0, "乾旱會影響農業與可用水資源。"),
    quizItem("瞬間強降雨可能造成什麼問題？", ["排水不易而淹水", "空氣永遠乾淨", "所有植物立即開花", "外來種自動消失"], 0, "短時間大量降雨可能超過排水能力，造成淹水。"),
    quizItem("溫帶植物開花時間不穩，可能影響什麼？", ["結果與農作收成", "海拔高度", "地球自轉", "候鳥羽毛顏色"], 0, "開花時間受溫度影響，可能進一步影響結果與產量。"),
    quizItem("熱帶生物因暖化擴大範圍，可能對溫帶生物造成什麼影響？", ["壓縮生存空間", "完全沒有競爭", "讓溫帶生物全部變熱帶", "使棲地無限增加"], 0, "暖化可能改變生物分布並造成競爭壓力。"),
    quizItem("探究全球暖化資料時，應重視什麼？", ["證據來源與數據品質", "只選支持自己想法的資料", "不記錄來源", "只看標題不看內容"], 0, "科學探究要比較不同資料並檢查來源可信度。"),
    quizItem("氣候變遷會影響人類哪一方面？", ["食物、健康與居住安全", "只影響外太空", "只影響課本頁碼", "完全不影響生活"], 0, "氣候變遷會影響農業、健康、災害風險與居住環境。")
  ],
  action: [
    quizItem("下列哪一項最符合「碳足跡」？", ["產品生命週期中直接與間接的溫室氣體排放量", "河流湖泊的總水量", "保育類活動範圍", "只計算包裝顏色"], 0, "碳足跡看活動或產品整個生命週期中的溫室氣體排放。"),
    quizItem("淨零排放的意思是什麼？", ["把排放極小化，再以碳匯或負碳技術抵消", "完全不准任何人呼吸", "只種一棵樹就完成", "增加化石燃料使用"], 0, "淨零不是完全不排放，而是讓人為排放與移除相抵。"),
    quizItem("巴黎協定努力把升溫控制在多少以內？", ["1.5℃", "15℃", "50℃", "100℃"], 0, "巴黎協定目標是控制在 2℃ 以下，並努力在 1.5℃ 以內。"),
    quizItem("下列哪一項是較友善的能源選擇？", ["風力發電", "任意燃燒垃圾", "大量燃煤且不管制", "浪費電力"], 0, "風力、太陽能、水力等可降低污染，但仍需考量限制。"),
    quizItem("太陽能發電的限制包含什麼？", ["受天氣、季節、緯度與空間影響", "完全不需要設備", "夜晚一定發電最多", "颱風永遠不影響"], 0, "太陽能受天候、季節、緯度、空間與設備成本影響。"),
    quizItem("水力發電可能造成的環境考量是什麼？", ["水庫可能改變原有河川生態", "完全不影響河流", "一定造成空氣污染最高", "不能產生電力"], 0, "水力發電雖低污染，但水庫與工程可能改變河川生態。"),
    quizItem("水足跡代表什麼？", ["直接與間接消耗的水資源總量", "鞋子的尺寸", "山的高度", "空氣品質指標"], 0, "水足跡衡量生活與產品過程中的用水。"),
    quizItem("綠色水足跡指的是什麼？", ["降雨儲存在土壤中供植物使用的水", "河流與地下水", "稀釋污染所需水量", "飲料瓶顏色"], 0, "綠色水足跡是降雨形成並儲存在土壤中的水。"),
    quizItem("藍色水足跡指的是什麼？", ["河流、湖泊、水庫與地下淡水資源", "降雨存在土壤中的水", "稀釋污染所需水量", "海報背景色"], 0, "藍色水足跡與地表或地下淡水資源有關。"),
    quizItem("灰色水足跡指的是什麼？", ["稀釋或淨化污水至標準所需水量", "植物直接用的雨水", "水庫蓄水量", "太陽能板面積"], 0, "灰色水足跡表示處理污染所需付出的水資源代價。"),
    quizItem("產品生命週期不包含下列哪一項？", ["月球採樣", "原料取得", "製造", "廢棄回收"], 0, "產品生命週期通常包含原料、製造、運輸銷售、使用與廢棄回收。"),
    quizItem("下列哪一項是日常綠色行動？", ["拒絕一次性用品", "增加不必要浪費", "任意丟棄垃圾", "購買過度包裝"], 0, "拒絕一次性用品、重複使用與回收都能降低環境負擔。"),
    quizItem("低碳交通的例子是什麼？", ["步行、騎腳踏車或搭乘公共運輸", "短距離也一定開車", "原地發動汽車很久", "增加不必要運輸"], 0, "減少汽機車使用能降低排放。"),
    quizItem("藻礁為什麼需要珍惜？", ["形成非常慢，是海洋生物棲地與育嬰房", "一天就能長成", "完全沒有生物利用", "破壞後立刻恢復"], 0, "藻礁形成時間長，提供海洋生物棲地，破壞後難復原。"),
    quizItem("桃園海岸藻礁案例中的形成時間約是多久？", ["7600 年", "7.6 天", "76 分鐘", "一年剛好 1 公里"], 0, "好讀單提到桃園海岸藻礁約花 7600 年形成。")
  ]
};

slides.forEach((slide) => {
  slide.quizBank = quizBanks[slide.id];
});

const hotspotReadings = {
  bio: {
    "環境梯度": [
      ["有趣閱讀｜一座島像一條立體氣候帶", "臺灣面積不大，但從海岸到高山的高度變化很大。短距離內就能經過海岸、闊葉林、針葉林到高山環境，像把不同氣候帶摺疊在同一座島上。"],
      ["生活連結｜爬山為什麼會變冷？", "海拔上升時氣溫通常會降低，所以山上的植物、昆蟲與兩生類，常需要更耐寒或更潮濕的環境。這也是高山生物很容易受到暖化影響的原因。"],
      ["想一想", "如果未來低海拔變得更熱，原本生活在涼冷山區的生物可以往哪裡移動？牠們一定找得到新棲地嗎？"]
    ],
    "三層多樣性": [
      ["有趣閱讀｜多樣性像生態系的保險", "如果一個環境裡只有少數物種，一旦其中一種生物大量減少，整個食物網就容易受影響。物種愈多，生態系通常愈有機會分散風險。"],
      ["概念補充｜不是只數動物種類", "生物多樣性不只是看有幾種動物，也包含同種生物的基因差異，以及森林、溪流、濕地、海岸等不同生態系的差異。"],
      ["課堂任務", "請學生用三種顏色圈出圖中的遺傳多樣性、物種多樣性、生態系多樣性，並各舉一個例子。"]
    ],
    "特有與保育": [
      ["有趣閱讀｜特有種像自然界的限量版", "特有種只在某個地區自然分布，一旦當地棲地被破壞，就很難從別處補回來。保育特有種，其實也是保護地方獨特的自然故事。"],
      ["保育觀念｜保護生物也要保護牠的家", "只保護某一隻動物不夠，還要保護牠覓食、繁殖、躲避天敵與移動所需的棲地。棲地完整，族群才有機會穩定。"],
      ["想一想", "如果一種保育類生物常出現在農田附近，保育與農民生活需求可以怎麼協調？"]
    ],
    "代表例子": [
      ["有趣閱讀｜臺灣藍鵲的棲地競爭", "臺灣藍鵲是臺灣特有鳥類。教材中強調牠可能與外來種紅嘴藍鵲競爭棲地，這提醒我們外來種不只會吃掉原生種，也可能搶空間、食物或繁殖位置。"],
      ["案例補充｜水溫也會變成棲地門檻", "櫻花鉤吻鮭需要低溫溪流環境。當溪流水溫升高，即使溪流還在，對牠來說也可能變成不適合居住的地方。"],
      ["閱讀提問", "臺灣百合、黃裳鳳蝶、臺灣藍鵲、櫻花鉤吻鮭面臨的壓力有什麼相同？又有什麼不同？"]
    ],
    "山椒魚案例": [
      ["有趣閱讀｜山椒魚像冰河時期留下的線索", "臺灣山椒魚偏好涼冷潮濕環境。牠們分布在不同山區與溪流源頭，像是在臺灣高山留下演化與氣候變遷的線索。"],
      ["概念補充｜隔離如何造成差異？", "當族群長期被山脈、溪流或距離隔開，彼此不容易繁殖交流，外形或基因就可能逐漸累積差異。這正好能說明遺傳多樣性。"],
      ["小調查", "查一查不同山椒魚分布在哪些山區，試著用地圖標出來，再討論牠們為什麼不容易互相交流。"]
    ]
  },
  invasive: {
    "入侵流程": [
      ["有趣閱讀｜入侵常從小縫隙開始", "外來種不一定是一開始就被看見的災害。牠可能先被當作寵物、觀賞植物或產業材料，等逃逸、棄養或擴散後，才逐漸變成生態問題。"],
      ["關鍵概念｜引進不等於入侵", "一個外來物種是否變成入侵種，要看牠是否能大量繁殖，並對原有生物、農業或人類健康造成影響。"],
      ["想一想", "如果某種外來植物很漂亮，又很容易種，為什麼仍然需要小心管理？"]
    ],
    "入侵種圖鑑": [
      ["有趣閱讀｜每種入侵種都有不同超能力", "福壽螺繁殖快，小花蔓澤蘭會攀爬遮光，布袋蓮能快速覆蓋水面。認識牠們的特性，才知道該怎麼防治。"],
      ["生活連結｜不要把水族箱倒進自然水域", "水族植物、魚、螺或蝦如果被倒入河川池塘，可能成為新的外來種來源。即使只是少量，也可能在適合環境裡快速增加。"],
      ["觀察任務", "請學生選一種入侵種，整理牠的引進原因、擴散方式、造成影響和防治方法。"]
    ],
    "避免入侵": [
      ["有趣閱讀｜最便宜的防治是預防", "外來入侵種一旦在野外站穩腳步，清除常常很花時間與成本。比起事後補救，源頭不引入、不棄養通常更有效。"],
      ["行動補充｜放生不一定是善行", "把不適合的動植物放到野外，可能讓牠們死亡，也可能破壞當地生態。真正負責任的做法是不要任意棄養。"],
      ["課堂提醒", "看到疑似入侵種時，不要自行亂抓或移動；應查詢可信單位資訊，依正確方式通報或處理。"]
    ],
    "概念辨析": [
      ["有趣閱讀｜番茄也是外來物種", "許多日常作物原本也來自其他地區，例如番薯、番茄等。它們不一定造成生態破壞，所以不能把外來物種全部等同於入侵種。"],
      ["判斷練習", "判斷一種生物是不是外來入侵種，可以問三件事：是不是人類引入？是否大量繁殖？是否影響原有生態或經濟？"],
      ["想一想", "如果一種外來植物提供蜜蜂食物，但同時排擠原生植物，我們該怎麼評估它的利與弊？"]
    ],
    "探究任務": [
      ["有趣閱讀｜野生動物衝突不是只有誰對誰錯", "石虎、臺灣黑熊等案例常牽涉農民生計、交通安全、動物棲地與地方發展。好的討論要看多方需求。"],
      ["資料素養｜先問來源可靠嗎", "探究新聞或網路資料時，要記錄來源、日期、地點與物種名稱。政府、研究單位或長期保育團體資料通常較適合做課堂證據。"],
      ["角色討論", "分組扮演居民、農民、保育團體與工程單位，提出兼顧安全、生活與保育的方案。"]
    ]
  },
  impact: {
    "水汙染": [
      ["有趣閱讀｜污染會旅行", "水在河川、地下水、湖泊與海洋之間流動。某處排放的污染物，可能經過時間擴散到更遠的地方，影響不只停在原地。"],
      ["生活連結｜看不見也可能存在", "有些污染不一定讓水立刻變色或發臭，但仍可能影響水中生物與人體健康。這就是為什麼檢測與處理很重要。"],
      ["行動任務", "請學生觀察家中清潔用品，找出是否有環保標章或減少水污染的設計。"]
    ],
    "空氣汙染": [
      ["有趣閱讀｜空氣品質也有成績單", "AQI 就像空氣品質的成績單，會綜合臭氧、懸浮微粒、一氧化碳、二氧化硫、二氧化氮等資料，提醒人們調整戶外活動。"],
      ["生活連結｜看得見的煙不是全部", "有些空氣污染看得見，例如煙與粉塵；有些看不見，例如部分氣體污染物。看不到不代表不存在。"],
      ["想一想", "如果今天 AQI 偏高，體育課、戶外打球或校外教學可以怎麼調整？"]
    ],
    "棲地破壞": [
      ["有趣閱讀｜道路像把棲地切成拼圖", "道路、建築與開墾會把原本連續的棲地切成小塊。對活動範圍大的動物來說，每一次穿越道路都可能增加危險。"],
      ["案例連結｜石虎需要的不只是一小塊草地", "石虎生活在淺山環境，需要覓食、躲藏與繁殖空間。當棲地被切割，族群交流和生存機會都會下降。"],
      ["工程想像", "如果一定要修路，可以加入哪些設計降低傷害？例如動物通道、速限、警示牌或避開重要棲地。"]
    ],
    "生活價值": [
      ["有趣閱讀｜生物多樣性藏在日常用品裡", "早餐的稻米、水果，衣服的棉花，房屋的木材，甚至藥物與天然染料，都和生物多樣性有關。"],
      ["概念補充｜生態系服務", "自然提供人類許多服務：供應食物與材料、調節氣候與水、支持授粉與土壤形成，也提供休閒與文化價值。"],
      ["小任務", "請學生從書包或餐盒中找三樣物品，追溯它們可能來自哪種生物或自然資源。"]
    ],
    "學習判斷": [
      ["有趣閱讀｜便利常有隱藏成本", "道路、工廠、住宅、農地都讓生活更方便，但也可能帶來污染、棲地切割或資源消耗。環境判斷要同時看好處與代價。"],
      ["思考工具｜三問法", "討論人類活動時可以問：誰受益？誰受影響？有沒有降低傷害的替代方案？"],
      ["辯論題", "如果某條道路能縮短通勤時間，但會穿越石虎棲地，支持與反對方各會提出哪些理由？"]
    ]
  },
  climate: {
    "暖化成因": [
      ["有趣閱讀｜碳循環像地球的收支表", "森林與海洋能吸收部分二氧化碳，燃燒化石燃料則把更多碳排到大氣中。當排放長期大於吸收，溫室氣體就會累積。"],
      ["生活連結｜電不是憑空來的", "開燈、冷氣、手機充電都需要能源。如果能源主要來自化石燃料，日常用電也會間接造成碳排放。"],
      ["想一想", "節電為什麼也能成為減緩暖化的一種行動？"]
    ],
    "示意圖": [
      ["有趣閱讀｜溫室效應不是壞人", "沒有正常溫室效應，地球會太冷，不適合現在的生命。問題在於人類活動讓溫室氣體過量，使保留的熱太多。"],
      ["概念補充｜紅外線熱能", "地表吸收太陽能後，會以紅外線形式向外釋放熱。溫室氣體能吸收部分紅外線，讓熱留在低層大氣中。"],
      ["小實驗想法", "比較透明盒內外溫度變化，討論覆蓋物如何影響熱量散失，但也提醒模型和真實大氣仍有差異。"]
    ],
    "正常與異常": [
      ["有趣閱讀｜差一點點也很重要", "全球平均溫度的變化看似只有幾度，但會牽動海洋、冰雪、雨量、農作物與生物分布。平均值改變會放大成各地不同衝擊。"],
      ["概念辨析｜天氣和氣候不同", "今天下雨或明天變冷是天氣；長時間統計出的溫度、雨量與季節型態才是氣候。全球暖化討論的是長期趨勢。"],
      ["想一想", "為什麼不能用某一天很冷，就說全球暖化不存在？"]
    ],
    "極端氣候": [
      ["有趣閱讀｜極端不是每天發生，但影響很大", "熱浪、豪雨、乾旱或森林大火不一定天天出現，但一旦發生，可能影響用水、農業、交通、健康與居住安全。"],
      ["生活連結｜城市也會放大熱", "都市有大量柏油、水泥與建築，容易吸熱並讓夜晚散熱變慢。熱浪期間，老人、小孩與戶外工作者更需要保護。"],
      ["資料任務", "蒐集一則近年極端天氣新聞，整理事件地點、影響對象、可能原因與可以準備的防災行動。"]
    ],
    "生物影響": [
      ["有趣閱讀｜生物也有舒適溫度範圍", "每種生物都有較適合的溫度、水分與棲地條件。氣候改變時，有些生物能移動，有些移動很慢，有些則沒有地方可去。"],
      ["案例連結｜珊瑚白化是警訊", "珊瑚依賴共生藻提供養分。當水溫或環境壓力過高，共生藻離開，珊瑚就會白化，若壓力持續可能死亡。"],
      ["想一想", "如果植物開花時間改變，依賴花蜜或授粉的昆蟲、鳥類會受到什麼影響？"]
    ]
  },
  action: {
    "氣候目標": [
      ["有趣閱讀｜淨零不是零活動", "淨零排放不是人類什麼都不能做，而是盡量減少排放，再用森林碳匯、土壤吸碳、技術移除等方式抵消剩餘排放。"],
      ["概念補充｜減緩與調適", "減緩是讓氣候變遷不要更嚴重，例如減碳；調適是面對已經或即將發生的衝擊，例如防洪、耐熱城市與節水。"],
      ["想一想", "學校可以做哪些減緩行動？又可以做哪些調適準備？"]
    ],
    "友善能源": [
      ["有趣閱讀｜再生能源也要選對地方", "風力、太陽能、水力都較低污染，但仍要考量風況、日照、土地利用、河川生態與設備維護。友善能源也需要完整規畫。"],
      ["生活連結｜能源選擇沒有單一答案", "不同地方適合不同能源。海邊可能適合風力，屋頂可能適合太陽能，山區水庫則涉及水力與生態平衡。"],
      ["課堂討論", "如果要替學校設計節能方案，你會先做太陽能、換 LED、冷氣管理，還是用電監測？為什麼？"]
    ],
    "碳水足跡": [
      ["有趣閱讀｜產品背後有看不見的旅程", "一個產品從原料、製造、運輸、使用到廢棄，都可能消耗能源與水。碳足跡和水足跡就是把這些看不見的過程變得可討論。"],
      ["生活連結｜在地食材為什麼常被鼓勵", "在地、當季食材通常能減少長距離運輸與冷藏需求，也能讓學生思考食物從產地到餐桌的環境成本。"],
      ["小任務", "選一樣常買飲料或文具，畫出它的生命週期五階段，想想哪一段可能最耗能或最耗水。"]
    ],
    "水足跡顏色": [
      ["有趣閱讀｜水足跡有三種顏色", "綠水是土壤中的雨水，藍水是河川湖泊地下水，灰水則是處理污染需要付出的水量。三種顏色幫我們看見不同用水方式。"],
      ["概念補充｜看不見的間接用水", "洗手、洗澡是直接用水；種稻、養棉花、製造紙張或衣服時用掉的水，則是藏在產品背後的間接用水。"],
      ["想一想", "同樣是一件衣服，為什麼材質、產地、染色與清洗方式都可能影響水足跡？"]
    ],
    "綠色行動": [
      ["有趣閱讀｜最有效的垃圾是沒有產生的垃圾", "回收很重要，但源頭減量通常更前面。少買過度包裝、重複使用容器、拒絕一次性用品，可以直接減少後端處理壓力。"],
      ["生活連結｜小行動也要持續", "一次帶環保杯很好，持續一學期更有力量。環境行動常常不是一次壯舉，而是把習慣慢慢改成低負擔版本。"],
      ["一週挑戰", "請學生選三項行動，例如自備水壺、關燈、走路或搭公車、減少剩食，記錄一週後分享最容易和最困難的地方。"]
    ],
    "珍愛藻礁": [
      ["有趣閱讀｜藻礁是海洋育嬰房", "藻礁由可鈣化的石灰藻慢慢形成，凹凸的礁體提供小魚、小蝦、螃蟹等生物躲藏、覓食與成長空間。"],
      ["案例補充｜慢慢長，破壞卻可能很快", "好讀單提到桃園海岸藻礁約花 7600 年形成。這提醒我們，有些自然資產累積很慢，一旦破壞不容易用短時間補回。"],
      ["公民思考", "如果能源建設、產業發展與珍貴棲地保護發生衝突，決策前應該蒐集哪些資料？誰應該參與討論？"]
    ]
  }
};

function getHotspotReadings(slide, hotspot) {
  return hotspotReadings[slide.id]?.[hotspot.label] || [];
}

const state = {
  current: 0,
  selectedHotspot: 0,
  activeTab: "focus",
  hotspotsVisible: true,
  completed: new Set(JSON.parse(localStorage.getItem("unit3-panorama-completed") || "[]")),
  quizSessions: {}
};

const els = {
  app: document.querySelector(".app"),
  slideNav: document.querySelector("#slideNav"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  panoramaFrame: document.querySelector("#panoramaFrame"),
  panoramaShell: document.querySelector("#panoramaShell"),
  panoramaImage: document.querySelector("#panoramaImage"),
  hotspotLayer: document.querySelector("#hotspotLayer"),
  slideNumber: document.querySelector("#slideNumber"),
  slideTitle: document.querySelector("#slideTitle"),
  slideSubtitle: document.querySelector("#slideSubtitle"),
  quickStrip: document.querySelector("#quickStrip"),
  focusLead: document.querySelector("#focusLead"),
  keyList: document.querySelector("#keyList"),
  hotspotTitle: document.querySelector("#hotspotTitle"),
  hotspotBody: document.querySelector("#hotspotBody"),
  hotspotPoints: document.querySelector("#hotspotPoints"),
  quizQuestion: document.querySelector("#quizQuestion"),
  quizOptions: document.querySelector("#quizOptions"),
  submitQuiz: document.querySelector("#submitQuiz"),
  quizFeedback: document.querySelector("#quizFeedback"),
  toggleHotspots: document.querySelector("#toggleHotspots")
};

function currentSlide() {
  return slides[state.current];
}

function saveProgress() {
  localStorage.setItem("unit3-panorama-completed", JSON.stringify([...state.completed]));
}

function renderProgress() {
  const done = state.completed.size;
  els.progressText.textContent = `已完成 ${done} / ${slides.length}`;
  els.progressBar.style.width = `${(done / slides.length) * 100}%`;
}

function setTheme(slide) {
  document.body.classList.remove("theme-blue", "theme-orange", "theme-sun");
  if (slide.theme) document.body.classList.add(slide.theme);
  els.app.style.setProperty("--slide-accent", slide.accent);
  document.documentElement.style.setProperty("--accent", slide.accent);
}

function makeKeyCards(items) {
  return items
    .map(([title, text]) => `<article class="key-card"><strong>${title}</strong><span>${text}</span></article>`)
    .join("");
}

function makeReadingCards(items) {
  if (!items.length) return "";
  return `
    <section class="reading-section">
      <h3>延伸閱讀</h3>
      <div class="reading-list">
        ${items
          .map(([title, text]) => `<article class="reading-card"><strong>${title}</strong><span>${text}</span></article>`)
          .join("")}
      </div>
    </section>
  `;
}

function renderNav() {
  els.slideNav.innerHTML = slides
    .map((slide, index) => {
      const completed = state.completed.has(slide.id) ? " completed" : "";
      const active = index === state.current ? " active" : "";
      const mark = state.completed.has(slide.id) ? "✓" : "";
      return `
        <button class="slide-button${completed}${active}" style="--slide-accent:${slide.accent}" type="button" data-slide="${index}">
          <img class="slide-thumb" src="${slide.image}" alt="">
          <span><strong>全景圖 ${index + 1}</strong><span>${slide.title}</span></span>
          <i class="done-mark">${mark}</i>
        </button>
      `;
    })
    .join("");
}

function renderSlide() {
  const slide = currentSlide();
  setTheme(slide);

  els.slideNumber.textContent = `全景圖 ${state.current + 1} / ${slides.length}`;
  els.slideTitle.textContent = slide.title;
  els.slideSubtitle.textContent = slide.subtitle;
  els.panoramaImage.src = slide.image;
  els.panoramaImage.alt = `全景圖 ${state.current + 1}：${slide.title}`;
  els.focusLead.textContent = slide.lead;
  els.keyList.innerHTML = makeKeyCards(slide.keys);
  els.quickStrip.innerHTML = slide.chips.map((chip) => `<span class="quick-chip">${chip}</span>`).join("");

  renderHotspots();
  renderHotspotDetails();
  renderQuiz();
  renderNav();
  renderProgress();
}

function renderHotspots() {
  const slide = currentSlide();
  els.panoramaFrame.classList.toggle("hotspots-hidden", !state.hotspotsVisible);
  const corrections = (slide.corrections || [])
    .map((correction) => `
      <span
        class="image-correction"
        style="left:${correction.x}%;top:${correction.y}%;width:${correction.w}%;height:${correction.h}%"
      >${correction.text}</span>
    `)
    .join("");
  const hotspots = slide.hotspots
    .map((hotspot, index) => {
      const active = index === state.selectedHotspot ? " active" : "";
      return `
        <button
          class="hotspot${active}"
          type="button"
          data-hotspot="${index}"
          data-label="${hotspot.label}"
          aria-label="${hotspot.label}"
          style="left:${hotspot.x}%;top:${hotspot.y}%;width:${hotspot.w}%;height:${hotspot.h}%"
        ></button>
      `;
    })
    .join("");
  els.hotspotLayer.innerHTML = `${corrections}${hotspots}`;
}

function renderHotspotDetails() {
  const slide = currentSlide();
  const hotspot = slide.hotspots[state.selectedHotspot];
  const readings = getHotspotReadings(slide, hotspot);
  els.hotspotTitle.textContent = hotspot.title;
  els.hotspotBody.textContent = hotspot.body;
  els.hotspotPoints.innerHTML = `${makeKeyCards(hotspot.points)}${makeReadingCards(readings)}`;
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function createQuizSession(slide) {
  const previousAttempt = state.quizSessions[slide.id]?.attempt || 0;
  return {
    attempt: previousAttempt + 1,
    submitted: false,
    passed: false,
    feedback: "",
    questions: shuffle(slide.quizBank).slice(0, 5).map((question) => ({
      ...question,
      selected: null,
      choices: shuffle(question.options.map((text, optionIndex) => ({ text, optionIndex })))
    }))
  };
}

function getQuizSession(slide, forceNew = false) {
  if (forceNew || !state.quizSessions[slide.id]) {
    state.quizSessions[slide.id] = createQuizSession(slide);
  }
  return state.quizSessions[slide.id];
}

function renderQuiz() {
  const slide = currentSlide();
  const session = getQuizSession(slide);
  const masteredText = state.completed.has(slide.id) ? "本頁已精熟通過。仍可重新練習。" : "每次隨機抽 5 題，5 題全對才精熟通過。若未全對，會重新洗題再挑戰。";

  els.quizQuestion.textContent = `題庫 15 題｜本輪 5 題｜第 ${session.attempt} 次挑戰。${masteredText}`;
  els.quizFeedback.textContent = session.feedback || "";
  els.submitQuiz.disabled = false;
  els.submitQuiz.textContent = session.submitted && !session.passed ? "重新洗題再測一次" : "送出本輪答案";

  if (session.passed) {
    els.submitQuiz.textContent = "再練習一次";
  }

  els.quizOptions.innerHTML = session.questions
    .map((question, questionIndex) => {
      const choices = question.choices
        .map((choice) => {
          const selected = question.selected === choice.optionIndex;
          const isCorrect = choice.optionIndex === question.answer;
          const isIncorrect = session.submitted && selected && !isCorrect;
          const classes = [
            "quiz-option",
            selected ? "selected" : "",
            session.submitted && isCorrect ? "correct" : "",
            isIncorrect ? "incorrect" : ""
          ].filter(Boolean).join(" ");
          return `
            <button
              class="${classes}"
              type="button"
              data-question="${questionIndex}"
              data-choice="${choice.optionIndex}"
              ${session.submitted ? "disabled" : ""}
            >${choice.text}</button>
          `;
        })
        .join("");
      return `
        <article class="quiz-card">
          <div class="quiz-card-head">
            <span>第 ${questionIndex + 1} 題</span>
            <strong>${question.question}</strong>
          </div>
          <div class="quiz-choice-list">${choices}</div>
        </article>
      `;
    })
    .join("");
}

function switchTab(tabName) {
  state.activeTab = tabName;
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-page").forEach((page) => {
    page.classList.toggle("active", page.id === `${tabName}Page`);
  });
}

function goToSlide(index) {
  state.current = (index + slides.length) % slides.length;
  state.selectedHotspot = 0;
  renderSlide();
}

function completeCurrentSlide() {
  state.completed.add(currentSlide().id);
  saveProgress();
  renderNav();
  renderProgress();
}

function selectQuizOption(button) {
  const slide = currentSlide();
  const session = getQuizSession(slide);
  if (session.submitted) return;
  const questionIndex = Number(button.dataset.question);
  const choiceIndex = Number(button.dataset.choice);
  session.questions[questionIndex].selected = choiceIndex;
  session.feedback = "";
  renderQuiz();
}

function submitQuizRound() {
  const slide = currentSlide();
  const session = getQuizSession(slide);

  if (session.submitted) {
    state.quizSessions[slide.id] = createQuizSession(slide);
    renderQuiz();
    return;
  }

  const unanswered = session.questions.filter((question) => question.selected === null).length;
  if (unanswered > 0) {
    session.feedback = `還有 ${unanswered} 題尚未作答。先完成五題，再送出本輪答案。`;
    els.quizFeedback.textContent = session.feedback;
    return;
  }

  const correctCount = session.questions.filter((question) => question.selected === question.answer).length;
  session.submitted = true;
  session.passed = correctCount === session.questions.length;

  if (session.passed) {
    completeCurrentSlide();
    session.feedback = `精熟通過。5 題全對，已完成「${slide.title}」測驗。`;
  } else {
    const explanations = session.questions
      .filter((question) => question.selected !== question.answer)
      .slice(0, 2)
      .map((question) => `「${question.question}」${question.explain}`)
      .join(" ");
    session.feedback = `本輪答對 ${correctCount} / 5，尚未精熟。檢查錯題後，按「重新洗題再測一次」會抽新五題並重排選項。${explanations}`;
  }

  renderQuiz();
}

els.slideNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-slide]");
  if (!button) return;
  goToSlide(Number(button.dataset.slide));
});

els.hotspotLayer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-hotspot]");
  if (!button) return;
  state.selectedHotspot = Number(button.dataset.hotspot);
  renderHotspots();
  renderHotspotDetails();
  switchTab("hotspot");
});

document.querySelector("#prevSlide").addEventListener("click", () => goToSlide(state.current - 1));
document.querySelector("#nextSlide").addEventListener("click", () => goToSlide(state.current + 1));
document.querySelector("#completeSlide").addEventListener("click", () => switchTab("quiz"));

document.querySelector("#resetProgress").addEventListener("click", () => {
  state.completed.clear();
  state.quizSessions = {};
  saveProgress();
  renderSlide();
  renderNav();
  renderProgress();
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => switchTab(tab.dataset.tab));
});

els.quizOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-question][data-choice]");
  if (!button) return;
  selectQuizOption(button);
});

els.submitQuiz.addEventListener("click", submitQuizRound);

els.toggleHotspots.addEventListener("click", () => {
  state.hotspotsVisible = !state.hotspotsVisible;
  els.toggleHotspots.classList.toggle("active", state.hotspotsVisible);
  renderHotspots();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") goToSlide(state.current - 1);
  if (event.key === "ArrowRight") goToSlide(state.current + 1);
  const number = Number(event.key);
  if (number >= 1 && number <= slides.length) goToSlide(number - 1);
});

renderSlide();
const initialHash = window.location.hash;
const slideHash = initialHash.match(/^#slide-(\d)(?:-(focus|hotspot|quiz))?$/);
if (slideHash) {
  goToSlide(Number(slideHash[1]) - 1);
  if (slideHash[2]) switchTab(slideHash[2]);
} else if (initialHash === "#quiz") {
  switchTab("quiz");
} else if (initialHash === "#hotspot") {
  switchTab("hotspot");
}
