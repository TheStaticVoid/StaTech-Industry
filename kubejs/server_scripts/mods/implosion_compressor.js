ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;

    const REMOVED_RECIPE = [
        mi('electric_age/component/implosion_compressor/singularity')
    ]
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

    let implosionCompressor = (eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('implosion_compressor'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)   
            newRecipe['item_outputs'] = item_outputs;
    
        e.custom(newRecipe);
    }

    // -- IRIDIUM ALLOY PLATE -- //
    implosionCompressor(
        64,
        2000,
        [
            { amount: 1, item: tr('iridium_alloy_ingot') },
            { amount: 4, item: mi('industrial_tnt') }
        ],
        [
            { amount: 1, item: tr('iridium_alloy_plate') }
        ]
    );

    // -- SINGULARITY -- //
    implosionCompressor(
        128,
        4800,
        [
            { amount: 1, item: mi('ultradense_metal_ball') },
            { amount: 64, item: mi('nuke') }
        ],
        [
            { amount: 1, item: mi('singularity') }
        ]
    );
});