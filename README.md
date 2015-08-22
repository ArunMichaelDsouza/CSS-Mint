CSS-Mint
========

CSS Mint is an Open Source UI Kit built to cut down front end development time and ease up Layout and Structuring of your Web Application. Built on top of Normalize.css, It handles cross browser inconsistencies and aims at reducing markup. 

It follows the OOCSS approach for better and cleaner CSS styling.

CSS Mint recommends HTML5 based semantic style for writing markup. All examples and the bundled test project is based on the same approach.

## Components

#### Header

To create a header element, simply add a ``header`` class to a header tag along with any of the optional styling classes.

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
	        	<li><a class="ease-in-out active" href="">Home</a></li>
	        	<li><a class="ease-in-out" href="">About</a></li>
	            <li><a class="ease-in-out" href="">Contact</a></li>
	        </ul>
	    </nav>
	</div>
```


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

#### Navbar

Example - 

```html
	<nav class="navbar">
 		<ul>
        	<li><a class="ease-in-out active" href="">Home</a></li>
        	<li><a class="ease-in-out" href="">About</a></li>
            <li><a class="ease-in-out" href="">Contact</a></li>
        </ul>
    </nav>
```