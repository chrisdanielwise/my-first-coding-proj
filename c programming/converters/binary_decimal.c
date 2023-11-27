#include <stdio.h>
/**
 * convertion from one base to another
*/

int binaryToDecimal(int);

int main(){
    int binary;
    printf("Enter your binary number here\n");
    scanf("%d",&binary);
    printf("\n\nThe binary number of %d is %d\n",binary,binaryToDecimal(binary));
    return 0;
}

// Function to convert binary to decimal
int binaryToDecimal(int n){
    int num = n;
    int weight = 1;
    int last_bit;
    int decimal = 0;
    while (num)
    {
       int last_bit = num % 10;
        decimal = decimal + last_bit*weight;
        num = num / 10;
        weight = weight*2;
    }  
    return decimal;
}