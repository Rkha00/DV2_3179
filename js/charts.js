// Render charts as SVG and wait for the web fonts to load first,
// so chart text uses the same typeface as the page.
const embedOptions = { actions: false, renderer: "svg" };

const charts = [
  ["#map_choropleth", "js/specs/map_choropleth.vg.json"],
];

document.fonts.ready.then(() => {
  charts.forEach(([el, spec]) => vegaEmbed(el, spec, embedOptions));
});
