![picture of the website](images/Welcome.gif)

# Online Quiz
<p>Welcome to my web quiz, with questions covering science, technology, literature and general knowledge.</p>
<p>This README file provides essential information about the website and it's purpose.</p>

The website can be accessed by this [Link](https://rich-t-biscuit.github.io/Quiz/)

## Introduction
<p>The quiz will allow users to test their knowledge, learn something new and check their results after completion of the quiz.</p>

# Features
<p>Key features of the online quiz includes:</p>

- Randomised questions
  - Utilising the Fisher-Yates shuffle algorithm
- Randomised answer options
- Multiple question types
  - Single-answer multiple choice utilising radio buttons
  - Multiple-answer questions utilising checkboxes
- Start screen, with instruction for the user to follow to complete the quiz
- Previous button, enabling users to return to earlier questions but disabled on the first question.
- Next button, hidden on final question and disabled until an answer has been selected to prevent accidental skipping of questions.
- Submit button, replaces Next button on final question and requires an answer to be selected before submission.
- Quiz exists on a single page with answers stored in a userAnswers array.
  - Returning to the previous question restores selctions automatically.
- Multi-selection validation, checks multiple-answer questions by comparing the selected answers as sets to resolve answer order issue.
- Progress tracking, quiz indicates the current question the user is on as well as the total question number.
- Results screen, after submission the application displays:
  - Number of correct answers
  - Total score
  - Percentage achieved
  - List of incorrectly answered questions
  - User's selected answers
  - Correct answer
  - Explanation for each incorrect answer
- Restart function, on the results screen the user can restart the quiz without refreshing which will still result in a new random order of questions and answers.
- HTML code used ensures the size of the quiz will change to match screen size to avoid any usability issues.

## Technologies Used
<p>Built with the following technologies:</p>

- HTML5 was used as the foundation of the site.
- CSS3 was used to add the styles and layout of the site.
- JavaScript (ES6) was used to create all the logic necessary to make the quiz work.
- GitHub was used to host the code of the website.
- GitHub Pages was used to deploy the website.

## Project Structure
```
Quiz/
│
├── index.html
├── src/
│   └── index.css
│   └── index.js
│
└── images/
```

# Testing

### Compatability
<p>I have tested the website on multiple browsers and sizes, utilising Chrome's built-in development tools, to ensure the functionality persists on different screen sizes:</p>
- Microsoft Edge

<p>Desktop Size (1919x1079)</p>

![picture of the website being tested in Chrome](images/Edge_Home.gif)

- Mozilla Firefox
<p>Desktop Size (1919x1079)</p>

![picture of the website being tested in Chrome](images/Firefox_Home.gif)

- Google Chrome

  - Home screen

<p>Desktop Size (1919x1079)</p>

![picture of the website being tested in Chrome](images/Chrome_Home.gif)

<p>Resized to the same dimensions as a Pixel 7</p>

![picture of the website being tested in Chrome](images/Chrome_Home_Pixel_7.gif)

<p>Resized to the same dimensions as an iPhone 14 Pro Max</p>

![picture of the website being tested in Chrome](images/Chrome_Home_iPhone_14_Pro_Max.gif)

  - Questions

![picture of the website being tested in Chrome](images/Chrome_Questions.gif)

![picture of the website being tested in Chrome](images/Chrome_Home.gif)

- Edge
- Firefox





--------------------------------
<p>Alongside friends and family test running my quiz to check for accessibility and errors, I utilised the below websites to test code written in HTML, CSS and JavaScript.</p>

### HTML Testing 

<br>HTML testing was done through [https://validator.w3.rg/#validate\_by\_input](https://validator.w3.org/detailed.html#validate-by-input).

**Initial testing showed multiple warnings:**

<br>
**1)** Info: Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.

An error had been made with the closing bracket at the end of the code:

`<meta charset="utf-8">`

**2)** Info: Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.

An error had been made with the closing bracket at the end of the code:

`<meta name="viewport" content="width=device-width,initial-scale=1">`

**3)** Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.

To aid accessibility, this was fixed by adding a hidden header:

`&lt;h2 class="visually-hidden"&gt;Quiz Application&lt;/h2&gt;`

<br>

![HTML Validator](images/HTML_Validator.gif)

### CSS Testing

CSS testing was done through [https://jigsaw.w3.org/css-validator/#validate_by_input](https://jigsaw.w3.org/css-validator/validator).

![CSS Validator](images/W3C_CSS_Validator.gif)

### JavaScript Testing

JavaScript testing was done through [https://jshint.com/](https://jshint.com/).

![JavaScript Validator](images/Java_Validator.gif)

### Color Contrast Testing

Color contrast testing was done through [https://coolors.co/contrast-checker/111111-ffffff](https://coolors.co/contrast-checker/111111-ffffff).

<p>Check Card</p>

![Color Contrast - Card](images/Color_Card.gif)
<p>Background</p>

![Color Contrast - Background](images/Color_Subtitle.gif)

### Performance Testing

Lighthouse, within Chrome's built in development tools, was used to test for performance, accessibility, best practice and SEO.

<p align="center">
  <img src="images/Lighthouse.gif" alt="Color Contrast - Card">
</p>

----------------------------------------

## Author + Link to GitHub

## Credits
