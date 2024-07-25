// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:large_steam_macerator').scene('large_steam_macerator', 'The Large Steam Macerator', 'kubejs:large_steam_macerator', (scene, util) => {
        let size = structureSize(5, 6, 5);
        showBasePlate(scene, size.width, size.depth);

        // First two layers
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 60, 'The center is made of Bronze Machine Pipe Casings', PonderPalette.WHITE, [2.0, 3.0, 2.0]);

        // Build the rest
        buildUpSlice(scene, size.width, size.depth, 3, 5, 3);
    });
});