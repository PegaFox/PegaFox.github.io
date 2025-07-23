+++
date = '2025-07-21T17:47:17-04:00'
draft = false
title = 'Cpp_file_handling'
+++

## C++ File Handling

Over the years, I've seen many tutorials on how to handle files in C++, but they always seem to have something missing. They might not explain filebufs, or ignore binary file handling, so with this article I aim to explain everything I have learned about how to use files in C++

### Basic string I/O

Here we will be using the fstream class, which requires you to include the fstream library

    #include <iostream>
    #include <fstream>
    using namespace std;
        
    int main() {
      // The ofstream class is used exclusively for writing to files
      ofstream outFile;
        
      // Opens the file foo.txt and prepares it for writing, if foo.txt does not exist yet, outFile will create the file
      outFile.open("foo.txt");
        
      string writeStr = "Hello, World!\n";
        
      // Writing formatted output to a file works just like cout
      outFile << writeStr << 42;
      cout << "Wrote " << writeStr << 42 << " to foo.txt\n";
        
      // After using a file you should always remember to close it
      outFile.close();
        
      // The ifstream class is used exclusively for reading from files
      ifstream inFile;
        
      // Similar to opening a file for writing, but won't create one if one doesn't already exist
      inFile.open("foo.txt");
        
      string firstWord;
      string secondWord;
      int number;
        
      // reading formatted input works similarly to cin
      inFile >> firstWord >> secondWord >> number;
        
      cout << "Read " << firstWord << " " << secondWord << "\n" << number << " from foo.txt\n";
        
      inFile.close();
        
      return 0;
    }

### Binary I/O

So storing human readable data is good and all, but what if you want to encrypt your data, or what if you want your files to be as compact as possible?  
Enter binary files, this lets you directly copy data from ram into a file and load it back when you're ready.  
  
Note: working directly with binary can be much more difficult than using plaintext, see [this link](https://gcc.gnu.org/onlinedocs/libstdc++/manual/fstreams.html#std.io.filestreams.binary) for details

    #include <iostream>
    #include <fstream>
    using namespace std;
        
    // Struct that will be copied to a file
    struct Person {
      char name[10];
      int age;
      int favoriteNumber;
    };
        
    int main() {
      // The filebuf class is lower level and recommended for binary I/O
      filebuf outFile;
        
      // Open file for writing raw data
      outFile.open("foo.bin", ios::out | ios::binary);
        
      Person output{
        "Calvin",
        6,
        0
      };
        
      // Gives the function a pointer to the first byte of the data
      outFile.sputn((char*)(&output), sizeof(Person));
      cout << "Wrote " << output.name << ' ' << output.age << ' ' << output.favoriteNumber << " to foo.bin\n";
        
      output = Person{
        "Hobbes",
        1,
        3
      };
        
      outFile.sputn((char*)(&output), sizeof(Person));
      cout << "Wrote " << output.name << ' ' << output.age << ' ' << output.favoriteNumber << " to foo.bin\n";
        
      outFile.close();
        
        
      filebuf inFile;
        
      inFile.open("foo.bin", ios::in | ios::binary);
        
      // Reserve memory for input
      Person input;
        
      // Gives the function a pointer to the new data location
      inFile.sgetn((char*)(&input), sizeof(Person));
      cout << "Read " << input.name << '\n' << input.age << '\n' << input.favoriteNumber << " from foo.bin\n\n";
        
      inFile.sgetn((char*)(&input), sizeof(Person));
      cout << "Read " << input.name << '\n' << input.age << '\n' << input.favoriteNumber << " from foo.bin\n\n";
        
      return 0;
    }

Well, that's all! I hope this helps with what you're working on!

[go back](/articles)
