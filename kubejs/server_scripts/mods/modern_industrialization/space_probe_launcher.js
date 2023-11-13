// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/space_probe_launcher/${id}`;

    // -- SPACE PROBE -- //
    spl(
        event,
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