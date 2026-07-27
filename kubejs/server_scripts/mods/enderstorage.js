// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:enderstorage/${id}`;

    // -- ENDER STORAGE REMOVED RECIPES -- //
    const ENDERSTORAGE_REMOVED_RECIPES = [
        es('ender_chest'),
        es('ender_tank'),
        es('ender_pouch')
    ];
    ENDERSTORAGE_REMOVED_RECIPES.forEach(id => event.remove({ id: id }));

    // -- ENDER CHEST -- //
    event.shaped(es('ender_chest'), [
        'BWB',
        'OCO',
        'BEB'
    ], {
        B: mc('blaze_rod'),
        W: '#c:wools/white',
        O: mc('obsidian'),
        C: mi('configurable_chest'),
        E: mc('ender_eye')
    }).id(st('ender_chest'));

    // -- ENDER TANK -- //
    event.shaped(es('ender_tank'), [
        'BWB',
        'OTO',
        'BEB'
    ], {
        B: mc('blaze_rod'),
        W: '#c:wools/white',
        O: mc('obsidian'),
        T: mi('configurable_tank'),
        E: mc('ender_eye')
    }).id(st('ender_tank'));

    // -- ENDER POUCH -- //
    event.shaped(es('ender_pouch'), [
        'BLB',
        'LEL',
        'BCB'
    ], {
        B: mc('blaze_powder'),
        L: mc('leather'),
        E: mc('ender_eye'),
        C: es('ender_chest')
    }).id(st('ender_pouch'));
});
