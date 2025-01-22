// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/macerator/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let cr = (id) => `create:${id}`;
    let ed = (id) => `expandeddelight:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let sp = (id) => `spectrum:${id}`;
    let bl = (id) => `blockus:${id}`;
    let ge = (id) => `geodes:${id}`;
    let ae2 = (id) => `ae2:${id}`;
    let byg = (id) => `byg:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let macerator = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('macerator'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    }

    // -- PYRITE DUST -- //
    macerator(
        st('pyrite_dust_from_pyrite_chunk'),
        16,
        200,
        [ { amount: 1, item: ge('pyrite_chunk') } ],
        [
            { amount: 1, item: tr('pyrite_dust') },
            { amount: 1, item: tr('pyrite_dust'), probability: 0.5 }
        ],
    );

    // -- PYRITE DUST FROM BLOCK -- //
    macerator(
        st('pyrite_dust_from_pyrite_block'),
        16,
        200,
        [ { amount: 1, item: ge('pyrite') } ],
        [ 
            { amount: 4, item: tr('pyrite_dust') },
            { amount: 2, item: tr('pyrite_dust'), probability: 0.5 }
        ]
    );

    // -- MARBLE DUST -- //
    macerator(
        st('marble_dust'),
        4,
        200,
        [ { amount: 1, item: bl('marble') } ],
        [ { amount: 2, item: tr('marble_dust') } ]
    );

    // -- WHEAT DOUGH -- //
    macerator(
        st('wheat_flour'),
        2,
        200,
        [ { amount: 1, item: mc('wheat') } ],
        [ { amount: 2, item: cr('wheat_flour') } ]
    );

    // -- SALT DUST -- //
    macerator(
        st('ground_salt'),
        2,
        100,
        [ { amount: 1, item: ed('salt_rock') } ],
        [ { amount: 1, item: ed('ground_salt') } ]
    );

    // -- CALCITE DUST FROM LIMESTONE -- //
    macerator(
        st('calcite_dust_from_limestone'),
        8,
        100,
        [ { amount: 1, item: cr('limestone') } ],
        [ { amount: 2, item: tr('calcite_dust') } ]
    );

    // -- CALCITE DUST FROM BLOCKUS LIMESTONE -- // 
    macerator(
        st('calcite_dust_from_blockus_limestone'),
        8,
        100,
        [ { amount: 1, item: bl('limestone') } ],
        [ { amount: 2, item: tr('calcite_dust') } ]
    );

    // -- CALCITE DUST FROM CALCITE -- //
    macerator(
        st('calcite_dust_from_calcite'),
        8,
        100,
        [ { amount: 1, item: mc('calcite') } ],
        [ { amount: 2, item: tr('calcite_dust') } ]   
    );

    // -- RAW PLATINUM FROM SHELDONITE ORE -- //
    macerator(
        st('raw_platinum'),
        2,
        200,
        [ { amount: 1, tag: 'c:sheldonite_ores' } ],
        [ { amount: 3, item: mi('raw_platinum') } ]
    );

    // -- OBSIDIAN -- //
    macerator(
        st('obsidian_dust'),
        8,
        1200,
        [ { amount: 1, item: mc('obsidian') } ],
        [ { amount: 4, item: tr('obsidian_dust') } ]
    );

    // -- RAW ZINC -- //
    macerator(
        st('raw_zinc'),
        2,
        200,
        [ { amount: 1, tag: 'c:zinc_ores' } ],
        [ { amount: 3, item: 'create:raw_zinc'} ]
    );

    // -- ZINC DUST -- //
    macerator(
        st('zinc_dust'),
        2,
        200,
        [ { amount: 1, tag: 'c:raw_zinc_ores' } ],
        [
            { amount: 1, item: tr('zinc_dust') },
            { amount: 1, item: tr('zinc_dust'), probability: 0.50 }
        ]
    );

    // -- FLAX TO STRING -- //
    macerator(
        st('flax_to_string'),
        2,
        200,
        [ { amount: 1, item: 'supplementaries:flax' } ],
        [
            { amount: 2, item: 'minecraft:string' },
            { amount: 1, item: 'minecraft:string', probability: 0.25 }
        ]
    );

    // -- STONE DUST -- //
    macerator(
        st('stone_dust'),
        2,
        200,
        [ { amount: 1, item: mc('stone') } ],
        [ { amount: 4, item: mi('stone_dust') } ]
    );

    // -- SPECTRUM POWDERS -- //
    let gemRecipes = (gemName) => {
        const DATA = [
            { inputName: `${gemName}_shard`, outputAmount: 2 },
            { inputName: `${gemName}_block`, outputAmount: 4 },
            { inputName: `small_${gemName}_bud`, outputAmount: 4 },
            { inputName: `medium_${gemName}_bud`, outputAmount: 6 },
            { inputName: `large_${gemName}_bud`, outputAmount: 8 },
            { inputName: `${gemName}_cluster`, outputAmount: 16 }
        ];

        DATA.forEach(data => {
            let gemID = data.inputName.includes('amethyst') ? mc(data.inputName) : sp(data.inputName);
            macerator(
                st(`${gemName}_powder_from_${data.inputName}`),
                2,
                200,
                [ { amount: 1, item: gemID } ],
                [ { amount: data.outputAmount, item: sp(`${gemName}_powder`) } ]
            );
        });
    }

    const GEM_NAMES = [
        'amethyst',
        'citrine',
        'topaz',
        'moonstone',
        'onyx'
    ];

    GEM_NAMES.forEach(name => {
        gemRecipes(name);
    });

    // -- QUITOXIC POWDER -- //
    macerator(
        st('quitoxic_powder'),
        2,
        200,
        [ { amount: 1, item: sp('quitoxic_reeds') } ],
        [ { amount: 2, item: sp('quitoxic_powder') } ]
    );

    // -- FIERY POWDER -- //
    macerator(
        st('fiery_powder'),
        2,
        200,
        [ { amount: 1, item: sp('blazing_crystal') } ],
        [ { amount: 16, item: sp('fiery_powder') } ]
    );

    // -- BLIZZARD POWDER -- //
    macerator(
        st('blizzard_powder'),
        2,
        200,
        [ { amount: 1, item: sp('frostbite_crystal') } ],
        [ { amount: 16, item: sp('blizzard_powder') } ]
    );

    // -- AMARANTH GRAINS -- //
    macerator(
        st('amaranth_grains'),
        2,
        200,
        [ { amount: 1, item: sp('amaranth_bushel') } ],
        [ { amount: 2, item: sp('amaranth_grains') } ]
    );

    // -- COPPER FROM VERIDIUM -- //
    macerator(
        st('copper_dust_from_veridium'),
        2,
        200,
        [ { amount: 1, item: cr('veridium') } ],
        [ 
            { amount: 1, item: mi('copper_dust') },
            { amount: 1, item: mi('copper_dust'), probability: 0.5 }
        ]
    );

    // -- ZINC DUST ROM ASURINE -- //
    macerator(
        st('zinc_dust_from_asurine'),
        2,
        200,
        [ { amount: 1, item: cr('asurine') } ],
        [ 
            { amount: 1, item: tr('zinc_dust') },
            { amount: 1, item: tr('zinc_dust'), probability: 0.5 }
        ]
    );

    // -- GOLD DUST FROM OCHRUM -- //
    macerator(
        st('gold_dust_from_asurine'),
        2,
        200,
        [ { amount: 1, item: cr('ochrum') } ],
        [
            { amount: 1, item: mi('gold_dust') },
            { amount: 1, item: mi('gold_dust'), probability: 0.5 }
        ]
    );

    // -- IRON DUST FROM CRIMSITE -- //
    macerator(
        st('iron_dust_from_crimsite'),
        2,
        200,
        [ { amount: 1, item: cr('crimsite') } ],
        [
            { amount: 1, item: mi('iron_dust') },
            { amount: 1, item: mi('iron_dust'), probability: 0.5 }
        ]
    );

    // -- QUARTZ DUST FROM RAW QUARTZ BLOCK -- //
    macerator(
        st('quartz_dust_from_quartz_block'),
        2,
        200,
        [ { amount: 1, item: 'byg:raw_quartz_block' } ],
        [
            { amount: 1, item: mi('quartz_dust') },
            { amount: 1, item: mi('quartz_dust'), probability: 0.5 }
        ]
    );

    const COLORS = [
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black',
        'white',
        'gray',
        'light_gray'
    ];
    COLORS.forEach(color => {
        // -- MACERATE SPECTRUM LOG -- //
        macerator(
            st(`${color}_log`),
            8,
            200,
            [ { amount: 1, item: sp(`${color}_log`) } ],
            [
                { amount: 2, item: sp(`${color}_pigment`) },
                { amount: 1, item: sp(`${color}_pigment`), probability: 0.5 }
            ]
        );

        // -- MACERATE SPECTRUM LEAVES -- //
        macerator(
            st(`${color}_leaves`),
            8,
            200,
            [ { amount: 1, item: sp(`${color}_leaves`) } ],
            [
                { amount: 2, item: sp(`${color}_pigment`) },
                { amount: 1, item: sp(`${color}_sapling`), probability: 0.1 }
            ]
        );
    });
    
    // -- BYG SAND FROM SANDSTONE -- //
    const BYG_SAND_COLORS = [
        'blue',
        'black',
        'white',
        'pink',
        'purple'
    ];
    
    BYG_SAND_COLORS.forEach(color => {
        macerator(
            st(`${color}_sand_from_sandstone`),
            2,
            100,
            [ { amount: 1, item: byg(`${color}_sandstone`) } ],
            [ { amount: 4, item: byg(`${color}_sand`) } ]
        );
    });
    
    // -- CERTUS QUARTZ FROM BUDS AND CLUSTER
    const CERTUS_DUST_DATA = [
        { inputName: "small_quartz_bud", outputAmount: 2 },
        { inputName: "medium_quartz_bud", outputAmount: 2 },
        { inputName: "large_quartz_bud", outputAmount: 2 },
        { inputName: "quartz_cluster", outputAmount: 8 }
    ];

    CERTUS_DUST_DATA.forEach(data=>{
        macerator(
            st(`certus_quartz_dust_from_${data.inputName}`),
            2,
            200,
            [ { amount: 1, item: ae2(data.inputName) } ],
            [ { amount: data.outputAmount, item: ae2('certus_quartz_dust') } ]
        );
    });
    
    // -- SPECTRUM RESOURCE BUDS AND CLUSTERS
    const SPECTRUM_ONE = [
        { in: "coal", out: mc("coal") },
        { in: "iron", out: mi("iron_dust") },
        { in: "gold", out: mi("gold_dust") },
        { in: "diamond", out: mc("diamond") },
        { in: "emerald", out: mc("emerald") },
        { in: "redstone", out: mc("redstone") },
        { in: "lapis", out: mc("lapis_lazuli") },
        { in: "copper", out: mi("copper_dust") },
        { in: "quartz", out: mc("quartz") },
        { in: "netherite_scrap", out: mc("netherite_scrap") },
        { in: "echo", out: mc("echo_shard") },
        { in: "prismarine", out: mc("prismarine_crystals") }
    ];

    const SPECTRUM_TWO = [
        { in: "certus_quartz", out: ae2("certus_quartz_dust") },
        { in: "fluix", out: ae2("fluix_dust")}
    ];

    let recipeForSpBudsAndClusters = (inputOutputNames, numberOfOutput) => {
        inputOutputNames.forEach(data => {
            let outName = data.out.slice(data.out.indexOf(':') + 1, data.out.length);
            macerator(
                st(`${outName}_from_small_${data.in}_bud`),
                2,
                200,
                [ { amount: 1, item: sp(`small_${data.in}_bud`) } ],
                [ { amount: numberOfOutput[0], item: data.out } ],
            );
            macerator(
                st(`${outName}_from_large_${data.in}_bud`),
                2,
                200,
                [ { amount: 1, item: sp(`large_${data.in}_bud`) } ],
                [ { amount: numberOfOutput[1], item: data.out } ],
            );
            macerator(
                st(`${outName}_from_${data.in}_cluster`),
                2,
                200,
                [ { amount: 1, item: sp(`${data.in}_cluster`) } ],
                [ { amount: numberOfOutput[2], item: data.out } ],
            );
        });
    };
    
    //output for [small bud, large bud, cluster]
    recipeForSpBudsAndClusters(SPECTRUM_ONE, [1,1,6]);
    recipeForSpBudsAndClusters(SPECTRUM_TWO, [2,2,12]);
    recipeForSpBudsAndClusters([ {in: "bismuth", out: sp("bismuth_crystal") } ], [2,2,5]);
    recipeForSpBudsAndClusters([ {in: "glowstone", out: mc("glowstone_dust") } ], [1,1,12]);
});