// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/packer/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let ae = (id) => `ae2:${id}`;
    let bl = (id) => `blockus:${id}`;

    // -- PACKER REMOVED RECIPES -- //
    const REMOVED_RECIPE = [
        mi('materials/packer/mixed_ingot_blastproof'),
        mi('compat/ae2/printed_calculation_processor'),
        mi('compat/ae2/printed_engineering_processor'),
        mi('compat/ae2/printed_logic_processor'),
        mi('compat/ae2/printed_silicon'),
        mi('compat/ae2/printed_silicon_from_ingot')
    ];
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let packer = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('packer'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    }

    // -- CHARCOAL BLOCK -- //
    packer(
        st('charcoal_block'),
        2,
        200,
        [ 
            { amount: 9, item: mc('charcoal') },
            { amount: 1, item: mi('packer_block_template'), probability: 0.0 }
        ],
        [ { amount: 1, item: bl('charcoal_block') } ]
    );

    // -- LARGE STEAM FURNACE -- //
    packer(
        st('large_steam_furnace'),
        4,
        200,
        [
            { amount: 1, item: mc('furnace') },
            { amount: 7, item: mc('bricks') },
            { amount: 1, item: mi('coke') }
        ],
        [ { amount: 1, item: mi('large_steam_furnace') } ]
    );

    // -- PYRITE DUST -- //
    packer(
        st('pyrite_dust'),
        8,
        200,
        [ { amount: 4, tag: 'c:pyrite_small_dusts' } ],
        [ { amount: 1, item: tr('pyrite_dust') } ]
    );

    // -- CALCITE DUST -- //
    packer(
        st('calcite_dust'),
        8,
        200,
        [ { amount: 4, tag: 'c:calcite_small_dusts' } ],
        [ { amount: 1, item: tr('calcite_dust') } ]
    );

    // -- SODALITE DUST -- //
    packer(
        st('sodalite_dust'),
        8,
        200,
        [ { amount: 4, tag: 'c:sodalite_small_dusts' } ],
        [ { amount: 1, item: tr('sodalite_dust') } ]
    );

    // -- IRIDIUM ALLOY INGOT -- //
    packer(
        st('iridium_alloy_ingot'),
        24,
        300,
        [
            { amount: 4, item: mi('iridium_plate') },
            { amount: 1, item: mi('diamond_dust') },
            { amount: 4, item: tr('advanced_alloy_plate') }
        ],
        [ { amount: 1, item: tr('iridium_alloy_ingot') } ]
    );

    // -- CHAIN -- //
    packer(
        st('chain'),
        2,
        100,
        [ { amount: 3, item: mi('iron_ring') } ],
        [ { amount: 8, item: mc('chain') } ]
    );

    // -- MIXED BLASTPROOF INGOT -- //
    packer(
        st('mixed_blastproof_ingot'),
        32,
        600,
        [
            { amount: 1, item: mi('titanium_ingot') },
            { amount: 1, item: mi('tungsten_ingot') },
            { amount: 1, item: ad('ostrum_ingot') }
        ],
        [ { amount: 1, item: mi('mixed_ingot_blastproof') } ]
    );

    // -- CERTUS QUARTZ BLOCK -- //
    packer(
        st('quartz_block'),
        8,
        200,
        [ { amount: 4, item: ae('certus_quartz_crystal') } ],
        [ { amount: 1, item: ae('quartz_block') } ]
    );
})