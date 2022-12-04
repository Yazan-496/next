export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTM
import gtag from "ga-gtag"
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  gtag("config", GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  gtag("event", action, {
    user_id_dimension: category,
    event_label: label,
    value: value
  })
}
