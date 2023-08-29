// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:pyrolyse_oven').scene('pyrolyse_oven', 'The Pyrolyse Oven', 'kubejs:pyrolyse_oven', (scene, util) => {
        let size = structureSize(5, 5, 6);
        showBasePlate(scene, size.width, size.depth);

        // Build first two layers
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 60, 'The controller is in the middle.', PonderPalette.WHITE, [2.0, 3.0, 1.0]);
        addText(scene, 60, 'The center Cupronickel Coil part is hollow', PonderPalette.BLUE, [2.0, 3.0, 3.0]);

        // Build last layer
        buildUpSlice(scene, size.width, size.depth, 3, 3, 3);
        addText(scene, 120, 'The Input/Output Hatches can replace any of the Heatproof Machine Casings', PonderPalette.WHITE, [1.0, 2.0, 1.0]);
    });
});