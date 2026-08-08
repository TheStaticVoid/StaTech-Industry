// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/greenhouse/${id}`;

    // This is all the saplings in the game with their corresponding logs and leaves

    const saplingLogList = [
        // Sapling                              Log                             Leaves                                  Fluid
        [mc('oak_sapling'), mc('oak_log'), mc('oak_leaves'), mc('water')],
        [
            mc('dark_oak_sapling'),
            mc('dark_oak_log'),
            mc('dark_oak_leaves'),
            mc('water'),
        ],
        [
            mc('spruce_sapling'),
            mc('spruce_log'),
            mc('spruce_leaves'),
            mc('water'),
        ],
        [mc('birch_sapling'), mc('birch_log'), mc('birch_leaves'), mc('water')],
        [
            mc('jungle_sapling'),
            mc('jungle_log'),
            mc('jungle_leaves'),
            mc('water'),
        ],
        [
            mc('acacia_sapling'),
            mc('acacia_log'),
            mc('acacia_leaves'),
            mc('water'),
        ],
        [
            mc('mangrove_propagule'),
            mc('mangrove_log'),
            mc('mangrove_leaves'),
            mc('water'),
        ],
        [
            mc('cherry_sapling'),
            mc('cherry_log'),
            mc('cherry_leaves'),
            mc('water'),
        ],
        [
            mc('crimson_fungus'),
            mc('crimson_stem'),
            mc('nether_wart_block'),
            mi('blood'),
        ],
        [
            mc('warped_fungus'),
            mc('warped_stem'),
            mc('warped_wart_block'),
            mi('blood'),
        ],
        [nm('pine_sapling'), nm('pine_log'), nm('pine_leaves'), mc('water')],
        [nm('maple_sapling'), nm('maple_log'), nm('maple_leaves'), mc('water')],
        [
            nm('red_maple_sapling'),
            nm('maple_log'),
            nm('red_maple_leaves'),
            mc('water'),
        ],
        [
            nm('walnut_sapling'),
            nm('walnut_log'),
            nm('walnut_leaves'),
            mc('water'),
        ],
        [
            nm('willow_sapling'),
            nm('willow_log'),
            nm('willow_leaves'),
            mc('water'),
        ],
        [
            nm('yellow_birch_sapling'),
            mc('birch_log'),
            nm('yellow_birch_leaves'),
            mc('water'),
        ],
        [
            nm('pale_cherry_sapling'),
            mc('cherry_log'),
            nm('pale_cherry_leaves'),
            mc('water'),
        ],
        [
            nm('autumnal_oak_sapling'),
            mc('oak_log'),
            nm('autumnal_oak_leaves'),
            mc('water'),
        ],
        [
            ap('twisted_sapling'),
            ap('twisted_log'),
            ap('twisted_leaves'),
            mc('water'),
        ],
    ];

    const spectrumSaplingList = [
        [
            sp('orange_sapling'),
            sp('orange_log'),
            sp('orange_leaves'),
            mc('water'),
        ],
        [
            sp('magenta_sapling'),
            sp('magenta_log'),
            sp('magenta_leaves'),
            mc('water'),
        ],
        [
            sp('light_blue_sapling'),
            sp('light_blue_log'),
            sp('light_blue_leaves'),
            mc('water'),
        ],
        [
            sp('yellow_sapling'),
            sp('yellow_log'),
            sp('yellow_leaves'),
            mc('water'),
        ],
        [sp('lime_sapling'), sp('lime_log'), sp('lime_leaves'), mc('water')],
        [sp('pink_sapling'), sp('pink_log'), sp('pink_leaves'), mc('water')],
        [sp('cyan_sapling'), sp('cyan_log'), sp('cyan_leaves'), mc('water')],
        [
            sp('purple_sapling'),
            sp('purple_log'),
            sp('purple_leaves'),
            mc('water'),
        ],
        [sp('blue_sapling'), sp('blue_log'), sp('blue_leaves'), mc('water')],
        [sp('brown_sapling'), sp('brown_log'), sp('brown_leaves'), mc('water')],
        [sp('green_sapling'), sp('green_log'), sp('green_leaves'), mc('water')],
        [sp('red_sapling'), sp('red_log'), sp('red_leaves'), mc('water')],
        [sp('black_sapling'), sp('black_log'), sp('black_leaves'), mc('water')],
        [sp('white_sapling'), sp('white_log'), sp('white_leaves'), mc('water')],
        [sp('gray_sapling'), sp('gray_log'), sp('gray_leaves'), mc('water')],
        [
            sp('light_gray_sapling'),
            sp('light_gray_log'),
            sp('light_gray_leaves'),
            mc('water'),
        ],
    ];

    // For every sapling, add a regular and bone meal variant of the recipe
    saplingLogList.forEach((woodType) => {
        let sapling = woodType[0];
        let log = woodType[1];
        let leaves = woodType[2];
        let fluid = woodType[3];
        let id = `${log.split(':')[1]}_from_${sapling.split(':')[1]}`;

        // Fixes duplicate ID issue between the two palm logs
        // if (log.split(':')[1] == 'palm_log' && log.split(':')[0] == 'byg')
        // id += '_byg';

        greenhouse(
            event,
            st(id),
            8,
            1200,
            [{ amount: 1, item: sapling, probability: 0.0 }],
            [
                { amount: 8, item: log },
                { amount: 16, item: leaves },
                { amount: 1, item: sapling, probability: 0.5 },
            ],
            [{ amount: 100, fluid: fluid }]
        );

        fluid = mi(`nutrient_rich_${fluid.split(':')[1]}`);
        greenhouse(
            event,
            st(`${id}_bonemeal`),
            8,
            1200,
            [{ amount: 1, item: sapling, probability: 0.0 }],
            [
                { amount: 16, item: log },
                { amount: 32, item: leaves },
                { amount: 1, item: sapling },
            ],
            [{ amount: 100, fluid: fluid }]
        );

        greenhouse(
            event,
            st(`${id}_npk`),
            8,
            1200,
            [{ amount: 1, item: sapling, probability: 0.0 }],
            [
                { amount: 32, item: log },
                { amount: 64, item: leaves },
                { amount: 2, item: sapling },
            ],
            [{ amount: 100, fluid: ei('npk_fertilizer') }]
        );
    });
    spectrumSaplingList.forEach((woodType) => {
        let sapling = woodType[0];
        let log = woodType[1];
        let leaves = woodType[2];
        let fluid = woodType[3];
        let id = `${log.split(':')[1]}_from_${sapling.split(':')[1]}`;

        // Fixes duplicate ID issue between the two palm logs
        // if (log.split(':')[1] == 'palm_log' && log.split(':')[0] == 'byg')
        // id += '_byg';

        greenhouse(
            event,
            st(id),
            8,
            1200,
            [{ amount: 1, item: sapling, probability: 0.0 }],
            [
                { amount: 8, item: log },
                { amount: 16, item: leaves },
                { amount: 1, item: sapling, probability: 0.5 },
            ],
            [{ amount: 100, fluid: fluid }],
            'spectrum:polished_onyx',
            'below'
        );

        fluid = mi(`nutrient_rich_${fluid.split(':')[1]}`);
        greenhouse(
            event,
            st(`${id}_bonemeal`),
            8,
            1200,
            [{ amount: 1, item: sapling, probability: 0.0 }],
            [
                { amount: 16, item: log },
                { amount: 32, item: leaves },
                { amount: 1, item: sapling },
            ],
            [{ amount: 100, fluid: fluid }],
            'spectrum:polished_onyx',
            'below'
        );

        greenhouse(
            event,
            st(`${id}_npk`),
            8,
            1200,
            [{ amount: 1, item: sapling, probability: 0.0 }],
            [
                { amount: 32, item: log },
                { amount: 64, item: leaves },
                { amount: 2, item: sapling },
            ],
            [{ amount: 100, fluid: ei('npk_fertilizer') }],
            'spectrum:polished_onyx',
            'below'
        );
    });
});
