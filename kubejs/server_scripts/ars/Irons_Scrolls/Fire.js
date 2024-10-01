ServerEvents.recipes(event => {
    const recipes = [

        {
            id: "irons_spellbooks:fireball",
            items: ['minecraft:fire_charge', 'irons_spellbooks:rare_ink', 'minecraft:tnt', 'ars_nouveau:glyph_explosion', 'ars_nouveau:fire_essence', 'minecraft:fire_charge'],
            sourceCost: 5000,
        },
        
        {
            id: "irons_spellbooks:fire_breath",
            items: ['minecraft:torch', 'irons_spellbooks:common_ink', 'irons_spellbooks:fire_rune', 'botania:rune_fire', 'mh_automated:unfiltered_alcohol_bucket', 'ars_nouveau:source_gem'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:burning_dash",
            items: ['ars_nouveau:glyph_flare', 'irons_spellbooks:common_ink', 'ars_nouveau:air_essence', 'botania:rune_fire', 'ars_nouveau:fire_essence', 'botania:rune_fire'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:firebolt",
            items: ['irons_spellbooks:common_ink', 'ars_nouveau:fire_essence', 'minecraft:fire_charge'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:flaming_barrage",
            items: ['minecraft:lava_bucket', 'irons_spellbooks:rare_ink', 'minecraft:lava_bucket', 'ars_elemental:fire_focus', 'botania:rune_fire', 'minecraft:flint_and_steel', 'botania:rune_fire', 'ars_elemental:fire_focus'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:flaming_strike",
            items: [Item.of('minecraft:wooden_sword', '{Damage:0}'), 'irons_spellbooks:common_ink', 'botania:rune_fire', 'mh_automated:ethanol_bucket', 'supplementaries:candle_holder'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:heat_surge",
            items: ['ars_nouveau:glyph_explosion', 'irons_spellbooks:common_ink', 'create:steam_whistle', 'botania:endoflame', Item.of('minecraft:potion', '{Potion:"minecraft:fire_resistance"}'), 'botania:endoflame'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:magma_bomb",
            items: ['minecraft:magma_block', 'irons_spellbooks:uncommon_ink', 'bloodmagic:lavasigil', 'ars_elemental:lesser_fire_focus', 'minecraft:tnt', 'minecraft:tnt'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:blaze_storm",
            items: ['create:blaze_burner', 'irons_spellbooks:common_ink', 'botania:blaze_block', 'ars_nouveau:glyph_flare', 'botania:quartz_blaze', 'create:blaze_cake'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:wall_of_fire",
            items: ['ars_nouveau:fire_essence', 'irons_spellbooks:common_ink', 'ars_nouveau:fire_essence', 'botania:rune_fire', 'minecraft:nether_brick_wall'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:scorch",
            items: ['botania:rune_fire', 'irons_spellbooks:uncommon_ink', 'minecraft:campfire', 'minecraft:tnt', 'botania:rune_wrath'],
            sourceCost: 5000,
        },

    ]

    recipes.forEach((recipe) => {
        var temp_items = [];
        recipe.items.forEach((item) => {
          temp_items.push({ "item": item });
        });
        event.custom({
          "type": "ars_nouveau:enchanting_apparatus",
          "reagent": {
            "item": "ars_nouveau:spell_parchment"
          },
          "pedestalItems": temp_items,
          "output": {
            "item": "irons_spellbooks:scroll",
            "nbt": {
              "ISB_Spells": {
                "data": [
                  {
                    "id": recipe.id.toString(),
                    "index": 0,
                    "level": 1,
                    "locked": 1
                  }
                ],
                "maxSpells":1,
                "mustEquip":0,
                "spellWheel":0
              }
            }
          },
          "sourceCost": recipe.sourceCost,
          "count": 1
        });
    });
})
