#include <vector>
#include <algorithm>
#include <cmath>

bool sort(int a, int b) {
    return std::abs(a) < std::abs(b);
}

bool comp(std::vector<int>&a, std::vector<int>&b) {
    if(a.size() != b.size()) {
        return false;
    }
    std::sort(a.begin(), a.end(), sort);  
    std::sort(b.begin(), b.end(), sort);
    for(size_t i = 0; i < a.size(); i++) {
        if(b[i] != a[i]*a[i]) {
            return false;
        }
    }
    return true;
}