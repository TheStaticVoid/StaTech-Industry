// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------


let EXTREME_VACUUM_CRYOFREEZER;

MIMachineEvents.registerRecipeTypes((event) => {
    EXTREME_VACUUM_CRYOFREEZER = event
        .register('extreme_vacuum_cryofreezer')
        .withItemInputs()
        .withFluidInputs()
        .withFluidOutputs()
        .withItemOutputs();
});



MITweaksMachineEvents.registerBatchMultiblocks((event) => {
  const noHatch = event.noHatch();
  const multiblockHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'fluid_output', 'energy_input');

  const modernIndustrializationFrostproofMachineCasing = event.memberOfBlock('modern_industrialization:frostproof_machine_casing');
  const modernIndustrializationCleanStainlessSteelMachineCasing = event.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing');
  const modernIndustrializationPlasmaHandlingIridiumMachineCasing = event.memberOfBlock('modern_industrialization:plasma_handling_iridium_machine_casing');
  const modernIndustrializationStainlessSteelMachineCasingPipe = event.memberOfBlock('modern_industrialization:stainless_steel_machine_casing_pipe');
  const kubejsBorosilicateGlass = event.memberOfBlock('kubejs:borosilicate_glass');
  const extremeVacuumCryofreezerShape = event.layeredShape('frostproof_machine_casing', [
    ['AAAAA','A a A','A a A','A a A','A a A','AAAAA'],
    ['AaaaA',' BCB ',' DCD ',' DCD ',' BCB ','AaEaA'],
    ['AaaaA',' B B ',' D D ',' D D ',' B B ','AEEEA'],
    ['AaaaA','aCaCa','aCaCa','aCaCa','aCaCa','AEEEA'],
    ['AaaaA',' B B ',' D D ',' D D ',' B B ','AEEEA'],
    ['AaaaA',' BCB ',' DCD ',' DCD ',' BCB ','AaEaA'],
    ['AAAAA','A # A','A a A','A a A','A a A','AAAAA']
  ])
    .key('A', modernIndustrializationFrostproofMachineCasing, multiblockHatch)
    .key('a', modernIndustrializationFrostproofMachineCasing, noHatch)
    .key('B', modernIndustrializationCleanStainlessSteelMachineCasing, noHatch)
    .key('C', modernIndustrializationPlasmaHandlingIridiumMachineCasing, noHatch)
    .key('D', modernIndustrializationStainlessSteelMachineCasingPipe, noHatch)
    .key('E', kubejsBorosilicateGlass, noHatch)
    .build();

    event.electric(
        // General parameters
        'Extreme Vacuum Cryofreezer', // English Name
        'extreme_vacuum_cryofreezer', // internal name
        event.getRecipeType('modern_industrialization:vacuum_freezer'), // recipe type
        extremeVacuumCryofreezerShape, // multiblock shape
        (workstations) =>
            workstations.add(['modern_industrialization:vacuum_freezer']),
        /* Model configuration */
        'frostproof_machine_casing', // casing of the controller
        'vacuum_freezer', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        12,
        0.7
    );
});
