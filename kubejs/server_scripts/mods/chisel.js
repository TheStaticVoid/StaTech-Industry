// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:${id}`;

    // Remove and replace the default chisel recipe
    e.remove({id: ch('chisel')});

    // -- CHISEL -- // 
    e.shaped(ch('chisel'), [
        ' P',
        'S '
    ],
    {
        P: '#c:plates/iron',
        S: '#c:rods/wooden'
    })
    .id(st('chisel'));
});
