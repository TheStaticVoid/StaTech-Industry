// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/fusion_reactor/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let fusion = (id, eu, duration, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('fusion_reactor'),
            eu: eu,
            duration: duration
        }

        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe).id(id);
    }

    // HELIUM PLASMA + DEUTERIUM -> HYDROGEN + NEUTRONIUM 
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