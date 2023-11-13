// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/fusion_reactor/${id}`;

    // HELIUM PLASMA + DEUTERIUM -> HYDROGEN + NEUTRONIUM 
    fusion(
        event,
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