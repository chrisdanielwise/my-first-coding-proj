#include <stdio.h>

int sum(int x,int y);

int main(void){
    int n;
    n = sum(4,5);
    printf("The sum of the number is:%d",n);
    return (0);
}
int sum(int x,int y){
    int result;
    result = x + y;
    return (result);
}