// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:electric_blast_furnace').scene('electric_blast_furnace', 'The Electric Blast Furnace', 'kubejs:ebf_cupronickel', (scene, util) => {
        let size = structureSize(5, 6, 5);
        showBasePlate(scene, size.width, size.depth);

        // First and second layer
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 30, 'The center is hollow', PonderPalette.WHITE, [2.0, 3.0, 2.0]);

        // Last layers
        buildUpSlice(scene, size.width, size.depth, 3, 5, 3);
        addText(scene, 60, 'Hatches can go on the top or bottom rows', PonderPalette.WHITE, [2.0, 4.0, 2.0]);

        scene.world.hideSection([0, 2, 0, 5, 3, 5], Facing.EAST);
        scene.idle(20);
        scene.world.replaceBlocks([0, 2, 0, 5, 3, 5], 'modern_industrialization:kanthal_coil', false);
        scene.idle(20);
        scene.world.showSection([0, 2, 0, 5, 3, 5], Facing.WEST);

        addText(scene, 60, 'Kanthal Coils will upgrade the maximum EU that can be used in the Electric Blast Furnace', PonderPalette.WHITE, [2.0, 3.0, 2.0]);
    });
});