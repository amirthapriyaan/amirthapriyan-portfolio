# Git and GitHub Actions Workflow

This project is a static HTML/CSS/Vanilla JavaScript website. Keep application code free of frameworks and package dependencies. CI workflows may install HTMLHint and CSSLint as validation tools.

## Branch model

- `main` — stable, deployable version; GitHub Pages deploys from this branch.
- `develop` — integration branch for completed work.
- Feature branches merge into `develop` through Pull Requests.
- Promote tested `develop` changes to `main` through a Pull Request.

Suggested assignment branches:

| Branch | Scope | PR target |
|---|---|---|
| `feature/hero-section` | Hero and navigation | `develop` |
| `feature/journey-timeline` | Professional timeline | `develop` |
| `feature/interests-cards` | Personal likings | `develop` |
| `feature/family-section` | Family cards and flip effect | `develop` |
| `feature/hobbies-gallery` | Hobbies gallery and lightbox | `develop` |
| `theme/dark-mode` | Dark purple token set | `develop` |
| `theme/warm-tones` | Warm theme token set | `develop` |
| `ci/setup-validation` | HTML/CSS/JS validation | `develop` |
| `ci/setup-deploy` | GitHub Pages deployment | `develop` |
| `ci/setup-pr-checks` | PR quality gates | `develop` |
| `ci/setup-lighthouse` | Lighthouse audit | `develop` |
| `ci/setup-notifications` | Deployment notification | `develop` |

These are the assignment's intended branch names, not a claim that these historical branches or Pull Requests already exist in this ZIP.

## Pull Request process

1. Update the local `develop` branch.
2. Create the relevant feature/theme/CI branch from `develop`.
3. Make one focused change and commit with a descriptive message.
4. Push the branch to GitHub.
5. Open a Pull Request targeting `develop`.
6. Wait for `validate.yml` and `pr-checks.yml` to pass.
7. Review the diff, resolve review feedback and merge.
8. Periodically open a Pull Request from `develop` to `main`.
9. A successful push/merge to `main` triggers the GitHub Pages deployment.

## Branch protection

Configure repository rulesets / branch protection in GitHub:

- Protect `main` and `develop`.
- Require Pull Requests before merging.
- Require the `all-checks-passed` status check for PRs.
- Require the validation workflow to pass.
- Require conversation resolution and prevent force pushes.
- Restrict direct pushes to `main` where the repository plan/settings permit.

Repository settings must be configured in GitHub; they are not encoded in the website files.

## GitHub Pages

1. Open repository **Settings → Pages**.
2. Set the build/deployment source to **GitHub Actions**.
3. Merge the approved version into `main`.
4. Confirm the `Deploy to GitHub Pages` workflow completes.
5. Verify the generated Pages URL and test the published site.

The expected URL format is `https://USERNAME.github.io/REPOSITORY-NAME/`.

## Workflow files

- `validate.yml` — HTMLHint, CSSLint syntax validation, theme-token checks and JavaScript syntax.
- `deploy.yml` — uploads and deploys the repository root to GitHub Pages.
- `pr-checks.yml` — title, image-alt and console-log checks, ending in `all-checks-passed`.
- `lighthouse.yml` — runs after a successful deployment and on the weekly schedule; uploads a 30-day report artifact.
- `notify.yml` — reports deployment success/failure in Actions logs and sends a Slack webhook message when configured.

Add the repository secret `SLACK_WEBHOOK_URL` to enable actual Slack delivery. Without that secret, the workflow logs the outcome and explicitly skips the external message. Never commit the webhook URL.

## Theme-change exercise

All palette and typography values are stored in `css/theme.css`.

1. Create a theme branch from `develop`.
2. Edit only the desired theme's custom-property values in `css/theme.css`.
3. Do not edit `index.html`, `css/style.css` or `js/main.js` just to change the visual palette.
4. Preview the result, commit and push the branch.
5. Open a Pull Request to `develop`, validate and merge.

The navigation theme switch is an additional visitor-facing feature; the Git exercise remains a one-file token change in `css/theme.css`.
