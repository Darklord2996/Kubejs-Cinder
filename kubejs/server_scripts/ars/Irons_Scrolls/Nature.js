ServerEvents.recipes(event => {
    const recipes = [
         {
             "id": "irons_spellbooks:blight",
             "items": ['meds_and_herbs:parasiteeggs', 'irons_spellbooks:rare_ink', 'mh_automated:biomass', 'minecraft:poisonous_potato', 'minecraft:poisonous_potato', 'mh_automated:biomass'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:acid_orb",
             "items": ['irons_spellbooks:common_ink', 'iceandfire:hydra_fang', 'magistuarmory:chainmail_chestplate'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:earthquake",
             "items": ['minecraft:andesite', 'irons_spellbooks:uncommon_ink', 'minecraft:dirt', 'ars_elemental:lesser_earth_focus', 'minecraft:granite', 'minecraft:stone', 'irons_spellbooks:nature_rune', 'ars_elemental:earth_turret'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:firefly_swarm",
             "items": ['minecraft:torchflower', 'irons_spellbooks:uncommon_ink', 'ars_elemental:glyph_insect_filter', 'irons_spellbooks:firefly_jar'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:gluttony",
             "items": ['irons_spellbooks:common_ink', 'farmersdelight:roast_chicken_block', 'botania:rune_gluttony'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:oakskin",
             "items": ['irons_spellbooks:common_ink', Item.of('minecraft:shield', '{Damage:0}'), 'minecraft:oak_log', 'ars_nouveau:earth_essence', 'supplementaries:flax'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:poison_arrow`",
             "items": ['irons_spellbooks:common_ink', 'minecraft:spider_eye', 'minecraft:fermented_spider_eye', 'minecraft:spectral_arrow'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:poison_breath",
             "items": ['meds_and_herbs:belladonna_berry', 'meds_and_herbs:poison', 'meds_and_herbs:belladonna_leaves', 'irons_spellbooks:common_ink'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:poison_splash",
             "items": ['botania:rune_wrath', 'botania:rune_earth', 'meds_and_herbs:poison', 'irons_spellbooks:uncommon_ink'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:root",
             "items": ['botania:magenta_mystical_flower', 'irons_spellbooks:common_ink', 'minecraft:vine', 'botania:magenta_mystical_flower', 'minecraft:mangrove_roots'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:spider_aspect",
             "items": ['minecraft:cobweb', 'irons_spellbooks:common_ink', 'minecraft:spider_eye', 'minecraft:fermented_spider_eye', 'minecraft:cave_spider_spawn_egg', 'minecraft:cobweb'],
             "sourceCost": 5000,
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
