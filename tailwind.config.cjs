// tailwind.config.cjs
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton-svelte'), '../**/*.svelte')
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    skeleton({
      themes: {
        preset: ['skeleton'] // puedes usar 'modern', 'rocket', 'wintry', etc.
      }
    })
  ]
};
