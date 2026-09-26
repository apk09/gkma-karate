# GKMA Karate Website

<p align="center">
  <img src="./assets/images/gkma_association_logo.png" alt="GKMA logo" width="180" />
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
</p>

Official website for the Goju-Ryu Karate-Do Martial Arts Association (G.K.M.A), founded in 1996 by Shihan Prem N. Khadka. The project is a responsive static website built to promote the association, showcase its instructors and members, document major events, and highlight training and championship updates.

## About GKMA

GKMA is a Goju-Ryu karate organization focused on:

- preserving and promoting traditional Goju-Ryu karate
- organizing seminars, training camps, and championships
- supporting dojo instructors and affiliated members
- creating a strong platform for karate development across regions

The website acts as the public-facing digital presence of the association and highlights its leadership, academy reputation, and community achievements.

## Pages Included

- Home: organization overview, hero image, gallery, championship highlight, and partner affiliations
- News: announcements, training updates, championship results, and historical achievements
- Events: upcoming and recurring association events
- Members: executive committee and leadership profiles
- Dojo Instructors: regional and national instructor listings
- Black Belts: black belt holders with dan rankings

## Features

- responsive and mobile-friendly layout
- reusable footer and contact modal
- gallery and media sections
- dynamically rendered content from JavaScript arrays
- clean organization pages for members, black belts, and instructors
- lightweight static front-end with no server-side dependencies

## Tech Stack

This project uses:

- HTML5
- CSS3
- JavaScript
- Bootstrap 4
- jQuery
- Mustache.js

## Project Structure

```text
.
├── index.html
├── news.html
├── events.html
├── members.html
├── dojo_instructors.html
├── black_belts.html
├── README.md
├── web.config
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── icons/
│   ├── images/
│   │   ├── background-image/
│   │   ├── black_belts/
│   │   ├── gallery/
│   │   ├── instructors/
│   │   ├── logo/
│   │   ├── members/
│   │   ├── news/
│   │   └── ...
│   ├── js/
│   │   ├── main.js
│   │   ├── news.js
│   │   ├── events.js
│   │   ├── members.js
│   │   ├── dojo_instructors.js
│   │   ├── black_belts.js
│   │   └── gallery.js
│   └── xls/
│       └── GKMA Medal List.numbers
└── ...
```

## Content Management

Most of the website content is managed through JavaScript data arrays such as:

- `assets/js/news.js`
- `assets/js/events.js`
- `assets/js/members.js`
- `assets/js/dojo_instructors.js`
- `assets/js/black_belts.js`

These arrays are rendered into the HTML templates using Mustache.js, making updates to members, ranks, or announcements straightforward.

## Running the Website Locally

Because this is a static website, you can view it in one of the following ways:

### Option 1: Open directly

Open `index.html` in a browser.

### Option 2: Run a local server

```bash
cd gkma-karate
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Contact

The site includes a contact modal with contact information for association representatives, including:

- Shankar C. Vishwakarma
- Kiran B. Khot
- gkma1996@gmail.com

## Notes

- This project is a static site intended for informational and promotional use.
- There is no backend, database, CMS, or authentication system.
- Images and media are stored locally in the `assets` folder.

## License

This repository does not currently include a formal license file. Before reusing or redistributing the content, branding, or photographs, please confirm that usage rights and ownership permissions have been cleared.

## Summary

GKMA Karate is a community and association website that showcases a Goju-Ryu martial arts organization through leadership profiles, championship history, member recognition, training updates, and event information. The project is designed to be easy to maintain, lightweight, and suitable for static hosting.
