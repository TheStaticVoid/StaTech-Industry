// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

LootJS.modifiers(event => {

    // --------------------- //
    // ------ CHESTS ------ //
    // --------------------- //

    // -- DUNGEON GARBAGE -- //
    event
        .addTableModifier("nomansland:chests/dungeon_garbage")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/simple_dungeon"))
        });

    // -- SMALL DUNGEON CORE -- //
    event
        .addTableModifier("nomansland:chests/small_dungeon_core")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/simple_dungeon"))
        });

    // -- DUNGEON KITCHEN -- //
    event
        .addTableModifier("nomansland:chests/dungeon_kitchen")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/ancient_city_ice_box"))
        });

    // -- WATER WELL -- //
    event
        .addTableModifier("nomansland:chests/water_well")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/ruined_portal"))
        });

    // -- SNIFFER MONUMENT -- //
    event
        .addTableModifier("nomansland:chests/sniffer_monument")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/jungle_temple"))
        });

    // -- ALCHEMIST POT ALCHEMY -- //
    event
        .addTableModifier("nomansland:chests/alchemist_pot_alchemy")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/ruined_portal"))
        });

    // -- ALCHEMIST POT CAVE -- //
    event
        .addTableModifier("nomansland:chests/alchemist_pot_cave")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/abandoned_mineshaft"))
        });

    // -- ALCHEMIST POT ARTISANSHIP -- //
    event
        .addTableModifier("nomansland:chests/alchemist_pot_artisanship")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/pillager_outpost"))
        });

    // -- ALCHEMIST POT POTIONS -- //
    event
        .addTableModifier("nomansland:chests/alchemist_pot_potions")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/ruined_portal"))
        });

    // -- ALCHEMIST POT TREASURE -- //
    event
        .addTableModifier("nomansland:chests/alchemist_pot_treasure")
        .pool(pool => {
            pool.addEntry(LootEntry.reference("artifacts:inject/chests/woodland_mansion")).rolls(2)
        });

});

LootJS.lootTables(event => {
    // let ids = event.getLootTableIds(/.*nomansland:chests\/.*/)
    // console.warn(ids);
})
