#include <string>

std::string sum_to_n(int n) {
    if(n < 0) {
        return std::to_string(n) + "<0";
    }
    if(n == 0) {
        return "0=0";
    }
    std::string s = "0";
    int sum = 0;
    for(int i = 1; i <= n; i++) {
        s += "+" + std::to_string(i);
        sum += i;
    }
    s += " = " + std::to_string(sum);
    // format "0+1+2+...+n = sum"
    return s;
}