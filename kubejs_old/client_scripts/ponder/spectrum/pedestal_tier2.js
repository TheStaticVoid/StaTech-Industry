// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {    
    let pc = 'spectrum:polished_calcite';
    let npc = 'spectrum:notched_polished_calcite';
    let cpc = 'spectrum:chiseled_polished_calcite';
    let pcp = 'spectrum:polished_calcite_pillar';
    let pcc = 'spectrum:polished_calcite_crest';
    let tsb = 'spectrum:topaz_structure_block';
    let csb = 'spectrum:citrine_storage_block';
    let asb = 'spectrum:amethyst_storage_block';
    let osb = 'spectrum:onyx_storage_block';
    let tsc = 'spectrum:topaz_chiseled_calcite';
    let ccc = 'spectrum:citrine_chiseled_calcite';
    let acc = 'spectrum:amethyst_chiseled_calcite';
    let occ = 'spectrum:onyx_chiseled_calcite';
    let pedestal = 'spectrum:pedestal_onyx';
    let tcl = 'spectrum:topaz_calcite_lamp';
    let acl = 'spectrum:amethyst_calcite_lamp';
    let ccl = 'spectrum:citrine_calcite_lamp';
    let ocl = 'spectrum:onyx_calcite_lamp';

    event.create('spectrum:pedestal_onyx').scene('pedestal_tier2', 'The Spectrum Temple', 'kubejs:spectrum_pedestal_tier2', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.6);
        let size = structureSize(15, 8, 15);
        showBasePlate(scene, size.width, size.depth);

        // Build the first layer
        buildUpToYRegular(scene, size.width, size.depth, 1);
        addText(scene, 60, 'The center block below the pedestal can be hollow', PonderPalette.WHITE, [7.0, 2.0, 7.0]);

        // Build the rest
        buildUpSlice(scene, size.width, size.depth, 2, 7, 1);
        addText(scene, 60, 'The completed structure', PonderPalette.WHITE, [7.0, 3.0, 7.0]);

        replaceBlocks(scene, pc, [0, 1, 0], [14, 1, 14]);
        replaceBlocks(scene, tsc, [6, 1, 5]);
        replaceBlocks(scene, tsc, [5, 1, 6]);
        replaceBlocks(scene, ccc, [8, 1, 5]);
        replaceBlocks(scene, ccc, [9, 1, 6]);
        replaceBlocks(scene, acc, [9, 1, 8]);
        replaceBlocks(scene, acc, [8, 1, 9]);
        replaceBlocks(scene, occ, [5, 1, 8]);
        replaceBlocks(scene, occ, [6, 1, 9]);
        replaceBlocks(scene, pcp, [0, 2, 0], [14, 2, 14]);
        replaceBlocks(scene, npc, [2, 2, 2]);
        replaceBlocks(scene, npc, [12, 2, 2]);
        replaceBlocks(scene, npc, [2, 2, 12]);
        replaceBlocks(scene, npc, [12, 2, 12]);
        replaceBlocks(scene, pedestal, [7, 2, 7]);
        replaceBlocks(scene, pcp, [0, 3, 0], [14, 3, 14]);
        replaceBlocks(scene, tcl, [5, 3, 2]);
        replaceBlocks(scene, tcl, [2, 3, 5]);
        replaceBlocks(scene, tsb, [4, 3, 4]);
        replaceBlocks(scene, acl, [9, 3, 2]);
        replaceBlocks(scene, acl, [12, 3, 5]);
        replaceBlocks(scene, asb, [10, 3, 4]);
        replaceBlocks(scene, ccl, [2, 3, 9]);
        replaceBlocks(scene, ccl, [5, 3, 12]);
        replaceBlocks(scene, csb, [4, 3, 10]);
        replaceBlocks(scene, ocl, [9, 3, 12]);
        replaceBlocks(scene, ocl, [12, 3, 9]);
        replaceBlocks(scene, osb, [10, 3, 10]);
        replaceBlocks(scene, pcp, [0, 4, 0], [14, 4, 14]);
        replaceBlocks(scene, cpc, [2, 4, 2]);
        replaceBlocks(scene, cpc, [12, 4, 2]);
        replaceBlocks(scene, cpc, [2, 4, 12]);
        replaceBlocks(scene, cpc, [12, 4, 12]);
        replaceBlocks(scene, pcp, [0, 5, 0], [14, 5, 14]);
        replaceBlocks(scene, pcc, [0, 6, 0], [14, 6, 14]);
        replaceBlocks(scene, tcl, [5, 6, 2]);
        replaceBlocks(scene, tcl, [2, 6, 5]);
        replaceBlocks(scene, tsb, [2, 6, 2]);
        replaceBlocks(scene, acl, [9, 6, 2]);
        replaceBlocks(scene, acl, [12, 6, 5]);
        replaceBlocks(scene, asb, [12, 6, 2]);
        replaceBlocks(scene, ccl, [2, 6, 9]);
        replaceBlocks(scene, ccl, [5, 6, 12]);
        replaceBlocks(scene, csb, [2, 6, 12]);
        replaceBlocks(scene, ocl, [9, 6, 12]);
        replaceBlocks(scene, ocl, [12, 6, 9]);
        replaceBlocks(scene, osb, [12, 6, 12]);
        

        scene.idle(10);
        addText(scene, 80, 'Alternate blocks can be used for the structure. Feel free to mix and match', PonderPalette.WHITE, [1.0, 2.0, 5.0]);
    });
});