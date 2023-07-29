// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/cutting_machine/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ca = (id) => `createaddition:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let cuttingMachine = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('cutting_machine'),
            eu: eu,
            duration: duration,
            fluid_inputs: [
                { amount: 1, fluid: mi('lubricant') }
            ]
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    }

    // -- STRAW -- //
    cuttingMachine(
        st('straw'),
        2,
        100,
        [ { amount: 1, item: mc('bamboo') } ],
        [ { amount: 1, item: ca('straw') } ]
    );

    // -- EMPTY CAN -- //
    cuttingMachine(
        st('empty_can'),
        2,
        200,
        [ { amount: 1, tag: 'c:tin_plates' } ],
        [ { amount: 4, item: kj('empty_can') } ]
    );

    // -- PIZZA SLICE -- //
    cuttingMachine(
        st('pizza_slice'),
        2,
        200,
        [ { amount: 1, item: kj('pizza') } ],
        [ { amount: 8, item: kj('pizza_slice') } ]
    );

    // -- CONCRETE PIZZA SLICE -- //
    cuttingMachine(
        st('concrete_pizza_slice'),
        8,
        200,
        [ { amount: 1, item: kj('concrete_pizza') } ],
        [ { amount: 8, item: kj('concrete_pizza_slice') } ]
    );
});