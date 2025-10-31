# SaaS Landing Site with UI Kit - Customization Guide

Created by **Assistrio**

This guide will help you customize the SaaS Landing Site with UI Kit to match your brand and requirements. Get a complete SaaS landing site plus 200+ reusable UI components to customize your site or build multiple projects.

## Quick Start

1. **Update Site Configuration**: Edit `config/site.ts` with your company information
2. **Change Brand Colors**: Modify `tailwind.config.js` to match your brand
3. **Update Content**: Replace placeholder content in page files
4. **Configure Contact Form**: Set up email service in `app/api/contact/route.ts`

## Configuration File

The main configuration file is located at `config/site.ts`. Update the following:

```typescript
export const siteConfig = {
  // Basic Information
  name: "Your Company Name",
  description: "Your company description",
  url: "https://your-domain.com",
  
  // Contact Information
  contact: {
    email: "hello@your-domain.com",
    supportEmail: "support@your-domain.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business St, City, State 12345"
  },
  
  // Social Media
  social: {
    x: "@yourcompany",
    linkedin: "yourcompany",
    github: "yourcompany"
  },
  
  // App URLs
  appUrls: {
    signup: "https://app.your-domain.com/signup",
    dashboard: "https://app.your-domain.com/dashboard"
  }
};
```

## Brand Colors

Update your brand colors in `tailwind.config.js`:

```javascript
colors: {
  brand: {
    50: '#ECFEFF',    // Lightest shade
    100: '#CFFAFE',
    200: '#A5F3FC',
    300: '#67E8F9',
    400: '#2DD4BF',   // Light accent
    500: '#14B8A6',   // Primary color
    600: '#0D9488',   // Hover/active
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',   // Darkest shade
  }
}
```

## Content Customization

### Home Page (`app/page.tsx`)
- Update hero section title and description
- Modify feature descriptions
- Change industry examples
- Update testimonials
- Modify statistics

### Pricing Page (`app/pricing/PricingClient.tsx`)
- Update pricing plans in `utils/defaultPricingPlans.ts`
- Modify feature descriptions
- Change pricing tiers

### About Page (`app/about/AboutClient.tsx`)
- Update company story
- Modify team information
- Change mission statement

### Contact Page (`app/contact/page.tsx`)
- Update contact information
- Modify business hours
- Change support email

## Contact Form Setup

To make the contact form functional:

1. **Choose an email service** (SendGrid, AWS SES, etc.)
2. **Update API route** (`app/api/contact/route.ts`)
3. **Add environment variables** for API keys
4. **Test the form** functionality

Example with SendGrid:
```typescript
// In app/api/contact/route.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const msg = {
  to: 'hello@your-domain.com',
  from: 'noreply@your-domain.com',
  subject: 'New Contact Form Submission',
  text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
};

await sgMail.send(msg);
```

## SEO Configuration

Update meta tags in each page's metadata:

```typescript
export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
  keywords: ['your', 'keywords'],
  openGraph: {
    title: 'Your Page Title',
    description: 'Your page description',
    url: 'https://your-domain.com/page',
    images: [
      {
        url: 'https://your-domain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Your Image Alt Text',
      },
    ],
  },
};
```

## Images and Assets

Replace the following files in the `public` folder:
- `favicon.ico` - Your favicon
- `og-image.png` - Open Graph image (1200x630px)
- `manifest.json` - Web app manifest
- `browserconfig.xml` - Browser configuration

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect repository and deploy
- **AWS Amplify**: Connect repository and configure build settings
- **DigitalOcean App Platform**: Connect repository and deploy

## Environment Variables

Create a `.env.local` file for local development:

```env
# Email Service
SENDGRID_API_KEY=your_sendgrid_api_key
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Other Services
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

## Custom Components

### Adding New Sections
1. Create component in `components/` folder
2. Import and use in page files
3. Follow existing styling patterns

### Modifying Existing Components
- **Header**: Update navigation links in `components/Header.tsx`
- **Footer**: Modify links and information in `components/Footer.tsx`
- **Contact Form**: Customize fields in `components/ContactForm.tsx`

## Performance Optimization

- **Images**: Use Next.js Image component for optimized images
- **Fonts**: Load fonts efficiently with Next.js font optimization
- **Code Splitting**: Leverage Next.js automatic code splitting
- **Caching**: Configure appropriate cache headers

## Browser Support

This theme supports:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Support

For theme support and customization help:
- Check the documentation
- Review the code comments
- Test changes in development mode first

## License

This theme is available for purchase on Envato Market.

### Regular License
- Use for a single end product
- Sell to a single client
- One-time payment

### Extended License
- Use for multiple end products
- Sell to multiple clients
- Includes template updates

---

**Created by Assistrio**  
For questions or support, please contact us through Envato Market.
