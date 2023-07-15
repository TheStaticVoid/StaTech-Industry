// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/core_drill/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let kjs = (id) => `kubejs:${id}`;

    // -- BLAST FURNACE REMOVED RECIPES -- //
    let coreDrill = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('core_drill'),
            eu: eu,
            duration: duration,
            id: id,
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

    coreDrill(
        st('test'),
        256,
        600,
        [ { amount: 1, item: mi('desh_drill'), probability: 0.1 } ],
        [ { amount: 1, item: kjs('core_fragment') } ],
        [ { amount: 1000, fluid: mi('drilling_fluid') } ],
        [ { amount: 500, fluid: mi('core_slurry') } ]
    );
});