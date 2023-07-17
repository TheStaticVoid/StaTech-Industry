// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:dankstorage/${id}`;
    let ds = (id) => `dankstorage:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // -- DANK STORAGE REMOVED RECIPES -- //
    const REMOVED_RECIPE = [

    ];
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));
});