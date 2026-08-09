// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

MISoundAddons.modifySounds((event) => {
    // -- MODIFY DURATIONS -- //
    event.modifyDuration('laser_engraver', 42);
    event.modifyDuration('singularity_forge', 40);
    event.modifyDuration('rocket_part_assembler', 39);
    event.modifyDuration('core_drill', 67);
    event.modifyDuration('space_probe_launcher', 194);
    event.modifyDuration('quantum_space_probe_launcher', 194);
    event.modifyDuration('photosynthetic_chamber', 140);
    event.modifyDuration('greenhouse', 132);
    event.modifyDuration('mob_crusher', 134);
    event.modifyDuration('boss_crusher', 134);
    event.modifyDuration('recycler', 39);
    event.modifyDuration('weapons_factory', 39);

    // -- MODIFY VOLUMES -- //

    // -- ADD GENERATOR SOUNDS -- //
    event.registerGeneratorSound('blood_generator', 134, 1.0);
});
