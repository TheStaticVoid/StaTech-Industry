ServerEvents.recipes(e => {
    let st = (id) => `statech:modern_industrialization/singularity_forge/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let kjs = (id) => `kubejs:${id}`;

    let singularityForge = (id, eu, duration, item_inputs, fluid_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('singularity_forge'),
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

        e.custom(newRecipe);
    }

    singularityForge(
        st('singularity'),
        1024,
        1200,
        [ 
            { amount: 1, item: mi('ultradense_metal_ball') },
            { amount: 1, item: kjs('core_fragment') }
        ],
        [ { amount: 100, fluid: mi('cryofluid') } ], 
        [ { amount: 1, item: mi('singularity') } ]
    );
});