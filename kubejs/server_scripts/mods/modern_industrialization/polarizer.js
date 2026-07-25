// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/polarizer/${id}`;

    const REMOVED_RECIPE = [    
        mi('materials/steel/polarizer/rod_magnetic')
    ];
    REMOVED_RECIPE.forEach(id => event.remove({id: id}));    

    // -- LOGS TO CHARCOAL + WOOD TAR -- //
    polarizer(
        event,
        st('steel_rod_magnetic'),
        8,
        200,
        [
            { amount: 1, item: mi('steel_rod') },
            { amount: 1, item: mc('redstone') }
        ],
        [ { amount: 1, item: mi('steel_rod_magnetic') } ],
    ); 

});