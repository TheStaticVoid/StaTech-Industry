// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------


let DISTILLATION_MEGATOWER;

MIMachineEvents.registerRecipeTypes((event) => {
    DISTILLATION_MEGATOWER = event
        .register('distillation_megatower')
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
  const noHatch = event.noHatch();
  const energyInputHatch = event.hatchOf('energy_input');
  const fluidOutputHatch = event.hatchOf('fluid_output');
  const fluidInputHatch = event.hatchOf('fluid_input');

  const architectsPalettePlatingBlock = event.memberOfBlock('architects_palette:plating_block');
  const architectsPalettePlatingSlab = event.memberOfBlock('architects_palette:plating_slab');
  const architectsPalettePlatingWall = event.memberOfBlock('architects_palette:plating_wall');
  const modernIndustrializationCleanStainlessSteelMachineCasing = event.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing');
  const modernIndustrializationTungstensteelMachineCasingPipe = event.memberOfBlock('modern_industrialization:tungstensteel_machine_casing_pipe');

  const distillationMegaTowerShape = event.layeredShape('clean_stainless_steel_machine_casing', [
    ['      ABBBA  ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             '],
    ['     AADDDAA ','     A eee A ','     C  e  C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     AABBBAA ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     AABBBAA ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     AABBBAA ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     AABBBAA ','             ','             ','             ','             '],
    ['AABAAADDDDDAA','C   C DDDDD  ','C   C DDDDD  ','C   C  DDD   ','C   C  D D   ','C   C  D D   ','C   C  D D   ','C   C  D D   ','ABBBA  DDD   ','C   CADDDDDA ','C   C DDDDD  ','C   C  DDD   ','C   C  D D   ','C   C  D D   ','C   C  D D   ','C   C  D D   ','ABBBA  DDD   ','     ADDDDDA ','      DDDDD  ','       DDD   ','       D D   ','       D D   ','       D D   ','       D D   ','       DDD   ','     ADDDDDA ','      DDDDD  ','       DDD   ','       D D   ','       D D   ','       D D   ','       D D   ','       DDD   ','     ADDDDDA ','      DDDDD  ','       DDD   ','             ','             '],
    ['ADDDADDDDDDDB',' iii DDDDDDe ',' iii  DDDDD  ',' D D  DDDDD  ',' D D  DDDDD  ',' D D  DDDDD  ',' D D  DDDDD  ',' DDD  DDDDD  ','BDDDB DDDDD  ',' DDD BDDDDDB ',' DDD  DDDDD  ',' D D  DDDDD  ',' D D  DDDDD  ',' D D  DDDDD  ',' D D  DDDDD  ',' DDD  DDDDD  ','BDDDB DDDDD  ',' DDD BDDDDDB ',' DDD  DDDDD  ','      DDDDD  ','      DDDDD  ','      DDDDD  ','      DDDDD  ','      DDDDD  ','      DDDDD  ','     BDDDDDB ','      DDDDD  ','      DDDDD  ','      DDDDD  ','      DDDDD  ','      DDDDD  ','      DDDDD  ','      DDDDD  ','     BDDDDDB ','      DDDDD  ','      DDDDD  ','             ','             '],
    ['BDDDADDDDDDDB',' iEi DDDDDDe ',' iEi DDD DDe ','  EEEEDDDDD  ','  ED   DDD   ','  ED   DDD   ','  ED   DDD   ',' DED   DDD   ','BDEEEEDDDDD  ',' DED BDDDDDB ',' DED  DDDDD  ','  EEEEDDDDD  ','  ED   DDD   ','  ED   DDD   ','  ED   DDD   ',' DED   DDD   ','BDEEEEDDDDD  ',' DED BDDDDDB ',' DED  DDDDD  ','  E   DDDDD  ','  E    DDD   ','  E    DDD   ','  E    DDD   ','  E    DDD   ','  E   DDDDD  ','  ACCADDDDDB ','  E   DDDDD  ','  E   DDDDD  ','  E    DDD   ','  E    DDD   ','  E    DDD   ','  E    DDD   ','  E   DDDDD  ','  ACCADDDDDB ','  E   DDDDD  ','  E   DDEDD  ','  E     E    ','  EEEEEEE    '],
    ['ADDDADDDDDDDB',' iii DDDDDDe ',' iii  DDDDD  ',' D D  DDDDD  ',' D D  DDDDD  ',' D D  DDDDD  ',' D D  DDfDD  ',' DDD  DDDDD  ','BDDDB DDDDD  ',' DDD BDDDDDB ',' DDD  DDDDD  ',' D D  DDDDD  ',' D D  DDDDD  ',' D D  DDDDD  ',' D D  DDfDD  ',' DDD  DDDDD  ','BDDDB DDDDD  ',' DDD BDDDDDB ',' DDD  DDDDD  ','      DDDDD  ','      DDDDD  ','      DDDDD  ','      DDfDD  ','      DDDDD  ','      DDDDD  ','     BDDDDDB ','      DDDDD  ','      DDDDD  ','      DDDDD  ','      DDDDD  ','      DDfDD  ','      DDDDD  ','      DDDDD  ','     BDDDDDB ','      DDDDD  ','      DDDDD  ','             ','             '],
    ['AABAAADDDDDAA','C   C DDDDD  ','C   C DDfDD  ','C   C  DDD   ','C   C  D D   ','C   C  D D   ','C   C  D D   ','C   C  D D   ','ABBBA  DDD   ','C   CADDDDDA ','C   C DDfDD  ','C   C  DDD   ','C   C  D D   ','C   C  D D   ','C   C  D D   ','C   C  D D   ','ABBBA  DDD   ','     ADDDDDA ','      DDfDD  ','       DDD   ','       D D   ','       D D   ','       D D   ','       D D   ','       DDD   ','     ADDDDDA ','      DDfDD  ','       DDD   ','       D D   ','       D D   ','       D D   ','       D D   ','       DDD   ','     ADDDDDA ','      DDfDD  ','       DDD   ','             ','             '],
    ['     AADDDAA ','     A e#e A ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     AABBBAA ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     AABBBAA ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     AABBBAA ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     C     C ','     AABBBAA ','             ','             ','             ','             '],
    ['      ABBBA  ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ','             ']
  ])
    .key('A', architectsPalettePlatingBlock, noHatch)
    .key('B', architectsPalettePlatingSlab, noHatch)
    .key('C', architectsPalettePlatingWall, noHatch)
    .key('D', modernIndustrializationCleanStainlessSteelMachineCasing, noHatch)
    .key('i', modernIndustrializationCleanStainlessSteelMachineCasing, fluidInputHatch)
    .key('f', modernIndustrializationCleanStainlessSteelMachineCasing, fluidOutputHatch)
    .key('e', modernIndustrializationCleanStainlessSteelMachineCasing, energyInputHatch)
    .key('E', modernIndustrializationTungstensteelMachineCasingPipe, noHatch)
    .build();

     event.electric(
        // General parameters
        'Distillation Megatower', // English Name
        'distillation_megatower', // internal name
        event.getRecipeType('modern_industrialization:distillation_tower'), // recipe type
        distillationMegaTowerShape, // multiblock shape
        (workstations) =>
            workstations.add(['modern_industrialization:distillation_tower']),
        /* Model configuration */
        'clean_stainless_steel_machine_casing', // casing of the controller
        'distillation_tower', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        16,
        0.85
    );
});


