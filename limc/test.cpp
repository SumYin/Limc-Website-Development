#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>

struct Cost {
    double hoursPerWeek;
    double costPerWeek;
    double foodCost;
    double materialCost;
};

struct Monsters {
    std::string name;
    std::string description;
    double weight;
    double height;
    std::string location;
    int dangerLevel;
    Cost cost;
};

std::vector<std::string> split(const std::string &s, char delimiter) {
    std::vector<std::string> tokens;
    std::string token;
    std::istringstream tokenStream(s);
    while (std::getline(tokenStream, token, delimiter)) {
        tokens.push_back(token);
    }
    return tokens;
}

int loadMonstersFromFile(int numMonsters, Monsters monsterArray[]) {
    std::ifstream file("./limc/monsters.txt");
    std::string monsters_str((std::istreambuf_iterator<char>(file)),
                             std::istreambuf_iterator<char>());

    auto data = split(monsters_str, '#');

    // Split each monster's attributes into a list of strings
    std::vector<std::vector<std::string>> monsters_data;
    for (size_t i = 0; i < data.size(); i += 10) {
        monsters_data.push_back({data.begin() + i, data.begin() + i + 10});
    }

    int monstersLoaded = 0;

    for (int i = 0; i < static_cast<int>(monsters_data.size()) && i < numMonsters; ++i) {
        const auto &data = monsters_data[i];
        Monsters monster;
        monster.name = data[0];
        monster.description = data[1];
        monster.weight = std::stod(data[2]);
        monster.height = std::stod(data[3]);
        monster.location = data[4];
        monster.dangerLevel = std::stoi(data[5]);
        monster.cost.hoursPerWeek = std::stod(data[6]);
        monster.cost.costPerWeek = std::stod(data[7]);
        monster.cost.foodCost = std::stod(data[8]);
        monster.cost.materialCost = std::stod(data[9]);
        monsterArray[i] = monster;
        ++monstersLoaded;
    }

    return monstersLoaded;
}

int main() {
    const int numMonsters = 10;
    Monsters monsters[numMonsters];
    int monstersLoaded = loadMonstersFromFile(numMonsters, monsters);

    for (int i = 0; i < monstersLoaded; ++i) {
        const auto &monster = monsters[i];
        std::cout << monster.name << '\n';
    }

    return 0;
}