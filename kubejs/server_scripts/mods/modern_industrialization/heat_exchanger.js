// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/heat_exchanger/${id}`;

    const REMOVED_RECIPES = [
        mi('materials/heat_exchanger/lava'),
        yai('heat_exchanger/liquid_air_to_steam'),
    ];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- STEAM FROM LAVA NERF -- //
    heatExchanger(
        event,
        st('lava_power'),
        16,
        20,
        null,
        [{ amount: 1, item: mc('obsidian'), probability: 0.01 }],
        [
            { amount: 10, fluid: mc('lava') },
            { amount: 125, fluid: mc('water') },
        ],
        [{ amount: 2000, fluid: mi('steam') }]
    );

    // -- LIQUID AIRS TO SUPERCRITICAL STEAM -- //
    heatExchanger(
        event,
        st('liquid_airs_to_supercritical_steam'),
        16,
        100,
        null,
        null,
        [
            { amount: 4000, fluid: yai('scorching_liquid_air') },
            { amount: 4000, fluid: yai('gelid_liquid_air') },
        ],
        [{ amount: 1000, fluid: mi('supercritical_steam') }]
    );

    // -- SUPERCRITICAL STEAM TO STEAM -- //
    heatExchanger(
        event,
        st('supercritical_steam_to_steam'),
        2,
        300,
        null,
        null,
        [
            { amount: 2000, fluid: mi('supercritical_steam') },
            { amount: 4000, fluid: mc('water') },
        ],
        [
            { amount: 500, fluid: mi('high_pressure_water') },
            { amount: 24000, fluid: mi('steam') },
        ]
    );
});
