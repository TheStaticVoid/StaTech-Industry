ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;

    let cuttingMachine = (eu, duration, item_inputs, item_outputs, fluid_inputs) => {
        let newRecipe = {
            type: mi('cutting_machine'),
            eu: eu,
            duration: duration
        }

        if (item_inputs) 
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;

        e.custom(newRecipe);
    }

    // -- CALORITE ROD -- //
    cuttingMachine(
        2,
        800,
        [ { amount: 1, tag: 'c:calorite_ingots' } ],
        [ { amount: 2, item: mi('calorite_rod') } ],
        [ { amount: 1, fluid: mi('lubricant') } ]
    );

    // -- TUNGSTENSTEEL ROD -- //
    cuttingMachine(
        2,
        800,
        [ { amount: 1, tag: 'c:tungstensteel_ingots' } ],
        [ { amount: 2, item: mi('tungstensteel_rod') } ],
        [ { amount: 1, fluid: mi('lubricant') } ]
    );

});