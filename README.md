![picture of the website](images/Welcome.gif)

# Online Quiz
<p>Welcome to my web quiz, with questions covering science, technology, literature and general knowledge.</p>
<p>This README file provides essential information about the website and it's purpose.</p>

The website can be accessed by this [Link](https://rich-t-biscuit.github.io/Quiz/)

## Introduction
<p>The quiz will allow users to test their knowledge, learn something new and check their results after completion of the quiz.</p>

## Features
<p><b>Complete this section</b></p>

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

## Testing
<p><b>Add screenshots & commentary for different sizes</b></p>

------------------------

<p>Alongside friends and family test running my quiz to check for accessibility and errors, I utilised the below websites to test code written in HTML, CSS and JavaScript.</p>

------------------------
<br>HTML testing was done through https://validator.w3.rg/#validate\_by\_input.

**Initial testing showed multiple warnings:**

<br>
**1)** Info: Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.

From line 4, column 2; to line 4, column 25
>↩<head>↩	<meta charset="utf-8" />  ↩	<m

This was fixed by removing the closed bracket at the end of the code.
&nbsp;	<meta charset="utf-8">  

<br>
**2)** Info: Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.

From line 5, column 2; to line 5, column 70
-8" />  ↩	<meta name="viewport" content="width=device-width,initial-scale=1" /> ↩	<ti

This was fixed by removing the closed bracket at the end of the code.
&nbsp;	<meta name="viewport" content="width=device-width,initial-scale=1"> 

<br>
**3)** Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.

From line 16, column 3; to line 16, column 42
eader>↩↩		<section id="quiz-app" class="quiz-app">↩			<d

To aid with accessibility, this was fixed by adding a hidden header.
<br> `<h2 class="visually-hidden">Quiz Application</h2>`


------------------------------------------

CSS testing was done through https://jigsaw.w3.org/css-validator/#validate_by_input.


------------------------------------------

JavaScript testing was done through https://jshint.com/.

------------------------------------------

Color contrast testing was done through https://coolors.co/contrast-checker/111111-ffffff.

-----------------------------------------

## License

## Author + Link to GitHub
