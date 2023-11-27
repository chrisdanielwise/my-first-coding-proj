#include <stdio.h>
#include <stdarg.h>

int sum(int count,...);

int main(void){

    int n;
    int count;
    printf("please input the total number you want to count:\n");
    scanf("%d",&count);
    n = sum(count,1,2,3,4,5);
   
    printf("The value of sum = %d",n);
    return (0);
}
int sum( int count,...){
    va_list MY_SUM;
    va_start (MY_SUM, count);

    int result,i;
    result = 0;

    for(i = 0; i < count; i++){
        result+= va_arg(MY_SUM, int);
    }
    va_end (MY_SUM);
    return (result);
}