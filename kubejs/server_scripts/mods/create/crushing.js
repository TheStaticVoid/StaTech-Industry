// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //     
    let cr = (id) => `create:${id}`;

    // -- CREATE CRUSHING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        cr('crushing/raw_uranium_ore'),
        cr('crushing/raw_platinum_ore'),
        cr('crushing/raw_uranium_block'),
        cr('crushing/raw_platinum_block'),
        cr('crushing/uranium_ore'),
        cr('crushing/platinum_ore'),
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));
});