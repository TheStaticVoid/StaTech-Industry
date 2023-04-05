ServerEvents.recipes(e => {

    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    let chemicalReactor = (eu, duration, item_inputs, fluid_inputs, fluid_outputs, item_outputs) => {
        let newRecipe = {
            type: 'modern_industrialization:chemical_reactor',
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

    // -- EYE OF ENDER -- //
    chemicalReactor(
        8,
        600,
        [
            { amount: 1, item: mc('ender_pearl') },
            { amount: 1, item: mc('blaze_powder') }
        ],
        null,
        null,
        [
            { amount: 2, item: mc('ender_eye') }
        ]
    );

    // -- PLASTIC BAR -- //
    chemicalReactor(
        16,
        300,
        [
            { amount: 1, item: mc('paper') }
        ],
        [
            { amount: 500, item: mi('polyethylene') }
        ],
        null,
        [
            { amount: 1, item: 'anim_guns:plastic' }
        ]
    );

    // -- SNYTHETIC REDSTONE CRYSTAL -- //
    chemicalReactor(
        24,
        400,
        [
            { amount: 1, item: mc('diamond') }
        ],
        [
            { amount: 3600, fluid: mi('molten_redstone') }
        ],
        null,
        [
            { amount: 1, item: 'techreborn:synthetic_redstone_crystal' }
        ]
    );
});