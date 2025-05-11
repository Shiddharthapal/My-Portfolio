/* empty css                                 */
import { e as createAstro, f as createComponent, i as renderHead, j as renderSlot, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_Dtpg7Cf-.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://shiddharthapal_29.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body> <div class="min-h-screen"> <main> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "C:/All Projects ,Code/Projects/My Portfolio/src/layouts/Layout.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/All Projects ,Code/Projects/My Portfolio/src/components/App", "client:component-export": "default" })} ` })}`;
}, "C:/All Projects ,Code/Projects/My Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/All Projects ,Code/Projects/My Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
