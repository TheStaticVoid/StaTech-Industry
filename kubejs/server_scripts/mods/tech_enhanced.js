// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- TECH ENHANCED REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        te('electric_wrench'),
        te('electric_hoe')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({ id: id }));
});