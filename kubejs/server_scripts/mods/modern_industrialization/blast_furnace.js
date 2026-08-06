// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/blast_furnace/${id}`;

    // -- BLAST FURNACE REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        mi('materials/blast_furnace/steel'),
        mi('materials/aluminum/blast_furnace/dust'),
        mi('materials/aluminum/blast_furnace/tiny_dust'),
        mi('materials/blast_furnace/superconductor'),
    ];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- SHORT RANGE LENS -- //
    blastFurnace(
        event,
        st('short_range_lens'),
        24,
        200,
        [
            { amount: 1, item: kj('lens_mold'), probability: 0.0 },
            { amount: 1, item: mi('silicon_dust') },
        ],
        [{ amount: 1, item: kj('short_range_lens'), probability: 0.3 }],
        [{ amount: 200, fluid: mi('oxygen') }]
    );

    // -- NETHER STAR -> MOLTEN NETHER STAR -- //
    blastFurnace(
        event,
        st('nether_star'),
        128,
        300,
        [{ amount: 1, item: mc('nether_star') }],
        null,
        null,
        [{ amount: 500, fluid: mi('molten_nether_star') }]
    );

    // -- IMPURRE LIQUID NETHER STAR -> MOLTEN NETHER STAR -- //
    blastFurnace(
        event,
        st('molten_nether_star'),
        128,
        900,
        [{ amount: 1, item: mi('platinum_tiny_dust') }],
        null,
        [{ amount: 1000, fluid: mi('impure_liquid_nether_star') }],
        [{ amount: 1000, fluid: mi('molten_nether_star') }]
    );

    // -- WITHERED BONE -- //
    blastFurnace(
        event,
        st('withered_fragment'),
        16,
        600,
        [
            { amount: 16, item: 'minecraft:bone' },
            { amount: 1, item: 'minecraft:blaze_powder' },
        ],
        [{ amount: 1, item: 'wstweaks:fragment' }]
    );

    // -- PIZZA -- //
    blastFurnace(
        event,
        st('pizza'),
        2,
        600,
        [{ amount: 1, item: kj('uncooked_pizza') }],
        [{ amount: 1, item: kj('pizza') }]
    );

    // -- UNCOOKED STEEL DUST -> STEEL INGOT -- //
    blastFurnace(
        event,
        st('steel_ingot_from_uncooked_steel'),
        2,
        1200,
        [{ amount: 1, item: mi('uncooked_steel_dust') }],
        [{ amount: 1, item: mi('steel_ingot') }]
    );

    // -- MOLTEN ENDERIUM -- //
    blastFurnace(
        event,
        st('molten_enderium'),
        48,
        400,
        [{ amount: 1, item: mi('steel_dust') }],
        null,
        [{ amount: 1000, fluid: mi('liquid_ender') }],
        [{ amount: 1000, fluid: mi('molten_enderium') }]
    );

    // -- ENDERIUM HOT INGOT -- //
    blastFurnace(
        event,
        st('enderium_hot_ingot'),
        64,
        400,
        [{ amount: 1, item: mi('stainless_steel_dust') }],
        [{ amount: 1, item: mi('enderium_hot_ingot') }],
        [{ amount: 1000, fluid: mi('molten_enderium') }]
    );

    // -- ALUMINUM EBF -- //
    blastFurnace(
        event,
        st('aluminum_ingot'),
        32,
        600,
        [{ amount: 1, item: mi('aluminum_dust') }],
        [{ amount: 1, item: mi('aluminum_ingot') }]
    );

    // -- DESH EBF -- //
    blastFurnace(
        event,
        st('desh_ingot'),
        16,
        600,
        [{ amount: 1, item: mi('desh_dust') }],
        [{ amount: 1, item: mi('desh_hot_ingot') }]
    );

    // -- OSTRUM EBF -- //
    blastFurnace(
        event,
        st('ostrum_ingot'),
        24,
        600,
        [{ amount: 1, item: mi('ostrum_dust') }],
        [{ amount: 1, item: mi('ostrum_hot_ingot') }]
    );

    // -- CALORITE EBF -- //
    blastFurnace(
        event,
        st('calorite_ingot'),
        32,
        600,
        [{ amount: 1, item: mi('calorite_dust') }],
        [{ amount: 1, item: mi('calorite_hot_ingot') }]
    );

    // -- TUNGSTEN + STEEL -> HOT TUNGSTENSTEEL -- //
    blastFurnace(
        event,
        st('tungstensteel_hot_ingot'),
        128,
        3600,
        [
            { amount: 1, tag: 'c:ingots/tungsten' },
            { amount: 1, tag: 'c:ingots/steel' },
        ],
        [{ amount: 1, item: mi('tungstensteel_hot_ingot') }]
    );

    // -- SUPERCONDUCTOR -- //
    blastFurnace(
        event,
        st('superconductor_hot_ingot'),
        512,
        1200,
        [{ amount: 1, tag: 'c:dusts/superconductor' }],
        [{ amount: 1, item: mi('superconductor_hot_ingot') }],
        [{ amount: 50, fluid: mi('molten_nether_star') }]
    );

    // -- IRIDIUM -- //
    blastFurnace(
        event,
        st('iridium_ingot'),
        256,
        600,
        [{ amount: 1, tag: 'c:dusts/iridium' }],
        [{ amount: 1, item: mi('iridium_hot_ingot') }],
        [{ amount: 1000, fluid: mi('argon') }],
        [{ amount: 900, fluid: mi('argon') }]
    );

    // -- FLUORINE -- //
    blastFurnace(
        event,
        st('fluorine'),
        16,
        200,
        [{ amount: 1, item: mi('fluorite_dust') }],
        null,
        null,
        [{ amount: 1000, fluid: mi('fluorine') }]
    );

    // -- MOLTEN BOROSILICATE GLASS -- //
    blastFurnace(
        event,
        st('molten_borosilicate_glass'),
        16,
        200,
        [
            { amount: 6, item: kj('boron_quartz_blend') },
            { amount: 2, item: mc('sand') },
        ],
        null,
        null,
        [{ amount: 1000, fluid: mi('molten_borosilicate_glass') }]
    );

    // -- BERYLLIUM HOT INGOT -- //
    blastFurnace(
        event,
        st('beryllium_hot_ingot'),
        96,
        300,
        [{ amount: 1, item: mi('beryllium_dust') }],
        [{ amount: 1, item: mi('beryllium_hot_ingot') }],
        null,
        [{ amount: 1000, fluid: mi('oxygen') }]
    );

    // -- LITHIUM TETRAFLUOROBORATE DECOMPOSITION -- //
    blastFurnace(
        event,
        st('lithium_tetrafluoroborate_decompose'),
        16,
        200,
        [{ amount: 1, item: mi('lithium_tetrafluoroborate_dust') }],
        [{ amount: 1, item: mi('lithium_fluoride_dust') }],
        null,
        [{ amount: 1000, fluid: mi('boron_trifluoride') }]
    );

    // -- MOLTEN GOLD -- //
    blastFurnace(
        event,
        st('molten_gold'),
        32,
        200,
        [{ amount: 1, item: mc('gold_ingot') }],
        null,
        null,
        [{ amount: 1000, fluid: mi('molten_gold') }]
    );

    // -- HOT NETHERITE INGOT -- //
    blastFurnace(
        event,
        st('hot_netherite_ingot'),
        32,
        600,
        [
            { amount: 4, item: mc('netherite_scrap') },
            { amount: 16, item: mi('silicon_dust') }
        ],
        [{ amount: 1, item: mi('netherite_hot_ingot') }],
        [{ amount: 4000, fluid: mi('molten_gold') }]
    );
});
