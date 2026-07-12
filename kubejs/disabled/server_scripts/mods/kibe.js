// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:kibe/${id}`;
    let kb = (id) => `kibe:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- REMOVED RECIPES -- //
    const KIBE_DELETED_ITEMS = [
        kb('glider_left_wing'),
        kb('glider_right_wing'),
        kb('regular_conveyor_belt'),
        kb('fast_conveyor_belt'),
        kb('express_conveyor_belt'),
        kb('magnet'),
        kb('escape_rope'),
        kb('cobblestone_generator_mk2'),
        kb('cobblestone_generator_mk3'),
        kb('cobblestone_generator_mk4'),
        kb('cobblestone_generator_mk5'),
        kb('basalt_generator_mk2'),
        kb('basalt_generator_mk3'),
        kb('basalt_generator_mk4'),
        kb('basalt_generator_mk5'),
        kb('diamond_ring'),
        kb('magma_ring'),
        kb('water_ring'),
        kb('tank'),
        kb('xp_shower'),
        kb('xp_drain'),
        kb('angel_ring'),
        kb('big_torch'),
        kb('measuring_tape')
    ];
    KIBE_DELETED_ITEMS.forEach( id => e.remove( {id: id} ));

    // -- SLIME BOOTS -- // 
    e.replaceOutput( {id: kb('slime_boots')}, 
                    kb('slime_boots'),
                    Item.of(kb('slime_boots'), '{Unbreakable: 1b}'));

    // -- MEASURING TAPE -- //
    e.shaped(kb('measuring_tape'), [
        ' L ',
        'LIL',
        ' LY'
    ],
    {
        L: mc('lapis_lazuli'),
        Y: '#c:dye_yellow',
        I: '#c:iron_plates'
    })
    .id(st('measuring_tape'));

    // -- GLIDER LEFT WING -- //
    e.shaped(kb('glider_left_wing'), [
        ' SL',
        'SLL',
        'LLR'
    ],
    {
        S: '#c:strings',
        L: '#c:leather',
        R: '#c:iron_rods'
    })
    .id(st('glider_left_wing'));

    // -- GLIDER RIGHT WING -- //
    e.shaped(kb('glider_right_wing'), [
        'LS ',
        'LLS',
        'RLL'
    ],
    {
        S: '#c:strings',
        L: '#c:leather',
        R: '#c:iron_rods'
    })
    .id(st('glider_right_wing'));

    // -- REGULAR CONVEYOR BELT -- //
    e.shaped('8x ' + kb('regular_conveyor_belt'), [
        'YYY',
        'CCC',
        'III'
    ],
    {
        Y: mc('yellow_dye'),
        C: mi('conveyor'),
        I: '#c:iron_plates'
    })
    .id(st('regular_conveyor_belt'));

    // -- FAST CONVEYOR BELT -- //
    e.shaped('8x ' + kb('fast_conveyor_belt'), [
        'RRR',
        'CTC',
        'III'
    ],
    {
        R: mc('red_dye'),
        C: mi('conveyor'),
        I: '#c:iron_plates',
        T: kb('regular_conveyor_belt')
    })
    .id(st('fast_conveyor_belt'));

    // -- EXPRESS CONVEYOR BELT -- //
    e.shaped('8x ' + kb('express_conveyor_belt'), [
        'UUU',
        'CTC',
        'III'
    ],
    {
        U: mc('blue_dye'),
        C: mi('conveyor'),
        I: '#c:iron_plates',
        T: kb('fast_conveyor_belt')
    })
    .id(st('express_conveyor_belt'));

    // -- ESCAPE ROPE -- //
    e.shaped(kb('escape_rope'), [
        'SS ',
        'SS ',
        'SSH'
    ],
    {
        S: '#c:strings',
        H: 'dustrial_decor:hook'
    })
    .id(st('escape_rope'));

    // -- COBBLESTONE GENERATOR MK2 -- //
    e.shaped(kb('cobblestone_generator_mk2'), [
        'GCG',
        'CHC',
        'GCG'
    ],
    {
        G: '#c:gold_plates',
        C: kb('cobblestone_generator_mk1'),
        H: mi('basic_machine_hull')
    })
    .id(st('cobblestone_generator_mk2'));

    // -- COBBLESTONE GENERATOR MK3 -- //
    e.shaped(kb('cobblestone_generator_mk3'), [
        'DCD',
        'CHC',
        'DCD'
    ],
    {
        D: '#c:diamond_plates',
        C: kb('cobblestone_generator_mk2'),
        H: mi('advanced_machine_hull')
    })
    .id(st('cobblestone_generator_mk3'));

    // -- COBBLESTONE GENERATOR MK4 -- //
    e.shaped(kb('cobblestone_generator_mk4'), [
        'ECE',
        'CHC',
        'ECE'
    ],
    {
        E: '#c:emerald_plates',
        C: kb('cobblestone_generator_mk3'),
        H: mi('turbo_machine_hull')
    })
    .id(st('cobblestone_generator_mk4'));

    // -- COBBLESTONE GENERATOR MK5 -- //
    e.shaped(kb('cobblestone_generator_mk5'), [
        'NCN',
        'CHC',
        'NCN'
    ],
    {
        N: '#c:netherite_ingots',
        C: kb('cobblestone_generator_mk4'),
        H: mi('highly_advanced_machine_hull')
    })
    .id(st('cobblestone_generator_mk5'));

    // -- BASALT GENERATOR MK2 -- //
    e.shaped(kb('basalt_generator_mk2'), [
        'GCG',
        'CHC',
        'GCG'
    ],
    {
        G: '#c:gold_plates',
        C: kb('basalt_generator_mk1'),
        H: mi('basic_machine_hull')
    })
    .id(st('basalt_generator_mk2'));

    // -- BASALT GENERATOR MK3 -- //
    e.shaped(kb('basalt_generator_mk3'), [
        'DCD',
        'CHC',
        'DCD'
    ],
    {
        D: '#c:diamond_plates',
        C: kb('basalt_generator_mk2'),
        H: mi('advanced_machine_hull')
    })
    .id(st('basalt_generator_mk3'));

    // -- BASALT GENERATOR MK4 -- //
    e.shaped(kb('basalt_generator_mk4'), [
        'ECE',
        'CHC',
        'ECE'
    ],
    {
        E: '#c:emerald_plates',
        C: kb('basalt_generator_mk3'),
        H: mi('turbo_machine_hull')
    })
    .id(st('basalt_generator_mk4'));

    // -- BASALT GENERATOR MK5 -- //
    e.shaped(kb('basalt_generator_mk5'), [
        'NCN',
        'CHC',
        'NCN'
    ],
    {
        N: '#c:netherite_ingots',
        C: kb('basalt_generator_mk4'),
        H: mi('highly_advanced_machine_hull')
    })
    .id(st('basalt_generator_mk5'));

    // -- DIAMOND RING -- //
    e.shaped(kb('diamond_ring'), [
        'NDN',
        ' R ',
        'N N'
    ],
    {
        D: mc('diamond'),
        N: mc('gold_nugget'),
        R: mi('gold_ring')
    })
    .id(st('diamond_ring'));

    // -- MAGMA RING -- //
    e.shaped(kb('magma_ring'), [
        'WOW',
        'CRC',
        'WOW'
    ],
    {
        C: mc('magma_cream'),
        R: kb('diamond_ring'),
        W: mc('nether_wart'),
        O: mc('obsidian')
    })
    .id(st('magma_ring'));

    // -- WATER RING -- //
    e.shaped(kb('water_ring'), [
        'WLW',
        'PRP',
        'WLW'
    ],
    {
        W: mc('nether_wart'),
        L: mc('lily_pad'),
        P: mc('pufferfish'),
        R: kb('diamond_ring')
    })
    .id(st('water_ring'));

    // -- BIG TORCH -- //
    e.shaped(kb('big_torch'), [
        'CCC',
        'LSL',
        'LSL'
    ],
    {
        C: mc('coal_block'),
        L: '#minecraft:logs',
        S: mi('steel_large_plate')
    })
    .id(st('big_torch'));
});

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let kb = (id) => `kibe:${id}`;

    const KIBE_SPIKES = [
        kb('stone_spikes'),
        kb('iron_spikes'),
        kb('gold_spikes'),
        kb('diamond_spikes')
    ];
    KIBE_SPIKES.forEach( id => e.add('kubejs:kibe_spikes', id) );

    const KIBE_BELTS = [
        kb('regular_conveyor_belt'),
        kb('fast_conveyor_belt'),
        kb('express_conveyor_belt')
    ];
    KIBE_BELTS.forEach( id => e.add('kubejs:kibe_belts', id) );

    const KIBE_LASSOS = [
        kb('cursed_lasso'),
        kb('golden_lasso'),
        kb('diamond_lasso')
    ];
    KIBE_LASSOS.forEach( id => e.add('kubejs:kibe_lassos', id) );

    const KIBE_WITHERPROOF = [
        kb('wither_proof_sand'),
        kb('wither_proof_block'),
        kb('wither_proof_glass')
    ];
    KIBE_WITHERPROOF.forEach( id => e.add('kubejs:kibe_witherproof', id) );
});