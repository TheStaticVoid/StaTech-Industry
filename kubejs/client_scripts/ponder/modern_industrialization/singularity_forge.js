// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:singularity_forge').scene('singularity_forge', 'The Quasi Quantum Singularity Forge', 'kubejs:singularity_forge', (scene, util) => {
        scene.setSceneOffsetY(-8.0);
        scene.scaleSceneView(0.4);
        let size = structureSize(19, 19, 19);
        showBasePlate(scene, size.width, size.depth);

        buildUpToYFast(scene, size.width, size.depth, 3);
        addText(scene, 120, 'Hatches can only go on the same layer as the controller', PonderPalette.WHITE, [6.0, 3.0, 8.0]);

        buildUpSlice(scene, size.width, size.depth, 3, 19, 1);
        addText(scene, 120, 'You\'re going to want to use the wrench preview for this one...', PonderPalette.BLUE, [5.0, 3.0, 8.0]);
    });
})