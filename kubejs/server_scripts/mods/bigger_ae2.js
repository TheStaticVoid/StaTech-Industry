// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:bigger_ae2/${id}`;

    // -- BIGGER AE2 REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        bae('digital_singularity_cell_component'),
        bae('quantum_cell_component'),
        bae('quantum_item_storage_cell'),
        bae('quantum_fluid_storage_cell'),
        bae('quantum_fluid_storage_cell'),
        ae('add_item_upgrade/quantum_fluid_storage_cell/void_card'),
        ae('add_item_upgrade/quantum_item_storage_cell/void_card') // these last 2 don't work idk
    ];
    REMOVED_RECIPES.forEach(id => event.remove({ id: id }));

    // -- DIGITAL SINGULARITY CELL COMPONENT -- //
    event.shaped(bae('digital_singularity_cell_component'), [
        'MAM',
        'CBC',
        'MSM'
    ], {
        A: mg('accumulation_processor'),
        M: ae('matter_ball'),
        C: mg('compression_card'),
        B: mg('sky_steel_block'),
        S: mg('cell_component_256m')
    })
        .id(st('digital_singularity_cell_component'));

    // -- DIGITAL SINGULARITY CELL COMPONENT INTERCONVERSION WITH BULK STORAGE COMPONENT -- //
    event.shapeless(mg('bulk_cell_component'), bae('digital_singularity_cell_component')).id(st('bulk_to_digital_singularity'));
    event.shapeless(bae('digital_singularity_cell_component'), mg('bulk_cell_component')).id(st('digital_to_bulk_singularity'));

})
