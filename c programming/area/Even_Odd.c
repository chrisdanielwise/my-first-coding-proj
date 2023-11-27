#include <stdio.h>

/**
 *You can use this program to text for, instance, if a number h is even or odd.
 If h % 2 is 0 then h is even else if h % 7 gives the remainder when h is divided by 7;
*/

int main(void){
    printf("A program that test for Even and Odd nunbers\n");
    int h;
    printf("\nInput the value of h\n");
    scanf("%d",&h);
    if ( h % 2 == 0){
        printf("H is Even");
    }
    else if ( h % 2 == 1){
        printf("H is Odd");
    }
    else {
        printf("Input a valid number");
    }
    return 0;

}