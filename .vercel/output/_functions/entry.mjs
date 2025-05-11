import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BWoZ4Ybl.mjs';
import { manifest } from './manifest_C1AJvMIF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_---index_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.3.0_jiti@2.4.2_lightningcss@1.29.1_rollup@4.34.8_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/[...index].astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e5d934dc-3475-4067-989f-9f528f096b6e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
