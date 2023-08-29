// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:steam_blast_furnace').scene('steam_blast_furnace', 'The Steam Blast Furnace', 'kubejs:steam_blast_furnace', (scene, util) => {
        let size = structureSize(5, 6, 5);
        showBasePlate(scene, size.width, size.depth);

        // First layer
        buildUpToYRegular(scene, size.width, size.depth, 1);
        addText(scene, 180, 'Fluid Input, Item Input, and Item Output Hatches can be placed in any configuration on the top and bottom layers', PonderPalette.WHITE, [1.0, 2.0, 1.0]);

        // Second layer
        buildUpSlice(scene, size.width, size.depth, 2, 2, 3);
        addText(scene, 60, 'Note that the center is hollow', PonderPalette.BLUE, [2.0, 3.0, 2.0]);

        // Third and Fourth Layer
        buildUpSlice(scene, size.width, size.depth, 3, 5, 3);
    });
});