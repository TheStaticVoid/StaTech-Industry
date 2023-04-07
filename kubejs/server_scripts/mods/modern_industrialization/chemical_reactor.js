ServerEvents.recipes(e => {

    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    let chemicalReactor = (eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('chemical_reactor'),
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

    // -- EYE OF ENDER -- //
    chemicalReactor(
        8,
        600,
        [
            { amount: 1, item: mc('ender_pearl') },
            { amount: 1, item: mc('blaze_powder') }
        ],
        [
            { amount: 2, item: mc('ender_eye') }
        ],
        null,
        null
    );

    // -- PLASTIC BAR -- //
    chemicalReactor(
        16,
        300,
        [
            { amount: 1, item: mc('paper') }
        ],
        [
            { amount: 1, item: 'anim_guns:plastic' }
        ],
        [
            { amount: 500, fluid: mi('polyethylene') }
        ],
        null
    );

    // -- SNYTHETIC REDSTONE CRYSTAL -- //
    chemicalReactor(
        24,
        400,
        [
            { amount: 1, item: mc('diamond') }
        ],
        [
            { amount: 1, item: 'techreborn:synthetic_redstone_crystal' }
        ],
        [
            { amount: 3600, fluid: mi('molten_redstone') }
        ],
        null
    );
});