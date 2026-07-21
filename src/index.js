// JavaScript for the Quiz App

const questions = [
	// Science questions
	{
		id: 1, // unique identifier
		type: 'mcq', // multiple choice question with a single correct answer
		question: 'What is the chemical formula for water?', // question asked of the user
		options: ['H2O', 'HO2', 'O2H', 'H2'], // options displayed underneath the question
		answer: 'H2O', // correct answer to the question
		explanation: 'Water is composed of two hydrogen atoms and one oxygen atom: H2O.' // explanation provided on the Results screen in the event of a wrong answer
	},
	{
		id: 2,
		type: 'mcq',
		question: 'Which force keeps planets in orbit around the Sun?',
		options: ['Gravity', 'Electromagnetism', 'Friction', 'Inertia'],
		answer: 'Gravity',
		explanation: 'Gravity is the attractive force that keeps planets orbiting the Sun.'
	},
	{
		id: 3,
		type: 'multi', // multiple choice question with multiple correct answers
		question: 'Which of the following are inputs required for photosynthesis?', // question asked of the user with multiple correct answers
		options: ['Sunlight', 'Carbon dioxide', 'Oxygen', 'Water'],
		answer: ['Sunlight', 'Carbon dioxide', 'Water'], // multiple correct answers
		explanation: 'Photosynthesis requires sunlight, carbon dioxide and water; oxygen is a produced output, not an input.'
	},

	// Technology questions
	{
		id: 4,
		type: 'mcq',
		question: 'What does HTTP stand for?',
		options: ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'HyperTransfer Text Program', 'HyperText Transmission Protocol'],
		answer: 'HyperText Transfer Protocol',
		explanation: 'HTTP stands for HyperText Transfer Protocol, used for web communication.'
	},
	{
		id: 5,
		type: 'mcq',
		question: 'Which company acquired Android and developed it into a major mobile OS?',
		options: ['Apple', 'Microsoft', 'Google', 'IBM'],
		answer: 'Google',
		explanation: 'Google acquired Android Inc. in 2005 and developed the Android OS.'
	},
	{
		id: 6,
		type: 'multi',
		question: 'Which of the following are types of volatile memory (loses data when turned off) in a computer?',
		options: ['RAM', 'ROM', 'Cache', 'SSD'],
		answer: ['RAM', 'Cache'],
		explanation: 'RAM and CPU cache are volatile. ROM and SSD are non-volatile.'
	},

	// Literature questions
	{
		id: 7,
		type: 'mcq',
		question: 'Who wrote "Pride and Prejudice"?',
		options: ['Jane Austen', 'Charlotte Brontë', 'Mary Shelley', 'Emily Brontë'],
		answer: 'Jane Austen',
		explanation: 'Jane Austen is the author of "Pride and Prejudice" (published 1813).'
	},
	{
		id: 8,
		type: 'mcq',
		question: 'In George Orwell\'s "1984", what is the name of the ruling political party?',
		options: ['The Party', 'Big Brother', 'Oceania', 'Ministry of Truth'],
		answer: 'The Party',
		explanation: 'The ruling political organization in "1984" is commonly referred to as The Party.'
	},
	{
		id: 9,
		type: 'multi',
		question: 'Which of the following epic poems are attributed to Homer?',
		options: ['The Odyssey', 'The Iliad', 'The Aeneid', 'The Argonautica'],
		answer: ['The Odyssey', 'The Iliad'],
		explanation: 'Homer is traditionally credited with both "The Iliad" and "The Odyssey"; the Aeneid is by Virgil.'
	},

	// Pop culture questions
	{
		id: 10,
		type: 'mcq',
		question: 'Which film franchise popularized the phrase "May the Force be with you"?',
		options: ['Star Wars', 'Star Trek', 'The Matrix', 'Blade Runner'],
		answer: 'Star Wars',
		explanation: 'The phrase "May the Force be with you" is a well-known line from the Star Wars franchise.'
	},
	{
		id: 11,
		type: 'mcq',
		question: 'Which artist released the album "Thriller" in 1982?',
		options: ['Michael Jackson', 'Prince', 'Madonna', 'Whitney Houston'],
		answer: 'Michael Jackson',
		explanation: 'Michael Jackson released "Thriller" in 1982; it became the best-selling album of all time.'
	},
	{
		id: 12,
		type: 'multi',
		question: 'Which of the following streaming services produce original series?',
		options: ['Netflix', 'Hulu', 'Amazon Prime Video', 'HBO Max'],
		answer: ['Netflix', 'Hulu', 'Amazon Prime Video', 'HBO Max'],
		explanation: 'All listed platforms (Netflix, Hulu, Amazon Prime Video, HBO Max) produce original series.'
	}
];

// Shuffle function utilising the fisher-yates algorithm to randomise the question array
function shuffle(array){
	const a = array.slice();
	for(let i=a.length-1;i>0;i--){
		const j = Math.floor(Math.random()*(i+1));
		[a[i],a[j]] = [a[j],a[i]];
	}
	return a;
}

// Randomiser function for both questions and choices which ensures that the order of questions and their options is different each time the quiz is taken, preventing memorisation of answer positions.
let shuffledQuestions = []; 
let userAnswers = []; 
let currentIndex = 0; 

function prepareQuestions(){ 
	shuffledQuestions = shuffle(questions).map(q => ({...q, _options: shuffle(q.options)}));
	userAnswers = new Array(shuffledQuestions.length).fill(null);
	currentIndex = 0;
}

// Used by quiz code to find elements like prevBtn, nextBtn, submitBtn, progress, and question-card.
function $(id){return document.getElementById(id)}

// Renders the current question into the DOM utilising shuffledQuestions and userAnswers. It also updates the progress text and enables/disables buttons based on the current state of the quiz.
function renderQuestion(idx){
	const container = $('question-card');
	const total = shuffledQuestions.length;
	const q = shuffledQuestions[idx];
	const selected = userAnswers[idx];

	const optionsHtml = q._options.map((opt, i) => {
		let checked = '';
		if(q.type === 'multi'){
			if(Array.isArray(selected) && selected.indexOf(opt) !== -1) checked = 'checked';
		} else {
			if(selected === opt) checked = 'checked';
		}
		// use checkbox for multi, radio for single-choice
		const inputType = q.type === 'multi' ? 'checkbox' : 'radio';
		return `\n      <label class="option">\n        <input type="${inputType}" name="option" value="${i}" ${checked}>\n        <span class="option-text">${escapeHtml(opt)}</span>\n      </label>`;
	}).join('');

	container.innerHTML = `
		<div class="question-meta small">Question ${idx+1} of ${total}</div>
		<div class="question-title">${escapeHtml(q.question)}</div>
		${q.type === 'multi' ? '<div class="small multi-note">(There may be more than one correct answer)</div>' : ''}
		<form id="optionsForm" class="options">${optionsHtml}\n    </form>
	`;

	// Update progress text
	$('progress').textContent = `Question ${idx+1} of ${total}`;

	// Update buttons
	const prevBtn = $('prevBtn');
	prevBtn.style.display = '';
	prevBtn.disabled = idx === 0;
	const isLast = idx === total-1;
	$('nextBtn').style.display = isLast ? 'none' : '';
	$('submitBtn').style.display = isLast ? '' : 'none';

	// Enable/disable next based on selection
	const nextBtn = $('nextBtn');
	nextBtn.disabled = userAnswers[idx] === null;

	// Add change listener
	const form = $('optionsForm');
	form.addEventListener('change', () => {
		if(q.type === 'multi'){
			const checkedInputs = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'));
			const indices = checkedInputs.map(i => Number(i.value));
			if(indices.length){
				userAnswers[idx] = indices.map(i => q._options[i]);
				nextBtn.disabled = false;
			} else {
				userAnswers[idx] = null;
				nextBtn.disabled = true;
			}
		} else {
			const checked = form.querySelector('input[type="radio"]:checked');
			if(checked){
				const valIndex = Number(checked.value);
				userAnswers[idx] = q._options[valIndex];
				nextBtn.disabled = false;
			}
		}
	});
}

function arraysEqualAsSets(a,b){
    if(!Array.isArray(a) || !Array.isArray(b)) return false;
    if(a.length !== b.length) return false;
    return a.every(x => b.indexOf(x) !== -1);
}

function escapeHtml(s){
	return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function showSummary(){
	const container = $('question-card');
	const total = shuffledQuestions.length;
	let correct = 0;
	const wrongItems = [];

	shuffledQuestions.forEach((q, i) => {
		const user = userAnswers[i];
		if(q.type === 'multi'){
			if(Array.isArray(user) && arraysEqualAsSets(user, q.answer)){
				correct++;
			} else {
				const selText = Array.isArray(user) ? user.join(', ') : null;
				const corrText = Array.isArray(q.answer) ? q.answer.join(', ') : q.answer;
				wrongItems.push({question: q.question, selected: selText, correct: corrText, explanation: q.explanation});
			}
		} else {
			if(user === q.answer){
				correct++;
			} else {
				wrongItems.push({question: q.question, selected: user, correct: q.answer, explanation: q.explanation});
			}
		}
	});

	const percent = Math.round((correct/total)*100);

	let wrongHtml = '';
	if(wrongItems.length){
		wrongHtml = '<div class="wrong-list">' + wrongItems.map(w => `\n      <div class="wrong-item">\n        <div><strong>Question:</strong> ${escapeHtml(w.question)}</div>\n        <div><strong>Your answer:</strong> ${w.selected ? escapeHtml(w.selected) : '<em>Unanswered</em>'}</div>\n        <div><strong>Correct answer:</strong> ${escapeHtml(w.correct)}</div>\n        <div class="small"><strong>Explanation:</strong> ${escapeHtml(w.explanation)}</div>\n      </div>`).join('\n') + '\n    </div>';
	} else {
		wrongHtml = '<p class="small">All answers correct — well done!</p>';
	}

	container.innerHTML = `
		<div class="summary">\n      <h2>Results</h2>\n      <div><span class="correct-badge">${correct} / ${total} correct</span></div>\n      <p class="small">Score: ${percent}%</p>\n      ${wrongHtml}\n      <div style="margin-top:12px">\n        <button id="restartBtn" class="btn">Restart Quiz</button>\n      </div>\n    </div>\n  `;

	$('prevBtn').style.display = 'none';
	$('nextBtn').style.display = 'none';
	$('submitBtn').style.display = 'none';

	$('restartBtn').addEventListener('click', () => {
		init();
	});
}

function init(){
	prepareQuestions();
	renderQuestion(0);

	// Wire buttons
	$('prevBtn').onclick = () => {
		if(currentIndex>0){
			currentIndex--;
			renderQuestion(currentIndex);
		}
	};

	$('nextBtn').onclick = () => {
		// Require answer before moving on
		if(userAnswers[currentIndex] === null){
			alert('Please select an answer before continuing.');
			return;
		}
		if(currentIndex < shuffledQuestions.length - 1){
			currentIndex++;
			renderQuestion(currentIndex);
		}
	};

	$('submitBtn').onclick = () => {
		// Ensure current is answered
		if(userAnswers[currentIndex] === null){
			alert('Please select an answer before submitting.');
			return;
		}
		showSummary();
	};
}

function showWelcome(){
	const welcome = $('welcome');
	const app = $('quiz-app');
	welcome.setAttribute('aria-hidden','false');
	app.style.display = 'none';
	// Start button
	$('startBtn').onclick = () => {
		welcome.setAttribute('aria-hidden','true');
		app.style.display = '';
		init();
	};
}

document.addEventListener('DOMContentLoaded', () => {
	showWelcome();
});

