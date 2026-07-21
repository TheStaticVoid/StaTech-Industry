# StaTech Industry 2.0.0rc1 Changelog:
We're getting close to full version release! This beta release is the last major update before the full release version of the pack. More batching machines have been added and a lot of polish and QoL has been worked on since the last beta. There are too many changes to summarize up here, but the detailed changelog is below. In general, the 1.0.0 version is feature complete. 

This update took a lot of effort by both myself (@GW-Dev) and by @truepurpledino. We don't have that much left for release! Practically just the GuideME pages for multiblocks + some wiki documentation. The next release (2.0-1.0.0rc1) will be the first release published to Curseforge. As for plans after 2.0-1.0.0rc1, we'll see how many bugs pop up, though we do have some ideas for the next two major content updates after the full release. We'll talk about that more after the full release drops.

As always, please make sure to file all issues on GitHub. Feedback in regards to progression, recipes, QoL, or anything else is also most welcome, though the Discord server is the best place for that. We'd really like to quash as many bugs as we can before 2.0-1.0.0rc1, so happy hunting!


## Mods added:
- [Acedium Sodiumized](https://www.curseforge.com/minecraft/mc-mods/acedium-sodiumized) - Replaces the Sodium renderer with one optimized for NVidia GPUs if being run on one
- [Chloride](https://www.curseforge.com/minecraft/mc-mods/chloride) - Sodium addon that allows more configurability
- [Create Crafts & Additions](https://www.curseforge.com/minecraft/mc-mods/createaddition) - Add electric utilities and QoL items to the Create mod
- [Create Deco](https://www.curseforge.com/minecraft/mc-mods/create-deco) - More Create-centric decorative blocks to spice up your factory!
- [KubeJS Curios](https://www.curseforge.com/minecraft/mc-mods/kubejs-curios) - Add Curios with KubeJS, used to make a better Angel ring and add the Fireproof ring
- [Lithium](https://www.curseforge.com/minecraft/mc-mods/lithium) - Server-side performance optimizations
- [Reese's Sodium Options](https://www.curseforge.com/minecraft/mc-mods/reeses-sodium-options) - Better Sodium options menu
- [Sodium](https://www.curseforge.com/minecraft/mc-mods/sodium) - Client-side rendering engine optimizations



## Mods removed:
- [Angel Ring](https://www.curseforge.com/minecraft/mc-mods/angel-ring) - Removed due to using NeoForge data attributes and KubeJS Curios to make a better custom Angel Ring
- [Embeddium](https://www.curseforge.com/minecraft/mc-mods/embeddium) - Replaced with Sodium for better render compatibility + maintainability
- [Flight API](https://www.curseforge.com/minecraft/mc-mods/flight-api) - Angel Ring dependency
- [HaydenAPI](https://www.curseforge.com/minecraft/mc-mods/haydenapi) - Angel Ring dependency
- [Monocle](https://www.curseforge.com/minecraft/mc-mods/monocle) - Obsoleted Embeddium-Iris compatibility layer
- [Nolijium](https://www.curseforge.com/minecraft/mc-mods/nolijium) - Replaced with Chloride due to the Sodium switch

## Mods updated:
- NeoForge loader version 21.1.135 -> 21.1.135
- [AllTheLeaks](https://www.curseforge.com/minecraft/mc-mods/alltheleaks) - 1.1.9+1.21.1 -> 1.1.10+1.21.1
- [Balm](https://www.curseforge.com/projects/531761) - 21.0.56 -> 21.0.62
- [Biolith](https://www.curseforge.com/projects/852512) - 3.0.11 -> 3.0.12
- [Certain Questing Additions](https://www.curseforge.com/projects/1372051) - 1.1.7 -> 1.2.0.3
- [Chat Heads](https://www.curseforge.com/projects/407206) - 0.15.1 -> 0.15.2
- [Chisel Reborn](https://www.curseforge.com/projects/551763) - 2.0.0+mc1.21.1 -> 2.0.1+mc1.21.1
- [Client Tweaks](https://www.curseforge.com/projects/251407) - 21.1.11 -> 21.1.13
- [Cognition](https://www.curseforge.com/minecraft/mc-mods/cognition-mod) - v2.4.12-1.21.1 -> v2.4.13-1.21.1
- [Concurrent Chunk Management Engine](https://www.curseforge.com/projects/533097) - 0.3.0+alpha.0.93+1.21.1 -> 0.4.0-alpha.0.113+1.21.1
- [Construction Sticks](https://www.curseforge.com/projects/1156098) - 1.3.0 -> 1.4.1
- [Cooking for Blockheads](https://www.curseforge.com/minecraft/mc-mods/cooking-for-blockheads) - 1.21.1-21.1.23 -> 1.21.1-21.1.24
- [Cupboard mod](https://www.curseforge.com/projects/326652) - 3.7 -> 3.8
- [Default Options](https://www.curseforge.com/projects/232131) - 21.1.6 -> 21.1.7
- [EMI Ores](https://www.curseforge.com/projects/974009) - 1.2+1.21.1+neoforge -> 1.3+1.21.1+neoforge
- [EntityCulling](https://www.curseforge.com/projects/448233) - 1.10.2 -> 1.10.5
- [Extended Industrialization](https://www.curseforge.com/projects/1068418) - 1.15.39-1.21.1 -> 1.15.45-1.21.1
- [ExtendedAE](https://www.curseforge.com/projects/892005) - 1.21-2.2.32-neoforge -> 1.21-2.2.33-neoforge
- [FTB Chunks](https://www.curseforge.com/projects/314906) - 2101.1.17 -> 2101.1.20
- [FTB Quests](https://www.curseforge.com/projects/289412) - 2101.1.26 -> 2101.1.27
- [FTB Ultimine](https://www.curseforge.com/projects/386134) - 2101.1.14 -> 2101.1.15
- [FancyMenu](https://www.curseforge.com/projects/367706) - 3.9.1 -> 3.9.6
- [FramedBlocks](https://www.curseforge.com/projects/441647) - 10.6.0 -> 10.6.1
- [Fusion](https://www.curseforge.com/projects/854949) - 1.2.12 -> 1.3.5
- [GeckoLib 4](https://www.curseforge.com/projects/388172) - 4.8.4 -> 4.9.2
- [ImmediatelyFast](https://www.curseforge.com/projects/686911) - 1.6.10+1.21.1 -> 1.6.11+1.21.1
- [Industrialization Overdrive](https://www.curseforge.com/minecraft/mc-mods/industrialization-overdrive) - 1.11.2+1.21.1 -> 1.12.1+1.21.1
- [Inventory Essentials](https://www.curseforge.com/projects/368825) - 21.1.15 -> 21.1.17
- [Iris Shaders](https://www.curseforge.com/minecraft/mc-mods/irisshaders) - 1.8.12+mc1.21.1 -> 1.8.14-beta.1+mc1.21.1
- [Kotlin for Forge](https://www.curseforge.com/projects/351264) - 7471280 -> 8335665
- [LambDynamicLights](https://www.curseforge.com/projects/393442) - 4.8.8+1.21.1 -> 4.8.10+1.21.1
- [Lithostitched](https://www.curseforge.com/projects/936015) - 1.7.9 -> 1.7.13
- [Little Big Redstone](https://www.curseforge.com/projects/1180560) - 1.9.0-1.21.1 -> 1.9.4-1.21.1
- [Lootr](https://www.curseforge.com/projects/361276) - 1.21.1-1.11.37.120 -> 1.21.1-1.11.37.121
- [ME Requester](https://www.curseforge.com/projects/688367) - 1.21.1-1.4.2 -> 1.21.1-1.4.3
- [MI Tweaks](https://www.curseforge.com/projects/1068413) - 1.9.1-1.21.1 -> 1.9.2-1.21.1
- [Mixed Litter](https://www.curseforge.com/projects/1221222) - 1.2.1 -> 1.2.2
- [Modern Industrialization](https://www.curseforge.com/projects/405388) - 2.4.3 -> 2.5.2
- [ModernFix](https://www.curseforge.com/projects/790626) - 5.27.12+mc1.21.1 -> 5.27.15+mc1.21.1
- [Moonlight Lib](https://www.curseforge.com/projects/499980) - 1.21.1-3.0.17 -> 1.21.1-3.1.0
- [No Man's Land](https://www.curseforge.com/projects/538493) - 1.5.7 -> 1.5.12
- [NotEnoughAnimations](https://www.curseforge.com/projects/433760) - 1.12.3 -> 1.12.4
- [Phantom's Utilities](https://www.curseforge.com/minecraft/mc-mods/phantoms-utilities) - 0.3.1 -> 0.3.2
- [Puzzles Lib](https://www.curseforge.com/projects/495476) - 21.1.51 -> 21.1.52
- [Sophisticated Backpacks](https://www.curseforge.com/projects/422301) - 3.25.55 -> 3.25.69
- [Sophisticated Core](https://www.curseforge.com/projects/618298) - 1.4.51 -> 1.4.70
- [Sophisticated Item Actions](https://www.curseforge.com/projects/1419142) - 0.5.4 -> 0.5.8
- [Sophisticated Storage](https://www.curseforge.com/projects/619320) - 1.5.57 -> 1.5.73
- [Supplementaries](https://www.curseforge.com/projects/412082) - 1.21.1-3.6.7 -> 1.21.1-3.8.0
- [Tesseract API](https://www.curseforge.com/projects/1067672) - 1.12.1-1.21.1 -> 1.12.7-1.21.1
- [TooManyRecipeViewers](https://www.curseforge.com/projects/1194921) - 0.8.1+mc.21.1 -> 0.9.0+mc.21.1
- [WaveyCapes](https://www.curseforge.com/projects/521594) - 1.9.2 -> 1.10.2
- [Waystones](https://www.curseforge.com/projects/245755) - 21.1.34 -> 21.1.36
- [Yet Another Industrialization!](https://www.curseforge.com/projects/1358516) - 1.5.0-1.21.1 -> 1.5.1-1.21.1

## Other changes:
- [Rename PTFE fluid](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/pull/87/changes/9fda2b3fd13299f7994fbec1d34e5ef5a221a3b1)
- [Add mob crusher model + dust tags](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/pull/87/changes/6ae968f2c0a9b5fbd3032fbaeb386d08343cf1b6)
- [Add food tags to custom items](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/pull/87/changes/c31eaac06322fc2a2b65b9272ec2e237a2c6b138)
- [Add silver loot drop](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/commit/53580ea350868097dbbc749aa4fcf7b8d5641736) - @truepurpledino 
- [Add silver + steel Create pressing, adjust silver loot drop rates](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/commit/f4ed032d1d43ea0044024c248c33fa1679afa9b9) - @truepurpledino
- [Add flowers to photosynthetic chamber](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/commit/49182a574846368f142c372ab66b60a3f3db05c5) - @truepurpledino
- [Add Enderium + Gold cables](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/commit/8e856562df4d3c908fe84a909bffd935a9464cda) - @truepurpledino
- [Fix Glaxx tagging](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/commit/3e8c759c1e5975f49ec5268e6da9d8cecde22015) - @truepurpledino
- [Readd iron drawer downgrade](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/commit/359d80eec5f13f52b0028b1f529a6f4ebb303f4e) - @truepurpledino
- Fix [#truepurpledino:10](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/10)
- Fix [#truepurpledino:26](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/26)
- Fix [#truepurpledino:48](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/48)
- Fix [#truepurpledino:50](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/50)
- Fix [#truepurpledino:52](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/52) 
- Fix [#truepurpledino:61](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/61) 
- Fix [#truepurpledino:62](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/62) 
- Fix [#truepurpledino:63](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/63) 
- Fix [#truepurpledino:64](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/64) 
- Fix [#truepurpledino:65](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/65) 
- Fix [#truepurpledino:66](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/66) 
- Fix [#truepurpledino:67](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/67) 
- Fix [#truepurpledino:68](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/68) 
- Fix [#truepurpledino:69](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/69) 
- Fix [#truepurpledino:70](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/70) 
- Fix [#truepurpledino:74](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/74)
- Fix [#truepurpledino:76](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/76) 
- Fix [#truepurpledino:77](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/77)
- Fix [#truepurpledino:78](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/78)
- Fix [#truepurpledino:79](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/79)
- Fix [#truepurpledino:83](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/83)
- Fix [#truepurpledino:85](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/85) 
- Fix [#truepurpledino:86](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/86) 
- Fix [#truepurpledino:88](https://github.com/truepurpledino/StaTech-Industry-1.21.1-Unofficial/issues/88)
- Fix [#552](https://github.com/TheStaticVoid/StaTech-Industry/issues/552)
- Fix [#553](https://github.com/TheStaticVoid/StaTech-Industry/issues/553) - @truepurpledino
- Fix [#557](https://github.com/TheStaticVoid/StaTech-Industry/issues/557)
- Fix [#558](https://github.com/TheStaticVoid/StaTech-Industry/issues/558)
- Fix [#560](https://github.com/TheStaticVoid/StaTech-Industry/issues/560)
- Fix [#562](https://github.com/TheStaticVoid/StaTech-Industry/issues/562)
- Fix [#563](https://github.com/TheStaticVoid/StaTech-Industry/issues/563)
- Fix [#564](https://github.com/TheStaticVoid/StaTech-Industry/issues/564)
- Fix [#566](https://github.com/TheStaticVoid/StaTech-Industry/issues/566)
- Fix [#567](https://github.com/TheStaticVoid/StaTech-Industry/issues/567)