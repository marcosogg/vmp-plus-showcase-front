# VMP+ Landing Page UI/UX Refinement Plan

This plan outlines the steps to refactor the `src/components/landing-page.tsx` component for improved visual harmony, flow, and a more professional aesthetic, primarily using Tailwind CSS and existing shadcn/ui components.

## Phase 1: Hero Section Cleanup

1.  **Remove Gradient Background:**
    *   Target: `<header>` element.
    *   Action: Remove `bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500` classes.
2.  **Apply Clean Background:**
    *   Target: `<header>` element.
    *   Action: Add `bg-white` class.
3.  **Ensure Text/Button Contrast:**
    *   Target: `<h1>`, `<p>`, and `<button>` within the `<header>`.
    *   Action: Adjust text colors (e.g., to `text-slate-900`) and button variants (e.g., default or outline) as needed for readability against the white background.
4.  **Add Subtle Separation (Optional but Recommended):**
    *   Target: `<header>` element.
    *   Action: Add `border-b` class.

## Phase 2: Main Content Standardization

1.  **Standardize Vertical Padding:**
    *   Target: All direct child `<section>` elements within `<main>`.
    *   Action: Ensure each section has `py-16 md:py-20`. Remove any existing `mb-16` classes from these sections.
2.  **Apply Alternating Backgrounds:**
    *   Target: Specific `<section>` elements within `<main>`.
    *   Actions:
        *   "Project Overview" section: Apply `bg-white`.
        *   "About the Developer" section: Apply `bg-slate-50`.
        *   "Key Features" section: Apply `bg-white`.
        *   "Corporate AI Hackathon... Demo" section: Apply `bg-slate-50`.
        *   "Technologies Used" section: Apply `bg-white`.

## Phase 3: Component Enhancements

1.  **Define Feature Cards:**
    *   Target: `Card` components within the "Key Features" section.
    *   Action: Add the `border` class.
2.  **Add Hover Effect to Feature Cards:**
    *   Target: `Card` components within the "Key Features" section.
    *   Action: Add `hover:shadow-md` class.
3.  **Adjust Technology Grid Layout:**
    *   Target: Grid container `div` within the "Technologies Used" section.
    *   Action: Change `lg:grid-cols-7` to `lg:grid-cols-5`.
4.  **Define Technology Item Containers:**
    *   Target: Container `div` for each technology item within the "Technologies Used" section.
    *   Action: Add the `border` class.
5.  **Add Hover Effect to Technology Items:**
    *   Target: Container `div` for each technology item.
    *   Action: Add `hover:shadow-md` class.
6.  **Verify Technology Icon Paths:**
    *   Target: `<img>` tags within each technology item.
    *   Action: Ensure the `src` attribute follows the pattern `/icons/<technology-name>.svg` (e.g., `/icons/tailwind-css.svg`). Double-check the logic generating these paths if applicable.

## Phase 4: Footer & CTA Unification

1.  **Style CTA Section:**
    *   Target: "Explore the Project" section (CTA).
    *   Actions:
        *   Apply `bg-slate-900` background.
        *   Ensure text uses light colors (e.g., `text-slate-200`, `text-primary-foreground`) for contrast.
        *   Center content (`text-center`, `flex justify-center items-center`, etc.).
        *   Set button variant appropriately (e.g., `variant="secondary"`).
2.  **Style Footer Top Band:**
    *   Target: `div` inside `<footer>` (previously `bg-blue-600`).
    *   Actions:
        *   Change background to `bg-slate-900`.
        *   Ensure all text ("VMP+", description, "Resources" heading, links) uses light colors (e.g., `text-slate-200`, `text-blue-100`).
        *   Adjust link hover states (e.g., `hover:text-white`).
3.  **Verify Footer Bottom Band:**
    *   Target: Copyright `div` inside `<footer>`.
    *   Action: Confirm it retains `bg-slate-100` and `text-slate-500`.

## Phase 5: Review and Refinement

1.  **Visual Flow Check:** Review the entire page for smooth transitions between sections.
2.  **Contrast Verification:** Double-check text contrast ratios across all sections and backgrounds.
3.  **Responsiveness Testing:** Verify the layout and appearance on various screen sizes (mobile, tablet, desktop).
4.  **Code Cleanup:** Remove any unused or redundant CSS classes resulting from the changes.
