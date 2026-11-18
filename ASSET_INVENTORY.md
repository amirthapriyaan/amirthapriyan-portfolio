# Asset Inventory

All paths are relative to the project root.

## Hero and About
- `images/hero/developer-avatar.png` — transparent developer-at-laptop illustration reused from the earlier portfolio working folder.
- `images/illustrations/hero-scene.svg` — violet city backdrop behind the developer illustration.
- `images/about/about-traveller.png` — the user's supplied transparent backpack/traveller illustration, used in About exactly as supplied.

## Journey
- `images/journey/education.png`
- `images/journey/embedded-internship.png`
- `images/journey/cognizant.png`
- `images/journey/psiog.png`

## Projects
- `images/projects/aerotrack/cover.png`
- `images/projects/shopzone/cover.png`
- `images/projects/aqua-paradise/cover.png`
- `images/projects/career-compass/cover.png`

## Likings and Hobbies
- `images/likings/music.png`
- `images/likings/movies-series.png`
- `images/likings/food.png`
- `images/likings/books.png`
- `images/likings/travel.png`
- `images/hobbies/photography.png`
- `images/hobbies/guitar.png`
- `images/hobbies/tech-exploration.png`
- `images/hobbies/fitness.png`
- `images/hobbies/sketching.png`

The Likings and Hobby card artwork is cropped directly from the user's approved master screenshot so the imagery and labels match the reference.

## Family and Contact
- `images/family/family-portrait.png`
- `images/illustrations/contact-scene.svg`

## Backgrounds and supporting assets
- `images/backgrounds/about-background.svg` — violet mountain backdrop behind the supplied About cutout.
- `images/backgrounds/journey-background.svg` — subtle mountain accent behind the timeline introduction.
- `images/illustrations/hero-scene.svg` — city skyline behind the developer artwork.
- `images/illustrations/contact-scene.svg` — contact desk illustration.
- `images/icons/favicon.svg`
- `assets/Amirthapriyan-J-CV.pdf` — CV download asset copied into the project.

The supplied About illustration is not regenerated. The family, hobby, journey and project images are reused from the previous portfolio asset set.

## Inline SVG icons
- Hero social links: GitHub, LinkedIn, email and telephone.
- Hero statistics: education, code, projects/layers and work.
- Contact details: email, telephone, location, LinkedIn and GitHub.
- Footer social links: GitHub, LinkedIn and email.

These SVG icons are inline in `index.html`, styled through theme-aware classes in `css/style.css`; no external icon library is used.


## Purple hobby artwork added
- `images/hobbies/photography.webp`
- `images/hobbies/guitar.webp`
- `images/hobbies/tech-exploration.webp`
- `images/hobbies/fitness.webp`
- `images/hobbies/sketching.webp`
- These locally stored illustrations use a consistent violet-lit visual style and can be replaced independently.


## Neutral hobby and interest photography
- `images/hobbies/photography-neutral.webp`
- `images/hobbies/guitar-neutral.webp`
- `images/hobbies/tech-exploration-neutral.webp`
- `images/hobbies/fitness-neutral.webp`
- `images/hobbies/sketching-neutral.webp`
- `images/hobbies/travel-neutral.webp`
- `images/hobbies/music-neutral.webp`
- `images/hobbies/movies-series-neutral.webp`
- `images/hobbies/food-neutral.webp`
- `images/hobbies/books-neutral.webp`
- Images are shared unchanged across Dark Purple, Light and Warm Plum so the same subjects stay consistent across themes.


## Hero photo replacement
The hero currently uses an inline SVG silhouette as a professional-photo placeholder. Replace the `.hero-photo-placeholder` block in `index.html` with an `<img>` inside `.hero-portrait-frame` when the final portrait is ready. Keep the wrapper to retain the responsive portrait crop.

## Family illustrations — V9
- `images/family/mother-illustration.webp`
- `images/family/father-illustration.webp`
- `images/family/brother-illustration.webp`
- Coordinated editorial-style vector portraits generated for the family cards, with a charcoal and violet palette.

## V12 replacement assets
- `images/journey/education-campus.svg` — Sri Krishna College of Technology campus illustration.
- `images/journey/esp32-development-board.svg` — ESP32 WROOM development-board illustration.
- `images/journey/cognizant-campus.svg` — Cognizant organization-campus illustration.
- `images/journey/psiog-campus.svg` — Psiog organization-campus illustration.
- `images/projects/aerotrack/cover.svg` — aircraft fleet maintenance dashboard mockup.
- `images/projects/shopzone/cover.svg` — e-commerce storefront mockup.
- `images/projects/aqua-paradise/cover.svg` — fish and aquarium store mockup.
- `images/projects/career-compass/cover.svg` — career guidance application mockup.
- `images/interests/` — dedicated copies of the five personal-likings thumbnails.
All V12 SVGs are local editable vector assets. Project cover artwork is a UI concept preview, not a screenshot captured from a running production project.

### V12 expanded project mockup screens
- `images/projects/aerotrack/details.svg`
- `images/projects/shopzone/details.svg`
- `images/projects/aqua-paradise/details.svg`
- `images/projects/career-compass/details.svg`
Each project has a cover UI concept and a second detail-screen concept shown in its project dialog. Replace both with real application screenshots when available.


## V13 additions

- `images/journey/education-campus.svg` — Sri Krishna College of Technology campus illustration.
- `images/journey/esp32-development-board.svg` — ESP32 development board illustration.
- `images/journey/cognizant-campus.svg` — Cognizant campus illustration.
- `images/journey/psiog-campus.svg` — Psiog campus illustration.
- `images/family/family-banner.svg` — family support banner illustration.
- `images/projects/<project>/{overview,workflow,analytics}.svg` — three clearly labelled replaceable UI placeholder views for each project. Replace with genuine application screenshots before public launch.


## V14 real photo sources

See `IMAGE_CREDITS.md` for the four external photo URLs, attribution notes and local SVG fallback paths. Journey cards load real SKCT, ESP32-DevKitC, Cognizant and official Psiog imagery from the web.


### Psiog office-location photograph (V17)
- Primary image: WorkEZ – Urban Square OMR, Perungudi, Chennai.
- Used to represent the office building at the Urban Square location listed by Psiog for its Chennai delivery centre; it is not presented as a Psiog-branded building facade.
- Image source: Cityinfo Services property listing — https://properties.cityinfoservices.com/workez-urban-square-omr-perungudi-chennai/jmkm4yw/pjd
- Direct image: https://cf-cdn.cityinfoservices.com/public/uploads/project/images/large/60712631057aa24e59WorkEZ%20-%20Urban%20Square%20OMR.jpg
- Local fallback: `images/journey/psiog-campus.svg`


### Hero illustration wrapper (V18)
- `images/hero/developer-avatar.svg` is the hero image entry point.
- It references `developer-avatar.png`, which retains its original transparent alpha channel; the SVG has no background rectangle or fill.
