// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/pyrolyse_oven/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let pyrolyseOven = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('pyrolyse_oven'),
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
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe);
    }

    // -- LOGS TO CHARCOAL + WOOD TAR -- //
    pyrolyseOven(
        st('charcoal_cresote_from_logs'),
        16,
        600,
        [ { amount: 16, tag: mc('logs') } ],
        [ { amount: 24, item: mc('charcoal') } ],
        [ { amount: 8000, fluid: mi('steam') } ],
        [ { amount: 1000, fluid: mi('wood_tar') } ]
    );

    // -- COAL TO COKE + CREOSOTE -- //
    pyrolyseOven(
        st('coke_benzene_from_coal'),
        16,
        600,
        [ { amount: 16, item: mc('coal') } ],
        [ { amount: 20, item: mi('coke') } ],
        [ { amount: 8000, fluid: mi('steam') } ],
        [ { amount: 1000, fluid: mi('creosote') } ]
    );

    // -- COAL DUST TO COKE DUST + CREOSOTE -- //
    pyrolyseOven(
        st('coke_dust_benzene_from_coal_dusts'),
        16,
        600,
        [ { amount: 16, tag: 'c:coal_dusts' } ],
        [ { amount: 20, item: mi('coke_dust') } ],
        [ { amount: 8000, fluid: mi('steam') } ],
        [ { amount: 1000, fluid: mi('creosote') } ]
    );
});