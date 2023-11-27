#include <stdio.h>
#include <string.h>

int main(){
    char name[50];
    char class[30] = " Alic is a girl";
    strcpy(name,"Let me try out something");
    strcat(name, class);
    printf("Hello %s",name);
}