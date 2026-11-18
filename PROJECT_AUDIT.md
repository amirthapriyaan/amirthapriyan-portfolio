# Portfolio Assignment Audit — V12

Audit date: 18 November 2026

This report separates the mandatory **Profile Website + CI/CD Pipeline — Use Case Document** requirements from the additional project-detail scope in the user's portfolio design instructions.

## A. Mandatory website requirements

| Requirement | Status | Evidence / notes |
|---|---|---|
| One-page site in a single `index.html` | PASS | All sections remain in one HTML document. |
| Semantic HTML5 structure | PASS | Uses `header`, `nav`, `main`, `section`, `article`, `footer`, buttons and dialogs. |
| Sticky navigation | PASS | Sticky header; responsive hamburger menu uses Vanilla JS. |
| Hero section at `#hero` | PASS | Exact `id="hero"`, name, role, illustration, description, CTA and social links. |
| Full-viewport hero with load animation | PASS | Hero viewport sizing and reveal animation are present. |
| Vertical professional journey at `#journey` | PASS | CSS vertical timeline with four milestones, dates, roles, organizations and descriptions. |
| Journey timeline pseudo-element line/dots | PASS | Timeline line and milestone markers are CSS pseudo-elements. |
| Journey Show more / Show less | PASS | Four expandable milestone descriptions in `js/main.js`. |
| Journey scroll reveal | PASS | IntersectionObserver reveals timeline and other major content. |
| Personal likings at `#interests` | PASS | CSS Grid contains Music, Movies & Series, Food, Books and Travel as image-only tiles, matching the earlier design. |
| Family at `#family` | PASS (illustration placeholder) | Local illustrated family banner plus Mother, Father and Brother relationship cards with descriptions and explicit accessible flip controls. Replace the illustration with a personal family photo only if desired. |
| Hobbies at `#hobbies` | PASS | Responsive image gallery with Vanilla JS lightbox. |
| Footer at `#footer` | PASS | GitHub, LinkedIn, email, build credit, current year generated in JS and back-to-top control. |
| Dark / Light / Warm theme palettes | PASS | Three synchronized token sets in `css/theme.css`. |
| Theme tokens live in one file | PASS | `theme.css` contains only custom-property declarations inside root theme selectors; component CSS consumes variables. |
| HTML / CSS / JavaScript only; no framework | PASS | No React, Angular, Vue, TypeScript, jQuery, Bootstrap, Tailwind or application package manifest. |
| Required folder structure | PASS | Includes `images/hero`, `journey`, `interests`, `family`, `hobbies`, `projects`, `backgrounds`, `icons`, and `.github/workflows`. |
| Five named GitHub Actions workflows | PASS | `validate.yml`, `deploy.yml`, `pr-checks.yml`, `lighthouse.yml`, `notify.yml` exist. |
| Git branching / PR evidence | NOT AUDITABLE FROM ZIP | The ZIP contains source files but no `.git` repository history, branches, PRs or branch-protection configuration. Verify these in GitHub separately. |

## B. Additional portfolio project-section requirements

These requirements come from the user's portfolio design prompt; the core use-case document does not list Projects as one of its four mandatory personal-life sections.

| Project requirement | Status | Evidence / notes |
|---|---|---|
| AeroTrack, ShopZone, Aqua Paradise and Career Compass | PASS | All four projects are displayed. |
| Project-specific website mockup image | PASS | Each card has a locally bundled SVG UI mockup. These are clearly concept previews, not screenshots from deployed applications. |
| Project overview | PASS | Each card and detail dialog contains an overview. |
| Problem statement | PASS | Detail dialog includes a project-specific problem statement. |
| Solution | PASS | Detail dialog includes the solution summary. |
| Key features | PASS | Detail dialog lists the supported feature summary. |
| Technologies | PASS | Each card and detail dialog displays the known stack. |
| Personal contribution | PASS | Detail dialog includes a contribution summary based on known project context. |
| Expanded project details | PASS | Each card opens an accessible native dialog with overview, problem, solution, features, contribution and stack. |
| Multiple screenshots / image gallery | PASS WITH PLACEHOLDERS | Three locally bundled, clearly labelled UI placeholder views per project (overview, workflow, analytics) are supplied through each card's data-gallery attribute and appear in the expanded gallery. They are not real app screenshots; replace them before publication. |
| Project-specific repository links | PARTIAL | No verified individual repository URLs were provided. The links currently point to the GitHub profile; no repository URL was invented. |
| Live demo links | NOT PROVIDED | No verified live-demo URLs were supplied. |

## C. Final visual changes in V13

- Removed the redundant outer frame behind the About/Skills screen; retained the individual stat, About and Skills cards.
- Added specific campus / hardware artwork for Sri Krishna College of Technology, ESP32, Cognizant and Psiog.
- Replaced the LinkedIn mark consistently in hero, contact and footer.
- Increased contact typography and added section-specific font roles via theme tokens.
- Tuned the desktop Projects section to a 90svh design target and let it stack naturally on mobile.
- Added project detail dialogs and journey expanders.
- Kept project mockup images in the required project asset folders.

## D. Validation scope

Static checks to run before release:
- HTML parse, unique IDs, internal anchors, image alt attributes and local asset existence.
- CSS syntax and theme-token consistency.
- JavaScript syntax.
- YAML parsing for all workflows.
- SVG XML parsing.
- ZIP integrity.

Live GitHub Actions, branch protection, Slack delivery, Lighthouse results and deployed GitHub Pages URL require the user's GitHub repository and credentials; they cannot be certified from a local ZIP alone.


## E. Final refinement additions (18 November 2026)

- The About/Skills parent section no longer paints a second enclosing frame; its stat, About and Skills cards remain individually framed.
- Added explicit project detail galleries with three replaceable local SVG UI placeholders per project. The SVGs are marked as placeholders and are not represented as actual screenshots.
- Added a local family banner illustration and explicit click-to-flip controls for the family cards.
- Personal Likings cards now contain real heading and description elements in the HTML.
- Removed the contact form and personal contact details; the section now exposes only a direct mail icon.
- Added organization/campus and ESP32 illustrations for the four professional journey milestones.
- LinkedIn icon is consistent across hero, contact and footer.
- Static validation: HTML parse, IDs, anchors, local asset references, alt attributes, CSS parse, JavaScript syntax, workflow YAML parse and SVG XML parse all pass.
- Browser screenshot / interaction QA could not be completed in this execution environment because Chromium navigation is blocked by the environment policy. Do not treat visual QA as certified.
- Live Actions runs, GitHub Pages deployment, branch protection, Slack delivery and Git history remain unverified without access to the user's GitHub repository.


## E. Release caveats
- The source files passed local static parsing and reference checks. The GitHub Actions jobs have not been executed against a remote repository from this session.
- Live browser screenshot QA could not be completed in this environment because Chromium navigation was blocked by the execution environment. Run the project locally using the README instructions and inspect desktop/tablet/mobile before publishing.
- The CV file is a local replaceable asset. Confirm `assets/Amirthapriyan-J-CV.pdf` is the final resume before release.


## F. Evaluation summary

| Evaluation area | Weight | Local source status | What remains outside this ZIP |
|---|---:|---|---|
| Website content and design | 25% | PASS for the required page sections; project showcase is an additional feature | Replace project placeholders with actual screenshots before publishing |
| HTML / CSS / JS quality | 20% | Static validation PASS; browser-based QA not completed | Run the site locally at desktop/tablet/mobile sizes and verify interactions |
| Theming system | 15% | PASS for one-file CSS token architecture and Dark/Light/Warm variants | Complete the theme branch/PR exercise in Git |
| CI/CD pipeline | 25% | Five workflow files exist and YAML parses | Execute workflows in GitHub; confirm Pages deployment, Lighthouse artifact and Slack secret/notification |
| Git practices | 15% | NOT VERIFIABLE from the ZIP | Verify branch names, commits, PRs, protections and required `all-checks-passed` check in GitHub |

No overall percentage is claimed: the GitHub-hosted evidence and live interaction tests are not available in this workspace.



## G. V14 correction pass

- The top-level viewport sections no longer draw a large shared wrapper; individual cards and content panels retain their themed border, highlight and shadow.
- Family is back to the original static illustration + three-card design (no flip interaction).
- Things I Enjoy and Hobbies are back to image-only tile galleries; no extra descriptions or text overlays are displayed on the Things I Enjoy tiles.
- Let's Connect displays only the heading and one email icon linked to the mail client.
- Journey media now uses real external photo URLs with local SVG fallbacks. The exact sources and attribution notes are in `IMAGE_CREDITS.md`. The Psiog source is an official company identity/workplace photograph, not an exterior campus photograph.
- Theme-specific heading colour tokens and accent line/highlight treatments are applied across all three themes.



## H. V15 Family and Contact restoration

- Family and Contact section markup and styling are restored from the user-provided V11 ZIP.
- Mother, Father and Brother use the original V11 portrait assets.
- Contact restores the V11 details column and featured connection card.
- The V14 shared outer wrapper remains removed.


## F. V20 — sharp gaming-block styling, navigation and responsive polish

- Re-established the requested sharp-corner/block design across cards, panels, buttons, badges, image frames and dialogs. Only intentional timeline nodes and the small greeting indicator remain circular.
- Refined the default Dark theme from blue-tinted navy to near-black/charcoal with purple/lavender accents; Light and Warm token sets remain independent.
- Fixed Hero spacing: CTA buttons, Explore My Journey and social links now occupy separate, wrapping rows with responsive alignment.
- Expanded scroll-reveal targets to include Hero controls, section headers and additional section components. Existing IntersectionObserver logic reverses the reveal on upward scrolling; hover/focus transitions use restrained lift and accent-border feedback.
- Added offset-aware smooth scrolling for all in-page anchors. The scroll target is calculated from the live sticky-header height; hash changes and browser back/forward navigation are aligned to the same offset.
- Added responsive refinements for tablet, mobile and narrow mobile widths; CTA and social controls wrap rather than collide.
- Moved remaining font-family choices into `theme.css` tokens so `style.css` consumes theme variables.
- Each project detail gallery now loads three replaceable local mockup views (overview, workflow, analytics). These are UI placeholders, not real application screenshots.
- Validation: HTML parsed; no duplicate IDs, broken anchors, missing local assets or inline styles; CSS parsed; JS syntax passed; all three theme blocks contain 79 matching variables; `theme.css` contains only custom-property declarations; all five workflow YAML files parse; all four project galleries have three valid local image paths.
- Browser screenshot testing was attempted, but Chromium failed to start in this environment. Visual desktop/mobile screenshot QA therefore remains unverified here. GitHub Actions run status, branch protection, PR history, Lighthouse artifact and live deployment remain repository-side checks.


## Final local completion pass — 18 November 2026

- Journey timeline: all four milestones now include a keyboard-operable **Show more / Show less** button. Detail paragraphs start collapsed and are toggled with `aria-expanded`.
- Personal Likings: Music, Movies & Series, Food, Books and Travel now each include a short descriptive caption in addition to the image and category label. The captions describe the categories without inventing personal favourites.
- Family: Mother, Father and Brother cards now use accessible button controls with 3D front/back faces. The supplied local illustrations remain placeholders; replace them with personal photographs only if desired.
- README deployment guidance now follows the feature branch → `develop` PR → `main` PR process.
- Local checks passed: JavaScript syntax, theme token validation, HTML parser (no parser errors), duplicate IDs, internal anchors, local image paths, CSS parsing, all five workflow YAML files and all SVG XML files.
- Browser-based visual testing and live GitHub Actions / Pages verification still require a real browser and the user's GitHub repository. They are not claimed as completed here.


## Visual consistency update
- Standardized the portfolio's surface and component corners to a consistent rounded design across desktop and mobile. Circular avatar/status details remain intentionally circular.


## Final family-card and navigation correction
- Family flip cards now use explicit front/back 3D faces with readable text, proper backface visibility, sufficient card height, and accessible button state.
- The navigation header remains a full-width rectangular bar; rounded styling is reserved for content cards and controls.


## Family card rendering fix
- Replaced browser-dependent 3D backface compositing with a state-driven front/back face swap. The back-face description is explicitly displayed with visible text color, opacity, and overflow rules; the flip action remains click/touch/keyboard accessible.
