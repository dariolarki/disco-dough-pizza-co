import { useState, useEffect, useRef, useCallback } from "react";
import heroPizza from "../images/Capital skyline facing pizza shot  copy.JPG";
import caylaPizza from "../images/Cayla Capital Solo Tomato Stracciatella Pie copy.JPG";
import brandenPizza from "../images/Branden Captial Solo Hot Honey Pep.JPG";
import skylineBack from "../images/Capital Skyline looking back  copy.JPG";
import successionShot from "../images/Capital Succession shot copy.JPG";
import wieldingPeels from "../images/Capital wielding Peels copy.JPG";
import cheesePie from "../images/Disco Dough Pizza Co. Sourdough Cheese Pie _3 copy.jpeg";
import hotHoneyPie from "../images/Disco Dough Pizza Co. Sourdough Hot Honey Pep_4 copy.jpeg";
import tomatoPie from "../images/Disco Dough Pizza Co. Sourdough Tomato Stracciatella Pie copy.JPG";
import cheesePieNew from "../images/Cheese pie.jpeg";
import dubaiAndCheesePie from "../images/Dubai and Cheese Pie.jpeg";
import dubaiCookiePieDouble from "../images/Dubai Cookie Pie Double.jpeg";
import dubaiCookiePieThree from "../images/Dubai Cookie Pie 3.0.HEIC.jpeg";
import hotHoneyPepTwo from "../images/Hot Honey Pep 2.0.jpeg";
import chocolateChipCookieOven from "../images/Choclate Chip Cookie Pie 2.0 oven shot.jpeg";
import cookieBoxTray from "../images/IMG_2492.JPG";
import chocolateChipCupClose from "../images/cookie2.jpg";
import cookieAssortmentBox from "../images/cookie3.jpg";
import dubaiPistachioMarble from "../images/cookie4.jpg";
import cookieFourMarble from "../images/cookie5.jpg";
import hotHoneyPepFour from "../images/Hot Honey Pep 4.0.jpeg";
import img6318 from "../images/IMG_6318.jpeg";
import grandmaCheesePie from "../images/Disco Dough Grandma Cheese Pie.jpeg";
import brandAsset from "../images/disco-logo.png";
import pizzaAsset from "../images/Disco Dough Pizza Asset.png";
import mirrorBall from "../images/Disco Dough Mirror Ball.png";
import bridgeAsset from "../images/Disco Dough Bridge.png";
import pizzaBox from "../images/Disco Dough Pizza Box.png";
import illDough from "../images/ill-dough.png";
import illChar from "../images/ill-char.png";
import illTomato from "../images/ill-tomato.png";
import illSlice from "../images/ill-slice.png";
import illFerment from "../images/ill-ferment.png";
import illCrumb from "../images/ill-crumb.png";
import logoNoO from "../images/logo-no-o.png";
import logoOBall from "../images/logo-o-ball.png";

// New event / catering media (Tezza shoot + on-site clips)
import evtFounders from "../images/disco-dough-new-media/web/Tezza-4649.jpg";
import evtFoundersAlt from "../images/disco-dough-new-media/web/FullSizeRender.jpg";
import evtVenue from "../images/disco-dough-new-media/web/Tezza-7275.jpg";
import evtCourtyard from "../images/disco-dough-new-media/web/IMG_5519.jpg";
import evtSpread from "../images/disco-dough-new-media/web/Tezza-0537.jpg";
import evtBoards from "../images/disco-dough-new-media/web/Tezza-8199.jpg";
import evtOverhead from "../images/disco-dough-new-media/web/Tezza-5722.jpg";
import evtPlating from "../images/disco-dough-new-media/web/Tezza-5068.jpg";
import evtCutting from "../images/disco-dough-new-media/web/4A1B83AA-9BAE-497F-8767-13CB8A3A7741.jpg";
import evtBoxes from "../images/disco-dough-new-media/web/CE87145C-3069-49EE-BDD4-B51EBFCDCD0E.jpg";
import evtRooftop from "../images/disco-dough-new-media/web/IMG_7966.jpeg";
import vidPeel from "../images/disco-dough-new-media/web/IMG_5509.mp4";
import vidPeelPoster from "../images/disco-dough-new-media/web/IMG_5509-poster.jpg";
import vidReach from "../images/disco-dough-new-media/web/IMG_5499.mp4";
import vidReachPoster from "../images/disco-dough-new-media/web/IMG_5499-poster.jpg";
import vidPies from "../images/disco-dough-new-media/web/IMG_5500.mp4";
import vidPiesPoster from "../images/disco-dough-new-media/web/IMG_5500-poster.jpg";
import vidRack from "../images/disco-dough-new-media/web/IMG_5825.mp4";
import vidRackPoster from "../images/disco-dough-new-media/web/IMG_5825-poster.jpg";
import vidSipHaus from "../images/disco-dough-new-media/web/sip-haus-oven.mp4";
import vidSipHausPoster from "../images/disco-dough-new-media/web/sip-haus-oven-poster.jpg";

const CALENDLY = "https://calendly.com/Branden-Beyer";
const EMAIL = "mailto:Discodoughpizzaco@outlook.com";
const INSTAGRAM = "https://www.instagram.com/discodoughpizzaco/";
const TIKTOK = "https://www.tiktok.com/@discodoughpizzaco";
const EVENTS_ROUTE = "/events";
const ABOUT_ROUTE = "/about";
const MENU_ROUTE = "/menu";
const OUR_PIES_ROUTE = "/our-pies";
const GALLERY_ROUTE = "/gallery";
const CONTACT_ROUTE = "/contact";

// Real path + a plain URL fragment, e.g. "/events#book" — not a nested route.
const eventSectionHref = (section) => `${EVENTS_ROUTE}#${section}`;

const heroImage = { src: heroPizza, alt: "Disco Dough pizza held in front of the Austin skyline" };
const caylaPhoto = { src: caylaPizza, alt: "Cayla holding a tomato stracciatella pie in Austin" };
const brandenPhoto = { src: brandenPizza, alt: "Branden holding a hot honey pepperoni pie in Austin" };

const navItems = [
  { label: "About", href: ABOUT_ROUTE },
  { label: "Menu", href: MENU_ROUTE },
  { label: "Our Pies", href: OUR_PIES_ROUTE },
  { label: "Events", href: EVENTS_ROUTE },
  { label: "Gallery", href: GALLERY_ROUTE },
  { label: "Contact", href: CONTACT_ROUTE },
];

// Prices ordered most expensive → least within each section
const pizzaMenu = {
  title: "Pies",
  note: "Every pie is built on our 72-hour sourdough with San Marzano tomatoes, mozzarella, Pecorino Romano, Parmesan, and Sicilian extra virgin olive oil. Baked well-done for a sturdy crust that folds clean — no flop.",
  icon: pizzaAsset,
  items: [
    { name: "Spicy Vodka Pie", prices: ["$28"], description: "Handmade vodka sauce, Calabrian chili, parsley-lemon-pistachio pesto." },
    { name: "Soppressata Rosemary Pie", prices: ["$25"], description: "Soppressata, pepperoni, rosemary, fresh basil." },
    { name: "Hot Honey Pepperoni", prices: ["$24"], description: "Pepperoni, ricotta dollops, hot honey." },
    { name: "Classic Pepperoni", prices: ["$22"], description: "Pepperoni." },
    { name: "Classic Cheese", prices: ["$20"], description: "The essentials, done right." },
  ],
};

const menuSections = [
  {
    title: "Mini Cookie Pies",
    icon: mirrorBall,
    items: [
      { name: "Dubai Chocolate Chip Mini Cookie Pie", prices: ["$6"] },
      { name: "German Chocolate Mini Cookie Pie", prices: ["$5"] },
      { name: "Classic Chocolate Chip Cookie Pie", prices: ["$4"] },
    ],
  },
  {
    title: "Add-Ons",
    icon: pizzaBox,
    layout: "grid",
    items: [
      { name: "Nduja Sausage", prices: ["+$4"] },
      { name: "Double Pepperoni", prices: ["+$3"] },
      { name: "Extra Cheese", prices: ["+$2"] },
      { name: "Ricotta", prices: ["+$2"] },
      { name: "Stracciatella", prices: ["+$2"] },
      { name: "Jalapeño", prices: ["+$0.50"] },
      { name: "Basil", prices: ["+$0.50"] },
      { name: "Arugula", prices: ["+$0.50"] },
      { name: "Bell Pepper", prices: ["+$0.50"] },
      { name: "Red Onion", prices: ["+$0.50"] },
      { name: "Mushrooms", prices: ["+$0.50"] },
    ],
  },
];

const galleryImages = [
  { src: skylineBack, alt: "Disco Dough pizza with the Texas Capitol skyline behind it" },
  { src: caylaPizza, alt: "Cayla holding a tomato stracciatella pie in Austin" },
  { src: successionShot, alt: "Disco Dough pizza box on the Capitol lawn" },
  { src: wieldingPeels, alt: "Disco Dough founders carrying pizza peels in Austin" },
  { src: cheesePie, alt: "Disco Dough sourdough cheese pie" },
  { src: hotHoneyPie, alt: "Disco Dough sourdough hot honey pepperoni pie" },
  { src: tomatoPie, alt: "Disco Dough sourdough tomato stracciatella pie" },
  { src: cheesePieNew, alt: "Disco Dough cheese pie" },
  { src: hotHoneyPepTwo, alt: "Disco Dough hot honey pepperoni pie" },
  { src: hotHoneyPepFour, alt: "Disco Dough hot honey pepperoni pie with charred crust" },
  { src: grandmaCheesePie, alt: "Disco Dough grandma cheese pie" },
  { src: img6318, alt: "Freshly baked Disco Dough pizza with crisp edges" },
  { src: cookieBoxTray, alt: "Disco Dough cookie box assortment on checkered tablecloth" },
  { src: chocolateChipCupClose, alt: "Disco Dough chocolate chip cookie with sea salt in kraft cup" },
  { src: cookieAssortmentBox, alt: "Disco Dough assorted cookie pies in a box" },
  { src: dubaiPistachioMarble, alt: "Disco Dough Dubai chocolate chip cookie with pistachio" },
  { src: cookieFourMarble, alt: "Disco Dough cookie selection on marble" },
  { src: evtCutting, alt: "Slicing a Disco Dough pie tableside at an Austin event" },
  { src: evtBoards, alt: "Disco Dough catering spread on wooden boards" },
  { src: evtRooftop, alt: "Disco Dough pizza service on a rooftop with the Austin skyline behind it" },
];

const galleryPositionClasses = {
  8: "gallery-position-down-30",
};

// Event / catering gallery (new shoot)
const eventGallery = [
  { src: evtFounders, alt: "Cayla and Branden behind a full Disco Dough catering spread" },
  { src: evtVenue, alt: "Disco Dough catering setup at a limestone Austin venue" },
  { src: evtCourtyard, alt: "Disco Dough pizza table in a garden courtyard" },
  { src: evtSpread, alt: "Overhead of a Disco Dough pizza spread on a gingham table" },
  { src: evtBoxes, alt: "Disco Dough pies boxed and ready to serve" },
  { src: evtOverhead, alt: "Disco Dough pies plated on boards from above" },
  { src: evtPlating, alt: "A Disco Dough pizzaiolo plating pies at an event" },
  { src: evtBoards, alt: "Disco Dough catering spread on wooden boards" },
  { src: evtCutting, alt: "Slicing a Disco Dough pie tableside" },
  { src: evtFoundersAlt, alt: "Cayla and Branden hosting a Disco Dough pizza event" },
];

// Full gallery page — every homepage + event photo, deduped, plus a few
// extra shots (Dubai cookie pies, oven shot) that aren't shown elsewhere.
const fullGalleryImages = (() => {
  const combined = [
    ...galleryImages,
    ...eventGallery,
    { src: dubaiAndCheesePie, alt: "Disco Dough Dubai cookie pie and cheese pie" },
    { src: dubaiCookiePieDouble, alt: "Two Disco Dough Dubai cookie pies" },
    { src: dubaiCookiePieThree, alt: "Disco Dough Dubai cookie pie" },
    { src: chocolateChipCookieOven, alt: "Disco Dough chocolate chip cookie pie in the oven" },
  ];
  const seen = new Set();
  return combined.filter((image) => {
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
})();

const eventLoops = [
  { src: vidPeel, poster: vidPeelPoster, caption: "Oven-side service, peel in hand." },
  { src: vidReach, poster: vidReachPoster, caption: "Fresh from the box, straight to the table." },
  { src: vidPies, poster: vidPiesPoster, caption: "Spotted char, every single pie." },
  { src: vidRack, poster: vidRackPoster, caption: "Fresh off the peel, cooling on the rack." },
  { src: vidSipHaus, poster: vidSipHausPoster, caption: "Live fire at Sip Haus." },
];

const occasions = [
  {
    title: "Weddings",
    copy: "Cocktail-hour pies and late-night slices that keep the floor fed. Elegant, unfussy, and unforgettable.",
  },
  {
    title: "Birthdays",
    copy: "From milestone dinners to backyard parties, a centerpiece your guests will actually remember.",
  },
  {
    title: "Housewarmings",
    copy: "Warm a new home the right way — fresh dough, good people, and pizza straight from the oven.",
  },
  {
    title: "Celebrations",
    copy: "Engagements, anniversaries, showers, and company nights — hosted with intention and real hospitality.",
  },
];

const eventTypes = [
  "Weddings",
  "Birthdays",
  "Housewarmings",
  "Celebrations",
  "Bridal showers",
  "Anniversaries",
  "Backyard hangs",
  "Creative studio nights",
  "Family gatherings",
  "Corporate dinners",
  "Bachelorette parties",
  "Indoor dinner parties",
];

const eyebrowPhrases = [
  "Disco Dough Pizza Co.",
  "Austin, Texas",
  "Disco Dough Pizza Co.",
  "Austin, Texas",
];

// 3D tilt hook — used on the About section portrait photos
function useTilt(maxAngle = 7) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const cleanupRef = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (cleanupRef.current) { clearTimeout(cleanupRef.current); cleanupRef.current = null; }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);
        el.style.transition = "transform 60ms linear";
        el.style.transform = `perspective(700px) rotateY(${(x * maxAngle).toFixed(2)}deg) rotateX(${(-y * maxAngle).toFixed(2)}deg)`;
      });
    },
    [maxAngle],
  );

  const onMouseLeave = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 400ms ease";
    el.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
    cleanupRef.current = setTimeout(() => {
      if (el && el.style.transform === "perspective(700px) rotateX(0deg) rotateY(0deg)") {
        el.style.transform = "";
        el.style.transition = "";
      }
    }, 420);
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

function Star({ className = "" }) {
  return <span className={`star ${className}`} aria-hidden="true">✦</span>;
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-tomato">
      <Star />
      <span>{children}</span>
    </div>
  );
}

const bannerAssets = [
  { src: brandAsset, alt: "Disco Dough Pizza Co." },
  { src: mirrorBall, alt: "Disco Dough disco ball" },
  { src: pizzaBox, alt: "Disco Dough pizza box" },
  { src: bridgeAsset, alt: "Austin skyline" },
  { src: pizzaAsset, alt: "Disco Dough pizza slices" },
];

function CheckerBanner() {
  return <div className="checker-banner" aria-hidden="true" />;
}

function LogoBanner() {
  const [reps, setReps] = useState(4);
  useEffect(() => {
    const BASE = 650;
    const compute = () => {
      const need = Math.max(4, Math.ceil(window.innerWidth / BASE) + 1);
      // Grow-only: never shrink (shrinking re-renders the track and visibly
      // restarts the scroll). Extra repetitions just keep scrolling seamlessly.
      setReps((r) => (need > r ? need : r));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const half = Array.from({ length: reps }, () => bannerAssets).flat();
  const items = [...half, ...half];
  // Speed is constant regardless of reps: track width ∝ reps and duration ∝ reps.
  return (
    <div className="logo-banner" aria-hidden="true">
      <div className="logo-banner-track" style={{ animationDuration: `${reps * 16}s` }}>
        {items.map((item, i) => (
          <span key={i} className="logo-banner-cell">
            {/* eager + sync decode so widths are stable before the marquee is
                seen — lazy-loading made the track resize and the speed jump */}
            <img src={item.src} alt={item.alt} loading="eager" decoding="sync" className="logo-banner-item" />
            <span className="logo-banner-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const tickerPhrases = [
  "Premium Pizza Catering",
  "Weddings · Celebrations · Pop-Ups",
  "Handmade in Austin",
  "72-Hour Cold Ferment",
  "Live Oven-Side Service",
  "Leopard-Spotted Char",
];

function TextMarquee({ phrases = tickerPhrases, durationSec = 38, rounded = false, variant }) {
  const items = [...phrases, ...phrases];
  const cls = ["text-marquee", rounded && "text-marquee--rounded", variant && `text-marquee--${variant}`]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls} aria-hidden="true">
      <div className="text-marquee-track" style={{ animationDuration: `${durationSec}s` }}>
        {items.map((phrase, i) => (
          <span key={i} className="text-marquee-item">
            {phrase}
            <span className="text-marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Instagram follow CTA — sits between the ticker and the About section
function InstagramCTA() {
  return (
    <div className="instagram-cta">
      <div className="instagram-cta-rule" aria-hidden="true">
        <Star />
        <span />
        <Star />
      </div>
      <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="instagram-cta-handle">
        @discodoughpizzaco
      </a>
      <p className="instagram-cta-sub">
        Behind-the-scenes dough, live catering setups, and Austin pizza moments.
      </p>
      <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="instagram-cta-btn">
        Follow on Instagram
      </a>
      <div className="instagram-cta-rule" aria-hidden="true">
        <Star />
        <span />
        <Star />
      </div>
    </div>
  );
}

// Floating sticky CTA — appears after scrolling 500px
function FloatingCTA() {
  return (
    <a href={EVENTS_ROUTE} className="floating-cta" aria-label="Book your event">
      <span aria-hidden="true">✦</span>
      Book Your Event
    </a>
  );
}

// Full-screen gallery lightbox
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Tab") {
        const focusable = [closeRef.current, prevRef.current, nextRef.current].filter(Boolean);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Photo viewer">
      <button ref={closeRef} className="lightbox-close" onClick={onClose} aria-label="Close photo viewer">×</button>
      <button
        ref={prevRef}
        className="lightbox-prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous photo"
      >
        ←
      </button>
      <button
        ref={nextRef}
        className="lightbox-next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next photo"
      >
        →
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[index].src} alt={images[index].alt} className="lightbox-img" />
        <p className="lightbox-caption">{images[index].alt}</p>
        <span className="lightbox-counter">{index + 1} / {images.length}</span>
      </div>
    </div>
  );
}

// Reusable lightbox-enabled photo grid
function PhotoGrid({ images, positionClasses = {} }) {
  const [index, setIndex] = useState(null);
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, i) => (
          <figure
            key={`${image.src}-${i}`}
            className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-card-lift gallery-card cursor-pointer"
            onClick={() => setIndex(i)}
            role="button"
            tabIndex={0}
            aria-label={`Open photo: ${image.alt}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIndex(i);
              }
            }}
          >
            <div className="ph-media">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className={`h-full w-full object-cover object-center ${positionClasses[i] || ""}`}
              />
            </div>
          </figure>
        ))}
      </div>
      {index !== null && (
        <Lightbox images={images} index={index} onClose={close} onPrev={prev} onNext={next} />
      )}
    </>
  );
}

const ROUTE_TABLE = [
  ["events", EVENTS_ROUTE],
  ["about", ABOUT_ROUTE],
  ["menu", MENU_ROUTE],
  ["our-pies", OUR_PIES_ROUTE],
  ["gallery", GALLERY_ROUTE],
  ["contact", CONTACT_ROUTE],
];

// pushState never fires popstate on its own, so every internal navigation
// dispatches one manually — every hook below listens for "popstate" (never
// "hashchange"), one consistent event for both real nav and browser back/forward.
function navigate(path) {
  if (window.location.pathname + window.location.hash === path) return;
  window.history.pushState(null, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

// Intercepts clicks on same-origin page links so navigation goes through the
// History API instead of a full page reload. Same-page anchors (href="#hero")
// are left alone on purpose — the browser already handles those natively.
function useClientSideNavigation() {
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target.closest("a");
      if (!link) return;
      if (link.target && link.target !== "_self") return;
      if (link.hasAttribute("download")) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      let url;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      e.preventDefault();
      navigate(url.pathname + url.hash);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

function useRoute() {
  const read = () => {
    // One-time migration for old hash-style links (e.g. "#/menu") from
    // before this site used real paths, so old bookmarks/shares still land
    // on the right page instead of silently falling through to home.
    if (window.location.hash.startsWith("#/")) {
      window.history.replaceState(null, "", window.location.hash.slice(1));
    }
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    const match = ROUTE_TABLE.find(([, prefix]) => path === prefix);
    return match ? match[0] : "home";
  };
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onPop = () => setRoute(read());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return route;
}

const SITE_TITLE = "Disco Dough Pizza Co.";
const SITE_URL = "https://discodoughpizzaco.com/";

// Per-route <title>, meta description, and canonical link. index.html only
// has one static set (for the pre-JS/crawler-fallback view of "/"), so every
// hash route showed the exact same tab title and description — this fixes
// that for the client-rendered document once JS has run.
const ROUTE_META = {
  home: {
    title: `${SITE_TITLE} | Austin Pizza Catering & Pop-Ups`,
    description: "Disco Dough Pizza Co. is an Austin, Texas premium sourdough pizza catering and pop-up company — live, oven-side service for weddings, celebrations, and private events.",
  },
  events: {
    title: `Catering & Private Events | ${SITE_TITLE}`,
    description: "A live, sourdough pizza experience crafted oven-side for weddings, milestone celebrations, and private events in Austin, Texas.",
  },
  about: {
    title: `About Us | ${SITE_TITLE}`,
    description: "Built from family nights and a hot pizza on the table — the story behind Disco Dough Pizza Co., NY inspired and Austin made.",
  },
  menu: {
    title: `Menu | ${SITE_TITLE}`,
    description: "New York style sourdough pizzas, mini cookie pies, and add-ons — the full Disco Dough Pizza Co. menu for Austin catering and events.",
  },
  "our-pies": {
    title: `Our Pies | ${SITE_TITLE}`,
    description: "Naturally leavened 72-hour sourdough, hand-stretched into a deep golden, foldable New York pie — premium ingredients, made to order.",
  },
  gallery: {
    title: `Gallery | ${SITE_TITLE}`,
    description: "Warm boxes, crisp edges, handmade details — photos from real Disco Dough Pizza Co. pop-ups and private events around Austin.",
  },
  contact: {
    title: `Contact | ${SITE_TITLE}`,
    description: "Plan an event, ask a question, or follow along with Disco Dough Pizza Co. in Austin, Texas.",
  },
};

function useRouteMeta(route) {
  useEffect(() => {
    const meta = ROUTE_META[route] ?? ROUTE_META.home;
    document.title = meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", meta.description);

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      const path = window.location.pathname.replace(/\/$/, "");
      canonicalTag.setAttribute("href", path ? `${SITE_URL.slice(0, -1)}${path}` : SITE_URL);
    }
  }, [route]);
}

// Scrolls to a home-page section anchor (e.g. #about) after routing back to
// home from a standalone page — or to the top when there's no anchor at all
// (e.g. the logo link, which now points at a bare "/"). Browsers only
// auto-scroll to an id already present in the DOM at popstate time, which a
// section on another route never is, so home has to do this scroll itself
// once it (re)mounts.
function useHomeAnchorScroll() {
  useEffect(() => {
    const scrollToAnchor = () => {
      const hash = window.location.hash;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!hash || hash === "#") {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }
      const el = document.getElementById(hash.slice(1));
      if (!el) return;
      window.requestAnimationFrame(() => {
        el.scrollIntoView({
          // "auto" would inherit the global `scroll-behavior: smooth` and
          // animate instead of jumping, even though that's meant as an
          // instant fallback for reduced-motion users.
          behavior: reduceMotion ? "instant" : "smooth",
          block: "start",
        });
      });
    };
    scrollToAnchor();
    window.addEventListener("popstate", scrollToAnchor);
    return () => window.removeEventListener("popstate", scrollToAnchor);
  }, []);
}

// Scrolls a standalone page to its top on mount/popstate — mirrors the
// section-aware version EventsPage uses, but these pages have no sub-sections.
function useScrollTopOnRoute() {
  useEffect(() => {
    // "instant", not "auto" — the page sets `scroll-behavior: smooth`
    // globally, so "auto" would animate this instead of jumping.
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "instant" });
    scrollTop();
    window.addEventListener("popstate", scrollTop);
    return () => window.removeEventListener("popstate", scrollTop);
  }, []);
}

function App() {
  const route = useRoute();
  useRouteMeta(route);
  useClientSideNavigation();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY + 4 && y > 140) {
        document.body.classList.add("nav-hidden");
      } else if (y < lastY - 4 || y <= 140) {
        document.body.classList.remove("nav-hidden");
      }
      document.body.classList.toggle("show-floating-cta", y > 500);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (route === "home") {
    return (
      <main className="min-h-screen overflow-hidden bg-cream text-ink">
        <CheckerBanner />
        <HomePage />
      </main>
    );
  }

  const standalonePages = {
    events: (
      <>
        <EventsHeader />
        <EventsPage />
      </>
    ),
    about: (
      <>
        <Header />
        <AboutPage />
      </>
    ),
    menu: (
      <>
        <Header />
        <MenuPage />
      </>
    ),
    "our-pies": (
      <>
        <Header />
        <OurPiesPage />
      </>
    ),
    gallery: (
      <>
        <Header />
        <GalleryPage />
      </>
    ),
    contact: (
      <>
        <Header />
        <ContactPage />
      </>
    ),
  };

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <CheckerBanner />
      {standalonePages[route]}
      <LogoBanner />
      <Contact />
      <FloatingCTA />
    </main>
  );
}

function HomePage() {
  useHomeAnchorScroll();
  return (
    <>
      <Header />
      <Hero />
      <TextMarquee />
      <InstagramCTA />
      <About />
      <Menu />
      <OurPies />
      <EventsTeaser />
      <Gallery />
      <LogoBanner />
      <Contact />
      <FloatingCTA />
    </>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header fixed inset-x-0 top-[1.5rem] z-50 border-b border-tomato/20 bg-cream/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="font-serif text-base font-black uppercase leading-none tracking-wide text-tomato sm:text-xl">
          Disco Dough Pizza Co.
        </a>
        <nav className="hidden items-center gap-6 text-[11px] font-black uppercase tracking-[0.18em] text-tomato lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="rounded-full bg-tomato px-4 py-2.5 font-serif text-sm font-semibold tracking-normal text-cream shadow-soft transition hover:bg-ink sm:px-5">
            Book an Event
          </a>
          <button
            type="button"
            className={`nav-toggle lg:hidden ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className={`nav-mobile lg:hidden ${menuOpen ? "is-open" : ""}`}
        style={{ maxHeight: menuOpen ? "80vh" : 0, opacity: menuOpen ? 1 : 0 }}
        aria-label="Primary"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const imgRef = useRef(null);

  // Subtle parallax: pan objectPosition as user scrolls, revealing more of the image
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let rafId;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!imgRef.current) return;
        const pct = Math.min(70, 50 + window.scrollY * 0.015);
        imgRef.current.style.objectPosition = `center ${pct}%`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] border-b-2 border-tomato/25 pt-[7.5rem]">
      <div className="absolute inset-0 grain opacity-70" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex w-full min-w-0 max-w-full flex-col items-center justify-center text-center">
          <h1 className="sr-only">
            Disco Dough Pizza Co. — premium sourdough pizza catering and pop-ups in Austin, Texas
          </h1>
          <TextMarquee phrases={eyebrowPhrases} durationSec={26} variant="eyebrow" />
          <div className="hero-logo">
            <img className="hero-logo-img" src={logoNoO} alt="Disco Dough Pizza Co. est. 2026" />
            <img className="hero-logo-ball" src={logoOBall} alt="" aria-hidden="true" />
          </div>
          <div className="hero-intro-copy mx-auto max-w-2xl text-center">
            <p className="hero-lede">NY Inspired.<br />Austin Made.</p>
            <p className="hero-subcopy">Premium sourdough pizza catering &amp; pop-ups — handmade in Austin for weddings, celebrations, and gatherings.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="hero-text-cta cta-button cta-button--filled rounded-full px-7 py-4 text-center font-serif text-lg font-semibold tracking-normal shadow-soft">
              Book an Event
            </a>
            <a href={EVENTS_ROUTE} className="cta-button cta-button--outline rounded-full border-2 border-tomato px-7 py-4 text-center font-serif text-lg font-semibold tracking-normal text-tomato transition hover:-translate-y-0.5 hover:bg-tomato hover:text-cream">
              Explore Events
            </a>
          </div>
          <div className="hero-links" aria-label="Disco Dough Pizza Co. contact links">
            <a className="cta-button cta-button--outline" href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
            <a className="cta-button cta-button--outline" href={EMAIL}>Email</a>
            <a className="cta-button cta-button--outline" href={CALENDLY} target="_blank" rel="noreferrer">Schedule a Consultation</a>
          </div>
        </div>
        <div className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame hero-contained-zoom hero-photo overflow-hidden rounded-[2rem] border border-tomato/20 bg-cream shadow-card">
          <img ref={imgRef} src={heroImage.src} alt={heroImage.alt} className="h-full w-full object-cover object-center" />
        </div>
      </div>
    </section>
  );
}

function About() {
  const primaryTilt = useTilt();
  const secondaryTilt = useTilt();

  return (
    <section id="about" className="section">
      <div className="about-layout">
        <div className="about-copy">
          <SectionLabel>About Disco Dough Pizza Co.</SectionLabel>
          <h2 className="section-title section-title--editorial">Built from family nights and a hot pizza on the table.</h2>
          <p className="copy copy-lead mt-6">
            For Cayla and Branden, the best nights always started with a hot pizza on the table. Disco Dough grew out of their Austin apartment — an obsession with fermentation, dough craft, and hospitality, built for the city that treated them like home.
          </p>
          <a href={ABOUT_ROUTE} className="section-more-link">Read our story →</a>
        </div>
        <div className="about-side">
          <div className="about-photos" aria-label="Cayla and Branden with Disco Dough pizzas in Austin">
            <figure
              ref={primaryTilt.ref}
              onMouseMove={primaryTilt.onMouseMove}
              onMouseLeave={primaryTilt.onMouseLeave}
              className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-card-lift photo-tile photo-contain contained-image-zoom about-photo about-photo--primary"
            >
              <div className="ph-media"><img src={caylaPhoto.src} alt={caylaPhoto.alt} loading="lazy" decoding="async" /></div>
            </figure>
            <figure
              ref={secondaryTilt.ref}
              onMouseMove={secondaryTilt.onMouseMove}
              onMouseLeave={secondaryTilt.onMouseLeave}
              className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-card-lift photo-tile photo-contain contained-image-zoom about-photo about-photo--secondary"
            >
              <div className="ph-media"><img src={brandenPhoto.src} alt={brandenPhoto.alt} loading="lazy" decoding="async" /></div>
            </figure>
          </div>
          <div className="interactive-lift interactive-box-zoom unified-premium-glow community-card">
            <div className="community-card__rule" aria-hidden="true">
              <Star />
              <span />
              <Star />
            </div>
            <h3>Community First</h3>
            <p>
              Disco Dough was built to give back to the city that welcomed us. As we grow, we're investing in community pizza nights, food bank partnerships, and zero-waste service so great pies never go to waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuSection({ section }) {
  return (
    <div className="menu-section">
      <h3>
        {section.icon ? <img src={section.icon} alt="" aria-hidden="true" loading="lazy" decoding="async" className="menu-section-icon" /> : null}
        {section.title}
      </h3>
      {section.subtitle ? <p className="menu-section-subtitle">{section.subtitle}</p> : null}
      {section.note ? <p className="menu-section-note">{section.note}</p> : null}
      <div className={`menu-list ${section.layout === "grid" ? "menu-list--grid" : ""}`}>
        {section.items.map((item) => (
          <div className="menu-item" key={item.name}>
            <div className="menu-row">
              <span>{item.name}</span>
              <i aria-hidden="true" />
              <strong>
                {item.prices.map((price) => (
                  <span key={price}>{price}</span>
                ))}
              </strong>
            </div>
            {item.description ? <p className="menu-item-description">{item.description}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuCard() {
  return (
    <div className="menu-card">
      <div className="menu-header">
        <p><span className="menu-kicker-star" aria-hidden="true">✦</span> Disco Dough Pizza Co. <span className="menu-kicker-star" aria-hidden="true">✦</span></p>
        <h2>Our Menu</h2>
        <span>Austin, Texas</span>
      </div>
      <div className="menu-sections">
        <MenuSection section={pizzaMenu} />
        {menuSections.map((section, index) => (
          <MenuSection section={section} key={`${section.title}-${section.subtitle ?? index}`} />
        ))}
      </div>
      <div className="menu-footer">
        <p>72 hour cold sourdough ferment</p>
        <span>Hand tossed and stretched after a two hour bench proof for an ideal crumb, mature chew, and light airy structure.</span>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <section id="menu" className="section border-y-2 border-tomato/25 bg-cream">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>Menu</SectionLabel>
        <MenuCard />
        <div className="text-center">
          <a href={MENU_ROUTE} className="section-more-link">View the full menu page →</a>
        </div>
      </div>
    </section>
  );
}

const pieDetails = [
  { title: "Hand tossed and folded dough", icon: illDough },
  { title: "Well done and spotted char undercarriage", icon: illChar },
  { title: "Hand milled San Marzano tomatoes", icon: illTomato },
  { title: "Charred crust with mature chew and crisp", icon: illSlice },
  { title: "72 hour cold sourdough ferment", icon: illFerment },
  { title: "Blistered perimeter and light crumb", icon: illCrumb },
];

function OurPies() {
  return (
    <section id="our-pies" className="section">
      <SectionLabel>Our pies</SectionLabel>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="section-title section-title--small">72-hour sourdough, hand-stretched into a deep golden, foldable New York pie.</h2>
          <p className="copy copy-lead mt-6">
            Every dough batch starts with a three-flour blend built for crispness, chew, and structure.
          </p>
          <p className="copy mt-5">
            It folds when you want it to, holds when you need it to, and eats like something made by hand.
          </p>
          <a href={OUR_PIES_ROUTE} className="section-more-link">More on our dough &amp; craft →</a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {pieDetails.map((detail) => (
            <div key={detail.title} className="interactive-lift interactive-card-lift interactive-box-zoom unified-premium-glow feature-card rounded-3xl border border-tomato/15 bg-[#fffaf0] px-5 py-3.5 shadow-soft">
              {detail.icon ? <img src={detail.icon} alt="" aria-hidden="true" loading="lazy" decoding="async" className="feature-card-illu" /> : null}
              <p className="feature-card-title">{detail.title}</p>
            </div>
          ))}
          <div className="interactive-lift interactive-card-lift interactive-box-zoom unified-premium-glow motion-box ferment-card sm:col-span-2">
            <p>3 flour blend</p>
            <span>00 flour, bolted flour, and whole wheat come together for deeper flavor, stronger structure, better browning, and crisp edges with airy chew.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Home-page teaser that points to the full Events page
function EventsTeaser() {
  return (
    <section id="events" className="section bg-blush">
      <div className="events-teaser">
        <figure className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-frame photo-contain contained-image-zoom events-teaser-photo">
          <div className="ph-media"><img src={evtFounders} alt="Cayla and Branden hosting a Disco Dough catering event in Austin" loading="lazy" decoding="async" /></div>
        </figure>
        <div className="events-teaser-copy">
          <SectionLabel>Catering &amp; Events</SectionLabel>
          <h2 className="section-title section-title--editorial">Pizza as the centerpiece of your celebration.</h2>
          <p className="copy mt-6">
            From weddings to backyard birthdays, Disco Dough brings a live, oven-side pizza experience to your gathering — handmade, hospitable, and built around your guests.
          </p>
          <div className="event-links">
            <a href={EVENTS_ROUTE}>Explore Events →</a>
            <a href={CALENDLY} target="_blank" rel="noreferrer">Schedule a Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section border-y-2 border-tomato/25 bg-cream">
      <div className="gallery-intro">
        <div>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="gallery-title section-title">Warm boxes, crisp edges, handmade details.</h2>
        </div>
        <div className="max-w-lg">
          <p className="text-base font-normal leading-8 text-brown">
            Handmade in Austin with locally sourced ingredients whenever possible — a small Texas business built around family, community, and long-fermented dough.
          </p>
          <a href={GALLERY_ROUTE} className="section-more-link">See the full gallery →</a>
        </div>
      </div>
      <PhotoGrid images={galleryImages} positionClasses={galleryPositionClasses} />
    </section>
  );
}

// ---------- Events page ----------

function EventsHeader() {
  return (
    <header className="site-header fixed inset-x-0 top-[1.5rem] z-50 border-b border-tomato/20 bg-cream/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="font-serif text-base font-black uppercase leading-none tracking-wide text-tomato sm:text-xl">
          Disco Dough Pizza Co.
        </a>
        <nav className="hidden items-center gap-6 text-[11px] font-black uppercase tracking-[0.18em] text-tomato lg:flex">
          <a href="/" className="transition hover:text-ink">← Back to site</a>
          <a href={eventSectionHref("occasions")} className="transition hover:text-ink">Occasions</a>
          <a href={eventSectionHref("event-gallery")} className="transition hover:text-ink">Gallery</a>
          <a href={eventSectionHref("book")} className="transition hover:text-ink">Book</a>
        </nav>
        <a href={CALENDLY} target="_blank" rel="noreferrer" className="rounded-full bg-tomato px-4 py-2.5 font-serif text-sm font-semibold tracking-normal text-cream shadow-soft transition hover:bg-ink sm:px-5">
          Book an Event
        </a>
      </div>
    </header>
  );
}

function EventsPage() {
  useEffect(() => {
    const scrollFromRoute = () => {
      const section = window.location.hash.slice(1);
      if (!section) {
        // "instant", not "auto" — the page sets `scroll-behavior: smooth`
        // globally, so "auto" would animate this instead of jumping.
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }

      window.requestAnimationFrame(() => {
        document.getElementById(section)?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
          block: "start",
        });
      });
    };

    scrollFromRoute();
    window.addEventListener("popstate", scrollFromRoute);
    return () => window.removeEventListener("popstate", scrollFromRoute);
  }, []);

  return (
    <div className="events-page">
      {/* Hero */}
      <section className="events-hero">
        <div className="absolute inset-0 grain opacity-60" />
        <div className="events-hero-inner">
          <div className="events-hero-copy">
            <SectionLabel>Private Catering &amp; Events</SectionLabel>
            <h1 className="section-title section-title--small">Catering &amp; Private Events</h1>
            <p className="copy mt-6">
              A live, sourdough pizza experience — crafted oven-side for weddings, milestone celebrations, and the moments worth gathering for. Premium hospitality, made by hand, served hot.
            </p>
            <div className="event-links">
              <a href={eventSectionHref("book")}>Plan Your Event →</a>
              <a href={CALENDLY} target="_blank" rel="noreferrer">Schedule a Consultation</a>
            </div>
          </div>
          <figure className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-frame photo-contain contained-image-zoom events-hero-photo">
            <div className="ph-media"><img src={evtVenue} alt="Disco Dough catering setup at a limestone Austin venue" loading="eager" decoding="async" /></div>
          </figure>
        </div>
      </section>

      <TextMarquee phrases={eventTypes} durationSec={70} rounded />

      {/* Occasions */}
      <section id="occasions" className="section">
        <div className="text-center">
          <SectionLabel>Made for the moments that matter</SectionLabel>
          <h2 className="section-title section-title--small mx-auto">Hosted with intention.</h2>
        </div>
        <div className="occasion-grid">
          {occasions.map((o) => (
            <div key={o.title} className="interactive-lift interactive-box-zoom unified-premium-glow occasion-card">
              <div className="occasion-card__rule" aria-hidden="true"><Star /><span /></div>
              <h3>{o.title}</h3>
              <p>{o.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Looping clips */}
      <section className="section border-y-2 border-tomato/25 bg-blush">
        <div className="text-center">
          <SectionLabel>In motion</SectionLabel>
          <h2 className="section-title section-title--small mx-auto">An experience, not just a meal.</h2>
        </div>
        <div className="loop-grid">
          {eventLoops.map((clip) => (
            <figure key={clip.src} className="interactive-lift interactive-box-zoom unified-premium-glow loop-card">
              <video
                className="loop-video"
                src={clip.src}
                poster={clip.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
              <figcaption>{clip.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* The experience */}
      <section className="section">
        <div className="experience-layout">
          <div>
            <SectionLabel>The Experience</SectionLabel>
            <h2 className="section-title section-title--editorial">An experiential approach to hospitality.</h2>
            <p className="copy mt-6">
              We bring guests into the process — live dough stretching, oven-side preparation, and tableside storytelling with our pizzaiolos. From fermentation to bake, every service is personal, memorable, and deeply human.
            </p>
            <p className="copy mt-5">
              Indoor or outdoor, intimate or grand, we tailor each event to your space, your guest count, and your story.
            </p>
          </div>
          <figure className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-frame photo-contain contained-image-zoom experience-photo">
            <div className="ph-media"><img src={evtCourtyard} alt="Disco Dough pizza table in a garden courtyard in Austin" loading="lazy" decoding="async" /></div>
          </figure>
        </div>
      </section>

      {/* Gallery */}
      <section id="event-gallery" className="section border-t-2 border-tomato/25 bg-cream">
        <div className="gallery-intro">
          <div>
            <SectionLabel>Event Gallery</SectionLabel>
            <h2 className="gallery-title section-title">From our tables to yours.</h2>
          </div>
          <p className="max-w-lg text-base font-normal leading-8 text-brown">
            Real Disco Dough events around Austin — full spreads, charred crusts, and the kind of hospitality that turns a gathering into a memory.
          </p>
        </div>
        <PhotoGrid images={eventGallery} />
      </section>

      {/* Booking CTA */}
      <section id="book" className="section">
        <div className="book-cta">
          <div className="community-card__rule" aria-hidden="true"><Star /><span /><Star /></div>
          <h2 className="section-title section-title--small">Let's plan your event.</h2>
          <p className="copy mx-auto mt-5">
            Tell us about your celebration and we'll build a menu and experience around it.
          </p>
          <div className="book-cta-actions">
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="rounded-full bg-tomato px-7 py-4 font-serif text-lg font-semibold text-cream shadow-soft transition hover:bg-ink">
              Schedule a Consultation
            </a>
            <a href={EMAIL} className="rounded-full border-2 border-tomato px-7 py-4 font-serif text-lg font-semibold text-tomato transition hover:bg-tomato hover:text-cream">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------- Standalone pages (About / Menu / Our Pies / Gallery / Contact) ----------

function AboutPage() {
  useScrollTopOnRoute();
  const primaryTilt = useTilt();
  const secondaryTilt = useTilt();

  return (
    <div className="standalone-page">
      <section className="events-hero">
        <div className="absolute inset-0 grain opacity-60" />
        <div className="events-hero-inner">
          <div className="events-hero-copy">
            <SectionLabel>About Disco Dough Pizza Co.</SectionLabel>
            <h1 className="section-title section-title--small">Built from family nights and a hot pizza on the table.</h1>
            <p className="copy mt-6">
              For Cayla and Branden, the best nights always started with a hot pizza on the table. Disco Dough grew out of their Austin apartment — an obsession with fermentation, dough craft, and hospitality, built for the city that treated them like home.
            </p>
            <div className="event-links">
              <a href={EVENTS_ROUTE}>Explore Events →</a>
              <a href={CALENDLY} target="_blank" rel="noreferrer">Schedule a Consultation</a>
            </div>
          </div>
          <figure className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-frame photo-contain contained-image-zoom events-hero-photo">
            <div className="ph-media"><img src={caylaPhoto.src} alt={caylaPhoto.alt} loading="eager" decoding="async" /></div>
          </figure>
        </div>
      </section>

      <section className="section">
        <SectionLabel>How we got here</SectionLabel>
        <h2 className="section-title section-title--small">NY inspired, Austin made.</h2>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start mt-8">
          <p className="copy copy-lead">
            Disco Dough started small — a home oven, a stack of takeout boxes, and a habit of feeding anyone who walked through the door. That habit turned into an obsession with fermentation and dough craft that neither of them could put down.
          </p>
          <p className="copy">
            Every pie still starts the same way it did back then: a three-flour sourdough blend, a 72-hour cold ferment, hand tossed and stretched to order. Now it travels — live, oven-side, to weddings, celebrations, and gatherings all over Austin.
          </p>
        </div>
        <div className="about-photos mt-12" aria-label="Cayla and Branden with Disco Dough pizzas in Austin">
          <figure
            ref={primaryTilt.ref}
            onMouseMove={primaryTilt.onMouseMove}
            onMouseLeave={primaryTilt.onMouseLeave}
            className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-card-lift photo-tile photo-contain contained-image-zoom about-photo about-photo--primary"
          >
            <div className="ph-media"><img src={caylaPhoto.src} alt={caylaPhoto.alt} loading="lazy" decoding="async" /></div>
          </figure>
          <figure
            ref={secondaryTilt.ref}
            onMouseMove={secondaryTilt.onMouseMove}
            onMouseLeave={secondaryTilt.onMouseLeave}
            className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-card-lift photo-tile photo-contain contained-image-zoom about-photo about-photo--secondary"
          >
            <div className="ph-media"><img src={brandenPhoto.src} alt={brandenPhoto.alt} loading="lazy" decoding="async" /></div>
          </figure>
        </div>
      </section>

      <section className="section border-t-2 border-tomato/25 bg-blush">
        <div className="text-center">
          <SectionLabel>What we believe</SectionLabel>
          <h2 className="section-title section-title--small mx-auto">Hospitality first, always.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto mt-10">
          <div className="interactive-lift interactive-box-zoom unified-premium-glow community-card">
            <div className="community-card__rule" aria-hidden="true"><Star /><span /><Star /></div>
            <h3>Community First</h3>
            <p>
              Disco Dough was built to give back to the city that welcomed us. As we grow, we're investing in community pizza nights, food bank partnerships, and zero-waste service so great pies never go to waste.
            </p>
          </div>
          <div className="interactive-lift interactive-box-zoom unified-premium-glow community-card">
            <div className="community-card__rule" aria-hidden="true"><Star /><span /><Star /></div>
            <h3>Made By Hand</h3>
            <p>
              Every pie is hand tossed and stretched to order after a 72 hour cold ferment — no shortcuts, no par-baked crusts. Just a three-flour blend, real fire, and a pizzaiolo who's there in person, every time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function MenuPage() {
  useScrollTopOnRoute();
  return (
    <div className="standalone-page">
      <section className="events-hero">
        <div className="absolute inset-0 grain opacity-60" />
        <div className="events-hero-inner">
          <div className="events-hero-copy">
            <SectionLabel>Menu</SectionLabel>
            <h1 className="section-title section-title--small">New York style, made to order.</h1>
            <p className="copy mt-6">
              Hand tossed and topped your way, finished with a mini cookie pie. Custom menus are available for weddings, private events, and pop-ups — just tell us the headcount and occasion.
            </p>
            <div className="event-links">
              <a href={EVENTS_ROUTE}>Explore Events →</a>
              <a href={CALENDLY} target="_blank" rel="noreferrer">Schedule a Consultation</a>
            </div>
          </div>
          <figure className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-frame photo-contain contained-image-zoom events-hero-photo">
            <div className="ph-media"><img src={tomatoPie} alt="Disco Dough sourdough tomato stracciatella pie" loading="eager" decoding="async" /></div>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-5xl">
          <MenuCard />
        </div>
      </section>

      <section className="section border-t-2 border-tomato/25 bg-blush">
        <div className="text-center">
          <SectionLabel>Ingredients &amp; craft</SectionLabel>
          <h2 className="section-title section-title--small mx-auto">What goes into every pie.</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pieDetails.map((detail) => (
            <div key={detail.title} className="interactive-lift interactive-card-lift interactive-box-zoom unified-premium-glow feature-card rounded-3xl border border-tomato/15 bg-[#fffaf0] px-5 py-3.5 shadow-soft">
              {detail.icon ? <img src={detail.icon} alt="" aria-hidden="true" loading="lazy" decoding="async" className="feature-card-illu" /> : null}
              <p className="feature-card-title">{detail.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function OurPiesPage() {
  useScrollTopOnRoute();
  return (
    <div className="standalone-page">
      <section className="events-hero">
        <div className="absolute inset-0 grain opacity-60" />
        <div className="events-hero-inner">
          <div className="events-hero-copy">
            <SectionLabel>Our pies</SectionLabel>
            <h1 className="section-title section-title--small">72-hour sourdough, hand-stretched into a deep golden, foldable New York pie.</h1>
            <p className="copy mt-6">
              Every dough batch starts with a three-flour blend built for crispness, chew, and structure. It folds when you want it to, holds when you need it to, and eats like something made by hand.
            </p>
            <div className="event-links">
              <a href={MENU_ROUTE}>See the Menu →</a>
              <a href={CALENDLY} target="_blank" rel="noreferrer">Schedule a Consultation</a>
            </div>
          </div>
          <figure className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-frame photo-contain contained-image-zoom events-hero-photo">
            <div className="ph-media"><img src={hotHoneyPie} alt="Disco Dough sourdough hot honey pepperoni pie" loading="eager" decoding="async" /></div>
          </figure>
        </div>
      </section>

      <section className="section">
        <SectionLabel>The dough</SectionLabel>
        <h2 className="section-title section-title--small">Six details in every pie.</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {pieDetails.map((detail) => (
            <div key={detail.title} className="interactive-lift interactive-card-lift interactive-box-zoom unified-premium-glow feature-card rounded-3xl border border-tomato/15 bg-[#fffaf0] px-5 py-3.5 shadow-soft">
              {detail.icon ? <img src={detail.icon} alt="" aria-hidden="true" loading="lazy" decoding="async" className="feature-card-illu" /> : null}
              <p className="feature-card-title">{detail.title}</p>
            </div>
          ))}
          <div className="interactive-lift interactive-card-lift interactive-box-zoom unified-premium-glow motion-box ferment-card sm:col-span-2 lg:col-span-3">
            <p>3 flour blend</p>
            <span>00 flour, bolted flour, and whole wheat come together for deeper flavor, stronger structure, better browning, and crisp edges with airy chew.</span>
          </div>
        </div>
      </section>

      <section className="section border-t-2 border-tomato/25 bg-blush">
        <div className="text-center">
          <SectionLabel>The sourdough difference</SectionLabel>
          <h2 className="section-title section-title--small mx-auto">Craft NY, done right.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto mt-10">
          <div className="interactive-lift interactive-box-zoom unified-premium-glow community-card">
            <div className="community-card__rule" aria-hidden="true"><Star /><span /><Star /></div>
            <h3>72-Hour Sourdough</h3>
            <p>
              Naturally leavened, cold fermented for 72 hours — no commercial yeast, ever. It's what gives the crust its depth, its chew, and a crumb you can't rush.
            </p>
          </div>
          <div className="interactive-lift interactive-box-zoom unified-premium-glow community-card">
            <div className="community-card__rule" aria-hidden="true"><Star /><span /><Star /></div>
            <h3>New York, Done Right</h3>
            <p>
              Hand-stretched to 14–17", thin and foldable, fired to a deep golden crackle. San Marzano tomatoes, mozzarella, Pecorino Romano, Parmesan, and Sicilian extra virgin olive oil — every single time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function GalleryPage() {
  useScrollTopOnRoute();
  return (
    <div className="standalone-page">
      <section className="section" style={{ paddingTop: "clamp(6.5rem, 12vw, 8.5rem)" }}>
        <div className="gallery-intro">
          <div>
            <SectionLabel>Gallery</SectionLabel>
            <h1 className="gallery-title section-title">Warm boxes, crisp edges, handmade details.</h1>
          </div>
          <p className="max-w-lg text-base font-normal leading-8 text-brown">
            Every real Disco Dough pie, pop-up, and private event in one place — handmade in Austin with locally sourced ingredients whenever possible.
          </p>
        </div>
        <PhotoGrid images={fullGalleryImages} />
      </section>
    </div>
  );
}

function ContactPage() {
  useScrollTopOnRoute();
  return (
    <div className="standalone-page">
      <section className="events-hero">
        <div className="absolute inset-0 grain opacity-60" />
        <div className="events-hero-inner">
          <div className="events-hero-copy">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="section-title section-title--small">Let's talk pizza.</h1>
            <p className="copy mt-6">
              Planning a wedding, birthday, or backyard hang? Have a general question? Just want to see what's next? Here's the fastest way to reach us for each.
            </p>
          </div>
          <figure className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-frame photo-contain contained-image-zoom events-hero-photo">
            <div className="ph-media"><img src={evtFounders} alt="Cayla and Branden behind a full Disco Dough catering spread" loading="eager" decoding="async" /></div>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="occasion-grid">
          <div className="interactive-lift interactive-box-zoom unified-premium-glow occasion-card">
            <div className="occasion-card__rule" aria-hidden="true"><Star /><span /></div>
            <h3>Plan an Event</h3>
            <p>Weddings, birthdays, showers, corporate dinners — schedule a consultation and we'll build a menu around your gathering.</p>
            <a href={CALENDLY} target="_blank" rel="noreferrer" className="section-more-link">Schedule a consultation →</a>
          </div>
          <div className="interactive-lift interactive-box-zoom unified-premium-glow occasion-card">
            <div className="occasion-card__rule" aria-hidden="true"><Star /><span /></div>
            <h3>General Questions</h3>
            <p>Menu questions, dietary needs, anything else — email is the best way to reach us directly.</p>
            <a href={EMAIL} className="section-more-link" style={{ overflowWrap: "anywhere" }}>Discodoughpizzaco@outlook.com</a>
          </div>
          <div className="interactive-lift interactive-box-zoom unified-premium-glow occasion-card">
            <div className="occasion-card__rule" aria-hidden="true"><Star /><span /></div>
            <h3>Follow Along</h3>
            <p>Behind-the-scenes dough, live catering setups, and Austin pizza moments — follow along between events.</p>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="section-more-link">@discodoughpizzaco on Instagram →</a>
          </div>
          <div className="interactive-lift interactive-box-zoom unified-premium-glow occasion-card">
            <div className="occasion-card__rule" aria-hidden="true"><Star /><span /></div>
            <h3>See It In Motion</h3>
            <p>Oven-side clips, fresh-from-the-box shots, and live fire — the same moments, in short-form video.</p>
            <a href={TIKTOK} target="_blank" rel="noreferrer" className="section-more-link">@discodoughpizzaco on TikTok →</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <footer id="contact" className="relative bg-tomato px-4 py-16 text-cream sm:px-6 lg:px-8">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div className="min-w-0">
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em]">
            <Star />
            <span>Austin, Texas</span>
          </div>
          {/* clamp min reduced from 3.5rem→2rem so 13vw applies on phones (48px at 375px) */}
          <h2 className="mt-6 font-serif text-[clamp(2rem,13vw,8.5rem)] font-black uppercase leading-[0.8] tracking-normal">
            Disco Dough Pizza Co.
          </h2>
          <a href={CONTACT_ROUTE} className="mt-4 inline-flex items-center gap-1.5 text-sm font-black uppercase tracking-[0.14em] text-cream/80 underline decoration-cream/40 underline-offset-4 transition hover:text-cream">
            Full contact page →
          </a>
        </div>
        <div className="min-w-0 interactive-lift interactive-box-zoom unified-premium-glow motion-box contact-panel contact-card rounded-[2rem] border-2 p-6">
          <p className="text-sm font-black uppercase tracking-[0.2em]">Plan your event</p>
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="mt-2 block font-serif text-xl font-black text-cream sm:text-3xl">Schedule a consultation</a>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.2em]">Email</p>
          <a href={EMAIL} className="mt-2 block font-serif text-base font-black text-cream sm:text-2xl" style={{ overflowWrap: "anywhere" }}>Discodoughpizzaco@outlook.com</a>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.2em]">Instagram</p>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-2 block font-serif text-xl font-black text-cream sm:text-3xl">@discodoughpizzaco</a>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.2em]">TikTok</p>
          <a href={TIKTOK} target="_blank" rel="noreferrer" className="mt-2 block font-serif text-xl font-black text-cream sm:text-3xl">@discodoughpizzaco</a>
        </div>
        <div className="footer-legal lg:col-span-2">
          <span>© 2026 Disco Dough Pizza Co.</span>
          <span aria-hidden="true">·</span>
          <span>Small-batch sourdough, handmade in Austin, TX</span>
        </div>
      </div>
    </footer>
  );
}

export default App;
