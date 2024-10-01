ServerEvents.recipes(event => {
    const recipes = [
         {
             "id": "irons_spellbooks:haste",
             "items": ['irons_spellbooks:priest_boots', 'supplementaries:sugar_cube', 'irons_spellbooks:common_ink', 'minecraft:sugar'],
             "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:healing_circle",
             "items": ['irons_spellbooks:common_ink', 'minecraft:ghast_tear', 'ars_nouveau:manipulation_essence', 'ars_nouveau:abjuration_essence', 'ars_nouveau:glyph_heal', 'ars_nouveau:abjuration_essence'],
             "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:fortify",
             "items": ['botania:manasteel_block', 'irons_spellbooks:common_ink', 'minecraft:golden_apple', 'minecraft:golden_chestplate', 'botania:manasteel_block'],
             "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:divine_smite",
             "items": ['irons_spellbooks:holy_rune', 'irons_spellbooks:holy_rune', 'irons_spellbooks:holy_rune', 'magistuarmoryaddon:steel_executioners_sword', 'irons_spellbooks:common_ink', 'irons_spellbooks:divine_pearl'],
             "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:guiding_bolt",
             "items": ['irons_spellbooks:common_ink', 'irons_spellbooks:holy_rune', 'minecraft:compass', 'irons_spellbooks:holy_upgrade_orb'],
             "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:greater_heal",
             "items": ['irons_spellbooks:rare_ink', 'minecraft:glistering_melon_slice', 'irons_spellbooks:cooldown_rune', 'ars_nouveau:glyph_heal', 'meds_and_herbs:medkit_expert', 'eidolon:sanguine_amulet'],
             "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:blessing_of_life",
             "items": ['irons_spellbooks:common_ink', 'irons_spellbooks:cooldown_rune', 'minecraft:glistering_melon_slice', 'botania:pure_daisy', 'irons_spellbooks:divine_pearl', 'botania:dandelifeon'],
             "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:angel_wing",
             "items": ['#iceandfire:scales/dragon', '#iceandfire:scales/sea_serpent', 'ars_elemental:mark_of_mastery', 'eidolon:holy_symbol', 'ars_elemental:mark_of_mastery', 'irons_spellbooks:holy_rune', 'irons_spellbooks:epic_ink', 'iceandfire:amphithere_feather'],
             "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:wisp",
             "items": ['botania:purple_mystical_flower', 'irons_spellbooks:common_ink', 'irons_spellbooks:arcane_essence', 'eidolon:soul_shard', 'minecraft:feather'],
             "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:heal",
             "items": ['botania:pure_daisy', 'botania:rune_earth', 'botania:rune_spring', 'botania:rune_summer', 'botania:spark'],
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
