// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- YIGD REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        gd('death_scroll')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));
});