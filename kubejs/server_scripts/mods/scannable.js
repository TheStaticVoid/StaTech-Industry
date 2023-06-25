ServerEvents.recipes(e => {
    e.remove( {id: 'scannable:scanner'} );
    e.shaped('scannable:scanner', [
        'I I',
        'CAC',
        'GRG'
    ],
    {
        I: '#c:iron_plates',
        C: '#c:copper_plates',
        R: '#c:redstone_dusts',
        G: '#c:gold_plates',
        A: 'modern_industrialization:analog_circuit'
    })
    .id('statech:scannable/scanner');
})