// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/mob_crusher/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let cr = (id) => `create:${id}`;
    let cd = (id) => `culturaldelights:${id}`;
    let ap = (id) => `architects_palette:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let crusher = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('mob_crusher'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe).id(id);
    }

    // Idk why I did it like this, but w/e
    const modelInputOutput = [
        // 0 = model, 1 = outputs, 2 = fluid

        // Zombie model
        [ 
            kj('zombie_model'),
            [
                { amount: 1, item: mc('rotten_flesh') },
                { amount: 1, item: mc('iron_ingot'), probability: 0.025 },
                { amount: 1, item: mc('carrot'), probability: 0.025 },
                { amount: 1, item: mc('potato'), probability: 0.025 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
            ],
            mi('blood')
        ],

        // Pig model
        [
            kj('pig_model'),
            [
                { amount: 1, item: mc('porkchop'), probability: 0.85 },
                { amount: 1, item: mc('bone'), probability: 0.65 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
            ],
            mi('blood')
        ],

        // Sheep model
        [
            kj('sheep_model'),
            [
                { amount: 1, item: mc('white_wool') },
                { amount: 1, item: mc('white_wool'), probability: 0.5 },
                { amount: 1, item: mc('mutton'), probability: 0.85 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
            ],
            mi('blood')
        ],

        // Cow model
        [
            kj('cow_model'),
            [
                { amount: 1, item: mc('beef') },
                { amount: 1, item: mc('beef'), probability: 0.5 },
                { amount: 1, item: mc('leather'), probability: 0.65 },
                { amount: 1, item: mc('bone'), probability: 0.5 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
            ],
            mi('blood')
        ],

        // Chicken model
        [
            kj('chicken_model'),
            [
                { amount: 1, item: mc('chicken') },
                { amount: 1, item: mc('feather') },
                { amount: 1, item: mc('feather'), probability: 0.5 },
                { amount: 1, item: mc('bone'), probability: 0.3 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.2 }
            ],
            mi('blood')
        ],

        // Squid model
        [
            kj('squid_model'),
            [
                { amount: 1, item: mc('ink_sac') },
                { amount: 1, item: mc('ink_sac'), probability: 0.5 },
                { amount: 1, item: cd('squid'), probability: 0.25 },
                { amount: 1, item: mc('glow_ink_sac'), probability: 0.01 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.3 }
            ],
            mi('blood')
        ],

        // Spider model
        [
            kj('spider_model'),
            [
                { amount: 1, item: mc('string') },
                { amount: 1, item: mc('string'), probability: 0.5 },
                { amount: 1, item: mc('spider_eye'), probability: 0.5 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
            ],
            mi('blood')
        ],

        // Creeper model
        [
            kj('creeper_model'),
            [
                { amount: 1, item: mc('gunpowder') },
                { amount: 1, item: mc('gunpowder'), probability: 0.5 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
            ],
            mi('blood')
        ],

        // Slime model
        [
            kj('slime_model'),
            [
                { amount: 1, item: mc('slime_ball') },
                { amount: 1, item: mc('slime_ball'), probability: 0.5 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
            ],
            mi('blood')
        ],

        // Ghast model
        [
            kj('ghast_model'),
            [
                { amount: 1, item: mc('ghast_tear'), probability: 0.5 },
                { amount: 1, item: mc('gunpowder'), probability: 0.75 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
            ],
            mc('lava')
        ],
        
        // Zombie Piglin model
        [
            kj('zombie_piglin_model'),
            [
                { amount: 1, item: mc('rotten_flesh') },
                { amount: 1, item: mc('rotten_flesh'), probability: 0.5 },
                { amount: 1, item: mc('gold_nugget'), probability: 0.5 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.2 }
            ],
            mc('lava')
        ],

        // Magma Cube model
        [
            kj('magma_cube_model'),
            [
                { amount: 1, item: mc('magma_cream') },
                { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
            ],
            mc('lava')
        ],
        
        // Blaze model
        [
            kj('blaze_model'),
            [
                { amount: 1, item: mc('blaze_rod'), probability: 0.4 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.4 }
            ],
            mc('lava')
        ],
        
        // Wither Skeleton model
        [
            kj('wither_skeleton_model'),
            [
                { amount: 1, item: mc('bone') },
                { amount: 1, item: mc('coal'), probability: 0.333 },
                { amount: 1, item: ap('withered_bone'), probability: 0.5 },
                { amount: 1, item: mc('wither_skeleton_skull'), probability: 0.025 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
            ],
            mc('lava')
        ],

        // Guardian model
        [
            kj('guardian_model'),
            [
                { amount: 1, item: mc('prismarine_shard') },
                { amount: 1, item: mc('prismarine_crystals'), probability: 0.8 },
                { amount: 1, item: mc('sponge'), probability: 0.01 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.8 }
            ],
            mi('blood')
        ],

        // Witch model
        [
            kj('witch_model'),
            [
                { amount: 1, item: mc('glass_bottle'), probability: 0.25 },
                { amount: 1, item: mc('glowstone_dust'), probability: 0.25 },
                { amount: 1, item: mc('redstone'), probability: 0.25 },
                { amount: 1, item: mc('spider_eye'), probability: 0.25 },
                { amount: 1, item: mc('gunpowder'), probability: 0.25 },
                { amount: 1, item: mc('sugar'), probability: 0.25 }
            ],
            mi('blood')
        ]

        // Rabbit model
        [
            kj('rabbit_model'),
            [
                { amount: 1, item: mc('rabbit') },
                { amount: 1, item: mc('rabbit_hide'), probability: 0.25 },
                { amount: 1, item: mc('rabbit_foot'), probability: 0.1 },
                { amount: 1, item: cr('experience_nugget'), probability: 0.3 }

            ],
            mi('blood')
        ]
    ];
    // Add all the recipes from the list
    modelInputOutput.forEach(modelInOut => {
        let model = modelInOut[0];
        let output = modelInOut[1];
        let fluid = modelInOut[2];

        crusher(
            st(model.split(':')[1]),
            8,
            600,
            [ { amount: 1, item: model, probability: 0.05 } ],
            output,
            [ { amount: 100, fluid: fluid } ],
            [ { amount: 150, fluid: fluid } ]
        );
    });
    
    // These are defined separately due to non-conformant liquid requirements
    // -- ENDERMAN MODEL -- //
    crusher(
        st('enderman_model'),
        8,
        600,
        [ { amount: 1, item: kj('enderman_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('ender_pearl'), probability: 0.3 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('liquid_ender') } ]
    );

    // -- SKELETON MODEL -- //
    crusher(
        st('skeleton_model'),
        8,
        600,
        [ { amount: 1, item: kj('skeleton_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('bone') },
            { amount: 1, item: mc('bone'), probability: 0.5 },
            { amount: 1, item: mc('arrow'), probability: 0.4 },
            { amount: 1, item: mc('bow'), probability: 0.1 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ]
    );

    // -- PHANTOM MODEL -- //
    crusher(
        st('phantom_model'),
        8,
        600,
        [ { amount: 1, item: kj('phantom_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('phantom_membrane'), probability: 0.5 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('liquid_ender') } ]
    );
    
});