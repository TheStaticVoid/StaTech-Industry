// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/core_drill/${id}`;

    coreDrill(
        event,
        st('core_fragment'),
        256,
        600,
        [ { amount: 1, item: mi('desh_drill'), probability: 0.1 } ],
        [ { amount: 1, item: kj('core_fragment') } ],
        [ { amount: 1000, fluid: mi('drilling_fluid') } ],
        [ { amount: 500, fluid: mi('core_slurry') } ]
    );
});