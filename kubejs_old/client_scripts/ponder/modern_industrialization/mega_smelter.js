// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:mega_smelter').scene('mega_smelter', 'The Mega Smelter', 'kubejs:mega_smelter', (scene, util) => {
        let size = structureSize(5, 5, 5);
        showBasePlate(scene, size.width, size.depth);

        // Build first two layers
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 60, 'The center is hollow', PonderPalette.WHITE, [2.0, 3.0, 2.0]);

        // Build last layer
        buildUpSlice(scene, size.width, size.depth, 3, 3, 3);
        addText(scene, 120, 'The Input/Output Hatches can replace any of the Heatproof Machine Casings', PonderPalette.WHITE, [1.0, 2.0, 1.0]);
    }); 
});