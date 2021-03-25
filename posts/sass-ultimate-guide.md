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

