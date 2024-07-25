// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/drilling_rig/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let drillingRig = (id, eu, duration, item_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('oil_drilling_rig'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe).id(id);
    }

    // -- LAVA FROM GOLD DRILL -- //
    drillingRig(
        st('gold_drill'),
        16,
        200,
        [ { amount: 1, item: mi('gold_drill'), probability: 0.05 } ],
        [ { amount: 500, fluid: mc('lava') } ]
    );

    drillingRig(
        st('salt_water'),
        16,
        200,
        [ { amount: 1, item: mi('bronze_drill'), probability: 0.02 } ],
        [ { amount: 16000, fluid: mi('salt_water') } ]
    );
});