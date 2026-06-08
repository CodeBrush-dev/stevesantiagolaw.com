// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.stevesantiagolaw.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.stevesantiagolaw.com/","title_tag":"Criminal Defense Florida & DUI Sarasota | Steve Santiago Law","meta_description":"Criminal Defense Florida firm handling DUI Sarasota, Battery, Theft, Marijuana possession, probation violations, expungements, and traffic cases in Manatee & Sarasota."},{"page_url":"https://www.stevesantiagolaw.com/espanol-1","title_tag":"Criminal Defense Manatee & DUI Sarasota | Abogado Steve Santiago","meta_description":"Abogado de Criminal Defense Florida. Casos de DUI Sarasota, violaciones de probatoria, delitos menores, robo, batería, y más en condados Manatee, Sarasota y alrededores."}],"keywords":["criminal defense manatee","dui sarasota","battery attorney manatee","theft lawyer sarasota","expungement services manatee","probation violations sarasota","marijuana possession lawyer","shoplifting attorney manatee","traffic violations sarasota","criminal defense florida"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.stevesantiagolaw.com/#legalservice",
  "name": "Law Office of Steve Santiago",
  "url": "https://www.stevesantiagolaw.com/",
  "image": [
    "https://static.wixstatic.com/media/43255c_cc7719edc38d4aedab18a085deb71eab%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/43255c_cc7719edc38d4aedab18a085deb71eab%7Emv2.jpg",
    "https://static.wixstatic.com/media/43255c_0a85b86eb68f4e68b31ed85ef63370a9~mv2_d_3150_2550_s_4_2.jpg/v1/fill/w_245,h_199,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/43255c_0a85b86eb68f4e68b31ed85ef63370a9~mv2_d_3150_2550_s_4_2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/43255c_cc7719edc38d4aedab18a085deb71eab%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/43255c_cc7719edc38d4aedab18a085deb71eab%7Emv2.jpg",
  "description": "The Law Office of Steve Santiago is dedicated 100% to criminal defense, handling DUIs, domestic battery, shoplifting, petit theft, possession of marijuana, license offenses, record expungements and sealings, violations of probation, traffic citations and related criminal matters in Manatee County and Sarasota County, Florida. Free consultations. Hablamos Español.",
  "telephone": "+1-941-749-1888",
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Manatee County, Florida"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Sarasota County, Florida"
    }
  ],
  "email": "stevesantiagolaw@gmail.com",
  "founder": {
    "@type": "Person",
    "name": "Steve Santiago",
    "jobTitle": "Criminal Defense Attorney",
    "description": "Attorney Steve Santiago has devoted his legal practice to defending the rights of clients charged with crimes in Florida and practices primarily in Manatee County and Sarasota County. He is a graduate of the Florida State University College of Law.",
    "telephone": "+1-941-900-4843"
  },
  "sameAs": [],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-941-749-1888",
      "contactType": "office",
      "availableLanguage": [
        "English",
        "Spanish"
      ]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-941-900-4843",
      "contactType": "cell",
      "availableLanguage": [
        "English",
        "Spanish"
      ]
    }
  ],
  "knowsLanguage": [
    "English",
    "Spanish"
  ],
  "serviceType": [
    "Criminal Defense",
    "DUI Defense",
    "Domestic Battery Defense",
    "Shoplifting Defense",
    "Petit Theft Defense",
    "Possession of Marijuana Defense",
    "License and Traffic Offenses Defense",
    "Record Expungement and Sealing",
    "Violation of Probation Defense",
    "Traffic Citations and Tickets Defense"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Criminal Defense Practice Areas",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "DUI Defense",
          "description": "Representation for DUI charges in Florida, including cases proven by impairment of normal faculties or unlawful blood or breath alcohol level of 0.08 or higher."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Driving While License Suspended Defense",
          "description": "Defense for charges of driving while license suspended in Florida."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "No Valid Driver's License Defense",
          "description": "Representation for charges involving no valid driver's license in Florida."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Domestic Battery and Simple Battery Defense",
          "description": "Defense for domestic battery, simple battery, and related misdemeanor or felony battery charges in Florida."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Theft, Petit Theft, Shoplifting Defense",
          "description": "Representation for petit theft, shoplifting, theft and grand theft charges in Florida."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Possession of Marijuana Defense",
          "description": "Defense for possession of marijuana and related drug offenses in Florida."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Violation of Probation (VOP) Defense",
          "description": "Representation for alleged violations of probation in Florida criminal cases."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Record Expungement and Sealing",
          "description": "Assistance with expungement and sealing of eligible Florida criminal records."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Traffic and Habitual Traffic Offender Defense",
          "description": "Defense for traffic citations, traffic tickets, speeding, moving and non-moving violations, and habitual traffic offender cases in Florida."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
