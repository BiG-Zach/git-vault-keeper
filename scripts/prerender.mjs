import { prerender } from 'vite-plugin-ssr/cli'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { routes } from '../src/utils/routes.js';
import { blogRoutes } from '../src/utils/blogRoutes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

;(async () => {
    // Pre-render all blog routes
    const allBlogRoutes = blogRoutes.map(route => route.path);

    await prerender({
        // We pass the list of all routes to be pre-rendered
        pageRoutes: [
            ...routes.map(route => route.path),
            ...allBlogRoutes
        ],
    })
})()
