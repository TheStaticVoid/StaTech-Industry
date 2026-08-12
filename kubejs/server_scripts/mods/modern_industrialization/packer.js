// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/packer/${id}`;

    // -- PACKER REMOVED RECIPES -- //
    const REMOVED_RECIPE = [
        mi('materials/packer/mixed_ingot_blastproof'),
        mi('vanilla_recipes/packer/chains'),
        mi('compat/ae2/printed_calculation_processor'),
        mi('compat/ae2/printed_engineering_processor'),
        mi('compat/ae2/printed_logic_processor'),
        mi('compat/ae2/printed_silicon'),
        mi('compat/ae2/printed_silicon_from_ingot'),
    ];
    REMOVED_RECIPE.forEach((id) => event.remove({ id: id }));

    // -- FLUIX GLASS CABLE -- //
    packer(
        event,
        st('fluix_glass_cable'),
        8,
        200,
        [
            { amount: 2, item: ae('fluix_crystal') },
            { amount: 1, item: ae('quartz_fiber') },
        ],
        [{ amount: 4, item: ae('fluix_glass_cable') }]
    );

    // -- FLUIX ME COVERED CABLE -- //
    packer(
        event,
        st('fluix_me_covered_cable'),
        8,
        200,
        [
            { amount: 1, tag: mc('wool') },
            { amount: 1, item: ae('fluix_glass_cable') },
        ],
        [{ amount: 1, item: ae('fluix_covered_cable') }]
    );

    // -- FLUIX ME DENSE COVERED CABLE -- //
    packer(
        event,
        st('fluix_covered_dense_cable'),
        8,
        200,
        [{ amount: 4, item: ae('fluix_covered_cable') }],
        [{ amount: 1, item: ae('fluix_covered_dense_cable') }]
    );

    // -- FLUIX ME SMART CABLE -- //
    packer(
        event,
        st('fluix_smart_cable'),
        8,
        200,
        [
            { amount: 1, item: ae('fluix_covered_cable') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mc('glowstone_dust') },
        ],
        [{ amount: 1, item: ae('fluix_smart_cable') }]
    );

    // -- FLUIX ME DENSE SMART CABLE -- //
    packer(
        event,
        st('fluix_smart_dense_cable_packed'),
        8,
        200,
        [{ amount: 4, item: ae('fluix_smart_cable') }],
        [{ amount: 1, item: ae('fluix_smart_dense_cable') }]
    );

    // -- FLUIX DENSE ME SMART CABLE -- //
    packer(
        event,
        st('fluix_smart_dense_cable'),
        8,
        200,
        [
            { amount: 1, item: ae('fluix_covered_dense_cable') },
            { amount: 1, item: mc('redstone') },
            { amount: 1, item: mc('glowstone_dust') },
        ],
        [{ amount: 1, item: ae('fluix_smart_dense_cable') }]
    );

    // -- FLUID PIPE -- //
    packer(
        event,
        st('fluid_pipe'),
        4,
        200,
        [
            { amount: 1, tag: mi('fluid_pipes') },
            { amount: 2, item: mi('copper_plate') },
        ],
        [{ amount: 8, item: md('fluid_pipe') }]
    );

    // -- ITEM PIPE -- //
    packer(
        event,
        st('item_pipe'),
        4,
        200,
        [
            { amount: 1, tag: mi('item_pipes') },
            { amount: 2, item: mi('iron_plate') },
        ],
        [{ amount: 8, item: md('item_pipe') }]
    );

    // -- SUPERCONDUCTOR EU CABLE -- //
    packer(
        event,
        st('superconductor_eu_cable'),
        4,
        200,
        [
            { amount: 1, item: mi('superconductor_cable') },
            { amount: 2, item: mi('rubber_sheet') },
        ],
        [{ amount: 4, item: md('superconductor_cable') }]
    );

    // -- EV EU CABLE -- //
    packer(
        event,
        st('ev_eu_cable'),
        4,
        200,
        [
            { amount: 1, tag: kj('ev_wire') },
            { amount: 2, item: mi('rubber_sheet') },
        ],
        [{ amount: 4, item: md('ev_cable') }]
    );

    // -- HV EU CABLE -- //
    packer(
        event,
        st('hv_eu_cable'),
        4,
        200,
        [
            { amount: 1, tag: kj('hv_wire') },
            { amount: 2, item: mi('rubber_sheet') },
        ],
        [{ amount: 4, item: md('hv_cable') }]
    );

    // -- MV EU CABLE -- //
    packer(
        event,
        st('mv_eu_cable'),
        4,
        200,
        [
            { amount: 1, tag: kj('mv_wire') },
            { amount: 2, item: mi('rubber_sheet') },
        ],
        [{ amount: 4, item: md('mv_cable') }]
    );

    // -- LV EU CABLE -- //
    packer(
        event,
        st('lv_eu_cable'),
        4,
        200,
        [
            { amount: 1, tag: kj('lv_wire') },
            { amount: 2, item: mi('rubber_sheet') },
        ],
        [{ amount: 4, item: md('lv_cable') }]
    );

    // -- CHAIN -- //
    packer(
        event,
        st('chain'),
        2,
        100,
        [{ amount: 3, item: mi('iron_ring') }],
        [{ amount: 8, item: mc('chain') }]
    );

    // -- MIXED BLASTPROOF INGOT -- //
    packer(
        event,
        st('mixed_blastproof_ingot'),
        32,
        600,
        [
            { amount: 1, item: mi('titanium_ingot') },
            { amount: 1, item: mi('tungsten_ingot') },
            { amount: 1, item: mi('ostrum_ingot') },
        ],
        [{ amount: 1, item: mi('mixed_ingot_blastproof') }]
    );

    // -- CERTUS QUARTZ BLOCK -- //
    packer(
        event,
        st('quartz_block'),
        8,
        200,
        [{ amount: 4, item: ae('certus_quartz_crystal') }],
        [{ amount: 1, item: ae('quartz_block') }]
    );

    // -- ROCKY DIRT -- //
    packer(
        event,
        st('rocky_dirt'),
        2,
        100,
        [{ amount: 4, item: mc('dirt') }],
        [{ amount: 4, item: db('rocky_dirt') }]
    );

    // -- QUARTZ GLASS -- //
    packer(
        event,
        st('quartz_glass'),
        8,
        200,
        [
            { amount: 5, item: ae('certus_quartz_dust') },
            { amount: 4, tag: 'c:glass_blocks/cheap' },
        ],
        [{ amount: 4, item: ae('quartz_glass') }]
    );

    // -- VIBRANT QUARTZ GLASS -- //
    packer(
        event,
        st('vibrant_quartz_glass'),
        8,
        200,
        [
            { amount: 1, item: ae('quartz_glass') },
            { amount: 2, item: mc('glowstone_dust') },
        ],
        [{ amount: 1, item: ae('quartz_vibrant_glass') }]
    );

    // -- BRASS INGOT TO BLOCK -- //
    packer(
        event,
        st('brass_ingot_to_block'),
        2,
        200,
        [
            { amount: 9, item: cr('brass_ingot') },
            { amount: 1, item: mi('packer_block_template'), probability: 0.0 },
        ],
        [{ amount: 1, item: cr('brass_block') }]
    );

    // -- BRASS NUGGET TO INGOT -- //
    packer(
        event,
        st('brass_nugget_to_ingot'),
        2,
        200,
        [{ amount: 9, item: cr('brass_nugget') }],
        [{ amount: 1, item: cr('brass_ingot') }]
    );

    // ---------------------- //
    // -- BUFFED BATTERIES -- //
    // ---------------------- //

    // -- REDSTONE BATTERY -- //
    packer(
        event,
        st('batteries/redstone'),
        8,
        400,
        [
            { amount: 2, item: kj('battery_casing') },
            { amount: 2, item: mc('redstone') },
            { amount: 2, item: mi('tin_cable') },
        ],
        [{ amount: 2, item: mi('redstone_battery') }]
    );

    // -- SILICON BATTERY -- //
    packer(
        event,
        st('batteries/silicon'),
        8,
        400,
        [
            { amount: 2, item: kj('battery_casing') },
            { amount: 2, item: mi('silicon_dust') },
            { amount: 2, item: mi('electrum_cable') },
        ],
        [{ amount: 2, item: mi('silicon_battery') }]
    );

    // -- SODIUM BATTERY -- //
    packer(
        event,
        st('batteries/sodium'),
        8,
        400,
        [
            { amount: 2, item: kj('battery_casing') },
            { amount: 2, item: mi('sodium_dust') },
            { amount: 2, item: mi('aluminum_cable') },
        ],
        [{ amount: 2, item: mi('sodium_battery') }]
    );

    // -- CADMIUM BATTERY -- //
    packer(
        event,
        st('batteries/cadmium'),
        8,
        400,
        [
            { amount: 2, item: kj('battery_casing') },
            { amount: 2, item: mi('cadmium_dust') },
            { amount: 2, item: mi('annealed_copper_cable') },
        ],
        [{ amount: 2, item: mi('cadmium_battery') }]
    );

    // -- PLUTONIUM BATTERY -- //
    packer(
        event,
        st('batteries/plutonium'),
        8,
        400,
        [
            { amount: 2, item: kj('battery_casing') },
            { amount: 2, item: mi('plutonium_dust') },
            { amount: 2, item: mi('superconductor_cable') },
        ],
        [{ amount: 2, item: mi('plutonium_battery') }]
    );
});
