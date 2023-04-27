ServerEvents.recipes(e => {
    // -- REMOVED RECIPES -- //
    const KIBE_DELETED_ITEMS = [
        'kibe:glider_left_wing',
        'kibe:glider_right_wing',
        'kibe:regular_conveyor_belt',
        'kibe:fast_conveyor_belt',
        'kibe:express_conveyor_belt',
        'kibe:magnet',
        'kibe:escape_rope',
        'kibe:cobblestone_generator_mk2',
        'kibe:cobblestone_generator_mk3',
        'kibe:cobblestone_generator_mk4',
        'kibe:cobblestone_generator_mk5',
        'kibe:basalt_generator_mk2',
        'kibe:basalt_generator_mk3',
        'kibe:basalt_generator_mk4',
        'kibe:basalt_generator_mk5',
        'kibe:diamond_ring',
        'kibe:magma_ring',
        'kibe:water_ring',
        'kibe:tank',
        'kibe:xp_shower',
        'kibe:xp_drain',
        'kibe:angel_ring'
    ];
    KIBE_DELETED_ITEMS.forEach( id => e.remove( {id: id} ));

    // -- SLIME BOOTS -- // 
    e.replaceOutput( {id: 'kibe:slime_boots'}, 
                    'kibe:slime_boots',
                    Item.of('kibe:slime_boots', '{Unbreakable: 1b}'));

    // -- GLIDER LEFT WING -- //
    e.shaped('kibe:glider_left_wing', [
        ' SL',
        'SLL',
        'LLR'
    ],
    {
        S: '#c:strings',
        L: '#c:leather',
        R: '#c:iron_rods'
    });

    // -- GLIDER RIGHT WING -- //
    e.shaped('kibe:glider_right_wing', [
        'LS ',
        'LLS',
        'RLL'
    ],
    {
        S: '#c:strings',
        L: '#c:leather',
        R: '#c:iron_rods'
    });

    // -- REGULAR CONVEYOR BELT -- //
    e.shaped('8x kibe:regular_conveyor_belt', [
        'YYY',
        'CCC',
        'III'
    ],
    {
        Y: 'minecraft:yellow_dye',
        C: 'modern_industrialization:conveyor',
        I: '#c:iron_plates'
    });

    // -- FAST CONVEYOR BELT -- //
    e.shaped('8x kibe:fast_conveyor_belt', [
        'RRR',
        'CTC',
        'III'
    ],
    {
        R: 'minecraft:red_dye',
        C: 'modern_industrialization:conveyor',
        I: '#c:iron_plates',
        T: 'kibe:regular_conveyor_belt'
    });

    // -- EXPRESS CONVEYOR BELT -- //
    e.shaped('8x kibe:express_conveyor_belt', [
        'UUU',
        'CTC',
        'III'
    ],
    {
        U: 'minecraft:blue_dye',
        C: 'modern_industrialization:conveyor',
        I: '#c:iron_plates',
        T: 'kibe:fast_conveyor_belt'
    });

    // -- MAGNET -- //
    e.shaped('kibe:magnet', [
        'DRR',
        'R  ',
        'DRR'
    ],
    {
        D: 'minecraft:red_dye',
        R: 'modern_industrialization:steel_rod_magnetic'
    });

    // -- ESCAPE ROPE -- //
    e.shaped('kibe:escape_rope', [
        'SS ',
        'SS ',
        'SSH'
    ],
    {
        S: '#c:strings',
        H: 'dustrial_decor:hook'
    });

    // -- COBBLESTONE GENERATOR MK2 -- //
    e.shaped('kibe:cobblestone_generator_mk2', [
        'GCG',
        'CHC',
        'GCG'
    ],
    {
        G: '#c:gold_plates',
        C: 'kibe:cobblestone_generator_mk1',
        H: 'modern_industrialization:basic_machine_hull'
    });

    // -- COBBLESTONE GENERATOR MK3 -- //
    e.shaped('kibe:cobblestone_generator_mk3', [
        'DCD',
        'CHC',
        'DCD'
    ],
    {
        D: '#c:diamond_plates',
        C: 'kibe:cobblestone_generator_mk2',
        H: 'modern_industrialization:advanced_machine_hull'
    });

    // -- COBBLESTONE GENERATOR MK4 -- //
    e.shaped('kibe:cobblestone_generator_mk4', [
        'ECE',
        'CHC',
        'ECE'
    ],
    {
        E: '#c:emerald_plates',
        C: 'kibe:cobblestone_generator_mk3',
        H: 'modern_industrialization:turbo_machine_hull'
    });

    // -- COBBLESTONE GENERATOR MK5 -- //
    e.shaped('kibe:cobblestone_generator_mk5', [
        'NCN',
        'CHC',
        'NCN'
    ],
    {
        N: '#c:netherite_ingots',
        C: 'kibe:cobblestone_generator_mk4',
        H: 'modern_industrialization:highly_advanced_machine_hull'
    });

    // -- BASALT GENERATOR MK2 -- //
    e.shaped('kibe:basalt_generator_mk2', [
        'GCG',
        'CHC',
        'GCG'
    ],
    {
        G: '#c:gold_plates',
        C: 'kibe:basalt_generator_mk1',
        H: 'modern_industrialization:basic_machine_hull'
    });

    // -- BASALT GENERATOR MK3 -- //
    e.shaped('kibe:basalt_generator_mk3', [
        'DCD',
        'CHC',
        'DCD'
    ],
    {
        D: '#c:diamond_plates',
        C: 'kibe:basalt_generator_mk2',
        H: 'modern_industrialization:advanced_machine_hull'
    });

    // -- BASALT GENERATOR MK4 -- //
    e.shaped('kibe:basalt_generator_mk4', [
        'ECE',
        'CHC',
        'ECE'
    ],
    {
        E: '#c:emerald_plates',
        C: 'kibe:basalt_generator_mk3',
        H: 'modern_industrialization:turbo_machine_hull'
    });

    // -- BASALT GENERATOR MK5 -- //
    e.shaped('kibe:basalt_generator_mk5', [
        'NCN',
        'CHC',
        'NCN'
    ],
    {
        N: '#c:netherite_ingots',
        C: 'kibe:basalt_generator_mk4',
        H: 'modern_industrialization:highly_advanced_machine_hull'
    });

    // -- DIAMOND RING -- //
    e.shaped('kibe:diamond_ring', [
        'NDN',
        ' R ',
        'N N'
    ],
    {
        D: 'minecraft:diamond',
        N: 'minecraft:gold_nugget',
        R: 'modern_industrialization:gold_ring'
    });

    // -- MAGMA RING -- //
    e.shaped('kibe:magma_ring', [
        'WOW',
        'CRC',
        'WOW'
    ],
    {
        C: 'minecraft:magma_cream',
        R: 'kibe:diamond_ring',
        W: 'minecraft:nether_wart',
        O: 'minecraft:obsidian'
    });

    // -- WATER RING -- //
    e.shaped('kibe:water_ring', [
        'WLW',
        'PRP',
        'WLW'
    ],
    {
        W: 'minecraft:nether_wart',
        L: 'minecraft:lily_pad',
        P: 'minecraft:pufferfish',
        R: 'kibe:diamond_ring'
    });
});

ServerEvents.tags('item', e => {
    const KIBE_SPIKES = [
        'kibe:stone_spikes',
        'kibe:iron_spikes',
        'kibe:gold_spikes',
        'kibe:diamond_spikes'
    ];
    KIBE_SPIKES.forEach( id => e.add('kubejs:kibe_spikes', id) );

    const KIBE_BELTS = [
        'kibe:regular_conveyor_belt',
        'kibe:fast_conveyor_belt',
        'kibe:express_conveyor_belt'
    ];
    KIBE_BELTS.forEach( id => e.add('kubejs:kibe_belts', id) );

    const KIBE_LASSOS = [
        'kibe:cursed_lasso',
        'kibe:golden_lasso',
        'kibe:diamond_lasso'
    ];
    KIBE_LASSOS.forEach( id => e.add('kubejs:kibe_lassos', id) );

    const KIBE_WITHERPROOF = [
        'kibe:wither_proof_sand',
        'kibe:wither_proof_block',
        'kibe:wither_proof_glass'
    ];
    KIBE_WITHERPROOF.forEach( id => e.add('kubejs:kibe_witherproof', id) );
});