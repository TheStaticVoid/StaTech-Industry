// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/centrifuge/${id}`;

    // -- CENTRIFUGE REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        mi('vanilla_recipes/centrifuge/lava')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- CORE SLURRY -- //
    centrifuge(
        event,
        st('core_slurry'),
        32,
        300,
        null,
        [
            { amount: 49, item: mi('platinum_nugget') },
            { amount: 23, item: mi('tungsten_nugget') },
            { amount: 19, item: mi('titanium_nugget') },
            { amount: 9, item: mi('iridium_nugget') },
        ],
        [ { amount: 1000, fluid: mi('core_slurry') } ]
    );

    // -- ICE SHARD -- //
    centrifuge(
        event,
        st('ice_shard'),
        32,
        300,
        [ { amount: 8, item: ad('ice_shard') } ],
        null,
        null,
        [ { amount: 100, fluid: mi('helium_3') } ]
    );

    // -- LAVA -- //
    centrifuge(
        event,
        st('lava'),
        32,
        600,
        null,
        [
            { amount: 17, item: mi('sulfur_dust') },
            { amount: 11, item: mi('copper_nugget') },
            { amount: 4, item: mc('iron_nugget') },
            { amount: 1, item: mc('gold_nugget') }
        ],
        [ { amount: 1000, fluid: mc('lava') } ]
    );

    // -- ROTTEN FLESH -- //
    centrifuge(
        event,
        st('rotten_flesh'),
        16,
        200,
        [ { amount: 8, item: mc('rotten_flesh') } ],
        null,
        null,
        [ { amount: 1000, fluid: mi('blood') } ]
    );

    // -- GLOWSTONE -- //
    centrifuge(
        event,
        st('glowstone'),
        32,
        1800,
        [ { amount: 16, item: mc('glowstone') } ],
        [
            { amount: 8, item: mc('glowstone_dust') },
            { amount: 1, item: mi('sulfur_dust') }
        ],
        null,
        [ { amount: 100, fluid: mi('helium') } ]
    );

    // -- REDSTONE -- //
    centrifuge(
        event,
        st('moon_sand'),
        32,
        4000,
        [ { amount: 16, item: ad('moon_sand') } ],
        [
            { amount: 12, item: mc('sand') },
            { amount: 1, item: mi('tungsten_tiny_dust') }
        ],
        null,
        [
            { amount: 100, fluid: mi('helium') },
            { amount: 1, fluid: mi('helium_3') }
        ]
    );

    // -- LAPIS -- //
    centrifuge(
        event,
        st('lapis_lazuli'),
        32,
        1500,
        [ { amount: 4, item: mc('lapis_lazuli') } ],
        [
            { amount: 3, item: tr('lazurite_dust') },
            { amount: 1, item: tr('pyrite_small_dust') },
            { amount: 1, item: tr('calcite_small_dust') },
            { amount: 2, item: tr('sodalite_small_dust') }
        ]
    );

    // -- DARK ASHES -- //
    centrifuge(
        event,
        st('dark_ashes_dust'),
        8,
        1200,
        [ { amount: 2, item: tr('dark_ashes_dust') } ],
        [ { amount: 1, item: tr('ashes_dust') } ]
    );

    // -- ASHES -- //
    centrifuge(
        event,
        st('ashes_dust'),
        12,
        320,
        [ { amount: 3, item: tr('ashes_dust') } ],
        [ { amount: 2, item: mi('carbon_dust') } ]
    );

    // -- TUFF -- //
    centrifuge(
        event,
        st('tuff'),
        8,
        300,
        [ { amount: 16, item: mc('tuff') } ],
        [
            { amount: 18, item: tr('dark_ashes_dust') },
            { amount: 12, item: tr('ashes_dust') }
        ]
    );

    // -- GALENA DUST -- //
    centrifuge(
        event,
        st('galena_dust'),
        32,
        400,
        [ { amount: 2, tag: 'c:galena_dusts' } ],
        [
            { amount: 1, item: mi('silver_dust') },
            { amount: 1, item: mi('lead_dust') }
        ]
    );

    // -- RED GARNET DUST -- //
    centrifuge(
        event,
        st('red_garnet_dust'),
        8,
        400,
        [ { amount: 16, tag: 'c:red_garnet_dusts' } ],
        [
            { amount: 3, item: tr('pyrope_dust') },
            { amount: 5, item: tr('almandine_dust') },
            { amount: 8, item: tr('spessartine_dust') }
        ]
    );

    // -- MARBLE DUST -- //
    centrifuge(
        event,
        st('marble_dust'),
        16,
        200,
        [ { amount: 8, tag: 'c:marble_dusts' } ],
        [
            { amount: 7, item: tr('calcite_dust') },
            { amount: 1, item: tr('magnesium_dust') }
        ]
    );
});