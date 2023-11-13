// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/distillation_tower/${id}`;

    // -- WOOD TAR -- //
    distillationTower(
        event,
        st('wood_tar'),
        48, 
        200,
        [ { amount: 1000, fluid: mi('wood_tar') } ],
        [
            { amount: 400, fluid: mi('creosote') },
            { amount: 400, fluid: mi('benzene') },
            { amount: 100, fluid: mi('toluene') },
            { amount: 100, fluid: mi('heavy_fuel') }
        ]
    );

    // -- BRINE -- //
    distillationTower(
        event,
        st('brine'),
        16,
        300,
        [ { amount: 4000, fluid: mi('salt_water') } ],
        [
            { amount: 1000, fluid: mc('water') },
            { amount: 3000, fluid: mi('brine') }
        ]
    );
});