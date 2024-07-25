// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/singularity_forge/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let singularityForge = (id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
        let newRecipe = {
            type: mi('singularity_forge'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;

        e.custom(newRecipe).id(id);
    }

    // -- SINGULARITY -- //
    singularityForge(
        st('singularity'),
        8192,
        1200,
        [ 
            { amount: 64, item: mi('nuke') },
            { amount: 1, item: mi('ultradense_metal_ball') }
        ],
        [ { amount: 1, item: mi('singularity') } ],
        [ { amount: 1000, fluid: mi('neutronium') } ]
    );
});