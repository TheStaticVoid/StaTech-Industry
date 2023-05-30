ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let st = (id) => `statech:modern_industrialization/pyrolyse_oven/${id}`;

    let pyrolyseOven = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('pyrolyse_oven'),
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


    // -- LOGS TO CHARCOAL + CREOSOTE
    pyrolyseOven(
        st('charcoal_cresote_from_logs'),
        16,
        600,
        [
            { amount: 16, tag: mc('logs') }
        ],
        [
            { amount: 16, item: mc('charcoal') }
        ],
        [
            { amount: 8000, fluid: mi('steam') }
        ],
        [
            { amount: 2000, fluid: mi('creosote') }
        ]
    );

    // -- COAL TO COKE + BENZENE -- //
    // Was originally going to be Phenol, but Benzene is basically phenol without the hydroxide
    // Maybe I will add the distillation later
    pyrolyseOven(
        st('coke_benzene_from_coal'),
        16,
        600,
        [
            { amount: 16, item: mc('coal') }
        ],
        [
            { amount: 16, item: mi('coke') }
        ],
        [
            { amount: 8000, fluid: mi('steam') }
        ],
        [
            { amount: 1000, fluid: mi('benzene') }
        ]
    );

    // -- COAL DUST TO COKE DUST + BENZENE -- //
    pyrolyseOven(
        st('coke_dust_benzene_from_coal_dusts'),
        16,
        600,
        [
            { amount: 16, tag: 'c:coal_dusts' }
        ],
        [
            { amount: 16, item: mi('coke_dust') }
        ],
        [
            { amount: 8000, fluid: mi('steam') }
        ],
        [
            { amount: 1000, fluid: mi('benzene') }
        ]
    );
});