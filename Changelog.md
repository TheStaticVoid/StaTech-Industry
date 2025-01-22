# StaTech Industry 1.1.15 Changelog:
This is a follow up patch to the previous one that addresses some issues found with the patch as well as some QoL updates. If you're using an existing instance, you will have to enable the emissive texture packs manually. New installs should have them enabled by default.

I've tacked on a rather large change to this patch with downtiering the requirements for AE2 from MV and HV to LV and MV. This means as soon as you have electric machines, you can start using AE2 to automate item transfer rather than relying on Tom's Simple Storage Mod. Autocrafting is still gated to MV just because it should be separate to avoid players falling into the pitfalls of autocrafting early.

## Mods added:
- [AOF: Emissive Ores](https://www.curseforge.com/minecraft/texture-packs/all-of-fabric-emissive-ores) - Emissive ore resource pack by PurpleDino
- [cAn i MiNe thIS bLOCk?](https://www.curseforge.com/minecraft/mc-mods/can-i-mine-this-block) - WTHIT addon
- [Emissive TXF](https://www.curseforge.com/minecraft/texture-packs/emissive-txf) - Emissive ore resource pack for vanilla ores
- [Iris & Oculus Flywheel Compat](https://www.curseforge.com/minecraft/mc-mods/iris-flywheel-compat) - Removed for being broken awhile back, should be good now
- [WTHIT](https://www.curseforge.com/minecraft/mc-mods/wthit) - Replaces Jade

## Mods removed:
- [Jade](https://www.curseforge.com/minecraft/mc-mods/jade) - Reverting back to WTHIT. This mod did not support viewing content of MI fluid pipes or energy cables
- [Jade: Addons](https://www.curseforge.com/minecraft/mc-mods/jade-addons-fabric)

## Mods updated:
- Fabric loader version 0.16.9 -> 0.16.10
- [Inventory Profiles Next](https://www.curseforge.com/minecraft/mc-mods/inventory-profiles-next) - 1.10.11 -> 1.10.12
- [SuperMartijn642's Core Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib) - 1.1.18 -> 1.1.18a

## Mods downgraded:
- [Roughly Enough Items](https://www.curseforge.com/minecraft/mc-mods/roughly-enough-items) - 9.2.784 -> 9.1.695 - Fixes crash with looking at cutting board recipes

## Other changes:
- Completionist cape list updates
- [Revert REI cheat mode being enabled by default](https://github.com/TheStaticVoid/StaTech-Industry/commit/0eb5a6b9e6392157b5fe4c9fe7128c952fe76db1)
- [Blacklisted spectrum colored logs from Supplementaries soap](https://github.com/TheStaticVoid/StaTech-Industry/commit/223f6bb2d92ea9538116e55a7a7726ef76f6fce3)
- [Added new Spectrum saplings to the Industrial Greenhouse](https://github.com/TheStaticVoid/StaTech-Industry/commit/c035e0fe520c194383f06b8a01131580997e3648)
- [Added macerator recipes for new Spectrum logs](https://github.com/TheStaticVoid/StaTech-Industry/commit/6511e59365d958d2c2ecbc74e6a25ab0bf795a26)
- [Added macerator recipes for new Spectrum gem](https://github.com/TheStaticVoid/StaTech-Industry/commit/5170a66430d8ffcef9d36e187e511af20771b5ac)
- [Added extra information for the moonstone unlock](https://github.com/TheStaticVoid/StaTech-Industry/pull/529/commits/532f5e9030643d723e681cb56b7ed526c2666ae2)
- [Fixed double "Added by StaTech Industry" tooltips](https://github.com/TheStaticVoid/StaTech-Industry/pull/530) - by DmitryProskurin
- [Added macerator recipes for new Spectrum bud blocks](https://github.com/TheStaticVoid/StaTech-Industry/pull/531) - by DmitryProskurin
- [Downtier AE2 recipes and quests from MV&HV to LV&MV](https://github.com/TheStaticVoid/StaTech-Industry/pull/529/commits/67e684cbf60c15fc1b7732fd25f3d44476f01192)
- [Remove incorrect information in the overclocking quest](https://github.com/TheStaticVoid/StaTech-Industry/pull/529/commits/198fdf2d0074c0d0291115a859aeb62f258c4df8)