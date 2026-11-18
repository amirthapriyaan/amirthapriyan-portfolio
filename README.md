# Amirthapriyan J. — Personal Portfolio

A responsive, single-page portfolio built with semantic HTML, CSS and vanilla JavaScript.

## Current design (V12 — final polish)

The portfolio uses a near-black default theme with purple as the primary accent. Two alternate palettes are included and can be switched from the navigation bar:

- **Dark Purple:** charcoal / near-black surfaces, white typography and violet accents.
- **Light:** cool white surfaces, dark slate typography and accessible purple accents.
- **Warm:** warm ivory surfaces, dark plum typography and muted plum accents.

The page uses a clean, unboxed About/Skills screen with separately highlighted content panels, followed by distinct framed sections with theme-aware shadows:

1. Hero and professional portrait placeholder
2. Profile highlights, About and Skills
3. Professional Journey timeline
4. Featured Projects
5. Things I Enjoy and Hobbies
6. Family
7. Contact
8. Footer

## Project structure

- `index.html` — all portfolio content and section structure.
- `css/theme.css` — variables-only design tokens for all three palettes, including typography, colour scheme, shadows and accents.
- `css/style.css` — layout, typography, cards, responsive behavior and dialogs.
- `js/main.js` — theme switching, mobile navigation, active navigation, journey expanders, scroll-to-top, hobby/project image viewers and project detail dialog.
- `images/` — local portfolio, project, journey and hobby images.
- `assets/Amirthapriyan-J-CV.pdf` — downloadable CV.
- `.github/workflows/` — GitHub Actions validation and GitHub Pages deployment.
- `scripts/validate-theme.js` — checks theme token references and prevents hard-coded colors in the component stylesheet.

## Run locally (Windows CMD)

Open Command Prompt in this project directory and run:

```cmd
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.

You can also open `index.html` directly, but a local server is recommended for testing all assets and browser interactions.

## Personalize before publishing

- **Portrait:** replace the `.hero-photo-placeholder` block in `index.html` with your final professional portrait. Keep the image inside `.hero-portrait-frame` and use a descriptive `alt` attribute.
- **CV:** replace `assets/Amirthapriyan-J-CV.pdf` with the final PDF, keeping the exact filename so the Download CV link continues to work.
- **Project previews:** replace the relevant images under `images/projects/` with your final screenshots.
- **Links and contact details:** verify your GitHub, LinkedIn, email and phone details in `index.html`.

The timeline CGPA is currently shown as 8.35/10 based on the latest portfolio profile context. Verify it against the final resume PDF before publishing.

## Deploy to GitHub Pages

1. Create a GitHub repository for the portfolio.
2. Copy the **contents of this `portfolio-website` folder** into the repository root. The `.github` folder must also be at the repository root.
3. Create a feature branch, commit your changes there, and open a pull request into `develop`. Promote `develop` to `main` through a pull request after checks pass.
4. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
5. Open the repository's **Actions** tab and confirm that `Deploy to GitHub Pages` completes successfully.
6. Open the published URL and test the navigation, all three themes, image dialogs and CV download.

The deployment workflow publishes the repository root. Do not upload the `portfolio-website` folder as a nested directory unless you also change the workflow's artifact path.

## Validation

From the project directory:

```cmd
node scripts/validate-theme.js
node --check js/main.js
```

The GitHub Actions validation workflow runs HTMLHint, CSSLint syntax validation, the theme token validator and the JavaScript syntax check.

## Important notes

- The site is static; it does not require a backend or environment variables.
- The theme preference is stored in the browser's local storage.
- External Google Fonts are loaded when an internet connection is available; system fallbacks are included.
- Replace placeholder images and confirm all personal information before publishing.

## V9 visual direction
The current presentation follows the supplied dark portfolio reference: near-black/charcoal is dominant, purple is the sole highlight accent, and section hierarchy is communicated through spacing, restrained surfaces, neutral borders and layered card shadows rather than bright separator lines. The Family section uses three locally stored illustrations for Mother, Father and Brother.

## V10 viewport and visual refinement
- Desktop navigation is designed around a 10svh header; each main section targets 80svh so its framed container reads as a complete screen.
- Reused the original transparent developer illustration at `images/hero/developer-avatar.png` in the hero.
- Unified icon sizing, stroke weights, accent color and icon surfaces across navigation, social links, profile highlights, skills and contact details.
- Replaced the profile highlight Unicode glyphs with consistent inline SVG line icons.
- Removed the bright accent stripe from the top of every section; section identity now comes from tonal surfaces, spacing, frame depth and shadows.
- Kept sections content-driven on smaller screens so long content is never clipped; the 80svh value is a minimum design target.

### V10 screen proportions
On desktop, the sticky navigation targets 10svh (with practical pixel bounds), while each framed main section targets a minimum height of 80svh. Content is allowed to extend beyond that minimum rather than being clipped. Tablet/mobile layouts use natural content height where necessary.

## V11 elevation and motion pass
- Reduced desktop framed section height to 80svh and tightened inter-section spacing so each section frame and its shadow remain visible below the 10svh navigation.
- Added coordinated IntersectionObserver reveal motion to timeline cards, project cards, skills, interests, family cards and contact details, plus active-section highlighting.
- Added a subtle animated active navigation indicator and theme-aware animated badge/chip treatments.
- Increased dark-theme section/card contrast using neutral edge tokens and stronger layered shadows.
- Replaced the low-resolution timeline and project previews with eight locally bundled, scalable SVG illustrations designed for this portfolio.
- Expanded journey descriptions and clarified the product purpose of AeroTrack, ShopZone, Aqua Paradise and Career Compass.
- Shortened the hero description and kept the existing developer illustration.
- Contact icons remain simple, transparent line icons without icon-holder boxes.

## V12 final polish
- Removed the redundant outer frame behind the About/Skills screen; its statistics, About and Skills panels remain individually framed and highlighted.
- Replaced journey visuals with dedicated local illustrations for Sri Krishna College of Technology, an ESP32 development board, Cognizant and Psiog.
- Moved the journey and project SVG assets into their assignment-required image folders.
- Replaced LinkedIn marks consistently across hero, contact and footer with a clean filled LinkedIn glyph.
- Increased contact typography and introduced section-specific font roles through the shared theme tokens.
- The Projects section is tuned for a 90svh desktop presentation and stacks naturally on mobile.
- Added accessible project detail dialogs covering overview, problem, solution, features, contribution and technology stack for all four projects.
- Project artwork is clearly a locally created UI mockup/preview; replace it with genuine product screenshots when those are available.
- Added the assignment's exact `#hero` anchor and an Explore My Journey call to action.

## Git and CI/CD process
See [GIT_WORKFLOW.md](GIT_WORKFLOW.md) for the required branch model, Pull Request process, branch protection, GitHub Pages setup, workflow responsibilities, Slack secret and one-file theme-change exercise.


## V12 final polish and release notes

- About + Skills no longer has a redundant parent frame; the stat, About and Skills panels retain their own card depth.
- Journey imagery is local and specific to Sri Krishna College of Technology, ESP32, Cognizant and Psiog.
- Projects include three clearly labelled, replaceable UI placeholder views per project in their expanded detail gallery. These are not real product screenshots; replace them before publication.
- Family includes a local illustrated banner and flip cards for Mother, Father and Brother.
- Personal Likings cards contain explicit headings and descriptions.
- Contact form performs client-side validation only. It does not send messages; use the visible email link unless a real form service is connected.
- The theme token file includes a section-scoped family accent palette for all three visual themes.

### Publication checklist

- Replace `assets/Amirthapriyan-J-CV.pdf` with the final resume.
- Replace `images/projects/<project>/*.svg` placeholder views with actual project screenshots.
- Add individual repository/demo URLs only after confirming the exact URLs.
- Configure GitHub Pages in repository settings and confirm the five Actions workflows run successfully.
- Configure the repository's required status check and branch protection; these cannot be completed from the ZIP.

## Requirement audit
See [PROJECT_AUDIT.md](PROJECT_AUDIT.md) for the requirement-by-requirement website and project-section audit, including items that still need real screenshots or repository links.



## V14 correction pass

- Removed the large visual wrapper from the top-level viewport sections. Inner About, Skills, Journey, Project, Interests, Hobbies, Family and Contact cards keep their own themed surfaces.
- Restored the previous static Family card layout and image-only Things I Enjoy / Hobbies galleries.
- Removed the added Things I Enjoy text overlays and descriptions; the section now displays only its image tiles.
- Simplified Let's Connect to the heading and one email icon linked with `mailto:`.
- Journey cards now reference real web photographs with local SVG fallbacks. See `IMAGE_CREDITS.md`; the Psiog source is an official company-brand/workplace image, not a campus exterior.
- Added theme-specific heading colour tokens and subtle accent-line / inner-card highlight treatments.



## V15 Family and Contact restoration

The Family and Contact sections now use the markup, images and visual treatment from `portfolio-visual-elevation-v11(1).zip`. The Family section has its original portrait-card layout and intro note. The Contact section has its original three-column contact composition and featured connection card. The V14 page-level wrapper removal remains in place.



## V16 visual refinement

The Things I Enjoy and Hobbies sections use the earlier image-led design again, including image labels and blurred caption overlays. The Family introduction has its own card, the Hero has a stronger layered frame/shadow, text contrast is improved across themes, and scroll reveal animations now replay in both directions.


### V17 visual hierarchy
The three themes now use separate section backdrops and foreground card surfaces. The Dark theme uses deep navy sections with near-black content cards; Light uses cool blue-grey sections with white cards; Warm uses muted stone sections with warm-white cards. The hero's redundant inner frame is removed, the Journey copy is expanded, Family columns stretch evenly, Contact uses a consistent three-card layout, and the profile highlight strip has a subtle animated edge.


### V18 section framing and hero asset
All top-level section wrapper boxes are removed except the Hero. Interior content cards remain styled. The Hero illustration now loads through `images/hero/developer-avatar.svg`, which references the original transparent PNG artwork and adds no background fill.


### V19 privacy and hero
The public page intentionally does not publish a phone number or phone-call link. The Hero uses the transparent `images/hero/developer-avatar.png` directly for broad browser compatibility. Its outer wrapper is removed; the canvas follows the active theme surface.


### V20 final polish
The interface uses sharp-edged gaming-inspired blocks, responsive Hero control rows, offset-aware smooth anchor navigation, reversible scroll reveals and theme-driven typography. Project detail dialogs include three replaceable local mockup views per project. Review `PROJECT_AUDIT.md` for assignment alignment and validation limitations.
