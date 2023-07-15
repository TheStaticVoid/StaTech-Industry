// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:measurements/${id}`;
    let ms = (id) => `measurements:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // Remvoe the default Tape Measure recipe
    e.remove( {id: ms('tape_measure') } );

    // -- TAPE MEASURE -- // 
    e.shaped(ms('tape_measure'), [
        ' G ',
        'GIY',
        ' GY'
    ],
    {
        G: mc('gray_wool'),
        Y: mc('yellow_wool'),
        I: '#c:iron_plates'
    })
    .id(st('tape_measure'));
});