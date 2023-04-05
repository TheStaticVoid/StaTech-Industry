ServerEvents.recipes(e => {
    
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let mc = (id) => `minecraft:${id}`;

    let electrolyzer = (eu, duration, item_inputs, fluid_inputs, fluid_outputs, item_outputs) => {
        let newRecipe = {
            type: 'modern_industrialization:electrolyzer',
            eu: eu,
            duration: duration
        }

        if (item_inputs != null)
            newRecipe['item_inputs'] = item_inputs;
        if (fluid_inputs != null)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (item_outputs != null)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_outputs != null)
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
        [
            { amount: 1, fluid: mi('uu_matter') }
        ],
        null
    );

    // -- ELECTROLYZING CLAY -- //
    electrolyzer(
        32,
        1200,
        [
            { amount: 48, item: mc('clay_ball') }
        ],
        null,
        [
            { amount: 50, fluid: mi('lithium') }
        ],
        [
            { amount: 1, item: mi('aluminum_dust') },
            { amount: 2, item: mi('sodium_dust') },
            { amount: 1, item: mi('silicon_dust') }
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
            { amount: 100, fluid: mc('water') }
        ],
        [
            { amount: 125, fluid: mi('chlorine') }
        ],
        [
            { amount: 1, item: mi('sodium_dust') }
        ]
    );
});