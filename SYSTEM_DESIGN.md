# raulmoracode.com — System Design (Visual)

## Philosophy

Minimalist, monochromatic, type-driven. The only color comes from semantic status dots (green/yellow/red/blue) and platform-specific link hovers. Everything else is gray scale using OKLCH with zero chroma.

---

## 1. Typography

| Role        | Family        | Weights        | Source                                              |
| ----------- | ------------- | -------------- | --------------------------------------------------- |
| Sans (UI)   | `Geist`       | 400            | `https://cdn.raulmoracode.com/fonts/Geist/`         |
| Mono (code) | `Geist Mono`  | 400, 500, 700  | `https://cdn.raulmoracode.com/fonts/Geist-Mono/`    |

Registered in `globals.css` via `@font-face` and mapped to `--font-sans` / `--font-mono` CSS vars, then to Tailwind's `font-sans` / `font-mono` in `@theme inline`.

### Usage conventions

| Context          | Font       | Notes                        |
| ---------------- | ---------- | ---------------------------- |
| Page title       | `font-mono` bold       | `text-4xl tracking-tighter` |
| Page description | `font-mono`             | `text-lg leading-snug`       |
| Nav links        | `font-mono`             | `text-xl`                    |
| Card title       | system (`font-sans`)    | `text-base font-medium`      |
| Card body        | `font-mono`             | `text-sm`                    |
| Badge tags       | `font-sans`             | `text-xs`                    |
| Footer           | `font-mono` medium      |                              |
| `/back`          | `font-mono` medium      |                              |

---

## 2. Color System

All custom tokens are declared in `app/globals.css` as `--clr-*` CSS vars (to avoid collision with shadcn's `--*-foreground`), then registered as Tailwind utilities in `@theme inline`.

### 2.1 Semantic text hierarchy

| Token       | Tailwind      | Light           | Dark                 | Role                        |
| ----------- | ------------- | --------------- | -------------------- | --------------------------- |
| `--clr-main`| `text-main`   | `oklch(.145 0 0)` ≈ zinc-900 | `oklch(.985 0 0)` ≈ zinc-50 | Page titles, card titles    |
| `--clr-sub` | `text-sub`    | `oklch(.27 0 0)`  ≈ zinc-800 | `oklch(.708 0 0)`  ≈ zinc-400 | Body text, nav links        |
| `--clr-dim` | `text-dim`    | `oklch(.556 0 0)` ≈ zinc-500 | `oklch(.556 0 0)`  ≈ zinc-500 | Secondary info, dates       |
| `--clr-faint`| `text-faint` | `oklch(.645 0 0)` ≈ zinc-400 | `oklch(.556 0 0)`  ≈ zinc-500 | Footer, muted labels        |
| `--clr-hover`| `hover:text-hover` | `oklch(0 0 0)` ≈ black | `oklch(1 0 0)` ≈ white | Hover state for interactable text |

Note: `dim` and `faint` share the same value in dark mode (`zinc-500`).

### 2.2 Surfaces & borders

| Token                   | Tailwind                   | Light            | Dark                | Role                           |
| ----------------------- | -------------------------- | ---------------- | ------------------- | ------------------------------ |
| `--clr-border-subtle`   | `border-border-subtle`     | `oklch(.922 0 0)` ≈ zinc-200 | `oklch(1 0 0 / 10%)` | Collapsible section dividers   |
| `--clr-border-card`     | `border-border-card`       | `oklch(.37 0 0)` ≈ zinc-700 | `oklch(.269 0 0)` ≈ zinc-800 | Card outlines                |
| `--clr-bg-badge`        | `bg-bg-badge`              | `oklch(.87 0 0)` ≈ zinc-300 | `oklch(.269 0 0)` ≈ zinc-800 | Tag/badge background         |
| `--clr-bg-card-hover`   | `hover:bg-bg-card-hover`   | `#ececec`       | `oklch(.205 0 0)` ≈ zinc-900 | Card hover state               |

### 2.3 shadcn tokens (unchanged)

Located in `:root` and `.dark` blocks in `globals.css`. Key values:

| Token    | Light            | Dark                |
| -------- | ---------------- | ------------------- |
| `--background` | `oklch(1 0 0)` ≈ white | `oklch(.145 0 0)` ≈ zinc-900 |
| `--foreground` | `oklch(.145 0 0)` | `oklch(.985 0 0)` |
| `--card`       | `oklch(1 0 0)`   | `oklch(.205 0 0)` |
| `--border`     | `oklch(.922 0 0)` | `oklch(1 0 0 / 10%)` |
| `--primary`    | `oklch(.205 0 0)` | `oklch(.922 0 0)` |
| `--muted`      | `oklch(.97 0 0)`  | `oklch(.269 0 0)` |
| `--muted-foreground` | `oklch(.556 0 0)` | `oklch(.708 0 0)` |

### 2.4 Status dots (only color in design)

| Status         | Tailwind                     | Usage                          |
| -------------- | ---------------------------- | ------------------------------ |
| Finished/Current | `bg-green-500`             | Project, Experience cards      |
| In Progress    | `bg-yellow-500`             | Project card                   |
| Archived       | `bg-red-500`                | Project card                   |
| Upcoming       | `bg-blue-500`               | Event card                     |
| Neutral        | `bg-zinc-500`               | Event "Finished", bullet points|

### 2.5 Platform hover colors (external links)

| Platform  | Tailwind (light & dark)       | Used on              |
| --------- | ---------------------------- | -------------------- |
| Generic   | `hover:text-blue-500`        | Blog, Company links  |
| Meetup    | `hover:text-red-500`         | Event card           |
| Luma      | `hover:text-purple-500`      | Event card           |
| Eventbrite| `hover:text-orange-500`      | Event card           |
| GitHub    | `hover:text-zinc-600/100`    | Project card         |

### 2.6 Hardcoded zinc (intentional, not converted)

| Location           | Class                          | Element             |
| ------------------ | ------------------------------ | ------------------- |
| `ExperienceCard`   | `bg-zinc-500 dark:bg-zinc-400` | Bullet dot for highlights |
| `EventCard`        | `bg-zinc-500`                  | Neutral status dot  |

---

## 3. Border Radius

Custom scale derived from shadcn's `--radius: 0.625rem`:

| Token        | Value                          |
| ------------ | ------------------------------ |
| `--radius-sm`  | `calc(var(--radius) * 0.6)` ≈ 0.375rem |
| `--radius-md`  | `calc(var(--radius) * 0.8)` ≈ 0.5rem   |
| `--radius-lg`  | `var(--radius)` = 0.625rem             |
| `--radius-xl`  | `calc(var(--radius) * 1.4)` ≈ 0.875rem |
| `--radius-2xl` | `calc(var(--radius) * 1.8)` ≈ 1.125rem |
| `--radius-3xl` | `calc(var(--radius) * 2.2)` ≈ 1.375rem |
| `--radius-4xl` | `calc(var(--radius) * 2.6)` ≈ 1.625rem |

Cards use the shadcn `<Card>` default border-radius (which maps to `--radius-lg` via `rounded-xl` in shadcn's card component), or `rounded-sm` for badges.

---

## 4. Spacing

### 4.1 Page layout (PageBase)

```
max-w-4xl (56rem / 896px)
├── px-8 (horizontal padding)
├── pt-20 → sm:pt-40 → md:pt-25 (top padding)
├── pb-1 sm:pb-4 (bottom padding)
└── flex-1 (pushes footer down)
```

Breakpoints:
- `md:` (≥768px) → `pt-25` (6.25rem)
- `sm:` (≥640px) → `pt-40` (10rem), `pb-1` → `pb-4`
- default → `pt-20` (5rem)

### 4.2 Section spacing (inside PageBase)

```
<section>
├── space-y-4 (between title, description, children)
└── mb-6 → sm:mb-10 (bottom margin before footer)
```

### 4.3 Footer

```
w-full max-w-4xl px-8 pb-4
├── default: flex-col, items-start, gap-2
└── sm: flex-row, justify-between, items-center
```

Left: "get in touch" (/contact link)
Right: "© 2026 raulmoracode"

### 4.4 Cards

- Stacked vertically with `space-y-4`
- Project cards use `grid grid-cols-1 md:grid-cols-2 gap-4`
- Inside card: `space-y-4` (CardContent), header uses `space-y-2` (CardHeader)

### 4.5 Home page navigation

```
<nav> flex-col space-y-8
├── Main items: flex-col space-y-1, mb-10
│   └── each: text-xl leading-snug
└── Collapsible "social"
    └── Collapsed items: pl-3 border-l, space-y-2
```

---

## 5. Component Architecture

```
PageBase (layout shell)
├── ModeToggle (absolute top-4 right-4, z-50)
├── <main> → <section>
│   ├── h1 (title)
│   ├── p (description)
│   ├── /back button (if not root)
│   └── {children}
└── <footer>
    ├── Link → /contact
    └── © year raulmoracode

CardBase (reusable card wrapper)
├── Card (shadcn)
│   ├── CardHeader (space-y-2)
│   │   └── header content (flex items-start justify-between font-sans)
│   └── CardContent (space-y-4 font-mono)
│       └── body content
```

### Card variants
| Component        | Header                        | Content                                           |
| ---------------- | ----------------------------- | ------------------------------------------------- |
| `BlogCard`       | Title + meta (author, date, reading time) | Description + tags + "Read article" link |
| `ProjectCard`    | Title + status dot             | Description + tags + Demo/GitHub links            |
| `ExperienceCard` | Role + company + date range + location + Current badge | Description + highlights (bullets) + tags + Company link |
| `EventCard`      | Title + date + status dot      | Description + platform links (Meetup/Luma/Eventbrite) |

### Shared utility (`styles/styles.ts`)

| Constant       | Value                                                                    |
| -------------- | ------------------------------------------------------------------------ |
| `buttonStyle`  | `text-sub flex hover:underline items-center gap-1 text-xs w-fit transition-colors` |
| `iconSize`     | `h-3.5 w-3.5`                                                            |
| `colorScheme`  | Centralized mapping of text/background/hover classes                     |

---

## 6. Icon System

| Library       | Icons used                                        | Size        | Purpose                       |
| ------------- | ------------------------------------------------- | ----------- | ----------------------------- |
| `lucide-react`| `Calendar`, `Clock`, `ChevronDown`, `ExternalLink`, `MapPin`, `Sun`, `Moon`, `Computer` | `h-3.5 w-3.5` (UI), `h-4 w-4` / `h-5 w-5` (theme menu) | All UI icons |
| `react-icons` | `TbExternalLink` (Tabler), `BsGithub` (Bootstrap) | `h-3.5 w-3.5` | Brand icons for demo/GitHub links |

---

## 7. Theme Toggle

Location: `absolute top-4 right-4 z-50`
Uses shadcn `<DropdownMenu>` with `next-themes`.
Options: Light (Sun), Dark (Moon), System (Computer).
Button variant: `outline size="icon"`.

---

## 8. Animation & Interaction

- `transition-colors` on all interactive text and cards
- ChevronDown on social collapsible: `group-hover:-rotate-45`
- Cards: `hover:bg-bg-card-hover transition-colors`
- Links: `hover:underline` (external action links) or `hover:text-hover` (navigation)

---

## 9. Responsive Behavior

| Element       | Mobile (<640px)              | Tablet+ (≥640px)            |
| ------------- | ---------------------------- | --------------------------- |
| Page top padding | `pt-20`                   | `pt-40` (sm), `pt-25` (md) |
| Footer        | column, items-start, gap-2   | row, justify-between, items-center |
| Project cards | single column                | 2-column grid (md+)         |
| ModeToggle    | `top-4 right-4`              | unchanged                   |

---

## 10. Constants & References

| File                      | Purpose                                  |
| ------------------------- | ---------------------------------------- |
| `app/globals.css`         | All CSS vars, @theme, @font-face         |
| `styles/styles.ts`        | Shared class constants for buttons/icons/colors |
| `components/custom/PageBase.tsx` | Layout shell (header, footer, /back) |
| `components/custom/cards/CardBase.tsx` | Reusable card wrapper |
| `components/theme/ButtonTheme.tsx` | Theme toggle dropdown |
| `components/ui/`          | shadcn primitives (13 components)        |

---

## 11. Key Design Decisions

1. **No navbar** — navigation via `/back` button and home (`/`) and links (`/links`) pages
2. **Monochromatic with accent dots** — status dots are the only color; platform hovers add subtle brand color on interaction
3. **4-level text hierarchy** — `main` → `sub` → `dim` → `faint` avoids naming collision with shadcn's `primary`/`secondary`/`muted` which are used for component theming
4. **`react-icons` scoped to brands** — lucide-react handles all UI icons; react-icons only used for GitHub (`BsGithub`) and Tabler (`TbExternalLink`)
5. **Card hover as background change** — not border change or elevation; keeps the flat, minimal aesthetic
6. **OKLCH color space** — zero chroma for all grays; consistent luminance across light/dark
