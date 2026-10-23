# VIHAAN TRADERS — PREMIUM REAL ESTATE WEBSITE DESIGN SYSTEM

## 01. PROJECT OVERVIEW

**Brand:** Vihaan Traders  
**Industry:** Real Estate Development, Construction & Property  
**Project Type:** Premium, modern, motion-rich, responsive multi-page website  
**Frontend:** React.js + Tailwind CSS  
**Animation:** Use the connected Motion MCP server and its available tools  
**Quality Target:** Premium architectural studio + modern real estate developer + award-level digital experience

### The mission

Build a visually exceptional, trustworthy, contemporary website for Vihaan Traders that positions the company as a serious, design-conscious real estate developer.

The website must not resemble a generic property listing template, a standard construction company website, or a collection of ordinary cards.

It should feel like an architectural experience: cinematic, editorial, sophisticated, interactive, and memorable.

The visitor should immediately feel:

- This company takes architecture and quality seriously.
- The properties are presented with exceptional visual care.
- The company is professional, credible, and approachable.
- Exploring the website is enjoyable.
- Contacting the company is the natural next step.

The visual language should appeal to younger homebuyers and modern investors while retaining the trust, clarity, and credibility expected by families and established property buyers.

**Core design philosophy: Architecture first. Experience second. Conversion always.**

---

## 02. MANDATORY PROJECT INSPECTION

Before writing code:

1. Inspect the entire existing project directory recursively.
2. Identify the existing React setup, package manager, routing, Tailwind configuration, dependencies, assets, fonts, images, logos, and project structure.
3. Inspect all available company assets, including architectural renders, project photographs, brochures, floor plans, logos, and existing website content.
4. Identify the connected Motion MCP server and inspect the tools, documentation, and animation capabilities it actually exposes.
5. Use the available Motion MCP tools to help design, implement, refine, or validate animations wherever applicable.
6. Reuse existing working infrastructure instead of unnecessarily replacing the project configuration.
7. Do not invent company history, project names, construction statistics, certifications, customer testimonials, addresses, prices, or awards.

If company-specific content is unavailable, use clearly identifiable editable placeholders. Create a coherent and visually complete experience without presenting fictional claims as facts.

Do not stop after generating the design plan. Implement the website, run it, inspect it in the browser, and iterate until the result meets this specification.

---

## 03. CREATIVE DIRECTION

Create a fusion of three visual worlds:

### A. Architectural editorial

Inspired by premium architecture publications, contemporary architecture studios, and thoughtfully art-directed property developments.

Characteristics:
- Oversized typography.
- Carefully controlled negative space.
- Strong grid systems.
- Beautiful architectural photography.
- Asymmetrical image compositions.
- Large editorial statements.
- Fine borders and restrained dividers.
- Sophisticated typographic contrast.

### B. Contemporary digital luxury

The experience should feel current, interactive, and designed for the next generation.

Characteristics:
- Fluid transitions.
- Dynamic image masks.
- Interactive project previews.
- Scroll-linked transformations.
- Sophisticated navigation.
- Subtle cursor interactions on desktop.
- Smooth section-to-section continuity.
- Unexpected but purposeful visual details.

### C. Real estate credibility

Visual excitement must never compromise trust.

Every project should clearly communicate its name, location, development type, status, available information, and next action.

Use accurate, useful information rather than exaggerated sales language.

Avoid excessive gold, artificial luxury effects, random gradients, generic skyscraper stock imagery, excessive glassmorphism, meaningless statistics, and decorative animations without a purpose.

---

## 04. BRAND DESIGN SYSTEM

### Color palette

Use the following as the initial brand direction. Keep all colors in centralized design tokens so they can be adjusted if official brand guidelines become available.

- Obsidian: `#171918`
- Deep graphite: `#252824`
- Warm ivory: `#F5F2EB`
- Architectural stone: `#E5E0D6`
- Muted grey: `#92928A`
- Champagne accent: `#C5AD83`
- Pure white: `#FFFFFF`

### Color usage

- Use warm ivory for the primary editorial sections.
- Use obsidian and graphite for cinematic project showcases, navigation, and selected contrast sections.
- Use champagne only for fine accents, active indicators, important numbers, and subtle interaction details.
- Use architectural stone to separate sections without introducing unnecessary colors.
- Maintain readable text contrast throughout the site.

The site must feel premium even when every animation is disabled.

### Typography

Use a deliberate two-font system.

**Display typography:** An elegant contemporary serif, such as DM Serif Display or a similar editorial typeface.

**Interface and body typography:** A clean modern sans-serif, such as Manrope or Inter.

Typography rules:
- Large headlines should have confident scale and controlled line breaks.
- Use responsive typography with `clamp()`.
- Use tight display line-height and comfortable paragraph line-height.
- Use restrained uppercase labels for project categories and section numbering.
- Use generous whitespace around important headlines.
- Avoid using too many font weights.
- Use local or optimized font loading when possible.

### Layout system

- Desktop: 12-column editorial grid.
- Tablet: 8-column adaptive grid.
- Mobile: 4-column layout with intentional spacing.
- Maximum content width: approximately 1440px.
- Use consistent spacing tokens.
- Use large visual sections with deliberate changes in density.
- Avoid placing every section inside the same centered container with identical card layouts.

Use subtle borders, clean alignments, strong image proportions, and intentional asymmetry.

---

## 05. WEBSITE INFORMATION ARCHITECTURE

Build the following pages:

1. Home
2. Projects
3. Individual Project Details
4. About Vihaan Traders
5. Our Approach / Expertise
6. Contact
7. Custom 404 page

Use React Router or the routing solution already installed in the project.

Every page must have a distinct visual rhythm while maintaining the same brand system, navigation, typography, footer, and animation language.

Create reusable components and structured project data rather than duplicating entire page implementations.

If verified project information is limited, make the Projects page functional and visually complete using clearly labeled sample content that is easy to replace. Do not misrepresent conceptual samples as completed Vihaan Traders developments.

---

## 06. GLOBAL NAVIGATION

Create an elegant, minimal, premium navigation bar.

### Desktop behavior

- Vihaan Traders wordmark on the left.
- Navigation links: Projects, About, Expertise.
- A clear Contact / Discuss a Project action on the right.
- Initially transparent over the hero where contrast permits.
- Transitions to a refined solid or lightly opaque surface after scrolling.
- Smooth color transitions between light and dark sections.
- Active page indicator.
- Subtle hover underline or directional text movement.
- Header should remain usable without obscuring page content.

### Mobile behavior

Build a custom full-screen or near-full-screen navigation overlay.

When opened:
- The menu enters with a carefully timed stagger.
- Links animate into view.
- A subtle architectural image or restrained abstract composition can occupy part of the menu.
- The close control remains obvious.
- Selecting a link closes the menu.
- Keyboard focus and escape-key behavior work correctly.

Use the Motion MCP server to implement the best-supported animation approach.

Do not create an oversized menu that feels like a generic mobile template.

---

## 07. HOMEPAGE — THE COMPLETE EXPERIENCE

### SECTION 01: CINEMATIC ARCHITECTURAL HERO

This is the most important section.

The first screen must immediately establish the identity and quality of Vihaan Traders.

**Composition**

Use a full-viewport architectural image or a short, optimized architectural video showing a genuinely impressive contemporary residential or mixed-use development.

The composition should have:
- Strong building geometry.
- Beautiful natural light.
- A believable physical environment.
- Premium material details.
- A restrained editorial overlay.
- A clear focal point.
- Excellent text contrast.

Prioritize verified Vihaan Traders project imagery when available. Otherwise, use clearly replaceable illustrative architectural imagery without implying that it depicts an actual company project.

**Headline direction**

"Built for the way we live next."

Supporting copy:

"Thoughtful spaces. Considered architecture. A vision for better living."

Treat this as proposed brand copy, editable after the company confirms its positioning.

**Layout**

- Small brand or location eyebrow at the top of the text block.
- Oversized headline with an intentional line break.
- Short supporting paragraph.
- Primary CTA: Explore Our Projects.
- Secondary CTA: Discover Vihaan Traders.
- Small scroll indicator.
- Restrained project or architecture label near the lower edge.

**Animation sequence**

1. The hero image reveals through a clean mask or controlled scale transition.
2. The brand label fades and moves into place.
3. Headline lines reveal with a slight vertical mask animation.
4. Supporting text appears.
5. CTA elements enter with a subtle stagger.
6. The scroll indicator animates gently.

The entire intro should feel polished, not slow.

Use a subtle image scale or parallax effect while scrolling. Avoid aggressive zooming, distracting rotating text, or a long forced intro that delays access to the site.

The hero must still look outstanding when animation is disabled.

### SECTION 02: THE BRAND STATEMENT

Create a visually distinctive editorial section with a large statement.

Headline direction:

"More than a structure. A better way to live."

Place the headline across a spacious layout, with one supporting paragraph and a small section identifier.

As the visitor scrolls:
- Reveal the headline through a text mask.
- Introduce a thin architectural line.
- Animate a small supporting visual or material photograph.
- Use a restrained background transition.

Use a split composition with text on one side and an architectural detail image on the other.

Do not make this a standard icon-and-text feature grid.

### SECTION 03: FEATURED DEVELOPMENTS

This section should make visitors want to explore the portfolio.

Use a large editorial heading:

"Spaces with a point of view."

Supporting text:

"Explore the developments, places, and possibilities taking shape through Vihaan Traders."

**Desktop layout**

Create a curated portfolio with varied image proportions.

For example:
- One large featured development.
- One smaller project preview beside or below it.
- A second wide project feature.
- A final project index or exploration link.

Avoid making all cards the same size.

Each project preview should include:
- Project name.
- Location, when verified.
- Project type.
- Current status, when verified.
- Explore Project action.
- High-quality image.

**Interaction**

- Images reveal with a clean clip-path or scale transition.
- The project title shifts subtly on hover.
- A small arrow moves in the direction of navigation.
- A restrained image parallax may respond to cursor movement.
- Hovering a project can update an adjacent preview image where appropriate.
- Clicking opens the corresponding project details page.

Add working filters on the Projects page for project type, location, and status only when the underlying data supports them.

**Mobile behavior**

Replace hover-dependent interactions with tap-friendly cards. Preserve image quality and readable project information.

### SECTION 04: THE ARCHITECTURE SCROLL EXPERIENCE

Create one signature interactive section that visitors remember.

Concept: "From vision to form."

As the user scrolls through a dedicated section, a carefully selected architectural image evolves through a sequence of visual states.

Possible sequence:
1. A close-up architectural material or initial structure.
2. A wider view of the building.
3. A complete architectural composition.
4. A finished project image or a related design detail.

Use multiple verified images, a supplied architectural sequence, or a well-designed image transition. Do not pretend to reconstruct a real building from nonexistent construction data.

**Animation direction**
- Scroll-linked image expansion.
- Controlled image crossfades.
- Subtle depth through layered foreground and background images.
- Section titles that reveal in sequence.
- A restrained progress indicator.
- A transition into the next section that feels continuous.

Use Motion MCP capabilities for scroll progress, image transitions, and coordinated entrance animations where supported.

If a genuine multi-stage visual asset is unavailable, implement a beautiful image-reveal experience instead of fabricating a 3D building.

The section should feel like architecture unfolding in front of the visitor.

### SECTION 05: OUR APPROACH

Create a sophisticated section that communicates how Vihaan Traders approaches development.

Use a large heading:

"Good spaces begin with better thinking."

Build an editorial list rather than a repetitive icon grid.

Potential themes, subject to confirmation:
- Planning with purpose.
- Design-led decisions.
- Attention to detail.
- Long-term value.

Each item should include:
- A small index such as 01, 02, 03, 04.
- A concise title.
- A short description.
- A contextual architectural image or image preview.
- A subtle interaction.

**Desktop interaction**

When the visitor hovers over or focuses on an approach item:
- The active title responds with subtle movement.
- The adjacent visual changes.
- The active index updates.
- Other items remain visually quiet.

Use accessible keyboard interactions.

On mobile, use stacked editorial rows with tap-to-expand details if appropriate.

Do not claim specific engineering processes, sustainability credentials, or quality certifications unless verified.

### SECTION 06: PROJECT HIGHLIGHT / CINEMATIC FEATURE

Introduce one featured project with a dramatic, wide architectural image.

The image should occupy a large portion of the viewport.

Overlay:
- A small featured-project label.
- Project name.
- Verified location.
- One short descriptive statement.
- Explore Project link.

Use scroll-linked image movement or a controlled expansion from a framed image into a wider composition.

When the visitor clicks the image or CTA, open the project detail page.

Keep text away from visually busy areas and ensure contrast across different image crops.

### SECTION 07: THE PEOPLE AND PURPOSE BEHIND THE BRAND

Create a human-centered section to build trust.

Headline direction:

"Building with a longer view."

Use a split editorial layout:
- A large architectural or contextual photograph.
- A carefully written company introduction.
- A link to the About page.
- A subtle animated line or number marker.

If leadership photographs, company history, or a verified founder statement are available, incorporate them thoughtfully.

Otherwise, focus on the company's proposed philosophy and clearly editable copy. Never invent a founder identity or a customer quotation.

This section should communicate confidence without excessive self-promotion.

### SECTION 08: BRAND STATEMENT MARQUEE

Add one elegant horizontal typographic movement between major sections.

Possible copy:

"THOUGHTFUL DESIGN — LASTING VALUE — BETTER SPACES —"

Use oversized text and a seamless looping marquee.

Requirements:
- Keep the speed slow and deliberate.
- Avoid competing with the primary content.
- Pause or reduce motion when appropriate.
- Respect the reduced-motion preference.
- Prevent horizontal page overflow.
- Keep text readable on smaller screens.

Use the marquee as a visual transition, not a repeated decoration after every section.

### SECTION 09: THE ENQUIRY MOMENT

Create a visually memorable conversion section.

Use a dark graphite or warm stone background with a large architectural image or a refined abstract line composition.

Headline:

"Have a place in mind?"

Supporting text:

"Let's start a conversation about what comes next."

Primary CTA: Start a Conversation.

Secondary CTA: Explore Projects.

The CTA should lead to the Contact page or an accessible enquiry form.

Include a subtle animated arrow or directional line. Use a restrained entrance animation and generous spacing.

This section must feel inviting and premium rather than aggressively sales-oriented.

### SECTION 10: FOOTER

Build a large, carefully composed footer.

Include:
- Vihaan Traders wordmark.
- A short approved brand statement.
- Navigation links.
- Projects link.
- About link.
- Contact information when verified.
- Social links when provided.
- Privacy policy and legal links where applicable.
- Copyright year generated dynamically.

Use an editorial grid and fine separators.

A small, subtle footer animation is welcome, but the footer must remain quick to navigate.

---

## 08. PROJECTS PAGE

Create a complete portfolio browsing experience.

### Intro

Large headline:

"Explore the portfolio."

Add a concise supporting paragraph and a visually strong architectural image or project collage.

### Project index

Include:
- Project grid or editorial list.
- Responsive image ratios.
- Project name.
- Location.
- Property category.
- Development status.
- Project details CTA.

### Filters

Implement functional filters only for data that exists.

Possible filters:
- All Projects.
- Residential.
- Commercial.
- Mixed Use.
- Under Development.
- Completed.
- Upcoming.

Do not show categories or statuses as facts unless they correspond to real project records.

### Interactions

- Smooth filter transitions.
- Image reveal on entry.
- Staggered project introductions.
- Subtle directional hover states.
- Clear active filter styling.
- Empty states when no results match.
- Accessible filter controls.

If there are few real projects, present a curated portfolio beautifully rather than padding the page with fictional developments.

---

## 09. INDIVIDUAL PROJECT DETAIL PAGE

Every real project should have its own dedicated route.

Suggested route:

`/projects/:slug`

### Page structure

1. Cinematic project hero.
2. Project name and verified location.
3. Project summary.
4. Key project information.
5. Architectural gallery.
6. Design or development narrative.
7. Available amenities and features.
8. Location and connectivity.
9. Available floor plans or brochure links.
10. Enquiry CTA.
11. Related projects.

Display only information that has been provided or verified.

### Key project information

Depending on the project, this could include:
- Property type.
- Location.
- Development status.
- Number of units.
- Site area.
- Configuration.
- Completion timeline.

Omit unknown details instead of showing invented values.

### Gallery experience

- Large image transitions.
- Click-to-expand lightbox.
- Keyboard navigation.
- Clear close control.
- Responsive image sizing.
- Touch-friendly mobile controls.

### Enquiry experience

Keep a clear project-specific enquiry action accessible throughout the page.

Pass the project name into the contact form when the visitor arrives through a project-specific CTA.

---

## 10. ABOUT PAGE

Build an editorial company story rather than a generic corporate page.

### Suggested structure

- A strong introductory statement.
- Company overview.
- Development philosophy.
- Approach to design and planning.
- Company milestones, only if verified.
- Team or leadership, if actual information exists.
- Featured projects.
- Contact CTA.

### Visual treatment

Use a mixture of full-width imagery, asymmetric layouts, restrained typography, and carefully paced scroll reveals.

If a genuine company timeline exists, use an animated vertical timeline. Otherwise, avoid fabricating historical milestones.

The page should communicate reliability, intent, and a clear point of view.

---

## 11. EXPERTISE PAGE

Create an optional expertise page if Vihaan Traders offers multiple clearly defined services.

Potential categories to confirm with the company:
- Real estate development.
- Residential projects.
- Commercial developments.
- Planning and project coordination.
- Property investment opportunities.

Only publish the services that Vihaan Traders actually provides.

Use an editorial service index with contextual images, concise descriptions, and refined hover states.

If the company does not have enough distinct verified services, merge this page into About rather than creating thin, repetitive content.

---

## 12. CONTACT PAGE

Make contacting the company simple, professional, and reassuring.

### Layout

Use a split layout:
- Left: Large editorial headline and contact details.
- Right: Premium, minimal enquiry form.

Headline:

"Let's talk about what's next."

### Form fields

- Full name.
- Email.
- Phone number, optional unless required by the company.
- Enquiry type.
- Project of interest, where applicable.
- Message.
- Privacy acknowledgement where required.

### Interaction

- Refined input focus states.
- Clear field labels.
- Inline validation.
- Accessible error messages.
- Submission loading state.
- Success confirmation.
- Useful failure feedback.

Connect the form to a real backend or an approved form service if available. If no endpoint is configured, clearly indicate that submission is not connected instead of falsely reporting success.

Use actual contact details only.

---

## 13. SIGNATURE MOTION SYSTEM

Motion is a central part of the visual identity, not an afterthought.

**MANDATORY: Use the connected Motion MCP server.**

### First, inspect the MCP capabilities

Discover the tools exposed by the configured Motion MCP server. Read their descriptions and available usage instructions.

Use those tools for relevant motion planning, supported code generation, animation patterns, implementation assistance, or validation.

Do not assume a particular MCP tool name, API, or capability without inspecting what is available.

If the server exposes reusable motion presets or examples, adapt them to the Vihaan Traders design system.

If a capability is not available through MCP, implement the behavior with the project's existing animation stack or an appropriate lightweight library.

Do not stop implementation merely because one MCP operation is unavailable.

### Animation library strategy

Prefer the Motion library compatible with the installed project, using the current supported React API.

If GSAP is already installed and appropriate for complex scroll-driven sequences, reuse it.

Avoid introducing multiple overlapping animation engines without a clear reason.

Use one coherent motion architecture.

### Motion principles

Every animation must do at least one of the following:
- Guide attention.
- Communicate hierarchy.
- Reveal architectural imagery.
- Make navigation feel responsive.
- Show a meaningful state change.
- Improve the feeling of spatial continuity.

### Required animation categories

**1. Entrance motion**
- Hero reveal.
- Headline mask reveals.
- Section entrance transitions.
- Staggered project previews.

**2. Scroll motion**
- Subtle image parallax.
- Scroll-linked image masks.
- Image frame expansion.
- Editorial line progression.
- Coordinated section transitions.

**3. Hover and focus**
- Directional arrow movement.
- Image scale transitions.
- Text color or position shifts.
- Project preview changes.
- Clear keyboard-focus states.

**4. Navigation motion**
- Header surface transitions.
- Mobile menu entrance and exit.
- Active link indicators.
- Smooth route changes where supported.

**5. Micro-interactions**
- Filter transitions.
- Button feedback.
- Form focus.
- Loading and success states.
- Gallery navigation.

### Motion timing

Use these as starting ranges, not rigid rules:

- Small hover transitions: 160–280 ms.
- Button and interface transitions: 180–320 ms.
- Text and image entrances: 450–800 ms.
- Larger editorial transitions: 650–1100 ms.

Use consistent easing and avoid excessive bounce.

Do not animate every element independently. Establish visual hierarchy by letting the most important elements move first.

### Reduced-motion support

Respect `prefers-reduced-motion`.

When reduced motion is requested:
- Disable large parallax effects.
- Remove unnecessary continuous motion.
- Replace complex scroll transformations with simple fades or static states.
- Keep all content available.
- Preserve navigation and interaction functionality.

Never require animation to understand the content.

---

## 14. ADVANCED INTERACTION DETAILS

Use the following only where they improve the actual experience.

### Custom cursor

A subtle custom cursor may be used on desktop for image galleries or project exploration.

It must:
- Remain unobtrusive.
- Never replace a visible pointer when that would reduce usability.
- Never obscure text.
- Be disabled on touch devices.
- Preserve native keyboard and accessibility behavior.

### Image reveal

Use clip-path or masking transitions for important images.

Avoid applying the same reveal to every image. Reserve the strongest treatment for the hero, featured projects, and the signature architecture section.

### Magnetic buttons

Use restrained pointer-following movement for selected desktop CTAs only.

Avoid strong magnetic movement or effects that interfere with clicking.

### Smooth scrolling

Use native browser scrolling unless a separate smooth-scroll library is demonstrably necessary.

If a smooth-scroll library is used, ensure it does not interfere with browser navigation, anchors, accessibility, or reduced-motion settings.

### Page transitions

Implement subtle route transitions only if compatible with the routing architecture.

Keep page navigation immediate and avoid long blocking animations.

---

## 15. IMAGE ART DIRECTION

Architectural imagery is one of the most important quality factors.

### Preferred visual characteristics

- Realistic contemporary architecture.
- Strong building silhouettes.
- Natural daylight and believable shadows.
- Warm sunset light used selectively.
- Stone, concrete, glass, wood, and metal textures.
- Landscaped entrances and human-scale context.
- Sophisticated residential interiors when relevant.
- Editorial architectural photography.
- Realistic materials and proportions.

### Asset priorities

1. Authentic Vihaan Traders project photography.
2. Official project renderings.
3. Approved company brochures and media.
4. Appropriately licensed architectural stock images.
5. Generated conceptual imagery only when suitable and clearly not presented as a real company development.

Never stretch a logo or distort a building image.

Use the right crop for each composition. Maintain focal points and readable text overlays.

### Performance

- Use WebP or AVIF when appropriate.
- Provide responsive image sizes.
- Lazy-load below-the-fold imagery.
- Prioritize the hero image.
- Avoid loading large background videos on mobile without a clear benefit.
- Provide meaningful alt text for informative images.
- Avoid blank image placeholders and broken asset URLs.

If original imagery is unavailable, create an editable asset manifest so the company can replace conceptual images without changing component logic.

---

## 16. GEN-Z INTERACTION WITHOUT LOSING LUXURY

The website should feel fresh and contemporary, but not childish or excessively trendy.

Use:
- Bold typographic contrasts.
- Unexpected but controlled layouts.
- Tactile hover responses.
- Smooth directional transitions.
- Editorial photography.
- Interactive image previews.
- Minimal motion graphics.
- Thoughtful page rhythm.
- Distinctive micro-interactions.

Avoid:
- Excessive neon.
- Random emojis.
- Gaming-style interface elements.
- Unnecessary floating badges.
- Excessive rounded cards.
- Huge numbers without context.
- Repeated glassmorphism.
- Constant animated backgrounds.
- Generic AI-generated visual clichés.
- Unreadable experimental typography.

The site should feel like a modern creative studio designed a premium real estate brand—not like a trendy template with animations added.

---

## 17. RESPONSIVE DESIGN

Design and test all major pages at:

- Large desktop: 1440px and above.
- Standard laptop: 1280px.
- Tablet: 768px.
- Mobile: 390px and 360px.

### Desktop

Use large architectural images, multi-column compositions, hover interactions, and carefully controlled scroll animations.

### Tablet

Adapt grids and typography. Reduce unnecessary motion and preserve the main visual hierarchy.

### Mobile

- Prioritize content and readability.
- Use shorter hero compositions where needed.
- Avoid desktop-style pinned scroll sections that trap the visitor.
- Convert hover interactions into touch interactions.
- Prevent horizontal overflow.
- Keep CTAs comfortably tappable.
- Use mobile-appropriate image crops.
- Ensure menus, galleries, and forms work properly.
- Keep animations smooth on mid-range devices.

Never simply shrink the desktop layout. Design a deliberate mobile experience.

---

## 18. TECHNICAL ARCHITECTURE

Use the existing application setup when it is sound.

### Preferred stack

- React.js.
- TypeScript if already configured or practical for the project.
- Tailwind CSS.
- React Router or the existing routing solution.
- Motion for React or the project's existing animation library.
- Lucide React or the installed icon system.
- A suitable form validation solution if needed.

### Suggested project organization

```text
src/
  components/
    layout/
      Navbar
      Footer
      MobileMenu
    ui/
      Button
      SectionHeading
      ProjectCard
      ImageReveal
      AnimatedText
      Marquee
    sections/
      HeroSection
      BrandStatement
      FeaturedProjects
      ArchitectureExperience
      ApproachSection
      FeaturedProject
      AboutPreview
      ContactCTA
  pages/
    Home
    Projects
    ProjectDetail
    About
    Expertise
    Contact
    NotFound
  data/
    projects
    navigation
    siteContent
  hooks/
  lib/
    motion
  styles/
  assets/
```

Treat this as a suggested structure, not a requirement to reorganize a working application unnecessarily.

### Code quality requirements

- Use reusable components.
- Separate content data from presentation.
- Use consistent naming conventions.
- Avoid monolithic page components.
- Avoid duplicating animation logic.
- Keep dependencies minimal.
- Use semantic HTML.
- Add clear TypeScript types when applicable.
- Implement meaningful loading and empty states.
- Remove unused code and debug output before delivery.

---

## 19. ACCESSIBILITY, SEO, AND TRUST

The site must be usable, discoverable, and credible.

### Accessibility

- Semantic heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Appropriate image alt text.
- Accessible forms and validation.
- Adequate contrast.
- Reduced-motion support.
- Accessible modal and gallery behavior.
- No essential hover-only information.

### SEO

- Unique title and description for every route.
- Canonical URLs when deployment URLs are known.
- Open Graph metadata.
- Appropriate heading structure.
- Sitemap and robots configuration where appropriate.
- Structured data only for verified company and project information.
- Meaningful route names.
- Descriptive image filenames and alt text.

### Trust requirements

- No fake testimonials.
- No fabricated awards.
- No unsupported property statistics.
- No invented company history.
- No misleading availability labels.
- No fake contact details.
- No false form-submission success.
- No placeholder links left looking operational.

Make all unconfirmed content easy to identify and replace.

---

## 20. PERFORMANCE REQUIREMENTS

The site must feel premium because it is fast, not just because it looks impressive.

Optimize:
- Largest Contentful Paint.
- Cumulative Layout Shift.
- Interaction to Next Paint.
- JavaScript bundle size.
- Image loading.
- Animation performance.
- Route transitions.

Prefer transforms and opacity for animation.

Avoid:
- Animating expensive layout properties continuously.
- Large unnecessary WebGL scenes.
- Heavy video backgrounds on every section.
- Multiple competing smooth-scroll systems.
- Large synchronous image assets.
- Excessive blur and backdrop filters.
- Continuous animations on many elements at once.

Load advanced motion features only where needed.

Use a static or simpler fallback when advanced animation is unsupported.

Target good Core Web Vitals on realistic devices and connections. Do not claim performance scores until the site has actually been tested.

---

## 21. CONTENT AND DATA MANAGEMENT

Create a central content configuration for:
- Brand name.
- Logo.
- Navigation.
- Contact information.
- Social links.
- Hero content.
- Project records.
- Project status.
- Locations.
- Images.
- Project details.
- SEO metadata.

Project data should be structured consistently.

A project record should support:
- Unique slug.
- Name.
- Category.
- Verified location.
- Status.
- Summary.
- Cover image.
- Gallery.
- Available specifications.
- Available brochure.
- Enquiry destination.

Optional fields must be omitted when unavailable.

Make it easy for the company to update project details and imagery without editing the animation components.

---

## 22. REFERENCE WEBSITES

Study the following references for specific design lessons. Do not copy their branding or reproduce their layouts exactly.

### Pantheon Development

https://www.weareavantus.com/launches/pantheon-development/

Study:
- Project-first storytelling.
- Elegant editorial composition.
- Clear development information.
- Prominent enquiry paths.
- Professional brand presentation.

### ERA

https://videinfra.com/work/era

Study:
- Immersive architectural presentation.
- Strong visual impact.
- The relationship between architecture and interaction.

### Maison Estates

https://www.inpured.com/case-study/maison-estates

Study:
- Cinematic property storytelling.
- Advanced scroll sequences.
- Distinctive property detail pages.

### Lenval Properties

https://thefirstthelast.agency/work/lenval-properties

Study:
- Atmospheric visual storytelling.
- Restrained motion.
- Premium presentation of developments.

### Architectural motion inspiration

https://www.pitonstudios.com/en/projects/kabizzu

Study:
- Scroll-linked imagery.
- Layered architectural composition.
- Thoughtful motion with responsive fallbacks.

Extract principles rather than cloning any reference. Vihaan Traders must have its own coherent identity.

---

## 23. FINAL IMPLEMENTATION AND QUALITY ASSURANCE

Do not stop at the first successful build.

### Phase 1 — Audit

- Inspect the repository.
- Identify existing assets and configuration.
- Inspect the connected Motion MCP server.
- Determine the implementation strategy.

### Phase 2 — Foundation

- Establish design tokens.
- Build typography and layout systems.
- Create navigation and footer.
- Create reusable motion primitives.
- Establish routes and project data.

### Phase 3 — Homepage

- Build the cinematic hero.
- Implement the brand statement.
- Build the featured project composition.
- Implement the signature architecture scroll experience.
- Add approach, company story, CTA, and footer.

### Phase 4 — Inner pages

- Build the Projects index.
- Build project detail routes.
- Build About.
- Build Expertise if relevant.
- Build Contact and 404 pages.

### Phase 5 — Motion refinement

Use the connected Motion MCP server wherever its available tools support the work.

Inspect timing, sequencing, scroll behavior, hover states, reduced-motion behavior, and mobile fallbacks.

### Phase 6 — Run and inspect

Start the application using the appropriate existing development command.

Use the available browser or preview tooling to inspect the actual rendered website.

Test:
- Initial load.
- Navigation.
- Every route.
- Every primary CTA.
- Project filters.
- Project detail navigation.
- Contact form.
- Gallery interactions.
- Desktop and mobile menu.
- Responsive layouts.
- Animation during scrolling.
- Browser console.
- Missing assets.
- Horizontal overflow.
- Reduced-motion behavior.

### Phase 7 — Iterate

After the first browser inspection, identify and fix:
- Generic-looking sections.
- Poor spacing.
- Weak typography.
- Inconsistent image crops.
- Repetitive layouts.
- Abrupt transitions.
- Excessive animation.
- Broken interactions.
- Mobile layout problems.
- Slow-loading assets.
- Unfinished placeholder content.

Repeat the build and inspection process until the website looks intentional and professional across the supported screen sizes.

---

## 24. DEFINITION OF DONE

The project is complete only when:

- All required routes work.
- The homepage makes a strong first impression.
- The design feels unique to Vihaan Traders.
- Architectural imagery is used effectively.
- Every major section has a meaningful visual or interactive detail.
- The Motion MCP server has been inspected and its relevant capabilities used where appropriate.
- Animations are smooth, purposeful, and accessible.
- Project filtering and navigation work.
- Project details are data-driven.
- Contact interactions behave honestly.
- The layout works on desktop, tablet, and mobile.
- There are no broken images, dead primary links, or obvious placeholder elements.
- The site has been inspected in a real browser preview.
- The implementation has been refined after visual inspection.
- Existing project functionality has not been needlessly broken.
- Company facts remain accurate and editable.

## THE FINAL CREATIVE TEST

Before declaring completion, ask:

1. Would this homepage look credible beside a premium architectural development brand?
2. Does the first viewport immediately feel art-directed rather than template-generated?
3. Is there at least one genuinely memorable interaction?
4. Does each section have a distinct visual rhythm?
5. Does motion enhance the architecture rather than distract from it?
6. Can a visitor easily discover projects and contact the company?
7. Does the mobile version feel intentionally designed?
8. Would a real estate client feel proud to present this website to a potential buyer or investor?

If any answer is no, continue refining.

**Final objective:** Deliver a complete, production-minded, premium real estate website for Vihaan Traders that combines contemporary architecture, refined storytelling, purposeful Motion MCP-powered interactions, excellent usability, and clear business outcomes.

Build the real website. Run it. Inspect it. Refine it. Do not settle for a merely acceptable first draft.

## MANDATORY TECHNOLOGY STACK — REACT + TAILWIND CSS

The entire Vihaan Traders website MUST be built using:

- **React.js** for the UI and reusable components.
- **Tailwind CSS** for the primary styling system.
- **Vite** as the preferred build tool for a standard React SPA, unless the existing project already uses a suitable React-based framework.
- **Motion for React** or the appropriate existing animation library, integrated with the connected Motion MCP server where supported.
- **React Router** for multi-page navigation when using a React SPA.

### Strict implementation rules

1. Write all website pages and UI components in React JSX or TSX.
2. Use Tailwind CSS utility classes for layouts, grids, spacing, typography, responsive behavior, colors, and component styling.
3. Create reusable React components for the navbar, footer, hero, project cards, image reveals, animated text, galleries, and enquiry forms.
4. Use React state and event handlers for interactive functionality such as project filters, mobile navigation, galleries, and form validation.
5. Use Tailwind responsive breakpoints to create a carefully designed desktop, tablet, and mobile experience.
6. Use the connected Motion MCP server to assist with animations, while implementing them using compatible React animation libraries and APIs.
7. Custom CSS is permitted only when Tailwind utilities are insufficient, such as specialized image masks, complex keyframes, or advanced architectural effects. Keep it minimal and organized.
8. Do not use plain HTML pages as the primary implementation, Bootstrap, a different frontend framework, or a separate styling framework instead of Tailwind CSS.
9. Do not create a static mockup in place of a functional React website.
10. Inspect the existing project before changing dependencies. If the project is empty, initialize a React + Vite + Tailwind CSS application using the appropriate current setup instructions.

### Final requirement

The final deliverable must be a fully implemented, responsive, multi-page React + Tailwind CSS website with premium architectural design, meaningful animations, functional navigation, and polished interactions.

Run the application, inspect it in the browser, fix all visual and functional issues, and verify the production build before declaring completion.