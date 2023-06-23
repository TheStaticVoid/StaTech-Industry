ServerEvents.recipes(e => {
    e.remove( {id: 'measurements:tape_measure' } );
    e.shaped('measurements:tape_measure', [
        ' G ',
        'GIY',
        ' GY'
    ],
    {
        G: 'minecraft:gray_wool',
        Y: 'minecraft:yellow_wool',
        I: '#c:iron_plates'
    })
    .id('statech:measurements/tape_measure');
});