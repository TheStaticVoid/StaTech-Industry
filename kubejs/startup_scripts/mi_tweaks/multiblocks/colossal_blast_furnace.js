// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let COLOSSAL_BLAST_FURNACE;

MIMachineEvents.registerRecipeTypes(event => {
    COLOSSAL_BLAST_FURNACE = event.register('colossal_blast_furnace')
        .withItemInputs()
        .withItemOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
  // Hatches - define these based on your machine's needs
  const noHatch = event.noHatch();
  const multiblockHatch = event.hatchOf( 'item_input', 'item_output', 'fluid_input', 'fluid_output', 'energy_input' );
  // Block Members
  const modernIndustrializationOstrumMachineCasing = event.memberOfBlock('modern_industrialization:ostrum_machine_casing');
  const modernIndustrializationCaloriteMachineCasingPipe = event.memberOfBlock('modern_industrialization:calorite_machine_casing_pipe');
  const kubejsGlowingCaloritePillar = event.memberOfBlock('kubejs:glowing_calorite_pillar');
  const modernIndustrializationTungstensteelCoil = event.memberOfBlock('modern_industrialization:tungstensteel_coil');
  const modernIndustrializationCaloriteMachineCasing = event.memberOfBlock('modern_industrialization:calorite_machine_casing');
  const colossalBlastFurnaceShape = event.layeredShape('modern_industrialization:calorite_machine_casing', [
    [' eee ','     ','     ','     ',' AeA ','     ','     '],
    ['AeBeA','C D C','C D C','C D C','AABAA',' C C ',' A A '],
    ['ABEBA',' DDD ',' DDD ',' DDD ','ABBBA','  D  ',' AeA '],
    ['BEEEB','DD DD','DD DD','DD DD','BB BB',' DDD ',' eee '],
    ['ABEBA',' DDD ',' DDD ',' DDD ','ABBBA','  D  ',' AeA '],
    ['AeBeA','C D C','C D C','C D C','AABAA',' C C ',' A A '],
    [' e#e ','     ','     ','     ',' AeA ','     ','     ']
  ])
    .key('A', modernIndustrializationOstrumMachineCasing, noHatch)
    .key('B', modernIndustrializationCaloriteMachineCasingPipe, noHatch)
    .key('C', kubejsGlowingCaloritePillar, noHatch)
    .key('D', modernIndustrializationTungstensteelCoil, noHatch)
    .key('E', modernIndustrializationCaloriteMachineCasing, noHatch)
    .key('e', modernIndustrializationCaloriteMachineCasing, multiblockHatch)
    .build();

    event.electric(
        // General parameters
        'Colossal Blast Furnace', // English name
        'colossal_blast_furnace', // internal name
        event.getRecipeType("modern_industrialization:blast_furnace"), // recipe type
        colossalBlastFurnaceShape, // multiblock shape
		(workstations) => workstations.add([
                "modern_industrialization:electric_blast_furnace_cupronickel_coil", 
                "modern_industrialization:electric_blast_furnace_kanthal_coil", 
                "modern_industrialization:electric_blast_furnace_tungstensteel_coil", 
                "modern_industrialization:steam_blast_furnace"
            ]),
        // REI Display configuration
        // e.progressBar(88, 35, 'triple_arrow'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        // itemInputs => itemInputs.addSlots(30, 27, 3, 1), itemOutputs => itemOutputs.addSlots(116, 27, 3, 1),
        // fluidInputs => fluidInputs.addSlots(30, 47, 3, 1), fluidInputs => fluidInputs.addSlots(116, 47, 3, 1),

        /* Model configuration */
        'modern_industrialization:calorite_machine_casing', // casing of the controller
        'electric_blast_furnace', // overlay folder
        true, // front overlay
        false, // top overlay
		false, // side overlay
		// Batch size, EU cost multiplier
		16,
		0.80
		
	);
});