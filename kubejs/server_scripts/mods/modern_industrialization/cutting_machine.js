ServerEvents.recipes(e => {
    let st = (id) => `statech:modern_industrialization/cutting_machine/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ca = (id) => `createaddition:${id}`;

    let cuttingMachine = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('cutting_machine'),
            eu: eu,
            duration: duration,
            id: id,
            fluid_inputs: [
                { amount: 1, fluid: mi('lubricant') }
            ]
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe);
    }

    // -- STRAW -- //
    cuttingMachine(
        st('straw'),
        2,
        100,
        [ { amount: 1, item: mc('bamboo') } ],
        [ { amount: 1, item: ca('straw') } ]
    );
});