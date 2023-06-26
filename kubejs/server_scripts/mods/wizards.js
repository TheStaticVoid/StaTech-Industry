ServerEvents.recipes(e => {
    let st = (id) => `statech:wizards/${id}`;
    let sp = (id) => `spectrum:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let wz = (id) => `wizards:${id}`;
    let ru = (id) => `runes:${id}`;
    let se = (id) => `spell_engine:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    const REMOVED_RECIPES = [
        se('spell_binding_table'),
        ru('rune_crafting_altar'),
        wz('wand_arcane'),
        wz('wand_fire'),
        wz('wand_frost'),
        wz('wand_netherite_arcane'),
        wz('wand_netherite_fire'),
        wz('wand_netherite_frost'),
        wz('wizard_robe_head'),
        wz('wizard_robe_chest'),
        wz('wizard_robe_legs'),
        wz('wizard_robe_feet'),
        wz('arcane_robe_chest'),
        wz('arcane_robe_head'),
        wz('arcane_robe_legs'),
        wz('arcane_robe_feet'),
        wz('fire_robe_chest'),
        wz('fire_robe_head'),
        wz('fire_robe_legs'),
        wz('fire_robe_feet'),
        wz('frost_robe_chest'),
        wz('frost_robe_head'),
        wz('frost_robe_legs'),
        wz('frost_robe_feet'),
        wz('staff_arcane'),
        wz('staff_fire'),
        wz('staff_frost'),
        wz('staff_netherite_arcane'),
        wz('staff_netherite_fire'),
        wz('staff_netherite_frost')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- SPELL BINDING TABLE -- //
    e.custom({
        id: st('spell_binding_table'),
        type: sp('pedestal'),
        time: 600,
        tier: 'simple',
        cyan: 2,
        magenta: 2,
        yellow: 2,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            ' B ',
            'AGA',
            'CCC'
        ],
        key: {
            B: { item: mc('book') },
            A: { item: sp('amethyst_powder') },
            G: { tag: 'c:gold_ingots' },
            C: { item: sp('polished_calcite') }
        },
        result: {
            item: se('spell_binding'),
            count: 1
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });

    // -- RUNE CRAFTING TABLE -- //
    e.custom({
        id: st('rune_crafting_altar'),
        type: sp('pedestal'),
        time: 600,
        tier: 'simple',
        cyan: 2,
        magenta: 2,
        yellow: 2,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            'GPG',
            ' P ',
            'PPP'
        ],
        key: {
            G: { tag: 'c:gold_ingots' },
            P: { item: mc('polished_andesite') }
        },
        result: {
            item: ru('crafting_altar'),
            count: 1
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });

    // -- ARCANE WAND -- //
    e.custom({
        id: st('arcane_wand'),
        type: sp('pedestal'),
        time: 200,
        tier: 'basic',
        cyan: 0,
        magenta: 0,
        yellow: 1,
        white: 0,
        black: 0,
        experience: 2.0,
        pattern: [
            ' A',
            'G '
        ],
        key: {
            A: { item: mc('amethyst_shard') },
            G: { item: mi('gold_rod')}
        },
        result: {
            item: wz('wand_arcane'),
            count: 1
        },
        required_advancement: [
            sp('place_pedestal')
        ]
    });

    // -- FIRE WAND -- //
    e.custom({
        id: st('fire_wand'),
        type: sp('pedestal'),
        time: 200,
        tier: 'basic',
        cyan: 0,
        magenta: 0,
        yellow: 1,
        white: 0,
        black: 0,
        experience: 2.0,
        pattern: [
            ' G',
            'I '
        ],
        key: {
            G: { item: mc('gunpowder') },
            I: { item: mi('iron_rod') }
        },
        result: {
            item: wz('wand_fire'),
            count: 1
        },
        required_advancement: [
            sp('place_pedestal')
        ]
    });

    // -- FROST WAND -- //
    e.custom({
        id: st('frost_wand'),
        type: sp('pedestal'),
        time: 200,
        tier: 'basic',
        cyan: 0,
        magenta: 0,
        yellow: 1,
        white: 0,
        black: 0,
        experience: 2.0,
        pattern: [
            ' G',
            'I '
        ],
        key: {
            G: { item: mc('snowball') },
            I: { item: mi('iron_rod') }
        },
        result: {
            item: wz('wand_frost'),
            count: 1
        },
        required_advancement: [
            sp('place_pedestal')
        ]
    });

    // -- NETHERITE ARCANE WAND -- //
    e.smithing(wz('wand_netherite_arcane'), wz('wand_arcane'), mc('netherite_ingot')).id(st('netherite_arcane_wand'));

    // -- NETHERITE FIRE WAND -- //
    e.smithing(wz('wand_netherite_fire'), wz('wand_fire'), mc('netherite_ingot')).id(st('netherite_fire_wand'));

    // -- NETHERITE FROST WAND -- //
    e.smithing(wz('wand_netherite_frost'), wz('wand_frost'), mc('netherite_ingot')).id(st('netherite_frost_wand'));

    // -- WIZARD HAT -- //
    e.custom({
        id: st('wizard_robe_head'),
        type: sp('pedestal'),
        time: 300,
        tier: 'simple',
        cyan: 3,
        magenta: 2,
        yellow: 1,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            '  W',
            ' W ',
            'W W'
        ],
        key: {
            W: { item: mc('blue_wool') }
        },
        result: {
            item: wz('wizard_robe_head'),
            count: 1,
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });

    // -- WIZARD ROBE TOP -- //
    e.custom({
        id: st('wizard_robe_top'),
        type: sp('pedestal'),
        time: 300,
        tier: 'simple',
        cyan: 3,
        magenta: 2,
        yellow: 1,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            'W W',
            'WWW',
            'WWW'
        ],
        key: {
            W: { item: mc('blue_wool') }
        },
        result: {
            item: wz('wizard_robe_chest'),
            count: 1,
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });

    // -- WIZARD ROBE BOTTOM -- //
    e.custom({
        id: st('wizard_robe_top'),
        type: sp('pedestal'),
        time: 300,
        tier: 'simple',
        cyan: 3,
        magenta: 2,
        yellow: 1,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            'WWW',
            'W W',
            'W W'
        ],
        key: {
            W: { item: mc('blue_wool') }
        },
        result: {
            item: wz('wizard_robe_legs'),
            count: 1,
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });

    // -- WIZARD BOOTS -- //
    e.custom({
        id: st('wizard_robe_feet'),
        type: sp('pedestal'),
        time: 300,
        tier: 'simple',
        cyan: 3,
        magenta: 2,
        yellow: 1,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            'W W',
            'W W'
        ],
        key: {
            W: { item: mc('blue_wool') }
        },
        result: {
            item: wz('wizard_robe_feet'),
            count: 1,
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });

    // -- ARCANE ROBE HAT -- //
    e.custom({
        id: st('arcane_robe_head'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_head') },
            { item: mc('ender_pearl'), count: 1 },
            { item: sp('magenta_pigment'), count: 3 }
        ],
        result: {
            item: wz('arcane_robe_head')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- ARCANE ROBE CHEST -- //
    e.custom({
        id: st('arcane_robe_chest'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_chest') },
            { item: mc('ender_pearl'), count: 1 },
            { item: sp('magenta_pigment'), count: 3 }
        ],
        result: {
            item: wz('arcane_robe_chest')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- ARCANE ROBE LEGS -- //
    e.custom({
        id: st('arcane_robe_legs'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_legs') },
            { item: mc('ender_pearl'), count: 1 },
            { item: sp('magenta_pigment'), count: 3 }
        ],
        result: {
            item: wz('arcane_robe_legs')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- ARCANE ROBE FEET -- //
    e.custom({
        id: st('arcane_robe_feet'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_feet') },
            { item: mc('ender_pearl'), count: 1 },
            { item: sp('magenta_pigment'), count: 3 }
        ],
        result: {
            item: wz('arcane_robe_feet')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- FIRE ROBE HAT -- //
    e.custom({
        id: st('fire_robe_head'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_head') },
            { item: mc('blaze_powder'), count: 1 },
            { item: sp('red_pigment'), count: 3 }
        ],
        result: {
            item: wz('fire_robe_head')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- FIRE ROBE CHEST -- //
    e.custom({
        id: st('fire_robe_chest'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_chest') },
            { item: mc('blaze_powder'), count: 1 },
            { item: sp('red_pigment'), count: 3 }
        ],
        result: {
            item: wz('fire_robe_chest')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- FIRE ROBE LEGS -- //
    e.custom({
        id: st('fire_robe_legs'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_legs') },
            { item: mc('blaze_powder'), count: 1 },
            { item: sp('red_pigment'), count: 3 }
        ],
        result: {
            item: wz('fire_robe_legs')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- FIRE ROBE FEET -- //
    e.custom({
        id: st('fire_robe_feet'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_feet') },
            { item: mc('blaze_powder'), count: 1 },
            { item: sp('red_pigment'), count: 3 }
        ],
        result: {
            item: wz('fire_robe_feet')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- FROST ROBE HAT -- //
    e.custom({
        id: st('frost_robe_head'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_head') },
            { item: mc('snowball'), count: 1 },
            { item: sp('light_blue_pigment'), count: 3 }
        ],
        result: {
            item: wz('frost_robe_head')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- FROST ROBE CHEST -- //
    e.custom({
        id: st('frost_robe_chest'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_chest') },
            { item: mc('snowball'), count: 1 },
            { item: sp('light_blue_pigment'), count: 3 }
        ],
        result: {
            item: wz('frost_robe_chest')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- FROST ROBE LEGS -- //
    e.custom({
        id: st('frost_robe_legs'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_legs') },
            { item: mc('snowball'), count: 1 },
            { item: sp('light_blue_pigment'), count: 3 }
        ],
        result: {
            item: wz('frost_robe_legs')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- FROST ROBE FEET -- //
    e.custom({
        id: st('frost_robe_feet'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 20.0,
        fluid: 'minecraft:water',
        ingredients: [
            { item: wz('wizard_robe_feet') },
            { item: mc('snowball'), count: 1 },
            { item: sp('light_blue_pigment'), count: 3 }
        ],
        result: {
            item: wz('frost_robe_feet')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- ARCANE STAFF -- //
    e.custom({
        id: st('staff_arcane'),
        type: sp('pedestal'),
        time: 200,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 3,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            ' AE',
            ' SA',
            'G  '
        ],
        key: {
            A: { item: mc('amethyst_shard') },
            E: { item: mc('ender_pearl') },
            S: { item: mc('stick') },
            G: { item: mi('gold_rod') }
        },
        result: {
            item: wz('staff_arcane'),
            count: 1
        },
        required_advancement: [
            sp('midgame/build_advanced_pedestal_structure')
        ]
    });
    
    // -- FIRE STAFF -- //
    e.custom({
        id: st('staff_fire'),
        type: sp('pedestal'),
        time: 200,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 3,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            ' BP',
            ' SB',
            'G  '
        ],
        key: {
            B: { item: mc('nether_brick') },
            P: { item: mc('blaze_powder') },
            S: { item: mc('stick') },
            G: { item: mi('gold_rod') }
        },
        result: {
            item: wz('staff_fire'),
            count: 1
        },
        required_advancement: [
            sp('midgame/build_advanced_pedestal_structure')
        ]
    });

    // -- FROST STAFF -- //
    e.custom({
        id: st('staff_frost'),
        type: sp('pedestal'),
        time: 200,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 3,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            ' BC',
            ' SB',
            'I  '
        ],
        key: {
            B: { item: mc('snowball') },
            C: { item: mc('packed_ice') },
            S: { item: mc('stick') },
            I: { item: mi('iron_rod') }
        },
        result: {
            item: wz('staff_frost'),
            count: 1
        },
        required_advancement: [
            sp('midgame/build_advanced_pedestal_structure')
        ]
    });

    // -- NETHERITE ARCANE STAFF -- //
    e.smithing(wz('staff_netherite_arcane'), wz('staff_arcane'), mc('netherite_ingot')).id(st('staff_netherite_arcane'));

    // -- NETHERITE FIRE STAFF -- //
    e.smithing(wz('staff_netherite_fire'), wz('staff_fire'), mc('netherite_ingot')).id(st('staff_netherite_fire'));

    // -- NETHERITE FROST STAFF -- //
    e.smithing(wz('staff_netherite_frost'), wz('staff_frost'), mc('netherite_ingot')).id(st('staff_netherite_frost'));
});

ServerEvents.tags('item', e => {
    let wz = (id) => `wizards:${id}`;
    const BASIC_WANDS = [
        wz('wand_arcane'),
        wz('wand_fire'),
        wz('wand_frost')
    ];
    BASIC_WANDS.forEach(id => { e.add('kubejs:basic_wands', id) } );

    const NETHERITE_BASIC_WANDS = [
        wz('wand_netherite_arcane'),
        wz('wand_netherite_fire'),
        wz('wand_netherite_frost')
    ];
    NETHERITE_BASIC_WANDS.forEach(id => { e.add('kubejs:netherite_basic_wands', id) } );

    const BASIC_STAFF = [
        wz('staff_arcane'),
        wz('staff_fire'),
        wz('staff_frost')
    ];
    BASIC_STAFF.forEach(id => { e.add('kubejs:basic_staffs', id) } );

    const NETHERITE_BASIC_STAFF = [
        wz('staff_netherite_arcane'),
        wz('staff_netherite_fire'),
        wz('staff_netherite_frost')
    ];
    NETHERITE_BASIC_STAFF.forEach(id => { e.add('kubejs:basic_netherite_staffs', id) } );
});