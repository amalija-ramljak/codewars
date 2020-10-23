#include <string>

std::string abbrevName(std::string name)
{
  std::string ab = "";
  ab.push_back(toupper(name[0]));
  ab.push_back('.');
  int lastname = name.find(" ") + 1;
  ab.push_back(toupper(name[lastname]));
  return ab;
}