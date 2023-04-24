ServerEvents.recipes(e => {
    // -- REMOVED RECIPES -- //
    const FARMERS_DELIGHT_DELETED_RECIPES = [
        'farmersdelight:paper_from_tree_bark'
    ];
    FARMERS_DELIGHT_DELETED_RECIPES.forEach(id => e.remove( {id: id} ));
});