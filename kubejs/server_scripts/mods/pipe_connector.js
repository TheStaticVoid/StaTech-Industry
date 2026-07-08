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
    PIPE_CONNECTOR_REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // -- ANGEL RING -- //
    event.shaped(pc('pipe_connector'), [
        'SIS',
        'CFC',
        'STS'
    ],
    {
        I: mi('item_pipe'),
        S: mi('steel_plate'),
        F: mi('fluid_pipe'),
        T: mi('tin_cable'),
        C: mi('capacitor')
    }).id(st('pipe_connector'))
});