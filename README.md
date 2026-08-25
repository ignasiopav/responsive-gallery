# Responsive Gallery

A responsive image gallery built with pure HTML, CSS and JavaScript.

The project was created as a frontend learning task focused on CSS layout, responsive design and JavaScript logic.

## Features

- Responsive CSS Grid gallery
- Category filtering
- Dynamic gallery rendering
- Load More functionality
- Randomized image order
- Real images loaded from LoremFlickr
- Responsive layout for desktop, tablet and mobile
- Hover effects and CSS transitions
- CSS custom properties
- Separate CSS files by responsibility

## Categories

The gallery contains five categories:

- All
- Nature
- City
- Animals
- Architecture

## Gallery Behaviour

### All

The `All` category initially displays 10 images.

Clicking `Load more` adds 10 additional images.

Images are randomly distributed between categories.

### Category filters

Each category initially displays 6 images.

Clicking `Load more` adds 6 additional images from the selected category.

## Project Structure

```text
responsive-gallery/
│
├── index.html
│
├── css/
│   ├── main.css
│   ├── header.css
│   ├── filters.css
│   ├── gallery.css
│   └── responsive.css
│
├── js/
│   └── app.js
│
└── README.md