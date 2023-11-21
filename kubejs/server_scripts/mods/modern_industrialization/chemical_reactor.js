// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/chemical_reactor/${id}`;

    // -- BERYLLIUM SULFATE -- //
    chemicalReactor(
        event,
        st('beryllium_sulfate'),
        16,
        400,
        [ { amount: 1, item: mi('beryl_dust') } ],
        null,
        [ { amount: 500, fluid: mi('sulfuric_acid') } ],
        [ { amount: 750, fluid: mi('beryllium_sulfate') } ]
    );

    // -- BERYLLIUM HYDROXIDE -- //
    chemicalReactor(
        event,
        st('beryllium_hydroxide'),
        24,
        300,
        null,
        [ { amount: 2, item: mi('sulfur_dust') } ],
        [
            { amount: 500, fluid: mi('beryllium_sulfate') },
            { amount: 250, fluid: mi('ammonia') }
        ],
        [ { amount: 750, fluid: mi('beryllium_hydroxide') } ]
    );

    // -- BERYLLIUM CHLORIDE -- //
    chemicalReactor(
        event,
        st('beryllium_chloride'),
        32,
        200,
        [ { amount: 2, item: mi('carbon_dust') } ],
        null,
        [
            { amount: 500, fluid: mi('beryllium_hydroxide') },
            { amount: 150, fluid: mi('chlorine') }
        ],
        [ 
            { amount: 1000, fluid: mi('beryllium_chloride') },
            { amount: 100, fluid: mi('ammonia') }
        ]
    );

    // -- AMMONIA -- //
    chemicalReactor(
        event,
        st('ammonia'),
        8,
        200,
        null,
        null,
        [ 
            { amount: 250, fluid: mi('nitrogen') },
            { amount: 750, fluid: mi('hydrogen') }
        ],
        [ { amount: 1000, fluid: mi('ammonia') } ]
    );

    // -- PHANTOM MEMBRANE -- //
    chemicalReactor(
        event,
        st('phantom_membrane'),
        16,
        200,
        [
            { amount: 16, item: mc('leather') }, 
            { amount: 2, item: tr('calcite_dust') },
        ],
        [ { amount: 1, item: mc('phantom_membrane') } ],
        [ { amount: 2000, fluid: mi('liquid_ender')} ]
    );

    // -- BLAZE ROD -- //
    chemicalReactor(
        event,
        st('blaze_rod'),
        16,
        200,
        [ 
            { amount: 1, item: mi('steel_rod') },
            { amount: 16, item: mc('nether_wart') }
        ],
        [ { amount: 1, item: mc('blaze_rod') } ],
        [ { amount: 1000, fluid: mc('lava')} ]
    );

    // -- GHAST TEAR -- //
    chemicalReactor(
        event,
        st('ghast_tear'),
        16,
        200,
        [ 
            { amount: 16, item: mc('tnt') },
            { amount: 16, item: mi('salt_dust') }
        ],
        [ { amount: 1, item: mc('ghast_tear') } ],
        [ { amount: 1000, fluid: mc('lava')} ]
    );

    // -- ROTTEN FLESH -- //
    chemicalReactor(
        event,
        st('rotten_flesh'),
        16,
        200,
        [ { amount: 4, item: mc('leather') } ],
        [ { amount: 1, item: mc('rotten_flesh') } ],
        [ { amount: 500, fluid: mi('hydrofluoric_acid')} ]
    );

    // -- ENDER PEARL -- //
    chemicalReactor(
        event,
        st('ender_pearl'),
        16,
        200,
        [ 
            { amount: 1, item: mc('slime_ball') },
            { amount: 4, item: 'xps:xp_dust' },
            { amount: 1, item: mc('spider_eye') },
        ],
        [ { amount: 1, item: mc('ender_pearl') } ],
        [ { amount: 500, fluid: 'xps:xp_fluid'} ]
    );

    // -- ROSE QUARTZ -- //
    chemicalReactor(
        event,
        st('rose_quartz'),
        16,
        200,
        [ { amount: 1, item: mc('quartz') } ],
        [ { amount: 1, item: cr('polished_rose_quartz') } ],
        [ { amount: 500, fluid: mi('molten_redstone') } ]
    );

    // -- EYE OF ENDER -- //
    chemicalReactor(
        event,
        st('eye_of_ender'),
        8,
        600,
        [
            { amount: 1, item: mc('ender_pearl') },
            { amount: 1, item: mc('blaze_powder') }
        ],
        [ { amount: 2, item: mc('ender_eye') } ]
    );

    // -- PLASTIC BAR -- //
    chemicalReactor(
        event,
        st('plastic_bar'),
        16,
        300,
        [ { amount: 1, item: mc('paper') } ],
        [ { amount: 1, item: 'anim_guns:plastic' } ],
        [ { amount: 500, fluid: mi('polyethylene') } ]
    );

    // -- SNYTHETIC REDSTONE CRYSTAL -- //
    chemicalReactor(
        event,
        st('synthetic_redstone_crystal'),
        24,
        400,
        [ { amount: 1, item: mc('diamond') } ],
        [ { amount: 1, item: 'techreborn:synthetic_redstone_crystal' } ],
        [ { amount: 3600, fluid: mi('molten_redstone') } ]
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
            { amount: 1000, fluid: mi('oxygen') }
        ],
        [ { amount: 400, fluid: mi('polytetrafluoroethylene') } ]
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
            { amount: 1000, fluid: mi('chloroform') }
        ],
        [
            { amount: 2500, fluid: mi('hydrochloric_acid') },
            { amount: 500, fluid: mi('tetrafluoroethylene') }
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
            { amount: 500, fluid: mi('methane') }
        ],
        [
            { amount: 2000, fluid: mi('hydrochloric_acid') },
            { amount: 500, fluid: mi('chloroform') }
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
            { amount: 1000, fluid: mi('hydrogen') }
        ],
        [ { amount: 2000, fluid: mi('hydrofluoric_acid') } ]
    );
});