# Arxcess UI Library

A shadcn-inspired Angular UI library with complete theme system, built with Tailwind CSS v4 and Angular CDK.

## 🎨 Features

- **Complete shadcn Theme System**: Exact color palette, variables, and styling
- **Tailwind CSS v4**: Modern CSS-first approach with `@theme` directive
- **Angular CDK Integration**: Accessibility and complex interactions
- **Standalone Components**: Modern Angular architecture
- **TypeScript**: Full type safety with variant props
- **Responsive Design**: Mobile-first approach
- **Dark Mode Support**: Built-in light/dark theme switching

## 🚀 Quick Start

### Installation

```bash
npm install @arxcess/ui
```

### Setup Tailwind CSS

Add to your `styles.css`:

```css
@import "tailwindcss";

@theme {
  /* shadcn/ui exact color system */
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --radius: 0.5rem;
}

@layer base {
  /* Light theme - exact shadcn values */
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
  }

  /* Dark theme - exact shadcn values */
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.1%;
  }

  * {
    border-color: hsl(var(--border));
  }

  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
}
```

## 📦 Components

### Button

```typescript
import { ButtonComponent } from '@arxcess/ui';

@Component({
  imports: [ButtonComponent],
  template: `
    <ui-button>Default</ui-button>
    <ui-button variant="destructive">Destructive</ui-button>
    <ui-button variant="outline">Outline</ui-button>
    <ui-button variant="secondary">Secondary</ui-button>
    <ui-button variant="ghost">Ghost</ui-button>
    <ui-button variant="link">Link</ui-button>
    
    <ui-button size="sm">Small</ui-button>
    <ui-button size="lg">Large</ui-button>
    <ui-button size="icon">🚀</ui-button>
    
    <ui-button [loading]="true">Loading</ui-button>
    <ui-button [disabled]="true">Disabled</ui-button>
  `
})
```

**Variants:**
- `default` - Primary button
- `destructive` - Red button for dangerous actions
- `outline` - Outlined button
- `secondary` - Secondary button
- `ghost` - Ghost button
- `link` - Link-style button

**Sizes:**
- `sm` - Small button
- `default` - Default button
- `lg` - Large button
- `icon` - Square icon button

### Input

```typescript
import { InputComponent } from '@arxcess/ui';

@Component({
  imports: [InputComponent],
  template: `
    <ui-input placeholder="Enter text..." />
    <ui-input placeholder="Disabled input" [disabled]="true" />
    <ui-input placeholder="Invalid input" [invalid]="true" />
    <ui-input type="password" placeholder="Enter password" />
  `
})
```

**Features:**
- Form integration with `ControlValueAccessor`
- Validation states
- Accessibility attributes
- Type support (text, password, email, etc.)

### Modal

```typescript
import { ModalComponent } from '@arxcess/ui';

@Component({
  imports: [ModalComponent],
  template: `
    <ui-button (click)="modal.open()">Open Modal</ui-button>
    
    <ui-modal #modal title="Demo Modal">
      <p>Modal content goes here</p>
      <div class="flex justify-end gap-2">
        <ui-button variant="outline" (click)="modal.close()">Cancel</ui-button>
        <ui-button (click)="modal.close()">Confirm</ui-button>
      </div>
    </ui-modal>
  `
})
```

**Features:**
- Angular CDK overlay integration
- Focus trap for accessibility
- Backdrop click to close
- Escape key to close
- Customizable positioning

## 🎨 Theme System

The library uses the exact shadcn/ui color system with CSS variables:

### Light Theme Colors
- **Primary**: Blue (#3b82f6)
- **Secondary**: Light gray (#f1f5f9)
- **Destructive**: Red (#ef4444)
- **Muted**: Light gray (#f8fafc)
- **Accent**: Light gray (#f1f5f9)

### Dark Theme Colors
- **Primary**: Light blue (#60a5fa)
- **Secondary**: Dark gray (#1e293b)
- **Destructive**: Dark red (#dc2626)
- **Muted**: Dark gray (#1e293b)
- **Accent**: Dark gray (#1e293b)

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm 9+

### Setup
```bash
git clone <repository>
cd arxcess-ui-lib
npm install
```

### Build
```bash
npx nx build ui
```

### Serve Demo App
```bash
npx nx serve demo-app
```

### Test
```bash
npx nx test ui
```

## 📁 Project Structure

```
arxcess-ui-lib/
├── apps/
│   └── demo-app/          # Demo application
├── ui/                    # UI library
│   ├── src/
│   │   ├── lib/
│   │   │   ├── button/    # Button component
│   │   │   ├── input/     # Input component
│   │   │   ├── modal/     # Modal component
│   │   │   └── utils.ts   # Utility functions
│   │   └── index.ts       # Public API
│   └── package.json       # Library metadata
└── package.json           # Root dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the design system inspiration
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Angular CDK](https://material.angular.io/cdk) for accessibility and interactions