// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:iden_decor/${id}`;

    // -- IDEN DECOR REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        'iden_decor:carved_spruce_planks',
    ];
    REMOVED_RECIPES.forEach(id => event.remove({ id: id }));

    event.shaped('4x ' + 'iden_decor:carved_spruce_planks', [
        ' S ',
        'S S',
        ' S '
    ], {
        S: mc('spruce_planks')
    })
        .id('iden_decor:carved_spruce_planks');

})
