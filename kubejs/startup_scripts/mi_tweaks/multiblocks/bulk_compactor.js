// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let BULK_COMPACTOR;

MIMachineEvents.registerRecipeTypes(event => {
    BULK_COMPACTOR = event.register('bulk_compactor')
        .withItemInputs()
        .withItemOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 

    const compactorHatch = event.hatchOf('item_input', 'item_output', 'energy_input');
    const steelPlatedBrick = event.memberOfBlock('extended_industrialization:steel_plated_bricks');
    const steelPipeCasing = event.memberOfBlock('modern_industrialization:steel_machine_casing_pipe');
    const borosilicateGlass = event.memberOfBlock('kubejs:borosilicate_glass');
    const Block = event.memberOfBlock('modern_industrialization:desh_block');
    const bulkcompactorShape = event.layeredShape('steel', [
        [ 'bbb', ' B ', ' B ', ' b ' ],
        [ 'bDb', 'P P', 'PDP', 'bbb' ],
        [ 'b#b', ' G ', ' G ', ' b ' ]
    ])
        .key('b', steelPlatedBrick, compactorHatch)
        .key('B', steelPlatedBrick, event.noHatch())
        .key('P', steelPipeCasing, event.noHatch())
        .key('G', borosilicateGlass, event.noHatch())
        .key('D', Block, event.noHatch())
        .build();
    
    event.electric(
        // General parameters
        'Bulk Compactor', // English name
        'bulk_compactor', // internal name
        event.getRecipeType("modern_industrialization:compressor"), // recipe type
        bulkcompactorShape, // multiblock shape
		(workstations) => workstations.add([
                "modern_industrialization:bronze_compressor", 
                "modern_industrialization:steel_compressor", 
                "modern_industrialization:electric_compressor"
            ]),
        // REI Display configuration
        // e.progressBar(88, 35, 'triple_arrow'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        // itemInputs => itemInputs.addSlots(30, 27, 3, 1), itemOutputs => itemOutputs.addSlots(116, 27, 3, 1),
        // fluidInputs => fluidInputs.addSlots(30, 47, 3, 1), fluidInputs => fluidInputs.addSlots(116, 47, 3, 1),

        /* Model configuration */
        'steel', // casing of the controller
        'compressor', // overlay folder
        true, // front overlay
        true, // top overlay
		false, // side overlay
		// Batch size, EU cost multiplier
		8, 
		0.9
		
	);
});