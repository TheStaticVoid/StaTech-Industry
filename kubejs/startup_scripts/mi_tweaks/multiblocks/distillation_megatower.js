// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

// Create a shape for a specific tier
function createTier(event, id, coilBlockId, maxBaseEu, multiplier, euCostMultiplier)
{
	// Build your multiblock shape as you normally would
  const noHatch = event.noHatch();
  const energyInputHatch = event.hatchOf('energy_input');
  const fluidOutputHatch = event.hatchOf('fluid_output');
  const fluidInputHatch = event.hatchOf('fluid_input');

  const cupronickelCoilMember = event.memberOfBlock(coilBlockId);
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
    ['BDDDADDDKDDDB',' iEi DDDKDDe ',' iEi DDDKDDe ','  EEEEDDKDD  ','  ED   DKD   ','  ED   DKD   ','  ED   DKD   ',' DED   DKD   ','BDEEEEDDKDD  ',' DED BDDKDDB ',' DED  DDKDD  ','  EEEEDDKDD  ','  ED   DKD   ','  ED   DKD   ','  ED   DKD   ',' DED   DKD   ','BDEEEEDDKDD  ',' DED BDDKDDB ',' DED  DDKDD  ','  E   DDKDD  ','  E    DKD   ','  E    DKD   ','  E    DKD   ','  E    DKD   ','  E   DDKDD  ','  ACCADDKDDB ','  E   DDKDD  ','  E   DDKDD  ','  E    DKD   ','  E    DKD   ','  E    DKD   ','  E    DKD   ','  E   DDKDD  ','  ACCADDKDDB ','  E   DDKDD  ','  E   DDEDD  ','  E     E    ','  EEEEEEE    '],
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
    .key('K', cupronickelCoilMember, noHatch)
    .build();
return event.createTier(
		// The id field MUST be globally unique. This is used to register the JEI/REI/EMI categories.
		id,
		// The recipe type supported by this tier, for this example we just use the same recipe type for all categories
		event.getRecipeType('modern_industrialization:distillation_tower'),
		// The multiblock shape to use for this tier
		distillationMegaTowerShape,
		// Defines the additional workstations to display for this tier (aside from the machine block itself)
		// You can provide as many workstations as you would like for your tier
		// Here this just mimics what MI does with the EBF by adding the coil block as a workstation
		// Do note that when using the non-standalone functions to create a machine, the IDs added to this workstation
		//  list are the IDs of the machines to add this machine to its workstations. This is the same as how the batch
		//  multiblock registering works for workstations.
		(workstations) => workstations.add('modern_industrialization:distillation_tower'),
		// The max EU/t recipe the tier can run
		// Optional: defaults to 128
		maxBaseEu,
		// The maximum amount of batches this tier can run in one cycle
		// Optional (if present, euCostMultiplier must also be present): defaults to 1
		multiplier,
		// The EU cost multiplier to apply
		// Optional: defaults to 1
		euCostMultiplier
	);
}

MITweaksMachineEvents.registerTieredMultiblocks((event) => {
    const cupronickel = createTier(event, "batch_dt_cupronickel", "modern_industrialization:cupronickel_coil", 32, 16, 0.85);
	const kanthal = createTier(event, "batch_dt_kanthal", "modern_industrialization:kanthal_coil", 128, 32, 0.75);
    const tungstensteel = createTier(event, "batch_dt_tungstensteel", "modern_industrialization:tungstensteel_coil", 1024, 64, 0.6);

     event.electric(
        // General parameters
        'Distillation Megatower', // English Name
        'distillation_megatower', // internal name
        (tiers) =>
            tiers.add(cupronickel).add(kanthal).add(tungstensteel),
        /* Model configuration */
        'clean_stainless_steel_machine_casing', // casing of the controller
        'distillation_tower', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});


