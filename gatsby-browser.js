const { ScrollMagicPluginGsap } = require("scrollmagic-plugin-gsap")
const gsap = require("gsap")
const ScrollMagic = require("scrollmagic")
exports.onClientEntry = () => {
  ScrollMagicPluginGsap(ScrollMagic, gsap)
}
