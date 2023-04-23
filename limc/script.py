

with open("./limc/monsters.txt") as f:
    monsters = f.read()

data = monsters.split("#")

# Split each monster's attributes into a list of strings
monsters_data = [data[i:i+10] for i in range(0, len(data), 10)]

class Cost:
    def __init__(self, hoursPerWeek, costPerWeek, foodCost, materialCost):
        self.hoursPerWeek = float(hoursPerWeek)
        self.costPerWeek = float(costPerWeek)
        self.foodCost = float(foodCost)
        self.materialCost = float(materialCost)

class Monsters:
    def __init__(self, name, description, weight, height, location, dangerLevel, cost):
        self.name = name
        self.description = description
        self.weight = float(weight)
        self.height = float(height)
        self.location = location
        self.dangerLevel = int(dangerLevel)
        self.cost = Cost(*cost)

monsters = []

for data in monsters_data:
    # print(data)
    name = data[0]
    description = data[1]
    weight = data[2]
    height = data[3]
    location = data[4]
    dangerLevel = data[5]
    cost = data[6:10]
    monsters.append(Monsters(name, description, weight, height, location, dangerLevel, cost))

print(monsters)