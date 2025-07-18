# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog and website for Peter Lindberg (TSGNEU), built with Eleventy (11ty) static site generator and Tailwind CSS. The site serves as a personal homepage and blog platform.

## Development Commands

- `npm run dev` - Start development server with live reload and CSS watching
- `npm run build` - Build the site for production (compiles Tailwind CSS and generates static files)

## Architecture

**Static Site Generator**: Eleventy (11ty) with Nunjucks templating
**CSS Framework**: Tailwind CSS v4
**Build Process**: Concurrent compilation of Tailwind CSS and Eleventy site generation

### Key Directories

- `_data/` - Site configuration and global data
- `_includes/` - Nunjucks templates and layouts
- `_site/` - Generated static site output (build target)
- `posts/` - Blog posts organized by year/month structure
- `posts/posts.json` - Collection configuration for blog posts

### Template Structure

- `_includes/layout.njk` - Base HTML layout with meta tags, navigation, and styling
- `_includes/post.njk` - Blog post template
- `_includes/partials/post.njk` - Post partial for listings

### Content Management

- Blog posts use front matter for metadata (title, layout, etc.)
- Posts are automatically organized by date-based permalinks
- Site data configured in `_data/site.json`

### Styling

- Tailwind CSS v4 with dark mode support
- Input file: `input.css`
- Output file: `_site/style.css`
- Responsive design with mobile-first approach