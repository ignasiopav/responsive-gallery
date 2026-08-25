# Responsive Gallery

A responsive image gallery built with pure HTML, CSS and JavaScript.

The project was created as a frontend learning task focused on CSS layout, responsive design and JavaScript array methods.

## Features

- Responsive CSS Grid gallery
- Category filtering
- Dynamic gallery rendering
- Load More functionality
- Randomized image order
- Real images loaded from LoremFlickr
- Responsive layout for desktop, tablet and mobile
- Hover effects and transitions
- CSS custom properties
- Separate CSS files by responsibility

## Categories

The gallery contains the following categories:

- All
- Nature
- City
- Animals
- Architecture

## How It Works

Images are represented as JavaScript objects:

```js
{
    id: "...",
    category: "animals",
    title: "Animals photo",
    image: "https://..."
}