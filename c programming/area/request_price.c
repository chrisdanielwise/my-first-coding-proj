#include <stdio.h>

// Write a program that requests a price and a discount percent. The program prints 
// the original price, the discount amount, and the amount the customer must pay

int main(){
    double price, discount, pay;
    printf("\nwhat is the original price of the iterm\n");
    scanf("%lf",&price);
    printf("\nThe price of the iterm is $%.2lf\n",price);
    scanf("%lf",&discount);
    printf("\nThe discount price of the iterm is : $%.2lf\n",discount);
    scanf("%lf",&pay);
    printf("\nThe customer must pay $%.2lf\n",pay);
}