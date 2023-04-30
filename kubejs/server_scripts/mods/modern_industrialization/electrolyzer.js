ServerEvents.recipes(e => {
    
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let st = (id) => `statech:modern_industrialization/electrolyzer/${id}`;

    const DELETED_RECIPE = [
        mi('materials/electrolyzer/salt_electrolysis')
    ];
    DELETED_RECIPE.forEach(id => e.remove({id: id}));

    let electrolyzer = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: 'modern_industrialization:electrolyzer',
            eu: eu,
            duration: duration,
            id: id
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;
        
        e.custom(newRecipe);
    }

    // -- UU Matter -- //
    electrolyzer(
        st('uu-matter'),
        40,
        2500,
        [
            { amount: 1, item: tr('uu_matter') }
        ],
        null,
        null,
        [
            { amount: 1, fluid: mi('uu_matter') }
        ]
    );

    // -- ELECTROLYZING CLAY -- //
    electrolyzer(
        st('clay_ball'),
        32,
        1200,
        [
            { amount: 48, item: mc('clay_ball') }
        ],
        [
            { amount: 1, item: mi('aluminum_dust') },
            { amount: 2, item: mi('sodium_dust') },
            { amount: 1, item: mi('silicon_dust') }
        ],
        null,
        [
            { amount: 50, fluid: mi('lithium') }
        ]
    );

    // -- ELECTROLYZING SALT -- //
    electrolyzer(
        st('salt_dust'),
        16,
        400,
        [
            { amount: 2, tag: 'c:salt_dusts' }
        ],
        [
            { amount: 1, item: mi('sodium_dust') }
        ],
        [
            { amount: 100, fluid: mc('water') }
        ],
        [
            { amount: 125, fluid: mi('chlorine') }
        ]
    );

    // -- ELECTROLYZING PYRITE DUST -- //
    electrolyzer(
        st('pyrite_dust'),
        60,
        1200,
        [
            { amount: 3, item: tr('pyrite_dust') },
        ],
        [
            { amount: 1, item: mc('raw_iron') },
            { amount: 2, item: mi('sulfur_dust') }
        ],
        null,
        null
    );

    // -- GALENA DUST -- //
    electrolyzer(
        st('galena_dust'),
        16,
        1200,
        [
            { amount: 2, tag: 'c:galena_dusts' }
        ],
        [
            { amount: 6, item: mi('silver_nugget') },
            { amount: 6, item: mi('lead_nugget') },
            { amount: 1, item: tr('sulfur_dust') }
        ],
        null,
        null
    );

    // -- CINNABAR DUST -- //
    electrolyzer(
        st('cinnabar_dust'),
        32,
        800,
        [
            { amount: 2, tag: 'c:cinnabar_dusts' }
        ],
        [
            { amount: 1, item: mi('sulfur_dust') }
        ],
        null,
        null
    );

    // -- PERIDOT DUST -- //
    electrolyzer(
        st('peridot_dust'),
        32,
        500,
        [
            { amount: 9, tag: 'c:peridot_dusts' }
        ],
        [
            { amount: 2, item: tr('magnesium_dust') },
            { amount: 2, item: mc('raw_iron') },
            { amount: 1, item: mi('silicon_dust') }
        ],
        null,
        [
            { amount: 100, fluid: mi('oxygen') }
        ]
    );

    // -- SAPPHIRE DUST -- //
    electrolyzer(
        st('sapphire_dust'),
        32,
        600,
        [
            { amount: 8, tag: 'c:sapphire_dusts' }
        ],
        [
            { amount: 2, item: mi('aluminum_dust') }
        ],
        null,
        null
    );

    // -- SODALITE DUST -- //
    electrolyzer(
        st('sodalite_dust'),
        32,
        500,
        [
            { amount: 23, tag: 'c:sodalite_dusts' }
        ],
        [
            { amount: 3, item: mi('aluminum_dust') },
            { amount: 4, item: mi('sodium_dust') },
            { amount: 3, item: mi('silicon_dust') }
        ],
        null,
        null
    );

    // -- SPHALERITE DUST -- //
    electrolyzer(
        st('sphalerite_dust'),
        32,
        400,
        [
            { amount: 2, tag: 'c:sphalerite_dusts' }
        ],
        [
            { amount: 1, item: tr('zinc_dust') },
            { amount: 1, item: mi('sulfur_dust') }
        ],
        null,
        null
    );

    // -- PYROPE DUST -- //
    electrolyzer(
        st('pyrope_dust'),
        32,
        400,
        [
            { amount: 20, tag: 'c:pyrope_dusts' }
        ],
        [
            { amount: 3, item: tr('magnesium_dust') },
            { amount: 2, item: mi('aluminum_dust') },
            { amount: 3, item: mi('silicon_dust') }
        ],
        null,
        null
    );

    // -- ALAMANDINE DUST -- //
    electrolyzer(
        st('almadine_dust'),
        32,
        400,
        [
            { amount: 20, tag: 'c:almandine_dusts' }
        ],
        [
            { amount: 3, item: mc('raw_iron') },
            { amount: 2, item: mi('aluminum_dust') },
            { amount: 3, item: mi('silicon_dust') }
        ],
        null,
        null
    );

    // -- SPESSARTINE DUST -- //
    electrolyzer(
        st('spessartine_dust'),
        32,
        400,
        [
            { amount: 20, tag: 'c:spessartine_dusts' }
        ],
        [
            { amount: 3, item: mi('manganese_dust') },
            { amount: 2, item: mi('aluminum_dust') },
            { amount: 3, item: mi('silicon_dust') }
        ],
        null,
        null
    );
});