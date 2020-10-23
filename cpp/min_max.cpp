#include <string>
#include <vector>
#include <sstream>
#include <algorithm>

std::string highAndLow(const std::string& numbers){
  std::stringstream ss(numbers);
  std::vector<int> v;
  int n;
  while(!ss.eof()) {
    ss >> n;
    v.push_back(n);
  }
  std::sort(v.begin(), v.end());
  return std::to_string(*(v.end()-1)) + " " + std::to_string(*(v.begin()));
}