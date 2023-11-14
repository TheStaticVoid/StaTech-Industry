// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:explorerscompass/${id}`;

    // Remove the default compass recipe
    event.remove( {id: ex('explorers_compass')} );
    
    // -- EXPLORER'S COMPASS -- // 
    event.shaped(ex('explorerscompass'), [
        'CSC',
        'SOS',
        'CSC'
    ],
    {
        C: mc('cobweb'),
        S: '#c:steel_ingots',
        O: mc('compass')
    })
    .id(st('explorerscompass'));
});