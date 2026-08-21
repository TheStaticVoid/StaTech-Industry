// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------


let MACROTHERMIC_CONFLUENCE_UNIT;

MIMachineEvents.registerRecipeTypes((event) => {
    MACROTHERMIC_CONFLUENCE_UNIT = event
        .register('macrothermic_confluence_unit')
        .withItemInputs()
        .withFluidInputs()
        .withFluidOutputs()
        .withItemOutputs();
});



MITweaksMachineEvents.registerBatchMultiblocks((event) => {
  const noHatch = event.noHatch();
  const inputFluidHatches = event.hatchOf('fluid_input');
  const outputFluidHatches = event.hatchOf('fluid_output');
  const inputItemHatches = event.hatchOf('item_input', 'energy_input');
  const outputItemHatches = event.hatchOf('item_output', 'energy_input');
  const energyHatches = event.hatchOf('energy_input');

  const modernIndustrializationOstrumMachineCasingPipe = event.memberOfBlock('modern_industrialization:ostrum_machine_casing_pipe');
  const modernIndustrializationHeatproofMachineCasing = event.memberOfBlock('modern_industrialization:heatproof_machine_casing');
  const modernIndustrializationFrostproofMachineCasing = event.memberOfBlock('modern_industrialization:frostproof_machine_casing');
  const macrothermicConfluenceUnitShape = event.layeredShape('modern_industrialization:ostrum_machine_casing_pipe', [
    ['           ','oBB AOA CCi','oBBAAOAACCi','oBB AOA CCi','           '],
    [' BBAAOAACC ','B  BAAAC  C','B  BAAAC  C','B  BAAAC  C',' BBAAOAACC '],
    [' BBAAeAACC ','B  BAAAC  C','B  BAAAC  C','B  BAAAC  C',' BBAAeAACC '],
    [' BBAAIAACC ','B  BAAAC  C','B  BAAAC  C','B  BAAAC  C',' BBAAIAACC '],
    ['           ','iBB AIA CCo','iBBAA#AACCo','iBB AIA CCo','           ']
  ])
    .key('A', modernIndustrializationOstrumMachineCasingPipe, noHatch)
    .key('i', modernIndustrializationOstrumMachineCasingPipe, inputFluidHatches)
    .key('o', modernIndustrializationOstrumMachineCasingPipe, outputFluidHatches)
    .key('I', modernIndustrializationOstrumMachineCasingPipe, inputItemHatches)
    .key('O', modernIndustrializationOstrumMachineCasingPipe, outputItemHatches)
    .key('e', modernIndustrializationOstrumMachineCasingPipe, energyHatches)
    .key('B', modernIndustrializationHeatproofMachineCasing, noHatch)
    .key('C', modernIndustrializationFrostproofMachineCasing, noHatch)
    .build();

    event.electric(
        // General parameters
        'Macrothermic Confluence Unit', // English Name
        'macrothermic_confluence_unit', // internal name
        event.getRecipeType('modern_industrialization:heat_exchanger'), // recipe type
        macrothermicConfluenceUnitShape, // multiblock shape
        (workstations) =>
            workstations.add(['modern_industrialization:heat_exchanger']),
        /* Model configuration */
        'modern_industrialization:ostrum_machine_casing_pipe', // casing of the controller
        'heat_exchanger', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        16,
        0.9
    );
});
