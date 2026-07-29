Please execute a comprehensive visual and structural redesign of all frontend routes/pages based on the newly created FRONTEND_STRUCTURE.md and the attached design reference. The goal is to establish complete visual and layout consistency, applying the 'look and feel' and color palette from the attached image to the entire application, while maintaining strict layout behavior and full responsiveness.

Execute this transformation by modifying the core layout components and global styles/theme configuration, then propagating these changes across all routes. Avoid creating conflicts.

Follow these specific instructions precisely:

1.  **Reference the Image:** Use the attached image as the primary visual specification for colors, layout concepts, and overall 'vibe'. Pay special attention to the palette, especially the main blue (`#0E8ED6`) and the dark footer (`#061A29`), as well as the typography.

2.  **Logo and Favicon Implementation:**
    *   **Action:** Replace all instances of the current logo (in the header and footer) to use the file at `public/images/opexcglogo`. Ensure the footer logo uses the all-white version.
    *   **Action:** Change the application favicon to use this same logo. This likely requires updating `favicon.ico` or the link in the root layout file.

3.  **Core Layout and Responsiveness (Mandatory Behavior):**
    *   **Shared Layout:** Establish a single, shared Layout Component that all routes inherit. This layout must enforce consistency for the Header, Navigation, and Footer.
    *   **Scroll Behavior - Desktop:** For viewports wider than mobile (e.g., above 768px/1024px, or your defined breakpoint), apply strict CSS to the main content container to prevent vertical scrolling. (Hint: likely using `h-screen overflow-hidden flex flex-col` on a parent and defining the main content area with `overflow-y-auto`, or implementing full-height layout containers. *The header and footer must remain fixed/visible, with only the content area scrollable IF it exceeds the viewport, which should be avoided in this design style on desktop.* The design looks like it relies on content fitting the screen.)
    *   **Scroll Behavior - Mobile:** On viewports below your mobile breakpoint, override the desktop scroll restriction, allowing the entire page content and footer to scroll vertically as normal.
    *   **Responsiveness:** Ensure all components (navigation, hero sections, card grids, list elements) use responsive utilities (like Tailwind prefixes) to adapt fluidly across all screen sizes.

4.  **Color Palette and Theme Application:**
    *   **Action:** Define a new global theme or update the existing one (e.g., `tailwind.config.ts`, `globals.css`) using the specific color values extracted from the image.
    *   **Color Mapping:**
        *   **Action:** Apply the main blue (`#0E8ED6` or closest HSL) as the Primary Accent for all action items: primary buttons (like 'Let's Talk'), active navigation links, and small icon buttons in the services cards.
        *   **Action:** Use the dark navy/black color (`#061A29` or closest HSL) for the Footer background and large text elements.
        *   **Action:** All other elements (backgrounds, secondary text) must use neutral colors consistent with the light theme shown in the reference image.
        *   **Action:** Apply consistent padding, margins, and border radii (like the subtle rounded corners on the cards) to match the professional, clean aesthetic of the reference.

5.  **Component Styling Refinement (Apply globally):**
    *   **Header and Navigation:** Ensure the header uses the logo in the top-left, horizontal navigation (Home, About Us, etc.) in the center with a subtle active/hover state, and a primary CTA button ('Let's Talk') on the far-right, matching the reference spacing and font.
    *   **Buttons:** Style all buttons using the primary accent blue and secondary outline styles from the reference.
    *   **Footers:** Style the entire Footer using the reference structure and color scheme (dark background, white text, column structure for links, social icons, and copyright). Ensure the white logo version is used.
    *   **Page Content Vibe:** Ensure new or modified pages maintain the core page flow of the reference, which uses a clean header, a wide hero section with a specific background graphic (large, translucent 'C' shape over a modern building graphic, which you should try to replicate), followed by clean, structured data presentation (e.g., a card-based services grid).

6.  **Consistency and Propagation:**
    *   **Action:** Verify that all pages (identified in `FRONTEND_STRUCTURE.md`) inherit and render within the new shared layout and theme.
    *   **Action:** Correct any inline styles or conflicting local component styles that violate the new global consistency.
    *   **Action:** Thoroughly test the layout constraints (desktop no-scroll vs. mobile scroll) on multiple simulated device sizes before completing the task.

Start with updating the global config and layout. Let me know when this is complete and provide a summary of the files modified and the visual changes implemented.