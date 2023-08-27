// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:heat_exchanger').scene('heat_exchanger', 'The Heat Exchanger', 'kubejs:heat_exchanger', (scene, util) => {
        let size = structureSize(5, 5, 7);
        showBasePlate(scene, size.width, size.depth);

        // Build
        buildUpToYRegular(scene, size.width, size.depth, size.height);
        addText(scene, 60, 'Input Hatches go on the right side (always from your perspective', PonderPalette.WHITE, [1.0, 2.0, 1.0]);
        addText(scene, 60, 'Output Hatches go on the left side (always from your perspective)', PonderPalette.WHITE, [3.0, 2.0, 1.0]);
        addText(scene, 60, 'Energy Input always goes along the center line', PonderPalette.WHITE, [2.0, 4.0, 1.0]);

        // Rotate 180
        rotateScene(scene, 180);

        addText(scene, 60, 'Input Hatch still on the right side (from your perspective)', PonderPalette.WHITE, [3.0, 1.0, 5.0]);
        addText(scene, 60, 'Output Hatch still on the left side (from your perspective)', PonderPalette.WHITE, [1.0, 1.0, 5.0]);
    });
});