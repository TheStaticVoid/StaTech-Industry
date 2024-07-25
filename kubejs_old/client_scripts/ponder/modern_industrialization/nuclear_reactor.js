// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:nuclear_reactor').scene('nuclear_reactor', 'The Nuclear Reactor', 'kubejs:nuclear_reactor', (scene, util) => {
        let size = structureSize(7, 7, 7);
        showBasePlate(scene, size.width, size.depth);

        // First two layers
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 60, 'The internals of the multiblock are Nuclear Alloy Pipe Machine Casings', PonderPalette.WHITE, [3.0, 3.0, 4.0]);

        // Rest of the layers
        buildUpSlice(scene, size.width, size.depth, 3, 6, 3);
        addText(scene, 120, 'Nuclear Fluid and Item Hatches go on the top layer of the multiblock', PonderPalette.WHITE, [3.0, 6.0, 3.0]);
        addText(scene, 120, 'The size of the reactor can be changed in the controller. Use your MI wrench to help build it.', PonderPalette.BLUE, [3.0, 3.0, 1.0]);
    });
});