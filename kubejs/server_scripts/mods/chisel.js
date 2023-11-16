// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:chisel/${id}`;

    // Remove and replace the default chisel recipe
    event.remove({id: cs('chisel')});

    // -- CHISEL -- // 
    event.shaped(cs('chisel'), [
        ' P',
        'S '
    ],
    {
        P: '#c:iron_plates',
        S: '#c:wooden_rods'
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
        event.stonecutting(`1x ${item.id}`, `minecraft:${material}`);
    });

    // -- FACTORY BLOCKS -- //
    const factory = Ingredient.of(`#factory_blocks:chiseled_blocks`).getStacks().toArray();
  
    factory.forEach(item => {
        event.stonecutting(`1x ${item.id}`, 'factory_blocks:factory');
    });
});
