// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/fusion_reactor/${id}`;

    // -- FUSION REACTOR REMOVED RECIPES -- //
    const REMOVED_RECIPE = [mi('fusion_reactor/helium_tritium')];
    REMOVED_RECIPE.forEach((id) => event.remove({ id: id }));

    // HELIUM PLASMA + DEUTERIUM -> HYDROGEN + NEUTRONIUM
    fusion(
        event,
        st('hydrogen_neutronium_from_helium_plasma_deuterium'),
        16000,
        2000,
        [
            { amount: 1000, fluid: mi('helium_plasma') },
            { amount: 1000, fluid: mi('deuterium') },
        ],
        [
            { amount: 975, fluid: mi('hydrogen') },
            { amount: 15, fluid: mi('neutronium') },
        ]
    );

    fusion(
        event,
        st('helium_plasma_from_helium_3_tritium'),
        16000,
        300,
        [
            { amount: 1000, fluid: mi('helium_3') },
            { amount: 1000, fluid: mi('tritium') },
        ],
        [
            { amount: 1000, fluid: mi('helium_plasma') },
            { amount: 1000, fluid: mi('deuterium') },
        ]
    );
});
