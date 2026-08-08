// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) =>
        `statech:modern_industrialization/photosynthetic_chamber/${id}`;

    // This is all the seeds in the game with their respective outputs
    const recipeInOut = [
        // -- WHEAT -- //
        [
            mc('wheat_seeds'),
            [
                { amount: 1, item: mc('wheat') },
                { amount: 1, item: mc('wheat'), probability: 0.5 },
                { amount: 1, item: mc('wheat_seeds'), probability: 0.5 },
            ],
        ],

        // -- PUMPKIN -- //
        [
            mc('pumpkin_seeds'),
            [
                { amount: 1, item: mc('pumpkin') },
                { amount: 1, item: mc('pumpkin_seeds'), probability: 0.5 },
            ],
        ],

        // -- MELON -- //
        [
            mc('melon_seeds'),
            [
                { amount: 1, item: mc('melon') },
                { amount: 1, item: mc('melon_seeds'), probability: 0.5 },
            ],
        ],

        // -- BEETROOT -- //
        [
            mc('beetroot_seeds'),
            [
                { amount: 1, item: mc('beetroot') },
                { amount: 1, item: mc('beetroot'), probability: 0.5 },
                { amount: 1, item: mc('beetroot_seeds'), probability: 0.5 },
            ],
        ],

        // -- CARROT -- //
        [
            mc('carrot'),
            [
                { amount: 1, item: mc('carrot') },
                { amount: 1, item: mc('carrot'), probability: 0.5 },
            ],
        ],

        // -- POTATO -- //
        [
            mc('potato'),
            [
                { amount: 1, item: mc('potato') },
                { amount: 1, item: mc('potato'), probability: 0.5 },
                { amount: 1, item: mc('poisonous_potato'), probability: 0.02 },
            ],
        ],

        // -- FLAX -- //
        [
            su('flax_seeds'),
            [
                { amount: 1, item: su('flax') },
                { amount: 1, item: su('flax'), probability: 0.5 },
                { amount: 1, item: su('flax_seeds'), probability: 0.02 },
            ],
        ],

        // -- CABBAGE -- //
        [
            fd('cabbage_seeds'),
            [
                { amount: 1, item: fd('cabbage') },
                { amount: 1, item: fd('cabbage'), probability: 0.5 },
                { amount: 1, item: fd('cabbage_seeds'), probability: 0.5 },
            ],
        ],

        // -- TOMATO -- //
        [
            fd('tomato_seeds'),
            [
                { amount: 1, item: fd('tomato') },
                { amount: 1, item: fd('rotten_tomato'), probability: 0.02 },
                { amount: 1, item: fd('tomato_seeds'), probability: 0.5 },
            ],
        ],

        // -- ONION -- //
        [
            fd('onion'),
            [
                { amount: 1, item: fd('onion') },
                { amount: 1, item: fd('onion'), probability: 0.5 },
            ],
        ],

        // -- RICE -- //
        [
            fd('rice'),
            [
                { amount: 1, item: fd('rice_panicle') },
                { amount: 1, item: fd('rice_panicle'), probability: 0.5 },
                { amount: 1, item: fd('rice'), probability: 0.5 },
            ],
        ],

        // -- CACTUS -- //
        [
            mc('cactus'),
            [
                { amount: 2, item: mc('cactus') },
                { amount: 1, item: mc('cactus'), probability: 0.5 },
            ],
        ],

        // -- SUGAR CANE -- //
        [
            mc('sugar_cane'),
            [
                { amount: 2, item: mc('sugar_cane') },
                { amount: 1, item: mc('sugar_cane'), probability: 0.5 },
            ],
        ],

        // -- COCOA BEANS -- //
        [
            mc('cocoa_beans'),
            [
                { amount: 2, item: mc('cocoa_beans') },
                { amount: 2, item: mc('cocoa_beans'), probability: 0.5 },
            ],
        ],

        // -- KELP -- //
        [
            mc('kelp'),
            [
                { amount: 4, item: mc('kelp') },
                { amount: 4, item: mc('kelp'), probability: 0.5 },
            ],
        ],

        // -- BAMBOO -- //
        [
            mc('bamboo'),
            [
                { amount: 4, item: mc('bamboo') },
                { amount: 4, item: mc('bamboo'), probability: 0.5 },
            ],
        ],

        // -- VINE -- //
        [
            mc('vine'),
            [
                { amount: 1, item: mc('vine') },
                { amount: 1, item: mc('vine'), probability: 0.5 },
            ],
        ],

        // -- SWEET BERRIES -- //
        [
            mc('sweet_berries'),
            [
                { amount: 1, item: mc('sweet_berries') },
                { amount: 1, item: mc('sweet_berries'), probability: 0.5 },
            ],
        ],

        // -- GLOW BERRIES -- //
        [
            mc('glow_berries'),
            [
                { amount: 1, item: mc('glow_berries') },
                { amount: 1, item: mc('glow_berries'), probability: 0.5 },
            ],
        ],

        // -- BROWN MUSHROOM -- //
        [
            mc('brown_mushroom'),
            [
                { amount: 1, item: mc('brown_mushroom') },
                { amount: 1, item: mc('brown_mushroom'), probability: 0.5 },
            ],
        ],

        // -- RED MUSHROOM -- //
        [
            mc('red_mushroom'),
            [
                { amount: 1, item: mc('red_mushroom') },
                { amount: 1, item: mc('red_mushroom'), probability: 0.5 },
            ],
        ],
    ];

    // Create recipes for each of the items in the list
    recipeInOut.forEach((recipe) => {
        let input = recipe[0];
        let output = recipe[1];
        let namespace = input.split(':')[0];
        let itemName = input.split(':')[1];

        photoChamber(
            event,
            st(`${namespace}_${itemName}`),
            8,
            600,
            [{ amount: 1, item: input, probability: 0.0 }],
            output,
            [{ amount: 100, fluid: mc('water') }]
        );
    });

    const flowers = Ingredient.of('#minecraft:flowers')
        .except([
            '#minecraft:leaves',
            '@spectrum',
            'minecraft:chorus_flower',
            '#minecraft:saplings',
        ])
        .getStacks()
        .toArray();
    flowers.forEach((recipe) => {
        let namespace = recipe.id.split(':')[0];
        let itemName = recipe.id.split(':')[1];
        photoChamber(
            event,
            st(`${namespace}_${itemName}`),
            8,
            600,
            [{ amount: 1, item: recipe.id, probability: 0.0 }],
            [
                { amount: 1, item: recipe.id },
                { amount: 1, item: recipe.id, probability: 0.5 },
            ],
            [{ amount: 100, fluid: mc('water') }]
        );
    });

    // These use a different fluid and are omitted from the original list

    // -- NETHER WART -- //
    photoChamber(
        event,
        st('minecraft_nether_wart'),
        8,
        600,
        [{ amount: 1, item: mc('nether_wart'), probability: 0.0 }],
        [
            { amount: 1, item: mc('nether_wart') },
            { amount: 1, item: mc('nether_wart'), probability: 0.5 },
        ],
        [{ amount: 100, fluid: mc('lava') }]
    );

    // -- CHORUS FLOWER -- //
    photoChamber(
        event,
        st('minecraft_chorus_fruit'),
        8,
        600,
        [{ amount: 1, item: mc('chorus_flower'), probability: 0.0 }],
        [
            { amount: 1, item: mc('chorus_fruit') },
            { amount: 1, item: mc('chorus_fruit'), probability: 0.5 },
            { amount: 1, item: mc('chorus_flower'), probability: 0.5 },
        ],
        [{ amount: 100, fluid: mi('liquid_ender') }]
    );
});
