// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:createdeco/${id}`;

    // -- CREATE DECO REMOVED RECIPES -- //
    const CREATEDECO_DELETED_ITEMS = [
        cd('iron_sheet_metal'),
        cd('copper_sheet_metal'),
    ];
    CREATEDECO_DELETED_ITEMS.forEach(id => event.remove( {id: id} ));

    // -- IRON SHEET METAL -- //
    event.shaped('4x ' + cd('iron_sheet_metal'), [
        ' P ',
        'P P',
        ' P '
    ],
    {
        P: '#c:plates/iron'
    }).id(st('iron_sheet_metal'));

    // -- COPPER SHEET METAL -- //
    event.shaped('4x ' + cd('copper_sheet_metal'), [
        ' P ',
        'P P',
        ' P '
    ],
    {
        P: '#c:plates/copper'
    }).id(st('copper_sheet_metal'));
});