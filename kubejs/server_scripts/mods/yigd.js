// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let gd = (id) => `yigd:${id}`;

    // -- YIGD REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        gd('death_scroll')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));
});