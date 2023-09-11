#include <iostream>
#include <fstream>

struct Person {
  char name[10];
  int age;
  int favoriteColor;
};

int main() {
  std::filebuf outFile;
  outFile.open("foo.bin", std::ios::out | std::ios::binary);

  return 0;
}