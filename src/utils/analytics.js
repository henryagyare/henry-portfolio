/**
 * Analytics tracking utilities.
 * Checks for the existence of window.gtag before forwarding events.
 */

export function track(eventName, params = {}) {
  if (typeof window.gtag !== "function") {
    // Log to console in development mode if needed
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event] ${eventName}`, params);
    }
    return;
  }

  window.gtag("event", eventName, {
    ...params,
    page_location: window.location.href
  });
}

export function isExternalLink(urlStr) {
  try {
    const url = new URL(urlStr);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}
