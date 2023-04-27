ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let st = (id) => `statech:modern_industrialization/wiremill/${id}`;

    let wiremill = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('wiremill'),
            eu: eu,
            duration: duration,
            id: id
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe);
    }

    wiremill(
        st('tungstensteel_wire'),
        2,
        400,
        [ { amount: 1, tag: 'c:tungstensteel_plates' } ],
        [ { amount: 2, item: mi('tungstensteel_wire') } ]
    );
});