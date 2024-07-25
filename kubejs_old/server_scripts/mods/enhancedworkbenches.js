// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:enhancedworkbenches/${id}`;
    let ew = (id) => `enhancedworkbenches:${id}`;

    // -- ENHANCED WORKBENCHES REMOVED RECIPES -- //
    const DELETED_RECIPES = [
        ew('project_table'),
    ];
    DELETED_RECIPES.forEach(id => e.remove({ id: id }));

    // -- PROJECT TABLE -- //
    e.shaped(ew('project_table'), [
        'III',
        'PWP',
        'PCP',
    ],
    {
        W: '#c:workbench',
        C: '#c:chests',
        P: '#minecraft:planks',
        I: '#c:iron_plates'
    })
    .id(st('project_table'));
});