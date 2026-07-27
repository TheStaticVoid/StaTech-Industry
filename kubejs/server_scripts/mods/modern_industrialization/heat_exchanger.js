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
            { amount: 125, fluid: mc('water') }
        ],
        [ { amount: 2000, fluid: mi('steam') } ]
    );

});
