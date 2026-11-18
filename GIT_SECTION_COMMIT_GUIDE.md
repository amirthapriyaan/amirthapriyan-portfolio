# Git Setup and Section-wise Commit Plan (Windows CMD)

Run these commands from the `profile-website` folder after copying it to your preferred development location.

## 0. Configure Git identity once

Use your own Git identity. Replace the example values if your GitHub email/name differs.

```cmd
git config --global user.name "Amirthapriyan J"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

## 1. Initialize the local repository

First create an empty GitHub repository in your account. Do not initialize it with a README, `.gitignore` or license because those files are already in this folder.

The assignment prohibits direct feature work on `main`. Create a small documentation/bootstrap commit on `main`, then create `develop` and commit the recovered portfolio implementation as one existing-work batch (as requested).

```cmd
git init -b main
git add .gitignore README.md PROJECT_PROGRESS.md GIT_SECTION_COMMIT_GUIDE.md ASSET_INVENTORY.md
git commit -m "chore: initialize portfolio project documentation"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
git switch -c develop
```

Commit the recovered website implementation on `develop`. Deliberately leave `.github/workflows/` out of this batch so the five workflow files can be introduced through their own `ci/` branches.

```cmd
git add index.html css js images assets .htmlhintrc scripts
git commit -m "feat: add consolidated personal portfolio website"
git push -u origin develop
```

## 2. Important: section-wise history must be genuine

The supplied folder is already a consolidated implementation containing the completed website sections. Therefore, do not create empty commits or claim that the recovered sections were previously merged through PRs.

The assignment expects feature branches and PRs for Hero, Journey, Likings, Family and Hobbies. To produce genuine section-wise PR history from this completed baseline, each feature branch must contain a real improvement made on that branch. Review the relevant section, make a meaningful improvement (for example, accessibility, responsive behavior, content correction or interaction refinement), and commit only that section's changed files. If no real change is needed, do not create a fake commit; record that section in the consolidated baseline commit instead.

The five CI workflow files are intentionally excluded from the baseline commit. Add them one at a time through their required `ci/` branches in Step 4.

```cmd
git switch develop
git switch -c feature/hero-section
```

After your hero-specific review/fix:
```cmd
git add index.html css/style.css images/hero
git commit -m "feat: complete responsive hero section"
git push -u origin feature/hero-section
```

Create a Pull Request into `develop`, obtain a genuine peer review comment, then merge it on GitHub.

Repeat the same process for:

```cmd
git switch develop
git pull origin develop
git switch -c feature/journey-timeline
```

```cmd
git switch develop
git pull origin develop
git switch -c feature/interests-cards
```

```cmd
git switch develop
git pull origin develop
git switch -c feature/family-section
```

```cmd
git switch develop
git pull origin develop
git switch -c feature/hobbies-gallery
```

For these branches, stage only the files changed for the relevant section. Since the assignment requires one `index.html`, use interactive staging when the HTML file contains unrelated edits:

```cmd
git add -p index.html
```

Use `git diff --cached` before every commit to verify exactly what is staged.

## 3. Fixed theme rule

The approved design is the dark charcoal / neon-violet reference. `css/theme.css` already contains that fixed palette and its design tokens. Do not add a light palette, warm palette, theme toggle, or a separate visual direction: that would violate the approved reference. Keep theme tokens in `css/theme.css`; component and responsive rules belong in `css/style.css`.

## 4. CI workflow branches

Create one branch per workflow as listed in the assignment:

```cmd
git switch develop
git pull origin develop
git switch -c ci/setup-validation
```

Stage the already-prepared `.github/workflows/validate.yml` file on this branch:
```cmd
git add .github/workflows/validate.yml
git commit -m "ci: add HTML and CSS validation workflow"
git push -u origin ci/setup-validation
```

For each next branch, switch back to the updated `develop`, pull it, create the named branch, stage only its prepared workflow file, commit with the listed message, push, and open a PR into `develop`.

Repeat with these branch/file/message combinations:

| Branch | File | Commit message |
|---|---|---|
| `ci/setup-deploy` | `.github/workflows/deploy.yml` | `ci: configure GitHub Pages deployment` |
| `ci/setup-pr-checks` | `.github/workflows/pr-checks.yml` | `ci: add pull request quality gates` |
| `ci/setup-lighthouse` | `.github/workflows/lighthouse.yml` | `ci: add scheduled Lighthouse audit` |
| `ci/setup-notifications` | `.github/workflows/notify.yml` | `ci: add deployment notifications` |

Every branch is pushed and opened as a PR into `develop`. Wait for checks and a genuine peer review before merging.

## 5. Release to main

When `develop` contains all approved work:

```cmd
git switch develop
git pull origin develop
git status
```

Open a GitHub Pull Request from `develop` into `main`. Do not push feature commits directly to `main`.

## 6. Final local checks

```cmd
node --check js/main.js
node scripts/validate-theme.js
git status --short --branch
git log --oneline --decorate --graph -30
```

GitHub Actions, Pages, Lighthouse, branch protection and Slack delivery must be verified in the GitHub repository after pushing.
