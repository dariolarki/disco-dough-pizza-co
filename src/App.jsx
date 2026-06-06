import { useState } from "react";
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
import dubaiCookiePieTwo from "../images/Dubai Cookie Pie 2.0.jpeg";
import hotHoneyPepFour from "../images/Hot Honey Pep 4.0.jpeg";
import stracciatellaCheesePie from "../images/Stracciatella Cheese Pie.jpeg";
import img6318 from "../images/IMG_6318.jpeg";
import img6324 from "../images/IMG_6324.jpeg";
import img6364 from "../images/IMG_6364.jpeg";
import img6722 from "../images/IMG_6722.jpg";
import imgProcess from "../images/IMG_E6D657F1-1E7C-4350-9B2A-81AB8E046D75.JPEG";
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
import privateEventsPhoto from "../images/Capital Peel and Pizza photo.jpeg";

const images = [
  { src: heroPizza, alt: "Disco Dough pizza held in front of the Austin skyline" },
  { src: caylaPizza, alt: "Cayla holding a tomato stracciatella pie in Austin" },
  { src: brandenPizza, alt: "Branden holding a hot honey pepperoni pie in Austin" },
  { src: skylineBack, alt: "Disco Dough pizza with the Texas Capitol skyline behind it" },
  { src: successionShot, alt: "Disco Dough pizza box on the Capitol lawn" },
  { src: wieldingPeels, alt: "Disco Dough founders carrying pizza peels in Austin" },
  { src: cheesePie, alt: "Disco Dough sourdough cheese pie" },
  { src: hotHoneyPie, alt: "Disco Dough sourdough hot honey pepperoni pie" },
  { src: tomatoPie, alt: "Disco Dough sourdough tomato stracciatella pie" },
  { src: cheesePieNew, alt: "Disco Dough cheese pie" },
  { src: dubaiAndCheesePie, alt: "Disco Dough Dubai cookie pie and cheese pie" },
  { src: dubaiCookiePieDouble, alt: "Two Disco Dough Dubai cookie pies" },
  { src: dubaiCookiePieThree, alt: "Disco Dough Dubai cookie pie" },
  { src: hotHoneyPepTwo, alt: "Disco Dough hot honey pepperoni pie" },
  { src: chocolateChipCookieOven, alt: "Disco Dough chocolate chip cookie pie in the oven" },
  { src: dubaiCookiePieTwo, alt: "Disco Dough Dubai cookie pie" },
  { src: hotHoneyPepFour, alt: "Disco Dough hot honey pepperoni pie with charred crust" },
  { src: stracciatellaCheesePie, alt: "Disco Dough stracciatella cheese pie" },
  { src: img6318, alt: "Freshly baked Disco Dough pizza with crisp edges" },
  { src: img6324, alt: "Handmade pizza with basil and tomato" },
  { src: img6364, alt: "Sourdough pizza with leopard-spotted char" },
  { src: img6722, alt: "Disco Dough process and warm kitchen detail" },
  { src: imgProcess, alt: "Austin sourdough pizza slice with structure" },
  { src: grandmaCheesePie, alt: "Disco Dough grandma cheese pie" },
];

const navItems = ["About", "Menu", "Our Pies", "Pizza Drops", "Gallery", "Private Events", "Contact"];

const menuSections = [
  {
    title: "Pies",
    icon: pizzaAsset,
    items: [
      { name: "Cheese Pie", prices: ["$16 / $5"] },
      { name: "Tomato Stracciatella Pie", prices: ["$18 / $5.50"] },
      { name: "Hot Honey Pep Pie", prices: ["$22 / $6.50"] },
      { name: "Spicy Vodka Calabrian Pie", prices: ["$26 / $7"] },
    ],
  },
  {
    title: "Desserts",
    icon: mirrorBall,
    items: [
      { name: "Chocolate Chip Cookie Pie", prices: ["$14 / $3.50"] },
      { name: "German Chocolate Cookie Pie", prices: ["$16 / $5"] },
      { name: "Dubai Chocolate Chip Cookie Pie", prices: ["$17 / $5.50"] },
    ],
  },
  {
    title: "Sides",
    icon: pizzaBox,
    items: [{ name: "Garlic Knots", prices: ["$11"] }],
  },
  {
    title: "Drinks",
    icon: bridgeAsset,
    items: [{ name: "Strawberry Basil Lemonade", prices: ["$6"] }],
  },
];

const dropItems = [
  { name: "Spicy Vodka Calabrian Pie" },
  { name: "Hot Honey Pep Pie" },
  { name: "Tomato Stracciatella Pie" },
  { name: "Cheese Pie" },
  { name: "Chocolate Chip Cookie Pie" },
  { name: "Dubai Chocolate Chip Cookie Pie" },
  { name: "German Chocolate Cookie Pie" },
  { name: "Garlic Knots" },
];

const galleryImages = [
  images[3],
  images[1],
  images[4],
  images[5],
  images[6],
  images[7],
  images[8],
  images[9],
  images[13],
  images[16],
  images[23],
  images[18],
  images[10],
  images[14],
  images[12],
  images[11],
];

const galleryPositionClasses = {
  8: "gallery-position-down-30",
};

const eventTypes = [
  "Weddings",
  "Birthdays",
  "Backyard hangs",
  "Creative studio nights",
  "Family gatherings",
  "Girls nights",
  "Pizza making & eating sessions",
  "Hibachi-style pizza making",
  "Austin community events",
  "Superbowl parties",
  "Tailgates",
  "Bridal showers",
  "Baby showers",
  "Bachelorette parties",
  "4th of July parties",
  "Indoor dinner parties",
];

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
  const items = [...bannerAssets, ...bannerAssets];
  return (
    <div className="logo-banner" aria-hidden="true">
      <div className="logo-banner-track">
        {items.map((item, i) => (
          <span key={i} className="logo-banner-cell">
            <img src={item.src} alt={item.alt} className="logo-banner-item" />
            <span className="logo-banner-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const tickerPhrases = [
  "Fresh Sourdough Drops",
  "Fri · Sat · Sun",
  "Text to Order",
  "Handmade in Austin",
  "72-Hour Cold Ferment",
  "Leopard-Spotted Char",
];

const eyebrowPhrases = [
  "Disco Dough Pizza Co.",
  "Austin, Texas",
  "Disco Dough Pizza Co.",
  "Austin, Texas",
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

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <CheckerBanner />
      <Header />
      <Hero />
      <TextMarquee />
      <About />
      <Menu />
      <OurPies />
      <PizzaDrops />
      <Gallery />
      <PrivateEvents />
      <LogoBanner />
      <Contact />
    </main>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-[3rem] z-50 border-b border-tomato/20 bg-cream/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" className="font-serif text-base font-black uppercase leading-none tracking-wide text-tomato sm:text-xl">
          Disco Dough Pizza Co.
        </a>
        <nav className="hidden items-center gap-6 text-[11px] font-black uppercase tracking-[0.18em] text-tomato lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-ink">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href="sms:5035167759" className="rounded-full bg-tomato px-4 py-2.5 font-serif text-sm font-semibold tracking-normal text-cream shadow-soft transition hover:bg-ink sm:px-5">
            Text to Order
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
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
            className="nav-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] border-b-2 border-tomato/25 pt-[9rem]">
      <div className="absolute inset-0 grain opacity-70" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex w-full min-w-0 max-w-full flex-col items-center justify-center text-center">
          <TextMarquee phrases={eyebrowPhrases} durationSec={26} variant="eyebrow" />
          <div className="hero-logo">
            <img className="hero-logo-img" src={logoNoO} alt="Disco Dough Pizza Co. est. 2026" />
            <img className="hero-logo-ball" src={logoOBall} alt="" aria-hidden="true" />
          </div>
          <div className="hero-intro-copy mx-auto max-w-2xl text-center">
            <p className="hero-lede">NY Inspired.<br />Austin Made.</p>
            <p className="hero-subcopy">Handmade in Austin, Texas.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="sms:5035167759" className="hero-text-cta cta-button cta-button--filled rounded-full px-7 py-4 text-center font-serif text-lg font-semibold tracking-normal shadow-soft">
              Text 503-516-7759
            </a>
            <a href="#pizza-drops" className="cta-button cta-button--outline rounded-full border-2 border-tomato px-7 py-4 text-center font-serif text-lg font-semibold tracking-normal text-tomato transition hover:-translate-y-0.5 hover:bg-tomato hover:text-cream">
              See Pizza Drops
            </a>
          </div>
          <div className="hero-links" aria-label="Disco Dough Pizza Co. contact links">
            <a className="cta-button cta-button--outline" href="https://www.instagram.com/discodoughpizzaco/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="cta-button cta-button--outline" href="mailto:Discodoughpizzaco@outlook.com">Email</a>
            <a className="cta-button cta-button--outline" href="https://calendly.com/Branden-Beyer" target="_blank" rel="noreferrer">Calendly - Schedule Event Consultation</a>
          </div>
        </div>
        <div className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame hero-contained-zoom hero-photo overflow-hidden rounded-[2rem] border border-tomato/20 bg-cream shadow-card">
          <img src={images[0].src} alt={images[0].alt} className="h-full w-full object-cover object-center" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="about-layout">
        <div className="about-copy">
          <SectionLabel>About Disco Dough Pizza Co.</SectionLabel>
          <h2 className="section-title section-title--editorial">Built from family nights and a hot pizza on the table.</h2>
          <p className="copy copy-lead mt-6">
            For Cayla and Branden, some of the best childhood memories started when Mom or Dad came home with pizza. The oven got preheated, everyone waited for the pie to crisp up, cartoons played, and somebody was always sneaking cookie dough before dinner was ready.
          </p>
          <p className="copy mt-5">
            Disco Dough Pizza Co. grew out of their Austin apartment from a genuine obsession with fermentation, dough craft, hospitality, and creating something meaningful together for the city that treated them like home.
          </p>
        </div>
        <div className="about-side">
          <div className="about-photos" aria-label="Cayla and Branden with Disco Dough pizzas in Austin">
            <figure className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-card-lift photo-tile photo-contain contained-image-zoom about-photo about-photo--primary">
              <div className="ph-media"><img src={images[1].src} alt={images[1].alt} /></div>
            </figure>
            <figure className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-card-lift photo-tile photo-contain contained-image-zoom about-photo about-photo--secondary">
              <div className="ph-media"><img src={images[2].src} alt={images[2].alt} /></div>
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
              Disco Dough was built to give back to the city that welcomed us. We believe pizza can be a bridge, a way to bring people together, create memorable moments, and make everyone feel like they have a seat at the table. As we grow, our goal is to support Austin through community pizza nights, food bank partnerships, and repurposing excess food so great pies never go to waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="section border-y-2 border-tomato/25 bg-cream">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>Menu</SectionLabel>
        <div className="menu-card">
          <div className="menu-header">
            <p><span className="menu-kicker-star" aria-hidden="true">✦</span> Disco Dough Pizza Co. <span className="menu-kicker-star" aria-hidden="true">✦</span></p>
            <h2>Our Menu</h2>
            <span>Austin, Texas</span>
          </div>
          <div className="menu-sections">
            {menuSections.map((section) => (
              <div className="menu-section" key={section.title}>
                <h3>
                  {section.icon ? <img src={section.icon} alt="" aria-hidden="true" className="menu-section-icon" /> : null}
                  {section.title}
                </h3>
                <div className="menu-list">
                  {section.items.map((item) => (
                    <div className="menu-row" key={item.name}>
                      <span>{item.name}</span>
                      <i aria-hidden="true" />
                      <strong>
                        {item.prices.map((price) => (
                          <span key={price}>{price}</span>
                        ))}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="menu-footer">
            <p>72 hour cold sourdough ferment</p>
            <span>Hand tossed and stretched after a two hour bench proof for an ideal crumb, mature chew, and light airy structure.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurPies() {
  const details = [
    { title: "Hand tossed and folded dough", icon: illDough },
    { title: "Well done and spotted char undercarriage", icon: illChar },
    { title: "Hand milled San Marzano tomatoes", icon: illTomato },
    { title: "Charred crust with mature chew and crisp", icon: illSlice },
    { title: "72 hour cold sourdough ferment", icon: illFerment },
    { title: "Blistered perimeter and light crumb", icon: illCrumb },
  ];
  return (
    <section id="our-pies" className="section">
      <SectionLabel>Our pies</SectionLabel>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="section-title section-title--small">A sourdough hybrid with New York structure and Neapolitan soul.</h2>
          <p className="copy copy-lead mt-6">
            Every dough batch starts with a three-flour blend built for crispness, chew, airy structure, browning, strength, and no-flop slices.
          </p>
          <p className="copy mt-5">
            The result is a pie that folds when you want it to, holds when you need it to, and eats like something made by hand.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {details.map((detail) => (
            <div key={detail.title} className="interactive-lift interactive-card-lift interactive-box-zoom unified-premium-glow feature-card rounded-3xl border border-tomato/15 bg-[#fffaf0] px-5 py-3.5 shadow-soft">
              {detail.icon ? <img src={detail.icon} alt="" aria-hidden="true" className="feature-card-illu" /> : null}
              <p className="feature-card-title">{detail.title}</p>
              {detail.copy ? <span className="feature-card-copy">{detail.copy}</span> : null}
            </div>
          ))}
          <div className="interactive-lift interactive-card-lift interactive-box-zoom unified-premium-glow motion-box ferment-card sm:col-span-2">
            <p>3 flour blend</p>
            <span>00 flour, bolted flour, and whole wheat come together to build deeper flavor, stronger structure, better browning, and a more mature dough with crisp edges, airy chew, and real slice support.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PizzaDrops() {
  return (
    <section id="pizza-drops" className="section border-y-2 border-tomato/25 bg-blush">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionLabel>Pizza drops</SectionLabel>
          <h2 className="section-title">Limited pizza drops.</h2>
          <p className="copy mt-6">
            Friday, Saturday, Sunday. Handmade pies, fresh ingredients, and a dough schedule that respects the ferment. Text to order, then follow Instagram for availability and the latest Austin drop windows.
          </p>
        </div>
        <div className="interactive-lift interactive-card-lift interactive-box-zoom unified-premium-glow motion-box drop-card">
          <div className="drop-kicker">Friday · Saturday · Sunday</div>
          <p>This weekend's drop</p>
          <a className="drop-phone" href="sms:5035167759">503-516-7759</a>
          <span>Text to order</span>
          <small>Follow Instagram for availability</small>
          <strong>@discodoughpizzaco</strong>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {dropItems.map((pie) => (
              <div key={pie.name} className="interactive-lift interactive-card-lift interactive-box-zoom unified-premium-glow motion-box drop-pie-card">
                <p>{pie.name}</p>
                {pie.prices ? (
                  <span>{pie.prices.join(" / ")}</span>
                ) : null}
              </div>
            ))}
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
        <p className="max-w-lg text-base font-normal leading-8 text-brown">
          Handmade in Austin with locally sourced ingredients whenever possible, Disco Dough is proud to call this city home. We're a small Texas business built around family, community, long-fermented dough, and pies made for the people who make Austin special.
        </p>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <figure key={`${image.src}-${index}`} className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-card-lift gallery-card">
            <div className="ph-media">
              <img
                src={image.src}
                alt={image.alt}
                className={`h-full w-full object-cover object-center ${galleryPositionClasses[index] || ""}`}
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

function PrivateEvents() {
  return (
    <section id="private-events" className="section bg-blush">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] lg:items-start lg:gap-16">
        <div className="event-media order-2 lg:order-1">
          <figure className="interactive-lift interactive-box-zoom unified-premium-glow unified-photo-frame photo-frame photo-contain photo-top contained-image-zoom aspect-[5/4]">
            <div className="ph-media"><img src={privateEventsPhoto} alt="Pizza peel and Disco Dough pizza in front of the Austin Capitol" /></div>
          </figure>
        </div>
        <div className="event-content order-1 lg:order-2">
          <SectionLabel>Private events</SectionLabel>
          <h2 className="section-title section-title--editorial">A nostalgic Austin pizza night, made for your people.</h2>
          <p className="copy mt-6">
            Interested in private events, pizza drops, or bringing Disco Dough to your next gathering? Reach out directly or schedule time with us below.
          </p>
          <div className="event-links">
            <a href="mailto:Discodoughpizzaco@outlook.com">Discodoughpizzaco@outlook.com</a>
            <a href="https://calendly.com/Branden-Beyer" target="_blank" rel="noreferrer">Calendly - Schedule Event Consultation</a>
          </div>
        </div>
        <div className="event-details order-3 lg:col-span-2">
          <TextMarquee phrases={eventTypes} durationSec={82} rounded />
          <div className="event-detail-cards">
            <div className="interactive-lift interactive-box-zoom unified-premium-glow event-detail-card event-indoor-card">
              <div className="event-experience-card__label">
                <Star />
                <span>Indoor service</span>
              </div>
              <h3>Indoor Dinner Parties</h3>
              <p>
                We also offer intimate indoor pizza dinner experiences for smaller gatherings, creative nights, and private hosted events using commercial indoor-grade electric ovens designed for elevated indoor service.
              </p>
            </div>
            <div className="interactive-lift interactive-box-zoom unified-premium-glow event-detail-card event-experience-card">
            <div className="event-experience-card__label">
              <Star />
              <span>The Experience</span>
            </div>
            <h3>An experiential approach.</h3>
            <p>
              We bring guests into the process through live dough stretching, oven-side pizza preparation, tableside storytelling, and hands-on interaction with our pizzaiolos and equipment. From fermentation and flour selection to ingredient sourcing and bake technique, every service is designed to feel personal, memorable, and deeply human.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="relative bg-tomato px-4 py-16 text-cream sm:px-6 lg:px-8">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em]">
            <Star />
            <span>Austin, Texas</span>
          </div>
          <h2 className="mt-6 font-serif text-[clamp(3.5rem,13vw,8.5rem)] font-black uppercase leading-[0.8] tracking-normal">
            Disco Dough Pizza Co.
          </h2>
        </div>
        <div className="interactive-lift interactive-box-zoom unified-premium-glow motion-box contact-panel contact-card rounded-[2rem] border-2 p-6">
          <p className="text-sm font-black uppercase tracking-[0.2em]">Text to order</p>
          <a href="sms:5035167759" className="mt-2 block font-serif text-4xl font-black text-cream">503-516-7759</a>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.2em]">Instagram</p>
          <a href="https://instagram.com/discodoughpizzaco" className="mt-2 block font-serif text-3xl font-black text-cream">@discodoughpizzaco</a>
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
