#include <cmath>
#include <string>

bool narcissistic( int value ){
  int digit_count = (int) std::to_string(value).size();
  int sum = 0;
  int remainder = value;
  while(remainder > 0) {
    sum += std::pow((float) (remainder % 10), digit_count);
    remainder = remainder / 10;
  }
  return sum == value;
}