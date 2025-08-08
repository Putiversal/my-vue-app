export function initRaylib(canvas) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "./index.js";
    script.onload = () => {
      window.Module = {
        canvas: canvas,
        onRuntimeInitialized: () => {
          resolve(window.Module);
        },
        onAbort: reject,
      };
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
}
