# Changelog

## 2024-06-10 — WalkBuddy Full Branding, Auth, and Dashboard Foundation

### Added
- WalkBuddy brand and positioning content throughout the public landing page, authentication, and dashboard surfaces.
- Minimal dashboard routes and pages:
  - `/dashboard/overview` — Business Overview page (add walks/clients CTA)
  - `/dashboard/dogs` — Dogs List page with empty state and "Add Dog" CTA
  - `/dashboard/dogs/new` — Add Dog page with placeholder input/button
  - `/dashboard/walks` — Walks List page with empty state and "Schedule Walk" CTA
  - `/dashboard/clients` — Clients List page with empty state and "Invite a Client" CTA
- Updated sidebar navigation (`components/dashboard/sidebar-nav.tsx`) to include Overview, Dogs, Walks, Clients, and Settings per spec
- Dashboard layout rebranded for WalkBuddy (logo/initials, name, theme)
- Dashboard welcome content as per WalkBuddy job/CTA requirements

### Changed
- Full update to `content/home.ts` for WalkBuddy homepage, pricing, features, sections, navbar/footer, and ALL marketing copy
- Updated all auth UI headings, subheadings, and helper text for WalkBuddy brand in:
  - Sign-in
  - Sign-up
  - Forgot password
- Applied new dashboard welcome, CTA, and empty states for all key SaaS surfaces

### Owner/Contact
- Owner: Simon Dutta
- Email: simon@bidx.ai (used on contact and in mail/mailto on landing and dashboard)

### ENV Vars Required
- `OPENAI_API_KEY` for any AI features (future)
- Project currently references all required environment variables (see ENV sample)

---