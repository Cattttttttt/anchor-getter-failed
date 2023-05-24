import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://*.google.com/*"]
}

// toggle the comments below
// export const getOverlayAnchor: PlasmoGetOverlayAnchor = () => {
//   return document.querySelector("body > div")
// }

const App = () => <div>Hello World!</div>

export default App
