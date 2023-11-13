// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/heat_exchanger/${id}`;

    // -- TUNGSTENSTEEL INGOT -- //
    heatExchanger(
        event,
        st('tungstensteel_ingot'),
        8,
        10,
        [ { amount: 1, item: tr('hot_tungstensteel_ingot') } ],
        [ { amount: 1, item: tr('tungstensteel_ingot') } ],
        [ { amount: 100, fluid: mi('cryofluid') } ],
        [
            { amount: 65, fluid: mi('argon') },
            { amount: 25, fluid: mi('helium') }
        ]
    );
});