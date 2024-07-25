// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    let pc = 'spectrum:polished_calcite';
    let npc = 'spectrum:notched_polished_calcite';
    let cpc = 'spectrum:chiseled_polished_calcite';
    let pcp = 'spectrum:polished_calcite_pillar';
    let tsb = 'spectrum:topaz_structure_block';
    let csb = 'spectrum:citrine_storage_block';
    let asb = 'spectrum:amethyst_storage_block';
    let osb = 'spectrum:onyx_storage_block';

    event.create('spectrum:pedestal_all_basic').scene('pedestal_tier1', 'The Pigment Pedestal Focus Structure', 'kubejs:spectrum_pedestal_tier1', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);
        let size = structureSize(11, 6, 11);
        showBasePlate(scene, size.width, size.depth);

        // Build the first layer
        buildUpToYRegular(scene, size.width, size.depth, 1);
        addText(scene, 60, 'The center block below the pedestal can be hollow', PonderPalette.WHITE, [5.0, 2.0, 5.0]);

        // build the rest
        buildUpSlice(scene, size.width, size.depth, 2, 5, 1);
        addText(scene, 120, 'The corner pillars are one block above the base plate', PonderPalette.WHITE, [0.0, 4.0, 0.0]);

        replaceBlocks(scene, pc, [0, 1, 0], [10, 1, 10]);
        replaceBlocks(scene, npc, [0, 2, 0]);
        replaceBlocks(scene, npc, [10, 2, 0]);
        replaceBlocks(scene, npc, [0, 2, 10]);
        replaceBlocks(scene, npc, [10, 2, 10]);
        replaceBlocks(scene, pcp, [2, 2, 2]);
        replaceBlocks(scene, pcp, [8, 2, 2]);
        replaceBlocks(scene, pcp, [2, 2, 8]);
        replaceBlocks(scene, pcp, [8, 2, 8]);
        replaceBlocks(scene, pcp, [0, 3, 0]);
        replaceBlocks(scene, pcp, [10, 3, 0]);
        replaceBlocks(scene, pcp, [0, 3, 10]);
        replaceBlocks(scene, pcp, [10, 3, 10]);
        replaceBlocks(scene, tsb, [2, 3, 2]);
        replaceBlocks(scene, csb, [8, 3, 2]);
        replaceBlocks(scene, asb, [2, 3, 8]);
        replaceBlocks(scene, osb, [8, 3, 8]);
        replaceBlocks(scene, cpc, [0, 4, 0]);
        replaceBlocks(scene, cpc, [10, 4, 0]);
        replaceBlocks(scene, cpc, [0, 4, 10]);
        replaceBlocks(scene, cpc, [10, 4, 10]);

        scene.idle(10);
        addText(scene, 80, 'Alternate blocks can be useds for the structure. Feel free to mix and match', PonderPalette.WHITE, [1.0, 2.0, 5.0]);
    });
});