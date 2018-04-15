<img src="https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/img/logo_v2.png" width="140" height="auto" alt="CSS mint icon"/>

CSS-Mint [![npm version](https://badge.fury.io/js/css-mint.svg)](https://badge.fury.io/js/css-mint) [![NPM Downloads](https://img.shields.io/npm/dm/css-mint.svg?style=flat-square)](https://www.npmjs.com/package/css-mint) [![Latest Stable Version](https://img.shields.io/bower/v/CSS-Mint.svg?style=flat-square)](http://bower.io/search/?q=CSS-Mint) [![](https://data.jsdelivr.com/v1/package/npm/css-mint/badge?style=rounded)](https://www.jsdelivr.com/package/npm/css-mint)
========
> Add some "Mint" to your web pages


CSS Mint is a lightweight and fully-responsive open source UI kit built to ease up layout and structuring of your web application. Built on top of normalize.css, it handles cross browser inconsistencies and provides minimalistic CSS components to be used in your application.

<br/>

## CDN sponsor

<a href="https://www.keycdn.com/"><img src="https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/img/keycdn-logo.png" width="220" height="auto" alt="KeyCDN icon"/></a>

<br/>

## Installation

#### CDN 

Key CDN

```html
https://cdn.jsdelivr.net/npm/css-mint@2.0.2/build/css-mint.min.css
```

JSdelivr CDN

```html
https://cdn.jsdelivr.net/npm/css-mint@2.0.2/build/css-mint.min.css
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

All component classes have a ``cm-*`` prefix.

#### Alert

Create alert messages by adding a ``cm-alert`` class with any of the optional styling classes - ``primary``, ``success``, ``warning`` or ``error``.

Example - 

```html
<div class="cm-alert">Default alert</div>
<div class="cm-alert primary">Primary alert</div>
<div class="cm-alert success">Success alert</div>
<div class="cm-alert warning">Warning alert</div>
<div class="cm-alert error">Error alert</div>
```

![CSS mint alert](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/alert.png)

<br/>

#### Badge

Create badges by simply adding a ``cm-badge`` class with any of the optional styling classes. Add a ``rounded`` class to have a circular badge.

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

![CSS mint badge](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/badge.png)

<br/>

#### Breadcrumb

Use the ``cm-breadcrumb`` class to create a breadcrumb component out of a ``ul`` or ``ol`` element with the specified list items.

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

![CSS mint breadcrumb](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/breadcrumb.png)

<br/>

#### Button

Create solid buttons using the ``cm-button`` class with any of the optional styling classes. Alternatively you can create line buttons with the additional ``line`` class.

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

![CSS mint button](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/button.png)

<br/>

#### Card

Create lifted card components with the ``cm-card`` class. You can optionally add a dedicated ``header``, ``body`` and ``footer`` to the card using the ``cm-card-header``, ``cm-card-body`` and ``cm-card-footer`` classes.

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

![CSS mint card](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/card.png)

<br/>

#### Grid system

CSS mint comes with a standard ``12`` column responsive grid. A grid container can have multiple rows and these rows can have multiple columns. Create a grid container using the ``cm-grid`` class and use the ``cm-row`` and ``cm-col-*`` classes to create your responsive layout. 

* All rows and columns must be placed within the grid container, and within the grid row only should the grid columns be placed. The content is placed within these columns.
* Columns have a default left/right padding (gutter) of ``15px``.
* Columns can be created by specifying the number of any of the ``12`` available columns (from 1-12). Eg - Two equal columns can be created using two ``cm-col-xs-6`` classes. 
* Grid columns can also have an offset, specifying which, adds a ``margin-left`` to the targeted column. Eg - ``cm-col-xs-offset-3`` applies a ``margin-left`` of ``100 / 4 = 25%`` to the column, as total grid columns of ``12`` can have ``12 / 3 = 4`` columns of the specified class and width of each of these columns can be ``100 / 4 = 25%``, which is the applied margin.
* The grid system provides media query powered breakpoints for various screen sizes. These breakpoints can be used with the grid columns for creating desired responsive layouts. 

<img alt="CSS mint grid breakpoints" src="https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/img/grid-breakpoints.png" width="550px"/>

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

![CSS mint grid](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/grid.png)

<br/>

#### Header

Create a header component with the ``cm-header`` class. Optionally you can add a ``primary`` or ``inverted`` class to have a thematic header. To make a header fixed to the top, add a ``fixed`` class.

The header component comes with an additional ``logo`` and a ``nav`` component. The logo component can be used to place a left aligned logo in the header using the ``cm-logo`` class. A right aligned nav bar component can be placed in the header using the ``cm-nav`` class. 

Example - 

```html
<header class="cm-header">
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

![CSS mint header](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/header.png)

<br/>

#### Input

CSS mint has standard styling for input elements. It also comes with optional component wrappers for file upload using the ``cm-file-input`` class and select box using the ``cm-select-input`` class.

Example - 

```html
<input type="text" placeholder="Enter your name" />
<input type="text" placeholder="I am disabled" disabled />
<input type="password" placeholder="Enter your password" />
<input type="email" placeholder="Enter your email" />
<input type="number" placeholder="Enter your phone no." />
<input type="search" placeholder="Search..." />
<input type="url" placeholder="Enter your website" />
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
<textarea></textarea>
<input type="radio" />
<input type="checkbox" />
```

![CSS mint input](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/input.png)

<br/>

#### Pagination

Add a ``cm-pagination`` class to a ``ul`` or ``ol`` to create a pagination component.

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

![CSS mint pagination](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/pagination.png)

<br/>

#### Swatches

![CSS mint swatches](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/swatches.png)

<br/>

#### Table

CSS mint comes with standard styling for tables. Optionally you can add a ``primary`` class to have a thematic table.

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

![CSS mint table](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/table.png)

<br/>

#### Thumbnail

Use the ``cm-thumbnail`` and ``cm-thumbnail-title`` classes to create a thumbnail component.

Example - 

```html
<div class="cm-thumbnail">
   <img src="img/tech.jpg" />
   <div class="cm-thumbnail-title">This is the title</div>
</div>
```

![CSS mint thumbnail](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/thumbnail.png)

<br/>

#### Typography

CSS mint comes with different typographic classes available for textual styling.

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

![CSS mint typography](https://github.com/ArunMichaelDsouza/CSS-Mint/raw/master/demo/screenshots/typography.png)

<br/>

#### Utilities

Make any image responsive using the ``cm-resp-img`` class.

```html
<img src="path_to_image" class="cm-resp-img"/>
```

Hide any element using the ``cm-hide`` class.

```html
<div class="cm-hide">
    This is to be hidden
</div>
```

<br/>

## License

MIT Licensed

Copyright (c) 2015 Arun Michael Dsouza (amdsouza92@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.






























