// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// window.netlifyIdentity:any
declare global {
  interface Window {
    netlifyIdentity: any;
  }
}
