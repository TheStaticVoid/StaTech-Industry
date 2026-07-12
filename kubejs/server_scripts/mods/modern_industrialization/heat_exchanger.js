// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/heat_exchanger/${id}`;

    const REMOVED_RECIPES = [
        mi('materials/heat_exchanger/lava')
    ];
    REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    heatExchanger(
        event,
        st('lava_power'),
        16,
        20,
        null,
        [ { amount: 1, item: mc('obsidian'), probability: 0.01 } ],
        [ 
            { amount: 10, fluid: mc('lava') },
            { amount: 250, fluid: mc('water') }
         ],
        [ { amount: 4000, fluid: mi('steam') } ]
    );

    // -- TUNGSTENSTEEL INGOT -- //
    // heatExchanger(
        // st('tungstensteel_ingot'),
        // 8,
        // 10,
        // [ { amount: 1, item: mi('tungstensteel_hot_ingot') } ],
        // [ { amount: 1, item: mi('tungstensteel_ingot') } ],
        // [ { amount: 100, fluid: mi('cryofluid') } ],
        // [
            // { amount: 65, fluid: mi('argon') },
            // { amount: 25, fluid: mi('helium') }
        // ]
    // );
});