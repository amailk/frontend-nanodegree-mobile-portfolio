# **Web Optimization**

## **About**

This project was completed as part of the Front-End Nanodegree by Udacity.
[Gulp](http://gulpjs.com/) was utilized to minify javascript files and images and to inline css.

## **How to build the project**

I am using gulp to do the web optimization for the first part of the assignment. Use the following steps to build the optmized version. The optimized version can be found in build/ directory.

1. Install package dependencies via npm
```
$ npm install
```
2. Run gulp
```
$ gulp
```
3. The project is now available at `build/`

## Optimizations for index.html
All optimizations for this is done with Gulp.
1. Minimize the Javascript.
2. Minify the image assets.
3. Inline the CSS styles.

[Google page speed analysis](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Famailk.github.io%2Ffrontend-nanodegree-mobile-portfolio%2Fbuild%2F&tab=mobile)

## Optimizations for main.js

1. Reducing the time for pizza re-sizing.

- Each pizza's new size was calculated individually
  - Most of this is redundant since all the pizzas are of the same size. Now we calculate the new size once, and apply it to all the pizzas.
- Each time we want to access a pizza an individual query was run.
  - We only need to run the query once, we can store the result in an array.

2. Reducing the time it takes to render a frame when scrolling

This was taking a long time because we had 200 pizzas on the screen at any given time. However only a subset of these were visible on the screen.

Now we calculate how many pizzas we need on the screen based on the screen's width and height. This reduced number of pizzas make it faster to draw the frames after scrolling.
