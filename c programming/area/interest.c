#include <stdio.h>
//calculate interest and service charge for bank customer

int main(){
    int numTrans;
    char name[50], acc_num[30];
    double average, interest ,service;
    printf("\nwhat is your name?\n");
    gets(name);
    printf("\nwhat is your account number?\n");
    gets(acc_num);
    printf("\nHow many Transacitions have you done\n");
    scanf("%d",&numTrans);
    average = (numTrans*30)/30;
    interest = (average*6)/100;
    service = numTrans * 0.50;
    printf("\nYour monthly average is: %2.1lf\n",average);
    printf("And your service charge for %d transaction is $%.1lf",numTrans,service);
    printf("\nDear, %s your monthly interest from  %s is %3.1lf\n",name,acc_num,interest);
    
}