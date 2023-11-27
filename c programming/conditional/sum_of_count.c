//print the sum and count of several numbers entered by a user
#include <stdio.h>
int main(void){
    int sum = 0, n = 0,num;
    printf("\nEnter num ( 0 to end):");
    scanf("%d",&num);
    while (num != 0)
    {
        n++;
        sum = sum + num;
        printf("Enter num (0 to end):");
        scanf("%d",&num);
    }

    if (n > 1) {
         printf("\nYou have sumed  %d numbers\n",n);
        printf("\nThe sum is %d",sum);
    }      
    else {
        printf("\nYou have sumed  %d number \n",n);
        printf("\nThe sum is %d",sum);
    }
    
}