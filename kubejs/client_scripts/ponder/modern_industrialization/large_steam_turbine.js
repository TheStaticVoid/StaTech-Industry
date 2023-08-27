// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:large_steam_turbine').scene('large_steam_turbine', 'The Large Steam Turbine', 'kubejs:large_steam_turbine', (scene, util) => {
        let size = structureSize(5, 5, 6);
        showBasePlate(scene, size.width, size.depth);

        // Build the layers
        buildUpToYRegular(scene, size.width, size.depth, 4);
        addText(scene, 60, 'The Fluid Input Hatch must go in the front of the multiblock', PonderPalette.WHITE, [1.0, 2.0, 1.0]);

        // Rotate 180
        rotateScene(scene, 180);
        addText(scene, 60, 'The Energy Output Hatch goes in the back middle block', PonderPalette.WHITE, [2.0, 2.0, 4.0]);
    });
});