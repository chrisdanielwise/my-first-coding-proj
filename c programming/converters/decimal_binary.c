#include <stdio.h>

/**
 * A program that converts decimal to binary
 */

// int decimalToBinary(int n){
//     int num = n;
//     int weight = 2;
//     int binary;
//     while (num != 0)
//     {
//         binary += num % weight;
//         num = num / weight;
//     }
//     return binary;
    
// }
// int decimalToBinary(int);
// int main(){
//     int num = 38;
//     printf("%d",decimalToBinary(num));
// }

long decimalToBinary(int demal){
    long binary = 0, mod,tmp = 1;
    while (demal != 0)
    {
        mod = demal % 2;
        binary += mod*tmp;
        tmp *=10;
        demal /= 2;
    }
    return binary;
    
}
long decimalToBinary(int);
int main(){
    int decimal;
    printf("Enter digit (1 to end)\n");
    scanf("%d",&decimal);
    printf("\nThe answer of converting %d decimal to binary is %d ",decimal,decimalToBinary(decimal));
}