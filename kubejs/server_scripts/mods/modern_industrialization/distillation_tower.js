// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/distillation_tower/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let distillationTower = (id, eu, duration, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('distillation_tower'),
            eu: eu,
            duration: duration
        }

        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe).id(id);
    }

    // -- WOOD TAR -- //
    distillationTower(
        st('wood_tar'),
        48, 
        200,
        [ { amount: 1000, fluid: mi('wood_tar') } ],
        [
            { amount: 400, fluid: mi('creosote') },
            { amount: 400, fluid: mi('benzene') },
            { amount: 100, fluid: mi('toluene') },
            { amount: 100, fluid: mi('heavy_fuel') }
        ]
    );
});