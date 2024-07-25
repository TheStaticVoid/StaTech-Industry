// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:${id}`;
    let ch = (id) => `chisel:${id}`;

    // Remove and replace the default chisel recipe
    e.remove({id: ch('chisel')});

    // -- CHISEL -- // 
    e.shaped(ch('chisel'), [
        ' P',
        'S '
    ],
    {
        P: '#c:iron_plates',
        S: '#c:wood_sticks'
    })
    .id(st('chisel'));

    // Add stonecutting recipes for all chisel blocks
    // -- CHISEL BLOCKS -- //
    const chisel = Ingredient.of('#chisel:chiseled_blocks').getStacks().toArray();

    chisel.forEach(item => {
        var material = item.id.split('/')[1];
        if (material === 'purpur') {  // Use vanilla purpur block
            material = 'purpur_block';
        }
        e.stonecutting(`1x ${item.id}`, `minecraft:${material}`);
    });

    // -- FACTORY BLOCKS -- //
    const factory = Ingredient.of(`#factory_blocks:chiseled_blocks`).getStacks().toArray();
  
    factory.forEach(item => {
        e.stonecutting(`1x ${item.id}`, 'factory_blocks:factory');
    });
});
