/*Desmus is an archipelago in the Indian ocean. Being an advanced nation, it has built a network of M bridges between its N islands so that all of them can trade between each other. The islands are numbered from 0 to N-1. Trading can only take place through these bridges.
If an island is connected to more than one island, through bridges, then it indicates that a truck can unload and reroute when it visits that island.*/



//************************************NOTE
// u can run in tests mettel without using int main session


#include <stdio.h>

// Read only region start
int mincost(int input1, int input2, int input3, int **input4);
// Read only region end

int mincost(int input1, int input2, int input3, int **input4) {
    int N = input1;
    int M = input2;
    int K = input3;
    int island_connections[N];
    memset(island_connections, 0, sizeof(island_connections));  // Initialize array to 0

    // Count the number of connections for each island
    for (int i = 0; i < M; i++) {
        island_connections[input4[i][0]]++;
        island_connections[input4[i][1]]++;
    }

    // Calculate the total cost of check centers
    int total_cost = 0;
    for (int i = 0; i < N; i++) {
        if (island_connections[i] > 1) {
            total_cost += K;
        }
    }

    return total_cost;
}

int main() {
    int input1 = 7;
    int input2 = 6;
    int input3 = 5;
    int input4[][2] = {{0, 1}, {1, 2}, {3, 4}, {2, 4}, {2, 6}, {5, 2}};

    int output = mincost(input1, input2, input3, input4);
    printf("%d\n", output);  // Output: 15

    return 0;
}
