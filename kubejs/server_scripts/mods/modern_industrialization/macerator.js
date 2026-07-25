// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/macerator/${id}`;

    // -- WHEAT DOUGH -- //
    macerator(
        event,
        st('wheat_flour'),
        2,
        200,
        [ { amount: 1, item: mc('wheat') } ],
        [ { amount: 2, item: cr('wheat_flour') } ]
    );

    // -- CALCITE DUST FROM LIMESTONE -- //
    macerator(
        event,
        st('calcite_dust_from_limestone'),
        8,
        100,
        [ { amount: 1, item: cr('limestone') } ],
        [ { amount: 2, item: mi('calcite_dust') } ]
    );

    // -- CALCITE DUST FROM CALCITE -- //
    macerator(
        event,
        st('calcite_dust_from_calcite'),
        8,
        100,
        [ { amount: 1, item: mc('calcite') } ],
        [ { amount: 2, item: mi('calcite_dust') } ]   
    );

    // -- OBSIDIAN -- //
    macerator(
        event,
        st('obsidian_dust'),
        8,
        1200,
        [ { amount: 1, item: mc('obsidian') } ],
        [ { amount: 4, item: cr('powdered_obsidian') } ]
    );

    // -- RAW ZINC -- //
    macerator(
        event,
        st('raw_zinc'),
        2,
        200,
        [ { amount: 1, tag: 'c:ores/zinc' } ],
        [ { amount: 3, item: 'create:raw_zinc'} ]
    );

    // -- ZINC DUST -- //
    macerator(
        event,
        st('zinc_dust'),
        2,
        200,
        [ { amount: 1, tag: 'c:raw_materials/zinc' } ],
        [
            { amount: 1, item: mi('zinc_dust') },
            { amount: 1, item: mi('zinc_dust'), probability: 0.50 }
        ]
    );

    // -- FLAX TO STRING -- //
    macerator(
        event,
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
        event,
        st('stone_dust'),
        2,
        200,
        [ { amount: 1, item: mc('stone') } ],
        [ { amount: 4, item: mi('stone_dust') } ]
    );

       // -- TUFF DUST -- //
    macerator(
        event,
        st('tuff_dust'),
        2,
        100,
        [ { amount: 1, item: mc('tuff') } ],
        [ { amount: 4, item: mi('tuff_dust') } ]
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
                event,
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
        event,
        st('quitoxic_powder'),
        2,
        200,
        [ { amount: 1, item: sp('quitoxic_reeds') } ],
        [ { amount: 2, item: sp('quitoxic_powder') } ]
    ); 

    // -- INCANDESCENT ESSENCE -- //
    macerator(
        event,
        st('incandescent_essence'),
        2,
        200,
        [ { amount: 1, item: sp('blazing_crystal') } ],
        [ { amount: 16, item: sp('incandescent_essence') } ]
    );

    // -- FROSTBITE ESSENCE -- //
    macerator(
        event,
        st('frostbite_essence'),
        2,
        200,
        [ { amount: 1, item: sp('frostbite_crystal') } ],
        [ { amount: 16, item: sp('frostbite_essence') } ]
    );

    // -- AMARANTH GRAINS -- //
    macerator(
        event,
        st('amaranth_grains'),
        2,
        200,
        [ { amount: 1, item: sp('amaranth_bushel') } ],
        [ { amount: 2, item: sp('amaranth_grains') } ]
    );

    // -- COPPER FROM VERIDIUM -- //
    macerator(
        event,
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
        event,
        st('zinc_dust_from_asurine'),
        2,
        200,
        [ { amount: 1, item: cr('asurine') } ],
        [ 
            { amount: 1, item: mi('zinc_dust') },
            { amount: 1, item: mi('zinc_dust'), probability: 0.5 }
        ]
    ); 

    // -- GOLD DUST FROM OCHRUM -- //
    macerator(
        event,
        st('gold_dust_from_ochrum'),
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
        event,
        st('iron_dust_from_crimsite'),
        2,
        200,
        [ { amount: 1, item: cr('crimsite') } ],
        [
            { amount: 1, item: mi('iron_dust') },
            { amount: 1, item: mi('iron_dust'), probability: 0.5 }
        ]
    );

    // -- QUARTZ DUST FROM QUARTZITE -- //
    macerator(
        event,
        st('quartz_dust_from_quartzite'),
        2,
        400,
        [ { amount: 3, item: 'nomansland:quartzite' } ],
        [
            { amount: 2, item: mi('quartz_dust') },
            { amount: 4, item: mi('calcite_dust') }
        ]
    );

    // -- ENTRO DUST FROM ENTRO CRYSTAL -- //
    macerator(
        event,
        st('entro_dust_from_entro_crystal'),
        2,
        400,
        [ { amount: 1, item: ea('entro_crystal') } ],
        [ { amount: 1, item: ea('entro_dust') } ]
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
            event,
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
            event,
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
    
    
    // -- CERTUS QUARTZ FROM BUDS AND CLUSTER
     const CERTUS_DUST_DATA = [
        { inputName: "small_quartz_bud", outputAmount: 2 },
        { inputName: "medium_quartz_bud", outputAmount: 2 },
        { inputName: "large_quartz_bud", outputAmount: 2 },
        { inputName: "quartz_cluster", outputAmount: 8 }
    ];

    CERTUS_DUST_DATA.forEach(data=>{
        macerator(
            event,
            st(`certus_quartz_dust_from_${data.inputName}`),
            2,
            200,
            [ { amount: 1, item: ae(data.inputName) } ],
            [ { amount: data.outputAmount, item: ae('certus_quartz_dust') } ]
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

/*     const SPECTRUM_TWO = [
        { in: "certus_quartz", out: ae("certus_quartz_dust") },
        { in: "fluix", out: ae("fluix_dust")}
    ];
 */
     let recipeForSpBudsAndClusters = (inputOutputNames, numberOfOutput) => {
        inputOutputNames.forEach(data => {
            let outName = data.out.slice(data.out.indexOf(':') + 1, data.out.length);
            macerator(
                event,
                st(`${outName}_from_small_${data.in}_bud`),
                2,
                200,
                [ { amount: 1, item: sp(`small_${data.in}_bud`) } ],
                [ { amount: numberOfOutput[0], item: data.out } ],
            );
            macerator(
                event,
                st(`${outName}_from_large_${data.in}_bud`),
                2,
                200,
                [ { amount: 1, item: sp(`large_${data.in}_bud`) } ],
                [ { amount: numberOfOutput[1], item: data.out } ],
            );
            macerator(
                event,
                st(`${outName}_from_${data.in}_cluster`),
                2,
                200,
                [ { amount: 1, item: sp(`${data.in}_cluster`) } ],
                [ { amount: numberOfOutput[2], item: data.out } ],
            );
        });
    };
    
   //  output for [small bud, large bud, cluster]

    recipeForSpBudsAndClusters(SPECTRUM_ONE, [1,1,6]);
    recipeForSpBudsAndClusters([ {in: "bismuth", out: sp("bismuth_crystal") } ], [2,2,5]);
    recipeForSpBudsAndClusters([ {in: "glowstone", out: mc("glowstone_dust") } ], [1,1,12]);  
});