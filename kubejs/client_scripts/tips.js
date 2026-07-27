// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

const tips = [
/* 
    {
        id: 'id',
        tiptext: 'Text.'
    },
*/
    {
        id: 'food',
        tiptext: 'Each 5 unique foods eaten will permanently grant you an additional heart.'
    },
    {
        id: 'sleeping_bag_straw_bed',
        tiptext: 'A Sleeping Bag or Straw Bed allows you to sleep without resetting your spawn point.'
    },
    {
        id: 'flight_pylon',
        tiptext: 'The Flight Pylon is a good way to move around in your base if you can\'t make an Angel Ring yet.'
    },
    {
        id: 'flight_pylon_early',
        tiptext: 'The Flight Pylon can be obtained earlier if you obtain an elytra.'
    },
    {
        id: 'better_assembler_yield',
        tiptext: 'Many items have a better yield when made in the Assembler (analog circuit components).'
    },
    {
        id: 'bending_machine',
        tiptext: 'The Bending Machine is twice as efficient as Compressors for the same recipes.'
    },
    {
        id: 'composter_nutrient_rich_water',
        tiptext: 'Bone Meal for Nutrient Rich Water can be obtained by using a composter.'
    },
    {
        id: 'soph_storage_stack_upgrade',
        tiptext: 'You can only put one stack upgrade in Sophisticated Storage containers and Sophisticated Backpacks.'
    },
    {
        id: 'create_threshold',
        tiptext: 'Create\'s Threshold Switch is a great way to regulate your large boilers and prevent wasting fuel.'
    },
    {
        id: 'report_issues',
        tiptext: 'Feel free to report issues and give feedback on the modpack through Discord or GitHub!'
    },
    {
        id: 'batching_machines',
        tiptext: 'Batching Multiblock version of machines are incredibly faster than their single block variants.'
    },
    {
        id: 'batching_machines_type',
        tiptext: 'Batching Multiblock version of machines cannot run multiple types of recipes at once.'
    },
    {
        id: 'ae2_autocrafting',
        tiptext: 'Applied Energistics 2 should not be used to autocraft basic materials (ingots, plates, wires, components).'
    },
    {
        id: 'passive_crafting',
        tiptext: 'Passive Crafting should be prioritized over request crafting for 99% of produced resources.'
    },
    {
        id: 'autocraft_singularities',
        tiptext: 'Do not attempt to autocraft singularities.'
    },
    {
        id: 'goose',
        tiptext: 'Do not attack the goose. It will fight back.'
    },
    {
        id: 'towers',
        tiptext: 'Towers found in the wild often contain useful loot and sometimes spawn a Waystone.'
    },
    {
        id: 'time_pouch',
        tiptext: 'The Temporal Pouch can be acquired quite early in Spectrum\'s progression.'
    },
    {
        id: 'slime_sling_glider',
        tiptext: 'The Slime Sling and Hang Glider make for an extrodinary good match.'
    },
    {
        id: 'pregen',
        tiptext: 'Pregenerating your world using Chunky is a great way to limit lag related to loading new chunks.'
    },
    {
        id: 'travelling_staff',
        tiptext: 'Using the Travel Staff to teleport to places you shouldn\'t might end up badly.'
    },
    {
        id: 'hose_pulley',
        tiptext: 'Using a hose pulley won\'t allow to infinitely generate lava.'
    },
    {
        id: 'ancestral_ruins',
        tiptext: 'Ancestral Ruins contain a lot of surprises and loot.'
    },
    {
        id: 'ancestral_ruins_bell',
        tiptext: 'You should ring the Inverted Bell.'
    },
    {
        id: 'early_loot',
        tiptext: 'Compasses and Buckets can be obtained early through loot or trading with villagers.'
    },
    {
        id: 'artifacts_specificity',
        tiptext: 'Artifacts have higher chances to spawn in specific locations. As such, it\'s a good idea to loot a variety of structures to find them.'
    },
    {
        id: 'silver_clean_energy',
        tiptext: 'You can obtain Raw Silver by randomly breaking pots and vases underground to make Solar Boilers before burning any fuel.'
    },
    {
        id: 'waystones_in_wilderness',
        tiptext: 'Naturally generated Waystones can be found randomly in the wild and in villages.'
    },
    {
        id: 'sky_stone',
        tiptext: 'Sky Stone can be renewably obtained by point a powered Annilihation Plane at the sky limit.'
    },
    {
        id: 'clay',
        tiptext: 'Finding and digging out a Lush Cave is a great way to obtain a lot of clay in the early game.'
    },
    {
        id: 'exp_obelisk',
        tiptext: 'Experience Obelisks will retain their contained XP when broken.'
    },
    {
        id: 'tank_bucket_mod',
        tiptext: 'Tanks (from Tank Storage) have a bucket mode allowing gathering a lot of fluid easily.'
    },
    {
        id: 'bank_build',
        tiptext: 'Banks have a build mode and a randomized build mode for easier building.'
    },
    {
        id: 'docked_bank_tank_filter',
        tiptext: 'Docked Banks and Tanks cannot accept items or fluids from pipes or Applied Energistics when on the No Pickup mode.'
    },
    {
        id: 'bank_construction_stick',
        tiptext: 'Construction Sticks can use blocks contained in Banks whilst building.'
    },
    {
        id: 'nourrishment',
        tiptext: 'Cooking high quality foods allows you to get "Nourishment", which prevents you from losing hunger or saturation through exhausting actions.'
    },
    {
        id: 'mimics',
        tiptext: 'Small underground campsites can contain useful loot, but can also hide some unexpected surprises.'
    },
    {
        id: 'pipe_config_card_off_hand',
        tiptext: 'Holding a configured Pipe Config Card in your off-hand whilst placing pipes will automatically apply the settings to the pipes placed or connected.'
    },
    {
        id: 'pipe_config_card_camouflage',
        tiptext: 'The Pipe Config Card can be used to select and apply camouflage to pipes.'
    },
    {
        id: 'machine_config_card_off_hand',
        tiptext: 'Holding a configured Machine Config Card in your off-hand whilst placing machines will automatically apply the settings to the machines placed.'
    },
    {
        id: 'andesite',
        tiptext: 'Andesite can be crafted from Siltstone or Diorite, if you have trouble finding any.'
    },
    {
        id: 'flawless',
        tiptext: 'Flawless Budding Certus Quartz can be moved using a Spectrum enchentment.'
    },
    {
        id: 'resin',
        tiptext: 'Resin can be collected from various trees using a Tree Tap. It can be used to make rubber in a natural way.'
    },
    {
        id: 'spray_can',
        tiptext: 'The Spray Can can be used to recolor all types of cables and pipes, and even concrete.'
    },
    {
        id: 'trials_chamber_copper',
        tiptext: 'The copper contained in trials chambers is sub-standard. One shouldn\'t try to trade it unless they want to receive a complaint.'
    },
    {
        id: 'wallsharing',
        tiptext: 'Multiblock machines can share walls, but cannot share hatches.'
    },
    {
        id: 'moving_steam',
        tiptext: 'Before you unlock fluid pipes, you can put your boiler directly next to your steam machines since it auto-outputs. '
    },
    {
        id: 'large_boiler_efficiency',
        tiptext: 'Large boilers of all kinds are twice as efficient when burning both item and liquid fuels. '
    },
    {
        id: 'item_pipes_filters',
        tiptext: 'Be sure to filter both the input and output sides of your item pipes for them to function.'
    },
    {
        id: 'aluminum_electrolyzer',
        tiptext: 'Using an electrolyzer to process bauxite is way more efficient than directly smelting it in the Electric Blast Furnace.'
    },
    {
        id: 'quarry_hatches',
        tiptext: 'Make sure you have enough output hatches on your Quarry to prevent voiding extra outputs.'
    },
    {
        id: 'jon_bartman',
        tiptext: 'We don\'t know who Jon Bartman is or how powerful he truly is.'
    },
    {
        id: 'lignite_sulfur',
        tiptext: 'Silk Touch is required to extract sulfur out of Lignite Coal Ore.'
    },
    {
        id: 'pick_block_ae2',
        tiptext: 'A wireless terminal from Applied Energistics 2 allows you to "Pick Block" from your system when enabled (in the terminal settings).'
    },
    {
        id: 'create_optional',
        tiptext: 'Create is completely optional.'
    },
    {
        id: 'cog_blocks',
        tiptext: 'Cog Blocks allow to transmit redstone in a full block.'
    },
    {
        id: 'spectrum_ruin',
        tiptext: 'Leaving Spectrum\'s Ruin unattended is a terrible idea.'
    },
    {
        id: 'locking_ender_storage',
        tiptext: 'Ender Tanks and Chests can be put on a private frequency by locking them with a diamond.'
    },
    {
        id: 'hammock',
        tiptext: 'Hammocks allow you to sleep during the day and skip to the night.'
    },
    {
        id: 'graves',
        tiptext: 'Inaccessible graves can be retrieved using commands.'
    },
    {
        id: 'pipe_connector',
        tiptext: 'Pipe Connector allows to effortlessly place pipes underground.'
    },
    {
        id: 'fluid_pipe_speed',
        tiptext: 'The speed of fluid pipes depends on the size of the pipe network. Adding more pipes will augment the speed.'
    },
    {
        id: 'hammer_enchanting',
        tiptext: 'Hammers used in the Forge Hammer can be enchanted with Unbreaking, making them last a lot longer.'
    },
    {
        id: 'stonecutting_cutting_machine',
        tiptext: 'The Cutting Machine can run any Stone Cutter recipe, useful for automating building blocks.'
    },
    {
        id: 'portable_storage_unit',
        tiptext: 'The Portable Storage Unit cannot charge items in your inventory. The Tesla Handheld Receiver can, however.'
    },
    {
        id: 'fluid_pipe_tank',
        tiptext: 'Fluid pipes will inherit fluid transfer speed when connected to a tank on I/O mode equivalent to the tank\'s capacity.'
    },
    {
        id: 'item_pipes_motors',
        tiptext: 'Adding motors an item pipe extract point will make that pipe extract point move more items.'
    },
    {
        id: 'water_dupe',
        tiptext: 'The water dupe will not be fixed.'
    },
    {
        id: 'ebf_vs_steam',
        tiptext: 'The Electric Blast Furnace can run all recipes from the Steam Blast Furnace.'
    },
    {
        id: 'electric_quarry_vs_steam',
        tiptext: 'The Electric Quarry can run all recipes from the Steam Quarry.'
    }
]

ClientEvents.generateAssets('after_mods', event => {

    const lang = {};

    tips.forEach(tip => {
        event.json(`statech:tips/${tip.id}`, {
            type: 'tipsmod:simple',
            text: {
                translate: `statech.tip.${tip.id}`
            }
        });

        lang[`statech.tip.${tip.id}`] = tip.tiptext;
    });

    event.json('statech:lang/en_us', lang);

});