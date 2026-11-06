/* ==========================================================================
   Portfolio — main.js
   Тема, мобильное меню, scroll-spy, фильтр навыков, анимации, копирование e-mail
   ========================================================================== */
(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const THEME_KEY = "portfolio-theme";
  const themeToggle = $("#theme-toggle");

  const getPreferredTheme = () => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  };

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    themeToggle?.setAttribute("aria-pressed", String(theme === "light"));
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#eefaf7" : "#12363a");
  };

  applyTheme(getPreferredTheme());

  themeToggle?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  /* ---------- Mobile nav ---------- */
  const burger = $("#burger");
  const nav = $("#nav");

  const closeNav = () => {
    nav?.classList.remove("is-open");
    burger?.setAttribute("aria-expanded", "false");
  };

  burger?.addEventListener("click", () => {
    const open = nav?.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(Boolean(open)));
  });

  $$(".nav__link").forEach((link) => link.addEventListener("click", closeNav));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  /* ---------- Header state on scroll ---------- */
  const header = $("#header");
  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Scroll spy ---------- */
  const sections = $$("main section[id]");
  const navLinks = $$(".nav__link");
  const linkFor = new Map(navLinks.map((l) => [l.getAttribute("href")?.slice(1), l]));

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((l) => {
            l.classList.remove("is-active");
            l.removeAttribute("aria-current");
          });
          const link = linkFor.get(entry.target.id);
          link?.classList.add("is-active");
          link?.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  const reveals = $$(".reveal");
  let io = null;

  if ("IntersectionObserver" in window && reveals.length) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Cursor glow (pointer devices only) ---------- */
  const glow = $(".cursor-glow");
  if (glow && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let raf = null;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    window.addEventListener("pointermove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
      glow.classList.add("is-active");
      if (raf) return;
      const loop = () => {
        cx += (tx - cx) * 0.12;
        cy += (ty - cy) * 0.12;
        glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
        raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.4 ? requestAnimationFrame(loop) : null;
      };
      raf = requestAnimationFrame(loop);
    });

    document.addEventListener("pointerleave", () => glow.classList.remove("is-active"));
  }

  /* ---------- Copy email ---------- */
  const copyBtn = $("#copy-email");
  if (copyBtn) {
    const initial = copyBtn.textContent;
    let timer = null;
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email || "";
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      copyBtn.textContent = "Скопировано ✓";
      clearTimeout(timer);
      timer = setTimeout(() => (copyBtn.textContent = initial), 1800);
    });
  }

  /* ---------- Year ---------- */
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
