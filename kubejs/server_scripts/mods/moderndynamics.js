// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:moderndynamics/${id}`;

    // -- MODERN DYNAMICS REMOVED RECIPES -- //
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
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- FLUID PIPE -- //
    event.shaped('8x ' + md('fluid_pipe'), [
        'CPC'
    ],
    {
        C: '#c:copper_plates',
        P: '#' + mi('fluid_pipes')
    })
    .id(st('fluid_pipe'));

    // -- ITEM PIPE -- //
    event.shaped('8x ' + md('item_pipe'), [
        'IPI'
    ],
    {
        I: '#c:iron_plates',
        P: '#' + mi('item_pipes')
    })
    .id(st('item_pipe'));

    // -- LV CABLE -- //
    event.shaped('4x ' + md('lv_cable'), [
        'RCR'
    ],
    {
        R: mi('rubber_sheet'),
        C: '#' + kj('lv_wire')
    })
    .id(st('lv_from_mi'));

    // -- MV CABLE -- //
    event.shaped('4x ' + md('mv_cable'), [
        'RCR'
    ],
    {
        R: mi('rubber_sheet'),
        C: '#' + kj('mv_wire')
    })
    .id(st('mv_from_mi'));

    // -- HV CABLE -- //
    event.shaped('4x ' + md('hv_cable'), [
        'RCR'
    ],
    {
        R: mi('rubber_sheet'),
        C: '#' + kj('hv_wire')
    })
    .id(st('hv_from_mi'));

    // -- EV CABLE -- //
    event.shaped('4x ' + md('ev_cable'), [
        'RCR'
    ],
    {
        R: mi('rubber_sheet'),
        C: '#' + kj('ev_wire')
    })
    .id(st('ev_from_mi'));

    // -- SUPERCONDUCTOR CABLE -- //
    event.shaped('4x ' + md('superconductor_cable'), [
        'RCR'
    ], 
    {
        R: mi('rubber_sheet'),
        C: mi('superconductor_cable')
    })
    .id(st('superconductor_from_mi'));
});