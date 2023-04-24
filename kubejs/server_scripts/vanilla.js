ServerEvents.recipes(e => {

    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;

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
    });

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
    e.shaped(mc('bucket'), [
        'P P',
        ' P '
    ],
    {
        P: '#c:iron_plates'
    });

    // -- BUCKET ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped(mc('bucket'), [ 'P P', ' P '], { P: `#c:${id}_plates` });
    });

    // -- HOPPER ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped(mc('hopper'), [ 'I I', 'ICI', ' I '], { I: `#c:${id}_ingots`, C: '#c:chests' });
    });

    // -- DETECTOR RAIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped('6x ' + mc('detector_rail'), [ 'I I', 'IPI', 'IRI'], {I: `#c:${id}_ingots`, P: mc('stone_pressure_plate'), R: '#c:redstone_dusts' });
    });

    // -- ACTIVATOR RAIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped('6x ' + mc('activator_rail'), ['ISI', 'IRI', 'ISI'], { I: `#c:${id}_ingots`, S: '#c:wood_sticks', R: mc('redstone_torch') });
    });

    // -- RAIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped('16x ' + mc('rail'), ['I I', 'ISI', 'I I'], { I: `#c:${id}_ingots`, S: '#c:wood_sticks' });
    });

    // -- CAULDRON ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped(mc('cauldron'), [ 'I I', 'I I', 'III'], { I: `#c:${id}_ingots`});
    });

    // -- ANVIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped(mc('anvil'), [ 'BBB', ' I ', 'III'], { B: `#c:${id}_blocks`, I: `#c:${id}_ingots` });
    });

    // -- MINECART ALT METALS -- //
    ALT_METALS.forEach(id => {
        e.shaped(mc('minecart'), ['I I', 'III'], { I: `#c:${id}_ingots` });
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
    });

    // -- COMPASS -- //
    e.shaped(mc('compass'), [
        ' R ',
        'ROR',
        ' R '
    ],
    {
        R: mc('redstone'),
        O: mi('iron_ring')
    });
    
    // -- CHAINS -- //
    e.shaped('8x minecraft:chain', [
        'O',
        'O',
        'O'
    ], 
    {
        O: mi('iron_ring')
    });
})