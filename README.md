CSS-Mint
========

CSS Mint is an Open Source UI Kit built to cut down front end development time and ease up Layout and Structuring of your Web Application. Built on top of Normalize.css, It handles cross browser inconsistencies and aims at reducing markup. 

It follows the OOCSS approach for better and cleaner CSS styling.

CSS Mint recommends HTML5 based semantic style for writing markup. All examples and the bundled test project is based on the same approach.

## Installation

You can install the kit using bower. Make sure you have bower installed, then run : 

```html
bower install CSS-Mint
```
Or, [download](https://github.com/ArunMichaelDsouza/CSS-Mint/releases) the latest version and include ``css-mint.min.css`` to your project.


## Components

#### Header

To create a header element, simply add a ``header`` class to the header tag along with any of the optional styling classes.

Example - 

```html
	<header class="header"></header>
```
![CSS Mint Header](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/header/header.png)

Adding a right navbar in the header element  

```html
	<div class="nav-right">
		<nav class="navbar">
	 		<ul>
	        	<li><a href="#">Home</a></li>
	        	<li><a href="#">About</a></li>
	            <li><a href="#">Contact</a></li>
	        </ul>
	    </nav>
	</div>
```

![CSS Mint Header Navbar](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/header/header%20nav-right.png)


##### Optional Classes

```html
	<header class="header default"></header>
```
![CSS Mint Header Default](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/header/header%20default.png)

```html
	<header class="header light"></header>
```
![CSS Mint Header Light](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/header/header%20light.png)

```html
	<header class="header dark"></header>
```
![CSS Mint Header Dark](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/header/header%20dark.png)

Add class ``fixed`` to your header element to make it stick to the top, when you scroll down. 

```html
	<header class="header dark fixed"></header>
```

<br/>
#### Navbar

Simply add a ``navbar`` class to the nav tag and add an unordered list with refrences to your nav links. The same can be used with the header component as shown above.

Example - 

```html
	<nav class="navbar">
 		<ul>
        	<li><a href="#">Home</a></li>
        	<li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
```

<br/>
#### Panel

Create a panel to contain information.

Example - 

```html
	<div class="panel">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore.
	</div>
```

<br/>
#### The Grid

CSS Mint comes bundled with a 6-column grid system that can be used to create complex layouts. Add columns that can be spanned from 16% ``(col-span-1)`` to 100% ``(col-span-6)`` of the screen width. These columns need to be wrapped within a grid row ``(gr-row)`` container. 

Example - 

```html
	<div class="gr-row">
		<div class="col-span-3">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore.
		</div>
		<div class="col-span-3">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore.
		</div>
	</div>
```

![CSS Mint Grid System](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/grid/grid.png)

<br/>
#### Typography

CSS Mint has clean and smooth typography styles that can be used in your project. 

![CSS Mint Typography](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/typography/typography.png)

CSS Mint also has in built classes that can be used to customise text.

Example - 

```html
	<!-- For lighter text -->
	<p class="font-light"></p> 
	<!-- For normal text -->
	<p class="font-normal"></p>
	<!-- For bolder text -->
	<p class="font-bold"></p> 

	<!-- Align text to left -->
	<p class="align-left"></p>
	<!-- Align text to right -->
	<p class="align-right"></p>
	<!-- Align text to center -->
	<p class="align-center"></p>
	<!-- Justify text -->
	<p class="align-justify"></p>

	<!-- For smaller text size -->
	<p class="text-small"></p> 
	<!-- For normal text size -->
	<p class="text-normal"></p> 
	<!-- For bigger text size -->
	<p class="text-big"></p> 
```

<br/>
#### Buttons

Add a ``btn`` class to a button element and add any of the optional styling classes.

Example - 

```html
	<button class="btn"></button>
```

##### Optional Classes

```html
	<button class="btn default"></button>
	<button class="btn primary"></button>
	<button class="btn success"></button>
	<button class="btn info"></button>
	<button class="btn warning"></button>
	<button class="btn error"></button>
```

![CSS Mint Buttons](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/button/buttons.png)

Make simple line buttons by adding a class ``line`` to the button element along with the ``btn`` class

![CSS Mint Line Buttons](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/button/buttons-line.png)

Make buttons rounded by adding a class ``rounded`` to the button element along with the ``btn`` class

![CSS Mint Rounded Buttons](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/button/buttons-rounded.png)

You can also make small or large sized buttons by adding a class ``small`` or ``large`` to the button element along with the ``btn`` class

![CSS Mint Size Buttons](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/button/buttons-size.png)

<br/>
#### Card

Create a floating card with some information to be put in.

Example - 

```html
	<div class="card-wrapper">
		<div class="card">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore.
		</div>
	</div>
```

![CSS Mint Card](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/card/card.png)

<br/>
#### Footer

Create a footer element by adding a ``footer`` class to a footer tag.

Example - 

```html
	<footer class="footer">
	</footer>
```

##### Optional Classes

The footer component has the same optional classes as the header component.

```html
	<footer class="footer default">
	</footer>

	<footer class="footer light">
	</footer>

	<footer class="footer dark">
	</footer>
```

<br/>
#### Alert

Create alert messages by adding a class ``alert`` with any of the optional styling classes.

Example - 

```html
	<div class="alert">
	</div>
```

##### Optional Classes

Create alerts for multiple types, add a simple class ``line`` to create a line alert message.

```html
	<div class="alert default">
	</div>

	<div class="alert primary">
	</div>

	<div class="alert success">
	</div>

	<div class="alert info">
	</div>

	<div class="alert warning">
	</div>

	<div class="alert error">
	</div>


	<div class="alert default line">
	</div>

	<div class="alert primary line">
	</div>

	<div class="alert success line">
	</div>

	<div class="alert info line">
	</div>

	<div class="alert warning line">
	</div>

	<div class="alert error line">
	</div>
```

![CSS Mint Alerts](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/alert/alert.png)

![CSS Mint Line Alerts](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/test/screenshots/alert/alert-line.png)

<br/>
#### Utilities

##### Content container

Add a class ``container`` to create a fixed width content container for your wrapper elements.

Example - 

```html
	<div class="container">
		....
	</div>
```

##### Transitions

CSS Mint currently supports ony 3 transitions that can be added to any element which is supposed to change its state (i.e. hover, focus, active etc).

* Ease in
* Ease out
* Ease in out 

Example - 

```html
	<button class="btn info ease-in-out"></button>
```

## Todos
##### Components to be added 
* ~~Typography (blockquotes)~~
* Color swatches
* Panel (pricing, change general one)
* Input types (inactive, active, disabled)
* Forms
* Tables
* Breadcrumbs
* Pagination
* Badges
* Thumbnails
* Lists (ordered, unordered, scroll list)

## License

MIT Licensed

Copyright (c) 2015 Arun Michael Dsouza (amdsouza92@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.






























