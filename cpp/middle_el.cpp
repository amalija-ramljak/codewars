#include <string>

std::string get_middle(std::string input) 
{
  int middle = input.length() - 1;
  std::string res = "";
  if(middle % 2 == 0) {
    return res + input[middle/2];
  } else {
    return res + input[middle/2] + input[1 + middle/2];
  }
}