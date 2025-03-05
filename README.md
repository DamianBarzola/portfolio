# Portfolio

## Description

This is a single-page portfolio built with Astro. It provides various features such as navigation, theme switching, language switching, and dynamic content updates based on JSON files. The project is designed to be customizable and can be used by anyone who modifies the provided JSON data.

## Features

- Navigation menu to jump between sections
- Language switching (supports editing `es.json` and `en.json` in `i18n` folder)
- Dark/Light theme toggle
- Display social media links
- Content dynamically updates based on JSON files

## Project Structure

```
portfolio/
│-- assets/       # Static assets (images, icons, etc.)
│-- components/   # Reusable UI components
│-- i18n/         # Localization JSON files (es.json, en.json)
│-- layouts/      # Page layout templates
│-- pages/        # Main application pages
```

## Installation & Usage

### Prerequisites

- Node.js installed

### Install dependencies

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Preview

```sh
npm run preview
```

## Customization

To modify the content, update the `es.json` and `en.json` files in the `i18n` folder. The application will reflect the changes dynamically.

## License

This project is open-source. Feel free to modify and use it as needed.
