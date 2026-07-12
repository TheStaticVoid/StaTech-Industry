// -----------------------------------------
// CREATED BY STATIC AND DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------
const chisel = Ingredient.of('@chisel').except('chisel:chisel').getStacks().toArray();
const factory = Ingredient.of(`@factory_blocks`).getStacks().toArray();

ServerEvents.tags('item', event => {

    // -- TAGGING FOR RECIPES -- //
    chisel.forEach(item => {
        var blocks = item.id.split('/')[1];
        event.add(`chisel:chiseled_${blocks}`, `${item.id}`)
        event.add(`chisel:chiseled_${blocks}`, `minecraft:${blocks}`)
    })

    factory.forEach(item => {
        event.add(`factory_blocks:factory_blocks`, `${item.id}`)
    })
}); 

ServerEvents.recipes(event => {

    // Add stonecutting recipes for all chisel blocks
    // -- CHISEL BLOCKS -- //
    chisel.forEach(item => {
        var material = item.id.split('/')[1];
        var result = item.id.split('/')[0];
        event.stonecutting(`1x ${result}/${material}`, `#chisel:chiseled_${material}`);
    });

    // -- FACTORY BLOCKS -- //  
    factory.forEach(item => {
        event.stonecutting(`1x ${item.id}`, '#factory_blocks:factory_blocks');
    }); 
});
