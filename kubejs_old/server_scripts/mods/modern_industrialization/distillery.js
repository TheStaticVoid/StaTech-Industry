// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    let st = (id) => `statech:modern_industrialization/distillery/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let distillery = (id, eu, duration, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('distillery'),
            eu: eu,
            duration: duration
        }

        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;
        
        e.custom(newRecipe).id(id);
    }

    // -- BRINE FROM SALT WATER -- //
    distillery(
        st('brine_from_salt_water'),
        16,
        400,
        [ { amount: 4000, fluid: mi('salt_water') } ],
        [ { amount: 3000, fluid: mi('brine') } ]
    );

    // -- WATER FROM SALT WATER -- //
    distillery(
        st('water_from_salt_water'),
        16,
        400,
        [ { amount: 4000, fluid: mi('salt_water') } ],
        [ { amount: 3500, fluid: mc('water') } ]
    );

    // -- CREOSOTE FROM WOOD TAR -- //
    distillery(
        st('creosote_from_wood_tar'),
        12,
        200,
        [ { amount: 1000, fluid: mi('wood_tar') } ],
        [ { amount: 400, fluid: mi('creosote') } ]
    );

    // -- BENZENE FROM WOOD TAR -- //
    distillery(
        st('benzene_from_wood_tar'),
        12,
        200,
        [ { amount: 1000, fluid: mi('wood_tar') } ],
        [ { amount: 400, fluid: mi('benzene') } ]
    );

    // -- TOLUENE FROM WOOD TAR -- //
    distillery(
        st('toluene_from_wood_tar'),
        12,
        200,
        [ { amount: 1000, fluid: mi('wood_tar') } ],
        [ { amount: 100, fluid: mi('toluene') } ]
    );

    // -- HEAVY FUEL FROM WOOD TAR -- //
    distillery(
        st('heavy_fuel_from_wood_tar'),
        12,
        200,
        [ { amount: 1000, fluid: mi('wood_tar') } ],
        [ { amount: 100, fluid: mi('heavy_fuel') } ]
    );
});