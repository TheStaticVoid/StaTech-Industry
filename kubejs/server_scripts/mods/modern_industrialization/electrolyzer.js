// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/electrolyzer/${id}`;

    // -- ELECTROLYZER REMOVED RECIPES -- //
    const DELETED_RECIPE = [
        mi('materials/electrolyzer/salt_electrolysis'),
        mi('materials/electrolyzer/beryllium_dust'),
    ];
    DELETED_RECIPE.forEach((id) => event.remove({ id: id }));

    // -- BRINE -- //
    electrolyzer(
        event,
        st('brine'),
        32,
        400,
        null,
        null,
        [{ amount: 8000, fluid: mi('brine') }],
        [
            { amount: 2000, fluid: mi('chlorine') },
            { amount: 2000, fluid: mi('hydrogen') },
            { amount: 3000, fluid: mi('sodium_hydroxide') },
            { amount: 1000, fluid: mi('lithium') },
        ]
    );

    // -- CLAY -- //
    electrolyzer(
        event,
        st('clay_dust'),
        32,
        1200,
        [{ amount: 32, item: mi('clay_dust') }],
        [
            { amount: 1, item: mi('aluminum_dust') },
            { amount: 2, item: mi('sodium_dust') },
            { amount: 1, item: mi('silicon_dust') },
        ],
        null,
        [{ amount: 1000, fluid: mi('lithium') }]
    );

    // -- SALT -- //
    electrolyzer(
        event,
        st('salt_dust'),
        16,
        400,
        [{ amount: 2, tag: 'c:dusts/salt' }],
        [{ amount: 1, item: mi('sodium_dust') }],
        [{ amount: 100, fluid: mc('water') }],
        [{ amount: 125, fluid: mi('chlorine') }]
    );

    // -- HYDROCHLORIC ACID -- //
    electrolyzer(
        event,
        st('hydrochloric_acid'),
        16,
        400,
        null,
        null,
        [{ amount: 1000, fluid: mi('hydrochloric_acid') }],
        [
            { amount: 500, fluid: mi('hydrogen') },
            { amount: 500, fluid: mi('chlorine') },
        ]
    );

    // -- CHLOROFORM -- //
    electrolyzer(
        event,
        st('chloroform'),
        16,
        400,
        null,
        null,
        [{ amount: 1000, fluid: mi('chloroform') }],
        [
            { amount: 300, fluid: mi('hydrogen') },
            { amount: 600, fluid: mi('chlorine') },
        ]
    );

    // -- BERYLLIUM DUST -- //
    electrolyzer(
        event,
        st('beryllium_dust'),
        32,
        200,
        null,
        [
            { amount: 3, item: mi('beryllium_dust') },
            { amount: 3, item: mi('carbon_dust'), probability: 0.5 },
        ],
        [{ amount: 1100, fluid: mi('beryllium_chloride') }],
        [{ amount: 200, fluid: mi('chlorine') }]
    );

    // -- PERIDOT DUST -- //
    electrolyzer(
        event,
        st('peridot_dust'),
        16,
        500,
        [{ amount: 9, tag: 'c:dusts/peridot' }],
        [
            // { amount: 2, item: tr('magnesium_dust') },
            { amount: 2, item: mi('iron_dust') },
            { amount: 1, item: mi('silicon_dust') },
        ],
        null,
        [{ amount: 100, fluid: mi('oxygen') }]
    );

    // -- SAPPHIRE DUST -- //
    electrolyzer(
        event,
        st('sapphire_dust'),
        16,
        600,
        [{ amount: 8, tag: 'c:dusts/sapphire' }],
        [{ amount: 2, item: mi('aluminum_dust') }],
        null,
        [{ amount: 100, fluid: mi('oxygen') }]
    );

    // -- KERNITE DUST -- //
    electrolyzer(
        event,
        st('kernite_dust'),
        16,
        600,
        [{ amount: 9, tag: 'c:dusts/kernite' }],
        [
            { amount: 2, item: mi('sodium_dust') },
            { amount: 4, item: mi('boron_trioxide_dust') },
        ],
        null,
        [{ amount: 200, fluid: mc('water') }]
    );

    // -- WASTE BERYL AMMONIA SOLUTION PROCESSING -- //
    electrolyzer(
        event,
        st('waste_beryl_ammonia_solution_processing'),
        16,
        400,
        null,
        [
            { amount: 1, item: mi('sulfur_dust') },
            { amount: 1, item: mi('aluminum_dust') },
            { amount: 3, item: mi('silicon_dust') },
        ],
        [{ amount: 4500, fluid: mi('waste_beryl_ammonia_solution') }],
        [
            { amount: 200, fluid: mc('water') },
            { amount: 4000, fluid: mi('ammonia') },
        ]
    );

    // -- LITHIUM FLUORIDE DECOMPOSITION -- //
    electrolyzer(
        event,
        st('lithium_fluoride_decompose'),
        16,
        800,
        [{ amount: 1, item: mi('lithium_fluoride_dust') }],
        null,
        null,
        [
            { amount: 1000, fluid: mi('lithium') },
            { amount: 1000, fluid: mi('fluorine') },
        ]
    );

    // -- UU MATTER -- //
    electrolyzer(
        event,
        st('uu_liquid_from_matter'),
        64,
        400,
        [{ amount: 1, item: kj('uu_matter') }],
        null,
        null,
        [{ amount: 10, fluid: mi('uu_matter') }]
    );
});
