<img src="https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/img/logo_v2.png" width="140" height="auto" alt="CSS mint icon"/>

CSS-Mint [![npm version](https://badge.fury.io/js/css-mint.svg)](https://badge.fury.io/js/css-mint) [![NPM Downloads](https://img.shields.io/npm/dm/css-mint.svg?style=flat-square)](https://www.npmjs.com/package/css-mint) [![Latest Stable Version](https://img.shields.io/bower/v/CSS-Mint.svg?style=flat-square)](http://bower.io/search/?q=CSS-Mint) [![](https://data.jsdelivr.com/v1/package/npm/css-mint/badge?style=rounded)](https://www.jsdelivr.com/package/npm/css-mint)
========
> Add some "Mint" to your web pages

<br/>

CSS Mint is an Open Source UI Kit built to cut down front end development time and ease up layout and structuring of your Web Application. Built on top of Normalize.css, it handles cross browser inconsistencies and aims at getting you started with your web project. 

It follows the OOCSS approach for better and cleaner CSS styling.

CSS Mint recommends HTML5 based semantic style for writing markup. All examples and the bundled test project is based on the same approach.

<br/>

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

<br/>

## Components

#### Alert

Create alert messages by adding a ``cm-alert`` class with any of the optional styling classes.

Example - 

```html
<div class="cm-alert">
</div>
<div class="cm-alert primary">
</div>
<div class="cm-alert success">
</div>
<div class="cm-alert warning">
</div>
<div class="cm-alert error">
</div>
```

![CSS mint alert](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/alert.png)

<br/>

#### Badge

Create badges by simply adding a class ``cm-badge``.

Example - 

```html
<span class="cm-badge">Default</span>
<span class="cm-badge primary">Primary</span>
<span class="cm-badge success">Success</span>
<span class="cm-badge warning">Warning</span>
<span class="cm-badge error">Error</span>
<span class="cm-badge rounded">10</span>
<span class="cm-badge rounded primary">20</span>
<span class="cm-badge rounded success">30</span>
<span class="cm-badge rounded warning">40</span>
<span class="cm-badge rounded error">50</span>
```

You can also add a ``line`` class to make a line badge and ``notification`` class to make a notification badge.

![CSS mint badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/badge.png)

<br/>

#### Breadcrumb

Create badges by simply adding a class ``cm-breadcrumb``.

Example - 

```html
<ul class="cm-breadcrumb">
   <li>
      <a href="#">Home</a>
   </li>
   <li>
      <a href="#">Products</a>
   </li>
   <li>
      <a href="#">Electronics</a>
   </li>
   <li>
      <a href="#">Headphones</a>
   </li>
   <li class="active">
      <a href="#">JBL</a>
   </li>
</ul>
```

![CSS Mint Badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/breadcrumb.png)

<br/>

#### Button

Create badges by simply adding a class ``cm-button``.

Example - 

```html
<button class="cm-btn">Default</button>
<button class="cm-btn primary" disabled>Disabled</button>
<button class="cm-btn primary">Primary</button>
<button class="cm-btn success">Success</button>
<button class="cm-btn warning">Warning</button>
<button class="cm-btn error">Error</button>
<button class="cm-btn primary line">Primary</button>
<button class="cm-btn success line">Success</button>
<button class="cm-btn warning line">Warning</button>
<button class="cm-btn error line">Error</button>
```

![CSS Mint Badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/button.png)

<br/>

#### Card

Create badges by simply adding a class ``cm-card``.

Example - 

```html
<div class="cm-card">
   <div class="cm-card-header">
      Header
   </div>
   <div class="cm-card-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi praesentium neque possimus pariatur provident tempora. Aut
      perferendis iste unde cum, rerum consequatur tempora, porro voluptatum sequi tenetur recusandae
      eos suscipit.
   </div>
   <div class="cm-card-footer">
      Footer
   </div>
</div>

<div class="cm-card">
   <img src="img/landscape.jpg" class="cm-resp-img" />
   <div class="cm-card-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eius praesentium dignissimos, reprehenderit est ratione
      incidunt autem laudantium quia non necessitatibus earum quidem laboriosam quibusdam voluptas
      qui maxime blanditiis pariatur?
   </div>
</div>

<div class="cm-card">
   <img src="img/tech.jpg" class="cm-resp-img" />
   <div class="cm-card-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eius praesentium dignissimos, reprehenderit est ratione
      incidunt autem laudantium quia non necessitatibus earum quidem laboriosam quibusdam voluptas
      qui maxime blanditiis pariatur?
   </div>
   <div class="cm-card-footer">
      <button class="cm-btn success get-started">Get Started</button>
   </div>
</div>
```

![CSS Mint Badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/card.png)

<br/>

#### Grid system

Create badges by simply adding a class ``cm-grid``.

Example - 

```html
<div class="cm-grid">
   <div class="cm-row">
      <div class="cm-col-md-1">
         <div>1</div>
      </div>
      <div class="cm-col-md-1">
         <div>2</div>
      </div>
      <div class="cm-col-md-1">
         <div>3</div>
      </div>
      <div class="cm-col-md-1">
         <div>4</div>
      </div>
      <div class="cm-col-md-1">
         <div>5</div>
      </div>
      <div class="cm-col-md-1">
         <div>6</div>
      </div>
      <div class="cm-col-md-1">
         <div>7</div>
      </div>
      <div class="cm-col-md-1">
         <div>8</div>
      </div>
      <div class="cm-col-md-1">
         <div>9</div>
      </div>
      <div class="cm-col-md-1">
         <div>10</div>
      </div>
      <div class="cm-col-md-1">
         <div>11</div>
      </div>
      <div class="cm-col-md-1">
         <div>12</div>
      </div>
   </div>
</div>
```

![CSS Mint Badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/grid.png)

<br/>

#### Header

Create badges by simply adding a class ``cm-header``.

Example - 

```html
header class="cm-header">
<div class="cm-logo cm-text-large">
   <a href="#">Logo</a>
</div>
<nav class="cm-nav">
   <ul>
      <li>
         <a href="#">Link 1</a>
      </li>
      <li>
         <a href="#">Link 1</a>
      </li>
   </ul>
</nav>
</header>

<header class="cm-header primary">
   <div class="cm-logo cm-text-large">
      <a href="#">Logo</a>
   </div>
   <nav class="cm-nav">
      <ul>
         <li>
            <a href="#">Link 1</a>
         </li>
         <li>
            <a href="#">Link 1</a>
         </li>
      </ul>
   </nav>
</header>

<header class="cm-header inverted">
   <div class="cm-logo cm-text-large">
      <a href="#">Logo</a>
   </div>
   <nav class="cm-nav">
      <ul>
         <li>
            <a href="#">Link 1</a>
         </li>
         <li>
            <a href="#">Link 1</a>
         </li>
      </ul>
   </nav>
</header>
```

![CSS Mint Badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/header.png)

<br/>

#### Input

Create badges by simply adding a class ``cm-button``.

Example - 

```html
<input class="cm-input" type="text" placeholder="Enter your name" />
<input class="cm-input" type="text" placeholder="I am disabled" disabled />
<input class="cm-input" type="password" placeholder="Enter your password" />
<input class="cm-input" type="email" placeholder="Enter your email" />
<input class="cm-input" type="number" placeholder="Enter your phone no." />
<input class="cm-input" type="search" placeholder="Search..." />
<input class="cm-input" type="url" placeholder="Enter your website" />
<div class="cm-file-input">
   <div class="file-input-label">Upload a file</div>
   <input type="file" />
</div>
<div class="cm-select-input">
   <select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
   </select>
</div>
<br/>
<textarea class="cm-textarea"></textarea>
<input type="radio" />
<input type="checkbox" />
```

![CSS Mint Badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/input.png)

<br/>

#### Pagination

Create badges by simply adding a class ``cm-pagination``.

Example - 

```html
<ul class="cm-pagination">
   <li class="prev">
      <a href="#">Prev</a>
   </li>
   <li>
      <a href="#">1</a>
   </li>
   <li class="active">
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
   <li class="next">
      <a href="#">Next</a>
   </li>
</ul>
```

![CSS Mint Badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/pagination.png)

<br/>

#### Swatches

Create badges by simply adding a class ``cm-pagination``.

![CSS Mint Badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/swatches.png)

<br/>

#### Table

Create badges by simply adding a class ``cm-table``.

Example - 

```html
<table>
   <thead>
      <tr>
         <th>S.no.</th>
         <th>Name</th>
         <th>User Id</th>
         <th>Status</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>1</td>
         <td>Alice</td>
         <td>453</td>
         <td>Active</td>
      </tr>
      <tr>
         <td>2</td>
         <td>Bob</td>
         <td>222</td>
         <td>Inactive</td>
      </tr>
      <tr>
         <td>3</td>
         <td>Sam</td>
         <td>643</td>
         <td>Inactive</td>
      </tr>
   </tbody>
</table>
<table class="primary">
   <thead>
      <tr>
         <th>S.no.</th>
         <th>Name</th>
         <th>User Id</th>
         <th>Status</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>1</td>
         <td>Alice</td>
         <td>453</td>
         <td>Active</td>
      </tr>
      <tr>
         <td>2</td>
         <td>Bob</td>
         <td>222</td>
         <td>Inactive</td>
      </tr>
      <tr>
         <td>3</td>
         <td>Sam</td>
         <td>643</td>
         <td>Inactive</td>
      </tr>
   </tbody>
</table>
```

![CSS Mint Badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/table.png)

<br/>

#### Thumbnail

Create badges by simply adding a class ``cm-thumbnail``.

Example - 

```html
<div class="cm-thumbnail">
   <img src="img/tech.jpg" />
   <div class="cm-thumbnail-title">This is the title</div>
</div>
```

![CSS Mint Badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/thumbnail.png)

<br/>

#### Typography

Create badges by simply adding a class ``cm-thumbnail``.

Example - 

```html
<div class="cm-text-primary">Primary Text</div>
<div class="cm-text-success">Success Text</div>
<div class="cm-text-warning">Warning Text</div>
<div class="cm-text-error">Error Text</div>
<div class="cm-text-left">Left Text</div>
<div class="cm-text-center">Center Text</div>
<div class="cm-text-right">Right Text</div>
<div class="cm-text-justify">
   Justified text Justified text Justified text Justified text Justified text Justified text Justified text Justified text Justified
   text Justified text Justified text Justified text Justified text Justified text Justified text
   Justified text Justified text Justified text Justified text Justified text Justified text Justified
   text
</div>
<div class="cm-text-large">Large Text</div>
<div class="cm-text-small">Small Text</div>
<div class="cm-text-bold">Bold Text</div>
<div class="cm-text-medium">Medium Text</div>
<div class="cm-text-light">Light Text</div>
<div class="cm-text-uppercase">Uppercase Text</div>
<div class="cm-text-lowercase">Lowercase Text</div>
<div class="cm-text-capitalize">Capitalized Text</div>
```

![CSS Mint Badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/V2/demo/screenshots/typography.png)

<br/>

#### Utilities

Create badges by simply adding a class ``cm-thumbnail``.

```html
<img src="path_to_image" class="cm-resp-img"/>
```

Create badges by simply adding a class ``cm-thumbnail``.

```html
<div class="cm-hide">
    This is to be hidden
</div>

<br/>

## License

MIT Licensed

Copyright (c) 2015 Arun Michael Dsouza (amdsouza92@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.






























