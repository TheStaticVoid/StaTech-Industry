// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:create/compacting/${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let compacting = (id, item_inputs, item_outputs) => {
        let newRecipe = {
            type: cr('compacting'),
        };

        if (item_inputs) newRecipe['ingredients'] = item_inputs;
        if (item_outputs) newRecipe['results'] = item_outputs;

        event.custom(newRecipe).id(id);
    };
});
