// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:moderndynamics/${id}`;

    // -- MODERN DYNAMICS REMOVED REICPES -- //
    const REMOVED_RECIPES = [
        md('fluid_pipe'),
        md('item_pipe'),
        md('wrench')
    ];
    REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // -- FLUID PIPE -- //
    event.shaped('8x ' + md('fluid_pipe'), [
        'CPC'
    ],
    {
        C: '#c:plates/copper',
        P: '#' + mi('fluid_pipes')
    })
    .id(st('fluid_pipe'));

    // -- ITEM PIPE -- //
    event.shaped('8x ' + md('item_pipe'), [
        'IPI'
    ],
    {
        I: '#c:plates/iron',
        P: '#' + mi('item_pipes')
    })
    .id(st('item_pipe'));


});