// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:vacuum_freezer').scene('vacuum_freezer', 'The Vacuum Freezer', 'kubejs:vacuum_freezer', (scene, util) => {
        let size = structureSize(5, 6, 5);
        showBasePlate(scene, size.width, size.depth);

        // First two layers
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 60, 'The center is hollow', PonderPalette.WHITE, [2.0, 4.0, 2.0]);

        // Last layers
        buildUpSlice(scene, size.width, size.depth, 3, 5, 3);
    });
});