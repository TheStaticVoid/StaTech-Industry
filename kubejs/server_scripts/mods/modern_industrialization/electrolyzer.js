// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let st = (id) => `statech:modern_industrialization/electrolyzer/${id}`;

    // -- ELECTROLYZER REMOVED RECIPES -- //
    const DELETED_RECIPE = [
        mi('materials/electrolyzer/salt_electrolysis')
    ];
    DELETED_RECIPE.forEach(id => e.remove({id: id}));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let electrolyzer = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('electrolyzer'),
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

    // -- BRINE -- //
    electrolyzer(
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
        st('cinnabar_dust'),
        16,
        800,
        [ { amount: 2, tag: 'c:cinnabar_dusts' } ],
        [ { amount: 1, item: mi('sulfur_dust') } ]
    );

    // -- PERIDOT DUST -- //
    electrolyzer(
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
        st('sapphire_dust'),
        16,
        600,
        [ { amount: 8, tag: 'c:sapphire_dusts' } ],
        [ { amount: 2, item: mi('aluminum_dust') } ]
    );

    // -- SODALITE DUST -- //
    electrolyzer(
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