ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        "magistuarmory:steel_ingot",
        ["minecraft:iron_ingot", "#minecraft:coals", "eidolon:pewter_blend"]
    )

    event.recipes.create.mixing(
        "4x irons_spellbooks:common_ink",
        ["minecraft:glass_bottle", "minecraft:feather", "minecraft:ink_sac", Fluid.of("starbunclemania:source_fluid", 100)]
    )
    event.recipes.create.mixing(
        "3x irons_spellbooks:uncommon_ink",
        ["4x irons_spellbooks:common_ink", "ars_nouveau:manipulation_essence", "supplementaries:antique_ink", Fluid.of("starbunclemania:source_fluid", 200)]
    )
    event.recipes.create.mixing(
        "2x irons_spellbooks:rare_ink",
        ["4x irons_spellbooks:uncommon_ink", "ars_nouveau:source_gem_block", "botania:terrasteel_ingot", "eidolon:magic_ink", Fluid.of("starbunclemania:source_fluid", 400)]
    )
    event.recipes.create.mixing(
        "irons_spellbooks:epic_ink",
        ["4x irons_spellbooks:rare_ink", "3x ars_nouveau:magebloom_fiber", "botania:life_essence", "apotheosis:epic_material", Fluid.of("starbunclemania:source_fluid", 800)]
    )
    event.recipes.create.mixing(
        "irons_spellbooks:legendary_ink",
        ["4x irons_spellbooks:epic_ink", "apotheosis:mythic_material", "botania:gaia_ingot", Fluid.of("starbunclemania:source_fluid", 1000)]
    )

    event.recipes.create.mixing(
        "4x create:andesite_alloy",
        ['minecraft:polished_andesite', '2x minecraft:iron_nugget', '2x create:zinc_nugget']
    )

    event.recipes.create.crushing(
        [
            Item.of("create:veridium").withChance(0.15),
            Item.of("create:ochrum").withChance(0.15),
            Item.of("create:scoria").withChance(0.15),
            Item.of("create:asurine").withChance(0.15),
            Item.of("create:crimsite").withChance(0.15),
            Item.of("create:scorchia").withChance(0.15),
            Item.of("create:experience_nugget").withChance(0.15),
        ],
        "minecraft:stone"
    )

    event.recipes.create.crushing(
        [
            Item.of("minecraft:coal").withChance(0.2),
            Item.of("minecraft:coal_ore").withChance(0.05),
            Item.of("minecraft:deepslate_coal_ore").withChance(0.05)
        ],
        "create:scorchia"
    )

    event.recipes.create.crushing(
        [
            Item.of("eidolon:lead_nugget").withChance(0.2),
            Item.of("create:crushed_raw_lead").withChance(0.2)
        ],
        "create:scoria"
    )

    var inter

    // inter = "kubejs:incomplete_apothecary"
    // event.recipes.create.sequenced_assembly([
    //     "botania:apothecary_default"
    // ], "#botania:petals", [
    //     event.recipes.createDeploying(inter, [inter, "minecraft:cobblestone"]),
    //     event.recipes.createFilling(inter, [inter, Fluid.of("minecraft:water", 250)]),
    //     event.recipes.createPressing(inter, inter),
    // ]).transitionalItem(inter).loops(4)

    inter = "kubejs:incomplete_arcane_core"
    event.recipes.create.sequenced_assembly([
        "ars_nouveau:arcane_core"
    ], "irons_spellbooks:energized_core", [
        event.recipes.createDeploying(inter, [inter, "create:precision_mechanism"]),
        event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, "eidolon:lesser_soul_gem"]),
        event.recipes.createFilling(inter, [inter, Fluid.of("starbunclemania:source_fluid", 1000)]),
        event.recipes.createDeploying(inter, [inter, "minecraft:gold_ingot"]),
    ]).transitionalItem(inter).loops(3)

    inter = "kubejs:incomplete_enchanting_aparatus"
    event.recipes.create.sequenced_assembly([
        "ars_nouveau:enchanting_apparatus"
    ], "minecraft:enchanting_table", [
        event.recipes.createDeploying(inter, [inter, "create:precision_mechanism"]),
        event.recipes.createPressing(inter, inter),
        event.recipes.createDeploying(inter, [inter, "minecraft:amethyst_block"]),
        event.recipes.createFilling(inter, [inter, Fluid.of("starbunclemania:source_fluid", 1000)]),
        event.recipes.createDeploying(inter, [inter, "minecraft:gold_ingot"]),
    ]).transitionalItem(inter).loops(3)

    inter = "kubejs:incomplete_imbuement_chamber"
    event.recipes.create.sequenced_assembly([
        "ars_nouveau:imbuement_chamber"
    ], "ars_nouveau:archwood_planks", [
        event.recipes.createDeploying(inter, [inter, "minecraft:gold_ingot"]),
        event.recipes.createPressing(inter, inter),
    ]).transitionalItem(inter).loops(4)

    inter = "create:incomplete_precision_mechanism"
    event.recipes.create.sequenced_assembly([
        "create:precision_mechanism"
    ], "create:andesite_alloy", [
        event.recipes.createDeploying(inter, [inter, "create:large_cogwheel"]),
        event.recipes.createDeploying(inter, [inter, "create:cogwheel"]),
        event.recipes.createDeploying(inter, [inter, "create:brass_sheet"]),
        event.recipes.createPressing(inter, inter),
    ]).transitionalItem(inter).loops(15)

    inter = "kubejs:incomplete_energized_core"
    event.recipes.create.sequenced_assembly([
        "irons_spellbooks:energized_core"
    ], "create:precision_mechanism", [
        event.recipes.createDeploying(inter, [inter, "irons_spellbooks:lightning_bottle"]),
        event.recipes.createDeploying(inter, [inter, "eidolon:lesser_soul_gem"]),
        event.recipes.createDeploying(inter, [inter, "minecraft:copper_block"]),
        event.recipes.createPressing(inter, inter),
    ]).transitionalItem(inter).loops(5)
})
