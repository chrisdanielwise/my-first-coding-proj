#include <stdio.h>

int main(){
    int num; 
    double square;
    printf("input the value of the sqare:\n");
    scanf("%d",&num);
    square = num*num;
    printf("\nThe square of %d is: %d\n",num,square);
}