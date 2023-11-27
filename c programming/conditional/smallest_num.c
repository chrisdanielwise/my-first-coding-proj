#include <stdio.h>

int main(){
    double small_num = 0;
    double num ;
    int n = 0;
    printf("Enter num (0 to end):\n");
    scanf("%lf",&num);
    while ( num != 0 )
    {   
        n = n + 1;
        if(num < small_num){
            small_num = num;
        }
        printf("Enter num (0 to end):\n");
        scanf("%lf",&num);
    }
    printf("\nYou have entered %d\n",n);
    printf("\nThe smallest num is %lf\n",small_num);

    
}