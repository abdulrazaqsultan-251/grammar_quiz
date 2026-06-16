const questions = [
  // Multiple Choice (55)
  { type: "mcq", category: "A / An / Some", q: "I have ___ umbrella.", options: ["a", "an", "some"], answer: 1 },
  { type: "mcq", category: "A / An / Some", q: "She studies at ___ university.", options: ["a", "an", "some"], answer: 0 },
  { type: "mcq", category: "A / An / Some", q: "I need ___ information.", options: ["a", "an", "some"], answer: 2 },
  { type: "mcq", category: "A / An / Some", q: "He arrived in ___ hour.", options: ["a", "an", "some"], answer: 1 },
  { type: "mcq", category: "A / An / Some", q: "I bought ___ furniture for my apartment.", options: ["a", "an", "some"], answer: 2 },
  { type: "mcq", category: "Count / Noncount", q: "Which noun is noncount?", options: ["chair", "homework", "question"], answer: 1 },
  { type: "mcq", category: "Count / Noncount", q: "Which noun is count?", options: ["advice", "music", "assignment"], answer: 2 },
  { type: "mcq", category: "Count / Noncount", q: "Choose the correct sentence.", options: ["I need an advice.", "I need some advice.", "I need advices."], answer: 1 },
  { type: "mcq", category: "Count / Noncount", q: "Choose the correct sentence.", options: ["She wears some jewelry.", "She wears a jewelry.", "She wears jewelries."], answer: 0 },
  { type: "mcq", category: "Count / Noncount", q: "Which word is usually noncount?", options: ["mail", "letter", "ring"], answer: 0 },
  { type: "mcq", category: "Plural Forms", q: "child →", options: ["childs", "children", "childes"], answer: 1 },
  { type: "mcq", category: "Plural Forms", q: "knife →", options: ["knifes", "knives", "knifees"], answer: 1 },
  { type: "mcq", category: "Plural Forms", q: "city →", options: ["citys", "cities", "cityes"], answer: 1 },
  { type: "mcq", category: "Plural Forms", q: "box →", options: ["boxs", "boxes", "boxies"], answer: 1 },
  { type: "mcq", category: "Plural Forms", q: "sheep →", options: ["sheeps", "sheep", "sheepes"], answer: 1 },
  { type: "mcq", category: "Plural Forms", q: "mouse →", options: ["mouses", "mice", "mousees"], answer: 1 },
  { type: "mcq", category: "Pronunciation of Final -S", q: "books is pronounced with final:", options: ["/s/", "/z/", "/ɪz/"], answer: 0 },
  { type: "mcq", category: "Pronunciation of Final -S", q: "cars is pronounced with final:", options: ["/s/", "/z/", "/ɪz/"], answer: 1 },
  { type: "mcq", category: "Pronunciation of Final -S", q: "wishes is pronounced with final:", options: ["/s/", "/z/", "/ɪz/"], answer: 2 },
  { type: "mcq", category: "Pronunciation of Final -S", q: "bridges is pronounced with final:", options: ["/s/", "/z/", "/ɪz/"], answer: 2 },
  { type: "mcq", category: "Simple Present", q: "Fatima always ___ to school.", options: ["go", "goes", "going"], answer: 1 },
  { type: "mcq", category: "Simple Present", q: "They ___ English every day.", options: ["study", "studies", "studying"], answer: 0 },
  { type: "mcq", category: "Simple Present", q: "Mr. Cook ___ TV every evening.", options: ["watch", "watches", "watching"], answer: 1 },
  { type: "mcq", category: "Simple Present", q: "My mother ___ about me.", options: ["worry", "worries", "worrying"], answer: 1 },
  { type: "mcq", category: "Simple Present", q: "Choose the correct negative.", options: ["She don't work.", "She doesn't work.", "She doesn't works."], answer: 1 },
  { type: "mcq", category: "Present Progressive", q: "Right now, Ali ___ his homework.", options: ["does", "is doing", "do"], answer: 1 },
  { type: "mcq", category: "Present Progressive", q: "Listen! The babies ___.", options: ["cry", "are crying", "cries"], answer: 1 },
  { type: "mcq", category: "Present Progressive", q: "___ the teacher speaking right now?", options: ["Does", "Is", "Do"], answer: 1 },
  { type: "mcq", category: "Simple Past", q: "Yesterday, Mary ___ downtown.", options: ["walk", "walked", "walking"], answer: 1 },
  { type: "mcq", category: "Simple Past", q: "Last night, they ___ at home.", options: ["was", "were", "are"], answer: 1 },
  { type: "mcq", category: "Simple Past", q: "Sue ___ a taxi to the airport yesterday.", options: ["take", "took", "taken"], answer: 1 },
  { type: "mcq", category: "Simple Past", q: "___ you work yesterday?", options: ["Do", "Did", "Were"], answer: 1 },
  { type: "mcq", category: "Past Progressive", q: "I ___ dinner when Tom came.", options: ["ate", "was eating", "am eating"], answer: 1 },
  { type: "mcq", category: "Past Progressive", q: "The phone rang while I ___.", options: ["slept", "was sleeping", "sleep"], answer: 1 },
  { type: "mcq", category: "Past Progressive", q: "They ___ working at 6:00 yesterday.", options: ["was", "were", "are"], answer: 1 },
  { type: "mcq", category: "Passive Voice", q: "The teacher helps Jane. → Jane ___ by the teacher.", options: ["is helped", "was helped", "has helped"], answer: 0 },
  { type: "mcq", category: "Passive Voice", q: "Bob mailed the package. → The package ___ by Bob.", options: ["is mailed", "was mailed", "has mailed"], answer: 1 },
  { type: "mcq", category: "Passive Voice", q: "The company has hired Sue. → Sue ___ by the company.", options: ["has been hired", "was hired", "is hired"], answer: 0 },
  { type: "mcq", category: "Passive Voice", q: "Mrs. Adams will do the work. → The work ___ by Mrs. Adams.", options: ["will be done", "was done", "is doing"], answer: 0 },
  { type: "mcq", category: "Passive Voice", q: "Shakespeare wrote Hamlet. → Hamlet ___ by Shakespeare.", options: ["is written", "was written", "wrote"], answer: 1 },
  { type: "mcq", category: "Transitive / Intransitive", q: "The baby slept. The verb slept is:", options: ["transitive", "intransitive", "passive"], answer: 1 },
  { type: "mcq", category: "Transitive / Intransitive", q: "Sarah opened the door. The verb opened is:", options: ["transitive", "intransitive", "noncount"], answer: 0 },
  { type: "mcq", category: "Transitive / Intransitive", q: "An accident happened. The verb happened is:", options: ["transitive", "intransitive", "passive"], answer: 1 },
  { type: "mcq", category: "Adjective Clauses", q: "The man ___ lives next door is friendly.", options: ["who", "whom", "which"], answer: 0 },
  { type: "mcq", category: "Adjective Clauses", q: "The book ___ I bought was expensive.", options: ["who", "which", "whom"], answer: 1 },
  { type: "mcq", category: "Adjective Clauses", q: "The woman ___ I met was kind.", options: ["who(m)", "which", "where"], answer: 0 },
  { type: "mcq", category: "Adjective Clauses", q: "The river ___ flows through town is polluted.", options: ["who", "which", "whom"], answer: 1 },
  { type: "mcq", category: "Gerunds", q: "I enjoy ___ in the park.", options: ["walk", "walking", "to walking"], answer: 1 },
  { type: "mcq", category: "Gerunds", q: "She finished ___ at midnight.", options: ["study", "studying", "to study"], answer: 1 },
  { type: "mcq", category: "Gerunds", q: "They discussed ___ a new car.", options: ["buy", "buying", "to buy"], answer: 1 },
  { type: "mcq", category: "Gerunds", q: "Would you mind ___ the window?", options: ["open", "opening", "to open"], answer: 1 },
  { type: "mcq", category: "Go + -ing", q: "Ann spends hours in the water. She likes to go ___.", options: ["swim", "swimming", "to swimming"], answer: 1 },
  { type: "mcq", category: "Comparisons", q: "high →", options: ["higher, the highest", "more high, the most high", "highest, higher"], answer: 0 },
  { type: "mcq", category: "Comparisons", q: "good →", options: ["gooder, the goodest", "better, the best", "more good, the most good"], answer: 1 },
  { type: "mcq", category: "Comparisons", q: "dangerous →", options: ["dangerouser, the dangerousest", "more dangerous, the most dangerous", "dangerous, the dangerous"], answer: 1 },
  { type: "mcq", category: "Comparisons", q: "neat →", options: ["neater, the neatest", "more neat, the most neat", "neaties, the neatest"], answer: 0 },
  { type: "mcq", category: "Comparisons", q: "Tina is 21. Sam is also 21. Tina is ___ Sam.", options: ["older than", "as old as", "the oldest"], answer: 1 },

  // Arrange Words (15)
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["to", "Ali", "school", "goes", "every", "day"], answerText: "Ali goes to school every day" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["is", "homework", "doing", "his", "Ahmed", "now"], answerText: "Ahmed is doing his homework now" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["I", "books", "reading", "enjoy"], answerText: "I enjoy reading books" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["was", "when", "sleeping", "I", "rang", "the", "phone"], answerText: "I was sleeping when the phone rang" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["by", "the", "helped", "teacher", "Jane", "is"], answerText: "Jane is helped by the teacher" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["the", "was", "package", "Bob", "by", "mailed"], answerText: "The package was mailed by Bob" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["the", "man", "friendly", "is", "who", "next", "door", "lives"], answerText: "The man who lives next door is friendly" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["book", "is", "the", "expensive", "which", "I", "bought"], answerText: "The book which I bought is expensive" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["She", "finished", "at", "studying", "midnight"], answerText: "She finished studying at midnight" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["Yesterday", "Mary", "downtown", "walked"], answerText: "Yesterday Mary walked downtown" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["They", "were", "at", "home", "last", "night"], answerText: "They were at home last night" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["oranges", "sweeter", "lemons", "are", "than"], answerText: "Oranges are sweeter than lemons" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["This", "the", "tallest", "building", "is"], answerText: "This is the tallest building" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["I", "need", "some", "information"], answerText: "I need some information" },
  { type: "arrange", category: "Arrange Words", q: "Arrange the words to make a correct sentence.", words: ["He", "arrived", "in", "an", "hour"], answerText: "He arrived in an hour" },

  // Correct / Incorrect + Find and Correct Mistake (10)
  { type: "mistake", category: "Correct / Incorrect", q: "She go to school every day.", words: ["She", "go", "to", "school", "every", "day"], isCorrectSentence: false, wrongIndex: 1, correction: "goes" },
  { type: "mistake", category: "Correct / Incorrect", q: "Ali goes to school every day.", words: ["Ali", "goes", "to", "school", "every", "day"], isCorrectSentence: true },
  { type: "mistake", category: "Correct / Incorrect", q: "They was playing football.", words: ["They", "was", "playing", "football"], isCorrectSentence: false, wrongIndex: 1, correction: "were" },
  { type: "mistake", category: "Correct / Incorrect", q: "I enjoy to read books.", words: ["I", "enjoy", "to read", "books"], isCorrectSentence: false, wrongIndex: 2, correction: "reading" },
  { type: "mistake", category: "Correct / Incorrect", q: "The package was mailed by Bob.", words: ["The", "package", "was", "mailed", "by", "Bob"], isCorrectSentence: true },
  { type: "mistake", category: "Correct / Incorrect", q: "I need an information.", words: ["I", "need", "an", "information"], isCorrectSentence: false, wrongIndex: 2, correction: "some" },
  { type: "mistake", category: "Correct / Incorrect", q: "She studies English every day.", words: ["She", "studies", "English", "every", "day"], isCorrectSentence: true },
  { type: "mistake", category: "Correct / Incorrect", q: "The child was examine by a doctor.", words: ["The", "child", "was", "examine", "by", "a", "doctor"], isCorrectSentence: false, wrongIndex: 3, correction: "examined" }
];

let currentIndex = 0;
let userAnswers = Array(questions.length).fill(null);

const quizArea = document.getElementById("quizArea");
const resultArea = document.getElementById("resultArea");
const categoryBadge = document.getElementById("categoryBadge");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const helperText = document.getElementById("helperText");
const progressFill = document.getElementById("progressFill");
const liveProgress = document.getElementById("liveProgress");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreText = document.getElementById("scoreText");
const messageText = document.getElementById("messageText");
const reviewContainer = document.getElementById("reviewContainer");

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[.?!]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isAnswered(answer) {
  if (answer === null) return false;
  if (typeof answer === "object" && answer.type === "arrange") return answer.selected.length > 0;
  if (typeof answer === "object" && answer.type === "mistake") return answer.status !== null;
  return true;
}

function checkAnswer(item, answer) {
  if (answer === null) return false;
  if (item.type === "mcq") return answer === item.answer;
  if (item.type === "arrange") return normalizeText(answer.text) === normalizeText(item.answerText);
  if (item.type === "mistake") {
    if (item.isCorrectSentence) return answer.status === "correct";
    return answer.status === "incorrect" && answer.wordIndex === item.wrongIndex && normalizeText(answer.correction) === normalizeText(item.correction);
  }
  return false;
}

function renderQuestion() {
  const item = questions[currentIndex];
  categoryBadge.textContent = item.category;
  questionNumber.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  questionText.textContent = item.q;
  optionsContainer.innerHTML = "";
  helperText.textContent = "";

  if (item.type === "mcq") renderMcq(item);
  if (item.type === "arrange") renderArrange(item);
  if (item.type === "mistake") renderMistake(item);

  const percent = ((currentIndex + 1) / questions.length) * 100;
  progressFill.style.width = `${percent}%`;
  const answered = userAnswers.filter(isAnswered).length;
  liveProgress.textContent = `${answered} / ${questions.length} answered`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.classList.toggle("hidden", currentIndex === questions.length - 1);
  finishBtn.classList.toggle("hidden", currentIndex !== questions.length - 1);
}

function renderMcq(item) {
  helperText.textContent = "Choose the correct answer.";
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    if (userAnswers[currentIndex] === index) button.classList.add("selected");
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    button.addEventListener("click", () => {
      userAnswers[currentIndex] = index;
      renderQuestion();
    });
    optionsContainer.appendChild(button);
  });
}

function renderArrange(item) {
  helperText.textContent = "Click the words in the correct order. اضغط على الكلمات بالترتيب الصحيح.";
  let answer = userAnswers[currentIndex];
  if (!answer || answer.type !== "arrange") answer = { type: "arrange", selected: [] };
  userAnswers[currentIndex] = answer;

  const sentenceBox = document.createElement("div");
  sentenceBox.className = "sentence-box";
  sentenceBox.textContent = answer.selected.length ? answer.selected.map(i => item.words[i]).join(" ") : "Your sentence will appear here...";
  optionsContainer.appendChild(sentenceBox);

  const wordsBox = document.createElement("div");
  wordsBox.className = "word-bank";
  item.words.forEach((word, index) => {
    const button = document.createElement("button");
    button.className = "word-chip";
    button.textContent = word;
    button.disabled = answer.selected.includes(index);
    button.addEventListener("click", () => {
      answer.selected.push(index);
      answer.text = answer.selected.map(i => item.words[i]).join(" ");
      renderQuestion();
    });
    wordsBox.appendChild(button);
  });
  optionsContainer.appendChild(wordsBox);

  const actions = document.createElement("div");
  actions.className = "small-actions";
  const undoBtn = document.createElement("button");
  undoBtn.className = "btn mini secondary";
  undoBtn.textContent = "Undo";
  undoBtn.onclick = () => {
    answer.selected.pop();
    answer.text = answer.selected.map(i => item.words[i]).join(" ");
    renderQuestion();
  };
  const resetBtn = document.createElement("button");
  resetBtn.className = "btn mini secondary";
  resetBtn.textContent = "Reset";
  resetBtn.onclick = () => {
    userAnswers[currentIndex] = { type: "arrange", selected: [], text: "" };
    renderQuestion();
  };
  actions.appendChild(undoBtn);
  actions.appendChild(resetBtn);
  optionsContainer.appendChild(actions);
}

function renderMistake(item) {
  helperText.textContent = "First choose Correct or Incorrect. If it is incorrect, select the wrong word and write the correction.";
  let answer = userAnswers[currentIndex];
  if (!answer || answer.type !== "mistake") answer = { type: "mistake", status: null, wordIndex: null, correction: "" };
  userAnswers[currentIndex] = answer;

  const row = document.createElement("div");
  row.className = "choice-row";
  ["correct", "incorrect"].forEach(status => {
    const button = document.createElement("button");
    button.className = "option compact";
    if (answer.status === status) button.classList.add("selected");
    button.textContent = status === "correct" ? "Correct" : "Incorrect";
    button.addEventListener("click", () => {
      answer.status = status;
      if (status === "correct") {
        answer.wordIndex = null;
        answer.correction = "";
      }
      renderQuestion();
    });
    row.appendChild(button);
  });
  optionsContainer.appendChild(row);

  if (answer.status === "incorrect") {
    const wordsBox = document.createElement("div");
    wordsBox.className = "word-bank";
    item.words.forEach((word, index) => {
      const button = document.createElement("button");
      button.className = "word-chip";
      if (answer.wordIndex === index) button.classList.add("selected-word");
      button.textContent = word;
      button.addEventListener("click", () => {
        answer.wordIndex = index;
        renderQuestion();
      });
      wordsBox.appendChild(button);
    });
    optionsContainer.appendChild(wordsBox);

    const input = document.createElement("input");
    input.className = "correction-input";
    input.placeholder = "Write the correction here...";
    input.value = answer.correction || "";
    input.addEventListener("input", (event) => {
      answer.correction = event.target.value;
    });
    optionsContainer.appendChild(input);
  }
}

function answerToText(item, answer) {
  if (answer === null) return "No answer";
  if (item.type === "mcq") return item.options[answer] ?? "No answer";
  if (item.type === "arrange") return answer.text || answer.selected.map(i => item.words[i]).join(" ") || "No answer";
  if (item.type === "mistake") {
    if (answer.status === "correct") return "Correct";
    if (answer.status === "incorrect") {
      const selectedWord = answer.wordIndex === null ? "No word selected" : item.words[answer.wordIndex];
      return `Incorrect | wrong word: ${selectedWord} | correction: ${answer.correction || "No correction"}`;
    }
  }
  return "No answer";
}

function correctAnswerText(item) {
  if (item.type === "mcq") return item.options[item.answer];
  if (item.type === "arrange") return item.answerText;
  if (item.type === "mistake") {
    if (item.isCorrectSentence) return "Correct sentence";
    return `Incorrect | wrong word: ${item.words[item.wrongIndex]} | correction: ${item.correction}`;
  }
  return "";
}

function showResults() {
  const score = userAnswers.reduce((total, answer, index) => total + (checkAnswer(questions[index], answer) ? 1 : 0), 0);

  quizArea.classList.add("hidden");
  resultArea.classList.remove("hidden");
  liveProgress.textContent = `${score} / ${questions.length} correct`;

  const percentage = Math.round((score / questions.length) * 100);
  scoreText.textContent = `${score} / ${questions.length} (${percentage}%)`;
  messageText.textContent = percentage >= 85 ? "Excellent! You are ready." : percentage >= 70 ? "Good job. Review the wrong answers." : "Keep practicing. Focus on the review below.";

  reviewContainer.innerHTML = "";
  questions.forEach((item, index) => {
    const isCorrect = checkAnswer(item, userAnswers[index]);
    const card = document.createElement("div");
    card.className = `review-card ${isCorrect ? "correct" : "wrong"}`;
    card.innerHTML = `
      <h4>${index + 1}. ${item.q}</h4>
      <p>Your answer: <span class="${isCorrect ? "correct-text" : "wrong-text"}">${answerToText(item, userAnswers[index])}</span></p>
      <p>Correct answer: <span class="correct-text">${correctAnswerText(item)}</span></p>
      <p><strong>Topic:</strong> ${item.category}</p>
    `;
    reviewContainer.appendChild(card);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
});

finishBtn.addEventListener("click", showResults);

restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  userAnswers = Array(questions.length).fill(null);
  resultArea.classList.add("hidden");
  quizArea.classList.remove("hidden");
  renderQuestion();
});

renderQuestion();
