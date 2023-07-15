// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:explorerscompass/${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ec = (id) => `explorerscompass:${id}`;

    // Remove the default compass recipe
    e.remove( {id: ec('explorers_compass')} );
    
    // -- EXPLORER'S COMPASS -- // 
    e.shaped(ec('explorerscompass'), [
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