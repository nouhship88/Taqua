const apiKey = '42f93cdba7057ff36a981db5700349c4'; // Replace this with your actual API key
const cityName = 'غريان'; // Set your city in Arabic
const lat = 32.171912762742345; // Latitude for Gharyan
const lon = 13.030128070524592; // Longitude for Gharyan
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=ar`; // Set lang=ar for Arabic descriptions

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Set the title dynamically with city name
    document.getElementById('city-name').innerText = `طقس  ${data.name}`; // This will show "الطقس في غريان"
    
    // Populate weather data
    document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('feels-like').innerText = data.main.feels_like;
    // document.getElementById('wind').innerText = data.wind.speed;
    document.getElementById('humidity').innerText = data.main.humidity;
    document.getElementById('description').innerText = data.weather[0].description; // This will show the description in Arabic
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



// Ramadan Countdown Script
function updateRamadanCountdown() {
  const ramadanStart = new Date("2025-03-01T00:00:00"); // Adjust for your region's Ramadan start date
  const now = new Date();
  const remainingTime = ramadanStart - now;

  if (remainingTime > 0) {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update Countdown Timer
    document.querySelector('.days').textContent = `${days}`;
    document.querySelector('.hours').textContent = `${hours}`;
    document.querySelector('.minutes').textContent = `${minutes}`;
    document.querySelector('.seconds').textContent = `${seconds}`;

    // Calculate progress percentage
    const lastRamadanStart = new Date("2024-03-01T00:00:00"); // Adjust for last Ramadan start date
    const totalDuration = ramadanStart - lastRamadanStart;
    const progressPercentage = ((totalDuration - remainingTime) / totalDuration) * 100;

    // Update Progress Bar
    document.getElementById("progress").style.width = `${Math.min(progressPercentage, 100)}%`;

  } else {
    document.getElementById("countdown").textContent = " رمضان قد بدأ! 🎉🌙 رمضان مبارك! استقبلوا الشهر الفضيل بالفرح والتقوى! 🕌✨"

;
    document.getElementById("progress").style.width = "100%"; // Full when Ramadan starts
    clearInterval(interval); // Stop the countdown
  }
}

// Initial fetch and countdown setup
document.addEventListener("DOMContentLoaded", function () {
  updateRamadanCountdown(); // Call on page load
  const interval = setInterval(updateRamadanCountdown, 1000); // Update every second
});


// Hijri Calender
// Store the current question index
// DOM Elements
document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");
  const restartButton = document.getElementById("restart-button");
  const nextButton = document.getElementById("next-button");
  const quizScreen = document.getElementById("quiz-screen");
  const startScreen = document.getElementById("start-screen");
  const resultScreen = document.getElementById("result-screen");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const timerElement = document.getElementById("timer");
  const feedbackElement = document.getElementById("feedback");
  const questionCounter = document.getElementById("question-counter");
  const finalScore = document.getElementById("final-score");
  const finalFeedback = document.getElementById("final-feedback");

let questions = [
  { question: "ما هو اسم الصحابي الذي حمل لواء المسلمين في غزوة بدر؟", options: ["علي بن أبي طالب", "حمزة بن عبد المطلب", "أبو بكر الصديق", "عثمان بن عفان"], correct: "حمزة بن عبد المطلب" },
  { question: "كم عدد السور المكية في القرآن الكريم؟", options: ["86", "20", "50", "60"], correct: "86" },
  { question: "ما هو اسم النبي الذي أُرسل إلى قوم ثمود؟", options: ["صالح عليه السلام", "هود عليه السلام", "موسى عليه السلام", "محمد صلى الله عليه وسلم"], correct: "صالح عليه السلام" },
  { question: "ما هي السورة التي تحتوي على آية الكرسي؟", options: ["سورة البقرة", "سورة آل عمران", "سورة النساء", "سورة الفاتحة"], correct: "سورة البقرة" },
  { question: "من هو الصحابي الذي فاز بلقب “أسد الله”؟", options: ["علي بن أبي طالب", "خالد بن الوليد", "أبو بكر الصديق", "عمر بن الخطاب"], correct: "علي بن أبي طالب" },
  { question: "ما هو اسم الصحابي الذي كان يلقب بـ“أبو الحسنين”؟", options: ["علي بن أبي طالب", "حسن بن علي", "حسين بن علي", "عبد الله بن عباس"], correct: "علي بن أبي طالب" },
  { question: "كم عدد الأيام التي مكث فيها النبي محمد صلى الله عليه وسلم في غار ثور؟", options: ["3 أيام", "7 أيام", "10 أيام", "15 أيام"], correct: "3 أيام" },
  { question: "من هو أول من آمن من أتباع رسول الله صلى الله عليه وسلم؟", options: ["خديجة بنت خويلد", "أبو بكر الصديق", "بلال بن رباح", "علي بن أبي طالب"], correct: "خديجة بنت خويلد" },
  { question: "ما هي السورة التي تسمى “قلب القرآن”؟", options: ["سورة يس", "سورة البقرة", "سورة الفاتحة", "سورة الإخلاص"], correct: "سورة يس" },
  { question: "من هو النبي الذي سمي بـ“خليل الله”؟", options: ["إبراهيم عليه السلام", "موسى عليه السلام", "عيسى عليه السلام", "محمد صلى الله عليه وسلم"], correct: "إبراهيم عليه السلام" },
  { question: "من هو النبي الذي عاش في بطن الحوت؟", options: ["يونس عليه السلام", "إبراهيم عليه السلام", "موسى عليه السلام", "نوح عليه السلام"], correct: "يونس عليه السلام" },
  { question: "ما هي السورة التي تسمى “أم الكتاب”؟", options: ["سورة الفاتحة", "سورة البقرة", "سورة الإخلاص", "سورة الناس"], correct: "سورة الفاتحة" },
  { question: "من هو النبي الذي كلمه الله من غير حجاب؟", options: ["موسى عليه السلام", "إبراهيم عليه السلام", "عيسى عليه السلام", "محمد صلى الله عليه وسلم"], correct: "موسى عليه السلام" },
  { question: "من هو النبي الذي لقب بـ“أبو الأنبياء”؟", options: ["إبراهيم عليه السلام", "نوح عليه السلام", "آدم عليه السلام", "محمد صلى الله عليه وسلم"], correct: "إبراهيم عليه السلام" },
  { question: "ما هو عدد التكبيرات في صلاة العيد؟",
    options: ["5 تكبيرات", "7 تكبيرات", "9 تكبيرات", "11 تكبيرة"],
    correct: "7 تكبيرات"
  },
  {
    question: "من هو الصحابي الذي اهتز عرش الرحمن لموته؟",
    options: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "سعد بن معاذ"],
    correct: "سعد بن معاذ"
  },
  {
    question: "ما هي السورة التي تسمى بـ\"عروس القرآن\"؟",
    options: ["سورة الرحمن", "سورة الواقعة", "سورة الفاتحة", "سورة يس"],
    correct: "سورة الرحمن"
  },
  {
    question: "ما هي السورة التي تسمى بـ\"قلب القرآن\"؟",
    options: ["سورة الفاتحة", "سورة البقرة", "سورة يس", "سورة الإخلاص"],
    correct: "سورة يس"
  },
{ 
    question: "ما هو أول بيت وضع للناس على وجه الأرض؟", 
    options: ["الكعبة المشرفة", "المسجد النبوي", "بيت المقدس", "مسجد قباء"], 
    correct: "الكعبة المشرفة" 
  },
  { 
    question: "من هو النبي الذي سخر له الله الريح؟", 
    options: ["سليمان عليه السلام", "موسى عليه السلام", "داوود عليه السلام", "عيسى عليه السلام"], 
    correct: "سليمان عليه السلام" 
  },
  { 
    question: "ما هو اسم أول مسجد بُني في الإسلام؟", 
    options: ["مسجد قباء", "المسجد النبوي", "المسجد الأقصى", "مسجد الحرام"], 
    correct: "مسجد قباء" 
  },
  { 
    question: "من هو النبي الذي أطلق عليه لقب 'ذو النون'؟", 
    options: ["يونس عليه السلام", "نوح عليه السلام", "إبراهيم عليه السلام", "أيوب عليه السلام"], 
    correct: "يونس عليه السلام" 
  },
  { 
    question: "ما هي السورة التي ذكر فيها اسم 'الله' في كل آية؟", 
    options: ["سورة المجادلة", "سورة الفاتحة", "سورة الإخلاص", "سورة البقرة"], 
    correct: "سورة المجادلة" 
  },
  { 
    question: "كم عدد أشهر الحرم في الإسلام؟", 
    options: ["أربعة أشهر", "ثلاثة أشهر", "خمسة أشهر", "شهرين"], 
    correct: "أربعة أشهر" 
  },
  { 
    question: "من هو النبي الذي أُرسل إلى قوم عاد؟", 
    options: ["هود عليه السلام", "صالح عليه السلام", "شعيب عليه السلام", "لوط عليه السلام"], 
    correct: "هود عليه السلام" 
  },
  { 
    question: "من هو النبي الذي أرسله الله إلى مدين؟", 
    options: ["شعيب عليه السلام", "هود عليه السلام", "لوط عليه السلام", "إبراهيم عليه السلام"], 
    correct: "شعيب عليه السلام" 
  },
  { 
    question: "ما هي الصلاة التي تُسمى الصلاة الوسطى؟", 
    options: ["صلاة العصر", "صلاة الفجر", "صلاة الظهر", "صلاة المغرب"], 
    correct: "صلاة العصر" 
  },
  { 
    question: "ما هو الحيوان الذي تكلم في القرآن الكريم؟", 
    options: ["النملة", "الهدهد", "الحوت", "البقرة"], 
    correct: "النملة" 
  },
  { 
    question: "ما هي شروط قبول العمل عند الله؟", 
    options: [
      "الإخلاص والمتابعة", 
      "الإخلاص فقط", 
      "المتابعة فقط", 
      "نية الخير"
    ], 
    correct: "الإخلاص والمتابعة" 
  },
  { 
    question: "ما هي الصفة التي تجعل المسلم يدخل الجنة بسهولة كما قال النبي؟", 
    options: [
      "حسن الخلق", 
      "الصبر", 
      "الكرم", 
      "الشجاعة"
    ], 
    correct: "حسن الخلق" 
  },
  { 
    question: "ما هي القاعدة الأخلاقية في التعامل مع الآخرين في الإسلام؟", 
    options: [
      "عامل الناس كما تحب أن تُعامل", 
      "احذر الناس جميعًا", 
      "لا تثق بأحد", 
      "قدم مصلحتك أولًا"
    ], 
    correct: "عامل الناس كما تحب أن تُعامل" 
  }
];


let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let countdown = 30;
let nextButtonClicked = false;

// Shuffle and pick 10 random questions
questions = questions.sort(() => Math.random() - 0.5).slice(0, 10);

// Event Listeners
startButton.addEventListener("click", startQuiz);
stopButton.addEventListener("click", stopGame);
restartButton.addEventListener("click", restartQuiz);
nextButton.addEventListener("click", skipQuestion);

// Start Quiz
function startQuiz() {
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  countdown = 15;
  startTimer();
  loadQuestion();
}

// Load Question
function loadQuestion() {
  nextButtonClicked = false;
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(option);
    optionsElement.appendChild(li);
  });
  questionCounter.textContent = `السؤال ${currentQuestionIndex + 1} من ${questions.length}`;
  feedbackElement.textContent = "";
}

// Timer
function startTimer() {
  clearInterval(timerInterval);
  countdown = 30;
  timerElement.textContent = `00:${countdown}`;
  timerInterval = setInterval(() => {
    countdown--;
    timerElement.textContent = `00:${countdown < 10 ? "0" : ""}${countdown}`;
    if (countdown <= 0) {
      clearInterval(timerInterval);
      showFeedback(false);
    }
  }, 1000);
}

// Check Answer
function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.correct;
  if (isCorrect) score++;
  showFeedback(isCorrect);
}

// Show Feedback
function showFeedback(isCorrect) {
  clearInterval(timerInterval);
  feedbackElement.textContent = isCorrect
    ? "إجابة صحيحة!"
    : `إجابة خاطئة! الإجابة الصحيحة: ${questions[currentQuestionIndex].correct}`;
  setTimeout(() => {
    if (!nextButtonClicked) nextQuestion();
  }, 2000);
}

// Skip Question
function skipQuestion() {
  nextButtonClicked = true;
  clearInterval(timerInterval);
  feedbackElement.textContent = ""; // Clear feedback
  nextQuestion(); // Load next question immediately
}

// Next Question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    startTimer();
  } else {
    showResults();
  }
}

// Stop Game
function stopGame() {
  clearInterval(timerInterval);
  showResults(true);
}

// Show Results
function showResults(isStopped = false) {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";
  finalScore.textContent = `مجموعك النهائي: ${score} / ${questions.length}`;
  finalFeedback.textContent = isStopped
    ? "لقد أوقفت الاختبار! شكراً لمشاركتك."
    : score === questions.length
    ? "رائع! لقد أجبت على جميع الأسئلة بشكل صحيح."
    : "حاول تحسين نتيجتك المرة القادمة!";
}

// Restart Quiz
function restartQuiz() {
  location.reload();
}
});

// Array of Islamic quotes in Arabic (Hadiths and Quran verses)
const quotes = [
  {
    text: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ",
    source: "القرآن الكريم 13:11"
  },
  {
    text: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    source: "صحيح البخاري"
  },
  {
    text: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ",
    source: "القرآن الكريم 54:17"
  },
  {
    text: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
    source: "صحيح الترمذي"
  },
  {
    text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    source: "القرآن الكريم 2:286"
  },
  {
    text: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ، وَفِي كُلٍّ خَيْرٌ",
    source: "صحيح مسلم"
  },
  {
    text: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
    source: "القرآن الكريم 65:2-3"
  },
  {
    text: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    source: "القرآن الكريم - سورة الرعد (13:28)"
  },
  {
    text: "وَمَنْ أَعْرَضَ عَن ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنكًا وَنَحْشُرُهُ يَوْمَ الْقِيَامَةِ أَعْمَىٰ",
    source: "القرآن الكريم - سورة طه (20:124)"
  },
  {
    text: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ",
    source: "القرآن الكريم - سورة الزمر (39:10)"
  },
  {
    text: "وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ",
    source: "القرآن الكريم - سورة البقرة (2:155)"
  },
  {
    text: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    source: "القرآن الكريم - سورة البقرة (2:250)"
  },
  {
    text: "وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ ۚ إِنَّمَا يُؤَخِّرُهُمْ لِيَوْمٍ تَشْخَصُ فِيهِ الْأَبْصَارُ",
    source: "القرآن الكريم - سورة إبراهيم (14:42)"
  }
  
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Display the quote
function displayQuote() {
  const quote = getRandomQuote();
  document.getElementById('quote-text').textContent = quote.text;
  document.getElementById('quote-source').textContent = `— ${quote.source}`;
}

// Run on page load
window.onload = () => {
  displayQuote(); // Display the first quote immediately
  setInterval(displayQuote, 20000); // Change quote every 1 minute (60,000 milliseconds)
};


// List of Athkar for morning and evening
const athkarMorning = [
  { text: "اللهم بك أصبحنا وبك أمسينا", virtue: "حُسن الاستعانة بالله" },
  { text: "سبحان الله وبحمده سبحان الله العظيم", virtue: "يغفر الذنوب" },
  { text: "اللهم إني أسالك خير هذا اليوم", virtue: "طلب للبركة في اليوم" },
  // Add more duas as needed
];

const athkarEvening = [
  { text: "اللهم بك أمسينا وبك أصبحنا", virtue: "طلب للبركة في الليل" },
  { text: "أعوذ بكلمات الله التامات من شر ما خلق", virtue: "حماية من الأذى" },
  { text: "اللهم إني أسالك خير هذه الليلة", virtue: "طلب للسلامة" },
  // Add more duas as needed
];

// Function to display the correct Athkar
function displayAthkar() {
  const now = new Date();
  const hour = now.getHours();
  
  let athkar, virtuesText;

  // Morning (before 12 PM)
  if (hour < 12) {
    athkar = athkarMorning;
    virtuesText = "أذكار الصباح تعمل على تقوية الإيمان وتجلب البركة وتحفظ المسلم طوال اليوم.";
  }
  // Evening (after 12 PM)
  else {
    athkar = athkarEvening;
    virtuesText = "أذكار المساء تحفظ المسلم من الشر وتفتح له أبواب الرحمة والمغفرة.";
  }

  // Update the HTML with the correct athkar and virtues
  const athkarContainer = document.getElementById('athkar');
  athkarContainer.innerHTML = '';
  athkar.forEach(item => {
    const athkarItem = document.createElement('p');
    athkarItem.textContent = item.text;
    athkarContainer.appendChild(athkarItem);
  });

  const virtuesContainer = document.getElementById('virtues-text');
  virtuesContainer.textContent = virtuesText;
}

// Run the function to display the athkar
displayAthkar();

// Update the athkar every minute to ensure it reflects the correct time
setInterval(displayAthkar, 60000);

(function() {
  let currentIndex = 0;
  const slides = document.querySelectorAll('#ramadan-tips-section .slide');
  const totalSlides = slides.length;

  // Function to show the current slide and hide others
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active'); // Hide all slides
    });
    slides[index].classList.add('active'); // Show the current slide
  }

  // Initialize first slide as visible
  showSlide(currentIndex);

  // Automatic slide change every 7 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop through slides
    showSlide(currentIndex);
  }, 7000); // Change every 7 seconds
})();