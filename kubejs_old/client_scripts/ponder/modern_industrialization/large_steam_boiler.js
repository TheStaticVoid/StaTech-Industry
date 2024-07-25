// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:large_steam_boiler').scene('large_steam_boiler', 'The Large Steam Boiler', 'kubejs:large_steam_boiler', (scene, util) => {
        let size = structureSize(5, 6, 5);
        showBasePlate(scene, size.width, size.depth);

        // First layer
        buildUpToYRegular(scene, size.width, size.depth, 1);
        addText(scene, 60, 'Bottom layer is made of Heatproof Machine Casings and hatches', PonderPalette.WHITE, [2.0, 2.0, 3.0]);

        // Second layer
        buildUpSlice(scene, size.width, size.depth, 2, 2, 3);
        addText(scene, 60, 'The center blocks are Bronze Pipe Machine Casings', PonderPalette.WHITE, [2.0, 4.0, 2.0]);

        // For last tiers
        buildUpSlice(scene, size.width, size.depth, 3, 5, 3);
    })
})