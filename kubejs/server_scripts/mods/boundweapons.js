ServerEvents.recipes(e => {
    let st = (id) => `statech:boundweapons/${id}`;
    let bw = (id) => `boundweapons:${id}`;
    let sp = (id) => `spectrum:${id}`;
    let mc = (id) => `minecraft:${id}`;

    const REMOVED_RECIPES = [
        bw('spell_1'),
        bw('spell_2'),
        bw('spell_3')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- SUMMON TOOL -- //
    e.custom({
        id: st('summon_spell_basic_item'),
        type: sp('pedestal'),
        time: 300,
        tier: 'simple',
        cyan: 2,
        magenta: 2,
        yellow: 2,
        white: 0,
        black: 0,
        experience: 5.0,
        pattern: [
            'SPA',
            'HBO'
        ],
        key: {
            S: { item: mc('iron_sword') },
            P: { item: mc('iron_pickaxe') },
            A: { item: mc('iron_axe') },
            H: { item: mc('iron_shovel') },
            B: { item: mc('bow') },
            O: { item: mc('iron_hoe') }
        },
        result: {
            item: bw('summon_spell_basic_item')
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });

    // -- SUMMON TOOL + 1 -- //
    e.custom({
        id: st('summon_spell_advanced_item'),
        type: sp('fusion_shrine'),
        time: 600,
        experience: 10.0,
        fluid: mc('water'),
        ingredients: [
            { item: bw('summon_spell_basic_item') },
            { item: mc('redstone_block') }
        ],
        result: {
            item: bw('summon_spell_advanced_item')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: [
            'lightning_on_shrine'
        ],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- SUMMON TOOL + 2 --//
    e.custom({
        id: st('summon_spell_epic_item'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('liquid_crystal'),
        ingredients: [
            { item: bw('summon_spell_advanced_item') },
            { item: mc('glowstone') }
        ],
        result: {
            item: bw('summon_spell_epic_item')
        },
        required_advancement: sp('midgame/enter_liquid_crystal'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effect: [
            'lightning_on_shrine'
        ],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- RETURN SUMMON TOOL -- //
    e.shapeless(bw('summon_spell_basic_item'), [ bw('bound_sword_basic_item') ])
        .id(st('basic_spell_from_sword'));
    e.shapeless(bw('summon_spell_basic_item'), [ bw('bound_axe_basic_item') ])
        .id(st('basic_spell_from_axe'));
    e.shapeless(bw('summon_spell_basic_item'), [ bw('bound_bow_basic_item') ])
        .id(st('basic_spell_from_bow'));
    e.shapeless(bw('summon_spell_basic_item'), [ bw('bound_hoe_basic_item') ])
        .id(st('basic_spell_from_hoe'));
    e.shapeless(bw('summon_spell_basic_item'), [ bw('bound_shovel_basic_item') ])
        .id(st('basic_spell_from_shovel'));
    e.shapeless(bw('summon_spell_basic_item'), [ bw('bound_pickaxe_basic_item') ])
        .id(st('basic_spell_from_pickaxe'));

    // -- RETURN SUMMON TOOL + 1 -- //
    e.shapeless(bw('summon_spell_advanced_item'), [ bw('bound_sword_advanced_item') ])
        .id(st('advanced_spell_from_sword'));
    e.shapeless(bw('summon_spell_advanced_item'), [ bw('bound_axe_advanced_item') ])
        .id(st('advanced_spell_from_axe'));
    e.shapeless(bw('summon_spell_advanced_item'), [ bw('bound_bow_advanced_item') ])
        .id(st('advanced_spell_from_bow'));
    e.shapeless(bw('summon_spell_advanced_item'), [ bw('bound_hoe_advanced_item') ])
        .id(st('advanced_spell_from_hoe'));
    e.shapeless(bw('summon_spell_advanced_item'), [ bw('bound_shovel_advanced_item') ])
        .id(st('advanced_spell_from_shovel'));
    e.shapeless(bw('summon_spell_advanced_item'), [ bw('bound_pickaxe_advanced_item') ])
        .id(st('advanced_spell_from_pickaxe'));

    // -- RETURN SUMMON TOOL + 1 -- //
    e.shapeless(bw('summon_spell_epic_item'), [ bw('bound_sword_epic_item') ])
        .id(st('epic_spell_from_sword'));
    e.shapeless(bw('summon_spell_epic_item'), [ bw('bound_axe_epic_item') ])
        .id(st('epic_spell_from_axe'));
    e.shapeless(bw('summon_spell_epic_item'), [ bw('bound_bow_epic_item') ])
        .id(st('epic_spell_from_bow'));
    e.shapeless(bw('summon_spell_epic_item'), [ bw('bound_hoe_epic_item') ])
        .id(st('epic_spell_from_hoe'));
    e.shapeless(bw('summon_spell_epic_item'), [ bw('bound_shovel_epic_item') ])
        .id(st('epic_spell_from_shovel'));
    e.shapeless(bw('summon_spell_epic_item'), [ bw('bound_pickaxe_epic_item') ])
        .id(st('epic_spell_from_pickaxe'));
});