// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:coke_oven').scene('coke_oven', 'The Coke Oven', 'kubejs:coke_oven', (scene, util) => {
        let size = structureSize(5, 5, 5);
        showBasePlate(scene, size.width, size.depth);

        // First Layer
        buildUpToYRegular(scene, size.width, size.depth, 2);
        addText(scene, 160, 'Fluid Input, Fluid Output, Item Input, and Item Output hatches can be placed in any configuration on the top and bottom layers', PonderPalette.WHITE, [1.0, 2.0, 1.0]);

        // Second Layer
        buildUpSlice(scene, size.width, size.depth, 2, 2, 3);
        addText(scene, 60, 'Note that the center is hollow', PonderPalette.BLUE, [2.0, 3.0, 2.0]);

        // Third Layer
        buildUpSlice(scene, size.width, size.depth, 3, 3, 3);
        addText(scene, 60, 'Do not fill in the middle block', PonderPalette.BLUE, [2.0, 4.0, 2.0]);
    });
});