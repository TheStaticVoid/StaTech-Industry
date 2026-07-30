// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:create/pressing/${id}`;

    // -- PRESSING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        cr('pressing/sugar_cane'),
        cr('pressing/iron_ingot'),
        cr('pressing/copper_ingot'),
        cr('pressing/gold_ingot'),
    ];
    REMOVED_RECIPES.forEach(id => event.remove({ id: id }));

    event.remove({ id: 'createaddition:pressing/electrum_ingot' }) //ok

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let pressing = (id, item_inputs, item_outputs) => {
        let newRecipe = {
            type: cr('pressing'),
        }

        if (item_inputs)
            newRecipe['ingredients'] = item_inputs;
        if (item_outputs)
            newRecipe['results'] = item_outputs;

        event.custom(newRecipe).id(id);
    }

    // -- BRONZE PLATE -- //
    pressing(
        st('bronze_plate'),
        [ { tag: 'c:double_ingots/bronze' } ],
        [ { 'id': mi('bronze_plate'), count: 1 } ]
    );

    // -- SILVER PLATE -- //
    pressing(
        st('silver_plate'),
        [{ tag: 'c:double_ingots/silver' } ],
        [ { 'id': mi('silver_plate'), count: 1 } ]
    );

    // -- STEEL PLATE -- //
    pressing(
        st('steel_plate'),
        [ { tag: 'c:double_ingots/steel' } ],
        [ { 'id': mi('steel_plate'), count: 1 } ]
    );

    // -- TIN PLATE -- //
    pressing(
        st('tin_plate'),
        [{ tag: 'c:double_ingots/tin' } ],
        [ { 'id': mi('tin_plate'), count: 1 } ]
    );

    // -- BULLSHITTIUM MODE -- //

    // -- IRON PLATE -- //
    pressing(
        st('iron_plate'),
        [{ tag: 'c:double_ingots/iron' }],
        [{ 'id': mi('iron_plate'), count: 1 }]
    );

    // -- ELECTRUM PLATE -- //
    pressing(
        st('electrum_plate'),
        [{ tag: 'c:double_ingots/electrum' }],
        [{ 'id': mi('electrum_plate'), count: 1 }]
    );

    // -- COPPER PLATE -- //
    pressing(
        st('copper_plate'),
        [{ tag: 'c:double_ingots/copper' }],
        [{ 'id': mi('copper_plate'), count: 1 }]
    );

    // -- GOLD PLATE -- //
    pressing(
        st('gold_plate'),
        [{ tag: 'c:double_ingots/gold' }],
        [{ 'id': mi('gold_plate'), count: 1 }]
    );
});