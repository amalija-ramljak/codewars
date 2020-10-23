# include <string>

std::string disemvowel(std::string str) {
    std::string vowels = "aeiouAEIOU";
    std::string new_str = "";
    for(int i = 0; i < str.length(); i++){
        if(vowels.find_first_of(str[i]) == -1) {
          new_str += str[i];
        }
    }
    return new_str;
}