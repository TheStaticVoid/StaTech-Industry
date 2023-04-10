ServerEvents.recipes(e => {
    // -- TRAVEL ANCHOR -- //
    e.remove( {id: 'travelstaff:travel_anchor'} );
    e.shaped('travelstaff:travel_anchor', [
        'BIB',
        'IPI',
        'BIB'
    ],
    {
        B: '#c:steel_blocks',
        I: '#c:steel_ingots',
        P: '#c:ender_pearls'
    });

    e.remove( {id: 'travelstaff:travel_staff'} );
    e.shaped('travelstaff:travel_staff', [
        ' PE',
        ' RP',
        'R  '
    ],
    {
        R: 'modern_industrialization:steel_rod',
        E: 'minecraft:emerald',
        P: 'minecraft:ender_pearl'
    });
});