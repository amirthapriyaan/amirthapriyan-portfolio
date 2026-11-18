"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-link");
  const backTop = document.querySelector(".back-top");
  const year = document.querySelector("#current-year");

  if (year) year.textContent = String(new Date().getFullYear());

  // Three accessible visual presets: Dark Purple -> Light -> Warm Plum.
  const themeToggle = document.querySelector(".theme-toggle");
  const themeNames = ["dark", "light", "warm"];
  const themeLabels = {
    dark: "Switch to light theme",
    light: "Switch to warm theme",
    warm: "Switch to dark theme"
  };
  const savedTheme = localStorage.getItem("portfolio-theme");
  const applyTheme = theme => {
    const active = themeNames.includes(theme) ? theme : "dark";
    if (active === "dark") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", active);
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", themeLabels[active]);
      themeToggle.setAttribute("title", `Current theme: ${active === "dark" ? "Dark Purple" : active === "light" ? "Light" : "Warm Plum"}. ${themeLabels[active]}.`);
      const paths = {
        dark: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
        light: '<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"/>',
        warm: '<path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42m0-12.72-1.42 1.42m-9.88 9.88-1.42 1.42"/><circle cx="12" cy="12" r="4"/>'
      };
      themeToggle.innerHTML = `<svg class="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true">${paths[active]}</svg>`;
    }
  };
  applyTheme(savedTheme || "dark");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = themeNames[(themeNames.indexOf(current) + 1) % themeNames.length];
      applyTheme(next);
      localStorage.setItem("portfolio-theme", next);
    });
  }

  const closeMenu = () => {
    if (!menuToggle || !navMenu) return;
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  };

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });
    navLinks.forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 780) closeMenu();
    });
  }

  // Offset-aware anchor navigation prevents sticky-header overlap and mid-section landings.
  const siteHeader = document.querySelector(".site-header, header");
  const scrollToAnchor = (target, updateUrl = false) => {
    if (!target) return;
    const headerHeight = siteHeader ? siteHeader.getBoundingClientRect().height : 0;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 14);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    if (updateUrl && target.id) history.pushState(null, "", `#${target.id}`);
    navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${target.id}`));
  };
  document.addEventListener("click", event => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    const id = decodeURIComponent(anchor.getAttribute("href").slice(1));
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    closeMenu();
    scrollToAnchor(target, true);
  });
  const alignCurrentHash = () => {
    if (!location.hash) return;
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => scrollToAnchor(target, false));
  };
  window.addEventListener("hashchange", alignCurrentHash);
  window.addEventListener("popstate", alignCurrentHash);
  window.addEventListener("load", alignCurrentHash, { once: true });

  // Coordinated scroll motion across the full page: hero, panels, cards and section headings.
  const motionTargets = document.querySelectorAll(
    ".hero-copy,.hero-visual,.hero-actions,.hero-journey-link,.social-links," +
    ".profile-stat,.about-panel,.skills-panel,.section-intro-block,.section-title-row," +
    ".timeline-card,.project-feature,.project-feature-intro,.project-mini,.likings-panel,.hobbies-panel," +
    ".liking-card,.hobby-card,.family-intro,.family-card,.contact-intro,.contact-details > a,.contact-connect-card,.footer-top"
  );
  document.documentElement.classList.add("motion-ready");
  motionTargets.forEach((item, index) => {
    item.classList.add("motion-in");
    const siblingIndex = item.parentElement
      ? Array.from(item.parentElement.children).filter(node => node.classList.contains("motion-in")).indexOf(item)
      : 0;
    item.dataset.motionDelay = String(Math.min(Math.max(siblingIndex, 0), 4));
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible", "visible");
        } else {
          entry.target.classList.remove("is-visible", "visible");
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
    motionTargets.forEach(item => revealObserver.observe(item));
    document.querySelectorAll(".reveal").forEach(item => revealObserver.observe(item));

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll("main section[id]").forEach(section => section.classList.remove("section-active"));
        entry.target.classList.add("section-active");
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-24% 0px -52% 0px", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));
  } else {
    motionTargets.forEach(item => item.classList.add("is-visible", "visible"));
    document.querySelectorAll(".reveal").forEach(item => item.classList.add("visible"));
  }

  const updateBackTop = () => {
    if (backTop) backTop.classList.toggle("visible", window.scrollY > 450);
  };
  window.addEventListener("scroll", updateBackTop, { passive: true });
  updateBackTop();
  if (backTop) backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // If a third-party photo is unavailable, fall back to the bundled local artwork.
  document.querySelectorAll("img[data-local-fallback]").forEach(image => {
    const useFallback = () => {
      const fallback = image.dataset.localFallback;
      if (fallback && !image.dataset.fallbackApplied) {
        image.dataset.fallbackApplied = "true";
        image.src = fallback;
      }
    };
    image.addEventListener("error", useFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) useFallback();
  });

  // Journey description expansion.
  document.querySelectorAll(".detail-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const extra = button.nextElementSibling;
      if (!extra) return;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      extra.hidden = expanded;
      button.firstChild.textContent = expanded ? "Show more " : "Show less ";
      const symbol = button.querySelector("span");
      if (symbol) symbol.textContent = expanded ? "＋" : "−";
    });
  });

  // Accessible family flip cards (works with mouse, touch and keyboard).
  document.querySelectorAll(".family-card-inner").forEach(button => {
    button.addEventListener("click", () => {
      const flipped = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", String(!flipped));
      const member = button.querySelector(".family-card-back .family-role")?.textContent?.trim();
      button.setAttribute("aria-label", flipped ? `Show details about ${member}` : `Show front of ${member} card`);
    });
  });

  // Native dialog lightbox for hobby cards.
  const hobbyDialog = document.querySelector("#hobby-lightbox");
  if (hobbyDialog) {
    const image = hobbyDialog.querySelector(".lightbox-image");
    const title = hobbyDialog.querySelector("#lightbox-title");
    const description = hobbyDialog.querySelector("#lightbox-description");
    document.querySelectorAll("[data-lightbox]").forEach(card => {
      card.addEventListener("click", () => {
        image.src = card.dataset.image;
        image.alt = card.dataset.title || "Hobby image";
        title.textContent = card.dataset.title || "Hobby";
        description.textContent = card.dataset.description || "";
        hobbyDialog.showModal();
      });
    });
    hobbyDialog.querySelector(".lightbox-close").addEventListener("click", () => hobbyDialog.close());
    hobbyDialog.addEventListener("click", event => {
      if (event.target === hobbyDialog) hobbyDialog.close();
    });
  }


  // Accessible project-detail dialog: overview, problem, solution, features and contribution.
  const projectDetailDialog = document.querySelector("#project-detail-dialog");
  if (projectDetailDialog) {
    const fields = {
      overview: projectDetailDialog.querySelector("#project-detail-overview"),
      problem: projectDetailDialog.querySelector("#project-detail-problem"),
      solution: projectDetailDialog.querySelector("#project-detail-solution"),
      features: projectDetailDialog.querySelector("#project-detail-features"),
      contribution: projectDetailDialog.querySelector("#project-detail-contribution"),
      stack: projectDetailDialog.querySelector("#project-detail-stack")
    };
    const title = projectDetailDialog.querySelector("#project-detail-title");
    document.querySelectorAll(".project-details-trigger").forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest("article");
        if (!card) return;
        title.textContent = card.querySelector("h3")?.textContent.trim() || "Project details";
        const overview = card.querySelector(".project-feature-copy > p, .project-mini p")?.textContent.trim() || "";
        const gallery = projectDetailDialog.querySelector("#project-detail-gallery");
        if (gallery) {
          gallery.replaceChildren();
          let images = [];
          try { images = JSON.parse(card.dataset.gallery || "[]"); } catch { images = []; }
          images.forEach((src, index) => {
            const figure = document.createElement("figure");
            figure.className = "project-gallery-item";
            const image = document.createElement("img");
            image.src = src;
            image.alt = `${title.textContent} interface preview ${index + 1}`;
            image.loading = "lazy";
            const caption = document.createElement("figcaption");
            caption.textContent = ["Overview","Workflow","Analytics"][index] || `Preview ${index + 1}`;
            figure.append(image, caption);
            gallery.append(figure);
          });
        }
        fields.overview.textContent = overview;
        fields.problem.textContent = card.dataset.problem || "";
        fields.solution.textContent = card.dataset.solution || "";
        fields.features.textContent = card.dataset.features || "";
        fields.contribution.textContent = card.dataset.contribution || "";
        fields.stack.textContent = card.dataset.stack || "";
        projectDetailDialog.showModal();
      });
    });
    projectDetailDialog.querySelector(".lightbox-close").addEventListener("click", () => projectDetailDialog.close());
    projectDetailDialog.addEventListener("click", event => {
      if (event.target === projectDetailDialog) projectDetailDialog.close();
    });
  }

  // Project image viewer.
  const projectDialog = document.querySelector("#project-lightbox");
  if (projectDialog) {
    const image = projectDialog.querySelector(".lightbox-image");
    const title = projectDialog.querySelector("#project-lightbox-title");
    document.querySelectorAll("[data-project-image]").forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        image.src = link.getAttribute("href");
        image.alt = link.querySelector("img")?.alt || "Project preview";
        title.textContent = image.alt;
        projectDialog.showModal();
      });
    });
    projectDialog.querySelector(".lightbox-close").addEventListener("click", () => projectDialog.close());
    projectDialog.addEventListener("click", event => {
      if (event.target === projectDialog) projectDialog.close();
    });
  }

});
