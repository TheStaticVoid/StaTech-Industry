ServerEvents.recipes(e => {
    let st = (id) => `statech:spellblade/${id}`;
    let sp = (id) => `spectrum:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let wz = (id) => `wizards:${id}`;
    let ru = (id) => `runes:${id}`;
    let sb = (id) => `spellbladenext:${id}`;
    
    const REMOVED_RECIPES = [
        sb('fire'),
        sb('arcane'),
        sb('frosted'),
        sb('blade_arcane'),
        sb('blade_fire'),
        sb('blade_frost'),
        sb('claymore_arcane'),
        sb('claymore_fire'),
        sb('claymore_frost'),
        sb('orb_arcane'),
        sb('orb_fire'),
        sb('orb_frost'),
        sb('magebane'),
        sb('magebreaker'),
        sb('mageseeker'),
        sb('aetherfirechest'),
        sb('aetherfirechest2'),
        sb('rimeblazechest'),
        sb('rimeblazechest2'),
        sb('deathchillchest'),
        sb('deathchillchest2'),
        sb('aetherfirelegs'),
        sb('aetherfirelegs2'),
        sb('rimeblazelegs'),
        sb('rimeblazelegs2'),
        sb('deathchilllegs'),
        sb('deathchilllegs2'),
        sb('aetherfirefeet'),
        sb('aetherfirefeet2'),
        sb('rimeblazefeet'),
        sb('rimeblazefeet2'),
        sb('deathchillfeet'),
        sb('deathchillfeet2'),
        sb('mulberry')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- RUNEBLAZE INGOT -- //
    e.custom({
        id: st('runeblazing_ingot'),
        type: sp('fusion_shrine'),
        time: 200,
        experience: 10.0,
        fluid: sp('liquid_crystal'),
        ingredients: [
            { item: mc('copper_ingot'), count: 4 },
            { item: ru('fire_stone'), count: 4 }
        ],
        result: {
            item: sb('runeblazing_ingot'),
            count: 4
        },
        required_advancement: sp('midgame/enter_liquid_crystal'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: [
            'lightning_on_shrine',
            'nothing',
            'lightning_on_shrine'
        ],
        finish_crafting_effect: 'visual_explosions_on_shrine'
    });

    // -- RUNEGLEAM INGOT -- //
    e.custom({
        id: st('runegleaming_ingot'),
        type: sp('fusion_shrine'),
        time: 200,
        experience: 10.0,
        fluid: sp('liquid_crystal'),
        ingredients: [
            { item: mc('gold_ingot'), count: 4 },
            { item: ru('arcane_stone'), count: 4 }
        ],
        result: {
            item: sb('runegleaming_ingot'),
            count: 4
        },
        required_advancement: sp('midgame/enter_liquid_crystal'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: [
            'lightning_on_shrine',
            'nothing',
            'lightning_on_shrine'
        ],
        finish_crafting_effect: 'visual_explosions_on_shrine'
    });

    // -- RUNEFROST INGOT -- //
    e.custom({
        id: st('runefrosted_ingot'),
        type: sp('fusion_shrine'),
        time: 200,
        experience: 10.0,
        fluid: sp('liquid_crystal'),
        ingredients: [
            { item: mc('iron_ingot'), count: 4 },
            { item: ru('frost_stone'), count: 4 }
        ],
        result: {
            item: sb('runefrosted_ingot'),
            count: 4
        },
        required_advancement: sp('midgame/enter_liquid_crystal'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: [
            'lightning_on_shrine',
            'nothing',
            'lightning_on_shrine'
        ],
        finish_crafting_effect: 'visual_explosions_on_shrine'
    });

    // -- ARCANE SPELLBLADE -- //
    e.custom({
        id: st('blade_arcane'),
        type: sp('pedestal'),
        time: 400,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 4,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            '  A',
            'RD ',
            'GR '
        ],
        key: {
            A: { item: mc('amethyst_shard') },
            R: { item: sb('runegleaming_ingot') },
            D: { item: mc('diamond') },
            G: { item: mc('golden_sword') }
        },
        result: {
            item: sb('blade_arcane'),
            count: 1
        },
        required_advancement: [
            sp('midgame/enter_liquid_crystal')
        ]
    });

    // -- FLAMING SPELLBLADE -- //
    e.custom({
        id: st('blade_fire'),
        type: sp('pedestal'),
        time: 400,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 4,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            '  B',
            'RG ',
            'IR '
        ],
        key: {
            B: { item: mc('blaze_rod') },
            R: { item: sb('runeblazing_ingot') },
            G: { item: mc('glowstone') },
            I: { item: mc('iron_sword') }
        },
        result: {
            item: sb('blade_fire'),
            count: 1
        },
        required_advancement: [
            sp('midgame/enter_liquid_crystal')
        ]
    });

    // -- FROST SPELLBLADE -- //
    e.custom({
        id: st('blade_frost'),
        type: sp('pedestal'),
        time: 400,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 4,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            '  S',
            'FQ ',
            'RF ',
        ],
        key: {
            S: { item: mc('snowball') },
            F: { item: sb('runefrosted_ingot') },
            Q: { item: mc('quartz') },
            R: { item: mc('iron_sword') }
        },
        result: {
            item: sb('blade_frost'),
            count: 1
        },
        required_advancement: [
            sp('midgame/enter_liquid_crystal')
        ]
    });

    // -- ARCANE CLAYMORE -- //
    e.custom({
        id: st('claymore_arcane'),
        type: sp('pedestal'),
        time: 400,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 3,
        white: 0,
        black: 2,
        experience: 10.0,
        pattern: [
            ' AA',
            'RBA',
            'MR '
        ],
        key: {
            A: { item: mc('amethyst_shard') },
            R: { item: sb('runegleaming_ingot') },
            B: { item: sb('blade_arcane') },
            M: { item: sp('midnight_chip') }
        },
        result: {
            item: sb('claymore_arcane'),
            count: 1
        },
        required_advancement: [
            sp('midgame/collect_midnight_chip')
        ]
    });

    // -- FIRE CLAYMORE -- //
    e.custom({
        id: st('claymore_fire'),
        type: sp('pedestal'),
        time: 400,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 3,
        white: 0,
        black: 2,
        experience: 10.0,
        pattern: [
            ' AA',
            'RBA',
            'MR '
        ],
        key: {
            A: { item: mc('blaze_rod') },
            R: { item: sb('runeblazing_ingot') },
            B: { item: sb('blade_fire') },
            M: { item: sp('midnight_chip') }
        },
        result: {
            item: sb('claymore_fire'),
            count: 1
        },
        required_advancement: [
            sp('midgame/collect_midnight_chip')
        ]
    });

    // -- FROST CLAYMORE -- //
    e.custom({
        id: st('claymore_frost'),
        type: sp('pedestal'),
        time: 400,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 3,
        white: 0,
        black: 2,
        experience: 10.0,
        pattern: [
            ' AA',
            'RBA',
            'MR '
        ],
        key: {
            A: { item: mc('snowball') },
            R: { item: sb('runefrosted_ingot') },
            B: { item: sb('blade_frost') },
            M: { item: sp('midnight_chip') }
        },
        result: {
            item: sb('claymore_frost'),
            count: 1
        },
        required_advancement: [
            sp('midgame/collect_midnight_chip')
        ]
    });

    // -- ARCANE ORB -- //
    e.custom({
        id: st('orb_arcane'),
        type: sp('pedestal'),
        time: 400,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 3,
        black: 0,
        experience: 10.0,
        pattern: [
            'GRG',
            'ADA',
            'GRG'
        ],
        key: {
            G: { item: mc('glass') },
            R: { item: sb('runegleaming_ingot') },
            A: { item: mc('amethyst_shard') },
            D: { item: mc('diamond') }
        },
        result: {
            item: sb('orb_arcane'),
            count: 1
        },
        required_advancement: [
            sp('midgame/collect_midnight_chip')
        ]
    });

    // -- FIRE ORB -- //
    e.custom({
        id: st('orb_fire'),
        type: sp('pedestal'),
        time: 400,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 3,
        black: 0,
        experience: 10.0,
        pattern: [
            'GRG',
            'ADA',
            'GRG'
        ],
        key: {
            G: { item: mc('glass') },
            R: { item: sb('runeblazing_ingot') },
            A: { item: mc('blaze_rod') },
            D: { item: mc('glowstone') }
        },
        result: {
            item: sb('orb_fire'),
            count: 1
        },
        required_advancement: [
            sp('midgame/collect_midnight_chip')
        ]
    });

    // -- FIRE ORB -- //
    e.custom({
        id: st('orb_frost'),
        type: sp('pedestal'),
        time: 400,
        tier: 'advanced',
        cyan: 0,
        magenta: 0,
        yellow: 3,
        black: 0,
        experience: 10.0,
        pattern: [
            'GRG',
            'ADA',
            'GRG'
        ],
        key: {
            G: { item: mc('glass') },
            R: { item: sb('runefrosted_ingot') },
            A: { item: mc('snowball') },
            D: { item: mc('quartz') }
        },
        result: {
            item: sb('orb_frost'),
            count: 1
        },
        required_advancement: [
            sp('midgame/collect_midnight_chip')
        ]
    });

    // -- AETHERFIRE HEAD -- //
    e.custom({
        id: st('aetherfire_head'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: mc('golden_helmet') },
            { item: sb('runeblazing_ingot'), count: 2 },
            { item: sb('runegleaming_ingot'), count: 2 },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('aetherfire_head')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- RIMEBLAZE HEAD -- //
    e.custom({
        id: st('rimeblaze_head'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: mc('golden_helmet') },
            { item: sb('runefrosted_ingot'), count: 2 },
            { item: sb('runeblazing_ingot'), count: 2 },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('rimeblaze_head')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- DEATHCHILL HEAD -- //
    e.custom({
        id: st('deathchill_head'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: mc('golden_helmet') },
            { item: sb('runefrosted_ingot'), count: 2 },
            { item: sb('runegleaming_ingot'), count: 2 },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('deathchill_head')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- DEATHCHILL CHEST -- //
    e.custom({
        id: st('deathchill_chest'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runefrosted_chest') },
            { item: sb('nullifying_arcane_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('deathchill_chest')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- DEATHCHILL CHEST 2 -- //
    e.custom({
        id: st('deathchill_chest'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runegleaming_chest') },
            { item: sb('nullifying_frost_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('deathchill_chest')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- DEATHCHILL LEGS -- //
    e.custom({
        id: st('deathchill_legs'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runefrosted_legs') },
            { item: sb('nullifying_arcane_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('deathchill_legs')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- DEATHCHILL LEGS 2 -- //
    e.custom({
        id: st('deathchill_legs'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runegleaming_legs') },
            { item: sb('nullifying_frost_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('deathchill_legs')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- DEATHCHILL BOOTS -- //
    e.custom({
        id: st('deathchill_feet'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runefrosted_feet') },
            { item: sb('nullifying_arcane_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('deathchill_feet')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- DEATHCHILL BOOTS 2 -- //
    e.custom({
        id: st('deathchill_feet'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runegleaming_feet') },
            { item: sb('nullifying_frost_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('deathchill_feet')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- AETHERFIRE CHEST -- //
    e.custom({
        id: st('aetherfire_chest'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runeblazing_chest') },
            { item: sb('nullifying_arcane_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('aetherfire_chest')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- AETHERFIRE CHEST 2 -- //
    e.custom({
        id: st('aetherfire_chest'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runegleaming_chest') },
            { item: sb('nullifying_fire_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('aetherfire_chest')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- AETHERFIRE LEGS -- //
    e.custom({
        id: st('aetherfire_legs'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runeblazing_legs') },
            { item: sb('nullifying_arcane_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('aetherfire_legs')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- AETHERFIRE LEGS 2 -- //
    e.custom({
        id: st('aetherfire_legs'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runegleaming_legs') },
            { item: sb('nullifying_fire_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('aetherfire_legs')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- AETHERFIRE BOOTS -- //
    e.custom({
        id: st('aetherfire_feet'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runeblazing_feet') },
            { item: sb('nullifying_arcane_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('aetherfire_feet')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- AETHERFIRE BOOTS 2 -- //
    e.custom({
        id: st('aetherfire_feet'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runegleaming_feet') },
            { item: sb('nullifying_fire_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('aetherfire_feet')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- RIMEBLAZE CHEST -- //
    e.custom({
        id: st('rimeblaze_chest'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runeblazing_chest') },
            { item: sb('nullifying_frost_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('rimeblaze_chest')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- RIMEBLAZE CHEST 2 -- //
    e.custom({
        id: st('rimeblaze_chest'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runefrosted_chest') },
            { item: sb('nullifying_fire_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('rimeblaze_chest')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- RIMEBLAZE LEGS -- //
    e.custom({
        id: st('rimeblaze_legs'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runeblazing_legs') },
            { item: sb('nullifying_frost_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('rimeblaze_legs')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- RIMEBLAZE LEGS 2 -- //
    e.custom({
        id: st('rimeblaze_legs'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runefrosted_legs') },
            { item: sb('nullifying_fire_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('rimeblaze_legs')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- RIMEBLAZE BOOTS -- //
    e.custom({
        id: st('rimeblaze_feet'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runeblazing_feet') },
            { item: sb('nullifying_frost_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('rimeblaze_feet')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- RIMEBLAZE BOOTS 2 -- //
    e.custom({
        id: st('rimeblaze_feet'),
        type: sp('fusion_shrine'),
        time: 1200,
        experience: 20.0,
        fluid: sp('midnight_solution'),
        ingredients: [
            { item: sb('runefrosted_feet') },
            { item: sb('nullifying_fire_totem') },
            { item: sp('midnight_chip') }
        ],
        result: {
            item: sb('rimeblaze_feet')
        },
        required_advancement: sp('midgame/collect_midnight_chip'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: ['nothing'],
        finish_crafting_effect: 'lightning_on_shrine'
    });
});

ServerEvents.tags('item', e => {
    let sb = (id) => `spellbladenext:${id}`;

    const RUNE_INGOTS = [
        sb('runeblazing_ingot'),
        sb('runegleaming_ingot'),
        sb('runefrosted_ingot')
    ];
    RUNE_INGOTS.forEach(id => { e.add('kubejs:rune_ingots', id) } );

    const BASIC_SPELLBLADE = [
        sb('blade_arcane'),
        sb('blade_fire'),
        sb('blade_frost')
    ];
    BASIC_SPELLBLADE.forEach(id => { e.add('kubejs:basic_spellblades', id) } );

    const RUNE_ARMOR_HEAD = [
        sb('runegleaming_head'),
        sb('runeblazing_head'),
        sb('runefrosted_head')
    ];
    RUNE_ARMOR_HEAD.forEach(id => { e.add('kubejs:rune_armor_helmets', id) } );

    const RUNE_ARMOR_CHEST = [
        sb('runegleaming_chest'),
        sb('runeblazing_chest'),
        sb('runefrosted_chest')
    ];
    RUNE_ARMOR_CHEST.forEach(id => { e.add('kubejs:rune_armor_chestplates', id) } );

    const RUNE_ARMOR_LEGS = [
        sb('runegleaming_legs'),
        sb('runeblazing_legs'),
        sb('runefrosted_legs')
    ];
    RUNE_ARMOR_LEGS.forEach(id => { e.add('kubejs:rune_armor_leggings', id) } );

    const RUNE_ARMOR_FEET = [
        sb('runegleaming_feet'),
        sb('runeblazing_feet'),
        sb('runefrosted_feet')
    ];
    RUNE_ARMOR_FEET.forEach(id => { e.add('kubejs:rune_armor_boots', id) } );

    const RUNE_CLAYMORE = [
        sb('claymore_arcane'),
        sb('claymore_fire'),
        sb('claymore_frost')
    ];
    RUNE_CLAYMORE.forEach(id => { e.add('kubejs:runic_claymores', id) } );

    const INQUISITOR_HEAD = [
        sb('aetherfire_head'),
        sb('rimeblaze_head'),
        sb('deathchill_head')
    ];
    INQUISITOR_HEAD.forEach(id => { e.add('kubejs:inquisitor_helmets', id) } );

    const INQUISITOR_CHEST = [
        sb('aetherfire_chest'),
        sb('rimeblaze_chest'),
        sb('deathchill_chest')
    ];
    INQUISITOR_CHEST.forEach(id => { e.add('kubejs:inquisitor_chestplates', id) } );

    const INQUISITOR_LEGS = [
        sb('aetherfire_legs'),
        sb('rimeblaze_legs'),
        sb('deathchill_legs')
    ];
    INQUISITOR_LEGS.forEach(id => { e.add('kubejs:inquisitor_legs', id) } );

    const INQUISITOR_FEET = [
        sb('aetherfire_feet'),
        sb('rimeblaze_feet'),
        sb('deathchill_feet')
    ];
    INQUISITOR_FEET.forEach(id => { e.add('kubejs:inquisitor_boots', id) } );

    const RUNIC_ORBS = [
        sb('orb_arcane'),
        sb('orb_fire'),
        sb('orb_frost')
    ];
    RUNIC_ORBS.forEach(id => { e.add('kubejs:runic_orbs', id) } );

    const WAR_TOMES = [
        sb('acrobat_spell_book'),
        sb('warriorone_spell_book'),
        sb('warriortwo_spell_book'),
        sb('warriorpolearm_spell_book'),
        sb('duelist_spell_book'),
        sb('juggone_spell_book'),
        sb('juggtwo_spell_book'),
        sb('assassin_spell_book'),
        sb('orb_fire_spell_book'),
        sb('orb_frost_spell_book'),
        sb('orb_arcane_spell_book'),
        sb('spellblade_arcane_spell_book'),
        sb('spellblade_frost_spell_book'),
        sb('spellblade_fire_spell_book')
    ];
    WAR_TOMES.forEach(id => { e.add('kubejs:war_tomes', id) } );
});