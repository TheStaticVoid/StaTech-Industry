// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/electrolyzer/${id}`;

    // -- ELECTROLYZER REMOVED RECIPES -- //
    const DELETED_RECIPE = [
        mi('materials/electrolyzer/salt_electrolysis'),
        mi('materials/electrolyzer/beryllium_dust')
    ];
    DELETED_RECIPE.forEach(id => event.remove({id: id}));

    // -- BERYLLIUM DUST -- //
    electrolyzer(
        event,
        st('beryllium_dust'),
        32,
        400,
        null,
        [ { amount: 4, item: mi('beryllium_dust') } ],
        [ { amount: 500, fluid: mi('beryllium_chloride') } ],
        [ { amount: 100, fluid: mi('chlorine') } ]
    );

    // -- BRINE -- //
    electrolyzer(
        event,
        st('brine'),
        32,
        400,
        null,
        null,
        [ { amount: 8000, fluid: mi('brine') } ],
        [ 
            { amount: 2000, fluid: mi('chlorine') },
            { amount: 2000, fluid: mi('hydrogen') },
            { amount: 3000, fluid: mi('sodium_hydroxide') },
            { amount: 1000, fluid: mi('lithium') }
        ]
    );

    // -- UU MATTER -- //
    electrolyzer(
        event,
        st('uu-matter'),
        40,
        2500,
        [ { amount: 1, item: tr('uu_matter') } ],
        null,
        null,
        [ { amount: 1, fluid: mi('uu_matter') } ]
    );

    // -- CLAY -- //
    electrolyzer(
        event,
        st('clay_dust'),
        32,
        1200,
        [ { amount: 32, item: mi('clay_dust') } ],
        [
            { amount: 1, item: mi('aluminum_dust') },
            { amount: 2, item: mi('sodium_dust') },
            { amount: 1, item: mi('silicon_dust') }
        ],
        null,
        [ { amount: 1000, fluid: mi('lithium') } ]
    );

    // -- SALT -- //
    electrolyzer(
        event,
        st('salt_dust'),
        16,
        400,
        [ { amount: 2, tag: 'c:salt_dusts' } ],
        [ { amount: 1, item: mi('sodium_dust') } ],
        [ { amount: 100, fluid: mc('water') } ],
        [ { amount: 125, fluid: mi('chlorine') } ]
    );

    // -- PYRITE DUST -- //
    electrolyzer(
        event,
        st('pyrite_dust'),
        16,
        1200,
        [ { amount: 3, item: tr('pyrite_dust') } ],
        [
            { amount: 1, item: mc('raw_iron') },
            { amount: 2, item: mi('sulfur_dust') }
        ]
    );

    // -- GALENA DUST -- //
    electrolyzer(
        event,
        st('galena_dust'),
        16,
        1200,
        [ { amount: 2, tag: 'c:galena_dusts' } ],
        [
            { amount: 6, item: mi('silver_nugget') },
            { amount: 6, item: mi('lead_nugget') },
            { amount: 1, item: tr('sulfur_dust') }
        ]
    );

    // -- CINNABAR DUST -- //
    electrolyzer(
        event,
        st('cinnabar_dust'),
        16,
        800,
        [ { amount: 2, tag: 'c:cinnabar_dusts' } ],
        [ { amount: 1, item: mi('sulfur_dust') } ]
    );

    // -- PERIDOT DUST -- //
    electrolyzer(
        event,
        st('peridot_dust'),
        16,
        500,
        [ { amount: 9, tag: 'c:peridot_dusts' } ],
        [
            { amount: 2, item: tr('magnesium_dust') },
            { amount: 2, item: mc('raw_iron') },
            { amount: 1, item: mi('silicon_dust') }
        ],
        null,
        [ { amount: 100, fluid: mi('oxygen') } ]
    );

    // -- SAPPHIRE DUST -- //
    electrolyzer(
        event,
        st('sapphire_dust'),
        16,
        600,
        [ { amount: 8, tag: 'c:sapphire_dusts' } ],
        [ { amount: 2, item: mi('aluminum_dust') } ]
    );

    // -- SODALITE DUST -- //
    electrolyzer(
        event,
        st('sodalite_dust'),
        16,
        500,
        [ { amount: 23, tag: 'c:sodalite_dusts' } ],
        [
            { amount: 3, item: mi('aluminum_dust') },
            { amount: 4, item: mi('sodium_dust') },
            { amount: 3, item: mi('silicon_dust') }
        ]
    );

    // -- SPHALERITE DUST -- //
    electrolyzer(
        event,
        st('sphalerite_dust'),
        16,
        400,
        [ { amount: 2, tag: 'c:sphalerite_dusts' } ],
        [
            { amount: 1, item: tr('zinc_dust') },
            { amount: 1, item: mi('sulfur_dust') }
        ]
    );

    // -- PYROPE DUST -- //
    electrolyzer(
        event,
        st('pyrope_dust'),
        16,
        400,
        [ { amount: 20, tag: 'c:pyrope_dusts' } ],
        [
            { amount: 3, item: tr('magnesium_dust') },
            { amount: 2, item: mi('aluminum_dust') },
            { amount: 3, item: mi('silicon_dust') }
        ]
    );

    // -- ALAMANDINE DUST -- //
    electrolyzer(
        event,
        st('almadine_dust'),
        16,
        400,
        [ { amount: 20, tag: 'c:almandine_dusts' } ],
        [
            { amount: 3, item: mc('raw_iron') },
            { amount: 2, item: mi('aluminum_dust') },
            { amount: 3, item: mi('silicon_dust') }
        ]
    );

    // -- SPESSARTINE DUST -- //
    electrolyzer(
        event,
        st('spessartine_dust'),
        16,
        400,
        [ { amount: 20, tag: 'c:spessartine_dusts' } ],
        [
            { amount: 3, item: mi('manganese_dust') },
            { amount: 2, item: mi('aluminum_dust') },
            { amount: 3, item: mi('silicon_dust') }
        ]
    );

    // -- HYDROCHLORIC ACID -- //
    electrolyzer(
        event,
        st('hydrochloric_acid'),
        16,
        400,
        null,
        null,
        [ { amount: 1000, fluid: mi('hydrochloric_acid') } ],
        [
            { amount: 500, fluid: mi('hydrogen') },
            { amount: 500, fluid: mi('chlorine') }
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
        [ { amount: 1000, fluid: mi('chloroform') } ],
        [
            { amount: 300, fluid: mi('hydrogen') },
            { amount: 600, fluid: mi('chlorine') }
        ]
    );
});