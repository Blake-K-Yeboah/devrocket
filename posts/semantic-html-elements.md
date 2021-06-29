---
title: Semantic HTML Elements
description: "Learn how to use the various semantic HTML elements that will improve your code."
image: semantic-html-elements.jpg
author: Blake Yeboah
authorImg: blake.png
authorBio: Blake is a full stack web developer who enjoys programming web applications. He has developed a strong passion for the software development industry over the years and loves what he does.
tags: HTML Intermediate
writtenDate: 1/04/21
---

## What Are Semantic HTML Elements?

<br>

Semantic HTMl elements are elements that clearly describe their meaning to both the browser and the developer. Some examples include: `<form>`, `<table>` and `<nav>`.

<br>

## Replacing Divs

<br>

When building front end websites with HTMl, you will often find yourself using divs with classes like nav, header and footer to indiciate navigations, headers and footers. However in HTML5, you can use semantic elements that define different parts of the web page. The following is a list of the most commonly used semantic elements in HTML that you can start using:

<br>

-  `<article>`
-  `<section>`
-  `<nav>`
-  `<footer>`
-  `<aside>`
-  `<header>`

<br>

### The `<article>` Element

<br>

The `<article>` element specifies independent, self-contained content. An article should be completely understandable on its own even if the rest of the content present on the website was not there. An `<article>` element could be used for a variety of content including blog posts, newspaper articles and forum posts. For example, the following code could be used to display an article.

<br>

```html
<article>Independent content that should be readable on its own</article>
```

<br>

### The `<section>` Element

<br>

As the name suggests, the `<section>` element defines a section in a document. There are many possible sections on web pages. For instance, contact information could be put into its own section. As an example, the following code could be used to display a section of a document.

<br>

```html
<section>
   <h1>Contact Us</h1>
   <p>Phone: 0000-000-000</p>
   <p>Email: hello@ourcompany.com</p>
</section>
```

<br>

<blockquote>
 Note: Sections and articles are very similar and you can nest articles in sections and vice-versa.
</blockquote>

<br>

### The `<nav>` Element

<br>

The navigation element (`<nav>`) specifies a set of navigation links. For example, the following code displays a very simply navigation bar.

<br>

```html
  <nav>
   <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
   <ul>
  </nav>
```

<br>

<blockquote>
 Note: The <code>&lt;nav&gt;</code> element should only be used for major block of navigation links and not all links within a document.
</blockquote>

<br>

### The `<footer>` Element

<br>

The `<footer>` element defines a footer section in a document. Footers are usually placed at the bottom of websites and typically contain information like copyright information and back to top links. The following code is a very simple footer to demonstrate its use.

<br>

```html
<footer>
   <p>Copyright 2021. Blake Y</p>
   <p><a href="mailto:contact@blakeyeboah.com">contact@blakeyeboah.com</a></p>
</footer>
```

<br>

### The `<aside>` Element

<br>

The `<aside>` element defines content aside from the content it is placed in. For example, the `<aside>` could be used for a sidebar since it doesn't directly relate to its surrounding content. The following code would be used to display a simple sidebar.

<br>

```html
<aside>
   <h3>Sidebar</h3>
   <p>This is my sidebar</p>
</aside>
```

<br>

### The `<header>` Element

<br>

The `<header>` element signifies a container for introductory content. For example, you could place a navigation bar within a header. Interestingly, you can have multiple headers within a document however, `<header>` can't be places within a `<footer>`, a `<address>` or another `<header>`. As an example, the following code displays a simple navigation bar within a header.

<br>

```html
 <header>
  <nav>
   <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
   <ul>
  </nav>
 </header>
```

<br>

There are more semantic elements out there that you can look into after reading this article. I hope you apply the knowledge you've learnt to your current and future projects. As always, thanks for reading and keep on coding!
