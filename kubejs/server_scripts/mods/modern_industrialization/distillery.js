// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/distillery/${id}`;

    // -- BRINE FROM SALT WATER -- //
    distillery(
        event,
        st('brine_from_salt_water'),
        16,
        400,
        [ { amount: 4000, fluid: mi('salt_water') } ],
        [ { amount: 3000, fluid: mi('brine') } ]
    );

    // -- WATER FROM SALT WATER -- //
    distillery(
        event,
        st('water_from_salt_water'),
        16,
        400,
        [ { amount: 4000, fluid: mi('salt_water') } ],
        [ { amount: 3500, fluid: mc('water') } ]
    );

    // -- CREOSOTE FROM WOOD TAR -- //
    distillery(
        event,
        st('creosote_from_wood_tar'),
        12,
        200,
        [ { amount: 1000, fluid: mi('wood_tar') } ],
        [ { amount: 400, fluid: mi('creosote') } ]
    );

    // -- BENZENE FROM WOOD TAR -- //
    distillery(
        event,
        st('benzene_from_wood_tar'),
        12,
        200,
        [ { amount: 1000, fluid: mi('wood_tar') } ],
        [ { amount: 400, fluid: mi('benzene') } ]
    );

    // -- TOLUENE FROM WOOD TAR -- //
    distillery(
        event,
        st('toluene_from_wood_tar'),
        12,
        200,
        [ { amount: 1000, fluid: mi('wood_tar') } ],
        [ { amount: 100, fluid: mi('toluene') } ]
    );

    // -- HEAVY FUEL FROM WOOD TAR -- //
    distillery(
        event,
        st('heavy_fuel_from_wood_tar'),
        12,
        200,
        [ { amount: 1000, fluid: mi('wood_tar') } ],
        [ { amount: 100, fluid: mi('heavy_fuel') } ]
    );
});