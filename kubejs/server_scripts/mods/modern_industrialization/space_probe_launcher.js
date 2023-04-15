ServerEvents.recipes(e => {
    let astra = (id) => `ad_astra:${id}`;
    let kjs = (id) => `kubejs:${id}`;

    e.recipes.modern_industrialization.space_probe_launcher(128, 12000)
        .itemIn(kjs('space_probe'))
        .itemOut('64x ' + astra('deepslate_desh_ore'))
        .itemOut('64x ' + astra('deepslate_ostrum_ore'))
        .itemOut('64x ' + astra('deepslate_calorite_ore'))
        .itemOut('64x ' + astra('deepslate_ice_ore'))
        .biome(astra('orbit'));
});