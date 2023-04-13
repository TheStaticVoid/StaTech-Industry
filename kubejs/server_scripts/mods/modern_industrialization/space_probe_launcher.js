ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let astra = (id) => `ad_astra:${id}`;
    let kjs = (id) => `kubejs:${id}`;

    // let spl = (eu, duration, item_inputs, item_outputs) => {
    //     let newRecipe = {
    //         dimension: 'space',
    //         type: mi('space_probe_launcher'),
    //         eu: eu,
    //         duration: duration
    //     }

    //     if (item_inputs)
    //         newRecipe['item_inputs'] = item_inputs;
    //     if (item_outputs)
    //         newRecipe['item_outputs'] = item_outputs;

    //     e.custom(newRecipe);
    // }

    e.recipes.modern_industrialization.space_probe_launcher(128, 12000)
        .itemIn(kjs('space_probe'))
        .itemOut('48x ' + astra('deepslate_desh_ore'))
        .itemOut('48x ' + astra('deepslate_ostrum_ore'))
        .itemOut('48x ' + astra('deepslate_calorite_ore'))
        .biome(astra('orbit'));
});