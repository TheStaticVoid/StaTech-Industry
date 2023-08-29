# StaTech Industry 1.1.8 Changelog:
I meant for this to be a small bugfix patch and it ended up being a bit larger than expected. Included with this patch are a new processing chain for creating Chlorine and Sodium Hydroxide from Salt Water, a new fluid you can obtain from the Oil Drilling Rig. I'm waiting for an update to Modern Industrialization that will allow this recipe to require the multiblock to be in any of the ocean biomes, so keep an eye out for that. Along with this, there are a lot of QoL changes and bugfixes.

## Mods added:
- [Couplings](https://www.curseforge.com/minecraft/mc-mods/couplings) - Replaces the Double Door mod. Plays well with Create.
- [FastBench for Fabric](https://www.curseforge.com/minecraft/mc-mods/fastbench-for-fabric) - An older mod but might help fix some of the lag with crafting benches users have reported

## Mods updated:
- [Ad Astra: Giselle Addon](https://www.curseforge.com/minecraft/mc-mods/ad-astra-giselle-addon) - 2.1.16 -> 2.1.18
- [Applied Energistics 2](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2) - 12.9.6 -> 12.9.7
- [Create](https://www.curseforge.com/minecraft/mc-mods/create-fabric) - 0.5.1-b-build.1089 -> 0.5.1-c-build.1160
- [Create: Steam 'n' Rails](https://www.curseforge.com/minecraft/mc-mods/create-steam-n-rails) 1.4.3 -> 1.5.0
- [Cupboard](https://www.curseforge.com/minecraft/mc-mods/cupboard) - 1.6 -> 1.8
- [Fabric Language Kotlin](https://www.curseforge.com/minecraft/mc-mods/fabric-language-kotlin) - 1.10.8+kotlin1.9.0 -> 1.10.10+kotlin1.9.10
- [Farmer's Delight](https://www.curseforge.com/minecraft/mc-mods/farmers-delight-fabric) - 1.3.10 -> 1.3.10.1
- [FTB Chunks](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-fabric) - 1902.4.1-build.290 -> 1902.4.2-build.302
- [FTB Quests](https://www.curseforge.com/minecraft/mc-mods/ftb-quests-fabric) - 1902.5.3-build.268 -> 1902.5.4-build.275
- [FTB XMod Compat](https://www.curseforge.com/minecraft/mc-mods/ftb-xmod-compat) - 1.2.1 -> 1.2.2
- [Inventory Profiles Next](https://www.curseforge.com/minecraft/mc-mods/inventory-profiles-next) - 1.10.6 -> 1.10.7
- [Just Enough Calculation](https://www.curseforge.com/minecraft/mc-mods/just-enough-calculation) - 4.0.2 -> 4.0.3
- [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs) - 1902.6.1-build.362 -> 1902.6.1-build.364
- [libIPN](https://www.curseforge.com/minecraft/mc-mods/libipn) - 3.0.2 -> 4.0.0
- [ModernFix](https://www.curseforge.com/minecraft/mc-mods/modernfix) - 5.6.1 -> 5.7.1
- [Redirectionor](https://www.curseforge.com/minecraft/mc-mods/redirectionor) - 3.2.3 -> 3.3.2
- [Rhino](https://www.curseforge.com/minecraft/mc-mods/rhino) - 1902.2.2-build-268 -> 1902.2.2-build.272
- [Shear Cows](https://www.curseforge.com/minecraft/mc-mods/shear-cows) - 1.0.0 -> 1.0.1
- [Simple Voice Chat](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat) - 2.4.20 -> 2.4.24
- [SuperMartijn642's Config Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-config-lib) - 1.1.7 -> 1.1.8
- [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries) - 2.3.22 -> 2.3.24
- [WTHIT](https://www.curseforge.com/minecraft/mc-mods/wthit) - 5.18.1 -> 5.19.0

## Mods removed:
- [Double Doors](https://www.curseforge.com/minecraft/mc-mods/double-doors) - Replaced by Couplings, didn't play well with Create double doors.

## Other changes:
- [Add stonecutting recipes for chisel and factory blocks - by @redcatone](https://github.com/TheStaticVoid/StaTech-Industry/pull/402)
- [Added new processing chain to make chlorine and sodium hydroxide from salt water](https://github.com/TheStaticVoid/StaTech-Industry/issues/412)
- [Add GregSchizo to Emojiful](https://github.com/TheStaticVoid/StaTech-Industry/issues/396)
- [Fixed Crimson Berries being consumed in Photosynthetic Chamber](https://github.com/TheStaticVoid/StaTech-Industry/issues/396)
- [Set Faster Texture Stitching to false](https://github.com/TheStaticVoid/StaTech-Industry/issues/398) - Addresses the weird texture bugs when Iris is not installed
- [Add c:stripped_logs tag to Stripped White Oak Logs](https://github.com/TheStaticVoid/StaTech-Industry/issues/400)
- [Added three new nutrient rich fluid variants for boosted greenhouse recipes](https://github.com/TheStaticVoid/StaTech-Industry/issues/403) - Currently the fluids are only used here, but I have ideas for using them elsewhere in the future. This was mainly to fix the issue with recipes not being run with bonemeal.
- [Added override to the Sodalite loot table so it drops MI Aluminum Dust instead](https://github.com/TheStaticVoid/StaTech-Industry/issues/405)
- [Adjusted the recipe for the Rocket Part Assembler](https://github.com/TheStaticVoid/StaTech-Industry/issues/406)
- [TechReborn Quantum Suit now requires the Tech Enhanced Nano Suit](https://github.com/TheStaticVoid/StaTech-Industry/issues/407)
- [Updated Doped silicon plate textures](https://github.com/TheStaticVoid/StaTech-Industry/issues/409)
- [Buffed the Enderman mob crusher model](https://github.com/TheStaticVoid/StaTech-Industry/issues/414)
- [Add mixer recipe for Cultural Delights' pickle](https://github.com/TheStaticVoid/StaTech-Industry/issues/410)
- [Fixed typo in electric packer quest](https://github.com/TheStaticVoid/StaTech-Industry/pull/416/commits/03f1b6742aa8f5bba9d2ee3edcdd254e5a40a1ee)
- [Ponder startup script cleanup](https://github.com/TheStaticVoid/StaTech-Industry/issues/395) - Purely behind the scenes stuff
- [Updated some quest description to inform the player about charging items in storage units](https://github.com/TheStaticVoid/StaTech-Industry/issues/411)
- [Add compressor recipe for netherite nuggets -> netherite ingot](https://github.com/TheStaticVoid/StaTech-Industry/issues/418)
- [Add assembler recipe for breaking down transformers](https://github.com/TheStaticVoid/StaTech-Industry/issues/419)
- [Nerfed TechReborn UU-Matter recipes for Uranium and Iridium](https://github.com/TheStaticVoid/StaTech-Industry/issues/413)
- [Added recipe for Barbed Wire and removed some unused Crafts & Additions items](https://github.com/TheStaticVoid/StaTech-Industry/issues/404)
- [Updated Crafts & Additions Alternator config](https://github.com/TheStaticVoid/StaTech-Industry/issues/404)
- [Updated chapter 6 progression to match proper recipe requirements](https://github.com/TheStaticVoid/StaTech-Industry/commit/aaa1c5614d94e77f14b5a66cb8a124b037c26f2a)