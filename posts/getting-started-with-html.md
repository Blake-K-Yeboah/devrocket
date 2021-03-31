---
title: Getting Started With HTML
description: "Get started with html and learn the fundamentals to start building your own websites."
image: getting-started-with-html.jpg
author: Blake Yeboah
authorImg: blake.png
authorBio: Blake is a full stack web developer who enjoys programming web applications. He has developed a strong passion for the software development industry over the years and love what I do.
tags: HTML Beginner
writtenDate: 09/03/21
---

<img src="/post-images/html-logo.png" alt="Html Logo">

## What is HTML?

<br>

HTML, Hypertext Markup Language, is a markup language designed to display content on websites. It is the basic building block of every website that exists today. Despite what framework or server-side language used, the content of the user interface of a website boils down to HTML.

<br>

## Text Editors

<br>

While HTML can be written in a program as basic as notepad, I recommend using a full-fledged text editor. Proper text editors provide code highlighting as well as auto-complete that will significantly increase your efficiency in writing HTML and code in general. Some popular text editors include:

<br>

- **Visual Studio Code**
- Sublime Text
- Atom
- Notepad++
  
<br>

Visual Studio Code is bolded as its the one I would recommend.

It fully up to you what text editor you want to use. Whether its Visual Studio Code or Notepad, make sure you're happy with it as you will be using it a lot.

<br>

## Browser

<br>

Obviously, you will need a web browser. In fact, you're probably using a web browser to view this article now. Computers with Windows installed, automatically come Microsoft Edge however, I would recommend using Google Chrome. Google Chrome, a web browser made by Google, is a great browser that is fast and has great developer tools. Some other popular browsers include:

<br>

- Firefox
- Safari (For Mac)
- Opera
- Brave

<br>

As long as your not using internet explorer, you will likely be fine and not run into any problems. Just make sure you are happy with your browser.

<br>

## Setting Up File Structure

<br>

Create a new folder on your desktop or wherever you want to store your website files; call it _first-website_ or anything you want. Inside of that folder, create a file called _index.html_ and open it in your desired text editor.

<br>

<blockquote>Tip: You may need to make file extensions visible in your operating system to make sure its a '.html' file.</blockquote>

<br>

## Understanding HTML Elements

<br>

Inside of a HTML document, there are various elements. For example, there might be a paragraph element which would show a paragraph on screen. The following code is an example of a paragraph element. We will be dissecting it to understand what each individual part means.

<br>

```html
 <p class="text">Here is my paragraph</p>
```

<br>

The 'p' is referred to as the tag. It defines what the element is which in this case is a paragraph. Content is placed between the opening tag (the first one) and the closing tag `</p>` . In this case, the content is 'Here is my paragraph'. There are a very large amount of elements in HTML; common ones are discussed in sections below the HTML Document Structure section. The `class="text"` part is what is called an attribute. Attributes provide special functionality to elements and in some cases modify default functionality. We won't cover many attributes in this article however in a google search you can discover many new and exciting attributes with cool functionality.

<br>

## HTML Document Structure

<br>

The basic structure of a html document is fairly simple. The first line is a 'doctype' declaration which declares the version of HTML the web page uses. After this declaration, there is a html element represented by the `<html>` tag that encompasses the body element as well as the head element.

<br>

### The Head Element

<br>

The head element usually holds metadata that the browser and search engines use. It is defined by the `<head>` tag. It is placed in the HTML element and before the `<body>` tag.

<br>

### The Body Element

<br>

The body element holds the actual content displayed on the website. It is defined by the `<body>` tag and is placed after the head tag.

<br>

The basic HTML document structure looks like this:

<br>

```html
 <!DOCTYPE html>
 <html>
   <head>
    <!-- Browser related info not shown to user -->
   </head>
   <body>
    <!-- Content of Website -->
   </body>
 </html>
```

<br>

<blockquote>
    Note: The  '&lt;!-- --&gt;'  is used to write comments in HTML.
</blockquote>

<br>

## Common HTML Elements

<br>

With the basic document structure out of the way, we can discuss common elements used in websites.

<br>

### Common Elements in the Head Tag

<br>

The title element is an element found is every website. It is defined by the `<title>` tag. The title of a page is shown in search engines as well as the tab at the top of the browser. To add a title, place the following tag inside the head element of your document.

<br>

```html
 <title>Your Title Goes Here</title>
```

<br>

Another tag used in every website is the meta tag. It provides meta data of various sorts based on its attributes. Two common example are:

<br>

- `<meta charset="UTF-8">` Specifies the character encoding for the HTML document
- `<meta name="viewport" content="width=device-width,initial-scale=1.0">` Specifies the viewport; used for making a website responsive

<br>

<blockquote>
 Note: The Meta tag doesn't have a closing tag; it is referred to as a self-closing tag.
</blockquote>

<br>

Some other examples of elements in the head tag are the `<link>` and `<style>`. The link tag has many uses including adding a favicon, connecting to stylesheets and more. A favicon is the little icon in the tab section of the browser (beside the title). Stylesheets are written in CSS and are used to style the content of the website. This article does not cover CSS however, we have a getting started with CSS article that will teach you everything you need to know. The `<style>` tag is used to write CSS in the HTML document itself. Don't worry about these tags for now, you will become familiar with them when you learn CSS.

<br>

### Common Elements in the Body Tag

<br>

Elements placed in the body tags are usually content that is shown to the user. Below are examples of the most commonly used tags. These include paragraphs, hyperlinks, lists, images, headings and forms. There are more elements out there however these main elements will go a long way.

<br>

#### Paragraphs

<br>

The tag that represents paragraphs in HTML is the `<p>` tag. You simply place whatever text you wish to put on your website between the opening tag (`<p>`) and the closing tag (`</p>`). For example, the code below would be used to display a paragraph with dummy text (Lorem Ipsum).

<br>

```html
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
 Cras lobortis magna eu vehicula pellentesque.</P>
```

<br>

<blockquote>
 Note: Lorem Ipsum is simply dummy text. You can learn more about it <a href="https://www.lipsum.com/">here</a>
</blockquote>

<br>

#### Hyperlinks

<br>

To add a hyperlink to your website, you can use the `<a>` tag. In between the opening and closing tags, you can place whatever text you wish to display to your user. The address that the link redirects to is stored in the `href` attribute. For instance, the code below will display a link saying Google that links to google.com.

<br>

```html
 <a href="https://www.google.com/">Google</a>
```

<br>

<blockquote>
 Tip: If you want the link to open in a completely new window, you can add the <code>target="_blank"</code> attribute to the a tag.
</blockquote>

<br>

#### Lists

<br>

There are two kinds of lists you can add to your website. These include unordered lists (the `<ul>` tag) and ordered lists (the `<ol>` tag). The difference is that the ordered list is used for lists in a specific order and have numbers starting from 1 displayed before each item. The unordered list, as the name suggests, is used for lists without an order. The code blocks below are used to display an unordered and ordered list respectively.

<br>

```html
 <ul>
  <li>Unordered List Item 1</li>
  <li>Unordered List Item 2</li>
  <li>Unordered List Item 3</li>
 </ul>
```

<br>

```html
 <ol>
  <li>Ordered List Item 1</li>
  <li>Ordered List Item 2</li>
  <li>Ordered List Item 3</li>
 </ol>
```

<br>

The `<li>` tag is used for each list item in the list. It can be used in both unordered and ordered lists.

<br>

#### Images

<br>

.

<br>

#### Headings

<br>

.

<br>

#### Forms

<br>

.

<br>

## Where to From Here?