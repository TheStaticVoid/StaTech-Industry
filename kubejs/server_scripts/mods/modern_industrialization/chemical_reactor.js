// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/chemical_reactor/${id}`;

    // -- PHANTOM MEMBRANE -- //
    chemicalReactor(
        event,
        st('phantom_membrane'),
        16,
        200,
        [
            { amount: 16, item: mc('leather') },
            { amount: 2, item: mi('calcite_dust') },
        ],
        [{ amount: 1, item: mc('phantom_membrane') }],
        [{ amount: 2000, fluid: mi('liquid_ender') }]
    );

    // -- BLAZE ROD -- //
    chemicalReactor(
        event,
        st('blaze_rod'),
        16,
        200,
        [
            { amount: 1, item: mi('steel_rod') },
            { amount: 16, item: mc('nether_wart') },
        ],
        [{ amount: 1, item: mc('blaze_rod') }],
        [{ amount: 1000, fluid: mc('lava') }]
    );

    // -- GHAST TEAR -- //
    chemicalReactor(
        event,
        st('ghast_tear'),
        16,
        200,
        [
            { amount: 16, item: mc('tnt') },
            { amount: 16, item: mi('salt_dust') },
        ],
        [{ amount: 1, item: mc('ghast_tear') }],
        [{ amount: 1000, fluid: mc('lava') }]
    );

    // -- ROTTEN FLESH -- //
    chemicalReactor(
        event,
        st('rotten_flesh'),
        16,
        200,
        [{ amount: 4, item: mc('leather') }],
        [{ amount: 1, item: mc('rotten_flesh') }],
        [{ amount: 500, fluid: mi('hydrofluoric_acid') }]
    );

    // -- ENDER PEARL -- //
    chemicalReactor(
        event,
        st('ender_pearl'),
        16,
        200,
        [
            { amount: 1, item: mc('slime_ball') },
            { amount: 1, item: mc('spider_eye') },
        ],
        [{ amount: 1, item: mc('ender_pearl') }]
    );

    // -- ROSE QUARTZ -- //
    chemicalReactor(
        event,
        st('rose_quartz'),
        16,
        200,
        [{ amount: 1, item: mc('quartz') }],
        [{ amount: 1, item: cr('polished_rose_quartz') }],
        [{ amount: 450, fluid: mi('molten_redstone') }]
    );

    // -- EYE OF ENDER -- //
    chemicalReactor(
        event,
        st('eye_of_ender'),
        8,
        600,
        [
            { amount: 1, item: mc('ender_pearl') },
            { amount: 1, item: mc('blaze_powder') },
        ],
        [{ amount: 2, item: mc('ender_eye') }]
    );

    // -- POLYTETRAFLUOROETHYLENE -- //
    chemicalReactor(
        event,
        st('polytetrafluoroethylene'),
        20,
        300,
        null,
        null,
        [
            { amount: 300, fluid: mi('tetrafluoroethylene') },
            { amount: 1000, fluid: mi('oxygen') },
        ],
        [{ amount: 400, fluid: mi('polytetrafluoroethylene') }]
    );

    // -- TETRAFLUOROETHYLENE -- //
    chemicalReactor(
        event,
        st('tetrafluoroethylene'),
        24,
        400,
        null,
        null,
        [
            { amount: 2000, fluid: mi('hydrofluoric_acid') },
            { amount: 1000, fluid: mi('chloroform') },
        ],
        [
            { amount: 2500, fluid: mi('hydrochloric_acid') },
            { amount: 500, fluid: mi('tetrafluoroethylene') },
        ]
    );

    // -- CHLOROFORM -- //
    chemicalReactor(
        event,
        st('chloroform'),
        18,
        200,
        null,
        null,
        [
            { amount: 2000, fluid: mi('chlorine') },
            { amount: 500, fluid: mi('methane') },
        ],
        [
            { amount: 2000, fluid: mi('hydrochloric_acid') },
            { amount: 500, fluid: mi('chloroform') },
        ]
    );

    // -- FLUORINE -- //
    chemicalReactor(
        event,
        st('fluorine'),
        24,
        300,
        null,
        null,
        [
            { amount: 1000, fluid: mi('fluorine') },
            { amount: 1000, fluid: mi('hydrogen') },
        ],
        [{ amount: 2000, fluid: mi('hydrofluoric_acid') }]
    );

    // -- BERYLLIUM SULFATE -- //
    chemicalReactor(
        event,
        st('beryllium_sulfate'),
        16,
        100,
        [{ amount: 3, item: mi('emerald_crushed_dust') }],
        null,
        [{ amount: 150, fluid: mi('sulfuric_acid') }],
        [{ amount: 300, fluid: mi('beryllium_sulfate') }]
    );

    // -- BERYLLIUM SULFATE ALTERNATIVE -- //
    chemicalReactor(
        event,
        st('beryllium_sulfate_alt'),
        16,
        50,
        [{ amount: 5, item: mi('emerald_dust') }],
        null,
        [{ amount: 150, fluid: mi('sulfuric_acid') }],
        [{ amount: 300, fluid: mi('beryllium_sulfate') }]
    );

    // -- BERYLLIUM HYDROXIDE -- //
    chemicalReactor(
        event,
        st('beryllium_hydroxide'),
        24,
        300,
        null,
        null,
        [
            { amount: 2250, fluid: mi('beryllium_sulfate') },
            { amount: 7000, fluid: mi('ammonia') },
        ],
        [
            { amount: 1200, fluid: mi('beryllium_hydroxide') },
            { amount: 8000, fluid: mi('waste_beryl_ammonia_solution') },
        ]
    );

    // -- BERYLLIUM CHLORIDE -- //
    chemicalReactor(
        event,
        st('beryllium_chloride'),
        16,
        200,
        [{ amount: 2, item: mi('carbon_dust') }],
        null,
        [
            { amount: 800, fluid: mi('beryllium_hydroxide') },
            { amount: 300, fluid: mi('chlorine') },
        ],
        [{ amount: 1100, fluid: mi('beryllium_chloride') }]
    );

    // -- AMMONIA -- //
    chemicalReactor(
        event,
        st('ammonia'),
        8,
        400,
        null,
        null,
        [
            { amount: 250, fluid: mi('nitrogen') },
            { amount: 750, fluid: mi('hydrogen') },
        ],
        [{ amount: 1000, fluid: mi('ammonia') }]
    );

    // -- ACRYLONITRILE -- //
    chemicalReactor(
        event,
        st('acrylonitrile'),
        32,
        200,
        [{ amount: 1, item: mi('antimony_tiny_dust'), probability: 0.8 }],
        null,
        [
            { amount: 200, fluid: mi('propene') },
            { amount: 200, fluid: mi('ammonia') },
            { amount: 300, fluid: mi('oxygen') },
        ],
        [
            { amount: 200, fluid: mi('acrylonitrile') },
            { amount: 600, fluid: mc('water'), probability: 0.9 },
        ]
    );

    // -- ACRYLONITRILE BUTADIENE STYRENE -- //
    chemicalReactor(
        event,
        st('acrylonitrile_butadiene_styrene'),
        8,
        200,
        [{ amount: 1, item: mi('chromium_tiny_dust') }],
        null,
        [
            { amount: 250, fluid: mi('acrylonitrile') },
            { amount: 250, fluid: mi('styrene_butadiene') },
            { amount: 50, fluid: mi('sulfuric_acid') },
        ],
        [{ amount: 700, fluid: mi('acrylonitrile_butadiene_styrene') }]
    );

    // -- BORON TRIFLUORIDE -- //
    chemicalReactor(
        event,
        st('boron_trifluoride'),
        32,
        400,
        [{ amount: 1, item: mi('boron_trioxide_dust') }],
        null,
        [{ amount: 6000, fluid: mi('hydrofluoric_acid') }],
        [
            { amount: 2000, fluid: mi('boron_trifluoride') },
            { amount: 3000, fluid: mc('water') },
        ]
    );

    // -- DIBORANE -- //
    chemicalReactor(
        event,
        st('diborane'),
        32,
        600,
        [{ amount: 6, item: mi('lithium_hydride_dust') }],
        [{ amount: 6, item: mi('lithium_tetrafluoroborate_dust') }],
        [{ amount: 8000, fluid: mi('boron_trifluoride') }],
        [{ amount: 1000, fluid: mi('diborane') }]
    );

    // -- LITHIUM HYDRIDE DUST -- //
    chemicalReactor(
        event,
        st('lithium_hydride'),
        8,
        200,
        null,
        [{ amount: 1, item: mi('lithium_hydride_dust') }],
        [
            { amount: 1000, fluid: mi('lithium') },
            { amount: 1000, fluid: mi('hydrogen') },
        ]
    );

    // -- LITHIUM HYDRIDE DECOMPOSITION -- //
    chemicalReactor(
        event,
        st('lithium_hydride_decompose'),
        8,
        100,
        [{ amount: 1, item: mi('lithium_hydride_dust') }],
        null,
        [{ amount: 1500, fluid: mc('water') }],
        [
            { amount: 1000, fluid: mi('lithium') },
            { amount: 1500, fluid: mi('hydrogen') },
            { amount: 500, fluid: mi('oxygen') },
        ]
    );

    // -- LITHIUM FLUORIDE DUST -- //
    chemicalReactor(
        event,
        st('lithium_fluoride'),
        8,
        200,
        null,
        [{ amount: 1, item: mi('lithium_fluoride_dust') }],
        [
            { amount: 1000, fluid: mi('lithium') },
            { amount: 1000, fluid: mi('fluorine') },
        ]
    );

    // -- PROPENE -- //
    chemicalReactor(
        event,
        st('propene'),
        16,
        800,
        [{ amount: 3, item: mi('carbon_dust') }],
        null,
        [{ amount: 6000, fluid: mi('hydrogen') }],
        [{ amount: 1000, fluid: mi('propene') }]
    );
});
