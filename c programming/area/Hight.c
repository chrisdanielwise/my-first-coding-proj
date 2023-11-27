#include <stdio.h>

// A ball is thrown vertically upwards with an initial speed of U meters per second. 
// Its height H after time T seconds is given by
// H = UT - 4.9T2
// Write a program that requests U and T and prints the height of the ball after T
// seconds

int main(){
    double H,T,U;
    printf("\nwhat is the value of U(meters)\n");
    scanf("%lf",&U);
    printf("\nWhat is the value of T(s)\n");
    scanf("%lf",&T);
    H = (U*T) - (9.8*T);
    printf("The value of H = %7.1lfm",H);
    return 0;
}