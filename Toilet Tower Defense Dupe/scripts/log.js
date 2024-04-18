def duplicate_units(unit_id):
    units = load_units_from_database(unit_id)
    duplicated_units = []
    for unit in units:
        for i in range(2):
            duplicated_units.append(unit.clone())  # Cloning unit
    return duplicated_units

def duplicate_gems(player_id):
    player = get_player(player_id)
    gems = player.get_gems()
    duplicated_gems = []
    for gem in gems:
        for i in range(2):
            duplicated_gems.append(gem.copy())  # Copying gem
    return duplicated_gems

def main():
    unit_id = 123
    player_id = 456
    duplicated_units = duplicate_units(unit_id)
    duplicated_gems = duplicate_gems(player_id)
    # Adding duplicated units and gems to player's inventory
    add_units_to_inventory(player_id, duplicated_units)
    add_gems_to_inventory(player_id, duplicated_gems)
