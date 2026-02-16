# Dataloop Components Library v2

A Vue 3 component library for the Dataloop platform, built with TypeScript and Vite. This library includes custom-made Vue components with [Storybook](https://storybook.js.org/) documentation and [Figma](https://www.figma.com/) design integration.

**[View Storybook Documentation](https://dataloop-ai.github.io/components-v2/?path=/docs/library-components-dlalert--docs)**

## Tech Stack

- **Vue 3** with Composition API and `<script setup>` SFCs
- **TypeScript** for type safety
- **Vite 7** as the build tool
- **Storybook 10** for component documentation and visual testing
- **@storybook/addon-designs** for Figma design integration

## Components

| Component | Description |
|-----------|-------------|
| **DlButton** | Button with variants (filled, outlined, flat), sizes, colors, and disabled state |
| **DlAlert** | Alert banner with types (success, warning, error, info), optional title, and closable option |
| **DlBadge** | Badge/tag with color variants, sizes, and filled/outlined styles |

## Getting Started

### Prerequisites

- Node.js >= 20
- npm

### Installation

```bash
npm install
```

### Development

Run the Vite dev server:

```bash
npm run dev
```

Run Storybook to browse and develop components:

```bash
npm run storybook
```

### Build

Build the component library:

```bash
npm run build
```

Build Storybook for static deployment:

```bash
npm run build-storybook
```

## Figma Integration

This project uses `@storybook/addon-designs` to embed Figma designs directly in the Storybook UI. Each component story includes a **Design** tab in the addon panel that renders the corresponding Figma frame.

To link a component to its Figma design, set the `parameters.design` block in the story file:

```typescript
export const MyStory: Story = {
  args: { /* ... */ },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE?node-id=NODE_ID',
    },
  },
};
```

> **Note:** The Figma file must have its sharing set to "Anyone with the link can view" for the embed to render.

## Deployment

Storybook is automatically deployed to GitHub Pages on every push to `main` via the [deploy-docs](.github/workflows/deploy-docs.yml) workflow. It can also be triggered manually from the Actions tab.

## Project Structure

```
components-v2/
  .github/workflows/    # CI/CD workflows
  .storybook/           # Storybook configuration
  src/
    components/
      DlButton/         # Button component + stories
      DlAlert/          # Alert component + stories
      DlBadge/          # Badge component + stories
  package.json
  vite.config.ts
  tsconfig.json
```

## Related

- [dataloop-ai/components](https://github.com/dataloop-ai/components) -- Original Dataloop component library (Vue 3, Storybook 7)
