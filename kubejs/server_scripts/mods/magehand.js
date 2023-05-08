ServerEvents.recipes(e => {
    let st = (id) => `statech:magehand/${id}`;
    let mh = (id) => `magehand:${id}`;
    let sp = (id) => `spectrum:${id}`;
    let mc = (id) => `minecraft:${id}`;

    const REMOVED_RECIPES = [
        mh('mage_hand_copper'),
        mh('mage_hand_iron'),
        mh('mage_hand_gold'),
        mh('mage_hand_diamond'),
        mh('mage_hand_amethyst')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    let mageHandRecipe = (material, materialNameFull) => {
        let newRecipe = {
            id: st(`${material}_magehand`),
            type: sp('pedestal'),
            time: 400,
            tier: 'simple',
            cyan: 1,
            magenta: 1,
            yellow: 1,
            white: 0,
            black: 0,
            experience: 10.0,
            pattern: [
                'III',
                'IMI',
                'III'
            ],
            key: {
                I: { item: mc(materialNameFull) },
                M: { item: mh('flesh_hand_item') }
            },
            result: {
                item: mh(`${material}_spawner_item`)
            },
            required_advancement: [
                sp('build_basic_pedestal_structure')
            ]
        }
        e.custom(newRecipe);
    }
    
    const MATERIALS = [
        'copper',
        'iron',
        'gold',
        'diamond',
        'amethyst'
    ];

    const MATERIAL_FULLNAME = [
        'copper_ingot',
        'iron_ingot',
        'gold_ingot',
        'diamond',
        'amethyst_shard'
    ];

    for (let i = 0; i < MATERIALS.length; i++) {
        mageHandRecipe(MATERIALS[i], MATERIAL_FULLNAME[i]);
    }
});

ServerEvents.tags('item', e => {
    let mh = (id) => `magehand:${id}`;
    const MAGEHANDS = [
        mh('copper_spawner_item'),
        mh('iron_spawner_item'),
        mh('gold_spawner_item'),
        mh('diamond_spawner_item'),
        mh('amethyst_spawner_item')
    ];
    MAGEHANDS.forEach(id => { e.add('kubejs:magehands', id) } );
});