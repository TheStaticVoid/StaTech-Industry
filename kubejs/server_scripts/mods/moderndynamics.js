ServerEvents.recipes(e => {
    let st = (id) => `statech:moderndynamics/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let md = (id) => `moderndynamics:${id}`;

    let REMOVED_RECIPES = [
        md('fluid_pipe'),
        md('item_pipe'),
        md('wrench'),
        md('cable/lv_from_mi'),
        md('cable/mv_from_mi'),
        md('cable/hv_from_mi'),
        md('cable/ev_from_mi'),
        md('cable/superconductor_from_mi')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- FLUID PIPE -- //
    e.shaped('8x ' + md('fluid_pipe'), [
        'CPC'
    ],
    {
        C: '#c:copper_plates',
        P: '#modern_industrialization:fluid_pipes'
    })
    .id(st('fluid_pipe'));

    // -- ITEM PIPE -- //
    e.shaped('8x ' + md('item_pipe'), [
        'IPI'
    ],
    {
        I: '#c:iron_plates',
        P: '#modern_industrialization:item_pipes'
    })
    .id(st('item_pipe'));

    // -- LV CABLE -- //
    e.shaped('4x ' + md('lv_cable'), [
        'RCR'
    ],
    {
        R: mi('rubber_sheet'),
        C: '#kubejs:lv_wire'
    })
    .id(st('lv_from_mi'));

    // -- MV CABLE -- //
    e.shaped('4x ' + md('mv_cable'), [
        'RCR'
    ],
    {
        R: mi('rubber_sheet'),
        C: '#kubejs:mv_wire'
    })
    .id(st('mv_from_mi'));

    // -- HV CABLE -- //
    e.shaped('4x ' + md('hv_cable'), [
        'RCR'
    ],
    {
        R: mi('rubber_sheet'),
        C: '#kubejs:hv_wire'
    })
    .id(st('hv_from_mi'));

    // -- EV CABLE -- //
    e.shaped('4x ' + md('ev_cable'), [
        'RCR'
    ],
    {
        R: mi('rubber_sheet'),
        C: '#kubejs:ev_wire'
    })
    .id(st('ev_from_mi'));

    // -- SUPERCONDUCTOR CABLE -- //
    e.shaped('4x ' + md('superconductor_cable'), [
        'RCR'
    ], 
    {
        R: mi('rubber_sheet'),
        C: mi('superconductor_cable')
    })
    .id(st('superconductor_from_mi'));
});