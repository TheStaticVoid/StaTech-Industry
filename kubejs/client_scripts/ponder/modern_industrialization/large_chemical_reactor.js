// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:large_chemical_reactor').scene('large_chemical_reactor', 'The Large Chemical Reactor', 'kubejs:large_chemical_reactor', (scene, util) => {
        let size = structureSize(5, 5, 5);
        showBasePlate(scene, size.width, size.depth);

        // First two layers
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 60, 'The center is a PTFE Machine Pipe Casing', PonderPalette.WHITE, [2.0, 3.0, 2.0]);

        // Last layer
        buildUpSlice(scene, size.width, size.depth, 3, 3, 3);
    });
});