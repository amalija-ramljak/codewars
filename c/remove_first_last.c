char* remove_char(char* dst, const char* src)
{
    int length = (int) strlen(src)/sizeof(src[0]);
    int j = 0;
    for(int i = 1; i < length-1; i++){
      dst[i-1] = src[i];
      j = i;
    }
    dst[j] = '\0';
    return dst;
}