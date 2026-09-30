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

    // -- BRONZE PLATE -- //
    pressing(
        event,
        st('bronze_plate'),
        [{ tag: 'c:ingots/bronze' }],
        [{ id: mi('bronze_plate'), count: 1 }]
    );

    // -- SILVER PLATE -- //
    pressing(
        event,
        st('silver_plate'),
        [{ tag: 'c:ingots/silver' }],
        [{ id: mi('silver_plate'), count: 1 }]
    );

    // -- STEEL PLATE -- //
    pressing(
        event,
        st('steel_plate'),
        [{ tag: 'c:ingots/steel' }],
        [{ id: mi('steel_plate'), count: 1 }]
    );

    // -- TIN PLATE -- //
    pressing(
        event,
        st('tin_plate'),
        [{ tag: 'c:ingots/tin' }],
        [{ id: mi('tin_plate'), count: 1 }]
    );
});
