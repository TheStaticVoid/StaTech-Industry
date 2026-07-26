// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:pipe_connector/${id}`;

    // -- PIPE CONNECTOR REMOVED REICPES -- //
    const PIPE_CONNECTOR_REMOVED_RECIPES = [
        pc('pipe_connector')
    ];
    PIPE_CONNECTOR_REMOVED_RECIPES.forEach(id => event.remove({ id: id }));

    // -- PIPE CONNECTOR -- //
    event.shaped(pc('pipe_connector'), [
        'SIS',
        'CFC',
        'STS'
    ], {
        I: mi('item_pipe'),
        S: mi('steel_plate'),
        F: mi('fluid_pipe'),
        T: mi('tin_cable'),
        C: mi('capacitor')
    }).id(st('pipe_connector'))
});

ServerEvents.tags('item', event => {

    const PC_PLACEABLE_ITEMS = [
        mi('gold_cable'),
        mi('enderium_cable'),
        mi('tungstensteel_cable'),
        '#modern_industrialization:me_wires'
    ];
    PC_PLACEABLE_ITEMS.forEach(id => { event.add(pc('placeable_items'), id) });
});
