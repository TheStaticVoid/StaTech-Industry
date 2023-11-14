// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('item', event => {

    event.add('c:tools/pickaxes', sp('bedrock_pickaxe'));
    event.add('c:tools/axes', sp('bedrock_axe'));
    event.add('c:tools/shovels', sp('bedrock_shovel'));

    const POLISHED_GEMSTONE = [
        sp('topaz_storage_block'),
        sp('amethyst_storage_block'),
        sp('citrine_storage_block'),
        sp('onyx_storage_block')
    ];
    POLISHED_GEMSTONE.forEach(id => { event.add(kj('polished_gemstones'), id) } );

    const POLISHED_BLOCKS = [
        sp('polished_calcite'),
        sp('polished_basalt')
    ];
    POLISHED_BLOCKS.forEach(id => { event.add(kj('polished_blocks'), id) } );

    const CHISELED_POLISHED_BLOCKS = [
        sp('chiseled_polished_calcite'),
        sp('chiseled_polished_basalt')
    ];
    CHISELED_POLISHED_BLOCKS.forEach(id => { event.add(kj('chiseled_polished_blocks'), id) } );

    const NOTCHED_POLISHED = [
        sp('notched_polished_calcite'),
        sp('notched_polished_basalt')
    ];
    NOTCHED_POLISHED.forEach(id => { event.add(kj('notched_polished_blocks'), id) } );

    const POLISHED_PILLARS = [
        sp('polished_calcite_pillar'),
        sp('polished_basalt_pillar')
    ];
    POLISHED_PILLARS.forEach(id => { event.add(kj('polished_pillar_blocks'), id) } );

    const SHIMMERSTONE_LIGHTS = [
        sp('basalt_shimmerstone_light'),
        sp('calcite_shimmerstone_light'),
        sp('stone_shimmerstone_light'),
        sp('granite_shimmerstone_light'),
        sp('diorite_shimmerstone_light'),
        sp('andesite_shimmerstone_light'),
        sp('deepslate_shimmerstone_light')
    ];
    SHIMMERSTONE_LIGHTS.forEach(id => { event.add(kj('shimmerstone_lights'), id) } );

    const GEMSTONE_LAMPS = [
        sp('topaz_calcite_lamp'),
        sp('amethyst_calcite_lamp'),
        sp('citrine_calcite_lamp'),
        sp('onyx_calcite_lamp'),
        sp('topaz_basalt_lamp'),
        sp('amethyst_basalt_lamp'),
        sp('citrine_basalt_lamp'),
        sp('onyx_basalt_lamp')
    ];
    GEMSTONE_LAMPS.forEach(id => { event.add(kj('gemstone_lamps'), id) } );

    const PHANTOM_FRAMES = [
        sp('phantom_frame'),
        sp('glow_phantom_frame')
    ];
    PHANTOM_FRAMES.forEach(id => { event.add(kj('phantom_frames'), id) } );

    const FUSION_SHRINES = [
        sp('fusion_shrine_basalt'),
        sp('fusion_shrine_calcite')
    ];
    FUSION_SHRINES.forEach(id => { event.add(kj('fusion_shrines'), id) } );

    const POLISHED_SLABS = [
        sp('polished_calcite_slab'),
        sp('polished_basalt_slab')
    ];
    POLISHED_SLABS.forEach(id => { event.add(kj('polished_slabs'), id) } );

    const PIGMENT_LAMPS = [
        sp('orange_lamp'),
        sp('magenta_lamp'),
        sp('light_blue_lamp'),
        sp('yellow_lamp'),
        sp('lime_lamp'),
        sp('pink_lamp'),
        sp('cyan_lamp'),
        sp('purple_lamp'),
        sp('blue_lamp'),
        sp('brown_lamp'),
        sp('green_lamp'),
        sp('red_lamp'),
        sp('black_lamp')
    ];
    PIGMENT_LAMPS.forEach(id => { event.add(kj('pigment_lamps'), id) } );

    const PIGMENT_SPORE_BLOSSOMS = [
        sp('orange_spore_blossom'),
        sp('magenta_spore_blossom'),
        sp('light_blue_spore_blossom'),
        sp('yellow_spore_blossom'),
        sp('lime_spore_blossom'),
        sp('pink_spore_blossom'),
        sp('cyan_spore_blossom'),
        sp('purple_spore_blossom'),
        sp('blue_spore_blossom'),
        sp('brown_spore_blossom'),
        sp('green_spore_blossom'),
        sp('red_spore_blossom'),
        sp('black_spore_blossom')
    ];
    PIGMENT_SPORE_BLOSSOMS.forEach(id => { event.add(kj('pigment_spore_blossoms'), id) } );

    const GLOWBLOCKS = [
        sp('orange_glowblock'),
        sp('magenta_glowblock'),
        sp('light_blue_glowblock'),
        sp('yellow_glowblock'),
        sp('lime_glowblock'),
        sp('pink_glowblock'),
        sp('cyan_glowblock'),
        sp('purple_glowblock'),
        sp('blue_glowblock'),
        sp('brown_glowblock'),
        sp('green_glowblock'),
        sp('red_glowblock'),
        sp('black_glowblock')
    ];
    GLOWBLOCKS.forEach(id => { event.add(kj('glowblocks'), id) } );

    const CREST_BLOCKS = [
        sp('polished_calcite_crest'),
        sp('polished_basalt_crest')
    ];
    CREST_BLOCKS.forEach(id => { event.add(kj('polished_crest_blocks'), id) } );

    const GEMSTONE_CHISELED_BLOCKS = [
        sp('topaz_chiseled_basalt'),
        sp('topaz_chiseled_calcite'),
        sp('amethyst_chiseled_basalt'),
        sp('amethyst_chiseled_calcite'),
        sp('citrine_chiseled_basalt'),
        sp('citrine_chiseled_calcite'),
        sp('onyx_chiseled_basalt'),
        sp('onyx_chiseled_calcite')
    ];
    GEMSTONE_CHISELED_BLOCKS.forEach(id => { event.add(kj('gemstone_chiseled_blocks'), id) } );

    const GEMSTONE_CHIMES = [
        sp('topaz_chime'),
        sp('amethyst_chime'),
        sp('citrine_chime'),
        sp('onyx_chime')
    ];
    GEMSTONE_CHIMES.forEach(id => { event.add(kj('gemstone_chimes'), id) } );

    const ITEM_BOWLS = [
        sp('item_bowl_basalt'),
        sp('item_bowl_calcite')
    ];
    ITEM_BOWLS.forEach(id => { event.add(kj('spectrum_item_bowls'), id) } );

    const SUGAR_STICK = [
        sp('sugar_stick'),
        sp('topaz_sugar_stick'),
        sp('amethyst_sugar_stick'),
        sp('citrine_sugar_stick'),
        sp('onyx_sugar_stick'),
        sp('moonstone_sugar_stick')
    ];
    SUGAR_STICK.forEach(id => { event.add(kj('sugar_sticks'), id) } );
});

ServerEvents.recipes(event => {
    let st = (id) => `statech:spectrum/${id}`;

    // -- CENTRIFUGE REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        sp('pedestal/tier3/bottle_of_failing')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- BOTTLE OF FAILING -- //
    event.custom({
        type: sp('pedestal'),
        time: 800,
        tier: 'advanced',
        cyan: 1,
        magenta: 1,
        yellow: 1,
        black: 1,
        white: 0,
        experience: 2.0,
        pattern: [
            'FSF',
            'EBE',
            'FSF'
        ],
        key: {
            S: { item: sp('stratine_fragments') },
            F: { item: mc('fermented_spider_eye') },
            E: { item: mc('ender_eye') },
            B: { item: mc('experience_bottle') }
        },
        result: {
            item: sp('bottle_of_failing'),
            count: 1
        },
        required_advancement: sp('progression/unlock_bottle_of_failing')
    });

    // -- QUITOXIC REEDS -- //
    event.custom({
        id: st('quitoxic_reeds_from_coins'),
        type: sp('pedestal'),
        time: 200,
        tier: 'simple',
        cyan: 0,
        magenta: 0,
        yellow: 0,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            '   ',
            ' C ',
            '   '
        ],
        key: {
            C: { item: kj('coin_rare') }
        },
        result: {
            item: sp('quitoxic_reeds'),
            count: 3
        },
        required_advancement: [
            sp('collect_quitoxic_reeds')
        ]
    });

    event.stonecutting(sp('amethyst_storage_block'), bl('polished_amethyst'));
});

// Block tagging provided by kevintok
ServerEvents.tags('block', event => {
    event.add('c:lapis_ores', sp('blackslag_lapis_ore'))
});