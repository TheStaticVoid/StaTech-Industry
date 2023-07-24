// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:create/pressing/${id}`;
    let cr = (id) => `create:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- PRESSING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        cr('pressing/sugar_cane')
    ];
    REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let pressing = (id, item_inputs, item_outputs) => {
        let newRecipe = {
            type: cr('pressing'),
        }

        if (item_inputs)
            newRecipe['ingredients'] = item_inputs;
        if (item_outputs)
            newRecipe['results'] = item_outputs;

        e.custom(newRecipe).id(id);
    }

    // -- BRONZE PLATE -- //
    pressing(
        st('bronze_plate'),
        [ { tag: 'c:bronze_ingots' } ],
        [ { item: mi('bronze_plate'), count: 1 } ]
    );
});