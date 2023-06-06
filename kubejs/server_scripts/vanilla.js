ServerEvents.recipes(e => {

    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let st = (id) => `statech:minecraft/${id}`;

    // -- REMOVED RECIPES -- //
    const VANILLA_DELETED = [
        mc('piston'),
        mc('paper'),
        mc('iron_bars'),
        mc('bucket'),
        mc('ender_eye'),
        mc('bread'),
        mc('netherite_ingot'),
        mc('bricks'),
        mc('clock'),
        mc('compass'),
        mc('chain')
    ];
    VANILLA_DELETED.forEach(id => e.remove( {id : id} ));

    const ALT_METALS = [
        'lead',
        'silver',
        'tin',
        'nickel'
    ];

    // -- BUNDLE -- //
    e.shaped(mc('bundle'), [
        ' S ',
        'L L',
        ' L '
    ],
    {
        S: '#c:strings',
        L: '#c:leather'
    })
    .id(st('bundle'));

    // -- PISTON -- //
    e.shaped(mc('piston'), [
        'WWW',
        'CIC',
        'CRC'
    ],
    {
        W: '#minecraft:wooden_slabs',
        C: '#minecraft:stone_tool_materials',
        I: '#c:iron_rods',
        R: '#c:redstone_dusts'
    })
    .id(st('piston'));

    // -- IRON BARS -- //
    e.shaped('16x minecraft:iron_bars', [
        'RRR',
        'RRR'
    ],
    {
        R: '#c:iron_rods'
    })
    .id(st('iron_bars'));

    // -- BUCKET -- //
    e.shaped(mc('bucket'), [
        'P P',
        ' P '
    ],
    {
        P: '#c:iron_plates'
    })
    .id(st('bucket'));

    e.shaped('16x ' + mc('stick'), [
        'L',
        'L'
    ],
    {
        L: '#minecraft:logs'
    })
    .id(st('sticks_from_log'));

    // -- BUCKET ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped(mc('bucket'), [ 'P P', ' P '], { P: `#c:${id}_plates` }).id(st(`bucket_${id}`));
    });

    // -- HOPPER ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped(mc('hopper'), [ 'I I', 'ICI', ' I '], { I: `#c:${id}_ingots`, C: '#c:wooden_chests' }).id(st(`hopper_${id}`));
    });

    // -- DETECTOR RAIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped('6x ' + mc('detector_rail'), [ 'I I', 'IPI', 'IRI'], {I: `#c:${id}_ingots`, P: mc('stone_pressure_plate'), R: '#c:redstone_dusts' }).id(st(`detector_rail_${id}`));
    });

    // -- ACTIVATOR RAIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped('6x ' + mc('activator_rail'), ['ISI', 'IRI', 'ISI'], { I: `#c:${id}_ingots`, S: '#c:wood_sticks', R: mc('redstone_torch') }).id(st(`activator_rail_${id}`));
    });

    // -- RAIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped('16x ' + mc('rail'), ['I I', 'ISI', 'I I'], { I: `#c:${id}_ingots`, S: '#c:wood_sticks' }).id(st(`rail_${id}`));
    });

    // -- CAULDRON ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped(mc('cauldron'), [ 'I I', 'I I', 'III'], { I: `#c:${id}_ingots`}).id(st(`cauldron_${id}`));
    });

    // -- ANVIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped(mc('anvil'), [ 'BBB', ' I ', 'III'], { B: `#c:${id}_blocks`, I: `#c:${id}_ingots` }).id(st(`anvil_${id}`));
    });

    // -- MINECART ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped(mc('minecart'), ['I I', 'III'], { I: `#c:${id}_ingots` }).id(st(`minecart_${id}`));
    });

    // -- CLOCK -- //
    e.shaped(mc('clock'), [
        ' R ',
        'RGR',
        ' R '
    ],
    {
        R: mc('redstone'),
        G: mi('gold_ring')
    })
    .id(st('clock'));

    // -- COMPASS -- //
    e.shaped(mc('compass'), [
        ' R ',
        'ROR',
        ' R '
    ],
    {
        R: mc('redstone'),
        O: mi('iron_ring')
    })
    .id(st('compass'));
    
    // -- CHAINS -- //
    e.shaped('8x minecraft:chain', [
        'O',
        'O',
        'O'
    ], 
    {
        O: mi('iron_ring')
    })
    .id(st('chain'));
});

ServerEvents.tags('item', e => {
    let mc = (id) => `minecraft:${id}`;
    const HORSE_ARMORS = [
        mc('leather_horse_armor'),
        mc('iron_horse_armor'),
        mc('golden_horse_armor'),
        mc('diamond_horse_armor')
    ];
    HORSE_ARMORS.forEach(id => { e.add('kubejs:horse_armors', id) } );

    e.remove('c:copper_blocks', mc('cut_copper'));
});