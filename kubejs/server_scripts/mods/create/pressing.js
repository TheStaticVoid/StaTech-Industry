// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:create/pressing/${id}`;

    // -- PRESSING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        cr('pressing/sugar_cane')
    ];
    REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // -- BRONZE PLATE -- //
    createPressing(
        event,
        st('bronze_plate'),
        [ { tag: 'c:bronze_ingots' } ],
        [ { item: mi('bronze_plate'), count: 1 } ]
    );

    // -- TIN PLATE -- //
    createPressing(
        event,
        st('tin_plate'),
        [ { tag: 'c:tin_ingots' } ],
        [ { item: mi('tin_plate'), count: 1 } ]
    );
});