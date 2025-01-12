// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/centrifuge/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let tr = (id) => `techreborn:${id}`;

    // -- CENTRIFUGE REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        mi('vanilla_recipes/centrifuge/lava')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let centrifuge = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('centrifuge'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe).id(id);
    }

    // -- CARBON DUST FROM LIGNITE -- //
    centrifuge(
        st('carbon_dust_from_lignite'),
        16,
        400,
        [ { amount: 8, item: mi('lignite_coal_dust') } ],
        [ { amount: 1, item: mi('carbon_dust') } ]
    );

    // -- CORE SLURRY -- //
    centrifuge(
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
        st('dark_ashes_dust'),
        8,
        1200,
        [ { amount: 2, item: tr('dark_ashes_dust') } ],
        [ { amount: 1, item: tr('ashes_dust') } ]
    );

    // -- ASHES -- //
    centrifuge(
        st('ashes_dust'),
        12,
        320,
        [ { amount: 3, item: tr('ashes_dust') } ],
        [ { amount: 2, item: mi('carbon_dust') } ]
    );

    // -- TUFF -- //
    centrifuge(
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