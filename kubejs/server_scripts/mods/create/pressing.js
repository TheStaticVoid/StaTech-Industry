// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:create/pressing/${id}`;

    // -- PRESSING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [cr('pressing/sugar_cane')];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let pressing = (id, item_inputs, item_outputs) => {
        let newRecipe = {
            type: cr('pressing'),
        };

        if (item_inputs) newRecipe['ingredients'] = item_inputs;
        if (item_outputs) newRecipe['results'] = item_outputs;

        event.custom(newRecipe).id(id);
    };

    // -- BRONZE PLATE -- //
    pressing(
        st('bronze_plate'),
        [{ tag: 'c:ingots/bronze' }],
        [{ id: mi('bronze_plate'), count: 1 }]
    );

    // -- SILVER PLATE -- //
    pressing(
        st('silver_plate'),
        [{ tag: 'c:ingots/silver' }],
        [{ id: mi('silver_plate'), count: 1 }]
    );

    // -- STEEL PLATE -- //
    pressing(
        st('steel_plate'),
        [{ tag: 'c:ingots/steel' }],
        [{ id: mi('steel_plate'), count: 1 }]
    );

    // -- TIN PLATE -- //
    pressing(
        st('tin_plate'),
        [{ tag: 'c:ingots/tin' }],
        [{ id: mi('tin_plate'), count: 1 }]
    );
});
