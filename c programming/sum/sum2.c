#include <stdio.h>
#include <stdarg.h>

int sum(int x,int y,...);

int main(void){
    int n;
    n = sum(4,5,6,8,7);
    printf("The sum of the number is:%d",n);
    return (0);
}
int sum(int x,int y,...){
    va_list myfisrtcount;
    va_start (myfisrtcount,y);
    int result, z, a;
    z = va_arg(myfisrtcount,int);
    a = va_arg(myfisrtcount,int);
    result = x + y + z + a;
    va_end (myfisrtcount);
    return (result);
}