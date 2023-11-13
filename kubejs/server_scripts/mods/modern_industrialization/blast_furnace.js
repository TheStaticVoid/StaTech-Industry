// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/blast_furnace/${id}`;
    
    // -- BLAST FURNACE REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        mi('materials/blast_furnace/steel'),
        mi('materials/aluminum/blast_furnace/dust'),
        mi('materials/aluminum/blast_furnace/tiny_dust'),
        mi('materials/blast_furnace/superconductor')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- NETHER STAR -> MOLTEN NETHER STAR -- //
    blastFurnace(
        event,
        st('nether_star'),
        128,
        300,
        [ { amount: 1, item: mc('nether_star') } ],
        null,
        null,
        [ { amount: 500, fluid: mi('molten_nether_star') } ]
    );

    // -- IMPURRE LIQUID NETHER STAR -> MOLTEN NETHER STAR -- //
    blastFurnace(
        event,
        st('molten_nether_star'),
        128,
        900,
        [ { amount: 1, item: mi('platinum_tiny_dust') } ],
        null,
        [ { amount: 1000, fluid: mi('impure_liquid_nether_star') } ],
        [ { amount: 1000, fluid: mi('molten_nether_star') } ]
    );
    
    // -- WITHERED BONE -- //
    blastFurnace(
        event,
        st('withered_bone'),
        16,
        600,
        [ 
            { amount: 16, item: 'minecraft:bone' },
            { amount: 1, item: 'minecraft:blaze_powder' }
        ],
        [ { amount: 1, item: 'architects_palette:withered_bone' } ]
    );

    // -- PIZZA -- //
    blastFurnace(
        event,
        st('pizza'),
        2,
        600,
        [ { amount: 1, item: kj('uncooked_pizza') } ],
        [ { amount: 1, item: kj('pizza') } ]
    );

    // -- UNCOOKED STEEL DUST -> STEEL INGOT -- //
    blastFurnace(
        event,
        st('steel_ingot_from_uncooked_steel'),
        2,
        1200,
        [ { amount: 1, item: mi('uncooked_steel_dust') } ],
        [ { amount: 1, item: mi('steel_ingot') } ]
    );

    // -- MOLTEN ENDERIUM -- //
    blastFurnace(
        event,
        st('molten_enderium'),
        48,
        400,
        [ { amount: 1, item: mi('steel_dust') } ],
        null,
        [ { amount: 1000, fluid: mi('liquid_ender') } ],
        [ { amount: 1000, fluid: mi('molten_enderium') } ]
    );

    // -- ENDERIUM HOT INGOT -- // 
    blastFurnace(
        event,
        st('enderium_hot_ingot'),
        64,
        400,
        [ { amount: 1, item: mi('stainless_steel_dust') } ],
        [ { amount: 1, item: mi('enderium_hot_ingot') } ],
        [ { amount: 1000, fluid: mi('molten_enderium') } ]
    );

    // -- REFINED IRON INGOT -> STEEL INGOT -- //
    blastFurnace(
        event,
        st('steel_ingot_from_refined_iron'),
        16,
        100,
        [
            { amount: 3, tag: 'c:refined_iron_ingots' },
            { amount: 1, tag: 'c:carbon_dusts' }
        ],
        [ { amount: 4, item: mi('steel_ingot') } ]
    );

    // -- ALUMINUM EBF -- //
    blastFurnace(
        event,
        st('aluminum_ingot'),
        32,
        600,
        [ { amount: 1, item: mi('aluminum_dust') } ],
        [ { amount: 1, item: mi('aluminum_ingot') } ]
    );

    // -- IRON INGOTS -> HARDENED IRON INGOT -- //
    blastFurnace(
        event,
        st('hardend_iron_ingot'),
        16,
        300,
        [ { amount: 1, tag: 'c:iron_ingots' }, ],
        [ { amount: 1, item: 'anim_guns:hardened_iron_ingot' } ]
    );

    // -- TUNGSTEN + STEEL -> HOT TUNGSTENSTEEL -- //
    blastFurnace(
        event,
        st('hot_tungstensteel_ingot'),
        128,
        3600,
        [
            { amount: 1, tag: 'c:tungsten_ingots' },
            { amount: 1, tag: 'c:steel_ingots' }
        ],
        [ { amount: 1, item: tr('hot_tungstensteel_ingot') } ]
    );

    // -- SUPERCONDUCTOR -- //
    blastFurnace(
        event,
        st('superconductor_hot_ingot'),
        512,
        1200,
        [ { amount: 1, tag: 'c:superconductor_dusts' } ],
        [ { amount: 1, item: mi('superconductor_hot_ingot') } ],
        [ { amount: 50, fluid: mi('molten_nether_star') } ]
    );

    // -- FLUORINE -- //
    blastFurnace(
        event,
        st('fluorine'),
        16,
        200,
        [ { amount: 1, item: mi('fluorite_dust') } ],
        null,
        null,
        [ { amount: 1000, fluid: mi('fluorine') } ]
    );
});