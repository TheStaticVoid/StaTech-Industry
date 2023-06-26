ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let st = (id) => `statech:modern_industrialization/fusion_reactor/${id}`;

    // const REMOVED_RECIPES = [
    //     mi('fusion_reactor/deuterium_deuterium'),
    //     mi('fusion_reactor/helium_helium'),
    // ];
    // REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    let fusion = (id, eu, duration, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('fusion_reactor'),
            eu: eu,
            duration: duration,
            id: id
        }

        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe);
    }

    fusion(
        st('hydrogen_neutronium_from_helium_plasma_deuterium'),
        16000,
        2000,
        [
            { amount: 1000, fluid: mi('helium_plasma') },
            { amount: 1000, fluid: mi('deuterium') }
        ],
        [
            { amount: 975, fluid: mi('hydrogen') },
            { amount: 15, fluid: mi('neutronium') }
        ]
    );
});