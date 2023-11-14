// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:scannable/${id}`;

    // Remove the default Scanner recipe
    event.remove( {id: sc('scanner')} );

    // -- SCANNER -- // 
    event.shaped(sc('scanner'), [
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