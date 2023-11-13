// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/cutting_machine/${id}`;

    // -- CUTTING MACHINE VARIABLE CONSTANTS -- //
    const lubricantAmount = 10;
    const gsonJsonArray = Java.loadClass('com.google.gson.JsonArray');

    let recipesToRemove = [];
    event.forEachRecipe( { type: mi('cutting_machine') }, recipe => {
        recipesToRemove.push(recipe.getId());

        let recipeJson = recipe.json;
        let inputs = recipeJson.get('fluid_inputs');
        let amount;
        if (inputs.getClass() === gsonJsonArray) {
            amount = inputs.get(0).get('amount');
            if (amount == 1) {
                recipeJson.get('fluid_inputs').get(0).add('amount', lubricantAmount);
            }
        } else {
            amount = inputs.get('amount');
            if (amount == 1) {
                recipeJson.get('fluid_inputs').add('amount', lubricantAmount);
            }
        }
        event.custom(recipeJson).id(st(recipe.getPath()));
    });

    recipesToRemove.forEach(id => event.remove({id: id}));

    // -- STRAW -- //
    cuttingMachine(
        event,
        st('straw'),
        2,
        100,
        [ { amount: 1, item: mc('bamboo') } ],
        [ { amount: 1, item: ca('straw') } ]
    );

    // -- EMPTY CAN -- //
    cuttingMachine(
        event,
        st('empty_can'),
        2,
        200,
        [ { amount: 1, tag: 'c:tin_plates' } ],
        [ { amount: 4, item: kj('empty_can') } ]
    );

    // -- PIZZA SLICE -- //
    cuttingMachine(
        event,
        st('pizza_slice'),
        2,
        200,
        [ { amount: 1, item: kj('pizza') } ],
        [ { amount: 8, item: kj('pizza_slice') } ]
    );

    // -- CONCRETE PIZZA SLICE -- //
    cuttingMachine(
        event,
        st('concrete_pizza_slice'),
        8,
        200,
        [ { amount: 1, item: kj('concrete_pizza') } ],
        [ { amount: 8, item: kj('concrete_pizza_slice') } ]
    );

    // -- MINCED BEEF -- //
    cuttingMachine(
        event,
        st('minced_beef'),
        2,
        200,
        [ { amount: 1, item: mc('beef') } ],
        [ { amount: 4, item: fd('minced_beef') } ]
    );
});