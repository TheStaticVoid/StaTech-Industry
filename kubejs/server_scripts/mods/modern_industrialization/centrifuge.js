// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/centrifuge/${id}`;

    // -- CENTRIFUGE REMOVED RECIPES -- //
    const REMOVED_RECIPES = [mi('vanilla_recipes/centrifuge/lava')];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- CARBON DUST FROM LIGNITE -- //
    centrifuge(
        event,
        st('carbon_dust_from_lignite'),
        16,
        400,
        [{ amount: 8, item: mi('lignite_coal_dust') }],
        [{ amount: 1, item: mi('carbon_dust') }]
    );

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
        [{ amount: 1000, fluid: mi('core_slurry') }]
    );

    // -- ICE SHARD -- //
    centrifuge(
        event,
        st('ice_shard'),
        32,
        300,
        [{ amount: 8, item: mi('moon_ice_dust') }],
        null,
        null,
        [{ amount: 100, fluid: mi('helium_3') }]
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
            { amount: 1, item: mc('gold_nugget') },
        ],
        [{ amount: 1000, fluid: mc('lava') }]
    );

    // -- ROTTEN FLESH -- //
    centrifuge(
        event,
        st('rotten_flesh'),
        16,
        200,
        [{ amount: 8, item: mc('rotten_flesh') }],
        null,
        null,
        [{ amount: 1000, fluid: mi('blood') }]
    );

    // -- GLOWSTONE -- //
    centrifuge(
        event,
        st('glowstone'),
        32,
        1800,
        [{ amount: 16, item: mc('glowstone') }],
        [
            { amount: 8, item: mc('glowstone_dust') },
            { amount: 1, item: mi('sulfur_dust') },
        ],
        null,
        [{ amount: 100, fluid: mi('helium') }]
    );

    // -- REDSTONE -- //
    // centrifuge(
    // st('moon_sand'),
    // 32,
    // 4000,
    // [ { amount: 16, item: ad('moon_sand') } ],
    // [
    // { amount: 12, item: mc('sand') },
    // { amount: 1, item: mi('tungsten_tiny_dust') }
    // ],
    // null,
    // [
    // { amount: 100, fluid: mi('helium') },
    // { amount: 1, fluid: mi('helium_3') }
    // ]
    // );

    // -- DARK ASHES -- //
    centrifuge(
        event,
        st('dark_ashes_dust'),
        8,
        400,
        [{ amount: 2, item: mi('dark_ashes_dust') }],
        [{ amount: 3, item: 'supplementaries:ash' }]
    );

    // -- ASHES -- //
    centrifuge(
        event,
        st('ashes_dust'),
        8,
        400,
        [{ amount: 3, item: 'supplementaries:ash' }],
        [{ amount: 2, item: mi('carbon_dust') }]
    );

    // -- TUFF -- //
    centrifuge(
        event,
        st('tuff_dust'),
        8,
        300,
        [{ amount: 16, item: mi('tuff_dust') }],
        [
            { amount: 18, item: mi('dark_ashes_dust') },
            { amount: 12, item: 'supplementaries:ash' },
        ]
    );
});
