// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/wiremill/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let wiremill = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('wiremill'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    }

    // -- POLYTETRAFLUOROETHYLENE INGOT -- //
    wiremill(
        st('gold_wire'),
        2,
        100,
        [ { amount: 1, item: mi('gold_plate') } ],
        [ { amount: 2, item: mi('gold_wire')}]
    );

});