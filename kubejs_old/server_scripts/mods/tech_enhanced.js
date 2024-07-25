// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:tech_enhanced/${id}`;
    let te = (id) => `tech_enhanced:${id}`;

    // -- TECH ENHANCED REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        te('electric_wrench'),
        te('electric_hoe')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({ id: id }));
});