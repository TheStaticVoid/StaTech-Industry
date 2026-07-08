// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

/* MIRecipeEvents.customCondition(event => {
    event.register("block_2back_2up", (ctx, recipe) => {
        // Get machine block entity
        const be = ctx.blockEntity;

        // Compute target block position: 2 back from front face, then +1 Y
        const targetPos = be.blockPos['relative(net.minecraft.core.Direction,int)'](
            be.orientation.facingDirection.opposite,
            2
        ).above(2);

        // Get the block state at that position
        const state = ctx.level.getBlockState(targetPos);

        // Compare with the block ID you want (replace with your desired block)
        return state.id === 'minecraft:diamond_block'; // <- Your target block
    },
    Text.of("Requires Diamond Block 2 blocks behind and 2 block above"));
}); */

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/quantum_space_probe_launcher/${id}`;
    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
     let qspl = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('quantum_space_probe_launcher'),
            eu: eu,
            duration: duration,
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    } 

    // -- SPACE PROBE -- //
     qspl(
        st('space_probe'),
        128,
        6000,
        [ { amount: 1, item: kj('space_probe'), probability: 0.75 } ],
        [ 
            { amount: 64, item: mi('deepslate_desh_ore') },
            { amount: 64, item: mi('deepslate_ostrum_ore') },
            { amount: 64, item: mi('deepslate_calorite_ore') },
            { amount: 64, item: mi('deepslate_moon_ice_ore') }
        ]
    );  
/*     e.recipes.modern_industrialization.space_probe_launcher(128, 6000)
        .itemIn("kubejs:space_probe")
        .itemOut("64x minecraft:stone")
        .customCondition("block_2back_2up")
        .id("statech:space_probe_test"); */
});