ServerEvents.recipes(e => {
    // -- REMOVED RECIPES -- //
    const VANILLA_DELETED = [
        'minecraft:piston',
        'minecraft:paper',
        'minecraft:iron_bars',
        'minecraft:bucket',
        'minecraft:ender_eye',
        'minecraft:bread',
        'minecraft:netherite_ingot',
        'minecraft:bricks',
        'minecraft:clock',
        'minecraft:compass',
        'minecraft:chain'
    ];
    VANILLA_DELETED.forEach(id => e.remove( {id : id} ));

    // -- BUNDLE -- //
    e.shaped('minecraft:bundle', [
        ' S ',
        'L L',
        ' L '
    ],
    {
        S: '#c:strings',
        L: '#c:leather'
    });

    // -- PISTON -- //
    e.shaped('minecraft:piston', [
        'WWW',
        'CIC',
        'CRC'
    ],
    {
        W: '#minecraft:wooden_slabs',
        C: '#minecraft:stone_tool_materials',
        I: '#c:iron_rods',
        R: '#c:redstone_dusts'
    });

    // -- IRON BARS -- //
    e.shaped('16x minecraft:iron_bars', [
        'RRR',
        'RRR'
    ],
    {
        R: '#c:iron_rods'
    });

    // -- BUCKET -- //
    e.shaped('minecraft:bucket', [
        'P P',
        ' P '
    ],
    {
        P: '#c:iron_plates'
    });

    // -- CLOCK -- //
    e.shaped('minecraft:clock', [
        ' R ',
        'RGR',
        ' R '
    ],
    {
        R: 'minecraft:redstone',
        G: 'modern_industrialization:gold_ring'
    });

    // -- COMPASS -- //
    e.shaped('minecraft:compass', [
        ' R ',
        'ROR',
        ' R '
    ],
    {
        R: 'minecraft:redstone',
        O: 'modern_industrialization:iron_ring'
    });
    
    // -- CHAINS -- //
    e.shaped('8x minecraft:chain', [
        'O',
        'O',
        'O'
    ], 
    {
        O: 'modern_industrialization:iron_ring'
    });
})