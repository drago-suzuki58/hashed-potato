(async () => {
  const buf = await crypto.subtle.digest("SHA-1", new TextEncoder().encode("potato"));
  const hex = [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  const label = location.hostname.split(".")[0];
  console.log(`%cSHA-1("potato") = ${hex}`, "font-family:monospace");
  console.log(label === hex
    ? "✔ hash verified. enjoy your hashed potato."
    : "✘ hash mismatch. this potato may have been tampered with.");
})();

if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js");
