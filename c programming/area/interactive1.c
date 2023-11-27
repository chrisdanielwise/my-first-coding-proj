#include <stdio.h>

// Write a program that, when run, works as follows (underlined items are typed by 
// the user):
// Hi, what's your name? Alice
// Welcome to our show, Alice
// How old are you? 27
// Hmm, you don't look a day over 22
// Tell me, Alice, where do you live? Princes Town
// Oh, I've heard Princes Town is a lovely place

int main(){
    char name[30] ,address[50];
    int age;

    printf("\nHi, what's your name?\n");
    gets(name);
    printf("\nwelcome to our show, %s\n",name);
    printf("\nHow old are you?\n");
    scanf("%d",&age);
    printf("\nHmm, you don't look a day over %d\n",age);
    printf("\nTell me, %s, where do you live?\n",name);
    gets(address);
    printf("\nOh, I've heard %s is a lovely place\n",address);
    

}