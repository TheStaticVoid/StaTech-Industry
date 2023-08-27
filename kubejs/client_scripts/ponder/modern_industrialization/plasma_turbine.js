// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:plasma_turbine').scene('plasma_turbine', 'The Plasma Turbine', 'kubejs:plasma_turbine', (scene, util) => {
        let size = structureSize(5, 5, 6);
        showBasePlate(scene, size.width, size.depth);
        
        // Build
        buildUpToYRegular(scene, size.width, size.depth, 4);
        addText(scene, 60, 'Fluid Input Hatches can only go on the front', PonderPalette.WHITE, [2.0, 1.0, 1.0]);

        // Rotate 180
        rotateScene(scene, 180);
        addText(scene, 60, 'The Energy Output Hatch goes in the back middle block', PonderPalette.BLUE, [2.0, 2.0, 4.0]);
    });
});