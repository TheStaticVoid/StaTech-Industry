ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let cr = (id) => `create:${id}`;
    let st = (id) => `statech:modern_industrialization/mob_crusher/${id}`;

    let crusher = (id, eu, duration, item_inputs, item_outputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('mob_crusher'),
            eu: eu,
            duration: duration,
            id: id
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe);
    }

    crusher(
        'zombie',
        8,
        600,
        [ { amount: 1, item: mc('zombie_head'), probability: 0.0 } ],
        [
            { amount: 1, item: mc('rotten_flesh') },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 },
            { amount: 1, item: mc('iron_ingot'), probability: 0.025 },
            { amount: 1, item: mc('carrot'), probability: 0.025 },
            { amount: 1, item: mc('potato'), probability: 0.025 }
        ],
        [ { amount: 100, fluid: mi('blood') } ]
    );
});