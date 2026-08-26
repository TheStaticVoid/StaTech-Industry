// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
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
        tiptext:
            'Each 5 unique foods eaten will permanently grant you an additional heart.',
    },
    {
        id: 'sleeping_bag_straw_bed',
        tiptext:
            'A Sleeping Bag or Straw Bed allows you to sleep without resetting your spawn point.',
    },
    {
        id: 'flight_pylon',
        tiptext:
            "The Flight Pylon is a good way to move around in your base if you can't make an Angel Ring yet.",
    },
    {
        id: 'flight_pylon_early',
        tiptext:
            'The Flight Pylon can be obtained earlier if you obtain an elytra.',
    },
    {
        id: 'better_assembler_yield',
        tiptext:
            'Many items have a better yield when made in the Assembler (analog circuit components).',
    },
    {
        id: 'bending_machine',
        tiptext:
            'The Bending Machine is twice as efficient as Compressors for the same recipes.',
    },
    {
        id: 'composter_nutrient_rich_water',
        tiptext:
            'Bone Meal for Nutrient Rich Water can be obtained by using a composter.',
    },
    {
        id: 'soph_storage_stack_upgrade',
        tiptext:
            'You can only put one stack upgrade in Sophisticated Storage containers and Sophisticated Backpacks.',
    },
    {
        id: 'create_threshold',
        tiptext:
            "Create's Threshold Switch is a great way to regulate your large boilers and prevent wasting fuel.",
    },
    {
        id: 'report_issues',
        tiptext:
            'Feel free to report issues and give feedback on the modpack through Discord or GitHub!',
    },
    {
        id: 'batching_machines',
        tiptext:
            'Batching Multiblock versions of machines are significantly faster than their single block variants.',
    },
    {
        id: 'batching_machines_type',
        tiptext:
            'Batching Multiblock versions of machines cannot run multiple types of recipes at once.',
    },
    {
        id: 'ae2_autocrafting',
        tiptext:
            'Applied Energistics 2 should not be used to autocraft basic materials (ingots, plates, wires, components).',
    },
    {
        id: 'passive_crafting',
        tiptext:
            'Passive Crafting should be prioritized over request crafting for 99% of produced resources.',
    },
    {
        id: 'autocraft_singularities',
        tiptext: 'Do not attempt to autocraft singularities.',
    },
    {
        id: 'goose',
        tiptext: 'Do not attack the goose. It will fight back.',
    },
    {
        id: 'towers',
        tiptext:
            'Towers found in the wild often contain useful loot and sometimes spawn a Waystone.',
    },
    {
        id: 'time_pouch',
        tiptext:
            "The Temporal Pouch can be acquired quite early in Spectrum's progression.",
    },
    {
        id: 'slime_sling_glider',
        tiptext:
            'The Slime Sling and Hang Glider make for an extrodinary good match.',
    },
    {
        id: 'pregen',
        tiptext:
            'Pregenerating your world using Chunky is a great way to limit lag related to loading new chunks.',
    },
    {
        id: 'travelling_staff',
        tiptext:
            "Using the Travel Staff to teleport to places you shouldn't might end up badly.",
    },
    {
        id: 'hose_pulley',
        tiptext:
            "Using a hose pulley won't allow you to infinitely generate lava.",
    },
    {
        id: 'ancestral_ruins',
        tiptext: 'Ancestral Ruins contain a lot of surprises and loot.',
    },
    {
        id: 'ancestral_ruins_bell',
        tiptext: 'You should ring the Inverted Bell.',
    },
    {
        id: 'early_loot',
        tiptext:
            'Compasses and Buckets can be obtained early through loot or trading with villagers.',
    },
    {
        id: 'artifacts_specificity',
        tiptext:
            "Artifacts have higher chances to spawn in specific locations. As such, it's a good idea to loot a variety of structures to find them.",
    },
    {
        id: 'silver_clean_energy',
        tiptext:
            'You can obtain Raw Silver in large lead ore veins to make Solar Boilers before burning any fuel.',
    },
    {
        id: 'waystones_in_wilderness',
        tiptext:
            'Naturally generated Waystones can be found randomly in the wild and in villages.',
    },
    {
        id: 'sky_stone',
        tiptext:
            'Sky Stone can be obtained renewably by pointing a powered Annilihation Plane up at the build limit.',
    },
    {
        id: 'clay',
        tiptext:
            'Finding and digging out the contents of a Lush Cave is a great way to obtain a lot of clay in the early game.',
    },
    {
        id: 'exp_obelisk',
        tiptext:
            'Experience Obelisks will retain their contained XP when broken.',
    },
    {
        id: 'tank_bucket_mod',
        tiptext:
            'Tanks (from Tank Storage) have a bucket mode allowing them to gather a lot of fluid easily.',
    },
    {
        id: 'bank_build',
        tiptext:
            'Banks have a build mode and a randomized build mode for easier building.',
    },
    {
        id: 'docked_bank_tank_filter',
        tiptext:
            'Docked Banks and Tanks cannot accept items or fluids from pipes or Applied Energistics when on the No Pickup mode.',
    },
    {
        id: 'bank_construction_stick',
        tiptext:
            'Construction Sticks can use blocks contained in Banks while building.',
    },
    {
        id: 'nourishment',
        tiptext:
            'Cooking high quality foods allows you to get "Nourishment", which prevents you from losing hunger or saturation through exhausting actions.',
    },
    {
        id: 'mimics',
        tiptext:
            'Small underground campsites can contain useful loot, but can also hide some unexpected surprises.',
    },
    {
        id: 'pipe_config_card_off_hand',
        tiptext:
            'Holding a configured Pipe Config Card in your off-hand while placing pipes will automatically apply the settings to the pipes placed or connected.',
    },
    {
        id: 'pipe_config_card_camouflage',
        tiptext:
            'The Pipe Config Card can be used to select and apply camouflage to pipes.',
    },
    {
        id: 'machine_config_card_off_hand',
        tiptext:
            'Holding a configured Machine Config Card in your off-hand while placing machines will automatically apply the settings to the machines placed.',
    },
    {
        id: 'andesite',
        tiptext:
            'Andesite can be crafted from Siltstone or Diorite, if you have trouble finding any.',
    },
    {
        id: 'flawless',
        tiptext:
            'Flawless Budding Certus Quartz can be moved using a Spectrum enchantment.',
    },
    {
        id: 'resin',
        tiptext:
            'Resin can be collected from various trees using a Tree Tap. It can be used to make rubber in a natural way.',
    },
    {
        id: 'spray_can',
        tiptext:
            'The Spray Can can be used to recolor all types of cables and pipes, and even concrete.',
    },
    {
        id: 'trials_chamber_copper',
        tiptext:
            "The copper contained in trial chambers is sub-standard. One shouldn't try to trade it unless they want to receive a complaint.",
    },
    {
        id: 'wallsharing',
        tiptext:
            'Multiblock machines can share walls, but cannot share hatches.',
    },
    {
        id: 'moving_steam',
        tiptext:
            'Before you unlock fluid pipes, you can put your boiler directly next to your steam machines since it auto-outputs.',
    },
    {
        id: 'large_boiler_efficiency',
        tiptext:
            'Large boilers of all kinds are twice as efficient when burning both item and liquid fuels. ',
    },
    {
        id: 'item_pipes_filters',
        tiptext:
            'Be sure to filter both the input and output sides of your item pipes.',
    },
    {
        id: 'aluminum_electrolyzer',
        tiptext:
            'Using an electrolyzer to process bauxite is way more efficient than smelting it in the Electric Blast Furnace.',
    },
    {
        id: 'quarry_hatches',
        tiptext:
            'Make sure you have enough output hatches on your Quarry to prevent voiding extra outputs.',
    },
    {
        id: 'jon_bartman',
        tiptext: "We don't know who Jon Bartman is or how powerful he may be.",
    },
    {
        id: 'lignite_sulfur',
        tiptext:
            'Silk Touch is required to extract sulfur out of Lignite Coal Ore.',
    },
    {
        id: 'pick_block_ae2',
        tiptext:
            'A wireless terminal from Applied Energistics 2 allows you to use the "Pick Block" setting from your system when enabled (in the terminal settings).',
    },
    {
        id: 'create_optional',
        tiptext: 'Create is now completely optional.',
    },
    {
        id: 'cog_blocks',
        tiptext: 'Cog blocks allow you to transmit redstone in a full block.',
    },
    {
        id: 'spectrum_ruin',
        tiptext: "Leaving Spectrum's Ruin unattended is a terrible idea.",
    },
    {
        id: 'locking_ender_storage',
        tiptext:
            'Ender Tanks and Chests can be put on a private frequency by locking them with a diamond.',
    },
    {
        id: 'hammock',
        tiptext:
            'Hammocks allow you to sleep through the day and skip to the night.',
    },
    {
        id: 'graves',
        tiptext: 'Inaccessible graves can be retrieved using commands.',
    },
    {
        id: 'pipe_connector',
        tiptext:
            'Pipe Connector allows you to effortlessly place pipes underground.',
    },
    {
        id: 'fluid_pipe_speed',
        tiptext:
            'The speed of fluid pipes depends on the size of the pipe network. Adding more pipes will augment the speed.',
    },
    {
        id: 'hammer_enchanting',
        tiptext:
            'Hammers used in the Forge Hammer can be enchanted with Unbreaking, making them last a lot longer.',
    },
    {
        id: 'stonecutting_cutting_machine',
        tiptext:
            'The Cutting Machine can run any Stone Cutter recipe, useful for automating building blocks.',
    },
    {
        id: 'portable_storage_unit',
        tiptext:
            'The Portable Storage Unit cannot charge items in your inventory. The Tesla Handheld Receiver can, however.',
    },
    {
        id: 'fluid_pipe_tank',
        tiptext:
            "Fluid pipes will inherit fluid transfer speed when connected to a tank on I/O mode equivalent to the tank's capacity.",
    },
    {
        id: 'item_pipes_motors',
        tiptext:
            "Adding motors to an item pipe's extract point will make that pipe move more items.",
    },
    {
        id: 'water_dupe',
        tiptext: 'The water dupe will not be fixed.',
    },
    {
        id: 'ebf_vs_steam',
        tiptext:
            'The Electric Blast Furnace can run all recipes from the Steam Blast Furnace.',
    },
    {
        id: 'electric_quarry_vs_steam',
        tiptext:
            'The Electric Quarry can run all recipes from the Steam Quarry.',
    },
    {
        id: 'added_herobrine',
        tiptext: 'Jon Bartman may be Herobrine in a mask...',
    },
    {
        id: 'removed_jon_bartman',
        tiptext: 'We removed Jon Bartman this update. Check the changelog.',
    },
    {
        id: 'little_big_redstone',
        tiptext:
            'The Little Big Redstone mod is a powerful way of doing complex logic in one block. It is useful for things like Steam Boiler On/Off Logic™.',
    },
    {
        id: 'guns',
        tiptext:
            'Guns from TACZ are an effective way to defend your factory. They are also fun!',
    },
    {
        id: 'veinwaypoints',
        tiptext:
            'The prospecting pick allows you to easily add waypoints for ore veins by right-clicking ore samples on the surface! Shift right-click to add an inworld beacon for the waypoint.',
    },
    {
        id: 'lumberaxes',
        tiptext:
            'Lumberaxes can be used to easily gather a lot of wood after obtaining plates!',
    },
    {
        id: 'mininghammersimpactcore',
        tiptext:
            'Impact Mining Hammers can dig in a 3x3x3 area. Great for digging out large ore veins!',
    },
    {
        id: 'oreveinsspecial',
        tiptext:
            'Some large ore veins are more common in specific conditions, for example Iron and Emerald veins in mountain biomes.',
    },
    {
        id: 'oregeneration',
        tiptext:
            'Vanilla ore veins are less common, but the world is littered with large ore veins that often contain more than a thousand ore blocks.',
    },
    {
        id: 'oresamples',
        tiptext:
            'Large ore veins that often contain more than a thousand ore blocks.',
    },
    {
        id: 'expchests',
        tiptext: 'Opening chests is a great way to gain XP early on.',
    },
    {
        id: 'gearsassembler',
        tiptext:
            'Gears have a way better ratio of inputs to outputs when made in the Assembler.',
    },
    {
        id: 'fog',
        tiptext:
            "Fog is more dense with the addition of No Man's Land. It can however be configured in the Video Settings.",
    },
    {
        id: 'paperdoll',
        tiptext:
            "The Paperdoll in the upper left corner of the screen can be disabled with a configurable keybind or in the mod's config.",
    },
    {
        id: 'artifactrecycling',
        tiptext:
            'Artifacts can be recycled in the Recycler and re-rolled by creating Mimic Spawn Eggs!',
    },
    {
        id: 'steeltier',
        tiptext:
            'Steel tools and armor are just slightly worse than diamond ones.',
    },
    {
        id: 'bronzetier',
        tiptext:
            'Bronze tools and armor are just slightly better than iron ones.',
    },
    {
        id: 'coppertier',
        tiptext: 'Copper tools are just slightly better than stone ones.',
    },
    {
        id: 'blockspeedmultiplier',
        tiptext:
            'Path blocks have a slight bonus to walking speed and Speedy Concrete has a much bigger boost.',
    },
    {
        id: 'mobcatchervillager',
        tiptext:
            'Villagers can be more easily transported with the Mob Catcher Upgrade from Sophisticated Backpacks.',
    },
    {
        id: 'earlyrubydust',
        tiptext:
            'Ruby Dust can be obtained by centrifuging Redstone to get Chromium Crushed Dust before automating Stainless Steel Drills.',
    },
    {
        id: 'alternatemetalrecipes',
        tiptext:
            'Some items (anvil, rails, buckets, hoppers) can be alternatively crafted using metals other than iron (lead, nickel, silver, tin).',
    },
    {
        id: 'claimallquestrewards',
        tiptext:
            'You can claim your quest rewards all at once by clicking the Select Rewards button in the upper right corner of the quest screen.',
    },
    {
        id: 'prospectorpick',
        tiptext:
            "Right clicking the ground with the Prospector Pick will scan the area around you for deposits. Useful if you're struggling to find surface samples or deep in a cave",
    },
];

ClientEvents.generateAssets('after_mods', (event) => {
    const lang = {};

    tips.forEach((tip) => {
        event.json(`statech:tips/${tip.id}`, {
            type: 'tipsmod:simple',
            text: {
                translate: `statech.tip.${tip.id}`,
            },
        });

        lang[`statech.tip.${tip.id}`] = tip.tiptext;
    });

    event.json('statech:lang/en_us', lang);
});
