// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let sp = (id) => `spectrum:${id}`;

    e.add('c:tools/pickaxes', sp('bedrock_pickaxe'));
    e.add('c:tools/axes', sp('bedrock_axe'));
    e.add('c:tools/shovels', sp('bedrock_shovel'));

    const POLISHED_GEMSTONE = [
        sp('topaz_storage_block'),
        sp('amethyst_storage_block'),
        sp('citrine_storage_block'),
        sp('onyx_storage_block')
    ];
    POLISHED_GEMSTONE.forEach(id => { e.add('kubejs:polished_gemstones', id) } );

    const POLISHED_BLOCKS = [
        sp('polished_calcite'),
        sp('polished_basalt')
    ];
    POLISHED_BLOCKS.forEach(id => { e.add('kubejs:polished_blocks', id) } );

    const CHISELED_POLISHED_BLOCKS = [
        sp('chiseled_polished_calcite'),
        sp('chiseled_polished_basalt')
    ];
    CHISELED_POLISHED_BLOCKS.forEach(id => { e.add('kubejs:chiseled_polished_blocks', id) } );

    const NOTCHED_POLISHED = [
        sp('notched_polished_calcite'),
        sp('notched_polished_basalt')
    ];
    NOTCHED_POLISHED.forEach(id => { e.add('kubejs:notched_polished_blocks', id) } );

    const POLISHED_PILLARS = [
        sp('polished_calcite_pillar'),
        sp('polished_basalt_pillar')
    ];
    POLISHED_PILLARS.forEach(id => { e.add('kubejs:polished_pillar_blocks', id) } );

    const SHIMMERSTONE_LIGHTS = [
        sp('basalt_shimmerstone_light'),
        sp('calcite_shimmerstone_light'),
        sp('stone_shimmerstone_light'),
        sp('granite_shimmerstone_light'),
        sp('diorite_shimmerstone_light'),
        sp('andesite_shimmerstone_light'),
        sp('deepslate_shimmerstone_light')
    ];
    SHIMMERSTONE_LIGHTS.forEach(id => { e.add('kubejs:shimmerstone_lights', id) } );

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
    GEMSTONE_LAMPS.forEach(id => { e.add('kubejs:gemstone_lamps', id) } );

    const PHANTOM_FRAMES = [
        sp('phantom_frame'),
        sp('glow_phantom_frame')
    ];
    PHANTOM_FRAMES.forEach(id => { e.add('kubejs:phantom_frames', id) } );

    const FUSION_SHRINES = [
        sp('fusion_shrine_basalt'),
        sp('fusion_shrine_calcite')
    ];
    FUSION_SHRINES.forEach(id => { e.add('kubejs:fusion_shrines', id) } );

    const POLISHED_SLABS = [
        sp('polished_calcite_slab'),
        sp('polished_basalt_slab')
    ];
    POLISHED_SLABS.forEach(id => { e.add('kubejs:polished_slabs', id) } );

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
    PIGMENT_LAMPS.forEach(id => { e.add('kubejs:pigment_lamps', id) } );

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
    PIGMENT_SPORE_BLOSSOMS.forEach(id => { e.add('kubejs:pigment_spore_blossoms', id) } );

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
    GLOWBLOCKS.forEach(id => { e.add('kubejs:glowblocks', id) } );

    const CREST_BLOCKS = [
        sp('polished_calcite_crest'),
        sp('polished_basalt_crest')
    ];
    CREST_BLOCKS.forEach(id => { e.add('kubejs:polished_crest_blocks', id) } );

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
    GEMSTONE_CHISELED_BLOCKS.forEach(id => { e.add('kubejs:gemstone_chiseled_blocks', id) } );

    const GEMSTONE_CHIMES = [
        sp('topaz_chime'),
        sp('amethyst_chime'),
        sp('citrine_chime'),
        sp('onyx_chime')
    ];
    GEMSTONE_CHIMES.forEach(id => { e.add('kubejs:gemstone_chimes', id) } );

    const ITEM_BOWLS = [
        sp('item_bowl_basalt'),
        sp('item_bowl_calcite')
    ];
    ITEM_BOWLS.forEach(id => { e.add('kubejs:spectrum_item_bowls', id) } );

    const SUGAR_STICK = [
        sp('sugar_stick'),
        sp('topaz_sugar_stick'),
        sp('amethyst_sugar_stick'),
        sp('citrine_sugar_stick'),
        sp('onyx_sugar_stick'),
        sp('moonstone_sugar_stick')
    ];
    SUGAR_STICK.forEach(id => { e.add('kubejs:sugar_sticks', id) } );
});

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:spectrum/${id}`;
    let sp = (id) => `spectrum:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let kj = (id) => `kubejs:${id}`;
    let bl = (id) => `blockus:${id}`;

    // -- MAGIC DIAMOND -- //
    e.custom({
        id: st('magic_diamond'),
        type: sp('pedestal'),
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
            Q: { item: sp('quitoxic_powder') },
            S: { item: sp('shimmerstone_gem') },
            A: { item: sp('amethyst_powder') },
            T: { item: sp('topaz_powder') },
            C: { item: sp('citrine_powder') },
            D: { item: 'minecraft:diamond' }
        },
        result: {
            item: 'kubejs:magic_diamond',
            count: 1,
        },
        required_advancement: [
            sp('collect_quitoxic_reeds'),
            sp('collect_shimmerstone')
        ]
    });

    // -- QUITOXIC REEDS -- //
    e.custom({
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

    e.stonecutting(sp('amethyst_storage_block'), bl('polished_amethyst'));
});

// Block tagging provided by kevintok
ServerEvents.tags('block', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let sp = (id) => `spectrum:${id}`;

    e.add('c:lapis_ores', sp('blackslag_lapis_ore'))
});

// Recipe modification
ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let sp = (id) => `spectrum:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    
    // -- SPECTRUM BUDS AND CLUSTER ANVIL CRUSHING WITHOUT INGOT OUTPUT
    const CHANGE_INGOT_TO_DUST = [
        'copper',
        'gold',
        'iron'
    ];
    
    //buds
    CHANGE_INGOT_TO_DUST.forEach(data => {
        e.forEachRecipe( { type: sp('anvil_crushing'), input: sp(`small_${data}_bud`), mod: 'spectrum'}, recipe => {
            var recipeId = sp(`anvil_crushing/crystallarieum_growables/${data}_from_buds`);
            var recipeJson = JSON.parse(recipe.json);
            recipeJson.result =  { item: mi(`${data}_dust`), count: 1.0 };
            e.custom(recipeJson).id(recipeId);
        });
    });
    
    //clusters
    CHANGE_INGOT_TO_DUST.forEach(data => {
        e.forEachRecipe( { type: sp('anvil_crushing'), input: sp(`${data}_cluster`), mod: 'spectrum'}, recipe => {
            var recipeId = sp(`anvil_crushing/crystallarieum_growables/${data}_from_cluster`);
            var recipeJson = JSON.parse(recipe.json);
            recipeJson.result =  { item: mi(`${data}_dust`), count: 6.0 };
            e.custom(recipeJson).id(recipeId);
        });
    });
});