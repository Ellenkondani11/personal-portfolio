# Ellen Kondani: Personal Portfolio Website

## 1. Project Overview and Background

This project represents the design and development of an interactive personal portfolio website for Ellen Kondani, a Computer Science student at DMI: St. John the Baptist University in Mangochi, Malawi. 

The website establishes a professional online identity to showcase academic competencies, practical programming accomplishments, and multimedia design proficiency to potential employers, research collaborators, and internship providers.

The visual design and user flow draw inspiration from high craft modern interfaces such as LegacyBridge, employing a focused colour palette:
* Deep forest ink (#082a1c)
* Luminous spring lime (#cdff8c)
* Clean slate surfaces (#ffffff, #f4f7f9)
* Distinct typographic hierarchy using system sans-serif typefaces

All styling is managed through pure external CSS and interactive JavaScript, avoiding prepackaged templates or third party UI frameworks.

## 2. Technical Stack and Implementation

* Markup: HTML5 semantic architecture (header, nav, main, section, div, footer, tables, lists, text formatting)
* Styling: External CSS3 (custom properties, Flexbox, CSS Grid, keyframe animations, transitions, media queries)
* Interactivity: Pure Vanilla JavaScript (Document Object Model manipulation, IntersectionObserver API, recursive character timers)
* Assets: Optimised JPEG and PNG graphics, vector SVG icons

## 3. Website Structure and Page Guide

The website is organised into four comprehensive sections, accessible through responsive navigation menus across all pages:

### 3.1 Home Page (index.html)
* Prominently displays the full name: Ellen Kondani
* Welcome introduction communicating background in public systems and computer science
* Integrated portrait photograph with glowing ambient backdrop and floating credential badges
* Academic programme: Bachelor of Science in Computer Science at DMI: St. John the Baptist University
* Professional interests: Software Engineering, Database Systems, Computer Networking, and Multimedia Design
* Prominent call to action buttons: View My Projects, About My Journey, and Animated Concepts
* Interactive typing text animation cycling through professional roles

### 3.2 About Me Page (about.html)
* Personal Introduction detailing technological passion and civic software focus
* Educational Background Table presenting qualifications, institutions, programmes, and dates
* Technical Skills presented via unordered lists with competency badges
* Career Aspirations presented via ordered lists outlining goals for African civic technology
* Personal interests and activities outside academic studies
* Direct clickable email hyperlink using the HTML mailto format: hello@ellenkondani.com and multimediaassignment10@gmail.com

### 3.3 Projects Page (projects.html)
Showcases three completed practical programming and multimedia engineering systems:
1. Elle Agri Tech Links (EATL) Corporate Visual Identity and Brand System (First Line of Sight)
   Developed for the Multimedia Tools and Applications course. Connects smallholder farmers and agribusinesses to smart agriculture, precision irrigation, and digital farm records through a complete Canva brand suite (logos, billboard, business cards, vehicle branding, A3 poster). Features a clickable image linking to the full PDF documentation.
2. Inventory Management System
   Relational database web platform built using Python, Django, PostgreSQL, and Chart.js, replacing paper ledgers with an append only transaction history and automated reorder triggers.
3. High Reliability UDP File Sharing Application
   Peer to peer socket transport protocol engineered in Python over raw UDP sockets, featuring sequence numbering, sliding window flow control, and SHA 256 cryptographic verification.

### 3.4 Animated Concepts Page (animations.html)
Demonstrates five distinct animation and interactive concepts:
* Concept A: Animated Text (character sequencing typing effect with variable speeds)
* Concept B: Hover Micro Interactions (elevation lift, border glow, icon gyration)
* Concept C: Animated Ambient Background (continuous keyframe floating gradient orbs)
* Concept D: Animated Skill Indicators (percentage counters and expanding progress tracks)
* Concept E: Viewport Scroll Reveals (IntersectionObserver fade in and upward translation)

## 4. File and Folder Organisation

The project follows standard conventions for static web publishing:

PersonalPortfolio/
* index.html (Main landing and comprehensive showcase)
* about.html (Dedicated educational background and skills deep dive)
* projects.html (Detailed projects register featuring EATL at first line of sight)
* animations.html (Interactive animated concepts playground)
* eatl-multimedia-assignment.pdf (Complete EATL multimedia design portfolio document)
* css/
  * style.css (Unified external stylesheet)
* js/
  * script.js (Interactive animation and navigation logic)
* images/
  * profile.jpg (Full portrait photograph)
  * profile-square.jpg (Square profile image)
  * background.jpg (Geometric ambient backdrop texture)
  * project1.jpg (EATL primary showcase banner)
  * project1-billboard.png (EATL billboard design)
  * project1-poster.png (EATL promotional poster)
  * project1-logo.png (EATL colour logo)
  * project1-card.png (EATL business card suite)
  * project2.jpg (Inventory Management dashboard screenshot)
  * project3.jpg (UDP File Sharing terminal screenshot)
* screenshots/
  * home-section.png (Screenshot preview of Home page)
  * about-section.png (Screenshot preview of About page)
  * projects-section.png (Screenshot preview of Projects page)
  * animations-section.png (Screenshot preview of Animated Concepts page)
* README.md (Assignment documentation)

## 5. GitHub Pages Deployment Steps

1. Initialise a local git repository inside the project directory:
   git init
2. Add all project files:
   git add .
3. Commit the verified files:
   git commit -m "Initial portfolio release for Multimedia Assignment 2"
4. Create a new repository on GitHub named personal-portfolio under the ellenkondani account.
5. Link the remote origin and push the main branch:
   git remote add origin https://github.com/Ellenkondani11/personal-portfolio.git
   git branch -M main
   git push -u origin main
6. Open repository Settings on GitHub, navigate to Pages in the left sidebar.
7. Under Build and deployment, set Source to Deploy from a branch, select main branch, and root folder (/), then click Save.
8. The portfolio will be published live at https://Ellenkondani11.github.io/personal-portfolio/

