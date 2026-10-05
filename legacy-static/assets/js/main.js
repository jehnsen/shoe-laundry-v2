(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header shadow on scroll ---------- */
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile navigation ---------- */
  const nav = $("#site-nav");
  const toggle = $(".nav-toggle");

  const setNav = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => setNav(!nav.classList.contains("is-open")));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setNav(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setNav(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("is-open") && !nav.contains(e.target) && !toggle.contains(e.target)) setNav(false);
  });
  window.matchMedia("(min-width: 961px)").addEventListener("change", (e) => e.matches && setNav(false));

  /* ---------- Active nav link while scrolling ---------- */
  const navLinks = $$(".nav-list a");
  const sections = navLinks.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  /* ---------- Service tabs ---------- */
  const tabList = $(".tabs");
  const tabs = $$('[role="tab"]', tabList);

  const activateTab = (tab, focus = false) => {
    tabs.forEach((t) => {
      const selected = t === tab;
      t.classList.toggle("is-active", selected);
      t.setAttribute("aria-selected", String(selected));
      t.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      panel.hidden = !selected;
      panel.classList.toggle("is-active", selected);
    });
    tabList.dataset.active = tab.id.replace("tab-", "");
    if (focus) tab.focus();
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (e) => {
      const dir = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (!dir) return;
      e.preventDefault();
      activateTab(tabs[(i + dir + tabs.length) % tabs.length], true);
    });
  });

  // Footer links that should open a specific tab
  $$("[data-open-tab]").forEach((link) =>
    link.addEventListener("click", () => activateTab($(`#tab-${link.dataset.openTab}`)))
  );

  /* ---------- Before / after slider ---------- */
  $$(".ba").forEach((ba) => {
    const range = $(".ba-range", ba);
    const update = () => ba.style.setProperty("--pos", `${range.value}%`);
    range.addEventListener("input", update);
    update();
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = $$(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          // Stagger siblings that reveal together (cards in a grid)
          const siblings = $$(":scope > .reveal", el.parentElement);
          const index = Math.max(0, siblings.indexOf(el));
          el.style.transitionDelay = `${Math.min(index, 5) * 80}ms`;
          el.classList.add("is-visible");
          revealer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealer.observe(el));
  }

  /* ---------- Count-up stats ---------- */
  const counters = $$("[data-count]");
  const formatNum = (n) => n.toLocaleString("en-US");
  const runCounter = (el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatNum(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!reduceMotion && "IntersectionObserver" in window) {
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          runCounter(entry.target);
          countObs.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => countObs.observe(el));
  }

  /* ---------- Mobile sticky CTA ---------- */
  const mobileCta = $(".mobile-cta");
  const hero = $(".hero");
  const book = $("#book");
  if (mobileCta && "IntersectionObserver" in window) {
    let heroVisible = true;
    let bookVisible = false;
    const sync = () => mobileCta.classList.toggle("is-visible", !heroVisible && !bookVisible);
    new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; sync(); }).observe(hero);
    new IntersectionObserver(([e]) => { bookVisible = e.isIntersecting; sync(); }, { threshold: 0.15 }).observe(book);
  }

  /* ---------- Booking form ---------- */
  const form = $("#book-form");
  const dateInput = $("#f-date");
  const success = $(".form-success", form);

  const today = new Date();
  const toISO = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.min = toISO(today);

  const requiredFields = $$("input[required], select[required]", form);

  const validateField = (input) => {
    const valid = input.checkValidity() && input.value.trim() !== "";
    input.closest(".field").classList.toggle("has-error", !valid);
    input.setAttribute("aria-invalid", String(!valid));
    return valid;
  };

  requiredFields.forEach((input) => {
    const errorEl = $(".field-error", input.closest(".field"));
    if (errorEl) {
      errorEl.id = `${input.id}-error`;
      input.setAttribute("aria-describedby", errorEl.id);
    }
    const evt = input.tagName === "SELECT" || input.type === "date" ? "change" : "blur";
    input.addEventListener(evt, () => validateField(input));
    input.addEventListener("input", () => {
      if (input.closest(".field").classList.contains("has-error")) validateField(input);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = requiredFields.map(validateField);
    const firstInvalid = requiredFields[results.indexOf(false)];
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    // TODO: send `data` to your booking backend / email service here.

    const first = String(data.get("name")).trim().split(/\s+/)[0];
    const date = new Date(`${data.get("date")}T00:00:00`);
    const dateLabel = date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

    $("[data-success-name]", success).textContent = first ? `, ${first}` : "";
    $("[data-success-slot]", success).textContent = `${dateLabel}, ${data.get("time")}`;
    success.hidden = false;
    $("button", success).focus();
  });

  $("[data-reset-form]", form).addEventListener("click", () => {
    form.reset();
    $$(".has-error", form).forEach((f) => f.classList.remove("has-error"));
    success.hidden = true;
    $("#f-name").focus();
  });

  /* ---------- Footer year ---------- */
  $("#year").textContent = new Date().getFullYear();
})();
