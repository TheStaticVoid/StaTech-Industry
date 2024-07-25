// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:oil_drilling_rig').scene('oil_drilling_rig', 'The Oil Drilling Rig', 'kubejs:oil_drilling_rig', (scene, util) => {
        scene.setSceneOffsetY(-3.0);
        scene.scaleSceneView(0.65);
        let size = structureSize(7, 12, 7);
        showBasePlate(scene, size.width, size.depth);

        // First three layers
        buildUpToYRegular(scene, size.width, size.depth, 5);
        addText(scene, 60, 'This makes up the base of the Drilling Rig', PonderPalette.WHITE, [3.0, 5.0, 3.0]);

        // Last six layers
        buildUpSlice(scene, size.width, size.depth, 5, 12, 1);
        addText(scene, 120, 'Hatches can only go on the same level as the controller', PonderPalette.BLUE, [2.0, 6.0, 2.0]);
    });
})