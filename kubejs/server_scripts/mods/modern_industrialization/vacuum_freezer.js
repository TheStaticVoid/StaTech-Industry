ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let st = (id) => `statech:modern_industrialization/vacuum_freezer/${id}`;

    let vacuumFreezer = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('vacuum_freezer'),
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
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;
        
        e.custom(newRecipe);
    }

    // -- TUNGSTENSTEEL INGOT -- //
    vacuumFreezer(
        st('tungstensteel_ingot'),
        64,
        600,
        [
            { amount: 1, item: tr('hot_tungstensteel_ingot') }
        ],
        [
            { amount: 1, item: tr('tungstensteel_ingot') }
        ],
        null,
        null
    );
});