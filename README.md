<img src="https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Components/img/logo.png" width="150" height="auto" alt="CSS mint icon"/>

CSS-Mint [![npm version](https://badge.fury.io/js/css-mint.svg)](https://badge.fury.io/js/css-mint) [![NPM Downloads](https://img.shields.io/npm/dm/css-mint.svg?style=flat-square)](https://www.npmjs.com/package/css-mint) [![Latest Stable Version](https://img.shields.io/bower/v/CSS-Mint.svg?style=flat-square)](http://bower.io/search/?q=CSS-Mint) [![](https://data.jsdelivr.com/v1/package/npm/css-mint/badge?style=rounded)](https://www.jsdelivr.com/package/npm/css-mint)
========
> Add some "Mint" to your web pages

<br/>

[http://arunmichaeldsouza.github.io/CSS-Mint/](http://arunmichaeldsouza.github.io/CSS-Mint/)

CSS Mint is an Open Source UI Kit built to cut down front end development time and ease up layout and structuring of your Web Application. Built on top of Normalize.css, it handles cross browser inconsistencies and aims at getting you started with your web project. 

It follows the OOCSS approach for better and cleaner CSS styling.

CSS Mint recommends HTML5 based semantic style for writing markup. All examples and the bundled test project is based on the same approach.

## Installation

#### CDN 

Use CSS Mint directly from jsdelivr CDN

```html
https://cdn.jsdelivr.net/npm/css-mint@1.4.6/build/css-mint.min.css
```

#### via bower

You can install the kit using bower. Make sure you have bower installed, then run : 

```html
bower install CSS-Mint
```

#### via npm

```html
npm install CSS-Mint
```

Or, [download](https://github.com/ArunMichaelDsouza/CSS-Mint/releases) the latest version and include ``css-mint.min.css`` to your project.

## Components

#### Header

To create a header element, simply add a ``header`` class to the header tag along with any of the optional styling classes.

Example - 

```html
	<header class="header"></header>
```

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

Adding the logo pane in the header.

```html
	<div class="logo">  
    	<a href="#"><h1>Logo</h1></a>
    </div>
```

##### Optional Classes

```html
	<header class="header dark"></header>
```

```html
	<header class="header grey"></header>
```

```html
	<header class="header light"></header>
```

![CSS Mint Header](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/header/header.png)


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

![CSS Mint Navbar](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/navbar/navbar.png)

<br/>
#### Panel

Create a panel to contain information.

Example - 

```html
	<div class="panel">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</div>
```

![CSS Mint Panel](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/panel/panel.png)

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

![CSS Mint Grid System](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/grid/grid.png)

<br/>
#### Typography

CSS Mint has clean and smooth typography styles that can be used in your project. 

![CSS Mint Typography](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/29326ba20a481db756de3924d765e301adb6cf31/demo/Screenshots/typography/typography.png)

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
    <!-- Highlighting text -->
    <span class="highlight">Highlight</span>
```

<br/>
#### Color Swatches

CSS Mint has a schematic color scheme to go with. 

![CSS Color Swatches](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/color-swatches/color-swatches.png)


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


Make simple line buttons by adding a class ``line`` to the button element along with the ``btn`` class


Make buttons rounded by adding a class ``rounded`` to the button element along with the ``btn`` class


You can also make small or large sized buttons by adding a class ``small`` or ``large`` to the button element along with the ``btn`` class

![CSS Mint Buttons](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/buttons/buttons.png)

<br/>
#### Card

Create a floating card with some information to be put in.

Example - 

```html
	<div class="card">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</div>
```
##### Optional Classes

Add these inbuilt classes to customise your card

``info`` to make an information card
```html
	<div class="card info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
        <div class="align-center">
            <img src="http://designmodo.github.io/Flat-UI/img/icons/svg/map.svg">
            <button class="ease-in-out">Know More</button>
        </div>
    </div>
```

``pricing`` to make a pricing card
```html
	<div class="card pricing">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
        <div class="align-center">
            <button class="ease-in-out">Buy for $499</button>
        </div>
    </div>
```

``photo`` to make a photo card
```html
	<div class="card photo">
        <img src="http://static1.squarespace.com/static/54e63432e4b02904f4c632e8/t/54ef890ce4b0a7de0912942d/1424984343312/abstract_geometric_low_poly___wallpaper_by_mcfrolic-d7gjq9d.jpg?format=2500w"/>
        <div class="card-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
            <div class="align-center">
                <button class="ease-in-out">Add to list</button>
            </div>
        </div>
    </div>
```

![CSS Mint Card](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/card/card.png)

<br/>
#### Footer

Create a footer element by adding a ``footer`` class to a footer tag.

Example - 

```html
	<footer class="footer">
	</footer>
```

Add ``footer-container`` class within the footer wrapper to add content and links

```html
	<footer class="footer">
		<div class="footer-container">
			Company &copy;2015
		</div>
	</footer>
```

##### Optional Classes

The footer component has the same optional classes as the header component.

```html
	<footer class="footer dark">
	</footer>

	<footer class="footer grey">
	</footer>

	<footer class="footer light">
	</footer>
```

![CSS Mint Footer](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/footer/footer.png)

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

![CSS Mint Alert](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/alert/alert.png)

<br/>
#### Badges

Create badges by simply adding a class ``badge`` to a span tag.

Example - 

```html
	<span class="badge">
		21
	</span>

    <span class="badge rounded">
        21
    </span>

    <span class="badge rounded line">
        21
    </span>

    <span class="badge notification">
        21
    </span>

    <span class="badge notification rounded">
        21
    </span>

    <span class="badge notification rounded line">
        21
    </span>
```

You can also add a ``line`` class to make a line badge and ``notification`` class to make a notification badge.

![CSS Mint Badge](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/badge/badge.png)

<br/>
#### Breadcrumbs

Create clickable breadcrumbs by adding a class ``breadcrumb`` to an unordered list and adding list items for follow-up links.

Example - 

```html
	<ul class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">One</a></li>
        <li><a href="#">One.one</a></li>
        <li><a href="#">One.two</a></li>
    </ul>
```

![CSS Mint Breadcrumbs](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/breadcrumb/breadcrumb.png)

<br/>
#### Input

CSS Mint also offers customisable input fields to be used in HTML forms. CSS Mint has a base styling for input elements which can be altered using a custom CSS file.

You can add a class ``error`` to indicate incorrect input fields.

Use the class ``file-upload`` to create a simple file uploader -  

```html
	<div class="file-upload">
    	<img class="upload-icon" src="http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/128/upload-icon.png"/>
        <label class="upload-label">Upload file</label>
        <input type="file"/>
    </div>
```

![CSS Mint Input](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/input/input.png)

<br/>
#### Pagination

Create a pagination component by adding the class ``pagination`` to an unordered list and adding clickable list items.

Example - 

```html
	<ul class="pagination">
        <li class="prev">
            <a href="#">Prev</a>
        </li>
        <li class="active">
            <a href="#">1</a>
        </li>
        <li>
            <a href="#">2</a>
        </li>
        <li>
            <a href="#">3</a>
        </li>
        <li>
            <a href="#">4</a>
        </li>
        <li>
            <a href="#">5</a>
        </li>
        <li>
            <a href="#">6</a>
        </li>
        <li>
            <a href="#">7</a>
        </li>
        <li>
            <a href="#">8</a>
        </li>
        <li>
            <a href="#">9</a>
        </li>
        <li class="next">
            <a href="#">Next</a>
        </li>
    </ul>
```

![CSS Mint Pagination](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/pagination/pagination.png)

<br/>
#### Tables

Create simple tables with the table tag for which CSS Mint offers base styling. You can also create info tables by adding a class ``info`` to a table tag.

Example - 

```html
	<table>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Id</th>
                <th>Dept.</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.</td>
                <td>Rachel</td>
                <td>5220</td>
                <td>Operations</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Anders</td>
                <td>1098</td>
                <td>IT</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Steve</td>
                <td>1120</td>
                <td>IT</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Alice</td>
                <td>3420</td>
                <td>Marketing</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Mike</td>
                <td>1276</td>
                <td>Sales</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>
                    
                </td>
                <td>
                    
                </td>
                <td>
                    <span class="font-normal">All check</span>
                </td>
                <td>
                    <span class="font-normal">All check</span> 
                </td>
            </tr>
        </tfoot>
    </table>
    <table class="info">
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Id</th>
                <th>Dept.</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.</td>
                <td>Rachel</td>
                <td>5220</td>
                <td>Operations</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Anders</td>
                <td>1098</td>
                <td>IT</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Steve</td>
                <td>1120</td>
                <td>IT</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Alice</td>
                <td>3420</td>
                <td>Marketing</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Mike</td>
                <td>1276</td>
                <td>Sales</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>
                    
                </td>
                <td>
                    
                </td>
                <td>
                    <span class="font-normal">All check</span>
                </td>
                <td>
                    <span class="font-normal">All check</span> 
                </td>
            </tr>
        </tfoot>
    </table>
```

![CSS Mint Tables](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/tables/tables.png)

<br/>
#### Thumbnail

Create an image thumbnail with the ``thumbnail`` class and add a thumbnail title.

Example - 

```html
	<div class="thumbnail">
        <img src="img/design.png"/>
        <span class="thumbnail-title">This is a title</span>
    </div>
```

![CSS Mint Thumbnail](https://raw.githubusercontent.com/ArunMichaelDsouza/CSS-Mint/master/demo/Screenshots/thumbnail/thumbnail.png)

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

## License

MIT Licensed

Copyright (c) 2015 Arun Michael Dsouza (amdsouza92@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.






























