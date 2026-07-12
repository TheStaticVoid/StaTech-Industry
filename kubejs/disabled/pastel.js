// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('item', event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let pa = (id) => `pastel:${id}`;

    event.add('c:tools/pickaxes', pa('bedrock_pickaxe'));
    event.add('c:tools/axes', pa('bedrock_axe'));
    event.add('c:tools/shovels', pa('bedrock_shovel'));

    const POLISHED_GEMSTONE = [
        pa('topaz_storage_block'),
        pa('amethyst_storage_block'),
        pa('citrine_storage_block'),
        pa('onyx_storage_block')
    ];
    POLISHED_GEMSTONE.forEach(id => { event.add('kubejs:polished_gemstones', id) } );

    const POLISHED_BLOCKS = [
        pa('polished_calcite'),
        pa('polished_basalt')
    ];
    POLISHED_BLOCKS.forEach(id => { event.add('kubejs:polished_blocks', id) } );

    const CHISELED_POLISHED_BLOCKS = [
        pa('chiseled_polished_calcite'),
        pa('chiseled_polished_basalt')
    ];
    CHISELED_POLISHED_BLOCKS.forEach(id => { event.add('kubejs:chiseled_polished_blocks', id) } );

    const NOTCHED_POLISHED = [
        pa('notched_polished_calcite'),
        pa('notched_polished_basalt')
    ];
    NOTCHED_POLISHED.forEach(id => { event.add('kubejs:notched_polished_blocks', id) } );

    const POLISHED_PILLARS = [
        pa('polished_calcite_pillar'),
        pa('polished_basalt_pillar')
    ];
    POLISHED_PILLARS.forEach(id => { event.add('kubejs:polished_pillar_blocks', id) } );

    const SHIMMERSTONE_LIGHTS = [
        pa('basalt_shimmerstone_light'),
        pa('calcite_shimmerstone_light'),
        pa('stone_shimmerstone_light'),
        pa('granite_shimmerstone_light'),
        pa('diorite_shimmerstone_light'),
        pa('andesite_shimmerstone_light'),
        pa('deepslate_shimmerstone_light')
    ];
    SHIMMERSTONE_LIGHTS.forEach(id => { event.add('kubejs:shimmerstone_lights', id) } );

    const GEMSTONE_LAMPS = [
        pa('topaz_calcite_lamp'),
        pa('amethyst_calcite_lamp'),
        pa('citrine_calcite_lamp'),
        pa('onyx_calcite_lamp'),
        pa('topaz_basalt_lamp'),
        pa('amethyst_basalt_lamp'),
        pa('citrine_basalt_lamp'),
        pa('onyx_basalt_lamp')
    ];
    GEMSTONE_LAMPS.forEach(id => { event.add('kubejs:gemstone_lamps', id) } );

    const PHANTOM_FRAMES = [
        pa('phantom_frame'),
        pa('glow_phantom_frame')
    ];
    PHANTOM_FRAMES.forEach(id => { event.add('kubejs:phantom_frames', id) } );

    const FUSION_SHRINES = [
        pa('fusion_shrine_basalt'),
        pa('fusion_shrine_calcite')
    ];
    FUSION_SHRINES.forEach(id => { event.add('kubejs:fusion_shrines', id) } );

    const POLISHED_SLABS = [
        pa('polished_calcite_slab'),
        pa('polished_basalt_slab')
    ];
    POLISHED_SLABS.forEach(id => { event.add('kubejs:polished_slabs', id) } );

    const PIGMENT_LAMPS = [
        pa('orange_lamp'),
        pa('magenta_lamp'),
        pa('light_blue_lamp'),
        pa('yellow_lamp'),
        pa('lime_lamp'),
        pa('pink_lamp'),
        pa('cyan_lamp'),
        pa('purple_lamp'),
        pa('blue_lamp'),
        pa('brown_lamp'),
        pa('green_lamp'),
        pa('red_lamp'),
        pa('black_lamp')
    ];
    PIGMENT_LAMPS.forEach(id => { event.add('kubejs:pigment_lamps', id) } );

    const PIGMENT_SPORE_BLOSSOMS = [
        pa('orange_spore_blossom'),
        pa('magenta_spore_blossom'),
        pa('light_blue_spore_blossom'),
        pa('yellow_spore_blossom'),
        pa('lime_spore_blossom'),
        pa('pink_spore_blossom'),
        pa('cyan_spore_blossom'),
        pa('purple_spore_blossom'),
        pa('blue_spore_blossom'),
        pa('brown_spore_blossom'),
        pa('green_spore_blossom'),
        pa('red_spore_blossom'),
        pa('black_spore_blossom')
    ];
    PIGMENT_SPORE_BLOSSOMS.forEach(id => { event.add('kubejs:pigment_spore_blossoms', id) } );

    const GLOWBLOCKS = [
        pa('orange_glowblock'),
        pa('magenta_glowblock'),
        pa('light_blue_glowblock'),
        pa('yellow_glowblock'),
        pa('lime_glowblock'),
        pa('pink_glowblock'),
        pa('cyan_glowblock'),
        pa('purple_glowblock'),
        pa('blue_glowblock'),
        pa('brown_glowblock'),
        pa('green_glowblock'),
        pa('red_glowblock'),
        pa('black_glowblock')
    ];
    GLOWBLOCKS.forEach(id => { event.add('kubejs:glowblocks', id) } );

    const CREST_BLOCKS = [
        pa('polished_calcite_crest'),
        pa('polished_basalt_crest')
    ];
    CREST_BLOCKS.forEach(id => { event.add('kubejs:polished_crest_blocks', id) } );

    const GEMSTONE_CHISELED_BLOCKS = [
        pa('topaz_chiseled_basalt'),
        pa('topaz_chiseled_calcite'),
        pa('amethyst_chiseled_basalt'),
        pa('amethyst_chiseled_calcite'),
        pa('citrine_chiseled_basalt'),
        pa('citrine_chiseled_calcite'),
        pa('onyx_chiseled_basalt'),
        pa('onyx_chiseled_calcite')
    ];
    GEMSTONE_CHISELED_BLOCKS.forEach(id => { event.add('kubejs:gemstone_chiseled_blocks', id) } );

    const GEMSTONE_CHIMES = [
        pa('topaz_chime'),
        pa('amethyst_chime'),
        pa('citrine_chime'),
        pa('onyx_chime')
    ];
    GEMSTONE_CHIMES.forEach(id => { event.add('kubejs:gemstone_chimes', id) } );

    const ITEM_BOWLS = [
        pa('item_bowl_basalt'),
        pa('item_bowl_calcite')
    ];
    ITEM_BOWLS.forEach(id => { event.add('kubejs:pastel_item_bowls', id) } );

    const SUGAR_STICK = [
        pa('sugar_stick'),
        pa('topaz_sugar_stick'),
        pa('amethyst_sugar_stick'),
        pa('citrine_sugar_stick'),
        pa('onyx_sugar_stick'),
        pa('moonstone_sugar_stick')
    ];
    SUGAR_STICK.forEach(id => { event.add('kubejs:sugar_sticks', id) } );
});

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:pastel/${id}`;

    // -- PASTEL REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        pa('pedestal/tier3/bottle_of_failing')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- BOTTLE OF FAILING -- //
    event.custom({
        type: pa('pedestal'),
        time: 800,
        tier: 'advanced',
        colors: {
            "pastel:cyan": 1,
            "pastel:magenta": 1,
            "pastel:yellow": 1,
            "pastel:black": 1,
            "pastel:white": 0
        },
        experience: 2.0,
        pattern: [
            'FSF',
            'EBE',
            'FSF'
        ],
        key: {
            S: { item: pa('stratine_fragments') },
            F: { item: mc('fermented_spider_eye') },
            E: { item: mc('ender_eye') },
            B: { item: mc('experience_bottle') }
        },
        result: {
            id: pa('bottle_of_failing'),
            count: 1
        },
        required_advancement: pa('unlocks/items/bottle_of_failing')
    });

    // -- ANGEL RING -- //
    event.custom({
        type: pa('pedestal'),
        time: 800,
        tier: 'complex',
        colors: {
            "pastel:cyan": 32,
            "pastel:magenta": 32,
            "pastel:yellow": 32,
            "pastel:black": 32,
            "pastel:white": 32
        },
        experience: 100.0,
        pattern: [
            'SAS',
            'FRF',
            'SMS'
        ],
        key: {
            S: { item: pa('star_fragment') },
            A: { item: pa('aether_vestiges') },
            F: { item: pa('resplendent_feather') },
            M: { item: pa('moonstone_core') },
            R: { item: mi('gold_ring') }
        },
        result: {
            id: 'angelring:angel_ring',
            count: 1
        },
        required_advancement: pa('endgame/finish_progression')
    });

    // -- MAGIC DIAMOND -- // endgame/finish_progression
/*     event.custom({
        id: st('magic_diamond'),
        type: pa('pedestal'),
        time: 600,
        tier: 'simple',
        cyan: 8,
        magenta: 8,
        yellow: 8,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            'QSA',
            'CDC',
            'TSQ'
        ],
        key: {
            Q: { item: pa('quitoxic_powder') },
            S: { item: pa('shimmerstone_gem') },
            A: { item: pa('amethyst_powder') },
            T: { item: pa('topaz_powder') },
            C: { item: pa('citrine_powder') },
            D: { item: 'minecraft:diamond' }
        },
        result: {
            id: 'kubejs:magic_diamond',
            count: 1,
        },
        required_advancement: [
            pa('collect_quitoxic_reeds'),
            pa('collect_shimmerstone')
        ]
    }); */

    // // -- QUITOXIC REEDS -- //
    // event.custom({
    //     id: st('quitoxic_reeds_from_coins'),
    //     type: pa('pedestal'),
    //     time: 200,
    //     tier: 'simple',        
    //     colors: {
    //         "pastel:cyan": 0,
    //         "pastel:magenta": 0,
    //         "pastel:yellow": 0,
    //         "pastel:black": 0,
    //         "pastel:white": 0
    //     },
    //     experience: 10.0,
    //     pattern: [
    //         '   ',
    //         ' C ',
    //         '   '
    //     ],
    //     key: {
    //         C: { item: kj('coin_rare') }
    //     },
    //     result: {
    //         id: pa('quitoxic_reeds'),
    //         count: 3
    //     },
    //     required_advancement: [
    //         pa('collect_quitoxic_reeds')
    //     ]
    // });

    /* event.stonecutting(pa('amethyst_storage_block'), bl('polished_amethyst')); */
});

// Block tagging provided by kevintok
ServerEvents.tags('block', event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let pa = (id) => `pastel:${id}`;

    event.add('c:lapis_ores', pa('blackslag_lapis_ore'))
});