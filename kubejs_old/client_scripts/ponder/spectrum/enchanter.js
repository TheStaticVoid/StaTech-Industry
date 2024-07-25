// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    let pc = 'spectrum:polished_calcite';
    let pcs = 'spectrum:polished_calcite_slab';
    let cb = 'spectrum:item_bowl_calcite';
    let pcp = 'spectrum:polished_calcite_pillar';
    let lq = 'spectrum:liquid_crystal';
    let tcl = 'spectrum:topaz_calcite_lamp';
    let tsb = 'spectrum:topaz_storage_block';
    let ccl = 'spectrum:citrine_calcite_lamp';
    let csb = 'spectrum:citrine_storage_block';
    let acl = 'spectrum:amethyst_calcite_lamp';
    let asb = 'spectrum:amethyst_storage_block';
    let ocl = 'spectrum:onyx_calcite_lamp';
    let osb = 'spectrum:onyx_storage_block';
    let enchanter = 'spectrum:enchanter';

    event.create('spectrum:enchanter').scene('enchanter', 'The Enchanter Structure', 'kubejs:spectrum_enchanter', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);
        let size = structureSize(13, 6, 13);
        showBasePlate(scene, size.width, size.depth);

        buildUpToYRegular(scene, size.width, size.depth, 1);
        addText(scene, 60, 'The Liquid Crystal in the pools can be flowing. It does not have to be all source blocks', PonderPalette.WHITE, [2.0, 3.0, 2.0]);

        buildUpSlice(scene, size.width, size.depth, 2, 6, 3);
        addText(scene, 60, 'The completed structure', PonderPalette.WHITE, [6.0, 5.0, 6.0]);

        replaceBlocks(scene, pc, [0, 1, 0], [12, 1, 12]);
        replaceBlocks(scene, lq, [2, 1, 2], [4, 1, 4]);
        replaceBlocks(scene, lq, [8, 1, 2], [10, 1, 4]);
        replaceBlocks(scene, lq, [2, 1, 8], [4, 1, 10]);
        replaceBlocks(scene, lq, [8, 1, 8], [10, 1, 10]);
        replaceBlocks(scene, pc, [3, 1, 3]);
        replaceBlocks(scene, pc, [3, 1, 9]);
        replaceBlocks(scene, pc, [9, 1, 3]);
        replaceBlocks(scene, pc, [9, 1, 9]);
        replaceBlocks(scene, pc, [0, 2, 0], [12, 2, 12]);
        replaceBlocks(scene, pcs, [5, 2, 2], [7, 2, 2]);
        replaceBlocks(scene, pcs, [2, 2, 5], [2, 2, 7]);
        replaceBlocks(scene, pcs, [5, 2, 10], [7, 2, 10]);
        replaceBlocks(scene, pcs, [10, 2, 5], [10, 2, 7]);
        replaceBlocks(scene, pcp, [2, 2, 2], [4, 2, 4]);
        replaceBlocks(scene, pcp, [9, 2, 2], [11, 2, 4]);
        replaceBlocks(scene, pcp, [2, 2, 9], [4, 2, 11]);
        replaceBlocks(scene, pcp, [9, 2, 9], [11, 2, 11]);
        replaceBlocks(scene, pcs, [4, 3, 4], [8, 3, 8]);
        replaceBlocks(scene, pc, [5, 3, 5], [7, 3, 7]);
        replaceBlocks(scene, tcl, [3, 3, 1]);
        replaceBlocks(scene, tcl, [1, 3, 3]);
        replaceBlocks(scene, tsb, [3, 3, 3]);
        replaceBlocks(scene, ccl, [9, 3, 1]);
        replaceBlocks(scene, ccl, [11, 3, 3]);
        replaceBlocks(scene, csb, [9, 3, 3])
        replaceBlocks(scene, acl, [1, 3, 9]);
        replaceBlocks(scene, acl, [3, 3, 11]);
        replaceBlocks(scene, asb, [3, 3, 9]);
        replaceBlocks(scene, ocl, [9, 3, 11]);
        replaceBlocks(scene, ocl, [11, 3, 9]);
        replaceBlocks(scene, osb, [9, 3, 9]);
        replaceBlocks(scene, cb, [0, 4, 0], [12, 4, 12])
        replaceBlocks(scene, enchanter, [6, 4, 6]);

        
        scene.idle(10);
        addText(scene, 80, 'Alternate blocks can be used for the structure. Feel free to mix and match', PonderPalette.WHITE, [1.0, 3.0, 5.0]); 
    });
});