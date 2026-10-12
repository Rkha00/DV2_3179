// Render charts as SVG and wait for the web fonts to load first,
// so chart text uses the same typeface as the page.
const embedOptions = { actions: false, renderer: "svg" };

const charts = [
  ["#waffle_autism", "js/specs/waffle_autism.vg.json"],
  ["#slope_autism", "js/specs/slope_autism.vg.json"],
  ["#line_adhd", "js/specs/line_adhd.vg.json"],
  ["#dot_autism_sex", "js/specs/dot_autism_sex.vg.json"],
  ["#butterfly_age_group", "js/specs/butterfly_age_group.vg.json"],
  ["#map_choropleth", "js/specs/map_choropleth.vg.json"],
  ["#map_symbols", "js/specs/map_symbols.vg.json"],
  ["#map_tiles", "js/specs/map_tiles.vg.json"],
  ["#heatmap_state_group", "js/specs/heatmap_state_group.vg.json"],
  ["#lollipop_budget", "js/specs/lollipop_budget.vg.json"],
  ["#stacked_budget_split", "js/specs/stacked_budget_split.vg.json"],
  ["#dot_school_support", "js/specs/dot_school_support.vg.json"],
];

document.fonts.ready.then(() => {
  charts.forEach(([el, spec]) => vegaEmbed(el, spec, embedOptions));
});
