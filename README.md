# Socore UI

A reusable UI component set for Socore applications, built with React + TypeScript + Vite.

This work was developed for Socore Tech. by Ebubekir Yazgan (yazganebubekir4@gmail.com, GitHub: @_bekiryazgann). For more information, visit: https://socore.net/ui?ref=socore-ui (redirects to socore.net).

## Table of Contents
- About the Project
- Installation & Running
- Scripts
- Architecture & Technologies
- Available Components
- Proposed/Missing Components
- Contribution & Development Notes

## About the Project
Socore UI is a component library built on top of Radix UI primitives, styled with Tailwind CSS, and documented via Storybook. The goal is to provide consistent, accessible, and testable interface components across Socore products.

## Installation & Running
Prerequisites: Node.js 20+, pnpm/npm/yarn (commands below use npm as an example).

1. Install dependencies:
   - npm install
2. Start the development server:
   - npm run dev
3. Start Storybook (recommended for component stories):
   - npm run storybook

For production builds:
- npm run build
- npm run preview (local preview)

## Scripts
- dev: Vite development server
- build: Builds TypeScript projects, then creates a production build with Vite
- preview: Serves the production build locally
- lint: Checks code quality with ESLint
- storybook: Storybook development server
- build-storybook: Generates static Storybook output

## Architecture & Technologies
- React 19, TypeScript, Vite 7
- Tailwind CSS 4 and tailwind-merge
- Radix UI (@radix-ui/*) primitives
- Storybook 10 for component documentation
- Supporting libraries: clsx, class-variance-authority, date-fns, lucide-react, tabler icons, embla-carousel-react, input-otp, vaul, etc.

## Available Components
The following components exist under src/components and ship with their corresponding .tsx and .stories.tsx files:

- Accordion (accordion)
- Alert Dialog (alert-dialog)
- Badge (badge)
- Button (button)
- Button Group (button-group)
- Calendar (calendar)
- Card (card)
- Carousel (carousel)
- Checkbox (checkbox)
- Dialog (dialog)
- Drawer (drawer)
- Dropdown Menu (dropdown-menu)
- Empty State (empty)
- Field (field)
- Hover Card (hover-card)
- Input (input)
- Input Group (input-group)
- Input OTP (input-otp)
- Label (label)
- Separator (separator)
- Textarea (textarea)
- Tooltip (tooltip)

Each component includes its Storybook files (.stories.tsx) and index exports (index.ts/tsx). Styling relies on Tailwind utility classes and, when appropriate, class-variance-authority for variant management.

## Proposed/Missing Components
To round out the scope and enrich the design system, the following components are recommended:

- Avatar (user image and status indicator)
- Breadcrumb (navigation trail)
- Pagination (page navigation)
- Progress (progress bar)
- Skeleton (loading skeleton)
- Slider (range selector)
- Switch (toggle)
- Radio Group (single selection)
- Select / Combobox (dropdown selection)
- Tabs (tabbed navigation)
- Table (data table with sorting/filtering support)
- Toast/Notification (notification system)
- Rich content pieces for Tooltip/Popover variants
- Date Range Picker (range selection on calendar)
- File Upload (with status tracking and accepted types)

Note: Several items can be implemented quickly with Radix or existing libraries (e.g., Switch, Radio Group, Select). Prioritize based on product needs, accessibility (a11y), and reuse frequency.

## Contribution & Development Notes
- Code style and rules: ESLint, strict TypeScript settings, and React Hooks rules are enabled.
- Writing stories: For every new component, add a .stories.tsx file covering basic and edge cases.
- Accessibility: Follow a11y best practices of Radix UI primitives; validate role/aria attributes.
- Testing: Prefer Storybook interaction tests and add unit/interaction tests with vitest where applicable.

## Attribution
This project was created for Socore Tech. and developed by Ebubekir Yazgan (yazganebubekir4@gmail.com, @_bekiryazgann). Corporate homepage: https://socore.net
