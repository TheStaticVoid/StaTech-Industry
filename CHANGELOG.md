# Changelog

## [Unreleased]

- Removed Jon Bartman due to public backlash

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
