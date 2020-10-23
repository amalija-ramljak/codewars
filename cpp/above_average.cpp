#include <vector>

bool betterThanAverage(std::vector<int> classPoints, int yourPoints) {
  int sum = yourPoints;
  for(std::vector<int>::iterator it = classPoints.begin(); it != classPoints.end(); it++) {
    sum += *it;
  }
  sum /= (float) (classPoints.size()+1);
  return yourPoints > sum;
}