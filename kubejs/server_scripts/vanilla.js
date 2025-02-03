// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    let VANILLA_REMOVED_RECIPES = [
        mc('piston'),
        mc('iron_bars'),
        mc('bucket'),
        mc('clock'),
        mc('compass'),
        mc('chains')
    ];
    VANILLA_REMOVED_RECIPES.forEach(id => e.remove({ id: id }) );

    // -- PISTON -- //
    e.shaped(mc('piston'), [
        'WWW',
        'CIC',
        'CRC'
    ],
    {
        W: '#' + mc('wooden_slabs'),
        C: '#c:cobblestones',
        I: '#c:rods/iron',
        R: '#c:dusts/redstone'
    }).id(st('piston'));

    // -- IRON BARS -- //
    e.shaped('16x ' + mc('iron_bars'), [
        'RRR',
        'RRR'
    ],
    {
        R: '#c:rods/iron'
    }).id(st('iron_bars'));

    // -- BUCKET -- //
    e.shaped(mc('bucket'), [
        'P P',
        ' P '
    ], 
    {
        P: '#c:plates/iron'
    }).id(st('bucket'));

    // 16x STICKS FROM LOGS
    e.shaped('16x ' + mc('stick'), [
        'L',
        'L'
    ], 
    {
        L: '#' + mc('logs')
    }).id(st('sticks_from_log'));

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
    e.shaped('8x ' + mc('chain'), [
        'O',
        'O',
        'O'
    ], 
    {
        O: mi('iron_ring')
    })
    .id(st('chain'));

    e.shaped(mc('amethyst_block'), [
        'AAA',
        'AAA',
        'AAA'
    ],
    {
        A: mc('amethyst_shard')
    })
    .id(st('amethyst_block'));

    let ARMOR_MATERIALS = [
        'iron',
        'gold',
        'diamond'
    ];

    let ARMOR_PIECES = [
        'helmet',
        'chestplate',
        'leggings',
        'boots'
    ];

    ARMOR_MATERIALS.forEach(material => {
        let armorMaterial;
        if (material == 'gold')
            armorMaterial = 'golden';
        else
            armorMaterial = material;

        ARMOR_PIECES.forEach(piece => {
            let combined = mc(`${armorMaterial}_${piece}`);
            e.remove({ id: combined });
        });

        // -- HELMET -- //
        e.shaped(mc(`${armorMaterial}_helmet`), [
            'PPP',
            'P P'
        ],
        {
            P: `#c:plates/${material}`
        }).id(st(`${armorMaterial}_helmet`));

        // -- CHESTPLATE -- //
        e.shaped(mc(`${armorMaterial}_chestplate`), [
            'P P',
            'PPP',
            'PPP'
        ],
        {
            P: `#c:plates/${material}`
        }).id(st(`${armorMaterial}_chestplate`));

        // -- LEGGINGS -- //
        e.shaped(mc(`${armorMaterial}_leggings`), [
            'PPP',
            'P P',
            'P P'
        ],
        {
            P: `#c:plates/${material}`
        }).id(st(`${armorMaterial}_leggings`));

        // -- BOOTS -- //
        e.shaped(mc(`${armorMaterial}_boots`), [
            'P P',
            'P P'
        ],
        {
            P: `#c:plates/${material}`
        }).id(st(`${armorMaterial}_boots`));
    });


});