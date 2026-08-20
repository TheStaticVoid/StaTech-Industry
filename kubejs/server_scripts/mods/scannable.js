// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:scannable/${id}`;

    // Remove the default Scanner recipe
    e.remove( {id: sc('scanner')} );

    // -- SCANNER -- // 
    e.shaped(sc('scanner'), [
        'I I',
        'CAC',
        'GRG'
    ],
    {
        I: '#c:plates/iron',
        C: '#c:plates/copper',
        R: '#c:dusts/redstone',
        G: '#c:plates/gold',
        A: mi('analog_circuit')
    })
    .id(st('scanner'));
})