// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:enhancedworkbenches/${id}`;

    // -- ENHANCED WORKBENCHES REMOVED RECIPES -- //
    const DELETED_RECIPES = [
        ew('project_table'),
    ];
    DELETED_RECIPES.forEach(id => event.remove({ id: id }));

    // -- PROJECT TABLE -- //
    event.shaped(ew('project_table'), [
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