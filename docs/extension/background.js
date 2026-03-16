browser.webRequest.onHeadersReceived.addListener(
  function(details) {

    for (let header of details.responseHeaders) {

      if (header.name.toLowerCase() === "content-type") {

        if (header.value.includes("application/pdf")) {

          return {
            redirectUrl:
            browser.runtime.getURL("web/viewer.html") +
              "?file=" +
              encodeURIComponent(details.url)
          };

        }

      }

    }

  },
  {
    urls: ["<all_urls>"],
    types: ["main_frame", "sub_frame"]
  },
  ["blocking", "responseHeaders"]
);
