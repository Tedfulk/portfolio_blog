# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components](#components)
    - [Page](#page)
    - [Layout](#layout)
    - [HexBackground](#hexbackground)
    - [Hexagon](#hexagon)
    - [ChatBox](#chatbox)
    - [Carousel](#carousel)
    - [DownloadAction](#downloadaction)
  - [Styling](#styling)

## Introduction

This project is a Svelte-based portfolio application designed to showcase projects and skills in a visually appealing manner. It includes several custom components like a chatbox, carousel, and interactive hexagon background.

## Installation

To install the project, you need to have Node.js installed on your system. Clone the repository and install the dependencies:

\`\`\`bash
git clone [repository-url]
cd [repository-name]
npm install
\`\`\`

To run the project locally, execute:

\`\`\`bash
npm run dev --open
\`\`\`

## Usage

After installation, you can start the development server and begin integrating the components into your own project or modify them as needed.

## Components

### Page

The \`+page.svelte\` file imports the main components of the project and includes the particles configuration for the background effect.

### Layout

The \`+layout.svelte\` file structures the main layout of the portfolio page, defining sections like the header, main content, and footer.

### HexBackground

The \`HexBackground.svelte\` component creates a dynamic hexagon pattern in the background of the page.

### Hexagon

The \`Hexagon.svelte\` component is used within the HexBackground to render individual hexagons.

### ChatBox

The \`ChatBox.svelte\` component provides a chat interface for visitors to leave messages or get in contact.

### Carousel

The \`Carousel.svelte\` component is used to showcase featured projects or skills in a sliding carousel format.

### DownloadAction

The \`DownloadAction.svelte\` component likely allows users to download content, such as a resume or project files.

## Styling

Custom styling is applied through style tags within the components, with the possibility of animations and media queries for responsiveness.
