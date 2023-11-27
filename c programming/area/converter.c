#include <stdio.h>

// Write a program which, given a length in inches, converts it to yards, feet, and 
// inches. (1 yard = 3 feet, 1 foot = 12 inches). For example, if the length is 100
// inches, the program should print 2 yd 2 ft 4 in.

int main(){
    double yard, inches,foot;
    foot = 12*inches;
    yard = 3*foot;
   
    printf("\nWhat is the length in inches\n");
    scanf("%lf",&inches);
    printf("\nThe value is %.1lf yd\n",yard);
    printf("\nThe value is %.1lf ft\n",foot);
 }