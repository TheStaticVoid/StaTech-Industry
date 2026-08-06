// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('item', (event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let sp = (id) => `spectrum:${id}`;

    event.add('c:tools/pickaxes', sp('bedrock_pickaxe'));
    event.add('c:tools/axes', sp('bedrock_axe'));
    event.add('c:tools/shovels', sp('bedrock_shovel'));

    const POLISHED_GEMSTONE = [
        sp('polished_topaz'),
        sp('polished_amethyst'),
        sp('polished_citrine'),
        sp('polished_onyx'),
    ];
    POLISHED_GEMSTONE.forEach((id) => {
        event.add('kubejs:polished_gemstones', id);
    });

    const POLISHED_BLOCKS = [sp('polished_calcite'), sp('polished_basalt')];
    POLISHED_BLOCKS.forEach((id) => {
        event.add('kubejs:polished_blocks', id);
    });

    const CHISELED_POLISHED_BLOCKS = [
        sp('chiseled_polished_calcite'),
        sp('chiseled_polished_basalt'),
    ];
    CHISELED_POLISHED_BLOCKS.forEach((id) => {
        event.add('kubejs:chiseled_polished_blocks', id);
    });

    const NOTCHED_POLISHED = [
        sp('notched_polished_calcite'),
        sp('notched_polished_basalt'),
    ];
    NOTCHED_POLISHED.forEach((id) => {
        event.add('kubejs:notched_polished_blocks', id);
    });

    const POLISHED_PILLARS = [
        sp('polished_calcite_pillar'),
        sp('polished_basalt_pillar'),
    ];
    POLISHED_PILLARS.forEach((id) => {
        event.add('kubejs:polished_pillar_blocks', id);
    });

    const SHIMMERSTONE_LIGHTS = [
        sp('basalt_shimmerstone_light'),
        sp('calcite_shimmerstone_light'),
        sp('stone_shimmerstone_light'),
        sp('granite_shimmerstone_light'),
        sp('diorite_shimmerstone_light'),
        sp('andesite_shimmerstone_light'),
        sp('deepslate_shimmerstone_light'),
    ];
    SHIMMERSTONE_LIGHTS.forEach((id) => {
        event.add('kubejs:shimmerstone_lights', id);
    });

    const GEMSTONE_LAMPS = [
        sp('topaz_calcite_light'),
        sp('amethyst_calcite_light'),
        sp('citrine_calcite_light'),
        sp('onyx_calcite_light'),
        sp('topaz_basalt_light'),
        sp('amethyst_basalt_light'),
        sp('citrine_basalt_light'),
        sp('onyx_basalt_light'),
    ];
    GEMSTONE_LAMPS.forEach((id) => {
        event.add('kubejs:gemstone_lamps', id);
    });

    const PHANTOM_FRAMES = [sp('phantom_frame'), sp('glow_phantom_frame')];
    PHANTOM_FRAMES.forEach((id) => {
        event.add('kubejs:phantom_frames', id);
    });

    const FUSION_SHRINES = [
        sp('fusion_shrine_basalt'),
        sp('fusion_shrine_calcite'),
    ];
    FUSION_SHRINES.forEach((id) => {
        event.add('kubejs:fusion_shrines', id);
    });

    const POLISHED_SLABS = [
        sp('polished_calcite_slab'),
        sp('polished_basalt_slab'),
    ];
    POLISHED_SLABS.forEach((id) => {
        event.add('kubejs:polished_slabs', id);
    });

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
        sp('black_lamp'),
        sp('light_gray_lamp'),
        sp('white_lamp'),
        sp('gray_lamp'),
    ];
    PIGMENT_LAMPS.forEach((id) => {
        event.add('kubejs:pigment_lamps', id);
    });

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
        sp('black_spore_blossom'),
        sp('white_spore_blossom'),
        sp('light_gray_spore_blossom'),
        sp('gray_spore_blossom'),
    ];
    PIGMENT_SPORE_BLOSSOMS.forEach((id) => {
        event.add('kubejs:pigment_spore_blossoms', id);
    });

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
        sp('black_glowblock'),
        sp('white_glowblock'),
        sp('light_gray_glowblock'),
        sp('gray_glowblock'),
    ];
    GLOWBLOCKS.forEach((id) => {
        event.add('kubejs:glowblocks', id);
    });

    const CREST_BLOCKS = [
        sp('polished_calcite_crest'),
        sp('polished_basalt_crest'),
    ];
    CREST_BLOCKS.forEach((id) => {
        event.add('kubejs:polished_crest_blocks', id);
    });

    const GEMSTONE_CHISELED_BLOCKS = [
        sp('topaz_chiseled_basalt'),
        sp('topaz_chiseled_calcite'),
        sp('amethyst_chiseled_basalt'),
        sp('amethyst_chiseled_calcite'),
        sp('citrine_chiseled_basalt'),
        sp('citrine_chiseled_calcite'),
        sp('onyx_chiseled_basalt'),
        sp('onyx_chiseled_calcite'),
    ];
    GEMSTONE_CHISELED_BLOCKS.forEach((id) => {
        event.add('kubejs:gemstone_chiseled_blocks', id);
    });

    const ONYX_CHISELED_BLOCKS = [
        sp('onyx_chiseled_basalt'),
        sp('onyx_chiseled_calcite'),
    ];
    ONYX_CHISELED_BLOCKS.forEach((id) => {
        event.add('kubejs:onyx_chiseled_blocks', id);
    });

    const MOONSTONE_CHISELED_BLOCKS = [
        sp('moonstone_chiseled_basalt'),
        sp('moonstone_chiseled_calcite'),
    ];
    MOONSTONE_CHISELED_BLOCKS.forEach((id) => {
        event.add('kubejs:moonstone_chiseled_blocks', id);
    });

    const GEMSTONE_CHIMES = [
        sp('topaz_chime'),
        sp('amethyst_chime'),
        sp('citrine_chime'),
        sp('onyx_chime'),
    ];
    GEMSTONE_CHIMES.forEach((id) => {
        event.add('kubejs:gemstone_chimes', id);
    });

    const ITEM_BOWLS = [sp('item_bowl_basalt'), sp('item_bowl_calcite')];
    ITEM_BOWLS.forEach((id) => {
        event.add('kubejs:spectrum_item_bowls', id);
    });

    const SUGAR_STICK = [
        sp('sugar_stick'),
        sp('topaz_sugar_stick'),
        sp('amethyst_sugar_stick'),
        sp('citrine_sugar_stick'),
        sp('onyx_sugar_stick'),
        sp('moonstone_sugar_stick'),
    ];
    SUGAR_STICK.forEach((id) => {
        event.add('kubejs:sugar_sticks', id);
    });
});

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:spectrum/${id}`;
    let sp = (id) => `spectrum:${id}`;

    // -- SPECTRUM REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        sp('pedestal/tier3/bottle_of_failing'),
        ar('eternal_steak_furnace'),
        ar('eternal_steak_smoker'),
        ar('eternal_steak_campfire'),
        sp('fusion_shrine/vanilla/netherite_ingot'),
    ];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -----------------------//
    // ---- CINDERHEARTH ---- //
    // -----------------------//

    // -- ETERNAL STEAK -- //
    cinderhearth(event, st('eternal_steak'), 800, 1.0, ar('everlasting_beef'), [
        { id: ar('eternal_steak'), count: 1 },
    ]);

    // ------------------------//
    // ---- FUSION SHRINE ---- //
    // ------------------------//

    // -- ENDER EYE -- //
    fusion_shrine(
        event,
        st('early_ender_eye'),
        1200,
        30,
        [
            { item: mc('ender_pearl'), count: 1 },
            { item: sp('onyx_powder'), count: 32 },
            { item: sp('purple_pigment'), count: 32 },
        ],
        {
            id: mc('ender_eye'),
        },
        { fluid: ei('blazing_essence') },
        [
            {
                type: 'time_of_day',
                time: 'noon',
            },
        ],
        'nothing',
        [
            'visual_explosions_on_shrine',
            'nothing',
            'visual_explosions_on_shrine',
        ],
        'legendary_tool_craft',
        sp('create_onyx_shard')
    );

    // -- EVERLASTING BEEF -- //
    fusion_shrine(
        event,
        st('everlasting_beef'),
        1200,
        30,
        [
            { item: mc('beef'), count: 64 },
            { item: mc('beef'), count: 64 },
            { item: fd('shepherds_pie_block'), count: 1 },
            { item: mc('golden_apple'), count: 4 },
            { item: mc('golden_carrot'), count: 32 },
            { item: sp('shimmerstone_block'), count: 8 },
        ],
        {
            id: ar('everlasting_beef'),
        },
        { fluid: ei('blazing_essence') },
        [
            {
                type: 'time_of_day',
                time: 'noon',
            },
        ],
        'nothing',
        [
            'visual_explosions_on_shrine',
            'nothing',
            'visual_explosions_on_shrine',
        ],
        'legendary_tool_craft',
        sp('build_fusion_shrine')
    );

    // -------------------//
    // ---- PEDESTAL ---- //
    // -------------------//

    // -- BOTTLE OF FAILING -- //
    pedestal(
        event,
        st('bottle_of_failing'),
        800,
        'advanced',
        {
            'spectrum:cyan': 1,
            'spectrum:magenta': 1,
            'spectrum:yellow': 1,
            'spectrum:black': 1,
            'spectrum:white': 0,
        },
        2.0,
        ['FSF', 'EBE', 'FSF'],
        {
            S: { item: sp('stratine_fragments') },
            F: { item: mc('fermented_spider_eye') },
            E: { item: mc('ender_eye') },
            B: { item: mc('experience_bottle') },
        },
        { id: sp('bottle_of_failing'), count: 1 },
        sp('unlocks/items/bottle_of_failing')
    );

    // -- ANGEL RING -- //
    pedestal(
        event,
        st('angel_ring'),
        800,
        'complex',
        {
            'spectrum:cyan': 32,
            'spectrum:magenta': 32,
            'spectrum:yellow': 32,
            'spectrum:black': 32,
            'spectrum:white': 32,
        },
        100,
        ['SAS', 'FRF', 'SMS'],
        {
            S: { item: sp('star_fragment') },
            A: { item: sp('aether_vestiges') },
            F: { item: sp('resplendent_feather') },
            M: { item: sp('moonstone_core') },
            R: { item: mi('gold_ring') },
        },
        {
            id: kj('angel_ring'),
            count: 1,
        },
        sp('endgame/finish_progression')
    );

    // -- FIREPROOF RING -- //
    pedestal(
        event,
        st('fireproof_ring'),
        800,
        'advanced',
        {
            'spectrum:cyan': 16,
            'spectrum:magenta': 16,
            'spectrum:yellow': 16,
            'spectrum:black': 4,
        },
        100,
        ['BOB', 'SAS', 'BOB'],
        {
            B: { item: sp('blazing_crystal') },
            A: { item: mi('gold_ring') },
            O: { item: sp('orange_block') },
            S: { item: sp('bedrock_dust') },
        },
        {
            id: kj('fireproof_ring'),
            count: 1,
        },
        sp('midgame/break_decayed_bedrock')
    );

    // -- SHRINKING CHARM -- //
    pedestal(
        event,
        st('shrinking_charm'),
        400,
        'simple',
        {
            'spectrum:cyan': 0,
            'spectrum:magenta': 8,
            'spectrum:yellow': 0,
            'spectrum:black': 0,
            'spectrum:white': 0,
        },
        5.0,
        [' LP', 'LAL', 'EL '],
        {
            L: { item: mi('lead_plate') },
            P: { item: sp('fanciful_pendant') },
            E: { item: sp('radiating_ender') },
            A: { item: sp('polished_amethyst') },
        },
        { id: ar('charm_of_shrinking'), count: 1 },
        sp('build_basic_pedestal_structure')
    );
});

// Block tagging provided by kevintok
ServerEvents.tags('block', (event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let sp = (id) => `spectrum:${id}`;

    event.add('c:lapis_ores', sp('blackslag_lapis_ore'));
});
