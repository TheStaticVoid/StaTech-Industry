// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:pressurizer').scene('pressurizer', 'The Pressurizer', 'kubejs:pressurizer', (scene, util) => {
        let size = structureSize(5, 6, 5);
        showBasePlate(scene, size.width, size.depth);

        // First layer
        buildUpToYRegular(scene, size.width, size.depth, 1);
        addText(scene, 60, 'Only the Fluid Output Hatch and Energy Input Hatch are allowed on the bottom layer', PonderPalette.BLUE, [2.0, 1.0, 2.0]);

        // Rest of the layers
        buildUpSlice(scene, size.width, size.depth, 2, 5, 3);
        addText(scene, 60, 'Only the Fluid Input Hatch is allowed on the top layer', PonderPalette.BLUE, [2.0, 4.0, 2.0]);
    });
});