// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/space_probe_launcher/${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let spl = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('space_probe_launcher'),
            eu: eu,
            duration: duration,
            id: id,
            process_conditions: [{'biome': 'ad_astra:orbit', 'id': 'modern_industrialization:biome'} ]
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe);
    }

    // -- SPACE PROBE -- //
    spl(
        st('space_probe'),
        128,
        6000,
        [ { amount: 1, item: kj('space_probe'), probability: 0.75 } ],
        [ 
            { amount: 64, item: ad('moon_desh_ore') },
            { amount: 64, item: ad('mars_ostrum_ore') },
            { amount: 64, item: ad('venus_calorite_ore') },
            { amount: 64, item: ad('deepslate_ice_shard_ore') },
            { amount: 64, item: ad('moon_cheese_ore') },
            { amount: 64, item: ad('moon_sand') },
            { amount: 64, item: ad('moon_stone') },
            { amount: 64, item: ad('mars_sand') },
            { amount: 64, item: ad('mars_stone') },
            { amount: 64, item: ad('venus_sand') },
            { amount: 64, item: ad('venus_stone') },
            { amount: 64, item: ad('mercury_stone') },
            { amount: 64, item: ad('infernal_spire_block') }
        ]
    );
});