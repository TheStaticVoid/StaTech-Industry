// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    let pc = 'spectrum:polished_calcite';
    let pcs = 'spectrum:polished_calcite_slab';
    let cpc = 'spectrum:chiseled_polished_calcite';
    let pcp = 'spectrum:polished_calcite_pillar';
    let fsc = 'spectrum:fusion_shrine_calcite';
    let tsb = 'spectrum:topaz_structure_block';
    let csb = 'spectrum:citrine_storage_block';
    let asb = 'spectrum:amethyst_storage_block';
    let osb = 'spectrum:onyx_storage_block';

    event.create('spectrum:fusion_shrine_basalt').scene('fusion_shrine', 'The Fusion Shrine Structure', 'kubejs:spectrum_fusion_shrine', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);
        let size = structureSize(11, 6, 11);
        showBasePlate(scene, size.width, size.depth);

        // Build the structure
        buildUpToYFast(scene, size.width, size.depth, 6);
        addText(scene, 60, 'The completed structure', PonderPalette.WHITE, [5.0, 3.0, 5.0]);
        addText(scene, 60, 'Note the slabs surrounding the base of the shrine itself', PonderPalette.BLUE, [6.0, 2.0, 4.0]);

        replaceBlocks(scene, pc, [0, 1, 0], [10, 1, 10]);
        replaceBlocks(scene, pcs, [4, 1, 4], [6, 1, 6]);
        replaceBlocks(scene, pc, [5, 1, 5]);
        replaceBlocks(scene, cpc, [3, 1, 3]);
        replaceBlocks(scene, cpc, [7, 1, 3]);
        replaceBlocks(scene, cpc, [3, 1, 7]);
        replaceBlocks(scene, cpc, [7, 1, 7]);
        replaceBlocks(scene, pc, [0, 2, 0], [10, 2, 10]);
        replaceBlocks(scene, fsc, [5, 2, 5]);
        replaceBlocks(scene, pcp, [2, 2, 2]);
        replaceBlocks(scene, pcp, [8, 2, 2]);
        replaceBlocks(scene, pcp, [2, 2, 8]);
        replaceBlocks(scene, pcp, [8, 2, 8]);
        replaceBlocks(scene, pcp, [0, 3, 0], [10, 3, 10]);
        replaceBlocks(scene, tsb, [2, 4, 2]);
        replaceBlocks(scene, csb, [2, 4, 8]);
        replaceBlocks(scene, asb, [8, 4, 2]);
        replaceBlocks(scene, osb, [8, 4, 8]);
        replaceBlocks(scene, pcs, [0, 5, 0], [10, 5, 10]);

        scene.idle(10);
        addText(scene, 80, 'Alternate blocks can be used for the structure. Feel free to mix and match', PonderPalette.WHITE, [1.0, 3.0, 5.0]);
    });
});