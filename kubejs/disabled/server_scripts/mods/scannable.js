// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:scannable/${id}`;
    let sc = (id) => `scannable:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // Remove the default Scanner recipe
    e.remove( {id: sc('scanner')} );

    // -- SCANNER -- // 
    e.shaped(sc('scanner'), [
        'I I',
        'CAC',
        'GRG'
    ],
    {
        I: '#c:iron_plates',
        C: '#c:copper_plates',
        R: '#c:redstone_dusts',
        G: '#c:gold_plates',
        A: mi('analog_circuit')
    })
    .id(st('scanner'));
})