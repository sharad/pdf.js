// browser.webRequest.onHeadersReceived.addListener(
//   function(details) {

//     for (let header of details.responseHeaders) {

//       if (header.name.toLowerCase() === "content-type") {

//         if (header.value.includes("application/pdf")) {

//           return {
//             redirectUrl:
//             browser.runtime.getURL("web/viewer.html") +
//               "?file=" +
//               encodeURIComponent(details.url)
//           };

//         }

//       }

//     }

//   },
//   {
//     urls: ["<all_urls>"],
//     types: ["main_frame", "sub_frame"]
//   },
//   ["blocking", "responseHeaders"]
// );


// browser.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     // Only intercept top-level navigation
//     if (details.type !== "main_frame") return;

//     // Intercept .pdf URLs
//     if (details.url.toLowerCase().includes(".pdf")) {
//       console.log("Intercepting:", details.url);

//       return {
//         redirectUrl:
//         browser.runtime.getURL("web/viewer.html") +
//           "?file=" +
//           encodeURIComponent(details.url),
//       };
//     }
//   },
//   {
//     urls: ["<all_urls>"],
//   },
//   ["blocking"]
// );





browser.webRequest.onHeadersReceived.addListener(
  async function (details) {
    const url = details.url;

    // Handle PDF via Content-Type
    const isPDF = details.responseHeaders?.some(
      h =>
        h.name.toLowerCase() === "content-type" &&
        h.value.includes("application/pdf")
    );

    if (!isPDF) return;

    // 🔴 CASE 1: file://
    if (url.startsWith("file://")) {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        return {
          redirectUrl:
            browser.runtime.getURL("web/viewer.html") +
            "?file=" +
            encodeURIComponent(blobUrl),
        };
      } catch (e) {
        console.error("Failed to load local file:", e);
      }
    }

    // 🟢 CASE 2: http/https
    return {
      redirectUrl:
        browser.runtime.getURL("web/viewer.html") +
        "?file=" +
        encodeURIComponent(url),
    };
  },
  {
    urls: ["<all_urls>"],
    types: ["main_frame"],
  },
  ["blocking", "responseHeaders"]
);
