
// بيانات اللعبة
const sections = [
  {
    title: "الفقرة الأولى: أسئلة عامة عن عرب فيرست",
    questions: [
      {
        text: "متى تم افتتاح عرب فيرست؟",
        options: ["2024/1/16", "2024/1/15", "2024/1/18"],
        correct: "2024/1/16",
        points: 300
      },
      {
        text: "ماهي الهدية التي قال تركي بيقدمها يوم يوصل سيرفر 200 عضو؟",
        options: [
          "500 روبوكس و 100 مليون كردت",
          "ألف روبوكس و 50 مليون كردت",
          "ألفين روبوكس و 200 مليون كردت",
          "ألف روبوكس و 30 مليون كردت"
        ],
        correct: "ألف روبوكس و 30 مليون كردت",
        points: 700
      },
      {
        text: "في أي يوم وصل سيرفر عرب فيرست لـ 40 عضو أول مرة بالرول بلاي؟",
        options: ["بعد 5 أيام", "بعد 2 أيام", "بعد 4 أيام", "في أول رول له"],
        correct: "بعد 5 أيام",
        points: 400
      },
      {
        text: "في أي يوم وصل عرب فيرست لـ 200 عضو؟",
        options: [
          "بعد 5 أيام من افتتاحه",
          "بعد أسبوع من افتتاحه",
          "بعد 10 أيام من افتتاحه",
          "بعد شهر من افتتاحه"
        ],
        correct: "بعد 10 أيام من افتتاحه",
        points: 200
      },
      {
        text: "كيف كان لون لوقو عرب فيرست أول مرة؟",
        options: null,
        correct: "لون عنابي ومايل للأحمر الغامق",
        points: 100,
        textAnswer: true
      }
    ]
  },
  {
    title: "الفقرة الثانية: أسئلة داخل رول بلاي عرب فيرست",
    questions: [
      {
        text: "كم كان من قطاع عسكري في بداية السيرفر؟",
        options: null,
        correct: "2",
        correctAlternatives: ["2 قطاعات", "الأسبيدي والشيرف", "اسبيدي وشيرف"],
        points: 100,
        textAnswer: true
      },
      {
        text: "من كان رئيس قطاع شيرف؟",
        options: [
          "مجدولين المطيري (القائدة العظيمة)",
          "جيمس آرثر (تركي المطيري)",
          "باسل المحنك",
          "نديم الأسطورة"
        ],
        correct: "باسل المحنك",
        points: 200
      },
      {
        text: "ماهو القيادي الأكثر تواجداً في سيزون 2؟",
        options: [
          "مجدولين المطيري القائدة العظيمة (شبيب آرثر)",
          "جيمس آرثر (تركي المطيري)",
          "باسل المحنك",
          "نديم الأسطورة"
        ],
        correct: "مجدولين المطيري القائدة العظيمة (شبيب آرثر)",
        points: 300
      },
      {
        text: "ماهي أول عصابة في مدينة عرب فيرست؟",
        options: ["سكراب", "الفوضى", "بروف قانق", "المتشادو"],
        correct: "الفوضى",
        points: 400
      },
      {
        text: "ما هي رتبة العسكري خالد الشمري في سيزون 2؟",
        options: ["رقيب أول", "رقيب", "رئيس رقباء", "وكيل رقيب"],
        correct: "رقيب",
        points: 700
      }
    ]
  },
  {
    title: "الفقرة الثالثة: أسئلة عن إدارة عرب فيرست",
    questions: [
      {
        text: "من هو أونر عرب فيرست؟",
        options: null,
        correct: "تركي المطيري",
        correctAlternatives: ["تركي", "المطيري"],
        points: 100,
        textAnswer: true
      },
      {
        text: "من هو مسؤول الدعم الفني سابقاً قبل أن يأخذ إجازة؟",
        options: null,
        correct: "براء",
        points: 200,
        textAnswer: true
      },
      {
        text: "كم كان ثمن رواتب الإدارة في بداية سيرفر؟",
        options: [
          "مليون كردت",
          "مليون ومية ألف كردت",
          "مليون و50 ألف كردت",
          "مليون وألف كردت"
        ],
        correct: "مليون كردت",
        points: 300
      },
      {
        text: "وش كان منصب مجدولين المطيري في بداية السيرفر (بعيداً عن مؤسس)؟",
        options: [
          "مسؤول الإدارة",
          "مسؤولة الرقابة",
          "مسؤولة التصميم",
          "المسؤولة البرمجة"
        ],
        correct: "مسؤولة الرقابة",
        points: 500
      },
      {
        text: "أفضل مبرمج في عرب فيرست حالياً؟",
        options: [
          "خالد الشمري",
          "خالد الشمري",
          "خالد الشمري",
          "خالد الشمري",
          "خالد الشمري"
        ],
        correct: "خالد الشمري",
        points: 700
      }
    ]
  },
  {
    title: "الفقرة الرابعة: تخمين لاعبين عرب فيرست",
    questions: [
      {
        text: "انا عسكري رتبة عالية بشرطة، البس جيشي، من عائلة ارثر. من اكون؟",
        options: null,
        correct: "جيمس ارثر",
        correctAlternatives: ["جيمس", "تركي", "تركي المطيري"],
        points: 100,
        textAnswer: true
      },
      {
        text: "انا عسكري قائد قسم تحقيقات بسيزون 2، رتبتي ملازم من اكون؟",
        options: null,
        correct: "سلطان",
        correctAlternatives: ["فيكتور"],
        points: 400,
        textAnswer: true
      },
      {
        text: "انا اداري كان بيني و بين ادارة العليا مشاكل و هواشات ببداية السيرفر، لكن اصبحت دو رتبة عليا من اكون؟",
        options: [
          "خالد المبرمج",
          "محمد المبرمج",
          "رسلان المبرمج سابقا",
          "ساره",
          "خالد الحربي"
        ],
        correct: "محمد المبرمج",
        points: 300
      },
      {
        text: "انا اداري عليا، من بداية السيرفر، و اعتبر من المؤسسين من اكون؟",
        options: null,
        correct: "تركي المطيري",
        correctAlternatives: ["تركي", "المطيري", "الاونر المبجل", "الاونر"],
        points: 200,
        textAnswer: true
      },
      {
        text: "انا اداري دو رتبة عليا بالادارة مؤقتا، من الاكثر تفاعلا بالسيرفر، من اكون؟",
        options: [
          "فارس",
          "مروان",
          "يمان",
          "عادل",
          "سيف",
          "بدر"
        ],
        correct: "يمان",
        points: 500
      },
      {
        text: "انا بنت ادارية، امتلك حساب روبلوكس، العب رول بلاي باحترافية، من اكون؟",
        options: [
          "سديم",
          "مجدولين المطيري القائدة العظيمة",
          "سارة الغوية"
        ],
        correct: "سديم",
        points: 700
      },
      {
        text: "انا اداري بالسيرفر، عندي مثال مشهور في العرب و المسلمين، من اكون؟",
        options: [
          "خالد المبرمج",
          "احمد",
          "سطام الشمري",
          "مروان"
        ],
        correct: "احمد",
        points: 600
      }
    ]
  }
];

// متغيرات اللعبة
let gameMode = 'single';
let team1Name = '';
let team2Name = '';
let currentTeam = 1;
let team1Score = 0;
let team2Score = 0;
let singleScore = 0;
let currentSection = 0;
let currentQuestion = 0;
let selectedSection = null;
let selectedPoints = null;
let filteredQuestions = [];
let answeredQuestions = {
  0: { 500: true }, // الفقرة الأولى - سؤال 500 نقطة مشطوب
  1: { 500: true }, // الفقرة الثانية - سؤال 500 نقطة مشطوب
  2: { 400: true }, // الفقرة الثالثة - سؤال 400 نقطة مشطوب
  3: {}             // الفقرة الرابعة - بدون أسئلة مشطوبة
}; // لتتبع الأسئلة المُجابة {sectionIndex: {points: true}}

// وظائف التحكم في الشاشات
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

// بدء اللعبة
function startGame(mode) {
  gameMode = 'team';
  showScreen('team-screen');
}

// الانتقال لشاشة الاختيار
function proceedToSelection() {
  team1Name = document.getElementById('team1').value.trim() || 'الفريق الأول';
  team2Name = document.getElementById('team2').value.trim() || 'الفريق الثاني';
  showSelectionScreen();
}

// عرض شاشة الاختيار
function showSelectionScreen() {
  showScreen('selection-screen');
  
  // عرض نقاط الفرق
  const selectionScores = document.getElementById('selection-scores');
  selectionScores.innerHTML = `
    <div class="selection-score-item">
      <span class="selection-team-name">${team1Name}</span>
      <span class="selection-team-score">${team1Score} نقطة</span>
    </div>
    <div class="selection-score-item">
      <span class="selection-team-name">${team2Name}</span>
      <span class="selection-team-score">${team2Score} نقطة</span>
    </div>
  `;
  
  const sectionOptions = document.getElementById('section-options');
  sectionOptions.innerHTML = '';
  
  sections.forEach((section, index) => {
    const btn = document.createElement('button');
    btn.className = 'section-btn';
    btn.textContent = section.title;
    btn.onclick = () => selectSection(index);
    sectionOptions.appendChild(btn);
  });
  
  // تحديث حالة أزرار النقاط إذا كانت هناك فقرة محددة
  if (selectedSection !== null) {
    updatePointsButtons();
  }
}

// تحديث حالة أزرار النقاط
function updatePointsButtons() {
  const pointsButtons = document.querySelectorAll('.points-btn');
  pointsButtons.forEach(btn => {
    const points = parseInt(btn.textContent);
    const isAnswered = answeredQuestions[selectedSection]?.[points];
    
    if (isAnswered) {
      btn.classList.add('answered');
      btn.disabled = true;
    } else {
      btn.classList.remove('answered');
      btn.disabled = false;
    }
  });
}

// اختيار الفقرة
function selectSection(index) {
  selectedSection = index;
  selectedPoints = null; // إعادة تعيين النقاط المختارة
  document.querySelectorAll('.section-btn').forEach(btn => btn.classList.remove('selected'));
  event.target.classList.add('selected');
  document.querySelectorAll('.points-btn').forEach(btn => btn.classList.remove('selected'));
  updatePointsButtons(); // تحديث حالة أزرار النقاط
  checkSelectionComplete();
}

// اختيار النقاط
function selectPoints(points) {
  // التحقق من أن السؤال لم يتم الإجابة عليه سابقاً
  if (answeredQuestions[selectedSection]?.[points]) {
    return; // السؤال مُجاب عليه سابقاً
  }
  
  selectedPoints = points;
  document.querySelectorAll('.points-btn').forEach(btn => btn.classList.remove('selected'));
  event.target.classList.add('selected');
  checkSelectionComplete();
}

// التحقق من اكتمال الاختيار
function checkSelectionComplete() {
  const startBtn = document.getElementById('start-quiz-btn');
  if (selectedSection !== null && selectedPoints !== null) {
    startBtn.disabled = false;
  }
}

// بدء الأسئلة
function startQuiz() {
  // لا نعيد تعيين النقاط هنا - النقاط تتراكم
  currentQuestion = 0;
  currentTeam = 1;
  
  // تصفية الأسئلة حسب النقاط المختارة
  const section = sections[selectedSection];
  filteredQuestions = section.questions.filter(q => q.points === selectedPoints);
  
  if (filteredQuestions.length === 0) {
    alert('لا توجد أسئلة بهذا العدد من النقاط في الفقرة المختارة');
    return;
  }
  
  showScreen('game-screen');
  loadQuestion();
}

// تحميل السؤال
function loadQuestion() {
  const section = sections[selectedSection];
  const question = filteredQuestions[currentQuestion];
  
  document.getElementById('section-title').textContent = section.title;
  document.getElementById('question-num').textContent = `السؤال ${currentQuestion + 1} من ${filteredQuestions.length}`;
  document.getElementById('question-points').textContent = `${question.points} نقطة`;
  document.getElementById('question-text').textContent = question.text;
  
  // تحديث النقاط
  updateScores();
  
  // إخفاء التغذية الراجعة
  document.getElementById('feedback').classList.remove('show');
  
  const optionsContainer = document.getElementById('options-container');
  const textAnswerDiv = document.getElementById('text-answer');
  
  if (question.textAnswer) {
    // سؤال نصي
    optionsContainer.innerHTML = '';
    textAnswerDiv.style.display = 'block';
    document.getElementById('text-answer-input').value = '';
  } else {
    // سؤال اختيارات
    textAnswerDiv.style.display = 'none';
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'option';
      optionDiv.textContent = option;
      optionDiv.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(optionDiv);
    });
  }
}

// التحقق من الإجابة النصية
function checkTextAnswer() {
  const answer = document.getElementById('text-answer-input').value.trim();
  if (answer === '') {
    alert('الرجاء كتابة إجابة');
    return;
  }
  checkAnswer(answer);
}

// التحقق من الإجابة
function checkAnswer(answer) {
  const question = filteredQuestions[currentQuestion];
  
  let isCorrect = false;
  
  // التحقق من الإجابة
  if (question.textAnswer) {
    const normalizedAnswer = answer.toLowerCase().trim();
    const normalizedCorrect = question.correct.toLowerCase().trim();
    
    // قبول الإجابة إذا كانت تحتوي على الكلمات الأساسية أو العكس
    if (normalizedAnswer === normalizedCorrect || 
        normalizedAnswer.includes(normalizedCorrect) || 
        normalizedCorrect.includes(normalizedAnswer)) {
      isCorrect = true;
    } else if (question.correctAlternatives) {
      isCorrect = question.correctAlternatives.some(alt => 
        normalizedAnswer.includes(alt.toLowerCase()) || alt.toLowerCase().includes(normalizedAnswer)
      );
    }
  } else {
    isCorrect = answer === question.correct;
  }
  
  // تعطيل الخيارات
  document.querySelectorAll('.option').forEach(opt => {
    opt.classList.add('disabled');
    opt.onclick = null;
    if (opt.textContent === question.correct) {
      opt.classList.add('correct');
    } else if (opt.textContent === answer && !isCorrect) {
      opt.classList.add('wrong');
    }
  });
  
  // إظهار التغذية الراجعة
  const feedback = document.getElementById('feedback');
  const teamFeedback = document.getElementById('team-feedback');
  feedback.classList.remove('correct', 'wrong');
  
  // إظهار الفريق الذي أجاب
  if (gameMode === 'team') {
    const answeringTeam = currentTeam === 1 ? team1Name : team2Name;
    teamFeedback.textContent = `🎯 الفريق المجيب: ${answeringTeam}`;
    teamFeedback.classList.add('show');
  } else {
    teamFeedback.classList.remove('show');
  }
  
  if (isCorrect) {
    feedback.classList.add('correct', 'show');
    feedback.textContent = `✅ إجابة صحيحة! الإجابة: ${question.correct}`;
    
    // إخفاء رسالة الفريق المجيب
    teamFeedback.classList.remove('show');
    
    // عرض اختيار الفريق الفائز
    setTimeout(() => {
      showWinnerSelection(question.points);
    }, 2000);
  } else {
    feedback.classList.add('wrong', 'show');
    feedback.textContent = `❌ إجابة خاطئة! الإجابة الصحيحة: ${question.correct}`;
    
    // إظهار رسالة عدم فوز أي فريق
    teamFeedback.textContent = '❌ لم يتم فوز أي فريق';
    teamFeedback.classList.add('show', 'no-winner');
    
    // تسجيل السؤال كمُجاب عليه لتشطيبه
    const pointsValue = parseInt(question.points);
    if (!answeredQuestions[selectedSection]) {
      answeredQuestions[selectedSection] = {};
    }
    answeredQuestions[selectedSection][pointsValue] = true;
    
    // العودة لشاشة الاختيار بعد الإجابة الخاطئة
    setTimeout(() => {
      teamFeedback.classList.remove('show', 'no-winner');
      returnToSelection();
    }, 3000);
  }
}

// تحديث النقاط
function updateScores() {
  const scoreDisplay = document.getElementById('score-display');
  
  scoreDisplay.innerHTML = `
    <div class="score-item ${currentTeam === 1 ? 'active' : ''}">
      <div class="score-label">${team1Name}</div>
      <div class="score-value">${team1Score}</div>
    </div>
    <div class="score-item ${currentTeam === 2 ? 'active' : ''}">
      <div class="score-label">${team2Name}</div>
      <div class="score-value">${team2Score}</div>
    </div>
  `;
}

// السؤال التالي
function nextQuestion() {
  currentQuestion++;
  
  if (currentQuestion >= filteredQuestions.length) {
    // انتهت اللعبة
    showResults();
    return;
  }
  
  // تبديل الفريق في الوضع الجماعي
  if (gameMode === 'team') {
    currentTeam = currentTeam === 1 ? 2 : 1;
  }
  
  loadQuestion();
}

// عرض النتائج
function showResults() {
  showScreen('result-screen');
  const finalResult = document.getElementById('final-result');
  
  if (gameMode === 'team') {
    let winner = '';
    let winnerClass = '';
    
    if (team1Score > team2Score) {
      winner = `🏆 الفريق الفائز: ${team1Name}`;
      winnerClass = 'winner-team1';
    } else if (team2Score > team1Score) {
      winner = `🏆 الفريق الفائز: ${team2Name}`;
      winnerClass = 'winner-team2';
    } else {
      winner = '🤝 تعادل بين الفريقين!';
      winnerClass = 'winner-tie';
    }
    
    finalResult.innerHTML = `
      <div class="final-score">
        <div class="${team1Score > team2Score ? 'winning-team' : ''}">${team1Name}: ${team1Score} نقطة</div>
        <div class="${team2Score > team1Score ? 'winning-team' : ''}">${team2Name}: ${team2Score} نقطة</div>
      </div>
      <div class="winner ${winnerClass}">${winner}</div>
    `;
  } else {
    const percentage = (singleScore / (filteredQuestions.length * selectedPoints)) * 100;
    let evaluation = '';
    
    if (percentage >= 80) {
      evaluation = '🌟 ممتاز! أنت خبير في عرب فيرست!';
    } else if (percentage >= 60) {
      evaluation = '👍 جيد جداً! أداء رائع!';
    } else if (percentage >= 40) {
      evaluation = '😊 جيد! يمكنك تحسين أدائك!';
    } else {
      evaluation = '💪 حاول مرة أخرى! يمكنك القيام بعمل أفضل!';
    }
    
    finalResult.innerHTML = `
      <div class="final-score">
        نقاطك النهائية: ${singleScore} نقطة
      </div>
      <div class="winner">${evaluation}</div>
    `;
  }
}

// عرض اختيار الفريق الفائز
function showWinnerSelection(points) {
  const winnerSelection = document.getElementById('winner-selection');
  const team1Btn = document.getElementById('team1-winner-btn');
  const team2Btn = document.getElementById('team2-winner-btn');
  
  team1Btn.textContent = team1Name;
  team2Btn.textContent = team2Name;
  
  team1Btn.onclick = () => selectWinner(1, points);
  team2Btn.onclick = () => selectWinner(2, points);
  
  // إضافة زر "لا أحد" إذا لم يكن موجوداً
  let noOneBtn = document.getElementById('no-one-winner-btn');
  if (!noOneBtn) {
    noOneBtn = document.createElement('button');
    noOneBtn.id = 'no-one-winner-btn';
    noOneBtn.className = 'btn btn-winner';
    noOneBtn.textContent = 'لا أحد';
    document.querySelector('.winner-buttons').appendChild(noOneBtn);
  }
  noOneBtn.onclick = () => selectWinner(0, points);
  
  winnerSelection.style.display = 'block';
}

// اختيار الفريق الفائز
function selectWinner(teamNumber, points) {
  const pointsValue = parseInt(points);
  
  // إضافة النقاط للفريق الفائز (إلا إذا كان "لا أحد")
  if (teamNumber === 1) {
    team1Score += pointsValue;
  } else if (teamNumber === 2) {
    team2Score += pointsValue;
  }
  // إذا كان teamNumber = 0 فهذا يعني "لا أحد" ولا تُضاف نقاط
  
  // تسجيل السؤال كمُجاب عليه
  if (!answeredQuestions[selectedSection]) {
    answeredQuestions[selectedSection] = {};
  }
  answeredQuestions[selectedSection][pointsValue] = true;
  
  // تحديث النقاط على الشاشة
  updateScores();
  
  // إخفاء اختيار الفائز
  document.getElementById('winner-selection').style.display = 'none';
  
  // إظهار رسالة النقاط المضافة
  const teamFeedback = document.getElementById('team-feedback');
  
  if (teamNumber === 0) {
    // لا أحد استطاع الإجابة
    teamFeedback.textContent = '⚠️ لم يستطع أي فريق الإجابة على السؤال';
    teamFeedback.classList.add('show', 'no-winner');
    teamFeedback.classList.remove('winner-announcement');
  } else {
    const winningTeamName = teamNumber === 1 ? team1Name : team2Name;
    teamFeedback.textContent = `✨ تم إضافة ${pointsValue} نقطة لفريق ${winningTeamName}`;
    teamFeedback.classList.remove('no-winner');
    teamFeedback.classList.add('show', 'winner-announcement');
  }
  
  // التحقق من انتهاء جميع الأسئلة
  if (checkIfGameFinished()) {
    setTimeout(() => {
      teamFeedback.classList.remove('show', 'winner-announcement', 'no-winner');
      showFinalWinner();
    }, 2000);
  } else {
    // العودة لشاشة الاختيار
    setTimeout(() => {
      teamFeedback.classList.remove('show', 'winner-announcement', 'no-winner');
      returnToSelection();
    }, 2000);
  }
}

// التحقق من انتهاء جميع الأسئلة
function checkIfGameFinished() {
  const totalQuestions = sections.reduce((total, section, sectionIndex) => {
    const sectionAnswered = answeredQuestions[sectionIndex] || {};
    return total + Object.keys(sectionAnswered).length;
  }, 0);
  
  // عدد الأسئلة الكلي = عدد الأسئلة في كل فقرة
  const totalAvailableQuestions = sections.reduce((total, section) => {
    return total + section.questions.length;
  }, 0);
  
  return totalQuestions >= totalAvailableQuestions;
}

// إظهار الفائز النهائي
function showFinalWinner() {
  showScreen('result-screen');
  const finalResult = document.getElementById('final-result');
  
  let winner = '';
  let winnerClass = '';
  
  if (team1Score > team2Score) {
    winner = `🏆 الفريق الفائز: ${team1Name}`;
    winnerClass = 'winner-team1';
  } else if (team2Score > team1Score) {
    winner = `🏆 الفريق الفائز: ${team2Name}`;
    winnerClass = 'winner-team2';
  } else {
    winner = '🤝 تعادل بين الفريقين!';
    winnerClass = 'winner-tie';
  }
  
  finalResult.innerHTML = `
    <div class="final-score">
      <div class="${team1Score > team2Score ? 'winning-team' : ''}">${team1Name}: ${team1Score} نقطة</div>
      <div class="${team2Score > team1Score ? 'winning-team' : ''}">${team2Name}: ${team2Score} نقطة</div>
    </div>
    <div class="winner ${winnerClass}">${winner}</div>
  `;
}

// العودة لشاشة الاختيار
function returnToSelection() {
  selectedSection = null;
  selectedPoints = null;
  filteredQuestions = [];
  currentQuestion = 0;
  
  // إخفاء جميع رسائل التغذية الراجعة
  document.getElementById('feedback').classList.remove('show');
  document.getElementById('team-feedback').classList.remove('show');
  document.getElementById('winner-selection').style.display = 'none';
  
  // إلغاء تحديد الأزرار السابقة
  document.querySelectorAll('.section-btn').forEach(btn => btn.classList.remove('selected'));
  document.querySelectorAll('.points-btn').forEach(btn => btn.classList.remove('selected'));
  document.getElementById('start-quiz-btn').disabled = true;
  
  showSelectionScreen();
}

// إعادة تشغيل اللعبة
function restartGame() {
  selectedSection = null;
  selectedPoints = null;
  filteredQuestions = [];
  team1Score = 0;
  team2Score = 0;
  singleScore = 0;
  currentQuestion = 0;
  currentTeam = 1;
  answeredQuestions = {
    0: { 500: true }, // الفقرة الأولى - سؤال 500 نقطة مشطوب
    1: { 500: true }, // الفقرة الثانية - سؤال 500 نقطة مشطوب
    2: { 400: true }, // الفقرة الثالثة - سؤال 400 نقطة مشطوب
    3: {}             // الفقرة الرابعة - بدون أسئلة مشطوبة
  }; // إعادة تعيين الأسئلة المُجابة مع الأسئلة المشطوبة
  showScreen('start-screen');
}
