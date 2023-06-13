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
        st('test'),
        8,
        1200,
        [ 
            { amount: 1, item: mc('oak_sapling') },
            { amount: 1, item: mc('bone_meal'), probability: 0.25 }
        ],
        [ { amount: 100, fluid: mc('water') } ],
        [
            { amount: 8, item: mc('oak_log') },
            { amount: 2, item: mc('oak_sapling'), probability: 0.5 },
            { amount: 1, item: mc('stick'), probability: 0.1 },
            { amount: 1, item: mc('apple'), probability: 0.1 }
        ]
    );
});