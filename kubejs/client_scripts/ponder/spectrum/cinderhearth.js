// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    let pc = 'spectrum:polished_calcite';
    let cpc = 'spectrum:chiseled_polished_calcite';
    let pcc = 'spectrum:polished_calcite_crest';
    let lava = 'minecraft:lava';
    let glass = 'minecraft:glass';
    let air = 'minecraft:air';

    event.create('spectrum:cinderhearth').scene('cinderhearth', 'The Cinderhearth Structure', 'kubejs:spectrum_cinderhearth', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);
        let size = structureSize(7, 5, 6);
        showBasePlate(scene, size.width, size.depth);

        buildUpToYRegular(scene, size.width, size.depth, 5);
        addText(scene, 60, 'The completed structure', PonderPalette.WHITE, [3.0, 5.0, 3.0]);

        replaceBlocks(scene, pc, [0, 1, 0], [6, 1, 5]);
        replaceBlocks(scene, pc, [0, 2, 0], [6, 2, 5]);
        replaceBlocks(scene, lava, [2, 2, 2], [4, 2, 3]);
        replaceBlocks(scene, pc, [0, 3, 0], [6, 3, 5]);
        replaceBlocks(scene, pcc, [1, 3, 2], [1, 3, 3]);
        replaceBlocks(scene, pcc, [5, 3, 2], [5, 3, 3]);
        replaceBlocks(scene, glass, [2, 3, 2], [4, 3, 3]);
        replaceBlocks(scene, air, [3, 3, 3]);
        replaceBlocks(scene, pcc, [2, 3, 4]);
        replaceBlocks(scene, pcc, [4, 3, 4]);
        replaceBlocks(scene, cpc, [1, 4, 4], [5, 4, 4]);

        scene.idle(10);
        addText(scene, 80, 'Alternate blocks can be used for the structure. Feel free to mix and match', PonderPalette.WHITE, [1.0, 3.0, 5.0]);
    });
})