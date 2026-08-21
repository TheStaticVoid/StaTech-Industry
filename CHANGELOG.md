# Changelog

## [2.0.0]

This is the full release of StaTech Industry 2. 
TODO: Write a better changelog :gregtroll:

# Changelog:
- Added Lumberaxes, tools that allow for whole trees to be chopped down at once!
- Add more recipes for peaceful mode completeness
- Removed the quest requirements in world of food chapter
- Removed Jon Bartman


## [2.0.0-rc5]

This update brings bucketloads more polish to GuideME, the questbook, and recipes. There are a ton of changes, so I'll just list the highlights here, breaking changes are bolded:

- **Brought back large ore veins in favor of vanilla-style ore generation**
- **Fixed strange worldgen bug where some waterlogged flora were not waterlogged**
- Fixed iron tool nerfs
- Added speedy concrete block
- HUD/UI tweaks
- Added a custom main menu theme
- Fixed alternate metal recipes (they were broken for a long time)
- Made armor craftable using plates
- **Fixed Create and Spectrum quest reward type to allow players to "claim all"**
- Fixed compatibility with the updated MI Sound Addon and add missing sounds
- **Nerfed Pyrolyse Oven Batching**
- **Fixed Forge Hammer Ore Processing Exploit**
- Added custom CC:Tweaked, Little Big Redstone, and Advanced Peripherals recipes, with assembler ones as well.
- **Fixed Molten Redstone Amounts Not Being Consistent**
- **Made Hatches Optional in Quests**
- **Fixed Cutting Machine Recipe Conflicts**
- **Made Shrinking Charm Craftable**
- **Added effects to sodas and made the EI Tin Can an Aluminum Can**
- **Implemented the Recycler + Matter Fabricator scrap mechanic more**
- Overhauled greenhouse recipes to allow for better handling of chanced outputs with batching
- **Added Weapons Factory Multiblock for Gun Crafting**
- **Add custom Assembler recipes for gun ammunition**
- **Added buffed transistor + battery recipes**
- **Added quests for Pentaborane Line**
- **Made space ore blasting more energy intensive**
- Replaced vanilla splash text for pack-specific splashes
- Overhauled Chapter 4 questbook format
- **Added NeoForge Hammer (Upgraded Forge Hammer that keeps the hammer inside)**
- Fixed the "Legally Nondescript ABS Building Brick" recipe to use ITNT
- Added missing ore-from-coins recipes
- **Added Batching Vacuum Freezer, Heat Exchanger, and Recycler**
- Added literal fruity pebbles
- **Added large ore deposits back to the pack! Similar to the original, look for ore samples scattered across the world**
- Reduced the spawn rates of regular ore generation
- **Added Prospector Pick, a useful tool for finding ore deposits and marking them on your map**
- Added copper & steel tools
- Added Just Hammers and added custom bronze / steel variants
- Added Scannable and gave it its original recipe
- Removed Ultimine
- Updated the menus
- Removed Jon Bartman

Those are the most significant changes, but there were more. This was a very big update and we hope it's pretty close to the final one before the full release.

As always, please make sure to file all issues on GitHub. Feedback in regards to progression, recipes, QoL, or anything else is also most welcome, though the Discord server is the best place for that.

## [2.0.0-rc4]

This bugfix update primarily addresses a JEI/FTB-XMod-Compat keybind interactions crash (#621) and updates Spectrum with many improvements and bugfixes. More work went into fixing the GitHub Action workflows for building and releasing the pack.

A Discord Rich Presence is also now present. If no further major issues are discoverd, this version will become the full release version.

## [2.0.0-rc3]

Fixes a couple breaking bugs.

## [2.0.0-rc2]

This update is just one last test before full release, and if no further breaking bugs are found, that should come in the next couple of days.

It took a lot of effort by both myself (@GW-Dev) and by @truepurpledino (again), but @fmbellomy really helped out a lot with migrating to Pakku and cleaning up a lot of the technical debt. Most of the work has been on cleaning up the backend, though some bug fixes and tweaks were also done.

As always, please make sure to file all issues on GitHub. Feedback in regards to progression, recipes, QoL, or anything else is also most welcome, though the Discord server is the best place for that.

### Changes

- [Migrated from packwiz to pakku for curseforge and serverpack exports](https://github.com/TheStaticVoid/StaTech-Industry/pull/591) - @fmbellomy
- [Add mod dev capes + hide dev items from EMI](https://github.com/TheStaticVoid/StaTech-Industry/pull/584/changes/c20932f1ae70cbc9d6e0ee47e8cea3af2fee4bda) - @truepurpledino
- [Add custom tips](https://github.com/TheStaticVoid/StaTech-Industry/issues/585) - @truepurpledino
- [Add custom LBR recipes, add custom CC recipes](https://github.com/TheStaticVoid/StaTech-Industry/issues/593) - @GW-Dev
- [Kill throwable supplementaries items](https://github.com/TheStaticVoid/StaTech-Industry/pull/584/commits/439be024470732d4df7260542e07bcbc9c2107d3) - @GW-Dev
- [Add recycler + scrap mechanics](https://github.com/TheStaticVoid/StaTech-Industry/issues/554) - @TheStaticVoid
- [Fix canner recipe helper](https://github.com/TheStaticVoid/StaTech-Industry/pull/594) - @fmbellomy
- [Fix custom MI gem ore hackiness](https://github.com/TheStaticVoid/StaTech-Industry/pull/597) - @fmbellomy
- [Add types to recipe helpers with JSDoc and add new recipe helpers](https://github.com/TheStaticVoid/StaTech-Industry/issues/595) - @GW-Dev
- [Remove default chain recipe in Packer](https://github.com/TheStaticVoid/StaTech-Industry/pull/598) - @fmbellomy
- [Quest fixes](https://github.com/TheStaticVoid/StaTech-Industry/pull/599) - @fmbellomy
- [Add code formatting CI](https://github.com/TheStaticVoid/StaTech-Industry/pull/601) - @fmbellomy
- [Improve gem XP drops](https://github.com/TheStaticVoid/StaTech-Industry/pull/603) - @fmbellomy
- [Add Bronze and Steel equipment](https://github.com/TheStaticVoid/StaTech-Industry/issues/605) - @truepurpledino + @GW-Dev
- [Add magic ender eye recipe](https://github.com/TheStaticVoid/StaTech-Industry/issues/604) - @truepurpledino

### Issues Fixed

- [#583](https://github.com/TheStaticVoid/StaTech-Industry/issues/583)
- [#585](https://github.com/TheStaticVoid/StaTech-Industry/issues/585)
- [#586](https://github.com/TheStaticVoid/StaTech-Industry/issues/586)
- [#587](https://github.com/TheStaticVoid/StaTech-Industry/issues/587)
- [#588](https://github.com/TheStaticVoid/StaTech-Industry/issues/588)
- [#590](https://github.com/TheStaticVoid/StaTech-Industry/issues/590)
- [#593](https://github.com/TheStaticVoid/StaTech-Industry/issues/593)
- [#595](https://github.com/TheStaticVoid/StaTech-Industry/issues/595)
- [#596](https://github.com/TheStaticVoid/StaTech-Industry/issues/596)
- [#602](https://github.com/TheStaticVoid/StaTech-Industry/issues/602)
- [#604](https://github.com/TheStaticVoid/StaTech-Industry/issues/604)
- [#605](https://github.com/TheStaticVoid/StaTech-Industry/issues/605)

## [2.0.0-rc1]

- Initial release
