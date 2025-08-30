// lib/gtag.js
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

/**
 * Check if GA is available
 */
const isGAReady = () =>
  typeof window !== "undefined" &&
  typeof window.gtag === "function" &&
  GA_MEASUREMENT_ID;

/**
 * Track a page view
 */
export const pageview = (url) => {
  if (!isGAReady()) {
    console.warn("[GA] gtag not ready, skipping pageview:", url);
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

/**
 * Track a custom event
 */
export const event = ({ action, params = {} }) => {
  if (!isGAReady()) {
    console.warn("[GA] gtag not ready, skipping event:", action, params);
    return;
  }

  window.gtag("event", action, params);
};
