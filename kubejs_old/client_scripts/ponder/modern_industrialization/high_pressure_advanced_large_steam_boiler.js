// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:high_pressure_advanced_large_steam_boiler').scene('high_pressure_advanced_large_steam_boiler', 'The High Pressure Advanced Large Steam Boiler', 'kubejs:high_pressure_advanced_large_steam_boiler', (scene, util) => {
        let size = structureSize(5, 7, 5);
        showBasePlate(scene, size.width, size.depth);

        // First two layers
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 60, 'The Hatches must go on the base plate', PonderPalette.WHITE, [2.0, 2.0, 1.0]);
        addText(scene, 60, 'The center blocks are Stainless Steel Pipe Machine Casing', PonderPalette.WHITE, [2.0, 3.0, 2.0]);

        // The rest of the layers
        buildUpSlice(scene, size.width, size.depth, 3, 6, 3);
    });
});