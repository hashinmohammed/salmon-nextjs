export const GA_TRACKING_ID = "G-Q8F0Z4B1X2";

/* -------------------------
   🟢 Initialization
-------------------------- */
export const initGA = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("js", new Date());
    window.gtag("config", GA_TRACKING_ID, { send_page_view: true });
  }
};

/* -------------------------
   📄 Page & Navigation
-------------------------- */
export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag("config", GA_TRACKING_ID, { page_path: url });
  }
};

export const trackNavigation = (from, to) => {
  if (window.gtag) {
    window.gtag("event", "navigation", {
      event_category: "Navigation",
      event_label: `From: ${from} → To: ${to}`,
    });
  }
};

/* -------------------------
   🖱️ User Interactions
-------------------------- */
export const trackButtonClick = (buttonName) => {
  if (window.gtag) {
    window.gtag("event", "button_click", {
      event_category: "User Interaction",
      event_label: buttonName,
    });
  }
};

export const trackLinkClick = (linkUrl) => {
  if (window.gtag) {
    window.gtag("event", "link_click", {
      event_category: "User Interaction",
      event_label: linkUrl,
    });
  }
};

export const trackFormSubmit = (formName) => {
  if (window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "Form",
      event_label: formName,
    });
  }
};

export const trackInputFocus = (inputName) => {
  if (window.gtag) {
    window.gtag("event", "input_focus", {
      event_category: "Form Interaction",
      event_label: inputName,
    });
  }
};

export const trackVideoPlay = (videoTitle) => {
  if (window.gtag) {
    window.gtag("event", "video_play", {
      event_category: "Media",
      event_label: videoTitle,
    });
  }
};

export const trackVideoPause = (videoTitle) => {
  if (window.gtag) {
    window.gtag("event", "video_pause", {
      event_category: "Media",
      event_label: videoTitle,
    });
  }
};

/* -------------------------
   🕹️ Engagement & Behavior
-------------------------- */
export const trackScroll = (percent) => {
  if (window.gtag) {
    window.gtag("event", "scroll", {
      event_category: "Engagement",
      event_label: `Scrolled ${percent}%`,
      value: percent,
    });
  }
};

export const trackTimeSpent = (seconds, page = undefined) => {
  if (window.gtag) {
    window.gtag("event", "time_on_page", {
      event_category: "Engagement",
      event_label: page || "Time on Page",
      value: seconds,
    });
  }
};

// Sends the running average time on page (useful when you compute averages client-side)
export const trackAverageTimeOnPage = (avgSeconds, page = undefined) => {
  if (window.gtag) {
    window.gtag("event", "average_time_on_page", {
      event_category: "Engagement",
      event_label: page || "Average Time on Page",
      value: avgSeconds,
    });
  }
};

export const trackIdleUser = (secondsIdle) => {
  if (window.gtag) {
    window.gtag("event", "user_idle", {
      event_category: "Engagement",
      event_label: `Idle for ${secondsIdle} seconds`,
    });
  }
};

export const trackSearch = (query) => {
  if (window.gtag) {
    window.gtag("event", "search", {
      event_category: "Search",
      event_label: query,
    });
  }
};

/* -------------------------
   🛒 E-Commerce / Purchase
-------------------------- */
export const trackAddToCart = (productName, price, quantity = 1) => {
  if (window.gtag) {
    window.gtag("event", "add_to_cart", {
      event_category: "E-commerce",
      event_label: productName,
      value: price * quantity,
      items: [{ name: productName, price, quantity }],
    });
  }
};

export const trackRemoveFromCart = (productName, price, quantity = 1) => {
  if (window.gtag) {
    window.gtag("event", "remove_from_cart", {
      event_category: "E-commerce",
      event_label: productName,
      value: price * quantity,
      items: [{ name: productName, price, quantity }],
    });
  }
};

export const trackPurchase = (transactionId, totalValue, items) => {
  if (window.gtag) {
    window.gtag("event", "purchase", {
      event_category: "E-commerce",
      event_label: transactionId,
      transaction_id: transactionId,
      value: totalValue,
      items,
    });
  }
};

export const trackViewItem = (productName, price) => {
  if (window.gtag) {
    window.gtag("event", "view_item", {
      event_category: "E-commerce",
      event_label: productName,
      value: price,
    });
  }
};

/* -------------------------
   👤 User Authentication
-------------------------- */
export const trackLogin = (method) => {
  if (window.gtag) {
    window.gtag("event", "login", {
      event_category: "Authentication",
      event_label: `Login via ${method}`,
    });
  }
};

export const trackSignup = (method) => {
  if (window.gtag) {
    window.gtag("event", "sign_up", {
      event_category: "Authentication",
      event_label: `Signup via ${method}`,
    });
  }
};

export const trackLogout = () => {
  if (window.gtag) {
    window.gtag("event", "logout", {
      event_category: "Authentication",
      event_label: "User Logged Out",
    });
  }
};

/* -------------------------
   ⚙️ Performance & Errors
-------------------------- */
export const trackApiCall = (endpoint, status) => {
  if (window.gtag) {
    window.gtag("event", "api_call", {
      event_category: "Network",
      event_label: `${endpoint} (${status})`,
    });
  }
};

export const trackError = (message, source) => {
  if (window.gtag) {
    window.gtag("event", "error", {
      event_category: "Error",
      event_label: message,
      value: source || "unknown",
    });
  }
};

export const trackPerformance = (metricName, value) => {
  if (window.gtag) {
    window.gtag("event", "performance_metric", {
      event_category: "Performance",
      event_label: metricName,
      value,
    });
  }
};
