ServerEvents.recipes(e => {
    let st = (id) => `statech:modern_industrialization/greenhouse/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    let greenhouse = (id, eu, duration, item_inputs, fluid_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('greenhouse'),
            eu: eu,
            duration: duration,
            id: id
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;

        e.custom(newRecipe);
    }

    greenhouse(
        st('oak_sapling'),
        8,
        1200,
        [ 
            { amount: 1, item: mc('oak_sapling'), probability: 0.0 },
            { amount: 1, item: mc('bone_meal'), probability: 0.1 }
        ],
        [ { amount: 100, fluid: mc('water') } ],
        [
            { amount: 8, item: mc('oak_log') },
            { amount: 1, item: mc('oak_sapling'), probability: 0.5 },
            { amount: 1, item: mc('stick'), probability: 0.1 },
            { amount: 1, item: mc('apple'), probability: 0.1 }
        ]
    );

    greenhouse(
        st('dark_oak_sapling'),
        8,
        2400,
        [
            { amount: 1, item: mc('dark_oak_sapling'), probability: 0.0 },
            { amount: 1, item: mc('bone_meal'), probability: 0.1 }
        ],
        [ { amount: 100, fluid: mc('water') } ],
        [
            { amount: 16, item: mc('dark_oak_log') },
            { amount: 1, item: mc('dark_oak_sapling'), probability: 0.5 },
            { amount: 1, item: mc('stick'), probability: 0.1 },
            { amount: 1, item: mc('apple'), probability: 0.1 }
        ]
    );

    greenhouse(
        st('spruce_sapling'),
        8,
        1200,
        [
            { amount: 1, item: mc('spruce_sapling'), probability: 0.0 },
            { amount: 1, item: mc('bone_meal'), probability: 0.1 }
        ],
        [ { amount: 100, fluid: mc('water') } ],
        [ 
            { amount: 8, item: mc('spruce_log') },
            { amount: 1, item: mc('spruce_sapling'), probability: 0.5 },
            { amount: 1, item: mc('stick'), probability: 0.1 }
        ]
    );

    greenhouse(
        st('birch_sapling'),
        8,
        1200,
        [
            { amount: 1, item: mc('birch_sapling'), probability: 0.0 },
            { amount: 1, item: mc('bone_meal'), probability: 0.1 }
        ],
        [ { amount: 100, fluid: mc('water') } ],
        [
            { amount: 8, item: mc('birch_log') },
            { amount: 1, item: mc('birch_sapling'), probability: 0.5 },
            { amount: 1, item: mc('stick'), probability: 0.1 }
        ]
    );

    greenhouse(
        st('jungle_sapling'),
        8,
        3600,
        [
            { amount: 1, item: mc('jungle_sapling'), probability: 0.0 },
            { amount: 1, item: mc('bone_meal'), probability: 0.1 }
        ],
        [ { amount: 100, fluid: mc('water') } ],
        [
            { amount: 24, item: mc('jungle_log') },
            { amount: 1, item: mc('jungle_sapling'), probability: 0.5 },
            { amount: 1, item: mc('stick'), probability: 0.1 }
        ]
    );

    greenhouse(
        st('acacia_sapling'),
        8,
        1200,
        [
            { amount: 1, item: mc('acacia_sapling'), probability: 0.0 },
            { amount: 1, item: mc('bone_meal'), probability: 0.1 }
        ],
        [ { amount: 100, fluid: mc('water') } ],
        [ 
            { amount: 8, item: mc('acacia_log') },
            { amount: 1, item: mc('acacia_sapling'), probability: 0.5 },
            { amount: 1, item: mc('stick'), probability: 0.1 }
        ]
    );

    greenhouse(
        st('mangrove_propagule'),
        8,
        2400,
        [
            { amount: 1, item: mc('mangrove_propagule'), probability: 0.0 },
            { amount: 1, item: mc('bone_meal'), probability: 0.1 }
        ],
        [ { amount: 100, fluid: mc('water') } ],
        [
            { amount: 16, item: mc('mangrove_log') },
            { amount: 1, item: mc('mangrove_propagule'), probability: 0.5 },
            { amount: 1, item: mc('stick'), probability: 0.1 }
        ]
    );
});