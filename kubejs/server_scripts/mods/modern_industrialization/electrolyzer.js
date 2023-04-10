ServerEvents.recipes(e => {
    const DELETED_RECIPE = [
        'modern_industrialization:materials/electrolyzer/salt_electrolysis'
    ];
    DELETED_RECIPE.forEach(id => e.remove({id: id}));
    
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let mc = (id) => `minecraft:${id}`;

    let electrolyzer = (eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: 'modern_industrialization:electrolyzer',
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
        
        e.custom(newRecipe);
    }

    // -- UU Matter -- //
    electrolyzer(
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
});