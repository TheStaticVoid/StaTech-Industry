// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/singularity_forge/${id}`;

    // -- SINGULARITY -- //
    singularityForge(
        event,
        st('singularity'),
        8192,
        1200,
        [ 
            { amount: 64, item: mi('nuke') },
            { amount: 1, item: mi('ultradense_metal_ball') }
        ],
        [ { amount: 1, item: mi('singularity') } ],
        [ { amount: 1000, fluid: mi('neutronium') } ]
    );
});