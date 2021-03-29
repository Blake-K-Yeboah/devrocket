---
title: Ultimate Guide to Using Sass
description: "The one-stop guide to teach you everything you need to know about Sass."
image: sass-ultimate-guide.jpg
author: Blake Yeboah
authorImg: blake.png
authorBio: Blake is a full stack web developer who enjoys programming web applications. He has developed a strong passion for the software development industry over the years and love what I do.
tags: Sass SCSS Styling
writtenDate: 15/03/21
---

<img src="/post-images/sass-logo.png" alt="Sass Logo">

## What is Sass?

<br>

Sass is a CSS pre-processor that allows us to use various programming features like variables, loops and conditional statements in our CSS and then compile it to regular CSS. Sass is written in .sass files as well as .scss files depending on the syntax used (refer to Sass Syntax section). The browser can't read Sass so Sass must be compiled to regular CSS in order to be read by the browser. There are numerous ways to compile Sass discussed in the Compiling Sass section towards the end of this article.

<br>

## Your First Sass File

<br>

To get started with using sass, create a new file. You can call it whatever you want but make sure the file extension is either `.sass` or `.scss` depending on what type of syntax you wish to use (discussed below).

<br>

## Sass Syntax

<br>

Sass has two distinctly different syntaxes with their own pros and cons; these are the indented syntax (written in .sass files) and scss (written in .scss files). The indented syntax, also known as the older syntax, removes the use of brackets and semicolons and instead uses indentation. The code below shows an example of scss syntax.

<br>

```scss
 .navigation  {
    height: 40px;
    width: 100vw;
    background: #f1f1f1;

    .brand {
        color: #000;
        font-size: 2rem;
        margin-left:10vw;
    }
 }
```

<br>

Looks very similar to CSS however Sass has many additional, useful features.

<br>

## Sass Features

<br>

- Variables
- Partials
- Mixins
- Nesting and more

<br>

These 4 are the most commonly used features so they will be the ones covered in this article. Let's start with variables.

<br>

### Variables

<br>

Variables store values under the variable name and allow it to be reused across the stylesheet so if the variable's value is changed, all occursions of the variable are also changed. To define a variable the dollar sign ($) must be placed before the name. For example, to define a variable named 'mainColor' with the value of '#2583e8', the following statement would be used:

<br>

```scss
 // Variable
 $mainColor: #2583e8;
```

<br>

<blockquote>
    Note: You can use `//` to define comments in Sass as opposed to CSS's `/* */` regular comment syntax.
</blockquote>

<br>

The variable's value can equal any value CSS value; from hexadecimal values to pixel margins. To use the value, you simply enter the name with the dollar sign ($) in front in place of the property value. For example, to set the color of all h1s to mainColor, the following code could be used.

<br>

```scss
 // Variable
 $mainColor: #2583e8;

 h1 {
     color: $mainColor;
 }
```

<br>

<blockquote>
    Note: This is scss syntax but the same concept applies in the indented syntax.
</blockquote>

<br>

### Partials

<br>

Partials are separate Sass files that can be imported that allow you to easily separate your various styles. To make a file a partial, it must start with an underscore ( _ ). The generic form of a partial is:

<br>

`_filename.scss` or `_filename.sass`

<br>

To import the partial into your main stylesheet, the @import statement can be used. For example, the following code would be used to import a partial called buttons.

<br>

```scss
 @import 'buttons';
```

<br>

<blockquote>
    Note: You don't need to include the underscore or file extension when importing a partial.
</blockquote>

<br>

### Mixins

<br>

Mixins allow you to define a set of styles that can be re-used throughout the sass stylesheet. To create a mixin, you simple use the `@mixin` keyword as well as the name of the mixin. For example, the following code would be used to define a mixin called `slow-transition`.

<br>

```scss
 @mixin slow-transition {
     transition: 2s ease-in-out;
 }
```

<br>

This mixin can then be used anywhere in the stylesheet using the `@include` statement, as shown below.

<br>

```scss
 @mixin slow-transition {
    transition: 2s ease-in-out;
 }

 div {
    @include slow-transition;
 }

 .another-element {
     @include slow-transition;
 }
```

<br>

Additionally, you can add arguments to your mixins which makes them extremely useful in certain scenarios. For instance, we could add a property argument to the `slow-transition` mixin which would add that property to the transition.

<br>

```scss
 @mixin slow-transition($property) {
    transition: $property 2s ease-in-out;
 }
```

<br>

And then when including the mixin, you simply pass in the argument.

<br>

```scss
 @mixin slow-transition($property) {
    transition: $property 2s ease-in-out;
 }

 div {
    @include slow-transition(background);
 }
```

<br>

You can include as many arguments as you need and you can also set default values for arguments if they are passed in. To set default values, simple add `= value` to the end of the argument when defining the mixin.

<br>

<blockquote>
    Hint: Make sure to change value to whatever value you want.
</blockquote>

<br>

### Nesting

<br>

Sass allows you to nest css selectors in a way that gives your styling visual hierachy similr to HTML. This has the added benefit of organizing your CSS and making it more readable. For instance, the following code is simple styling of a navigation bar in CSS.

<br>

```css
 nav {
     height:40px;
     width:100vw;
     background:#f1f1f1;
 }

 nav ul {
     display:flex;
     list-style:none;
     margin-left: 10vw;
 }

 nav li {
     margin: 0 10px;
 }

 nav a {
     color: darkgrey;
     text-decoration:none;
 }
```

<br>

In SCSS, this can be written as the code below.

<br>

```scss
 nav {
     height:40px;
     width:100vw;
     background:#f1f1f1;

    ul {
        display:flex;
        list-style:none;
        margin-left: 10vw;
    }

    li {
        margin: 0 10px;
    }

    a {
        color: darkgrey;
        text-decoration:none;
    }

 }
```

<br>

You could even nest elements like the list item further however be careful how nested elements are. Overly nested rules result in over-qualified CSS that is harder to maintain and is considered by many as a bad practice.

<br>

## Compiling

<br>

Now that we have discussed various features of Sass, we can now talk about how to compile sass so it can be read by the browser. The reason why it needs to be compiled is because browsers can only read regular CSS and not sass.

<br>

### Text Editor Extensions

<br>

The easiest way to compile your sass is by using an extension for your text editor. Visual Studio Code has an extension called Live Sass Compiler that allows you to compile sass automatically and easily. You can download the extension from [here](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass).

<br>

To actually compile sass with the extension installed, click the `Watch Sass` button in the bottom right of your screen. This will then watch sass files openned in your text editor so that when one is saved, it automatically compiles it into a regular css file of the same name.

<br>

There are also other ways to compile sass. For instance, NPM packages such as [node-sass](https://www.npmjs.com/package/node-sass) can be used however the text editor extension is usually the easier option. If you are using a library such as React or a framework like Vue.js, using the NPM package would be the more logical choice since these frameworks have built in support for them.

<br>

## What Have You Learned

<br>

Today, you've learned the most useful features of sass, how to compile it and whats the point of using it in the first place. I hope you beign using Sass in your projects and are pleased with the result.

<br>

As always, thanks for reading and keep on coding!